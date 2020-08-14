const assert = require('assert');

const $ = require("shelljs");

const schemas1 = $.find("schemas").filter(name => { return name.match(/.*\.schema\.json$/)});
const schemas2 = $.find("components").filter(name => { return name.match(/.*\.schema\.json$/)});
const schemas = schemas1.concat(schemas2);
const extensions = $.find("extensions").filter(name => { return name.match(/.*\.schema\.json$/)});

const examples = $.find("schemas").filter(name => { return name.match(/.*\.example\.[0-9]+\.json$/)});
const invalids1 = $.find("schemas").filter(name => { return name.match(/.*\.invalid\.[0-9]+\.json$/)});
const invalids2 = $.find("components").filter(name => { return name.match(/.*\.invalid\.[0-9]+\.json$/)});
const invalids = invalids1.concat(invalids2);

describe("Presence of invalids", () => {
  schemas.forEach(schema => {
    it(schema + " has at least one invalid example", () => {
      const directory = schema.replace(/\.schema\.json$/,"");
      
      const myInvalids = invalids.filter(example => {
        
        return example.indexOf(directory + ".example.") >= 0;
      });
      assert.notEqual(myInvalids.length, -1, "Every schema needs at least one invalid example.");
    });
  });
});
