const fs = require('fs');
const glob = require("glob");
//Following paths should change to include entire folder
const masterSchemasFolder = "../schemas";
const masterComponentsFolder = "../components";
//const masterExtensionFolder = "../extensions";

//var extensionFiles = glob.sync(masterExtensionFolder + "/**/*.schema.json");
var schemaFiles = glob.sync(masterSchemasFolder + "/**/*.schema.json");
var componentFiles = glob.sync(masterComponentsFolder + "/**/*.schema.json");
schemaFiles = schemaFiles.concat(componentFiles);
addmetaTitleAndDecription(schemaFiles)

/*This method will renter through every files and
add meta:titleId and meta:descriptionId to all the files
in the schema,components and extensions folder*/
function addmetaTitleAndDecription(files){
    var localObj = new Object();
    files.forEach(function (file) {
        var originalSchema = JSON.parse(fs.readFileSync(file).toString());
        var id = originalSchema["$id"];
        var schemaname = id.substr(id.lastIndexOf('/') + 1);
        addMetaId(originalSchema,"title",null,schemaname);
        addMetaId(originalSchema,"description",null,schemaname);
        addEnumMetaIds(originalSchema,null,schemaname);
        fs.writeFileSync(file, JSON.stringify(originalSchema,null, 2), 'utf8');

	createLocalizationFileAttributes(originalSchema, localObj)
    });
    fs.writeFileSync('../__localization__/en-US.json', JSON.stringify(localObj,null, 2), 'utf8');
}

function addMetaId(obj, val,path,schemaname) {
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if ((i === "meta:enum" || i === "meta:enumId") && obj[i] !== null && typeof obj[i] === 'object'
            && !Array.isArray(obj[i]) && !obj[i].hasOwnProperty("type")) {
            // obj[i] is an enum value->label map, not a nested schema object;
            // its keys are enum values (which can collide with "title"/"description")
            // and must not be mistaken for schema properties.
            continue;
        }
        if (typeof obj[i] == 'object') {
            addMetaId(obj[i], val,i,schemaname);
        } else if (i == val) {
            if(val === 'title' && obj.hasOwnProperty("meta:titleId")) continue;
            if(val === 'description' && obj.hasOwnProperty("meta:descriptionId")) continue;
            if(path == null){
                path = schemaname + '##' + i + "##" + Math.floor(Math.random()*10000)+1;
            }else{
                  path = schemaname + '##' + path + "##" +i+ "##" + Math.floor(Math.random()*10000)+1;
            }
                obj["meta:"+val+"Id"]=path;
        }
    }
}

/* Walks the schema tree looking for object-form `meta:enum` maps
   (value -> label) and generates a sibling `meta:enumId` map
   (value -> localization id), one id per enum value.
   Array-form `meta:enum` (no separate label text) is left untouched.
   Existing entries in `meta:enumId` are preserved so re-running is
   additive/idempotent per enum value, not per property. */
function addEnumMetaIds(obj, path, schemaname) {
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (i === "meta:enum" && obj[i] !== null && typeof obj[i] === 'object' && !Array.isArray(obj[i])
            && !obj[i].hasOwnProperty("type")) {
            var enumLabels = obj[i];
            if (!obj.hasOwnProperty("meta:enumId")) {
                obj["meta:enumId"] = {};
            }
            for (var enumValue in enumLabels) {
                if (!enumLabels.hasOwnProperty(enumValue)) continue;
                if (obj["meta:enumId"].hasOwnProperty(enumValue)) continue;
                var enumPath;
                if (path == null) {
                    enumPath = schemaname + '##' + 'meta:enum' + '##' + enumValue + '##' + Math.floor(Math.random()*10000)+1;
                } else {
                    enumPath = schemaname + '##' + path + '##' + 'meta:enum' + '##' + enumValue + '##' + Math.floor(Math.random()*10000)+1;
                }
                obj["meta:enumId"][enumValue] = enumPath;
            }
        } else if (typeof obj[i] == 'object') {
            addEnumMetaIds(obj[i], i, schemaname);
        }
    }
}

console.log("Script Completed")
/* This method will find the meta:titleId and meta:descriptionId
in the source files and create en_us.json file with
meta:titleId/meta:descriptionId as the key and
value from title/description as value */
function createLocalizationFileAttributes(obj, localObj){
	for(var i in obj) {
        if (i === "meta:enumId" && obj[i] !== null && typeof obj[i] === 'object' && !Array.isArray(obj[i])
            && obj["meta:enum"] && typeof obj["meta:enum"] === 'object' && !Array.isArray(obj["meta:enum"])) {
            var enumIds = obj[i];
            var enumLabels = obj["meta:enum"];
            for (var enumValue in enumIds) {
                if (!enumIds.hasOwnProperty(enumValue)) continue;
                if (!enumLabels.hasOwnProperty(enumValue)) continue;
                localObj[enumIds[enumValue]] = enumLabels[enumValue];
            }
        }
        if (typeof obj[i] == 'object') {
            createLocalizationFileAttributes(obj[i], localObj);
        }else if(obj["title"] && i == "meta:titleId"){
            titleVal = obj["title"]
            metaTitleId = obj["meta:titleId"]
            localObj[metaTitleId] = titleVal
	    }else if(obj["description"] && i == "meta:descriptionId"){
            descVal = obj["description"]
            metaDescId = obj["meta:descriptionId"]
	        localObj[metaDescId] = descVal
	    }

    }
}
