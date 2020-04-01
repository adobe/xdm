
# EventEnvelope Schema

```
https://ns.adobe.com/xdm/common/eventenvelope
```

An `EventEnvelope` is a type of `Activity` (in the sense of [W3C Activity Streams 2.0](https://www.w3.org/TR/activitystreams-core/) that applies to digital experiences in general, and to entities of the Experience Data Model in particular. It is being used to track or audit changes to core entities like assets, pages, or campaigns, but also to track observed interactions of consumers of digital experiences. These observed interactions can range from simple technical loading, to passive consumption, to active engagement. Through the `EventEnvelope`, a varied set of observable entities can be tracked in a common way, enabling the establishment of publish-subscribe or event bus systems that dispatch `EventEnvelopes` based on the metadata that is part of the envelope, without having to inspect the payload `object`.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [common/eventenvelope.schema.json](common/eventenvelope.schema.json) |
## Schema Hierarchy

* EventEnvelope `https://ns.adobe.com/xdm/common/eventenvelope`
  * [Activity](../external/activity-streams-2/activity.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/activity`
  * [JSON-LD `@type`](../external/activity-streams-2/type.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/type`


## EventEnvelope Examples

```json
{
  "@type": "https://ns.adobe.com/xdm/common/event/created",
  "xdm:objectType": "http://ns.adobe.com/adobecloud/core/1.0/asset",
  "activitystreams:published": "2016-07-16T19:20:30+01:00",
  "@id": "https://events.adobe.io/event/id/82235bac-2b81-4e70-90b5-2bd1f04b5c7b",
  "activitystreams:to": {
    "@type": "https://ns.adobe.com/adobecloudplatform/ims/user",
    "@id": "D13A1E7053E46A220A4C86E1@AdobeID"
  },
  "activitystreams:generator": {
    "@type": "https://ns.adobe.com/xdm/content/repository",
    "xdm:root": "https://cc-api-storage-stage.adobe.io/"
  },
  "activitystreams:actor": {
    "@type": "https://ns.adobe.com/adobecloudplatform/ims/user",
    "@id": "D13A1E7053E46A220A4C86E1@AdobeID"
  },
  "activitystreams:object": {
    "@type": "http://ns.adobe.com/adobecloud/core/1.0/asset",
    "repo:id": "urn:aaid:sc:us:4123ba4c-93a8-4c5d-b979-ffbbe4318185",
    "@id": "https://cc-api-storage-stage.adobe.io/id/urn:aaid:sc:us:4123ba4c-93a8-4c5d-b979-ffbbe4318185",
    "xdm:name": "example.jpg",
    "xdm:path": "/MyFolder/example.jpg",
    "dc:format": "image/jpg",
    "repo:etag": "\"6fc55d0389d856ae7deccebba54f110e\""
  }
}
```

```json
{
  "@type": "https://ns.adobe.com/xdm/common/event/updated",
  "xdm:objectType": "http://ns.adobe.com/adobecloud/core/1.0/asset",
  "activitystreams:published": "2016-07-16T19:20:30+01:00",
  "@id": "https://events.adobe.io/event/id/82235bac-2b81-4e70-90b5-2bd1f04b5c7b",
  "activitystreams:to": {
    "@type": "http://ns.adobe.com/adobecloudplatform/ims/organization",
    "@id": "08B3E5CE5822FC520A494229@AdobeOrg"
  },
  "activitystreams:generator": {
    "@type": "https://ns.adobe.com/xdm/content/repository",
    "@id": "https://francois.corp.adobe.com:4502/"
  },
  "activitystreams:actor": {
    "@type": "https://ns.adobe.com/experience/aem/user",
    "@id": "admin"
  },
  "activitystreams:object": {
    "@type": "http://ns.adobe.com/adobecloud/core/1.0/asset",
    "repo:id": "urn:aaid:aem:4123ba4c-93a8-4c5d-b979-ffbbe4318185",
    "@id": "https://francois.corp.adobe.com:4502/content/dam/Fx_DUKE-small.jpg",
    "xdm:name": "Fx_DUKE-small.png",
    "xdm:path": "/content/dam/Fx_DUKE-small.png",
    "dc:format": "image/png",
    "repo:etag": "\"6fc55d0389d856ae7wddwebba54f110e\""
  }
}
```

```json
{
  "@type": "https://ns.adobe.com/xdm/common/event/created",
  "xdm:objectType": "http://ns.adobe.com/adobecloud/core/1.0/asset",
  "activitystreams:published": "2016-07-16T19:20:30+01:00",
  "@id": "https://events.adobe.io/event/id/82235bac-2b81-4e70-90b5-2bd1f04b5c7b",
  "activitystreams:to": {
    "@type": "https://ns.adobe.com/adobecloudplatform/ims/user",
    "@id": "D13A1E7053E46A220A4C86E1@AdobeID"
  },
  "activitystreams:generator": {
    "@type": "https://ns.adobe.com/xdm/content/repository",
    "xdm:root": "https://cc-api-storage-stage.adobe.io/"
  },
  "activitystreams:actor": {
    "@type": "https://ns.adobe.com/adobecloudplatform/ims/user",
    "@id": "D13A1E7053E46A220A4C86E1@AdobeID"
  },
  "activitystreams:object": {
    "@type": "http://ns.adobe.com/adobecloud/core/1.0/asset",
    "repo:id": "urn:aaid:sc:us:4123ba4c-93a8-4c5d-b979-ffbbe4318185",
    "@id": "https://cc-api-storage-stage.adobe.io/id/urn:aaid:sc:us:4123ba4c-93a8-4c5d-b979-ffbbe4318185"
  }
}
```

```json
{
  "@type": "https://ns.adobe.com/xdm/common/event/published",
  "xdm:objectType": "https://ns.adobe.com/xdm/content/componentized-page",
  "activitystreams:published": "2016-07-16T19:20:30+01:00",
  "@id": "https://events.adobe.io/event/id/82235bac-2b81-4e70-90b5-2bd1f04b5c7b",
  "activitystreams:to": {
    "@type": "http://ns.adobe.com/adobecloudplatform/ims/organization",
    "@id": "08B3E5CE5822FC520A494229@AdobeOrg"
  },
  "activitystreams:generator": {
    "@type": "https://ns.adobe.com/xdm/content/repository",
    "@id": "https://francois.corp.adobe.com:4502/"
  },
  "activitystreams:actor": {
    "@type": "https://ns.adobe.com/experience/aem/user",
    "@id": "admin"
  },
  "activitystreams:object": {
    "@type": "https://ns.adobe.com/xdm/content/componentized-page",
    "@id": "http://adobesummit.adobesandbox.com:4502/content/geometrixx/en/vintage.html",
    "dc:title": "Vintage Collection",
    "xdm:path": "/content/geometrixx/en/vintage.html"
  }
}
```

```json
{
  "@type": "https://ns.adobe.com/xdm/common/event/unpublished",
  "xdm:objectType": "https://ns.adobe.com/xdm/content/componentized-page",
  "activitystreams:published": "2016-07-16T19:20:30+01:00",
  "@id": "https://events.adobe.io/event/id/82235bac-2b81-4e70-90b5-2bd1f04b5c7b",
  "activitystreams:to": {
    "@type": "http://ns.adobe.com/adobecloudplatform/ims/organization",
    "@id": "08B3E5CE5822FC520A494229@AdobeOrg"
  },
  "activitystreams:generator": {
    "@type": "https://ns.adobe.com/xdm/content/repository",
    "@id": "https://francois.corp.adobe.com:4502/"
  },
  "activitystreams:actor": {
    "@type": "https://ns.adobe.com/experience/aem/user",
    "@id": "admin"
  },
  "activitystreams:object": {
    "@type": "https://ns.adobe.com/xdm/content/componentized-page",
    "@id": "http://adobesummit.adobesandbox.com:4502/content/geometrixx/en/vintage.html",
    "dc:title": "Vintage Collection",
    "xdm:path": "/content/geometrixx/en/vintage.html"
  }
}
```


# EventEnvelope Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [activitystreams:actor](#activitystreamsactor) | complex | Optional | [Activity](../external/activity-streams-2/activity.schema.md#activitystreamsactor) |
| [activitystreams:instrument](#activitystreamsinstrument) | complex | Optional | [Activity](../external/activity-streams-2/activity.schema.md#activitystreamsinstrument) |
| [activitystreams:object](#activitystreamsobject) | complex | **Required** | [Activity](../external/activity-streams-2/activity.schema.md#activitystreamsobject) |
| [activitystreams:origin](#activitystreamsorigin) | complex | Optional | [Activity](../external/activity-streams-2/activity.schema.md#activitystreamsorigin) |
| [activitystreams:result](#activitystreamsresult) | complex | Optional | [Activity](../external/activity-streams-2/activity.schema.md#activitystreamsresult) |
| [activitystreams:target](#activitystreamstarget) | complex | Optional | [Activity](../external/activity-streams-2/activity.schema.md#activitystreamstarget) |
| [xdm:objectType](#xdmobjecttype) | complex | **Required** | EventEnvelope (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## activitystreams:actor

Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-actor) document for a complete description.

`activitystreams:actor`
* is optional
* type: complex
* defined in [Activity](../external/activity-streams-2/activity.schema.md#activitystreamsactor)

### activitystreams:actor Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](../external/activity-streams-2/object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](../external/activity-streams-2/link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



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
        "$linkPath": "../external/activity-streams-2/object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "../external/activity-streams-2/link.schema.md"
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
* defined in [Activity](../external/activity-streams-2/activity.schema.md#activitystreamsinstrument)

### activitystreams:instrument Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](../external/activity-streams-2/object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](../external/activity-streams-2/link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



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
        "$linkPath": "../external/activity-streams-2/object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "../external/activity-streams-2/link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:object

When used within an Activity, describes the direct object of the activity. For instance, in the activity 'John added a movie to his wishlist', the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object) document for a complete description.

`activitystreams:object`
* is **required**
* type: complex
* defined in [Activity](../external/activity-streams-2/activity.schema.md#activitystreamsobject)

### activitystreams:object Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](../external/activity-streams-2/object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](../external/activity-streams-2/link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



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
        "$linkPath": "../external/activity-streams-2/object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "../external/activity-streams-2/link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:origin

Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition 'from'. For instance, in the activity 'John moved an item to List B from List A', the origin of the activity is 'List A'. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-origin) document for a complete description.

`activitystreams:origin`
* is optional
* type: complex
* defined in [Activity](../external/activity-streams-2/activity.schema.md#activitystreamsorigin)

### activitystreams:origin Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](../external/activity-streams-2/object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](../external/activity-streams-2/link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



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
        "$linkPath": "../external/activity-streams-2/object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "../external/activity-streams-2/link.schema.md"
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
* defined in [Activity](../external/activity-streams-2/activity.schema.md#activitystreamsresult)

### activitystreams:result Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](../external/activity-streams-2/object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](../external/activity-streams-2/link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



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
        "$linkPath": "../external/activity-streams-2/object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "../external/activity-streams-2/link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:target

Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition 'to'. For instance, in the activity 'John added a movie to his wishlist', the target of the activity is John's wishlist. An activity can have more than one target. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-target) document for a complete description.

`activitystreams:target`
* is optional
* type: complex
* defined in [Activity](../external/activity-streams-2/activity.schema.md#activitystreamstarget)

### activitystreams:target Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](../external/activity-streams-2/object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](../external/activity-streams-2/link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



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
        "$linkPath": "../external/activity-streams-2/object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "../external/activity-streams-2/link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## xdm:objectType

This is the type of the `object` that has been emitting this event. The value of this field MUST be exactly same as the value of the `object.type` field. Making the type available in the event envelope allows routing systems to dispatch events based on the object type without inspecting the object itself.

`xdm:objectType`
* is **required**
* type: complex
* defined in this schema

### xdm:objectType Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


Array type: 

All items must be of the type:
`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





#### Condition 2


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






