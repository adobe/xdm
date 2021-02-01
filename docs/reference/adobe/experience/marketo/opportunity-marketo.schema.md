
# Marketo Opportunity Schema

```
https://ns.adobe.com/experience/marketo/opportunity-marketo
```

Marketo specific Opportunity properties.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/marketo/opportunity-marketo.schema.json](adobe/experience/marketo/opportunity-marketo.schema.json) |
## Schema Hierarchy

* Marketo Opportunity `https://ns.adobe.com/experience/marketo/opportunity-marketo`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md) `https://ns.adobe.com/xdm/context/opportunity-crm`


# Marketo Opportunity Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [marketo:instanceID](#marketoinstanceid) | `string` | Optional |  | Marketo Opportunity (this schema) |
| [marketo:opportunityID](#marketoopportunityid) | `string` | **Required** |  | Marketo Opportunity (this schema) |
| [xdm:amount](#xdmamount) | `number` | Optional | `0` | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmamount) |
| [xdm:closeDate](#xdmclosedate) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmclosedate) |
| [xdm:contractID](#xdmcontractid) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmcontractid) |
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmcurrencycode) |
| [xdm:expectedRevenue](#xdmexpectedrevenue) | `number` | Optional | `0` | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmexpectedrevenue) |
| [xdm:fiscalQuarter](#xdmfiscalquarter) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmfiscalquarter) |
| [xdm:fiscalYear](#xdmfiscalyear) | `integer` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmfiscalyear) |
| [xdm:forecastCategory](#xdmforecastcategory) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmforecastcategory) |
| [xdm:forecastCategoryName](#xdmforecastcategoryname) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmforecastcategoryname) |
| [xdm:hasOpportunityLineItem](#xdmhasopportunitylineitem) | `boolean` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmhasopportunitylineitem) |
| [xdm:isClosed](#xdmisclosed) | `boolean` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmisclosed) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmisdeleted) |
| [xdm:isPrivate](#xdmisprivate) | `boolean` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmisprivate) |
| [xdm:isWon](#xdmiswon) | `boolean` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmiswon) |
| [xdm:leadSource](#xdmleadsource) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmleadsource) |
| [xdm:nextStep](#xdmnextstep) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmnextstep) |
| [xdm:opportunityDescription](#xdmopportunitydescription) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmopportunitydescription) |
| [xdm:opportunityName](#xdmopportunityname) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmopportunityname) |
| [xdm:ownerID](#xdmownerid) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmownerid) |
| [xdm:probabilityPercentage](#xdmprobabilitypercentage) | `number` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmprobabilitypercentage) |
| [xdm:quantity](#xdmquantity) | `integer` | Optional | `0` | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmquantity) |
| [xdm:sourceType](#xdmsourcetype) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmsourcetype) |
| [xdm:stage](#xdmstage) | `string` | Optional |  | [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmstage) |
| `*` | any | Additional | this schema *allows* additional properties |

## marketo:instanceID
### Instance ID

Instance identifier.

`marketo:instanceID`
* is optional
* type: `string`
* defined in this schema

### marketo:instanceID Type


`string`






## marketo:opportunityID
### Marketo Opportunity ID

Marketo opportunity ID.

`marketo:opportunityID`
* is **required**
* type: `string`
* defined in this schema

### marketo:opportunityID Type


`string`






## xdm:amount
### Opportunity Amount

Estimated total sale amount.

`xdm:amount`
* is optional
* type: `number`
* default: `0`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmamount)

### xdm:amount Type


`number`
* minimum value: `0`






## xdm:closeDate
### Close Date

Date of closure for this opportunity.

`xdm:closeDate`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmclosedate)

### xdm:closeDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:contractID
### Contract ID

Contract unique Identifier reference that this opportunity is linked to.

`xdm:contractID`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmcontractid)

### xdm:contractID Type


`string`






## xdm:currencyCode
### Currency Code

Standard ISO code(ISO 4217) for currency.

`xdm:currencyCode`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmcurrencycode)

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
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmexpectedrevenue)

### xdm:expectedRevenue Type


`number`
* minimum value: `0`






## xdm:fiscalQuarter
### Fiscal Quarter

The fiscal quarter this opportunity is targeted..

`xdm:fiscalQuarter`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmfiscalquarter)

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
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmfiscalyear)

### xdm:fiscalYear Type


`integer`






## xdm:forecastCategory
### Forecast Category

Forecast Category determined by the opportunity Stage value eg: omitted,pipeline,bestcase,commit,closed.

`xdm:forecastCategory`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmforecastcategory)

### xdm:forecastCategory Type


`string`






## xdm:forecastCategoryName
### Forecast Category Name

Forecast category name that is displayed in reports for a perticular forecast category.

`xdm:forecastCategoryName`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmforecastcategoryname)

### xdm:forecastCategoryName Type


`string`






## xdm:hasOpportunityLineItem
### Has Opportunity Line Item Flag

Flag to indicate whether this opportunity have more line items.

`xdm:hasOpportunityLineItem`
* is optional
* type: `boolean`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmhasopportunitylineitem)

### xdm:hasOpportunityLineItem Type


`boolean`





## xdm:isClosed
### Closed Flag

Flag indicating if this opportunity is closed.

`xdm:isClosed`
* is optional
* type: `boolean`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmisclosed)

### xdm:isClosed Type


`boolean`





## xdm:isDeleted
### Deleted Flag

Flag indicating if this opportunity is deleted.

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmisdeleted)

### xdm:isDeleted Type


`boolean`





## xdm:isPrivate
### Private Flag

Indicates that the opportunity is private.

`xdm:isPrivate`
* is optional
* type: `boolean`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmisprivate)

### xdm:isPrivate Type


`boolean`





## xdm:isWon
### Won Flag

Flag indicating if this opportunity is Won.

`xdm:isWon`
* is optional
* type: `boolean`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmiswon)

### xdm:isWon Type


`boolean`





## xdm:leadSource
### Lead Source

Source of the opportunity such as Advertisement, Partner, or Web.

`xdm:leadSource`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmleadsource)

### xdm:leadSource Type


`string`






## xdm:nextStep
### Next Step

Description of next task in closing opportunity.

`xdm:nextStep`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmnextstep)

### xdm:nextStep Type


`string`






## xdm:opportunityDescription
### Opportunity Description

Additional information to describe the opportunity, such as possible products to sell or past purchases from the customer.

`xdm:opportunityDescription`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmopportunitydescription)

### xdm:opportunityDescription Type


`string`






## xdm:opportunityName
### Opportunity Name

Subject or descriptive name, such as the expected order or company name, for the opportunity.

`xdm:opportunityName`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmopportunityname)

### xdm:opportunityName Type


`string`






## xdm:ownerID
### Opportunity Owner

Assigned owner for this opportunity.

`xdm:ownerID`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmownerid)

### xdm:ownerID Type


`string`






## xdm:probabilityPercentage
### Probability Percentage

Likelihood that opportunity will close, stated as a percentage.

`xdm:probabilityPercentage`
* is optional
* type: `number`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmprobabilitypercentage)

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
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmquantity)

### xdm:quantity Type


`integer`
* minimum value: `0`






## xdm:sourceType
### Opportunity Source Type

Opportunity source type such as Existing Business or New Business

`xdm:sourceType`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmsourcetype)

### xdm:sourceType Type


`string`






## xdm:stage
### Opportunity Stage

Sales stage of this opportunity to aid the sales team in their efforts to win this opportunity.

`xdm:stage`
* is optional
* type: `string`
* defined in [B2B Opportunity Additional Properties](../../../mixins/opportunity/opportunity-crm.schema.md#xdmstage)

### xdm:stage Type


`string`





