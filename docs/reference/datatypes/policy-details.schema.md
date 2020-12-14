
# Policy Details Schema

```
https://ns.adobe.com/xdm/datatypes/policy-details
```

Details for the insurance policy such as type, start date, and ID.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/policy-details.schema.json](datatypes/policy-details.schema.json) |

## Policy Details Example
```json
{}
```

# Policy Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:policyEndDate](#xdmpolicyenddate) | `string` | Optional | Policy Details (this schema) |
| [xdm:policyID](#xdmpolicyid) | `string` | Optional | Policy Details (this schema) |
| [xdm:policyName](#xdmpolicyname) | `string` | Optional | Policy Details (this schema) |
| [xdm:policyStartDate](#xdmpolicystartdate) | `string` | Optional | Policy Details (this schema) |
| [xdm:policyState](#xdmpolicystate) | `string` | Optional | Policy Details (this schema) |
| [xdm:policyType](#xdmpolicytype) | `enum` | Optional | Policy Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:policyEndDate
### Policy End Date

Date which the insurance policy coverage ended.

`xdm:policyEndDate`
* is optional
* type: `string`
* defined in this schema

### xdm:policyEndDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:policyID
### Policy ID

Unique insurance policy identifier.

`xdm:policyID`
* is optional
* type: `string`
* defined in this schema

### xdm:policyID Type


`string`






## xdm:policyName
### Policy Name

Insurance policy name.

`xdm:policyName`
* is optional
* type: `string`
* defined in this schema

### xdm:policyName Type


`string`






## xdm:policyStartDate
### Policy Start Date

Date which the insurance policy coverage started.

`xdm:policyStartDate`
* is optional
* type: `string`
* defined in this schema

### xdm:policyStartDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:policyState
### Policy State

State in which the insurance policy is issued.

`xdm:policyState`
* is optional
* type: `string`
* defined in this schema

### xdm:policyState Type


`string`






## xdm:policyType
### Policy Type

Type of insurance policy, such as home, automobile, renter, or boat.

`xdm:policyType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmpolicytype-known-values).

### xdm:policyType Known Values
| Value | Description |
|-------|-------------|
| `home` |  |
| `automobile` |  |
| `renter` |  |
| `boat` |  |



