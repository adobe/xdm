#/!bin/sh

# This is a helper script to quickly create new metric definitions.
# Usage:
# $ sh makemetric.sh <group> <name>
#

cat << EOF | jq . > $2.schema.json
{
  "meta:license": [
    "Copyright 2018 Adobe Systems Incorporated. All rights reserved.",
    "This work is licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) license",
    "you may not use this file except in compliance with the License. You may obtain a copy",
    "of the License at https://creativecommons.org/licenses/by/4.0/"
  ],
  "\$id": "https://ns.adobe.com/xdm/data/metrics/$1/$2",
  "\$schema": "http://json-schema.org/draft-06/schema#",
  "title": "$2",
  "type": "object",
  "meta:extensible": true,
  "meta:extends": [ "https://ns.adobe.com/xdm/data/metric" ],
  "description": "The $1 metric $2 describes…",
  "definitions": {
    "metric": {
      "properties": {
        "@id": {
          "type": "string",
          "format": "uri",
          "const": "https://ns.adobe.com/xdm/data/metrics/$1/$2",
          "description": "The unique identifier of this metric."
        },
        "schema:name": {
          "type": "string",
          "const": "$1 metric: $2",
          "description": "The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique."
        },
        "xdm:measurement": {
          "type": "string",
          "description": "How to take measures of this metric.",
          "const": "count"
        },
        "xdm:unit": {
          "type": "string",
          "const": null
        }
      }
    }
  },
  "allOf": [
    {
      "\$ref": "#/definitions/metric"
    }
  ],
  "required": [
    "@id",
    "schema:name",
    "xdm:measurement",
    "xdm:unit"
  ]
}
EOF

cat << EOF | jq . > $2.example.1.json
{
  "schema:name": "$1 metric: $2",
  "@id": "https://ns.adobe.com/xdm/data/metrics/$1/$2",
  "xdm:measurement": "count",
  "xdm:unit": null
}
EOF
