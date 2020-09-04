
# Adobe Advertising Cloud Partner Data Schema

```
https://ns.adobe.com/experience/adcloud/partnerdata
```

Details related to Adobe Advertising Cloud partner data such as data associated with a segment and search and marketing partner IDs.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/partnerdata.schema.json](adobe/experience/adcloud/partnerdata.schema.json) |

## Adobe Advertising Cloud Partner Data Example
```json
{
  "xdm:id": "2",
  "xdm:data": "sample-conversion-id-123"
}
```

# Adobe Advertising Cloud Partner Data Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:data](#xdmdata) | `string` | Optional | Adobe Advertising Cloud Partner Data (this schema) |
| [xdm:id](#xdmid) | `string` | Optional | Adobe Advertising Cloud Partner Data (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:data
### Search/Marketing partner data associated with a segment

Unique identifiers such conversion ID (in case of Google) associated with the synced segment.

`xdm:data`
* is optional
* type: `string`
* defined in this schema

### xdm:data Type


`string`






## xdm:id
### Search/Marketing partner ID

Internal mapping of search/marketing platforms/partners to IDs for Adobe Advertising Cloud search.

`xdm:id`
* is optional
* type: `string`
* defined in this schema

### xdm:id Type


`string`





