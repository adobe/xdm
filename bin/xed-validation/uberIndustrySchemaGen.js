//This script generate the uber industry schemas.
'use strict';
const fs = require('fs');
const glob = require("glob");
const tempInputFolder = "tempinput/components/"
const uberSchemaFolder = tempInputFolder + "uberschemas/"

let industries = JSON.parse(fs.readFileSync('industries.json'));
for (let industry in industries) {//uber schemas for industry mixins only
    let uberIndustrySchemaFolder = uberSchemaFolder + industry + "/";
    if (!fs.existsSync(uberIndustrySchemaFolder)){
        fs.mkdirSync(uberIndustrySchemaFolder);
    }
    glob(tempInputFolder + "**/*.schema.json", function(er, files) {
        let classes = {};
        files.forEach(function(file) {
            try {
                let schema = JSON.parse(fs.readFileSync(file));
                if (schema["meta:intendedToExtend"] && schema["meta:intendedToExtend"].length > 0
                    && schema["meta:tags"] && schema["meta:tags"].industry && schema["meta:tags"].industry.length > 0
                    && (schema["meta:tags"].industry.indexOf(industry) != -1 || schema["meta:tags"].industry.indexOf("all") != -1)
                ) {
                    //console.log("found industry mixin "+ industry + " " + file)
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
        //console.log(industry + JSON.stringify(classes,null, 2))

        for (let ind in classes) {//generate uber schemas for each class
            let uberSchemaFile = uberIndustrySchemaFolder+ind.split("/").pop() + "-generated-" + industry + ".schema.json"
            //console.log("Generate uber schema: " + uberSchemaFile);

            let xdmObj = {};
            xdmObj.$id = ind + "-generated-" + industry;
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
}


