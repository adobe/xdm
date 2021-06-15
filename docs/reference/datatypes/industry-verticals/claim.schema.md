
# Claim Schema

```
https://ns.adobe.com/xdm/datatypes/claim
```

Captures fields related to a claim when initated by a customer.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/industry-verticals/claim.schema.json](datatypes/industry-verticals/claim.schema.json) |
## Schema Hierarchy

* Claim `https://ns.adobe.com/xdm/datatypes/claim`
  * [Currency](../currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`


## Claim Example
```json
{}
```

# Claim Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:ID](#xdmid) | `string` | Optional | Claim (this schema) |
| [xdm:benefitAmount](#xdmbenefitamount) | Currency | Optional | Claim (this schema) |
| [xdm:policyID](#xdmpolicyid) | `string` | Optional | Claim (this schema) |
| [xdm:startDate](#xdmstartdate) | `string` | Optional | Claim (this schema) |
| [xdm:status](#xdmstatus) | `enum` | Optional | Claim (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:ID
### Claim ID

Unique identifier for the claim.

`xdm:ID`
* is optional
* type: `string`
* defined in this schema

### xdm:ID Type


`string`






## xdm:benefitAmount
### Benefit Amount

Captures the benefit amount.

`xdm:benefitAmount`
* is optional
* type: Currency
* defined in this schema

### xdm:benefitAmount Type


* [Currency](../currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:policyID
### Policy ID

Policy Identifier.

`xdm:policyID`
* is optional
* type: `string`
* defined in this schema

### xdm:policyID Type


`string`






## xdm:startDate
### Start Date

Date the claim was successfully submitted.

`xdm:startDate`
* is optional
* type: `string`
* defined in this schema

### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:status
### Status

Captures the status of the claim for any given point in the application process.

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



