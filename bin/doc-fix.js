#!/usr/bin/env node
const fs = require('fs');
const glob = require('glob');
const schemaFolder = 'docsource';
const schemaFiles = glob.sync(schemaFolder + '/**/*.schema.json');

function process(o, file) {
    for (let i in o) {
        if (o[i] !== null && typeof(o[i]) == 'object') {
            //going one step down in the object tree!!
            process(o[i], file);
        }

        if (o[i] && o[i].type && (o[i].type == 'object') && (o[i].hasOwnProperty('properties')) && hasRef(o[i].properties) && (i.indexOf('https://ns.adobe.com/experience/') != -1)) {
            //console.log('Fix field: '+ i.split('/').pop());
            let newSchema = o[i].properties;
            let newSchemaName = i.split('/').pop() + '.schema.json';
            newSchema.$schema = 'http://json-schema.org/draft-06/schema#';
            newSchema.$id = i;
            let newFile = file.split('/');
            newFile.pop();
            delete o[i].type;
            delete o[i].properties;
            o[i].$ref = newSchema.$id;
            fs.writeFileSync(newFile.join('/')+'/'+newSchemaName, JSON.stringify(newSchema,null, 2), 'utf8');
        }
    }
}

function hasRef(o) {
    for (let i in o) {
        if (o[i].hasOwnProperty('$ref')) {
            return true;
        }
    }
    return false;
}

function docFix(files) {
    files.forEach(function (file) {
        var originalSchema = JSON.parse(fs.readFileSync(file).toString());
        //console.log('Docfix: '+file);
        if ((originalSchema.$id == undefined) && (originalSchema.id == undefined)) {
            console.log(JSON.stringify(originalSchema,null,2));
            throw('Invalid file for docfix!');
        }
        process(originalSchema, file);
        fs.writeFileSync(file, JSON.stringify(originalSchema,null, 2), 'utf8');
    });
}

docFix(schemaFiles);
