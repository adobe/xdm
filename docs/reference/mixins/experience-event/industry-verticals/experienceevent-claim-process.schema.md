
# Claim Process Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-claim-process
```

Claim details such as claim policy ID and claim creation steps.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-claim-process.schema.json](mixins/experience-event/industry-verticals/experienceevent-claim-process.schema.json) |

## Claim Process Example
```json
{
  "xdm:disputes": {
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
| [xdm:disputes](#xdmdisputes) | `object` | Optional | Claim Process (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:disputes


`xdm:disputes`
* is optional
* type: `object`
* defined in this schema

### xdm:disputes Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:policy`|  | Optional |
| `xdm:startDate`| string | Optional |
| `xdm:status`| string | Optional |
| `xdm:steps`|  | Optional |
| `xdm:type`| string | Optional |



#### xdm:ID
#####  ID

ID of the claim being submitted.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:policy
##### Policy

Extension of Policy data type.

`xdm:policy`
* is optional
* type: reference

##### xdm:policy Type


* []() – `https://ns.adobe.com/xdm/datatypes/policy-details`







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

The value of this property **must** be equal to one of the [known values below](#xdmdisputes-known-values).

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

The value of this property **must** be equal to one of the [known values below](#xdmdisputes-known-values).

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








