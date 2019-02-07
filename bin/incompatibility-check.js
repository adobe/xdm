#!/usr/bin/env node

const fs = require('fs');
const glob = require("glob");
const shell = require('shelljs');
const diff = require('deep-diff');
const masterCopyLoc = "../tempmaster/";
const masterSchemaFolder = masterCopyLoc + "schemas";
const masterExtensionFolder = masterCopyLoc + "extensions";

shell.rm("-rf", masterCopyLoc); //start
if (shell.exec('git clone https://github.com/adobe/xdm.git ' + masterCopyLoc).code !== 0) {
    shell.echo('Error: Git clone failed');
    shell.exit(1);
}

var jsonDataTypes = ["string", "number", "integer", "array", "object", "boolean"];
var files = glob.sync(masterSchemaFolder + "/**/*.schema.json");
files = files.concat(glob.sync(masterExtensionFolder + "/**/*.schema.json"));

checkBreakingChanges(files);
shell.rm("-rf", masterCopyLoc); //done

function checkBreakingChanges(files) {
    files.forEach(function (file) {
        var err;
        console.log('Check breaking changes against -->' + file);
        var originalSchema = JSON.parse(fs.readFileSync(file).toString());
        var workingFile = file.replace("tempmaster/", "");

        try {//check removed schema files
            var newSchema = JSON.parse(fs.readFileSync(workingFile).toString());
        } catch (err) {
            if (err.code = "'ENOENT")
                createError("Breaking changes found!!! --> " + workingFile + " can not be removed");
        }

        var allOfCheck = isAllOfBroken(originalSchema["allOf"], newSchema["allOf"]); //check deleted allOfs
        if (originalSchema["allOf"] && allOfCheck.isBroken) {
            createError("Breaking changes found!!! $ref " + allOfCheck["$ref"] + " inside allOf can not be removed.");
        }

        var differences = diff(originalSchema, newSchema);
        if (differences) {
            for (var i in differences) {
                if (differences[i].kind == "D") {//check deleted fields
                    if (differences[i].path.indexOf("properties") != -1) {
                        createError("Breaking changes found!!! Property " + differences[i].path.join("/").replace("../","") + " can not be removed.");
                    }

                }
                if (differences[i].kind == "E") {//check changed data types
                    if ((differences[i].path[differences[i].path.length - 1] == '$ref' && differences[i].path.indexOf("allOf") == -1)
                        || (differences[i].path[differences[i].path.length - 1] == 'type' && jsonDataTypes.indexOf(differences[i].lhs.toLowerCase() != -1))) {
                        createError("Breaking changes found!!! Data type of property " + differences[i].path.join("/").replace("../","") + " can not be changed.");
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
            return {"isBroken": true, "$ref": origAllOf[i]["$ref"]}
    }

    return {"isBroken": false}
}

function createError(err) {
    shell.rm("-rf", masterCopyLoc);
    throw (err);
}