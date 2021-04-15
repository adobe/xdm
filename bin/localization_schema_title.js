const fs = require('fs');
const glob = require("glob");
//const masterExtensionFolder = "../extensions";
const masterExtensionFolder = "../test_components";

var schemaFiles = glob.sync(masterExtensionFolder + "/**/*.schema.json");
addmetaTitleAndDecription(schemaFiles)

function addmetaTitleAndDecription(files){
    var localObj = new Object();
    files.forEach(function (file) {
        console.log('Localize schema -->' + file);
        var originalSchema = JSON.parse(fs.readFileSync(file).toString());
        var id = originalSchema["$id"];
        var schemaname = id.substr(id.lastIndexOf('/') + 1);
        addMetaId(originalSchema,"title",null,schemaname);
        addMetaId(originalSchema,"description",null,schemaname);
        fs.writeFileSync(file, JSON.stringify(originalSchema,null, 2), 'utf8');

	createLocalizationFileAttributes(originalSchema, localObj)
    });
        console.log(localObj)
        fs.writeFileSync('../test_components/en_us.json', JSON.stringify(localObj,null, 2), 'utf8');
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
            obj["meta:"+val+"id"]=path;
        }
    }
}

console.log("Script Completed")

function createLocalizationFileAttributes(obj, localObj){
	for(var i in obj) {
         if (typeof obj[i] == 'object') {
            createLocalizationFileAttributes(obj[i], localObj);
        }else if(i == "meta:titleid"){
            titleVal = obj["title"]
            metaTitleId = obj["meta:titleid"]
            localObj[metaTitleId] = titleVal
	 }else if(i == "meta:descriptionid"){
            descVal = obj["description"]
            metaDescId = obj["meta: descriptionid"]
	    localObj[metaDescId] = descVal
	 }
	 
       }
	
}