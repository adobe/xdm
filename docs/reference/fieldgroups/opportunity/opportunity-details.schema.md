
# XDM Business Opportunity Details Schema

```
https://ns.adobe.com/xdm/mixins/opportunity-details
```

This mixin is used to capture and maintain additional opportunity attributes that are used by industry crm systems.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/opportunity/opportunity-details.schema.json](fieldgroups/opportunity/opportunity-details.schema.json) |
## Schema Hierarchy

* XDM Business Opportunity Details `https://ns.adobe.com/xdm/mixins/opportunity-details`
  * [Currency](../../datatypes/currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`


## XDM Business Opportunity Details Example
```json
{}
```

# XDM Business Opportunity Details Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:actualCloseDate](#xdmactualclosedate) | `string` | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:campaignID](#xdmcampaignid) | `string` | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:expectedCloseDate](#xdmexpectedclosedate) | `string` | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:expectedRevenue](#xdmexpectedrevenue) | Currency | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:fiscalQuarter](#xdmfiscalquarter) | `string` | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:fiscalYear](#xdmfiscalyear) | `integer` | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:forecastCategory](#xdmforecastcategory) | `string` | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:forecastCategoryName](#xdmforecastcategoryname) | `string` | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:isClosed](#xdmisclosed) | `boolean` | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:isWon](#xdmiswon) | `boolean` | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:lastActivityDate](#xdmlastactivitydate) | `string` | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:leadSource](#xdmleadsource) | `string` | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:nextStep](#xdmnextstep) | `string` | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:opportunityAmount](#xdmopportunityamount) | Currency | Optional |  | XDM Business Opportunity Details (this schema) |
| [xdm:opportunityQuantity](#xdmopportunityquantity) | `integer` | Optional | `0` | XDM Business Opportunity Details (this schema) |
| [xdm:probabilityPercentage](#xdmprobabilitypercentage) | `number` | Optional |  | XDM Business Opportunity Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:actualCloseDate
### Actual Close Date

Actual date of closure for this opportunity.

`xdm:actualCloseDate`
* is optional
* type: `string`
* defined in this schema

### xdm:actualCloseDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:campaignID
### Campaign ID

Campaign unique identifer reference.

`xdm:campaignID`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignID Type


`string`






## xdm:expectedCloseDate
### Expected Close Date

Expected date of closure for this opportunity.

`xdm:expectedCloseDate`
* is optional
* type: `string`
* defined in this schema

### xdm:expectedCloseDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:expectedRevenue
### Expected Revenue

Calculated revenue based on the Amount and Probability.

`xdm:expectedRevenue`
* is optional
* type: Currency
* defined in this schema

### xdm:expectedRevenue Type


* [Currency](../../datatypes/currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:fiscalQuarter
### Fiscal Quarter

The fiscal quarter this opportunity is targeted.

`xdm:fiscalQuarter`
* is optional
* type: `string`
* defined in this schema

### xdm:fiscalQuarter Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E(%5B1-4%5D%7B1%7D)%24%7C%5E(%5BQq%5D%5B1-4%5D%7B1%7D)%24)):
```regex
^([1-4]{1})$|^([Qq][1-4]{1})$
```






## xdm:fiscalYear
### Fiscal Year

The fiscal year this opportunity is targeted.

`xdm:fiscalYear`
* is optional
* type: `integer`
* defined in this schema

### xdm:fiscalYear Type


`integer`






## xdm:forecastCategory
### Forecast Category

Forecast Category determined by the opportunity Stage value eg: omitted,pipeline,bestcase,commit,closed.

`xdm:forecastCategory`
* is optional
* type: `string`
* defined in this schema

### xdm:forecastCategory Type


`string`






## xdm:forecastCategoryName
### Forecast Category Name

Forecast category name that is displayed in reports for a perticular forecast category.

`xdm:forecastCategoryName`
* is optional
* type: `string`
* defined in this schema

### xdm:forecastCategoryName Type


`string`






## xdm:isClosed
### Closed Flag

Flag indicating if this opportunity is closed.

`xdm:isClosed`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isClosed Type


`boolean`





## xdm:isWon
### Won Flag

Flag indicating if this opportunity is Won.

`xdm:isWon`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isWon Type


`boolean`





## xdm:lastActivityDate
### Last Activity Date

Last activity date for this opportunity.

`xdm:lastActivityDate`
* is optional
* type: `string`
* defined in this schema

### xdm:lastActivityDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:leadSource
### Lead Source

Source of the opportunity such as Advertisement, Partner, or Web.

`xdm:leadSource`
* is optional
* type: `string`
* defined in this schema

### xdm:leadSource Type


`string`






## xdm:nextStep
### Next Step

Description of next task in closing opportunity.

`xdm:nextStep`
* is optional
* type: `string`
* defined in this schema

### xdm:nextStep Type


`string`






## xdm:opportunityAmount
### Opportunity Amount

Estimated total sale amount.

`xdm:opportunityAmount`
* is optional
* type: Currency
* defined in this schema

### xdm:opportunityAmount Type


* [Currency](../../datatypes/currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:opportunityQuantity
### Opportunity Quantity

Total of all quantity field values for all products in the Products related list for this opportunity.

`xdm:opportunityQuantity`
* is optional
* type: `integer`
* default: `0`
* defined in this schema

### xdm:opportunityQuantity Type


`integer`
* minimum value: `0`






## xdm:probabilityPercentage
### Probability Percentage

Likelihood that opportunity will close, stated as a percentage.

`xdm:probabilityPercentage`
* is optional
* type: `number`
* defined in this schema

### xdm:probabilityPercentage Type


`number`
* minimum value: `0`
* maximum value: `100`




