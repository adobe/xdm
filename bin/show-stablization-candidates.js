#!/usr/local/bin/node

/**
 * Generate list of schemas that are candidates for being marked `stable`.
 * Steps:
 *   (1) Get current status value
 *   (2) Determine date from which status was last changed
 *   (3) Obtain all revisions since the status was updated
 *   (4) Determine date from the last non-trivial change
 *   (5) Build output in markdown format
 */

const path = require('path')
const fs = require('fs')
const $ = require("shelljs")

const META_STATUS = "meta:status"
const TRIVIAL_CHANGE_MATCHERS = ["\\[.*trivial.*\\]","\\[.*ci skip.*\\]"]
const LOG_ENABLED = (process.argv.indexOf("--debug") > -1)

function logDebug(message) {
  if (LOG_ENABLED) { console.log(message) }
}

function getListOfSchemas() {
  return schemas = $.find("schemas").filter(name => { return name.match(/.*\.schema\.json$/)})
}

function execp(command) {
  return $.exec(command, { silent: true }).stdout
}

// Pull the current _local_ value of `meta:status` for a given schema
function getStatusOfSchema(schema) {
  let status = 'unknown'
  try {
    let obj = JSON.parse(fs.readFileSync(schema, 'utf8'))
    status = obj[META_STATUS]
  } catch (e) {
    logDebug(`ERROR: Failed to parse JSON file ${schema} : ${e}`)
  }
  return status
}

// Determine the git commit revision for a given schema's `meta:status`
function getGitState(schema) {
  let status = getStatusOfSchema(schema)
  logDebug(`\t-> ${status} -- ${schema}`)
  let git_output = execp(`git log -1 --decorate=auto --oneline -S ${META_STATUS} ${schema}`)
  let git_commits = git_output.trim().split('\n')
  logDebug(`\t\tGit State Commit: ${git_output.trim()}`)
  let git_latest_revision = git_commits[0]
  let commit_raw = git_latest_revision.split(' ')
  let commit_rev = commit_raw[0]
  let commit_msg = commit_raw.splice(1).join(' ')
  let commit_date = new Date(execp(`git log -1 -s --format=%ct ${commit_rev}`)*1000)
  return {
    commits: getSchemaChangesSinceRevision(schema, commit_rev),
    latest: {
      status: status,
      revision: commit_rev,
      message: commit_msg,
      date: commit_date
    }
  }
}

// Helper method to determine whether a commit message contains non-trivial qualifiers
function signifiesTrivialChange(message) {
  let regex = new RegExp(TRIVIAL_CHANGE_MATCHERS.join('|'))
  let isTrivial = regex.test(message)
  return isTrivial
}

// Create a detailed list of all revisions to a schema since a specific revision
function getSchemaChangesSinceRevision(schema, revision) {
  let commits = []
  let git_output = execp(`git rev-list ${revision}^..HEAD ${schema}`)
  let git_revisions = git_output.trim().split('\n')
  logDebug(`\t\tGit Revisions: ${JSON.stringify(git_revisions)}`)
  for (idx in git_revisions) {
    let rev_id = git_revisions[idx]
    let rev_desc = (execp(`git log -1 --decorate=auto --oneline ${rev_id}`)).trim()
    let rev_msg = rev_desc.split(' ').splice(1).join(' ')
    let rev_date = new Date(execp(`git log -1 -s --format=%ct ${rev_id}`)*1000)
    commits.push({
      id: rev_id,
      desc: rev_desc,
      msg: rev_msg,
      date: rev_date,
      trivial: signifiesTrivialChange(rev_msg)
    })
  }
  return commits
}

// Build markdown header
function buildHeader() {
  return `# Stabilization Candidates\n_Generated on **${(new Date()).toString()}**_`
}

// Build markdown footer
function buildFooter() {
  return ``
}

// Build full markdown document
function buildOutputBody(content) {
  return `${buildHeader()}\n${content}\n${buildFooter()}`
}

// Build markdown log
//   NOTE: Markdown table cells require all content on one-line, with code formatting + newlines be provided via html 
function buildGitLog(commits) {
  let log = ''
  for (idx in commits) {
    let item = commits[idx]
    if (log.length > 0) {
      log += "<br>"
    }
    log += item.desc
  }
  return `<code>${log.trim()}</code>`
}

// Generate markdown table for all schemas + revision details
function generateMarkdownTable(schemaDetailMap) {
  let keys = Object.keys(schemaDetailMap).sort()
  let md = '|Schema|Status|Status Modified Date|Last Non-trivial Change|Raw Commit Log Since Status Change|\n' +
           '|------|------|--------------------|-----------------------|----------------------------------|\n'
  for (idx in keys) {
    let schema = keys[idx]
    let details = schemaDetailMap[schema]
    let date_state = details.latest.date
    let date_nontrivial = date_state
    for (cidx in details.commits) {
      let commit = details.commits[cidx]
      if (!commit.trivial && commit.date > date_nontrivial) {
        date_nontrivial = commit.date
      }
    }
    md += `|${schema}|${details.latest.status}|${date_state}|${date_nontrivial}|${buildGitLog(details.commits)}|\n`
  }
  return md
}

// Main entrypoint
function main() {
  let schemaDetailMap = {}
  
  // Get list of schemas
  let foundSchemas = getListOfSchemas()
  logDebug(`Found ${foundSchemas.length} schemas`)
  
  // Analyze each schema
  for (idx in foundSchemas) {
    let schema = foundSchemas[idx]
    schemaDetailMap[schema] = getGitState(schema)
  }

  logDebug(`Found schema details: ${JSON.stringify(schemaDetailMap, null, '\t')}`)
  
  // Build table rows for each schema generate output in markdown format
  let schemaTable = generateMarkdownTable(schemaDetailMap)
  console.log(buildOutputBody(schemaTable))
}

main()
