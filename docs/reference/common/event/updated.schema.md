
# Updated Event Schema

```
https://ns.adobe.com/xdm/common/event/updated
```

A `updated event` follows semantics that are exactly equivalent to the semantics described by the [`update activity`](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-update), except for one difference. The `update activity` can be used in imperative contexts, however, the `updated event` can only be used in passive contexts.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | No | Experimental | No | Forbidden | Permitted | [common/event/updated.schema.json](common/event/updated.schema.json) |
## Schema Hierarchy

* Updated Event `https://ns.adobe.com/xdm/common/event/updated`
  * [EventEnvelope](../eventenvelope.schema.md) `https://ns.adobe.com/xdm/common/eventenvelope`


## Updated Event Example
```json
{
  "@id": "https://events.adobe.io/event/id/82235bac-2b81-4e70-90b5-2bd1f04b5c7b",
  "@type": "https://ns.adobe.com/xdm/common/event/updated",
  "xdm:objectType": "http://ns.adobe.com/adobecloud/core/1.0/asset",
  "activitystreams:actor": {
    "@id": "D13A1E7053E46A220A4C86E1@AdobeID",
    "@type": "https://ns.adobe.com/adobecloudplatform/ims/user"
  },
  "activitystreams:generator": {
    "xdm:root": "https://cc-api-storage.adobe.io/",
    "@type": "https://ns.adobe.com/xdm/content/repository"
  },
  "activitystreams:object": {
    "@type": "http://ns.adobe.com/adobecloud/core/1.0/asset",
    "repo:id": "urn:aaid:sc:us:4123ba4c-93a8-4c5d-b979-ffbbe4318185",
    "xdm:name": "example.jpg",
    "repo:etag": "6fc55d0389d856ae7deccebba54f110e",
    "xdm:path": "/MyFolder/example.jpg",
    "dc:format": "image/jpeg"
  },
  "activitystreams:published": "2016-07-16T19:20:30+01:00",
  "activitystreams:to": {
    "@id": "D13A1E7053E46A220A4C86E1@AdobeID",
    "@type": "https://ns.adobe.com/adobecloudplatform/ims/user"
  }
}
```

# Updated Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@type](#type) | `const` | Optional | Updated Event (this schema) |
| [xdm:objectType](#xdmobjecttype) | complex | Optional | [EventEnvelope](../eventenvelope.schema.md#xdmobjecttype) |
| `*` | any | Additional | this schema *allows* additional properties |

## @type


`@type`
* is optional
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/common/event/updated"
```





## xdm:objectType

This is the type of the `object` that has been emitting this event. The value of this field MUST be exactly same as the value of the `object.type` field. Making the type available in the event envelope allows routing systems to dispatch events based on the object type without inspecting the object itself.

`xdm:objectType`
* is optional
* type: complex
* defined in [EventEnvelope](../eventenvelope.schema.md#xdmobjecttype)

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






