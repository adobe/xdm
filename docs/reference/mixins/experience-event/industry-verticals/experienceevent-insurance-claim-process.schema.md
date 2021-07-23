
# Claim Process Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-insurance-claim-details
```

Claim details including policy ID, police report, and incident date.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-insurance-claim-process.schema.json](mixins/experience-event/industry-verticals/experienceevent-insurance-claim-process.schema.json) |

## Claim Process Example
```json
{
  "xdm:insuranceClaim": {
    "xdm:adjustorID": "59173829131a",
    "xdm:policeReport": true,
    "xdm:type": "automobile"
  }
}
```

# Claim Process Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:insuranceClaim](#xdminsuranceclaim) | `object` | Optional | Claim Process (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:insuranceClaim

Captures fields related to a claim when initated by a customer.

`xdm:insuranceClaim`
* is optional
* type: `object`
* defined in this schema

### xdm:insuranceClaim Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:adjustorID`| string | Optional |
| `xdm:claim`|  | Optional |
| `xdm:incidentDate`| string | Optional |
| `xdm:incidentLocation`|  | Optional |
| `xdm:policeReport`| boolean | Optional |
| `xdm:type`| string | Optional |



#### xdm:adjustorID
##### Adjustor ID

Unique identifier for adjustor assigned to the claim.

`xdm:adjustorID`
* is optional
* type: `string`

##### xdm:adjustorID Type


`string`








#### xdm:claim
##### Claim

Extension of claim data type.

`xdm:claim`
* is optional
* type: reference

##### xdm:claim Type


* []() – `https://ns.adobe.com/xdm/datatypes/claim`







#### xdm:incidentDate
##### Incident Date

Date the claim incident occurred.

`xdm:incidentDate`
* is optional
* type: `string`

##### xdm:incidentDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:incidentLocation
##### Incident Location

Location where the claim incident occurred.

`xdm:incidentLocation`
* is optional
* type: reference

##### xdm:incidentLocation Type


* []() – `https://ns.adobe.com/xdm/common/address`







#### xdm:policeReport
##### Police Report

Flags whether or not a police report is available for the claim.

`xdm:policeReport`
* is optional
* type: `boolean`

##### xdm:policeReport Type


`boolean`







#### xdm:type
##### Type

Type of claim submitted.

`xdm:type`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdminsuranceclaim-known-values).

##### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `product` | Product |
| `automobile` | Automobile |
| `renters` | Renters |
| `thirdPartyAutomobile` | Third-Party Automobile |
| `thirdPartyHome` | Third-Party Home |
| `life` | Life |
| `health` | Health |
| `dental` | Dental |
| `vision` | Vision |
| `pet` | Pet |
| `flood` | Flood |
| `earthquake` | Earthquake |








