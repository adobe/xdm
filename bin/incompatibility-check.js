#!/usr/bin/env node

/*
1.The script will check breaking changes as mentioned below and throw out errors to fail the build if needed
-when an existing schema file got removed (rename a file will be breaking change in this case).
-when an field got removed from the schema
-when a field's data type got changed
-when a field's format got changed
-when a field's minimum got changed to higher value
-when a field's maximum got changed to lower value
-when the value of $ref is changed
-when a $ref got removed from allOf
-when a new key's lowercase is the same as existing non-deprecated key's lowercase in the same level

2.The script will only generate warning messages for cases below.
-when the meta:extends does not match allOf

3.The script will also do some extra validation such as non existing required fields, missing object type for properties etc..
*/

const fs = require('fs');
const glob = require("glob");
const shell = require('shelljs');
const diff = require('deep-diff');
const jsonValidator = require('json-dup-key-validator');
const mergeAllOf = require('json-schema-merge-allof');
const deref = require('json-schema-deref-sync');
const masterCopyLoc = "../tempmaster/";
const masterSchemaFolder = masterCopyLoc + "schemas";
const masterComponentFolder = masterCopyLoc + "components";
const masterExtensionFolder = masterCopyLoc + "extensions";
const ignoredForRequiredValidation =
    ["../schemas/descriptors/display/alternateDisplayInfo.schema.json",
        "../schemas/descriptors/display/descriptorMetaEnumRemove.schema.json",
    "../schemas/descriptors/identity/descriptorIdentity.schema.json",
    "../schemas/descriptors/identity/descriptorReferenceIdentity.schema.json",
    "../schemas/descriptors/status/descriptorDeprecated.schema.json",
        "../schemas/descriptors/status/descriptorDuplicationExclusions.schema.json",
    "../schemas/descriptors/primarykey/descriptorPrimaryKey.schema.json",
    "../schemas/descriptors/version/descriptorVersion.schema.json",
    "../extensions/adobe/experience/audiencemanager/segmentfolder.schema.json",
    "../components/classes/experienceevent.schema.json",
    "../components/classes/segmentdefinition.schema.json",
    "../extensions/adobe/experience/decisioning/decisionevent.schema.json"
    ];
const ignoredForIdValidation =
    ["../extensions/adobe/experience/journeyOrchestration/journeyOrchestrationServiceEventsSegmentExportJob.schema.json"
    ];
const ignoredForOpenObjectValidation =
    ["../schemas/descriptors/display/alternateDisplayInfo.schema.json",
      "../schemas/descriptors/display/descriptorMetaEnumRemove.schema.json",
    "../schemas/descriptors/itemselector.schema.json",
    "../extensions/adobe/experience/target/activity/activityevent/eventscope.schema.json",
    "../components/datatypes/extensible.schema.json",
    "../components/datatypes/external/repo/common.schema.json"
    ];
const ignoredForDuplicateKeyValidation =
    ["xdm:poidetail",
        "xdm:poiid"
    ];

shell.rm("-rf", masterCopyLoc); //start
if (shell.exec('git clone https://github.com/adobe/xdm.git ' + masterCopyLoc).code !== 0) {
    shell.echo('Error: Git clone master branch failed');
    shell.exit(1);
}

var jsonDataTypes = ["string", "number", "integer", "array", "object", "boolean"];
var jsonStringFormats = ["date-time", "time", "date", "email", "idn-email", "ipv4", "ipv6", "uri", "uri-reference", "iri", "iri-reference", "uri-template", "json-pointer", "relative-json-pointer", "regex"];
var schemaFiles = glob.sync(masterSchemaFolder + "/**/*.schema.json");
schemaFiles = schemaFiles.concat(glob.sync(masterExtensionFolder + "/**/*.schema.json"));
schemaFiles = schemaFiles.concat(glob.sync(masterComponentFolder + "/**/*.schema.json"));

var workingFiles = glob.sync(masterSchemaFolder.replace(masterCopyLoc, "../") + "/**/*.schema.json");
workingFiles = workingFiles.concat(glob.sync(masterExtensionFolder.replace(masterCopyLoc, "../") + "/**/*.schema.json"));
workingFiles = workingFiles.concat(glob.sync(masterComponentFolder.replace(masterCopyLoc, "../") + "/**/*.schema.json"));

var errLogs = [];
checkBreakingChanges(schemaFiles);
validateSchemas(workingFiles);
if (errLogs.length > 0) {
    createError(errLogs.join(""));
}
shell.rm("-rf", masterCopyLoc); //done

function checkBreakingChanges(files) {
    files.forEach(function (file) {
        var err;
        console.log('Check breaking changes -->' + file.replace(masterCopyLoc,"../"));
        var originalSchema = JSON.parse(fs.readFileSync(file).toString());
        var workingFile = file.replace("tempmaster/", "");

        try { //check if schema file got removed
            var newSchema = JSON.parse(fs.readFileSync(workingFile).toString());
        } catch (err) {
            if (err.code = "ENOENT" && err.message.indexOf("ENOENT: no such file or directory") != -1)
                errLogs.push(workingFile+" breaking changes found!!! --> " + workingFile.replace("../", "") + " can not be removed.\n");
            else
                errLogs.push(workingFile+err+"\n"); //raise other validation errors
        }

        if (newSchema) {
            var allOfCheck = isAllOfBroken(originalSchema["allOf"], newSchema["allOf"]); //check deleted allOfs
            if (originalSchema["allOf"] && allOfCheck.isBroken) {
                errLogs.push(workingFile+' breaking changes found!!! {"$ref": "' + allOfCheck["$ref"] + '"} inside "allOf" can not be removed.\n');
            }

            if (newSchema["meta:extends"] && Array.isArray(newSchema["meta:extends"]) && isMetaExtendsBroken(newSchema["meta:extends"], newSchema["allOf"])) { //check meta:extends against allOf
                //no warning for now to make logging clean
                //console.log('Warning: Incompatible "meta:extends" vs "allOf" found!!! The schemas inside "meta:extends" did not match those in "allOf".')
            }

            var differences = diff(originalSchema, newSchema);
            var brokenProperty = {};
            if (differences) {
                if (isPropertyRemoved(differences, brokenProperty)) { //check removed properties
                    errLogs.push(workingFile+' breaking changes found!!! Property "' + brokenProperty.name + '" can not be removed.\n');
                }

                if (isPropertyChanged(differences, brokenProperty)) { //check changed properties
                    if (brokenProperty.isFieldTypeBroken) {
                        errLogs.push(workingFile+' breaking changes found!!! Data type of property "' + brokenProperty.name + '" can not be changed.\n');
                    }
                    if (brokenProperty.isStringFormatBroken) {
                        errLogs.push(workingFile+' breaking changes found!!! String format of property "' + brokenProperty.name + '" can not be changed.\n');
                    }
                    if (brokenProperty.isMinimumBroken) {
                        errLogs.push(workingFile+' breaking changes found!!! Minimum number of property "' + brokenProperty.name + '" can not be changed to greater than original value.\n');
                    }
                    if (brokenProperty.isMaximumBroken) {
                        errLogs.push(workingFile+' breaking changes found!!! Maximum number of property "' + brokenProperty.name + '" can not be changed less than original value.\n');
                    }
                }

                if (isDuplicatedKey(differences, brokenProperty, newSchema)) { //check duplicated lowercase keys
                    errLogs.push(workingFile+' duplicated key found!!! Property "' + brokenProperty.name + '" can not be added as its lowercase is a duplicate key already.\n');
                }
            };
        }
    });
}

function validateSchemas(files) {
    files.forEach(function (file) {
        console.log('Validate schema -->' + file);
        var schema = JSON.parse(fs.readFileSync(file).toString());
        if (schema.hasOwnProperty('definitions')) {//for special cases such as definitions referenced in the schema outside of allOf section
            for (var i in schema.definitions) {
                if (schema.definitions[i] && schema.definitions[i].hasOwnProperty('properties') && !(schema.definitions[i].type == 'object'))
                    schema.definitions[i].type = 'object'
            }
        }
        var schema4Validation =  mergeAllOf(deref(schema),{
            resolvers: {
                defaultResolver: function(values) {
                    var valueList = [];
                    for (var i in values)
                      valueList = valueList.concat(values[i]);
                    if (valueList.length >1 )
                      return Array.from(new Set(valueList));
                  }
            }
        });
        delete schema4Validation.definitions;
        validate(schema4Validation, file);
    });

}

function isAllOfBroken(origAllOf, newAllOf) {
    var isBroken;
    for (var i in origAllOf) {
        isBroken = origAllOf[i].hasOwnProperty("required") || !origAllOf[i].hasOwnProperty("$ref") ? false : true;
        for (var j in newAllOf) {
            if (JSON.stringify(origAllOf[i]) == JSON.stringify(newAllOf[j])) isBroken = false;
        }
        if (isBroken)
            return {
                "isBroken": true,
                "$ref": origAllOf[i]["$ref"]
            }
    }

    return {
        "isBroken": false
    }
}

function isMetaExtendsBroken(metaExtends, newAllOf) {
    var allOfSchemas = [];
    for (var i in newAllOf) {
        if (newAllOf[i]["$ref"] && newAllOf[i]["$ref"].indexOf("#/definitions/") != 0 && newAllOf[i]["$ref"].indexOf("http") == 0)
            allOfSchemas.push(newAllOf[i]["$ref"])
    }

    if (diff(metaExtends.sort(), allOfSchemas.sort())) {
        //console.log(diff(metaExtends.sort(), allOfSchemas.sort()))
        return true
    } else
        return false
}

function isPropertyRemoved(differences, brokenProperty) {
    for (var i in differences) {
        if (differences[i].kind == "D") {
            if (differences[i].path[differences[i].path.length-2] == "properties") {
                brokenProperty.name = differences[i].path.join("/").replace("../", "");
                return true;
            }
        }
    }
    return false;
}

function isPropertyChanged(differences, brokenProperty) {
    for (var i in differences) {
        if (differences[i].kind == "E") {
            if ((differences[i].path[differences[i].path.length - 1] == '$ref' && differences[i].path.indexOf("allOf") == -1) ||
                (differences[i].path[differences[i].path.length - 1] == 'type' && jsonDataTypes.indexOf(differences[i].lhs.toLowerCase() != -1))) {
                brokenProperty.name = differences[i].path.join("/").replace("../", "");
                brokenProperty.isFieldTypeBroken = true;
                return true;
            }
            if ((differences[i].path[differences[i].path.length - 1] == 'format') && (jsonStringFormats.indexOf(differences[i].lhs.toLowerCase() != -1))) {
                brokenProperty.name = differences[i].path.join("/").replace("../", "");
                brokenProperty.isStringFormatBroken = true;
                return true;
            }
            if ((differences[i].path[differences[i].path.length - 1] == 'minimum') && (differences[i].lhs < differences[i].rhs)) {
                brokenProperty.name = differences[i].path.join("/").replace("../", "");
                brokenProperty.isMinimumBroken = true;
                return true;
            }
            if ((differences[i].path[differences[i].path.length - 1] == 'maximum') && (differences[i].lhs > differences[i].rhs)) {
                brokenProperty.name = differences[i].path.join("/").replace("../", "");
                brokenProperty.isMaximumBroken = true;
                return true;
            }

        }
    }
    return false;
}


function isDuplicatedKey(differences, brokenProperty, schema) {
    for (var i in schema) {
        if (schema[i] !== null && typeof(schema[i]) == "object") {
            //going one step down in the object tree!!
            isDuplicatedKey(differences, brokenProperty, schema[i])
        }
    }

    var isDupChecked = false;
    var res, dupField;
    for (var i in differences) {
        if (differences[i].kind == "N") {
            if (isDupChecked !== true) {
                isDupChecked = true;
                //preProcess(schema);
                res = jsonValidator.validate(JSON.stringify(schema).toLowerCase(), false);
                if ((res != undefined) && (res.indexOf("Syntax error: duplicated keys") != -1)) {
                    dupField = res.substr(res.split("\"", 1).join("\"").length+1, res.split("\"", 2).join("\"").length-res.split("\"", 1).join("\"").length-1);
                }
            }
            if ((dupField !== undefined) && (dupField == differences[i].path[differences[i].path.length-1].toLowerCase())) {
                brokenProperty.name = differences[i].path.join("/").replace("../", "");
                return true;
            }
        }
    }
    return false;
}

function preProcess(o) {
    for (var i in o) {
        if (o[i] && o[i]["meta:status"] == "deprecated") {
            delete o[i] //remove deprecated
        }

        if (o[i] !== null && typeof(o[i]) == "object") {
            //going one step down in the object tree!!
            preProcess(o[i]);
        }
    }
}

function validate(o, file) {
    for (var i in o) {
        if (o[i] && o[i]["meta:status"] == "deprecated") {
            delete o[i] //remove deprecated
        }

        if ((ignoredForIdValidation.indexOf(file) == -1) && i == "$id" && o[i].slice(-1) == "/") {
            errLogs.push(file + ' validation error!!! $id "' + o[i] + '" should not end with "/" \n')
        }

        if (((ignoredForRequiredValidation.indexOf(file) == -1)) && o.hasOwnProperty("properties") && o.hasOwnProperty("required") && i == "properties") {
            for (var j in o.required) {
                if (!o.properties.hasOwnProperty(o.required[j])) {
                    errLogs.push(file + ' validation error!!! Required field "' + o.required[j] + '" does not exist in related properties.\n')
                }
            }
        }

        if (o.hasOwnProperty("properties") && !(o.type == "object") && i == "properties" ) {
            errLogs.push(file + ' validation error!!! Missing object type definition for "' +'properties"' + '.\n')
        }

        if ((ignoredForOpenObjectValidation.indexOf(file) == -1) && o.hasOwnProperty("type") && (o.type == "object")
            && !o.hasOwnProperty("properties") && !o.hasOwnProperty("$ref")
            && !o.hasOwnProperty("additionalProperties") && !o.hasOwnProperty("patternProperties")) {
            errLogs.push(file + ' validation error!!! Missing properties for object type.\n')
        }

        if (o[i] && (typeof(o[i]) == "object") && !(o[i] instanceof Array)
            && (i != "properties") && (i != "patternProperties") && !(o[i].hasOwnProperty("type"))) {
            for (j in o[i]) {
                if (o[i][j] && (typeof(o[i][j]) == "object") && (o[i][j].hasOwnProperty("type"))) {
                    errLogs.push(file + ' validation error!!! Missing "properties" attribute and "object" type for field ' + JSON.stringify(o,null,2) + '.\n')
                    break;
                }
            }
        }

        if (file.indexOf("../schemas/descriptors/") == -1) {//enum validation
            if (o[i] && o[i].hasOwnProperty('enum') && o[i].hasOwnProperty('meta:enum')) {
                var enumSet = new Set();
                var metaEnumSet = new Set();

                for (let j in o[i]["enum"]) {
                    enumSet.add(o[i]["enum"][j])
                }

                for (let k in o[i]["meta:enum"]) {
                    metaEnumSet.add(k)
                }

                const eqSet = (xs, ys) =>
                    xs.size === ys.size && [...xs].every((x) => ys.has(x));

                if (!eqSet(enumSet, metaEnumSet)) {
                    errLogs.push(file + " validation error!!! Mismatch between enum and meta:enum for property " + i + "\n");
                }
            } else if (o[i] && o[i].hasOwnProperty('enum') && !o[i].hasOwnProperty('meta:enum')) {
                errLogs.push(file + " validation error!!! Missing meta:enum for property " + i + "\n");
            }
        }

        if (o[i] !== null && typeof(o[i]) == "object") {
            res = jsonValidator.validate(JSON.stringify(o[i]).toLowerCase(), false);//validate duplicated lowercase key
            if ((res != undefined) && (res.indexOf("Syntax error: duplicated keys") != -1)) {
                dupField = res.substr(res.split("\"", 1).join("\"").length+1, res.split("\"", 2).join("\"").length-res.split("\"", 1).join("\"").length-1);
                if (ignoredForDuplicateKeyValidation.indexOf(dupField) == -1) {
                    errLogs.push(file + " validation error!!! field with lowercase " + dupField + " has duplicated lowercase field at same level already!\n");
                }
            }

            //going one step down in the object tree!!
            validate(o[i], file);
        }
    }
}

function createError(err) {
    shell.rm("-rf", masterCopyLoc);
    throw (err);
}
