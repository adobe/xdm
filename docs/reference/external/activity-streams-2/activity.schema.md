---
---

# Activity Schema

```
https://ns.adobe.com/xdm/external/activity-streams-2/activity
```

An [Activity](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-activity) is a subtype of `[Object](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object)` that describes some form of action that may happen, is currently happening, or has already happened. The `Activity` type itself serves as an abstract base type for all types of activities. It is important to note that the `Activity` type itself does not carry any specific semantics about the kind of action being taken.

| Abstract | Extensible | Custom Properties | Defined In |
|----------|------------|-------------------|------------|
| Can be instantiated | Yes | Forbidden | [external/activity-streams-2/activity.schema.json](external/activity-streams-2/activity.schema.json) |

## Schema Hierarchy

* Activity `https://ns.adobe.com/xdm/external/activity-streams-2/activity`
  * [Object](object.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/object`
  * [Link](link.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/link`

## Activity Example
```json
{
  "@context": {
    "activitystreams": "http://www.w3.org/ns/activitystreams#",
    "xdm": "https://ns.adobe.com/xdm/"
  },
  "@id": "https://events.adobe.io/event/id/82235bac-2b81-4e70-90b5-2bd1f04b5c7b",
  "@type": "https://ns.adobe.com/xdm/common/event/created#",
  "activitystreams:published": "2016-07-16T19:20:30+01:00",
  "activitystreams:to": {
    "https://ns.adobe.com/xdm-extensions/ims/user#id": "D13A1E7053E46A220A4C86E1@AdobeID",
    "@type": "https://ns.adobe.com/xdm-extensions/ims/user#"
  },
  "activitystreams:generator": {
    "xdm:root": "https://cc-api-storage.adobe.io/",
    "@type": "https://ns.adobe.com/xdm/content/repository#"
  },
  "activitystreams:actor": {
    "https://ns.adobe.com/xdm-extensions/ims/user#id": "D13A1E7053E46A220A4C86E1@AdobeID",
    "@type": "https://ns.adobe.com/xdm-extensions/ims/user#"
  },
  "activitystreams:object": {
    "@type": "http://ns.adobe.com/xdm/assets/asset#",
    "xdm:asset_id": "urn:aaid:sc:us:4123ba4c-93a8-4c5d-b979-ffbbe4318185",
    "xdm:asset_name": "example.jpg",
    "xdm:etag": "6fc55d0389d856ae7deccebba54f110e",
    "xdm:path": "/MyFolder/example.jpg",
    "xdm:format": "image/jpeg"
  }
}
```

# Activity Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [activitystreams:actor](#activitystreams:actor) | complex | Optional | Activity (this schema) |
| [activitystreams:object](#activitystreams:object) | complex | Optional | Activity (this schema) |
| [activitystreams:target](#activitystreams:target) | complex | Optional | Activity (this schema) |
| [activitystreams:result](#activitystreams:result) | complex | Optional | Activity (this schema) |
| [activitystreams:origin](#activitystreams:origin) | complex | Optional | Activity (this schema) |
| [activitystreams:instrument](#activitystreams:instrument) | complex | Optional | Activity (this schema) |
| [activitystreams:attachment](#activitystreams:attachment) | complex | Optional | [Object](object.schema.md#activitystreams:attachment) |
| [activitystreams:attributedTo](#activitystreams:attributedTo) | complex | Optional | [Object](object.schema.md#activitystreams:attributedTo) |
| [activitystreams:audience](#activitystreams:audience) | complex | Optional | [Object](object.schema.md#activitystreams:audience) |
| [activitystreams:content](#activitystreams:content) | complex | Optional | [Object](object.schema.md#activitystreams:content) |
| [activitystreams:context](#activitystreams:context) | complex | Optional | [Object](object.schema.md#activitystreams:context) |
| [activitystreams:name](#activitystreams:name) | complex | Optional | [Object](object.schema.md#activitystreams:name) |
| [activitystreams:endTime](#activitystreams:endTime) | `string` | Optional | [Object](object.schema.md#activitystreams:endTime) |
| [activitystreams:generator](#activitystreams:generator) | complex | Optional | [Object](object.schema.md#activitystreams:generator) |
| [activitystreams:icon](#activitystreams:icon) | complex | Optional | [Object](object.schema.md#activitystreams:icon) |
| [activitystreams:image](#activitystreams:image) | complex | Optional | [Object](object.schema.md#activitystreams:image) |
| [activitystreams:inReplyTo](#activitystreams:inReplyTo) | complex | Optional | [Object](object.schema.md#activitystreams:inReplyTo) |
| [activitystreams:location](#activitystreams:location) | complex | Optional | [Object](object.schema.md#activitystreams:location) |
| [activitystreams:preview](#activitystreams:preview) | complex | Optional | [Object](object.schema.md#activitystreams:preview) |
| [activitystreams:published](#activitystreams:published) | `string` | Optional | [Object](object.schema.md#activitystreams:published) |
| [activitystreams:replies](#activitystreams:replies) | Collection | Optional | [Object](object.schema.md#activitystreams:replies) |
| [activitystreams:startTime](#activitystreams:startTime) | `string` | Optional | [Object](object.schema.md#activitystreams:startTime) |
| [activitystreams:summary](#activitystreams:summary) | complex | Optional | [Object](object.schema.md#activitystreams:summary) |
| [activitystreams:tag](#activitystreams:tag) | complex | Optional | [Object](object.schema.md#activitystreams:tag) |
| [activitystreams:updated](#activitystreams:updated) | `string` | Optional | [Object](object.schema.md#activitystreams:updated) |
| [activitystreams:url](#activitystreams:url) | complex | Optional | [Object](object.schema.md#activitystreams:url) |
| [activitystreams:to](#activitystreams:to) | complex | Optional | [Object](object.schema.md#activitystreams:to) |
| [activitystreams:bto](#activitystreams:bto) | complex | Optional | [Object](object.schema.md#activitystreams:bto) |
| [activitystreams:cc](#activitystreams:cc) | complex | Optional | [Object](object.schema.md#activitystreams:cc) |
| [activitystreams:bcc](#activitystreams:bcc) | complex | Optional | [Object](object.schema.md#activitystreams:bcc) |
| [activitystreams:mediaType](#activitystreams:mediaType) | `string` | Optional | [Object](object.schema.md#activitystreams:mediaType) |
| [activitystreams:duration](#activitystreams:duration) | `string` | Optional | [Object](object.schema.md#activitystreams:duration) |

## activitystreams:actor

Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-actor) document for a complete description.

`activitystreams:actor`
* is optional
* type: complex
* defined in this schema

### activitystreams:actor Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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









## activitystreams:object

When used within an Activity, describes the direct object of the activity. For instance, in the activity &#39;John added a movie to his wishlist&#39;, the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object) document for a complete description.

`activitystreams:object`
* is optional
* type: complex
* defined in this schema

### activitystreams:object Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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









## activitystreams:target

Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition &#39;to&#39;. For instance, in the activity &#39;John added a movie to his wishlist&#39;, the target of the activity is John&#39;s wishlist. An activity can have more than one target. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-target) document for a complete description.

`activitystreams:target`
* is optional
* type: complex
* defined in this schema

### activitystreams:target Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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









## activitystreams:result

Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-result) document for a complete description.

`activitystreams:result`
* is optional
* type: complex
* defined in this schema

### activitystreams:result Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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









## activitystreams:origin

Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition &#39;from&#39;. For instance, in the activity &#39;John moved an item to List B from List A&#39;, the origin of the activity is &#39;List A&#39;. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-origin) document for a complete description.

`activitystreams:origin`
* is optional
* type: complex
* defined in this schema

### activitystreams:origin Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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









## activitystreams:instrument

Identifies one or more objects used (or to be used) in the completion of an Activity. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-instrument) document for a complete description.

`activitystreams:instrument`
* is optional
* type: complex
* defined in this schema

### activitystreams:instrument Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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









## activitystreams:attachment

Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attachment) document for a complete description.

`activitystreams:attachment`
* is optional
* type: complex
* defined in [Object](object.schema.md#activitystreams:attachment)

### activitystreams:attachment Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:attributedTo)

### activitystreams:attributedTo Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:audience)

### activitystreams:audience Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:content)

### activitystreams:content Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`



#### Condition 2


* [RDF Language Tagged String](rdf-langstring.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/rdf-langstring`






## activitystreams:context

Identifies the context within which the object exists or an activity was performed. The notion of &#39;context&#39; used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-context) document for a complete description.

`activitystreams:context`
* is optional
* type: complex
* defined in [Object](object.schema.md#activitystreams:context)

### activitystreams:context Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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









## activitystreams:name

A simple, human-readable, plain-text name for the object. HTML markup must not be included. The name may be expressed using multiple language-tagged values. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name) document for a complete description.

`activitystreams:name`
* is optional
* type: complex
* defined in [Object](object.schema.md#activitystreams:name)

### activitystreams:name Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`



#### Condition 2


* [RDF Language Tagged String](rdf-langstring.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/rdf-langstring`






## activitystreams:endTime

The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-endtime) document for a complete description.

`activitystreams:endTime`
* is optional
* type: `string`
* defined in [Object](object.schema.md#activitystreams:endTime)

### activitystreams:endTime Type


`string`
* format: `date-time` date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## activitystreams:generator

Identifies the entity (e.g. an application) that generated the object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-generator) document for a complete description.

`activitystreams:generator`
* is optional
* type: complex
* defined in [Object](object.schema.md#activitystreams:generator)

### activitystreams:generator Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:icon)

### activitystreams:icon Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Image Document](image.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/image`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:image)

### activitystreams:image Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Image Document](image.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/image`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:inReplyTo)

### activitystreams:inReplyTo Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:location)

### activitystreams:location Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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









## activitystreams:preview

Identifies an entity that provides a preview of this object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview) document for a complete description.

`activitystreams:preview`
* is optional
* type: complex
* defined in [Object](object.schema.md#activitystreams:preview)

### activitystreams:preview Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:published)

### activitystreams:published Type


`string`
* format: `date-time` date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## activitystreams:replies

Identifies a Collection containing objects considered to be responses to this object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-replies) document for a complete description.

`activitystreams:replies`
* is optional
* type: Collection
* defined in [Object](object.schema.md#activitystreams:replies)

### activitystreams:replies Type


* [Collection](collection.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/collection`





## activitystreams:startTime

The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-starttime) document for a complete description.

`activitystreams:startTime`
* is optional
* type: `string`
* defined in [Object](object.schema.md#activitystreams:startTime)

### activitystreams:startTime Type


`string`
* format: `date-time` date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## activitystreams:summary

A natural language summarization of the object encoded as HTML. Multiple language tagged summaries may be provided. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary) document for a complete description.

`activitystreams:summary`
* is optional
* type: complex
* defined in [Object](object.schema.md#activitystreams:summary)

### activitystreams:summary Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`



#### Condition 2


* [RDF Language Tagged String](rdf-langstring.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/rdf-langstring`






## activitystreams:tag

One or more &#39;tags&#39; that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tag) document for a complete description.

`activitystreams:tag`
* is optional
* type: complex
* defined in [Object](object.schema.md#activitystreams:tag)

### activitystreams:tag Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:updated)

### activitystreams:updated Type


`string`
* format: `date-time` date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## activitystreams:url

Identifies one or more links to representations of the object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-url) document for a complete description.

`activitystreams:url`
* is optional
* type: complex
* defined in [Object](object.schema.md#activitystreams:url)

### activitystreams:url Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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









## activitystreams:to

Identifies an entity considered to be part of the public primary audience of an Object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-to) document for a complete description.

`activitystreams:to`
* is optional
* type: complex
* defined in [Object](object.schema.md#activitystreams:to)

### activitystreams:to Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:bto)

### activitystreams:bto Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:cc)

### activitystreams:cc Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:bcc)

### activitystreams:bcc Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `array`.

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
* defined in [Object](object.schema.md#activitystreams:mediaType)

### activitystreams:mediaType Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5Cw%2B%5C%2F%5B-.%5Cw%5D%2B(%3F%3A%5C%2B%5B-.%5Cw%5D%2B)%3F)):
```regex
\w+\/[-.\w]+(?:\+[-.\w]+)?
```






## activitystreams:duration
### XSD Duration

XSD Duration according to [specification](https://www.w3.org/TR/xmlschema11-2/#duration)

`activitystreams:duration`
* is optional
* type: `string`
* defined in [Object](object.schema.md#activitystreams:duration)

### activitystreams:duration Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B-%5D%3FP(%3F!%24)(%3F%3A%5Cd%2BY)%3F(%3F%3A%5Cd%2BM)%3F(%3F%3A%5Cd%2BD)%3F(%3F%3AT(%3F!%24)(%3F%3A%5Cd%2BH)%3F(%3F%3A%5Cd%2BM)%3F(%3F%3A%5Cd%2B(%3F%3A%5C.%5Cd%2B)%3FS)%3F)%3F%24)):
```regex
^[-]?P(?!$)(?:\d+Y)?(?:\d+M)?(?:\d+D)?(?:T(?!$)(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?$
```





