//This script generate the schema location map.
'use strict';
const fs = require('fs');
const glob = require("glob");
const tempInputFolder = "tempinput/"

glob(tempInputFolder + "**/*.schema.json", function(er, files) {
    let schemaLoc = {};
    files.forEach(function(file) {
        try {
            let schema = JSON.parse(fs.readFileSync(file));
            schemaLoc[schema["$id"]] = file.replace(tempInputFolder + "schemas/","xdm/").replace(tempInputFolder + "components/", "xdm/").replace(tempInputFolder + "extensions/", "xdm-extensions/");
        } catch(error) {
            console.log(file.replace(tempInputFolder,"") +": JSON " + error);
        }
    });
    fs.writeFileSync('schemaLoc.json', JSON.stringify(schemaLoc,null,2));
});
