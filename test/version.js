const $ = require("shelljs");
const fs = require("fs");
const assert = require('assert');

const schemas = $.find("schemas").filter(name => {
  return name.match(/.*\.schema\.json$/);
});

const package = JSON.parse(fs.readFileSync("package.json", "utf8"));

describe("package.json version", () => {
  it("config.schemas in package.json is up-to-date", () => {
    assert.equal(schemas.length, package.config.schemas, "Open package.json and increase the minor version number then update the config.schemas parameter to " +
    schemas.length);
  })
});
