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
        fs.writeFileSync(file, JSON.stringify(originalSchema,null, 2), 'utf8');

	createLocalizationFileAttributes(originalSchema, localObj)
    });
    fs.writeFileSync('../__localization__/en-US.json', JSON.stringify(localObj,null, 2), 'utf8');
}

function addMetaId(obj, val,path,schemaname) {
    for (var i in obj) { 
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            addMetaId(obj[i], val,i,schemaname);
        } else if (i == val) {
            console.log ("Value:"+i+" "+obj.hasOwnProperty("meta:titleId")+" "+obj.hasOwnProperty("meta:descriptionId"))
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

console.log("Script Completed")
/* This method will find the meta:titleId and meta:descriptionId
in the source files and create en_us.json file with 
meta:titleId/meta:descriptionId as the key and 
value from title/description as value */
function createLocalizationFileAttributes(obj, localObj){
	for(var i in obj) {
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