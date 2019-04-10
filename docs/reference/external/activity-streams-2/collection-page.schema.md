
# Collection Page Schema

```
https://ns.adobe.com/xdm/external/activity-streams-2/collection-page
```

Used to represent distinct subsets of items from a `Collection`. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-collectionpage) for a complete description of the `CollectionPage` object.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [external/activity-streams-2/collection-page.schema.json](external/activity-streams-2/collection-page.schema.json) |
## Schema Hierarchy

* Collection Page `https://ns.adobe.com/xdm/external/activity-streams-2/collection-page`
  * [Collection](collection.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/collection`
  * [Link](link.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/link`
  * [Collection Page](collection-page.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/collection-page`


## Collection Page Example
```json
{
  "@context": {
    "activitystreams": "http://www.w3.org/ns/activitystreams#"
  },
  "activitystreams:summary": "Page 1 of Sally's notes",
  "@type": "http://www.w3.org/ns/activitystreams#CollectionPage",
  "@id": "http://example.org/foo?page=1",
  "activitystreams:partOf": "http://example.org/foo",
  "activitystreams:items": [
    {
      "@type": "http://www.w3.org/ns/activitystreams#Note",
      "activitystreams:name": "A Simple Note"
    },
    {
      "@type": "http://www.w3.org/ns/activitystreams#Note",
      "activitystreams:name": "Another Simple Note"
    }
  ]
}
```

# Collection Page Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [activitystreams:current](#activitystreamscurrent) | complex | Optional | [Collection](collection.schema.md#activitystreamscurrent) |
| [activitystreams:first](#activitystreamsfirst) | complex | Optional | [Collection](collection.schema.md#activitystreamsfirst) |
| [activitystreams:items](#activitystreamsitems) | complex | Optional | [Collection](collection.schema.md#activitystreamsitems) |
| [activitystreams:last](#activitystreamslast) | complex | Optional | [Collection](collection.schema.md#activitystreamslast) |
| [activitystreams:next](#activitystreamsnext) | complex | Optional | Collection Page (this schema) |
| [activitystreams:partOf](#activitystreamspartof) | complex | Optional | Collection Page (this schema) |
| [activitystreams:prev](#activitystreamsprev) | complex | Optional | Collection Page (this schema) |
| [activitystreams:totalItems](#activitystreamstotalitems) | `integer` | Optional | [Collection](collection.schema.md#activitystreamstotalitems) |
| `*` | any | Additional | this schema *allows* additional properties |

## activitystreams:current

In a paged Collection, indicates the page that contains the most recently updated member items. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-current) document for a complete description.

`activitystreams:current`
* is optional
* type: complex
* defined in [Collection](collection.schema.md#activitystreamscurrent)

### activitystreams:current Type


**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Collection Page](collection-page.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/collection-page`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`






## activitystreams:first

In a paged Collection, indicates the furthest preceeding page of items in the collection. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-first) document for a complete description.

`activitystreams:first`
* is optional
* type: complex
* defined in [Collection](collection.schema.md#activitystreamsfirst)

### activitystreams:first Type


**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Collection Page](collection-page.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/collection-page`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`






## activitystreams:items

Identifies the items contained in a collection. The items might be ordered or unordered. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-items) document for a complete description.

`activitystreams:items`
* is optional
* type: complex
* defined in [Collection](collection.schema.md#activitystreamsitems)

### activitystreams:items Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


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









## activitystreams:last

In a paged Collection, indicates the furthest proceeding page of the collection. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-last) document for a complete description.

`activitystreams:last`
* is optional
* type: complex
* defined in [Collection](collection.schema.md#activitystreamslast)

### activitystreams:last Type


**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Collection Page](collection-page.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/collection-page`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`






## activitystreams:next

In a paged Collection, indicates the next page of items. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-next) document for a complete description.

`activitystreams:next`
* is optional
* type: complex
* defined in this schema

### activitystreams:next Type


**Any** following *options* needs to be fulfilled.


#### Option 1


* [Collection Page](collection-page.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/collection-page`


#### Option 2


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`






## activitystreams:partOf

Identifies the Collection to which a CollectionPage objects items belong. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-partof) document for a complete description.

`activitystreams:partOf`
* is optional
* type: complex
* defined in this schema

### activitystreams:partOf Type


**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Collection](collection.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/collection`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`






## activitystreams:prev

In a paged Collection, identifies the previous page of items. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-prev) document for a complete description.

`activitystreams:prev`
* is optional
* type: complex
* defined in this schema

### activitystreams:prev Type


**Any** following *options* needs to be fulfilled.


#### Option 1


* [Collection Page](collection-page.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/collection-page`


#### Option 2


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`






## activitystreams:totalItems

A non-negative integer specifying the total number of objects contained by the logical view of the collection. This number might not reflect the actual number of items serialized within the Collection object instance. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-totalitems) document for a complete description.

`activitystreams:totalItems`
* is optional
* type: `integer`
* defined in [Collection](collection.schema.md#activitystreamstotalitems)

### activitystreams:totalItems Type


`integer`
* minimum value: `0`





