const fs = require('fs');
const glob = require("glob");
//Following paths should change to include entire folder
const masterSchemasFolder = "../schemas/identity";
const masterComponentsFolder = "../components/datatypes/person";
const masterExtensionFolder = "../extensions/airship";

var extensionFiles = glob.sync(masterExtensionFolder + "/**/*.schema.json");
var schemaFiles = glob.sync(masterSchemasFolder + "/**/*.schema.json");
var componentFiles = glob.sync(masterComponentsFolder + "/**/*.schema.json");
extensionFiles = extensionFiles.concat(schemaFiles);
extensionFiles = extensionFiles.concat(componentFiles);
addmetaTitleAndDecription(extensionFiles)

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
        fs.writeFileSync(file, JSON.stringify(originalSchema,null, 2), 'utf8');

	createLocalizationFileAttributes(originalSchema, localObj)
    });
    fs.writeFileSync('../localization/en_us.json', JSON.stringify(localObj,null, 2), 'utf8');
}

function addMetaId(obj, val,path,schemaname) {
    for (var i in obj) { 
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            addMetaId(obj[i], val,i,schemaname);
        } else if (i == val) {
            if(path == null){
                path = schemaname + '##' + i;  
            }else{
                path = schemaname + '##' + path + "##" +i;
            }
            obj["meta:"+val+"Id"]=path;
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
         if (typeof obj[i] == 'object') {
            createLocalizationFileAttributes(obj[i], localObj);
        }else if(i == "meta:titleId"){
            titleVal = obj["title"]
            metaTitleId = obj["meta:titleId"]
            localObj[metaTitleId] = titleVal
	    }else if(i == "meta:descriptionId"){
            descVal = obj["description"]
            metaDescId = obj["meta:descriptionId"]
	        localObj[metaDescId] = descVal
	    }
	 
    }
}