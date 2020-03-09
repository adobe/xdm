
# Emitted Event Schema

```
https://ns.adobe.com/xdm/common/event/emitted
```

The `emitted event` represents the activity of emitting a message or some `object`. This event type provides the capability to conform custom activities to the XDM event envelope. A custom activity is one where the system transporting the event isn't aware of what is in the event. A custom activity typically tends to be configured by a system's end-user. Take, for example, custom OSGI events in AEM. One concern does arise regarding the `emitted event`, which is, its generic nature that allows for almost every activity to be modeled as 'message emitted' activity. This, however, is a trap that publishers of the XDM event envelope must steer away from.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | No | Experimental | No | Forbidden | Permitted | [common/event/emitted.schema.json](common/event/emitted.schema.json) |
## Schema Hierarchy

* Emitted Event `https://ns.adobe.com/xdm/common/event/emitted`
  * [EventEnvelope](../eventenvelope.schema.md) `https://ns.adobe.com/xdm/common/eventenvelope`


## Emitted Event Example
```json
{
  "@id": "https://events.adobe.io/event/id/82235bac-2b81-4e70-90b5-2bd1f04b5c7b",
  "@type": "https://ns.adobe.com/xdm/common/event/emitted",
  "xdm:objectType": "https://osgi.org/javadoc/r4v42/org/osgi/service/event/Event.html#io/adobe/event/sample/sku",
  "activitystreams:published": "2016-07-16T19:20:30+01:00",
  "activitystreams:to": {
    "@type": "https://ns.adobe.com/adobecloudplatform/ims/organization",
    "https://ns.adobe.com/adobecloudplatform/ims/organization#id": "08B3E5CE5822FC520A494229@AdobeOrg"
  },
  "activitystreams:generator": {
    "@type": "https://ns.adobe.com/xdm/content/repository",
    "xdm:root": "http://francois.corp.adobe.com:4502/"
  },
  "activitystreams:object": {
    "@type": "https://osgi.org/javadoc/r4v42/org/osgi/service/event/Event.html#io/adobe/event/sample/sku",
    "topic": "io/adobe/event/sample/sku",
    "properties": {
      "type": "created",
      "id": "1234"
    }
  }
}
```

# Emitted Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@type](#type) | `const` | Optional | Emitted Event (this schema) |
| [xdm:objectType](#xdmobjecttype) | complex | Optional | [EventEnvelope](../eventenvelope.schema.md#xdmobjecttype) |
| `*` | any | Additional | this schema *allows* additional properties |

## @type


`@type`
* is optional
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/common/event/emitted"
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






