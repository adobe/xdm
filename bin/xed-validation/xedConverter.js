/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2017 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property
 * laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
'use strict';

const fs = require('fs');
const fse = require('fs-extra');
const log = require('winston');
const path = require('path');
const EventEmitter = require('events').EventEmitter;
const dotProp = require('dot-prop');
const mergeAllOf = require('json-schema-merge-allof');
const deref = require('json-schema-deref-sync');
const rename = require('deep-rename-keys');
const camelCase = require('camelcase');


class Converter extends EventEmitter {

  //@refBase The base of the $ref attribute.
  convert(refBase) {

    function shortenField(id) { //change $id $refkept uri value to shortened schema file location
      if (id.indexOf(".com/experience") != -1) id = id.replace("https://ns.", "").replace("http://ns.", "").replace(".com","") //more logic here needed to extract other domains in the future
      return id.replace("https://ns.adobe.com/xdm/", "").replace("http://ns.adobe.com/xdm/", "")
               .replace("http://schema.org/", "external/schema/").replace("http://www.iptc.org/","external/iptc/")
               .replace("http://ns.adobe.com/adobecloud/core/1.0", "external/repo/commmon").toLowerCase();
    };


    function preProcess(o) { //cleanup junk and pre-processes like data mapping etc.
      var removeList = ["oneOf", "anyOf", "definitions", "patternProperties"];

      if (o["$id"]) {
        o["meta:xdmId"] = o["$id"];
        o["$id"] = shortenField(o["$id"]);
        o["meta:altId"] = (o["$id"].indexOf("adobe/experience") != 0) ? "_xdm."+o["$id"].split("/").join(".") : o["$id"].replace("adobe/experience","_experience").split("/").join(".");
      };

      if (o["meta:extends"]) {
        for (var i in o["meta:extends"])
            o["meta:extends"][i] = shortenField(o["meta:extends"][i]);
        o["meta:extends"] = o["meta:extends"].filter(value => value != o["$id"]);
        if (o["meta:extends"].length == 0) delete o["meta:extends"];
      };



      for (var l in o) {
        if (l == "$refkept") o[l] = shortenField(o[l]);
        if (l == "anyOf") {
          o.type = "string";
          o["meta:xdmType"] = "string";
        }; //replace anyOf to string
        if (l == "const" && o[l] == null) o[l] = "" //need to convert null to empty for proto tagging

        if (removeList.indexOf(l) > -1) delete o[l];
        if (o[l] !== null && typeof(o[l]) == "object") preProcess(o[l]);

      }
    }


    function conflictPath(visited, goto) {
      var a = goto + ".";
      var b = "";
      if (visited.length > 0)
        for (var v in visited) {
          b = visited[v] + "."; //console.log("a = "+a+" b = "+b)
          if (b !== "." && a.indexOf(b) == 0) return b.length //visited path is shorter
          else if (b !== "." && b.indexOf(a) == 0) return 1 //visited path is longer
        }
      return 0;
    }

    function removeDuplicate(obj) {
      return Array.from(new Set(obj)); // remove dups
    }

    function checkNested(obj) {
      for (var i in obj)
        if (typeof(obj[i]) == "object" && Object.prototype.toString.call(obj[i]) != "[object Array]") return true
      return false;
    };

    function formatNested(field) { // format the dot-prop generated structure
      if (checkNested(field) && !field.type)
        for (var key in field) { //format nested objs as expected from conversion logic
          if (typeof(field[key]) === "object" &&
            Object.prototype.toString.call(field[key]) != "[object Array]" //bypass arrays like required, enum, enumvalues, examples etc.
            //&& field.type != "array" // no array handling here
            &&
            key != "properties" // avoid infinite loop from the newly added property object
          ) {
            if (!field["type"]) {
                field.type = "object";
                field["meta:xdmType"] = "object";
            };
            if (!field["properties"]) field.properties = {};
            field.properties[key] = field[key];
            delete(field[key]); //delete old field
            bottomRequired(field)
            formatNested(field.properties[key]);
          }
        }
    };

    var cnt = {};
    function renameDupNestedKey(k,o) { //rename the duplicated keys inside nested obj as it is not allowed in proto message names
        for (var i in o) {
            if (checkNested(o[i]) && k == i && k != "properties") {
                //console.log("found!! =="+k)
                if (!cnt[k]) Object.assign(cnt,{[k]:1}); //initialize counter
                //console.log("count is=="+cnt)
                var newKey = i+cnt[k];
                o[newKey] = o[i];
                delete o[i];
                cnt[k] = cnt[k] + 1;
                if (o[newKey] !== null && typeof(o[newKey]) == "object") {
                    //going one step down in the object tree!!
                    renameDupNestedKey(k, o[newKey]);
                }
            }
            else {//keep fields order
              o.mytemp = o[i];
              delete o[i];
              o[i] = o.mytemp;
              delete o.mytemp;
            };

            if (o[i] !== null && typeof(o[i]) == "object") {
                //going one step down in the object tree!!
                renameDupNestedKey(k, o[i]);
            }
        };
    };

    function resolveNameConflict(o) { //resolve field name conflict for protobuf message name
        if (o["$id"] && o.properties) renameDupNestedKey(o["$id"].replace(".schema.json","").split("/").pop(),o.properties);
        for (var l in o)
            if (o[l] !== null && typeof(o[l]) == "object") {
                renameDupNestedKey(l, o[l]);
                resolveNameConflict(o[l]);
            };

    };


    function bottomRequired(o) {
      var temp = o.required;
      delete o.required;
      o.required = temp;
    };

    function processXed(schema) {
      function rebuildFields(key, value) {
        if (key == "properties") {
          return true;
        }
        return false;
      }
      traverseJsonObj(schema, rebuildFields);
      return JSON.stringify(schema, null, 4);
    }


    function traverseJsonObj(obj, func) {
      for (var i in obj) {
        if (func.apply(this, [i, obj[i]])) {
          var props = obj[i];
          var pathVisited = [];
          var conflictCode = 0;
          for (var propName in props) { //process each property
            delete(props[propName]['meta:enum']);
            props[propName]["meta:xdmField"] = propName; //save orignal xdm field name for future reference
            var newName = (propName.includes(":") || propName.includes("/") || propName.includes("@")) ? propName : "unqualified." + propName;
            for (var ind in replacePropKeys) newName = newName.split(ind).join(replacePropKeys[ind]);
            var propNameTokens = newName.split(".");

            //console.log("processing key----------->" + propNameTokens)

            if (propNameTokens.length > 1) { //convert to nested
              propNameTokens[0] = "_" + propNameTokens[0];
              var path = propNameTokens.join(".");

              conflictCode = conflictPath(pathVisited, path);
              while (conflictCode > 0) { //rebuild conflict fields
                //console.log("!!!!!!!!conflict!!!!!!" + path)
                //console.log("visitted path---->["+pathVisited+"], goto path----->"+path, "conflictCode--->"+conflictCode)
                path = (conflictCode == 1) ? path + "_" : path.substring(0, conflictCode - 1) + "_" + path.substring(conflictCode - 1)
                conflictCode = conflictPath(pathVisited, path);
                //if (conflictCode != 1) console.log("substring test====>" + path.substring(0, conflictCode - 1))
              }


              dotProp.set(props, path, props[propName]) //set the nested fields as no more conflict fields
              //console.log("nested prop--->"+JSON.stringify(props))
              pathVisited.push(path);
              propNameTokens = path.split(".") //rebuild tokens
              delete props[propName];

              if (obj.required && obj.required.find(f => f == propName)) { //handle required
                //console.log("Required!!!!"+propNameTokens+"--length-->"+propNameTokens.length)
                obj.required[obj.required.indexOf(propName)] = propNameTokens[0] //update required in parent obj
                var tokenLength = propNameTokens.length

                for (var m = 0; m <= tokenLength - 2; m++) { //handle nested required
                  var newKey = [propNameTokens.pop()]
                  //console.log("array index-->"+m+" popped key:" +newKey+" for namespace:"+propNameTokens.join("."))
                  var origField = dotProp.get(props, propNameTokens.join("."))

                  if (origField)
                    if (origField && origField.required) { //update and reorder required, no impact for the current schemas as of now
                      origField.required = origField.required.concat(newKey);
                      bottomRequired(origField);
                      origField.required = removeDuplicate(origField.required);
                    } else Object.assign(origField, {
                      "required": newKey
                    })
                  dotProp.set(props, propNameTokens.join("."), origField); //add required
                }
                obj.required = removeDuplicate(obj.required);
              }
            } else { //keep as is
              if (newName != propName) {
                props[newName] = props[propName];
                delete props[propName];
              }
            }

            var temp = props._unqualified; //move down _qualified to bottom
            delete props._unqualified;
            props._unqualified = temp;


          }
        };

        if (obj[i] !== null && typeof(obj[i]) == "object") traverseJsonObj(obj[i], func); //going one step down in the object tree!!

        for (var k in obj.required) //remove xdm: from required and push required to the bottom at schema level
          if (obj.required[k]) obj.required[k] = obj.required[k].replace("xdm:", "").replace("@id", "_id").replace("@type", "_type");

        bottomRequired(obj);
      }
    }

    var replacePropKeys = { //rename property keys only, DONT use this for obj.required field renaming please!!
      "https://": "",
      "http://": "",
      "ns.adobe.com/xdm/data/metrics/": "", //special mapping for analytics
      "ns.adobe.com/xdm/": "",
      "ns.adobe.com/": "",
      "xdm:": "",
      "@id": "_id",
      "@type": "_type",
      "/": ".",
      ":": "."
    };

    var replaceEnumKeys = { //rename enum keys, this is not the same as above
      "https://ns.adobe.com/xdm/channel-types/": "",
      "https://ns.adobe.com/xdm/channels/": "",
      "https://ns.adobe.com/xdm/external/": "",
      "https://ns.adobe.com/experience/analytics/": "",
      "https://ns.adobe.com/experience/": ""
    };


    var rawSchema = JSON.parse(fs.readFileSync(refBase).toString());

    var fullSchema = mergeAllOf(deref(rawSchema), { //deref and resolve allOf
        resolvers: {
            "meta:extends" : function(values) {//resolving conflict
              var extendsList = [];
              for (var i in values)
                if (rawSchema["$id"] != values[i]) //not meta:extends itself
                    extendsList = extendsList.concat(values[i]);
              return Array.from(new Set(extendsList));
            },
          "meta:enum" : function(values) {//resolving conflict
            var newEnum = {};
            values.forEach(function (obj) {
              var keys = Object.keys(obj);
              for (var key in keys) {
                newEnum[key] = obj[key];
              }
            });
            return newEnum;
          },
            "meta:status" : function(values) {
              var statusList = [];
              for (var i in values)
                      statusList = statusList.concat(values[i]);
              if (statusList.length >1 )
                console.log("!!!This schema contains multiple meta:status after resolving allOf!!!")
              return Array.from(new Set(statusList));
            }
        }
    });

    preProcess(fullSchema);
    //console.log("schema without refs========>"+JSON.stringify(fullSchema))

    var xed = processXed(fullSchema); //xed conversion

    var xedWithRefs = rename(JSON.parse(xed), function(key) { //post-process to camelCase fields and rename ref back etc.
      for (var ind in replaceEnumKeys) key = key.split(ind).join(replaceEnumKeys[ind]);
      if (key.includes("-")) return key.charAt(0) == "_" ? "_" + camelCase(key) : camelCase(key);
      else return key.replace("$refkept", "$ref");
    });

    for (var i in xedWithRefs.properties) formatNested(xedWithRefs.properties[i]); //reformat the nested structure created from dot notation

    //resolveNameConflict(xedWithRefs);



    if (xedWithRefs && xedWithRefs.properties) this.emit('json', refBase, JSON.stringify(xedWithRefs, null, 4)); //done
  }

  save(directory, id, schema) {
    var filename = path.join(directory, id);
    log.verbose("Saving %s...", filename);
    fse.mkdirsSync(path.dirname(filename));
    fs.writeFileSync(filename, schema, 'utf8');
  }

}

module.exports = Converter;
