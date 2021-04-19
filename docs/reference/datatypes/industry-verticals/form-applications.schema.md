
# Form Applications Schema

```
https://ns.adobe.com/xdm/datatypes/form-applications
```

Used when any application process is started, such as financing, limit changes, or educational programs.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/industry-verticals/form-applications.schema.json](datatypes/industry-verticals/form-applications.schema.json) |
## Schema Hierarchy

* Form Applications `https://ns.adobe.com/xdm/datatypes/form-applications`
  * [Measure](../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`
  * [Transaction](transaction.schema.md) `https://ns.adobe.com/xdm/datatypes/transaction`
  * [Currency](../currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`
  * [Tool Usage](tool-usage.schema.md) `https://ns.adobe.com/xdm/datatypes/tool-usage`


## Form Applications Example
```json
{}
```

# Form Applications Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:ID](#xdmid) | `string` | Optional | Form Applications (this schema) |
| [xdm:applicationFee](#xdmapplicationfee) | Transaction | Optional | Form Applications (this schema) |
| [xdm:approved](#xdmapproved) | Measure | Optional | Form Applications (this schema) |
| [xdm:declined](#xdmdeclined) | Measure | Optional | Form Applications (this schema) |
| [xdm:requestedAmount](#xdmrequestedamount) | Currency | Optional | Form Applications (this schema) |
| [xdm:status](#xdmstatus) | `enum` | Optional | Form Applications (this schema) |
| [xdm:statusUpdate](#xdmstatusupdate) | `string` | Optional | Form Applications (this schema) |
| [xdm:steps](#xdmsteps) | Tool Usage | Optional | Form Applications (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Form Applications (this schema) |
| [xdm:underReview](#xdmunderreview) | `boolean` | Optional | Form Applications (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:ID
### ID

Identifier used during an application process.

`xdm:ID`
* is optional
* type: `string`
* defined in this schema

### xdm:ID Type


`string`






## xdm:applicationFee
### Application Fee

Extension of Transaction Data Type

`xdm:applicationFee`
* is optional
* type: Transaction
* defined in this schema

### xdm:applicationFee Type


* [Transaction](transaction.schema.md) – `https://ns.adobe.com/xdm/datatypes/transaction`





## xdm:approved
### Form Application Approved

Captured when a visitor application has been approved.

`xdm:approved`
* is optional
* type: Measure
* defined in this schema

### xdm:approved Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:declined
### Form Application Declined

Captured when a visitor application has been declined.

`xdm:declined`
* is optional
* type: Measure
* defined in this schema

### xdm:declined Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:requestedAmount
### Requested Amount

Tracks the monetary value of the application.

`xdm:requestedAmount`
* is optional
* type: Currency
* defined in this schema

### xdm:requestedAmount Type


* [Currency](../currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:status
### Status

Captures the status of the application for any given point in the application process.

`xdm:status`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmstatus-known-values).

### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `initiated` |  |
| `in progress` |  |
| `approved` |  |
| `declined` |  |




## xdm:statusUpdate
### Status Update

Captured when the status for an application changes, either from an online or offline update.

`xdm:statusUpdate`
* is optional
* type: `string`
* defined in this schema

### xdm:statusUpdate Type


`string`






## xdm:steps
### steps

Extension of toolUsage data type.

`xdm:steps`
* is optional
* type: Tool Usage
* defined in this schema

### xdm:steps Type


* [Tool Usage](tool-usage.schema.md) – `https://ns.adobe.com/xdm/datatypes/tool-usage`





## xdm:type
### Type

Type of the application process.

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`






## xdm:underReview
### Under Review

Captured when a visitor application has been placed under review.

`xdm:underReview`
* is optional
* type: `boolean`
* defined in this schema

### xdm:underReview Type


`boolean`




