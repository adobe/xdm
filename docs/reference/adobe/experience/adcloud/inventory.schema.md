
# Adobe Advertising Cloud Inventory Schema

```
https://ns.adobe.com/experience/adcloud/inventory
```

Adobe Advertising Cloud inventory traits.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/inventory.schema.json](adobe/experience/adcloud/inventory.schema.json) |
## Schema Hierarchy

* Adobe Advertising Cloud Inventory `https://ns.adobe.com/experience/adcloud/inventory`
  * [Adobe Advertising Cloud Segment Detail](segment.schema.md) `https://ns.adobe.com/experience/adcloud/segment`


## Adobe Advertising Cloud Inventory Example
```json
{
  "xdm:sessionId": "8ba48d0a-dd4a-41fb-a258-80c824186f11.1",
  "xdm:feedId": "1234556",
  "xdm:sspPartnerCode": "spotx",
  "xdm:siteId": "987654",
  "xdm:costCurrency": "USD",
  "xdm:inventorySourceId": "9",
  "xdm:segment": {
    "xdm:attributablePartnerId": "13",
    "xdm:attributableSegmentId": "123445",
    "xdm:segments": "AbbKlvGfgVH7WK2TH6jd,5lmd4aQCvvrv1yIhjlLQ,9uGk1eYROeHVWiGAOR4p"
  },
  "xdm:optimizationTag": "explt",
  "xdm:attributableDeviceGraphId": "1000"
}
```

# Adobe Advertising Cloud Inventory Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:attributableDeviceGraphId](#xdmattributabledevicegraphid) | `string` | Optional | Adobe Advertising Cloud Inventory (this schema) |
| [xdm:costCurrency](#xdmcostcurrency) | `string` | Optional | Adobe Advertising Cloud Inventory (this schema) |
| [xdm:feedId](#xdmfeedid) | `string` | Optional | Adobe Advertising Cloud Inventory (this schema) |
| [xdm:inventorySourceId](#xdminventorysourceid) | `string` | Optional | Adobe Advertising Cloud Inventory (this schema) |
| [xdm:optimizationTag](#xdmoptimizationtag) | `string` | Optional | Adobe Advertising Cloud Inventory (this schema) |
| [xdm:segment](#xdmsegment) | Adobe Advertising Cloud Segment Detail | Optional | Adobe Advertising Cloud Inventory (this schema) |
| [xdm:sessionId](#xdmsessionid) | `string` | Optional | Adobe Advertising Cloud Inventory (this schema) |
| [xdm:siteId](#xdmsiteid) | `string` | Optional | Adobe Advertising Cloud Inventory (this schema) |
| [xdm:sspPartnerCode](#xdmssppartnercode) | `string` | Optional | Adobe Advertising Cloud Inventory (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:attributableDeviceGraphId
### Attributable Device Graph Identifier

Identifier for the device graph attributable to a conversion event.

`xdm:attributableDeviceGraphId`
* is optional
* type: `string`
* defined in this schema

### xdm:attributableDeviceGraphId Type


`string`






## xdm:costCurrency
### Cost Currency

The ISO 4217 currency code used to pay partner for in ad opportunity.

`xdm:costCurrency`
* is optional
* type: `string`
* defined in this schema

### xdm:costCurrency Type


`string`


All instances must conform to this regular expression 
```regex
^[A-Z]{3}$
```

* test example: [USD](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=USD)
* test example: [EUR](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=EUR)




### xdm:costCurrency Examples

```json
"USD"
```

```json
"EUR"
```



## xdm:feedId
### Feed ID

Composite ID of the publisher, ad exchange, and other features.

`xdm:feedId`
* is optional
* type: `string`
* defined in this schema

### xdm:feedId Type


`string`






## xdm:inventorySourceId
### Inventory Source ID

The ID of the Adobe Advertising Cloud inventory source this opportunity was delivered on.

`xdm:inventorySourceId`
* is optional
* type: `string`
* defined in this schema

### xdm:inventorySourceId Type


`string`






## xdm:optimizationTag
### Optimization tag

Tag related with Optimization/ML.

`xdm:optimizationTag`
* is optional
* type: `string`
* defined in this schema

### xdm:optimizationTag Type


`string`






## xdm:segment
### Segmentation Details

Details associated with user segmentation rules.

`xdm:segment`
* is optional
* type: Adobe Advertising Cloud Segment Detail
* defined in this schema

### xdm:segment Type


* [Adobe Advertising Cloud Segment Detail](segment.schema.md) – `https://ns.adobe.com/experience/adcloud/segment`





## xdm:sessionId
### Session ID

Session ID associated with experience event, used to stitch together independent events which occurred in the same session.

`xdm:sessionId`
* is optional
* type: `string`
* defined in this schema

### xdm:sessionId Type


`string`






## xdm:siteId
### Site ID

Identifier for the web site where ad impression was served.

`xdm:siteId`
* is optional
* type: `string`
* defined in this schema

### xdm:siteId Type


`string`






## xdm:sspPartnerCode
### SSP Partner Code

The partner (exchange) through which Adobe Advertising Cloud receives the inventory opportunity.

`xdm:sspPartnerCode`
* is optional
* type: `string`
* defined in this schema

### xdm:sspPartnerCode Type


`string`





