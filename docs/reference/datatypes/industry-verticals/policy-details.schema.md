
# Policy Details Schema

```
https://ns.adobe.com/xdm/datatypes/policy-details
```

Details for the insurance policy such as type, start date, and ID.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/industry-verticals/policy-details.schema.json](datatypes/industry-verticals/policy-details.schema.json) |
## Schema Hierarchy

* Policy Details `https://ns.adobe.com/xdm/datatypes/policy-details`
  * [Postal address](../demographic/address.schema.md) `https://ns.adobe.com/xdm/common/address`
  * [Personal Contact Details](../../mixins/profile/profile-personal-details.schema.md) `https://ns.adobe.com/xdm/context/profile-personal-details`
  * [Currency](../currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`


## Policy Details Example
```json
{
  "xdm:ID": "F7Y910JK001"
}
```

# Policy Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:ID](#xdmid) | `string` | Optional | Policy Details (this schema) |
| [xdm:assignedBeneficiary](#xdmassignedbeneficiary) | Demographic Details | Optional | Policy Details (this schema) |
| [xdm:benefitAmount](#xdmbenefitamount) | Currency | Optional | Policy Details (this schema) |
| [xdm:endDate](#xdmenddate) | `string` | Optional | Policy Details (this schema) |
| [xdm:hasAssignedBeneficiary](#xdmhasassignedbeneficiary) | `boolean` | Optional | Policy Details (this schema) |
| [xdm:location](#xdmlocation) | Postal address | Optional | Policy Details (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Policy Details (this schema) |
| [xdm:owner](#xdmowner) | Personal Contact Details | Optional | Policy Details (this schema) |
| [xdm:startDate](#xdmstartdate) | `string` | Optional | Policy Details (this schema) |
| [xdm:type](#xdmtype) | `enum` | Optional | Policy Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:ID
### ID

Unique insurance policy identifier.

`xdm:ID`
* is optional
* type: `string`
* defined in this schema

### xdm:ID Type


`string`






## xdm:assignedBeneficiary
### Assigned Beneficiaries

Captures the beneficiary(s) assigned to the policy.

`xdm:assignedBeneficiary`
* is optional
* type: Demographic Details

* defined in this schema

### xdm:assignedBeneficiary Type


Array type: Demographic Details

All items must be of the type:
* [Demographic Details](../../mixins/profile/profile-person-details.schema.md) – `https://ns.adobe.com/xdm/context/profile-person-details`








## xdm:benefitAmount
### Benefit Amount

The amount to be paid per the policy terms.

`xdm:benefitAmount`
* is optional
* type: Currency
* defined in this schema

### xdm:benefitAmount Type


* [Currency](../currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:endDate
### End Date

Date which the insurance policy coverage ended.

`xdm:endDate`
* is optional
* type: `string`
* defined in this schema

### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:hasAssignedBeneficiary
### Has Assigned Beneficiary

Flag determining if the account has a beneficiary assigned.

`xdm:hasAssignedBeneficiary`
* is optional
* type: `boolean`
* defined in this schema

### xdm:hasAssignedBeneficiary Type


`boolean`





## xdm:location
### Location

Location in which the insurance policy is issued.

`xdm:location`
* is optional
* type: Postal address
* defined in this schema

### xdm:location Type


* [Postal address](../demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:name
### Name

Insurance policy name.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:owner
### Owner

Stores the policyholder's profile information. Extension of the personal profile details data type.

`xdm:owner`
* is optional
* type: Personal Contact Details
* defined in this schema

### xdm:owner Type


* [Personal Contact Details](../../mixins/profile/profile-personal-details.schema.md) – `https://ns.adobe.com/xdm/context/profile-personal-details`





## xdm:startDate
### Start Date

Date which the insurance policy coverage started.

`xdm:startDate`
* is optional
* type: `string`
* defined in this schema

### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:type
### Type

Type of insurance policy, such as home, automobile, renter, or boat.

`xdm:type`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmtype-known-values).

### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `home` |  |
| `automobile` |  |
| `renter` |  |
| `boat` |  |



