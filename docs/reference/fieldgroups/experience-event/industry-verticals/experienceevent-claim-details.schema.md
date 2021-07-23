
# Claim Process Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-claim-details
```

Claim details such as claim policy ID and claim creation steps.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-claim-details.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-claim-details.schema.json) |

## Claim Process Example
```json
{
  "xdm:claims": {
    "xdm:ID": "P102819201D",
    "xdm:startDate": "2021-03-04T15:52:25+00:00",
    "xdm:status": "approved",
    "xdm:type": "automobile"
  }
}
```

# Claim Process Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:claims](#xdmclaims) | `object` | Optional | Claim Process (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:claims

Captures fields related to a claim when initated by a customer.

`xdm:claims`
* is optional
* type: `object`
* defined in this schema

### xdm:claims Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:benefitAmount`|  | Optional |
| `xdm:policyID`| string | Optional |
| `xdm:startDate`| string | Optional |
| `xdm:status`| string | Optional |
| `xdm:steps`|  | Optional |
| `xdm:type`| string | Optional |



#### xdm:ID
##### Claims ID

Unique identifier for the claim.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:benefitAmount
##### Benefit Amount

Captures the benefit amount.

`xdm:benefitAmount`
* is optional
* type: reference

##### xdm:benefitAmount Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`







#### xdm:policyID
##### Policy ID

Policy Identifier.

`xdm:policyID`
* is optional
* type: `string`

##### xdm:policyID Type


`string`








#### xdm:startDate
##### Start Date

Date the claim was successfully submitted.

`xdm:startDate`
* is optional
* type: `string`

##### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:status
##### Status

Captures the status of the claim for any given point in the application process.

`xdm:status`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmclaims-known-values).

##### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `initiated` |  |
| `in progress` |  |
| `approved` |  |
| `declined` |  |






#### xdm:steps
##### Steps

Extension of toolUsage data type.

`xdm:steps`
* is optional
* type: reference

##### xdm:steps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:type
##### Type

Type of claim submitted.

`xdm:type`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmclaims-known-values).

##### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `homeowners` |  |
| `automobile` |  |
| `renters` |  |
| `third party automobile` |  |
| `third party home` |  |
| `life` |  |
| `health` |  |
| `dental` |  |
| `flood` |  |
| `earthquake` |  |








