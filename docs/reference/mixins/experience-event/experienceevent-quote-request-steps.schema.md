
# Quote Request Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-quote-request-steps
```

Includes all steps for receiving a quote

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-quote-request-steps.schema.json](mixins/experience-event/experienceevent-quote-request-steps.schema.json) |

## Quote Request Steps Example
```json
{
  "xdm:quoteRequestSteps": {
    "xdm:quoteRequestLocation": "95110",
    "xdm:quoteRequestPersonalDetails": {
      "xdm:person": {
        "xdm:name": {
          "xdm:firstName": "Jane",
          "xdm:middleName": "F",
          "xdm:lastName": "Doe",
          "xdm:fullName": "Jane F. Doe"
        },
        "xdm:birthDayAndMonth": "01-03",
        "xdm:gender": "female"
      }
    },
    "xdm:tool-usage": {
      "xdm:toolUsageCancelled": 1,
      "xdm:toolUsageComplete": 1,
      "xdm:toolUsageFailure": 1,
      "xdm:toolUsageID": "T421",
      "xdm:toolUsageName": "calculator",
      "xdm:toolUsageSaved": 1,
      "xdm:toolUsageStart": 1,
      "xdm:toolUsageStep": 1,
      "xdm:toolUsageStepName": "enter parameters",
      "xdm:toolUsageSubmitted": 1,
      "xdm:toolUsageType": "generic"
    }
  }
}
```

# Quote Request Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:quoteRequestSteps](#xdmquoterequeststeps) | `object` | Optional | Quote Request Steps (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:quoteRequestSteps


`xdm:quoteRequestSteps`
* is optional
* type: `object`
* defined in this schema

### xdm:quoteRequestSteps Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:quoteDiscount`|  | Optional |
| `xdm:quotePremium`|  | Optional |
| `xdm:quoteRequestLocation`| string | Optional |
| `xdm:quoteRequestPersonalDetails`|  | Optional |
| `xdm:quoteRequestSelectedRetailer`| string | Optional |
| `xdm:quoteRequestSteps`|  | Optional |



#### xdm:quoteDiscount
##### Quote Discount

Records the discount amount for a quote displayed to a visitor.

`xdm:quoteDiscount`
* is optional
* type: reference

##### xdm:quoteDiscount Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`







#### xdm:quotePremium
##### Quote Premium

Records the premium amount for a quote displayed to a visitor.

`xdm:quotePremium`
* is optional
* type: reference

##### xdm:quotePremium Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`







#### xdm:quoteRequestLocation
##### Quote Request Location

Captures the postal code used for finding retailers near the visitor's location.

`xdm:quoteRequestLocation`
* is optional
* type: `string`

##### xdm:quoteRequestLocation Type


`string`








#### xdm:quoteRequestPersonalDetails
##### Quote Request Personal Details

Extension of the Personal Profile data type.

`xdm:quoteRequestPersonalDetails`
* is optional
* type: reference

##### xdm:quoteRequestPersonalDetails Type


* []() – `https://ns.adobe.com/xdm/context/profile-person-details`







#### xdm:quoteRequestSelectedRetailer
##### Selected Retailer

Captures the selected retailer for a quote request, if applicable. 

`xdm:quoteRequestSelectedRetailer`
* is optional
* type: `string`

##### xdm:quoteRequestSelectedRetailer Type


`string`








#### xdm:quoteRequestSteps
##### Quote Request Steps

Extension of toolUsage data type.

`xdm:quoteRequestSteps`
* is optional
* type: reference

##### xdm:quoteRequestSteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









