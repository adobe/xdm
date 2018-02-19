const $ = require("shelljs");
const fs = require("fs");

const schemas = $.find("schemas").filter(name => {
  return name.match(/.*\.schema\.json$/);
});
const extensions = $.find("extensions").filter(name => {
  return name.match(/.*\.schema\.json$/);
});

const examples = $.find("schemas").filter(name => {
  return name.match(/.*\.example\.[0-9]+\.json$/);
});
const invalids = $.find("schemas").filter(name => {
  return name.match(/.*\.invalid\.[0-9]+\.json$/);
});

const package = JSON.parse(fs.readFileSync("package.json", "utf8"));

let failures = 0;

if (schemas.length != package.config.schemas) {
  console.error(
    "Found " +
      schemas.length +
      " schemas but expected " +
      package.config.schemas +
      " for XDM version " +
      package.version
  );
  console.error(
    "Open package.json and increase the minor version number then update the config.schemas parameter to " +
      schemas.length
  );
  failures++;
}

const all = schemas.concat(extensions, examples, invalids);

schemas.forEach(schema => {
  const result = $.exec(
    "ajv validate --errors=text --all-errors -s meta.schema.json -d " + schema,
    { silent: true }
  );
  if (result.code != 0) {
    failures++;
    console.error(
      "Schema " + schema + " does not validate against meta.schema.json"
    );
    console.error(result.stderr);
    console.error(result.stdout);
  }
});

$.exit(failures);
