const assert = require('assert');

const $ = require("shelljs");

const schemas1 = $.find("schemas").filter(name => { return name.match(/.*\.schema\.json$/)});
const schemas2 = $.find("components").filter(name => { return name.match(/.*\.schema\.json$/)});
const schemas = schemas1.concat(schemas2)
const extensions = $.find("extensions").filter(name => { return name.match(/.*\.schema\.json$/)});

const examples1 = $.find("schemas").filter(name => { return name.match(/.*\.example\.[0-9]+\.json$/)});
const examples2 = $.find("components").filter(name => { return name.match(/.*\.example\.[0-9]+\.json$/)});
const examples = examples1.concat(examples2);
const invalids = $.find("components").filter(name => { return name.match(/.*\.invalid\.[0-9]+\.json$/)});


describe("Presence of examples", () => {
  schemas.forEach(schema => {
    it(schema + " has at least one example", () => {
      const directory = schema.replace(/\.schema\.json$/,"");
      
      const myExamples = examples.filter(example => {
        
        return example.indexOf(directory + ".example.") >= 0;
      });
      assert.notEqual(myExamples.length, 0, "Every schema needs at least one example.");
    });
  });
});
