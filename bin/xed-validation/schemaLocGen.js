//This script generate the schema location map.
'use strict';
const fs = require('fs');
const glob = require("glob");

glob("tempinput/**/*.schema.json", function(er, files) {
    let schemaLoc = {};
    files.forEach(function(file) {
        try {
            let schema = JSON.parse(fs.readFileSync(file));
            schemaLoc[schema["$id"]] = file.replace("tempinput/schemas/","xdm/").replace("tempinput/components/", "xdm/").replace("tempinput/extensions/", "xdm-extensions/");
        } catch(error) {
            console.log(file.replace("tempinput/","") +": JSON " + error);
        }
    });
    fs.writeFileSync('schemaLoc.json', JSON.stringify(schemaLoc,null,2));
});
