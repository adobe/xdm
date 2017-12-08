const $ = require("shelljs");

const schemas = $.find("schemas").filter(name => { return name.match(/.*\.schema\.json$/)});
const extensions = $.find("extensions").filter(name => { return name.match(/.*\.schema\.json$/)});

const examples = $.find("schemas").filter(name => { return name.match(/.*\.example\.[0-9]+\.json$/)});
const invalids = $.find("schemas").filter(name => { return name.match(/.*\.invalid\.[0-9]+\.json$/)});

const all = schemas.concat(extensions, examples, invalids);

var failures = 0;

all.forEach(json => {
  const pretty = $.exec("json-beautify -s 2 -f " + json, {silent: true}).stdout;
  const orig = $.exec("cat " + json, {silent: true});
  if (pretty!=orig) {
    failures++;
    console.warn(json + " is not pretty." );
    $.exec("json-beautify -r -s 2 -f " + json, {silent: true})
  }
});

$.exit(failures);