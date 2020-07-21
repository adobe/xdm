
# Rejected Event Schema

```
https://ns.adobe.com/xdm/common/event/rejected
```

A `rejected event` follows the semantics of the [reject activity in W3C activity streams](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-reject), with one notable difference.
The W3C `reject activity` can be used to express two things:

1.  either an order to reject something
2.  or the observation of a rejection

The XDM `rejected event` is only valid in the latter case, i.e. to express that something (the `object`) has been rejected by someone (the `actor`).
`target` and `origin` have no specific meaning for rejections.

Some examples of the `rejected event` include:

1.  Changes to an asset were rejected by the editor/approver.
2.  A batch processing job was rejected by a service on account of runtime errors that occurred during processing.
3.  A loan application was rejected by a financial institution.
4.  A purchase order was rejected by a firm owing to non payment of previous dues.


| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | No | Stable | No | Forbidden | Permitted | [common/event/rejected.schema.json](common/event/rejected.schema.json) |
## Schema Hierarchy

* Rejected Event `https://ns.adobe.com/xdm/common/event/rejected`
  * [EventEnvelope](../eventenvelope.schema.md) `https://ns.adobe.com/xdm/common/eventenvelope`


## Rejected Event Example
```json
{
  "@id": "https://events.adobe.io/events/id/82235bac-2b81-4e70-90b5-2bd1f04b5c7b",
  "activitystreams:published": "2016-07-16T19:20:30+01:00",
  "activitystreams:to": {
    "https://ns.adobe.com/adobecloudplatform/ims/user#id": "C74F69D7594880280A495D09@AdobeID",
    "@type": "https://ns.adobe.com/adobecloudplatform/ims/user"
  },
  "@type": "https://ns.adobe.com/xdm/common/event/rejected",
  "xdm:objectType": "https://stock.adobe.com/content/json/2017-08-31",
  "activitystreams:actor": {
    "name": "Adobe Stock Ingestion Service",
    "@type": "http://www.w3.org/ns/activitystreams#Service"
  },
  "activitystreams:object": {
    "@type": "https://stock.adobe.com/content/json/2017-08-31",
    "filename": "2017-03-20T183243Z_131980992_RC110C7B3030_RTRMADP_0_BRAZIL-CORRUPTION-FOOD.JSON",
    "url": "http://s3.amazonaws.com/bucket/asset/file.jpg",
    "activitystreams:generator": {
      "name": "reuters"
    }
  },
  "activitystreams:attributedTo": [
    {
      "code": "ASSET_TYPE_EMPTY",
      "message": "Asset type is empty",
      "location_type": "jsonpath",
      "location": "$.type"
    },
    {
      "code": "SIGNAL_KEY_NOT_ARRAY",
      "message": "Signal key is not an array"
    }
  ]
}
```

# Rejected Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@type](#type) | `const` | Optional | Rejected Event (this schema) |
| [xdm:objectType](#xdmobjecttype) | complex | Optional | [EventEnvelope](../eventenvelope.schema.md#xdmobjecttype) |
| `*` | any | Additional | this schema *allows* additional properties |

## @type


`@type`
* is optional
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/common/event/rejected"
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






