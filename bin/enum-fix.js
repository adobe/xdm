#!/usr/bin/env node
const fs = require('fs');
const glob = require('glob');
const schemaFolder = "../schemas";
const componentFolder = "../components";
const extensionFolder = "../extensions";
var schemaFiles = glob.sync(schemaFolder + '/**/*.schema.json');
schemaFiles = schemaFiles.concat(glob.sync(extensionFolder + "/**/*.schema.json"));
schemaFiles = schemaFiles.concat(glob.sync(componentFolder + "/**/*.schema.json"));
var isMissingEnum = false;

function process(o, file) {
    for (let i in o) {
        if (o[i] !== null && typeof(o[i]) == 'object') {
            //going one step down in the object tree!!
            process(o[i], file);
        }


        if (o[i] && o[i].hasOwnProperty('enum') && o[i].hasOwnProperty('meta:enum')) {
          var enumSet = new Set();
          var metaEnumSet = new Set();

          for (let j in o[i]["enum"]) {
            enumSet.add(o[i]["enum"][j])
          }

          for (let k in o[i]["meta:enum"]) {
            metaEnumSet.add(k)
          }
          //console.log('enum element -> ' + Array.from(enumSet.values()));
          //console.log('meta:enum element-> ' + Array.from(metaEnumSet.values()));

          const eqSet = (xs, ys) =>
          xs.size === ys.size && [...xs].every((x) => ys.has(x));
          //console.log('match enums? ' + eqSet(enumSet, metaEnumSet));

          if (!eqSet(enumSet, metaEnumSet)) {
            console.log(file + ',' + i + ',' +  "mismatch between enum and meta:enum");
          }
        } else if (o[i] && o[i].hasOwnProperty('enum') && !o[i].hasOwnProperty('meta:enum')) {
          console.log(file + ',' + i + ',' + 'mising meta:enum');
          isMissingEnum = true;
          o[i]["meta:enum"] = {};
          for (let l in o[i]["enum"]) {
            o[i]["meta:enum"][o[i]["enum"][l]] = key = o[i]["enum"][l];//add meta:enum
          }
        } else  {
          null
        }
    }
}


function enumFix(files) {
    files.forEach(function (file) {
      if (file.indexOf("../schemas/descriptors/") == -1) {
        var originalSchema = JSON.parse(fs.readFileSync(file).toString());
        //console.log('enumFix: ' + file);
        if ((originalSchema.$id == undefined) && (originalSchema.id == undefined)) {
            console.log(JSON.stringify(originalSchema,null,2));
            throw('Invalid file for docfix!');
        }
        process(originalSchema, file);
        if (isMissingEnum) {
          fs.writeFileSync(file, JSON.stringify(originalSchema,null, 2), 'utf8');
          isMissingEnum = false;
        }
      }
    });
}

enumFix(schemaFiles);
