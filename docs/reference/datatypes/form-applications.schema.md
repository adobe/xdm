
# Form Applications Schema

```
https://ns.adobe.com/xdm/datatypes/form-applications
```

Used when any application process is started, such as financing, limit changes, or educational programs.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/form-applications.schema.json](datatypes/form-applications.schema.json) |
## Schema Hierarchy

* Form Applications `https://ns.adobe.com/xdm/datatypes/form-applications`
  * [Measure](data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`
  * [Transaction](transaction.schema.md) `https://ns.adobe.com/xdm/datatypes/transaction`
  * [Currency](currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`
  * [Tool Usage](tool-usage.schema.md) `https://ns.adobe.com/xdm/datatypes/tool-usage`


## Form Applications Example
```json
{}
```

# Form Applications Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:formApplicationApproved](#xdmformapplicationapproved) | Measure | Optional | Form Applications (this schema) |
| [xdm:formApplicationDeclined](#xdmformapplicationdeclined) | Measure | Optional | Form Applications (this schema) |
| [xdm:formApplicationFee](#xdmformapplicationfee) | Transaction | Optional | Form Applications (this schema) |
| [xdm:formApplicationID](#xdmformapplicationid) | `string` | Optional | Form Applications (this schema) |
| [xdm:formApplicationRequestedAmount](#xdmformapplicationrequestedamount) | Currency | Optional | Form Applications (this schema) |
| [xdm:formApplicationStatus](#xdmformapplicationstatus) | `enum` | Optional | Form Applications (this schema) |
| [xdm:formApplicationStatusUpdate](#xdmformapplicationstatusupdate) | Measure | Optional | Form Applications (this schema) |
| [xdm:formApplicationType](#xdmformapplicationtype) | `string` | Optional | Form Applications (this schema) |
| [xdm:formApplicationUnderReview](#xdmformapplicationunderreview) | Measure | Optional | Form Applications (this schema) |
| [xdm:formApplicationUsage](#xdmformapplicationusage) | Tool Usage | Optional | Form Applications (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:formApplicationApproved
### Form Application Approved

Captured when a visitor application has been approved.

`xdm:formApplicationApproved`
* is optional
* type: Measure
* defined in this schema

### xdm:formApplicationApproved Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:formApplicationDeclined
### Form Application Declined

Captured when a visitor application has been declined.

`xdm:formApplicationDeclined`
* is optional
* type: Measure
* defined in this schema

### xdm:formApplicationDeclined Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:formApplicationFee
### Form Application Fee

Extension of Transaction Data Type

`xdm:formApplicationFee`
* is optional
* type: Transaction
* defined in this schema

### xdm:formApplicationFee Type


* [Transaction](transaction.schema.md) – `https://ns.adobe.com/xdm/datatypes/transaction`





## xdm:formApplicationID
### Form Application ID

Identifier used during an application process.

`xdm:formApplicationID`
* is optional
* type: `string`
* defined in this schema

### xdm:formApplicationID Type


`string`






## xdm:formApplicationRequestedAmount
### Form Application Requested Amount

Tracks the monetary value of the application.

`xdm:formApplicationRequestedAmount`
* is optional
* type: Currency
* defined in this schema

### xdm:formApplicationRequestedAmount Type


* [Currency](currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:formApplicationStatus
### Form Application Status

Captures the status of the application for any given point in the application process.

`xdm:formApplicationStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmformapplicationstatus-known-values).

### xdm:formApplicationStatus Known Values
| Value | Description |
|-------|-------------|
| `initiated` |  |
| `in progress` |  |
| `approved` |  |
| `declined` |  |




## xdm:formApplicationStatusUpdate
### Form Application Status Update

Captured when the status for an application changes, either from an online or offline update.

`xdm:formApplicationStatusUpdate`
* is optional
* type: Measure
* defined in this schema

### xdm:formApplicationStatusUpdate Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:formApplicationType
### Form Application Type

Type of the application process.

`xdm:formApplicationType`
* is optional
* type: `string`
* defined in this schema

### xdm:formApplicationType Type


`string`






## xdm:formApplicationUnderReview
### Form Application Under Review

Captured when a visitor application has been placed under review.

`xdm:formApplicationUnderReview`
* is optional
* type: Measure
* defined in this schema

### xdm:formApplicationUnderReview Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:formApplicationUsage
### Form Application Usage

Extension of toolUsage data type.

`xdm:formApplicationUsage`
* is optional
* type: Tool Usage
* defined in this schema

### xdm:formApplicationUsage Type


* [Tool Usage](tool-usage.schema.md) – `https://ns.adobe.com/xdm/datatypes/tool-usage`




