const assert = require('assert');

const $ = require("shelljs");

const schemas = $.find("schemas","components").filter(name => { return name.match(/.*\.schema\.json$/)});
const extensions = $.find("extensions").filter(name => { return name.match(/.*\.schema\.json$/)});

const examples = $.find("schemas","components").filter(name => { return name.match(/.*\.example\.[0-9]+\.json$/)});
const invalids = $.find("schemas","components").filter(name => { return name.match(/.*\.invalid\.[0-9]+\.json$/)});


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
