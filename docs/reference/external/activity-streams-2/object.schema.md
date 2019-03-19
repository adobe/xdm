
# Object Schema

```
https://ns.adobe.com/xdm/external/activity-streams-2/object
```

Describes an object of any kind. The [`Object`](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object) type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as `[Activity](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-activity)`, `[IntransitiveActivity](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-intransitiveactivity)`, `[Collection](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-collection)` and `[OrderedCollection](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-orderedcollection)`.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [external/activity-streams-2/object.schema.json](external/activity-streams-2/object.schema.json) |
## Schema Hierarchy

* Object `https://ns.adobe.com/xdm/external/activity-streams-2/object`
  * [JSON-LD `@context`](context.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/context`
  * [JSON-LD `@id`](id.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/id`
  * [JSON-LD `@type`](type.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/type`
  * [Object](object.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/object`
  * [Link](link.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/link`
  * [RDF Language Tagged String](rdf-langstring.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/rdf-langstring`
  * [Image Document](image.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/image`
  * [Collection](collection.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/collection`


## Object Example
```json
{
  "@context": {
    "activitystreams": "http://www.w3.org/ns/activitystreams#"
  },
  "@type": "https://www.w3.org/ns/activitystreams#Object",
  "@id": "http://www.test.example/object/1",
  "activitystreams:name": "A Simple, non-specific object"
}
```

# Object Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@context](#context) | complex | Optional | [JSON-LD `@context`](context.schema.md#context) |
| [@id](#id) | `string` | Optional | [JSON-LD `@id`](id.schema.md#id) |
| [@type](#type) | complex | Optional | [JSON-LD `@type`](type.schema.md#type) |
| [activitystreams:attachment](#activitystreamsattachment) | complex | Optional | Object (this schema) |
| [activitystreams:attributedTo](#activitystreamsattributedto) | complex | Optional | Object (this schema) |
| [activitystreams:audience](#activitystreamsaudience) | complex | Optional | Object (this schema) |
| [activitystreams:bcc](#activitystreamsbcc) | complex | Optional | Object (this schema) |
| [activitystreams:bto](#activitystreamsbto) | complex | Optional | Object (this schema) |
| [activitystreams:cc](#activitystreamscc) | complex | Optional | Object (this schema) |
| [activitystreams:content](#activitystreamscontent) | complex | Optional | Object (this schema) |
| [activitystreams:context](#activitystreamscontext) | complex | Optional | Object (this schema) |
| [activitystreams:duration](#activitystreamsduration) | `string` | Optional | Object (this schema) |
| [activitystreams:endTime](#activitystreamsendtime) | `string` | Optional | Object (this schema) |
| [activitystreams:generator](#activitystreamsgenerator) | complex | Optional | Object (this schema) |
| [activitystreams:icon](#activitystreamsicon) | complex | Optional | Object (this schema) |
| [activitystreams:image](#activitystreamsimage) | complex | Optional | Object (this schema) |
| [activitystreams:inReplyTo](#activitystreamsinreplyto) | complex | Optional | Object (this schema) |
| [activitystreams:location](#activitystreamslocation) | complex | Optional | Object (this schema) |
| [activitystreams:mediaType](#activitystreamsmediatype) | `string` | Optional | Object (this schema) |
| [activitystreams:name](#activitystreamsname) | complex | Optional | Object (this schema) |
| [activitystreams:preview](#activitystreamspreview) | complex | Optional | Object (this schema) |
| [activitystreams:published](#activitystreamspublished) | `string` | Optional | Object (this schema) |
| [activitystreams:replies](#activitystreamsreplies) | Collection | Optional | Object (this schema) |
| [activitystreams:startTime](#activitystreamsstarttime) | `string` | Optional | Object (this schema) |
| [activitystreams:summary](#activitystreamssummary) | complex | Optional | Object (this schema) |
| [activitystreams:tag](#activitystreamstag) | complex | Optional | Object (this schema) |
| [activitystreams:to](#activitystreamsto) | complex | Optional | Object (this schema) |
| [activitystreams:updated](#activitystreamsupdated) | `string` | Optional | Object (this schema) |
| [activitystreams:url](#activitystreamsurl) | complex | Optional | Object (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @context


`@context`
* is optional
* type: complex
* defined in [JSON-LD `@context`](context.schema.md#context)

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









## @id


`@id`
* is optional
* type: `string`
* defined in [JSON-LD `@id`](id.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## @type


`@type`
* is optional
* type: complex
* defined in [JSON-LD `@type`](type.schema.md#type)

### @type Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


Array type: 

All items must be of the type:
`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





#### Condition 2


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))







## activitystreams:attachment

Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attachment) document for a complete description.

`activitystreams:attachment`
* is optional
* type: complex
* defined in this schema

### activitystreams:attachment Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:attributedTo

Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attributedTo) document for a complete description.

`activitystreams:attributedTo`
* is optional
* type: complex
* defined in this schema

### activitystreams:attributedTo Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:audience

Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audience) document for a complete description.

`activitystreams:audience`
* is optional
* type: complex
* defined in this schema

### activitystreams:audience Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:bcc

Identifies one or more Objects that are part of the private secondary audience of this Object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bcc) document for a complete description.

`activitystreams:bcc`
* is optional
* type: complex
* defined in this schema

### activitystreams:bcc Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:bto

Identifies an Object that is part of the private primary audience of this Object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bto) document for a complete description.

`activitystreams:bto`
* is optional
* type: complex
* defined in this schema

### activitystreams:bto Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:cc

Identifies an Object that is part of the public secondary audience of this Object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-cc) document for a complete description.

`activitystreams:cc`
* is optional
* type: complex
* defined in this schema

### activitystreams:cc Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:content

The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content may be expressed using multiple language-tagged values. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-content) document for a complete description.

`activitystreams:content`
* is optional
* type: complex
* defined in this schema

### activitystreams:content Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`



#### Condition 2


* [RDF Language Tagged String](rdf-langstring.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/rdf-langstring`






## activitystreams:context

Identifies the context within which the object exists or an activity was performed. The notion of 'context' used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-context) document for a complete description.

`activitystreams:context`
* is optional
* type: complex
* defined in this schema

### activitystreams:context Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:duration
### XSD Duration

XSD Duration according to [specification](https://www.w3.org/TR/xmlschema11-2/#duration)

`activitystreams:duration`
* is optional
* type: `string`
* defined in this schema

### activitystreams:duration Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B-%5D%3FP(%3F!%24)(%3F%3A%5Cd%2BY)%3F(%3F%3A%5Cd%2BM)%3F(%3F%3A%5Cd%2BD)%3F(%3F%3AT(%3F!%24)(%3F%3A%5Cd%2BH)%3F(%3F%3A%5Cd%2BM)%3F(%3F%3A%5Cd%2B(%3F%3A%5C.%5Cd%2B)%3FS)%3F)%3F%24)):
```regex
^[-]?P(?!$)(?:\d+Y)?(?:\d+M)?(?:\d+D)?(?:T(?!$)(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?$
```






## activitystreams:endTime

The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-endtime) document for a complete description.

`activitystreams:endTime`
* is optional
* type: `string`
* defined in this schema

### activitystreams:endTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## activitystreams:generator

Identifies the entity (e.g. an application) that generated the object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-generator) document for a complete description.

`activitystreams:generator`
* is optional
* type: complex
* defined in this schema

### activitystreams:generator Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:icon

Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-icon) document for a complete description.

`activitystreams:icon`
* is optional
* type: complex
* defined in this schema

### activitystreams:icon Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Image Document](image.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/image`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/image",
        "$linkVal": "Image Document",
        "$linkPath": "image.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:image

Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image) document for a complete description.

`activitystreams:image`
* is optional
* type: complex
* defined in this schema

### activitystreams:image Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Image Document](image.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/image`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/image",
        "$linkVal": "Image Document",
        "$linkPath": "image.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:inReplyTo

Indicates one or more entities for which this object is considered a response. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto) document for a complete description.

`activitystreams:inReplyTo`
* is optional
* type: complex
* defined in this schema

### activitystreams:inReplyTo Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:location

Indicates one or more physical or logical locations associated with the object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-location) document for a complete description.

`activitystreams:location`
* is optional
* type: complex
* defined in this schema

### activitystreams:location Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:mediaType
### MIME Media Type

When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mediatype) document for a complete description.

`activitystreams:mediaType`
* is optional
* type: `string`
* defined in this schema

### activitystreams:mediaType Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5Cw%2B%5C%2F%5B-.%5Cw%5D%2B(%3F%3A%5C%2B%5B-.%5Cw%5D%2B)%3F)):
```regex
\w+\/[-.\w]+(?:\+[-.\w]+)?
```






## activitystreams:name

A simple, human-readable, plain-text name for the object. HTML markup must not be included. The name may be expressed using multiple language-tagged values. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name) document for a complete description.

`activitystreams:name`
* is optional
* type: complex
* defined in this schema

### activitystreams:name Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`



#### Condition 2


* [RDF Language Tagged String](rdf-langstring.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/rdf-langstring`






## activitystreams:preview

Identifies an entity that provides a preview of this object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview) document for a complete description.

`activitystreams:preview`
* is optional
* type: complex
* defined in this schema

### activitystreams:preview Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:published

The date and time at which the object was published Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-published) document for a complete description.

`activitystreams:published`
* is optional
* type: `string`
* defined in this schema

### activitystreams:published Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## activitystreams:replies

Identifies a Collection containing objects considered to be responses to this object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-replies) document for a complete description.

`activitystreams:replies`
* is optional
* type: Collection
* defined in this schema

### activitystreams:replies Type


* [Collection](collection.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/collection`





## activitystreams:startTime

The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-starttime) document for a complete description.

`activitystreams:startTime`
* is optional
* type: `string`
* defined in this schema

### activitystreams:startTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## activitystreams:summary

A natural language summarization of the object encoded as HTML. Multiple language tagged summaries may be provided. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary) document for a complete description.

`activitystreams:summary`
* is optional
* type: complex
* defined in this schema

### activitystreams:summary Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`



#### Condition 2


* [RDF Language Tagged String](rdf-langstring.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/rdf-langstring`






## activitystreams:tag

One or more 'tags' that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tag) document for a complete description.

`activitystreams:tag`
* is optional
* type: complex
* defined in this schema

### activitystreams:tag Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:to

Identifies an entity considered to be part of the public primary audience of an Object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-to) document for a complete description.

`activitystreams:to`
* is optional
* type: complex
* defined in this schema

### activitystreams:to Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:updated

The date and time at which the object was updated Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-updated) document for a complete description.

`activitystreams:updated`
* is optional
* type: `string`
* defined in this schema

### activitystreams:updated Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## activitystreams:url

Identifies one or more links to representations of the object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-url) document for a complete description.

`activitystreams:url`
* is optional
* type: complex
* defined in this schema

### activitystreams:url Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```








