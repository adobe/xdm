
# JSON-LD `@context` Schema

```
https://ns.adobe.com/xdm/external/activity-streams-2/context
```

A a set of rules for interpreting a JSON-LD document as specified in [the Context of the JSON-LD specification](https://json-ld.org/spec/latest/json-ld/#the-context).

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [external/activity-streams-2/context.schema.json](external/activity-streams-2/context.schema.json) |

## JSON-LD `@context` Example
```json
{
  "@context": {
    "@vocab": " https://www.w3.org/ns/activitystreams#",
    "xdm": "https://ns.adobe.com/xdm/"
  }
}
```

# JSON-LD `@context` Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@context](#context) | complex | Optional | JSON-LD `@context` (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @context


`@context`
* is optional
* type: complex
* defined in this schema

### @context Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `oneOf`.

```json
{
  "type": "array",
  "items": {
    "oneOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "type": "object",
        "properties": {
          "@vocab": {
            "anyOf": [
              {
                "type": "string",
                "format": "uri"
              },
              {
                "$ref": "#/definitions/blank-node-identifier"
              },
              {
                "$ref": "#/definitions/term"
              },
              {
                "type": "null"
              }
            ]
          },
          "@base": {
            "oneOf": [
              {
                "type": "string",
                "format": "uri"
              },
              {
                "type": "null"
              }
            ]
          },
          "@language": {
            "oneOf": [
              {
                "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/rdf-langstring#/definitions/tag"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "patternProperties": {
          "^([^:@_].*)|(_:.*)$": {
            "anyOf": [
              {
                "type": "string",
                "format": "uri"
              },
              {
                "$ref": "#/definitions/term"
              },
              {
                "$ref": "#/definitions/blank-node-identifier"
              },
              {
                "$ref": "#/definitions/keywords"
              },
              {
                "type": "null"
              },
              {
                "$ref": "#/definitions/expanded-term-definition"
              },
              {
                "properties": {
                  "@context": {
                    "$ref": "#/definitions/single-or-array-of-contexts"
                  }
                },
                "type": "object"
              }
            ]
          }
        },
        "additionalProperties": false
      }
    ],
    "type": "oneOf"
  }
}
```









# JSON-LD `@context` Definitions

| Property | Type | Group |
|----------|------|-------|
| [@base](#base) | complex | `https://ns.adobe.com/xdm/external/activity-streams-2/context#/definitions/single-context` |
| [@container](#container) | complex | `https://ns.adobe.com/xdm/external/activity-streams-2/context#/definitions/expanded-term-definition` |
| [@id](#id) | complex | `https://ns.adobe.com/xdm/external/activity-streams-2/context#/definitions/expanded-term-definition` |
| [@language](#language) | complex | `https://ns.adobe.com/xdm/external/activity-streams-2/context#/definitions/single-context` |
| [@reverse](#reverse) | complex | `https://ns.adobe.com/xdm/external/activity-streams-2/context#/definitions/expanded-term-definition` |
| [@type](#type) | complex | `https://ns.adobe.com/xdm/external/activity-streams-2/context#/definitions/expanded-term-definition` |
| [@vocab](#vocab) | complex | `https://ns.adobe.com/xdm/external/activity-streams-2/context#/definitions/single-context` |

## @base


`@base`
* is optional
* type: complex
* defined in this schema

### @base Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Condition 2







## @container


`@container`
* is optional
* type: complex
* defined in this schema

### @container Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



#### Condition 2


`string`








## @id


`@id`
* is optional
* type: complex
* defined in this schema

### @id Type


**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* []() – `#/definitions/term`


#### Option 3


* []() – `#/definitions/blank-node-identifier`


#### Option 4


* []() – `#/definitions/keywords`


#### Option 5







## @language


`@language`
* is optional
* type: complex
* defined in this schema

### @language Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


* []() – `https://ns.adobe.com/xdm/external/activity-streams-2/rdf-langstring#/definitions/tag`


#### Condition 2







## @reverse


`@reverse`
* is optional
* type: complex
* defined in this schema

### @reverse Type


**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* []() – `#/definitions/term`


#### Option 3


* []() – `#/definitions/blank-node-identifier`


#### Option 4


* []() – `#/definitions/keywords`


#### Option 5







## @type


`@type`
* is optional
* type: complex
* defined in this schema

### @type Type


**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* []() – `#/definitions/term`


#### Option 3


`string`



#### Option 4







## @vocab


`@vocab`
* is optional
* type: complex
* defined in this schema

### @vocab Type


**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* []() – `#/definitions/blank-node-identifier`


#### Option 3


* []() – `#/definitions/term`


#### Option 4






