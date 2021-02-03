#!/usr/bin/env node

const fs = require('fs');
const glob = require("glob");
const masterExtensionFolder = "../extensions";

var schemaFiles = glob.sync(masterExtensionFolder + "/**/*.schema.json");
stablizeSchema(schemaFiles);

function stablizeSchema(files) {
    files.forEach(function (file) {
        console.log('Stablize schema -->' + file);
        var originalSchema = JSON.parse(fs.readFileSync(file).toString());
        if ((originalSchema["meta:status"] == undefined)) {
            originalSchema["meta:status"]="stable";
            fs.writeFileSync(file, JSON.stringify(originalSchema,null, 2), 'utf8');
        }
    });
}
