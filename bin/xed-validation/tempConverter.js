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
const rename = require('deep-rename-keys');

class Converter extends EventEmitter {

  //@refBase The base of the $ref attribute.
  convert(refBase) {
    var rawSchema = JSON.parse(fs.readFileSync(refBase).toString());

    delete(rawSchema['meta:intendedToExtend']);
    delete(rawSchema['meta:extends']);

    var dataTypeMappings = {
        "array": "array",
        "object": "object",
        "string": "string",
        "integer": "int",
        "number": "number",
        "boolean": "boolean"
    };

    var removeList = [
      "xdm/common/extensible.schema.json#/definitions/@context"
    ];

    var schemaLoc = JSON.parse(fs.readFileSync('schemaLoc.json'));
    traverse(rawSchema); //converting schema

    if (rawSchema.allOf) rawSchema.allOf = rawSchema.allOf.filter(value => Object.keys(value).length !== 0); //remove empty objs

    if (rawSchema) this.emit('json', refBase, JSON.stringify(rawSchema, null, 4));

    //done

    function traverse(o) {
      for (var i in o) {
        if (i.indexOf("meta:") != -1 && i == "meta:license") delete o[i] //remove meta not needed
        if (i == "xdm:identifier" || i == "xdm:classifier") delete o[i] //remove some others

        if (i == "$ref" && o[i].indexOf("#/definitions/") != 0) { //mapping to schema location

          var schemaId = (o[i].indexOf("#/definitions/") != -1) ? o[i].substr(0, o[i].indexOf("#/definitions/")) : o[i];
          if (schemaLoc[schemaId]) {
            o[i] = (o[i].indexOf("#/definitions/") == -1) ? schemaLoc[schemaId] : schemaLoc[schemaId]+o[i].substr(o[i].indexOf("#/definitions/"));
          }
          else {
            o[i] = schemaId;//for failing schema validation later
          }
          if (removeList.indexOf(o[i]) != -1) delete o[i];

        };

        if (Object.prototype.toString.call(o) != "[object Array]" && o[i] && o[i]["$ref"] && o[i]["$ref"].indexOf("#/definitions/") == -1) {
          o[i] = rename(o[i], function(key) {//bypass allOf by first condition
            return key.replace("$ref","$refkept");
          });
        };

        if (o[i] && o[i]["$refkept"] && (o[i]["$refkept"] == rawSchema["$id"]))
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!FOUND CIRCULAR $REF!!!!!!!!!!!!!!!!!! in field --> "+i);

        if (i == "type" && !o["meta:xdmType"]) { //basic type mappings for undefined xdmType
          if (o[i] == "integer" && (o.maximum > 2147483647 || o.mininum < -2147483648)) {
            o["meta:xdmType"] = "long"
          } else if (o[i] == "integer" && (o.minimum >= -128 && o.maximum <= 127)) {
            o["meta:xdmType"] = "byte"
          } else if (o[i] == "integer" && (o.minimum >= -32768 && o.maximum <= 32767)) {
            o["meta:xdmType"] = "short"
          } else if (o[i] == "number" && (o.minimum >= -3.40282347E+38 && o.maximum <= 3.40282347E+38)) {
            o["meta:xdmType"] = dataTypeMappings[o[i]]
          } else if (o[i] == "string" && o.format == "date") {
            o["meta:xdmType"] = o.format
          } else if (o[i] == "string" && o.format == "date-time") {
            o["meta:xdmType"] = o.format
          } else {
            o["meta:xdmType"] = dataTypeMappings[o[i]]
          }
        };

        if (o[i] !== null && typeof(o[i]) == "object") {
          //going one step down in the object tree!!
          traverse(o[i]);
        }
      }
    }
  }

  save(directory, id, schema) {
    var filename = path.join(directory, id);
    log.verbose("Saving %s...", filename);
    fse.mkdirsSync(path.dirname(filename));
    fs.writeFileSync(filename, schema, 'utf8');
  }

}

module.exports = Converter;
