const $ = require("shelljs");

const schemas = $.find("schemas").filter(name => { return name.match(/.*\.schema\.json$/)});
const extensions = $.find("extensions").filter(name => { return name.match(/.*\.schema\.json$/)});

const examples = $.find("schemas").filter(name => { return name.match(/.*\.example\.[0-9]+\.json$/)});
const invalids = $.find("schemas").filter(name => { return name.match(/.*\.invalid\.[0-9]+\.json$/)});

const invalid = [];

schemas.forEach(schema => {
  const directory = schema.replace(/\.schema\.json$/,"");

  const myExamples = examples.filter(example => {
    return example.indexOf(directory + ".example.") >= 0;
  });
  const myInvalids = invalids.filter(example => {
    return example.indexOf(directory + ".invalid.") >= 0;
  });

  if (myExamples.length==0) {
    console.warn(schema + " has no examples");
  } else {
    myExamples.forEach(example => {
      //console.log("Validating " + example + " against " + schema + " and " + (schemas.length - 1) + " other schemas");
      const result = $.exec("ajv validate --errors=text --all-errors -s " + schema + " -d " + example + " -r " + schemas.join(" -r "), {silent: true} );
      if (result.code!=0) {
        invalid.push({
          schema: schema,
          example: example,
          result: result
        });
        console.error("Example " + example + " does not validate against " + schema + " and " + (schemas.length - 1) + " other schemas");
        console.error(result.stderr);
        console.error(result.stdout);
      }
    });
  }

  myInvalids.forEach(example => {
    //console.log("Validating " + example + " against " + schema + " and " + (schemas.length - 1) + " other schemas");
    const result = $.exec("ajv validate --errors=text --all-errors -s " + schema + " -d " + example + " -r " + schemas.join(" -r "), {silent: true} );
    if (result.code==0) {
      invalid.push({
        schema: schema,
        example: example,
        result: result
      });
      console.error("Invalid example " + example + " validates against " + schema + " and " + (schemas.length - 1) + " other schemas");
      console.error(result.stderr);
      console.error(result.stdout);
    }
  });
});

if (invalid.length==0) {
  console.log("All examples validated.");
} else {
  console.error("There have been " + invalid.length + " validation errors");
}
$.exit(invalid.length);

