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
*/

const fs = require('fs');
const glob = require("glob");
const shell = require('shelljs');
const diff = require('deep-diff');
const jsonValidator = require('json-dup-key-validator');
const masterCopyLoc = "../tempmaster/";
const masterSchemaFolder = masterCopyLoc + "schemas";
const masterComponentFolder = masterCopyLoc + "components";
const masterExtensionFolder = masterCopyLoc + "extensions";

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

var errLogs = [];
checkBreakingChanges(schemaFiles);
if (errLogs.length > 0) {
    createError(errLogs.join(""));
}
shell.rm("-rf", masterCopyLoc); //done

function checkBreakingChanges(files) {
    files.forEach(function (file) {
        var err;
        console.log('Check breaking changes -->' + file);
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
            }
        }
    });
}

function isAllOfBroken(origAllOf, newAllOf) {
    var isBroken;
    for (var i in origAllOf) {
        isBroken = true;
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
    var isDupChecked = false;
    var res, dupField;
    for (var i in differences) {
        if (differences[i].kind == "N") {
            if (isDupChecked !== true) {
                isDupChecked = true;
                preProcess(schema);
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
        if (o[i]["meta:status"] == "deprecated") {
            delete o[i] //remove deprecated
        }

        if (o[i] !== null && typeof(o[i]) == "object") {
            //going one step down in the object tree!!
            preProcess(o[i]);
        }
    }
}

function createError(err) {
    shell.rm("-rf", masterCopyLoc);
    throw (err);
}