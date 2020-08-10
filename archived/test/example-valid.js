const assert = require("assert");
const $ = require("shelljs");
const Ajv = require("ajv");
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

let allSchemas = {};
const validator = new Ajv({
  "allErrors": true,
  "extendRefs": true //we need to change this to "fail" for cleaner schemas
});

describe("Loading of schemas", () => {
  //validator.addMetaSchema(JSON.parse(fs.readFileSync("meta.schema.json")));

  const ajv = new Ajv({
    "allErrors": true,
    "extendRefs": true //we need to change this to "fail" for cleaner schemas
  });
  
  ajv
    .addSchema(JSON.parse(fs.readFileSync("./schemas/common/descriptors/schemadescriptor.schema.json")))
    .addSchema(JSON.parse(fs.readFileSync("./schemas/common/descriptors/itemselector.schema.json")))
    .addSchema(JSON.parse(fs.readFileSync("./schemas/common/extensible.schema.json")))
    .addSchema(JSON.parse(fs.readFileSync("./meta.schema.json")));
  
  schemas.forEach(schema => {
    it("Loading " + schema, (done) => {
      assert.doesNotThrow(() => {
        fs.readFile(schema, 'utf8', function (err, data) {
          if (err) throw err;
          const mySchema = JSON.parse(data);
          allSchemas[schema] = mySchema;
          validator.addSchema(mySchema);

          assert.equal(ajv.validate("https://ns.adobe.com/xdm/meta", mySchema), true, "Schema is not valid according to meta.schema.json: " + ajv.errorsText());

          done();
        });
      });
    });
  });
});

describe("Validity of examples", () => {
  it("Are there schemas loaded?", () => {
    assert.notEqual(Object.keys(allSchemas).length, 0, "Schemas have been loaded");
  });

  schemas.forEach((schema) => {
    const directory = schema.replace(/\.schema\.json$/, "");

    const myExamples = examples.filter(example => {
      return example.indexOf(directory + ".example.") >= 0;
    });

    const myInvalids = invalids.filter(example => {
      return example.indexOf(directory + ".invalid.") >= 0;
    });

    myExamples.forEach((example) => {
      it("Validating " + example, (done) => {
        assert.doesNotThrow(() => {
          fs.readFile(example, 'utf8', function (err, data) {
            if (err) throw err;
            const json = JSON.parse(data);
            const result = validator.validate(allSchemas[schema], json);
            assert.equal(validator.errors, null, "Example is not valid\n" + validator.errorsText());
            done();
          });
        });
      });
    });

    myInvalids.forEach((example) => {
      it("Validating " + example, (done) => {
        assert.doesNotThrow(() => {
          fs.readFile(example, 'utf8', function (err, data) {
            if (err) throw err;
            const json = JSON.parse(data);
            const result = validator.validate(allSchemas[schema], json);
            assert.notEqual(validator.errors, null, "Invalid example passes");
            done();
          });
        });
      });
    });
  });
});
