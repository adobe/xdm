#!/usr/bin/env node

const log = require('winston');
const program = require('commander');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const glob = require("glob");
const flattern = require('flat');
const getValue = require("get-value");
const setValue = require("set-value");
const hasValue = require("has-value");
const tagFile = "tags.json";
const rename = require('deep-rename-keys');
const camelCase = require('camelcase');

var myTags = null;
var dotPrefix = "";

program.version(0.1)
  .usage('[options] <api.json>')
  .option('-v, --verbose', 'verbose mode', false)
  .option('-i, --input <location>', 'location of the xdm input schemas. reads all json files recursively')
  .option('-j, --outputJson <directory>', 'output directory for xed JSON Schemas (use stdout if omitted).')
  .parse(process.argv);

if (program.args.length == 1) {
  // Load the JSON Schema source file
  var file = program.args[0];
  var rawSchema = JSON.parse(fs.readFileSync(file).toString());
  var tags = JSON.parse(fs.readFileSync(tagFile).toString());
  myTags = tags[rawSchema.$id+".schema.json"];
  //console.log("mytags---"+JSON.stringify(myTags));
  dotPrefix = refPrefix(rawSchema.$id);
  preProcess(rawSchema);
  updateTag(rawSchema);
  postCleanup(rawSchema);
  saveConfig(tagFile, rawSchema);
  console.log(JSON.stringify(rawSchema, null, 4));
}

if (program.input) {
  var input = path.normalize(program.input);
  glob(input + "/**/*.json", function(er, files) {
    files.forEach(function(file) {
      console.log('XED raw schema field tagging---->' + file);
      var rawSchema = JSON.parse(fs.readFileSync(file).toString());
      var tags = JSON.parse(fs.readFileSync(tagFile).toString());
      myTags = tags[rawSchema.$id+".schema.json"];
      dotPrefix = refPrefix(rawSchema.$id);
      preProcess(rawSchema);
      updateTag(rawSchema);
      postCleanup(rawSchema);
      saveConfig(tagFile, rawSchema);
      if (program.outputJson) { //dump to output folders when tagging done
        var outfile = file.replace(input, program.outputJson);
        save(outfile, JSON.stringify(rawSchema, null, 4));
      }
    });
  });
};


function checkNested(obj) {
  for (var i in obj)
    if (typeof(obj[i]) == "object" && Object.prototype.toString.call(obj[i]) != "[object Array]") return true
  return false;
};


function addObjType(o) { //work around for parent node with only nested objs by adding nestedObj
  if (checkNested(o)) o.nested4proto = true;
  for (var i in o) {
    if (o[i] !== null && typeof(o[i]) == "object") addObjType(o[i]);
  }
};

function postCleanup(o) { //work around for parent node with only nested objs by adding nestedObj
  for (var i in o) {
    if (i == "nested4proto" || i == "meta:enum") delete o[i];
    if (o[i] !== null && typeof(o[i]) == "object") {
      //going one step down in the object tree!!
      postCleanup(o[i]);
    }
  }
};

function initTargetTags(flatObj) {
  var targetTags = {};
  for (var i in flatObj) //initialize target tags
    if (i.indexOf("properties.") == -1 ||
      i.indexOf(".enum.") != -1 ||
      i.indexOf(".examples.") != -1 ||
      i.indexOf(".required.") != -1 ||
      i.indexOf(".properties.nested4proto") != -1)
      delete flatObj[i]; //remove non tagging related keys
    else {
      var tokens = i.split(".")
      if (tokens.indexOf("meta:enum") == -1) { //keep meta:enum key as is
        tokens.pop() //remove leaf node which is NOT parent.
      }
      var key = tokens.join(".")
      targetTags[key] = (key.indexOf("meta:enum") != -1) ? -1 : 0;
    }; //done target tag initialization

  if (targetTags.properties == 0) delete targetTags.properties
  return targetTags;
};

function getMaxTag(queryKey, tagsMap) {
  //console.log("inside gettag with tagMap--"+JSON.stringify(tagsMap))
  var maxtag = -1;
  for (var i in tagsMap)
    if (queryKey.substring(0, queryKey.lastIndexOf(".")) == i.substring(0, i.lastIndexOf(".")))
      maxtag = (tagsMap[i] > maxtag) ? tagsMap[i] : maxtag;
  return maxtag;
};

function refPrefix(tagKey) {
    var str = "";
    for (var i = 0; i < tagKey.split("/").length - 1; i++) str = str + "../";
    return str;
};


function preProcess(o) { //handle $ref dot prefix
  for (var i in o) {
    if (i == "$id") o[i] = o[i] + ".schema.json";
    if (i == "$ref") o[i] = dotPrefix +  o[i] + ".schema.json";

    if (o[i] !== null && typeof(o[i]) == "object") {
      //going one step down in the object tree after key rename!!
      preProcess(o[i]);
    }
  }
};

function updateTag(o) {
  if (!myTags) { //schema tags donot exist, seed tags
    //console.log("no exsting schema tags config file")
    var propTag = 1;
    for (var i in o) {
      //add tagging to properties and enums
      if (!o.$id && typeof(o[i]) == "object" && Object.prototype.toString.call(o[i]) != "[object Array]") { //not tagging for root section and array objs
        if (i != "meta:enum") { //property tagging
          if (i != "properties") {
            //console.log("i am: "+i+" with values: "+o[i]+" tag:"+propTag)
            o[i].tagNumber = propTag;
            propTag = propTag + 1;
          }
        } else { //enum tagging
          var enumTag = 0;
          var enums = o[i];

          o["enumValues"] = [];
          for (var j in enums) {
            o["enumValues"].push({
              [j]: {
                "title": enums[j],
                "tagNumber": enumTag
              }
            });
            enumTag = enumTag + 1;
          }
          delete(o[i]); //remove meta:enum
        }
      }

      if (o[i] !== null && typeof(o[i]) == "object" && Object.prototype.toString.call(o[i]) != "[object Array]") {
        //console.log("nested into --->"+i)
        updateTag(o[i]); //going one step down in the object tree!!
      }
    }
  } else { //schema tag exists, update tags
    //console.log("myTags-->" + JSON.stringify(myTags))
    addObjType(o); //workaround to added nested4proto=true to nested structures
    var flatObj = flattern(o);
    //console.log("flatobj-->"+JSON.stringify(flatObj));
    var targetTags = initTargetTags(flatObj);
    //console.log("target tags-->" + JSON.stringify(targetTags))

    for (var j in targetTags) {
      if (j.indexOf("meta:enum") != -1) { //enum tagging
        //console.log("--enum handling--j---" + j)
        var enumQuery = j.replace("meta:enum", "enumValues");
        var enumTokens = enumQuery.split(".");
        var enumKey = enumTokens.pop();
        var enumField = enumTokens.join(".")
        //console.log("--enumField---" + enumField);
        //console.log("--enumKey---" + enumKey);

        if (myTags[enumQuery] >= 0) { //found enum tags from config
          if (hasValue(o, enumField)) {
            //console.log("enumValues arrays exist");
            var enumValues = getValue(o, enumField);
            //console.log("---enumValues bf added-" + JSON.stringify(enumValues))
            enumValues.push({
              [enumKey]: {
                "title": getValue(o, j),
                "tagNumber": myTags[enumQuery]
              }
            });
            setValue(o, enumField, enumValues);
            //console.log("---enumValues added-" + JSON.stringify(enumValues))
          } else {
            //console.log("no enumValues arrays exist")
            var enumValues = [];
            enumValues.push({
              [enumKey]: {
                "title": getValue(o, j),
                "tagNumber": myTags[enumQuery]
              }
            });
            setValue(o, enumField, enumValues);
            //console.log("---enumValues added-" + JSON.stringify(enumValues))
          }
        } else { //generate enum tags
          var preEnumTag1 = getMaxTag(enumQuery, myTags);
          var preEnumTag2 = getMaxTag(j, targetTags);
          //console.log("pretag1, pretag2-->",preEnumTag1,preEnumTag2)
          var tagnum = (preEnumTag1 != -1) && (preEnumTag1 > preEnumTag2) ? preEnumTag1 + 1 : preEnumTag2 + 1;
          targetTags[j] = tagnum;

          if (hasValue(o, enumField)) {
            //console.log("enumValues arrays exist");
            var enumValues = getValue(o, enumField);
            //console.log("---enumValues bf added-" + JSON.stringify(enumValues))
            enumValues.push({
              [enumKey]: {
                "title": getValue(o, j),
                "tagNumber": targetTags[j]
              }
            });
            setValue(o, enumField, enumValues);
            //console.log("---enumValues added-" + JSON.stringify(enumValues))
          } else {
            //console.log("no enumValues arrays exist")
            var enumValues = [];
            enumValues.push({
              [enumKey]: {
                "title": getValue(o, j),
                "tagNumber": targetTags[j]
              }
            });
            setValue(o, enumField, enumValues);
            //console.log("---enumValues added-" + JSON.stringify(enumValues))
          }
        };
      } else { //non enum tagging
        //console.log("set tag for -->" + j);
        if (myTags[j]) { //found tag from tag config
          //console.log("found tag value for " + j + " " + myTags[j]);
          targetTags[j] = myTags[j];
          setValue(o, j + ".tagNumber", targetTags[j]);
        } else { //generate new tag, then set value
          //console.log("not found tag for "+j+ "generate new one!!");
          var previousTag1 = getMaxTag(j, myTags);
          var previousTag2 = getMaxTag(j, targetTags);
          var tagnum = (previousTag1 != -1 && previousTag1 > previousTag2) ? previousTag1 + 1 : previousTag2 + 1;
          targetTags[j] = tagnum;
          setValue(o, j + ".tagNumber", targetTags[j]);
        }
      }
    }

  }
};

function saveConfig(configFile, schema) {
  var tagConfig = JSON.parse(fs.readFileSync(configFile).toString());
  var flatSchema = flattern(schema);
  var id = flatSchema.$id;
  tagConfig[id] = {};
  for (var i in flatSchema) {
    if (i.indexOf("tagNumber") != -1) {
      if (i.indexOf("enumValues") == -1) key = i.replace(".tagNumber", "")
      else {
        key = i.replace(".tagNumber", "");
        key = key.substring(0, key.indexOf("enumValues") + 10) + key.substring(key.lastIndexOf("."));
      }
      tagConfig[id][key] = flatSchema[i];
    }
  }

  save(configFile, JSON.stringify(tagConfig, null, 4));

};

function save(filename, schema) {
  log.verbose("Saving %s...", filename);
  fse.mkdirsSync(path.dirname(filename));
  fs.writeFileSync(filename, schema, 'utf8');
}
