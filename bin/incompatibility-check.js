#!/usr/bin/env node

/*
1.The script will check breaking changes as mentioned below and throw out errors to fail the build if needed
-when an existing schema file got removed (rename a file will be breaking change in this case).
-when an field got removed from the schema
-when a field's data type got changed
-when the value of $ref is changed
-when a $ref got removed from allOf

2.The script will only generate warning messages for cases below.
-when the meta:extends does not match allOf
*/

const fs = require('fs');
const glob = require("glob");
const shell = require('shelljs');
const diff = require('deep-diff');
const masterCopyLoc = "../tempmaster/";
const masterSchemaFolder = masterCopyLoc + "schemas";
const masterExtensionFolder = masterCopyLoc + "extensions";

shell.rm("-rf", masterCopyLoc); //start
if (shell.exec('git clone https://github.com/adobe/xdm.git ' + masterCopyLoc).code !== 0) {
    shell.echo('Error: Git clone master branch failed');
    shell.exit(1);
}

var jsonDataTypes = ["string", "number", "integer", "array", "object", "boolean"];
var schemaFiles = glob.sync(masterSchemaFolder + "/**/*.schema.json");
schemaFiles = schemaFiles.concat(glob.sync(masterExtensionFolder + "/**/*.schema.json"));

checkBreakingChanges(schemaFiles);
shell.rm("-rf", masterCopyLoc); //done

function checkBreakingChanges(files) {
    files.forEach(function (file) {
        var err;
        console.log('Check breaking changes for -->' + file);
        var originalSchema = JSON.parse(fs.readFileSync(file).toString());
        var workingFile = file.replace("tempmaster/", "");

        try { //check if schema file got removed
            var newSchema = JSON.parse(fs.readFileSync(workingFile).toString());
        } catch (err) {
            if (err.code = "'ENOENT")
                createError("Breaking changes found!!! --> " + workingFile + " can not be removed");
        }

        var allOfCheckResult = isAllOfBroken(originalSchema["allOf"], newSchema["allOf"]); //check deleted allOfs
        if (originalSchema["allOf"] && allOfCheckResult.isBroken) {
            createError("Breaking changes found!!! $ref " + allOfCheckResult["$ref"] + " inside allOf can not be removed.");
        }

        if (newSchema["meta:extends"] && Array.isArray(newSchema["meta:extends"]) && isMetaExtendsBroken(newSchema["meta:extends"], newSchema["allOf"])) {
            console.log("Warning: Incompatible meta:extends vs allOf found!!! The schemas inside meta:extends did not match those in allOf.")
        }

        var differences = diff(originalSchema, newSchema);
        if (differences) {
            for (var i in differences) {
                if (differences[i].kind == "D") { //check deleted fields
                    if (differences[i].path.indexOf("properties") != -1) {
                        createError("Breaking changes found!!! Property " + differences[i].path.join("/").replace("../", "") + " can not be removed.");
                    }

                }
                if (differences[i].kind == "E") { //check changed data types
                    if ((differences[i].path[differences[i].path.length - 1] == '$ref' && differences[i].path.indexOf("allOf") == -1) ||
                        (differences[i].path[differences[i].path.length - 1] == 'type' && jsonDataTypes.indexOf(differences[i].lhs.toLowerCase() != -1))) {
                        createError("Breaking changes found!!! Data type of property " + differences[i].path.join("/").replace("../", "") + " can not be changed.");
                    }

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

function createError(err) {
    shell.rm("-rf", masterCopyLoc);
    throw (err);
}