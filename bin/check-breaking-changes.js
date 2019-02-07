#!/usr/bin/env node

const fs = require('fs');
const glob = require("glob");
const shell = require('shelljs');
const diff = require('deep-diff');
//const difftool = require('json-schema-diff-validator'); //* not used as it is too strict
const masterCopyLoc = "../mastercopy/";
const masterSchemaFolder = masterCopyLoc + "schemas";
const masterExtensionFolder = masterCopyLoc + "extensions";

shell.rm("-rf", masterCopyLoc);
if (shell.exec('git clone https://github.com/adobe/xdm.git ' + masterCopyLoc).code !== 0) {
    shell.echo('Error: Git clone failed');
    shell.exit(1);
}

var files = glob.sync(masterSchemaFolder + "/**/*.schema.json");
files = files.concat(glob.sync(masterExtensionFolder + "/**/*.schema.json"));

checkBreakingChanges(files);
shell.rm("-rf", masterCopyLoc);

function checkBreakingChanges(files) {
    files.forEach(function (file) {
        console.log('Checking breaking changes---->' + file);
        var originalSchema = JSON.parse(fs.readFileSync(file).toString());
        var workingFile = file.replace("mastercopy/", "");

        try {
            var newSchema = JSON.parse(fs.readFileSync(workingFile).toString());
        } catch (err) {
            if (err.code = "'ENOENT")
                console.log("Breaking changes found!!! --> " + workingFile + " is removed");
            shell.rm("-rf", masterCopyLoc);
            throw (err);
        }
        ;

        var differences = diff(originalSchema, newSchema);
        if (differences) {
            console.log("diff--->" + JSON.stringify(differences, null, 2));
            for (var i in differences) {
                if (differences[i].kind == "D") {//check deleted
                    console.log("Breaking changes found!!! --> " + differences[i].path.join("/"))
                    shell.rm("-rf", masterCopyLoc);
                    throw ("Breaking changes found!!! Property "+ differences[i].path.join("/") + " can not be removed.")

                }
                if (differences[i].kind == "E") {//check changed
                    console.log("Breaking changes found!!! --> " + differences[i].path.join("/"))
                    shell.rm("-rf", masterCopyLoc);
                    throw ("Breaking changes found!!! Data type of property "+ differences[i].path.join("/") + "can not be changed.")

                }
            }
        }

        //difftool.validateSchemaFiles(workingFile, file);
        //difftool.validateSchemaCompatibility(newSchema, originalSchema);

    });
}