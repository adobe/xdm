
# Adobe Advertising Cloud Product Details displayed in Search Advertisement. Schema

```
https://ns.adobe.com/experience/adcloud/productdetails
```

Adobe Advertising Cloud Search Product Details.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/productdetails.schema.json](adobe/experience/adcloud/productdetails.schema.json) |

## Adobe Advertising Cloud Product Details displayed in Search Advertisement. Example
```json
{
  "xdm:productID": "LSTTDSF9J4DQYH8ZZZUSDBCRG",
  "xdm:country": "IN",
  "xdm:language": "en",
  "xdm:partitionID": "342294687595",
  "xdm:title": "Winter Jacket",
  "xdm:adType": "pla"
}
```

# Adobe Advertising Cloud Product Details displayed in Search Advertisement. Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:adType](#xdmadtype) | `string` | Optional | Adobe Advertising Cloud Product Details displayed in Search Advertisement. (this schema) |
| [xdm:country](#xdmcountry) | `string` | Optional | Adobe Advertising Cloud Product Details displayed in Search Advertisement. (this schema) |
| [xdm:language](#xdmlanguage) | `string` | Optional | Adobe Advertising Cloud Product Details displayed in Search Advertisement. (this schema) |
| [xdm:partitionID](#xdmpartitionid) | `string` | Optional | Adobe Advertising Cloud Product Details displayed in Search Advertisement. (this schema) |
| [xdm:productID](#xdmproductid) | `string` | Optional | Adobe Advertising Cloud Product Details displayed in Search Advertisement. (this schema) |
| [xdm:title](#xdmtitle) | `string` | Optional | Adobe Advertising Cloud Product Details displayed in Search Advertisement. (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:adType
### Product Ad Type

Ad Type for Product used in Google Shopping Campaigns.

`xdm:adType`
* is optional
* type: `string`
* defined in this schema

### xdm:adType Type


`string`



### xdm:adType Known Values
| Value | Description |
|-------|-------------|
| `pla_with_pog` | If the click is coming from a Purchases on Google-enabled Shopping ad |
| `pla` | If the click is coming from a Shopping ad |
| `pla_multichannel` | If the clicked Shopping ad included options for both “online” and “local” shopping channels. |
| `pla_with_promotion` | If the clicked Shopping ad displayed a merchant promotion. |




## xdm:country
### Product Country

The country of sale for the product in the clicked ad.

`xdm:country`
* is optional
* type: `string`
* defined in this schema

### xdm:country Type


`string`






## xdm:language
### Product Language

The language of your product information, as indicated in client's Merchant Center data feed.

`xdm:language`
* is optional
* type: `string`
* defined in this schema

### xdm:language Type


`string`






## xdm:partitionID
### Product Partition Identifier

Identifier for the product group the clicked product advertisement belongs to.

`xdm:partitionID`
* is optional
* type: `string`
* defined in this schema

### xdm:partitionID Type


`string`






## xdm:productID
### Product Identifier

Identifier for the product featured in the clicked advertisement.

`xdm:productID`
* is optional
* type: `string`
* defined in this schema

### xdm:productID Type


`string`






## xdm:title
### Product Title

Product title value shown in the advertisement.

`xdm:title`
* is optional
* type: `string`
* defined in this schema

### xdm:title Type


`string`





