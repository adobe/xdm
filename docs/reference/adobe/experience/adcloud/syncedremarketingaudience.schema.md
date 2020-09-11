
# Synchronized Remarketing Audiences Schema

```
https://ns.adobe.com/experience/adcloud/syncedremarketingaudience
```

Details about Adobe Advertising Cloud search segments used for retargeting surfers on a search and/or marketing platform.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/syncedremarketingaudience.schema.json](adobe/experience/adcloud/syncedremarketingaudience.schema.json) |

## Synchronized Remarketing Audiences Example
```json
{
  "xdm:segmentId": "https://data.adobe.io/entities/aam-segment/4238827",
  "xdm:segmentType": 3,
  "xdm:timestamp": "2018-08-07T08:06:34.672Z",
  "xdm:partnerDetails": [
    {
      "xdm:id": "2",
      "xdm:data": "sample-conversion-id-123"
    },
    {
      "xdm:id": "1",
      "xdm:data": "sample-conversion-id-124"
    }
  ]
}
```

# Synchronized Remarketing Audiences Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:partnerDetails](#xdmpartnerdetails) | Adobe Advertising Cloud Partner Data | Optional | Synchronized Remarketing Audiences (this schema) |
| [xdm:segmentID](#xdmsegmentid) | `string` | Optional | Synchronized Remarketing Audiences (this schema) |
| [xdm:timestamp](#xdmtimestamp) | `string` | Optional | Synchronized Remarketing Audiences (this schema) |
| [xdm:type](#xdmtype) | `integer` | Optional | Synchronized Remarketing Audiences (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:partnerDetails
### Marketing Partner Details

`xdm:partnerDetails`
* is optional
* type: Adobe Advertising Cloud Partner Data

* defined in this schema

### xdm:partnerDetails Type


Array type: Adobe Advertising Cloud Partner Data

All items must be of the type:
* [Adobe Advertising Cloud Partner Data](partnerdata.schema.md) – `https://ns.adobe.com/experience/adcloud/partnerdata`








## xdm:segmentID
### Segment ID

ID for the segment that would be used to retarget the surfer.

`xdm:segmentID`
* is optional
* type: `string`
* defined in this schema

### xdm:segmentID Type


`string`






## xdm:timestamp
### Timestamp

The timestamp when the retargeting entity, e.g. aam-segment, was synced to the marketing platform.

`xdm:timestamp`
* is optional
* type: `string`
* defined in this schema

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:type
### Segment/Audience Type

Type of segment, eg. AAM.

`xdm:type`
* is optional
* type: `integer`
* defined in this schema

### xdm:type Type


`integer`





