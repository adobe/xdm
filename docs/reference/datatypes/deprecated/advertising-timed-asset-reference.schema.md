
# Ad asset reference Schema

```
https://ns.adobe.com/xdm/context/advertising-timed-asset-reference
```

Ad asset reference is info about the ad captured by the experience event.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/deprecated/advertising-timed-asset-reference.schema.json](datatypes/deprecated/advertising-timed-asset-reference.schema.json) |
## Schema Hierarchy

* Ad asset reference `https://ns.adobe.com/xdm/context/advertising-timed-asset-reference`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Ad asset reference Example
```json
{
  "@id": "https://data.adobe.io/entities/asser-reference/23423",
  "xdm:creativeID": "6738737",
  "dc:title": "Acme offer 21",
  "xmpDM:duration": 23
}
```

# Ad asset reference Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Ad asset reference (this schema) |
| [dc:title](#dctitle) | `string` | Optional | Ad asset reference (this schema) |
| [xdm:advertiser](#xdmadvertiser) | `string` | Optional | Ad asset reference (this schema) |
| [xdm:campaign](#xdmcampaign) | `string` | Optional | Ad asset reference (this schema) |
| [xdm:creativeID](#xdmcreativeid) | `string` | Optional | Ad asset reference (this schema) |
| [xdm:creativeURL](#xdmcreativeurl) | `string` | Optional | Ad asset reference (this schema) |
| [xdm:placementID](#xdmplacementid) | `string` | Optional | Ad asset reference (this schema) |
| [xdm:siteID](#xdmsiteid) | `string` | Optional | Ad asset reference (this schema) |
| [xmpDM:duration](#xmpdmduration) | `integer` | Optional | Ad asset reference (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Ad ID

Identifier of the ad asset provided by media analytics customers. Following the Ad-ID standard [https://www.ad-id.org].

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## dc:title
### Ad name

The friendly and human-readable name of the ad asset.

`dc:title`
* is optional
* type: `string`
* defined in this schema

### dc:title Type


`string`






## xdm:advertiser
### Ad advertiser

Company/Brand whose product is featured in the ad.

`xdm:advertiser`
* is optional
* type: `string`
* defined in this schema

### xdm:advertiser Type


`string`






## xdm:campaign
### Ad campaign

ID of the ad campaign.

`xdm:campaign`
* is optional
* type: `string`
* defined in this schema

### xdm:campaign Type


`string`






## xdm:creativeID
### Ad creative ID

The ID of the ad creative.

`xdm:creativeID`
* is optional
* type: `string`
* defined in this schema

### xdm:creativeID Type


`string`






## xdm:creativeURL
### Ad creative URL

The URL of the ad creative.

`xdm:creativeURL`
* is optional
* type: `string`
* defined in this schema

### xdm:creativeURL Type


`string`






## xdm:placementID
### Ad placement ID

Placement ID of the ad.

`xdm:placementID`
* is optional
* type: `string`
* defined in this schema

### xdm:placementID Type


`string`






## xdm:siteID
### Ad site ID

ID of the ad site.

`xdm:siteID`
* is optional
* type: `string`
* defined in this schema

### xdm:siteID Type


`string`






## xmpDM:duration
### Ad length or duration

Length or duration of ad asset in seconds.

`xmpDM:duration`
* is optional
* type: `integer`
* defined in this schema

### xmpDM:duration Type


`integer`





