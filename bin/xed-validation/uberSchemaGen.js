//This script generate the uber schema.
'use strict';
const fs = require('fs');
const glob = require("glob");
const tempInputFolder = "tempinput/components/"
const uberSchemaFolder = tempInputFolder + "uberschemas/"

glob(tempInputFolder + "**/*.schema.json", function(er, files) {
    let classes = {};
    files.forEach(function(file) {
        try {
            let schema = JSON.parse(fs.readFileSync(file));
            if (schema["meta:intendedToExtend"] && schema["meta:intendedToExtend"].length > 0) {
                for (let i = 0; i < schema["meta:intendedToExtend"].length; i++) {
                    if (classes[schema["meta:intendedToExtend"][i]] == undefined) {
                        classes[schema["meta:intendedToExtend"][i]] = [];
                        classes[schema["meta:intendedToExtend"][i]].push(schema["$id"])
                    } else {
                        classes[schema["meta:intendedToExtend"][i]].push(schema["$id"])
                    }
                }
            }
        } catch(error) {
            console.log(file.replace(tempInputFolder,"") +": JSON " + error);
        }
    });
    delete classes['https://ns.adobe.com/xdm/data/record']//remove record from uber schemas

    for (let ind in classes) {//generate uber schemas for each class
        let uberSchemaFile = uberSchemaFolder+ind.split("/").pop() + "-generated.schema.json"
        //console.log("Generate uber schema: " + uberSchemaFile);

        let xdmObj = {};
        xdmObj.$id = ind + "-generated";
        xdmObj.title = "Uber schema for " + ind;
        xdmObj.description = xdmObj.title;
        xdmObj.type = 'object';
        xdmObj['meta:extends'] = [];
        xdmObj['meta:extends'].push(ind)
        xdmObj.allOf = [];
        xdmObj.allOf.push({'$ref': ind});

        for (let mixin of classes[ind]) { //add related mixins to schema definition
            xdmObj['meta:extends'].push(mixin)
            let obj = {};
            obj.$ref = mixin;
            xdmObj.allOf.push(obj);
        }

        fs.writeFileSync(uberSchemaFile, JSON.stringify(xdmObj,null,2));
    }
});
