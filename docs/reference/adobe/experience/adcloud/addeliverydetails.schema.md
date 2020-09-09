
# Adobe Advertising Cloud Ad Delivery Details Schema

```
https://ns.adobe.com/experience/adcloud/addeliverydetails
```

Adobe Advertising Cloud Search Ad Delivery Details.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/addeliverydetails.schema.json](adobe/experience/adcloud/addeliverydetails.schema.json) |

## Adobe Advertising Cloud Ad Delivery Details Example
```json
{
  "xdm:placementWebsite": "happyordinaryday.com",
  "xdm:siteLinkText": "Healthy Diets",
  "xdm:interestLocationID": "4087",
  "xdm:physicalLocationID": "1014185"
}
```

# Adobe Advertising Cloud Ad Delivery Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:interestLocationID](#xdminterestlocationid) | `string` | Optional | Adobe Advertising Cloud Ad Delivery Details (this schema) |
| [xdm:physicalLocationID](#xdmphysicallocationid) | `string` | Optional | Adobe Advertising Cloud Ad Delivery Details (this schema) |
| [xdm:placementWebsite](#xdmplacementwebsite) | `string` | Optional | Adobe Advertising Cloud Ad Delivery Details (this schema) |
| [xdm:siteLinkText](#xdmsitelinktext) | `string` | Optional | Adobe Advertising Cloud Ad Delivery Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:interestLocationID
### Interest Location Identifier

Location based on interest expressed in search query. For eg. when the search is for string- 'hotel in goa' here the request might be originating from Bangalore but the interest is on Goa.

`xdm:interestLocationID`
* is optional
* type: `string`
* defined in this schema

### xdm:interestLocationID Type


`string`






## xdm:physicalLocationID
### Physical Location Identifier

Surfer browsing location. This isn't exactly the location name - like city or country, instead it is a reference from SE for a geo target.

`xdm:physicalLocationID`
* is optional
* type: `string`
* defined in this schema

### xdm:physicalLocationID Type


`string`






## xdm:placementWebsite
### Placement website

Website where the advertisement was shown.

`xdm:placementWebsite`
* is optional
* type: `string`
* defined in this schema

### xdm:placementWebsite Type


`string`






## xdm:siteLinkText
### Site Link Text

Actual site link is being clicked in advertisement.

`xdm:siteLinkText`
* is optional
* type: `string`
* defined in this schema

### xdm:siteLinkText Type


`string`





