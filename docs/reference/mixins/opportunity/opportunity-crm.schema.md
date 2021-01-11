
# B2B Opportunity Additional Properties Schema

```
https://ns.adobe.com/xdm/context/opportunity-crm
```

B2B specific opportunity properties.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [mixins/opportunity/opportunity-crm.schema.json](mixins/opportunity/opportunity-crm.schema.json) |
## Schema Hierarchy

* B2B Opportunity Additional Properties `https://ns.adobe.com/xdm/context/opportunity-crm`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## B2B Opportunity Additional Properties Example
```json
{
  "xdm:opportunityName": "Apple_opportunity",
  "xdm:description": "Apple corporation AEP opportunity",
  "xdm:ownerID": "test",
  "xdm:leadSource": "salesforce",
  "xdm:stage": "initial",
  "xdm:amount": 1000000,
  "xdm:currencyCode": "USD",
  "xdm:quantity": 1,
  "xdm:fiscalYear": 2020,
  "xdm:fiscalQuarter": "1",
  "xdm:hasOpportunityLineItem": false,
  "xdm:probabilityPercentage": 90,
  "xdm:isClosed": false,
  "xdm:isWon": true,
  "xdm:isDeleted": false,
  "xdm:closeDate": "2019-01-20T15:52:25+00:00",
  "xdm:isPrivate": true,
  "xdm:contractID": "12345",
  "xdm:forecastCategory": "pipeline",
  "xdm:forecastCategoryName": "AEP_pipeline",
  "xdm:expectedRevenue": 900000
}
```

# B2B Opportunity Additional Properties Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:amount](#xdmamount) | `number` | Optional | `0` | B2B Opportunity Additional Properties (this schema) |
| [xdm:closeDate](#xdmclosedate) | `string` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:contractID](#xdmcontractid) | `string` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:expectedRevenue](#xdmexpectedrevenue) | `number` | Optional | `0` | B2B Opportunity Additional Properties (this schema) |
| [xdm:fiscalQuarter](#xdmfiscalquarter) | `string` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:fiscalYear](#xdmfiscalyear) | `integer` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:forecastCategory](#xdmforecastcategory) | `string` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:forecastCategoryName](#xdmforecastcategoryname) | `string` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:hasOpportunityLineItem](#xdmhasopportunitylineitem) | `boolean` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:isClosed](#xdmisclosed) | `boolean` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:isPrivate](#xdmisprivate) | `boolean` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:isWon](#xdmiswon) | `boolean` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:leadSource](#xdmleadsource) | `string` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:nextStep](#xdmnextstep) | `string` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:opportunityDescription](#xdmopportunitydescription) | `string` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:opportunityName](#xdmopportunityname) | `string` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:ownerID](#xdmownerid) | `string` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:probabilityPercentage](#xdmprobabilitypercentage) | `number` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:quantity](#xdmquantity) | `integer` | Optional | `0` | B2B Opportunity Additional Properties (this schema) |
| [xdm:sourceType](#xdmsourcetype) | `string` | Optional |  | B2B Opportunity Additional Properties (this schema) |
| [xdm:stage](#xdmstage) | `string` | **Required** |  | B2B Opportunity Additional Properties (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:amount
### Opportunity Amount

Estimated total sale amount.

`xdm:amount`
* is optional
* type: `number`
* default: `0`
* defined in this schema

### xdm:amount Type


`number`
* minimum value: `0`






## xdm:closeDate
### Close Date

Date of closure for this opportunity.

`xdm:closeDate`
* is optional
* type: `string`
* defined in this schema

### xdm:closeDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:contractID
### Contract ID

Contract unique Identifier reference that this opportunity is linked to.

`xdm:contractID`
* is optional
* type: `string`
* defined in this schema

### xdm:contractID Type


`string`






## xdm:currencyCode
### Currency Code

Standard ISO code(ISO 4217) for currency.

`xdm:currencyCode`
* is optional
* type: `string`
* defined in this schema

### xdm:currencyCode Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E(%5BA-Z%5D%7B3%7D)%24)):
```regex
^([A-Z]{3})$
```






## xdm:expectedRevenue
### Expected Revenue

Calculated revenue based on the Amount and Probability.

`xdm:expectedRevenue`
* is optional
* type: `number`
* default: `0`
* defined in this schema

### xdm:expectedRevenue Type


`number`
* minimum value: `0`






## xdm:fiscalQuarter
### Fiscal Quarter

The fiscal quarter this opportunity is targeted..

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






## xdm:hasOpportunityLineItem
### Has Opportunity Line Item Flag

Flag to indicate whether this opportunity have more line items.

`xdm:hasOpportunityLineItem`
* is optional
* type: `boolean`
* defined in this schema

### xdm:hasOpportunityLineItem Type


`boolean`





## xdm:isClosed
### Closed Flag

Flag indicating if this opportunity is closed.

`xdm:isClosed`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isClosed Type


`boolean`





## xdm:isDeleted
### Deleted Flag

Flag indicating if this opportunity is deleted.

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDeleted Type


`boolean`





## xdm:isPrivate
### Private Flag

Indicates that the opportunity is private.

`xdm:isPrivate`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isPrivate Type


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






## xdm:opportunityDescription
### Opportunity Description

Additional information to describe the opportunity, such as possible products to sell or past purchases from the customer.

`xdm:opportunityDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityDescription Type


`string`






## xdm:opportunityName
### Opportunity Name

Subject or descriptive name, such as the expected order or company name, for the opportunity.

`xdm:opportunityName`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityName Type


`string`






## xdm:ownerID
### Opportunity Owner

Assigned owner for this opportunity.

`xdm:ownerID`
* is optional
* type: `string`
* defined in this schema

### xdm:ownerID Type


`string`






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





## xdm:quantity
### Opportunity Quantity

Total of all quantity field values for all products in the Products related list for this opportunity.

`xdm:quantity`
* is optional
* type: `integer`
* default: `0`
* defined in this schema

### xdm:quantity Type


`integer`
* minimum value: `0`






## xdm:sourceType
### Opportunity Source Type

Opportunity source type such as Existing Business or New Business

`xdm:sourceType`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceType Type


`string`






## xdm:stage
### Opportunity Stage

Sales stage of this opportunity to aid the sales team in their efforts to win this opportunity.

`xdm:stage`
* is **required**
* type: `string`
* defined in this schema

### xdm:stage Type


`string`





