#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const Ajv = require('ajv');

// Cache for fetched remote schemas
const remoteSchemaCache = new Map();

/**
 * Fetch a remote schema via HTTP/HTTPS
 */
function fetchRemoteSchema(url) {
  return new Promise((resolve, reject) => {
    // Check cache first
    if (remoteSchemaCache.has(url)) {
      return resolve(remoteSchemaCache.get(url));
    }

    const protocol = url.startsWith('https:') ? https : http;

    protocol.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to fetch ${url}: HTTP ${res.statusCode}`));
      }

      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const schema = JSON.parse(data);
          remoteSchemaCache.set(url, schema);
          resolve(schema);
        } catch (e) {
          reject(new Error(`Failed to parse JSON from ${url}: ${e.message}`));
        }
      });
    }).on('error', (e) => {
      reject(new Error(`Failed to fetch ${url}: ${e.message}`));
    });
  });
}

/**
 * Recursively find all JSON files in a directory
 */
function findJsonFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    // Skip .git and docs directories
    if (file === '.git' || file === 'docs') {
      return;
    }

    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findJsonFiles(filePath, fileList);
    } else if (file.endsWith('.json')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Build a map of $id to schema file paths by searching parent directories
 */
function buildSchemaMap(targetDir, searchRoot) {
  const schemaMap = new Map();
  const allFiles = findJsonFiles(searchRoot);
  
  allFiles.forEach(filePath => {
    if (filePath.endsWith('.schema.json')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const schema = JSON.parse(content);
        
        if (schema.$id) {
          schemaMap.set(schema.$id, {
            path: filePath,
            schema: schema
          });
        }
      } catch (error) {
        console.error(`Error reading schema file ${filePath}:`, error.message);
      }
    }
  });
  
  return schemaMap;
}

/**
 * Find all example files recursively
 */
function findExampleFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findExampleFiles(filePath, fileList);
    } else if (file.match(/\.example\.\d+\.json$/)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Validate examples against their schemas
 */
async function validateExamples(targetDir, schemaMap) {
  const results = {
    total: 0,
    passed: 0,
    failed: 0,
    errors: [],
    remoteFetches: 0
  };

  // Find all example files recursively
  const examplePaths = findExampleFiles(targetDir);

  for (const examplePath of examplePaths) {
    // Find corresponding schema file
    const exampleFile = path.basename(examplePath);
    const schemaFile = exampleFile.replace(/\.example\.\d+\.json$/, '.schema.json');
    const schemaPath = path.join(path.dirname(examplePath), schemaFile);

    if (!fs.existsSync(schemaPath)) {
      results.errors.push({
        file: exampleFile,
        error: `Schema file not found: ${schemaFile}`
      });
      results.total++;
      results.failed++;
      continue;
    }

    try {
      const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
      const example = JSON.parse(fs.readFileSync(examplePath, 'utf8'));

      // Create AJV instance with custom schema loader
      const ajv = new Ajv({
        allErrors: true,
        verbose: true,
        v5: true,
        loadSchema: async (uri) => {
          // First check if it's in our local schema map
          if (schemaMap.has(uri)) {
            return schemaMap.get(uri).schema;
          }

          // Try to fetch remotely
          try {
            console.log(`  Fetching remote schema: ${uri}`);
            results.remoteFetches++;
            return await fetchRemoteSchema(uri);
          } catch (e) {
            throw new Error(`Cannot resolve schema ${uri}: ${e.message}`);
          }
        }
      });

      // Add all schemas from the map to AJV
      schemaMap.forEach((value, key) => {
        try {
          ajv.addSchema(value.schema, key);
        } catch (e) {
          // Schema might already be added or have issues
        }
      });

      // Compile and validate (use compileAsync to support loadSchema)
      let validate;
      try {
        validate = await ajv.compileAsync(schema);
      } catch (compileError) {
        results.errors.push({
          file: exampleFile,
          error: `Schema compilation error: ${compileError.message}`,
          details: compileError
        });
        results.total++;
        results.failed++;
        continue;
      }
      
      const valid = validate(example);
      results.total++;
      
      if (!valid) {
        results.failed++;
        
        // Analyze errors to provide helpful information
        const errorDetails = validate.errors.map(err => {
          let message = `  - Path: ${err.dataPath || err.instancePath || '(root)'}`;

          if (err.keyword === 'required') {
            message += `\n    Missing required field: ${err.params.missingProperty}`;
            message += `\n    Schema path: ${err.schemaPath}`;
          } else if (err.keyword === 'additionalProperties') {
            message += `\n    Additional property not allowed: ${err.params.additionalProperty}`;
            message += `\n    Schema path: ${err.schemaPath}`;
          } else if (err.keyword === 'type') {
            message += `\n    Expected type: ${err.params.type}, got: ${typeof err.data}`;
            if (err.data !== null && typeof err.data === 'object' && !Array.isArray(err.data)) {
              message += `\n    Actual value keys: ${Object.keys(err.data).slice(0, 5).join(', ')}${Object.keys(err.data).length > 5 ? '...' : ''}`;
            } else if (typeof err.data === 'string') {
              message += `\n    Actual value: "${err.data.substring(0, 50)}${err.data.length > 50 ? '...' : ''}"`;
            }
            message += `\n    Schema path: ${err.schemaPath}`;
          } else if (err.keyword === 'enum') {
            message += `\n    Value "${err.data}" must be one of: ${err.params.allowedValues.join(', ')}`;
            message += `\n    Schema path: ${err.schemaPath}`;
          } else {
            message += `\n    ${err.keyword}: ${err.message}`;
            if (err.params) {
              message += `\n    Params: ${JSON.stringify(err.params, null, 2)}`;
            }
            message += `\n    Schema path: ${err.schemaPath}`;
          }

          return message;
        });
        
        results.errors.push({
          file: exampleFile,
          schema: schemaFile,
          errors: errorDetails,
          errorCount: validate.errors.length
        });
      } else {
        results.passed++;
      }
      
    } catch (error) {
      results.errors.push({
        file: exampleFile,
        error: `Error processing file: ${error.message}`
      });
      results.total++;
      results.failed++;
    }
  }

  return results;
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);

  // Default to validating components, extensions, and schemas directories
  const defaultDirs = ['components', 'extensions', 'schemas'];
  const targetDirs = args.length > 0 ? args : defaultDirs;

  // Validate that all target directories exist
  const validDirs = targetDirs.filter(dir => {
    if (!fs.existsSync(dir)) {
      console.warn(`Warning: Directory not found: ${dir}`);
      return false;
    }
    return true;
  });

  if (validDirs.length === 0) {
    console.error('Error: No valid directories to validate');
    process.exit(1);
  }

  console.log(`\n${'='.repeat(80)}`);
  console.log(`Validating schemas in: ${validDirs.join(', ')}`);
  console.log(`${'='.repeat(80)}\n`);

  // Find the repository root (current directory when run as npm script)
  const repoRoot = process.cwd();
  console.log(`Repository root: ${repoRoot}\n`);

  // Build schema map (always search entire repo for schema references)
  console.log('Building schema map...');
  const schemaMap = buildSchemaMap(null, repoRoot);
  console.log(`Found ${schemaMap.size} schemas\n`);

  // Validate examples in each directory
  console.log('Validating examples...\n');
  const allResults = {
    total: 0,
    passed: 0,
    failed: 0,
    errors: [],
    remoteFetches: 0
  };

  for (const dir of validDirs) {
    const results = await validateExamples(dir, schemaMap);
    allResults.total += results.total;
    allResults.passed += results.passed;
    allResults.failed += results.failed;
    allResults.errors.push(...results.errors);
    allResults.remoteFetches += results.remoteFetches;
  }

  // Print results
  console.log(`\n${'='.repeat(80)}`);
  console.log('VALIDATION RESULTS');
  console.log(`${'='.repeat(80)}\n`);
  console.log(`Total examples: ${allResults.total}`);
  console.log(`Passed: ${allResults.passed}`);
  console.log(`Failed: ${allResults.failed}`);
  if (allResults.remoteFetches > 0) {
    console.log(`Remote schemas fetched: ${allResults.remoteFetches}`);
  }
  console.log('');

  if (allResults.errors.length > 0) {
    console.log(`${'='.repeat(80)}`);
    console.log('ERRORS');
    console.log(`${'='.repeat(80)}\n`);

    allResults.errors.forEach((error, index) => {
      console.log(`${index + 1}. ${error.file}`);
      if (error.schema) {
        console.log(`   Schema: ${error.schema}`);
      }
      if (error.error) {
        console.log(`   Error: ${error.error}`);
      }
      if (error.errors) {
        console.log(`   Validation errors (${error.errorCount}):`);
        error.errors.forEach(err => console.log(err));
      }
      console.log('');
    });
  }

  process.exit(allResults.failed > 0 ? 1 : 0);
}

main();

