
# Claim Process Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-claim-process
```

Claim details such as claim policy ID and claim creation steps.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-claim-process.schema.json](mixins/experience-event/experienceevent-claim-process.schema.json) |

## Claim Process Example
```json
{
  "xdm:disputes": {
    "xdm:claimID": "P102819201D",
    "xdm:claimStartDate": "2021-03-04T15:52:25+00:00",
    "xdm:claimStatus": "approved",
    "xdm:claimSteps": {
      "xdm:tool-usage": {
        "xdm:toolUsageCancelled": 1,
        "xdm:toolUsageComplete": 1,
        "xdm:toolUsageFailure": 1,
        "xdm:toolUsageID": "T421",
        "xdm:toolUsageName": "calculator",
        "xdm:toolUsageSaved": 1,
        "xdm:toolUsageStart": 1,
        "xdm:toolUsageStep": 1,
        "xdm:toolUsageStepName": "enter parameters",
        "xdm:toolUsageSubmitted": 1,
        "xdm:toolUsageType": "generic"
      }
    },
    "xdm:claimType": "automobile",
    "xdm:policy": {
      "xdm:policy-details": {
        "xdm:policyEndDate": "2021-07-24",
        "xdm:policyID": "A10276151",
        "xdm:policyName": "Personal Automobile Coverage",
        "xdm:policyStartDate": "2021-01-24",
        "xdm:policyState": "MO",
        "xdm:policyType": "automobile"
      }
    }
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
| `xdm:claimID`| string | Optional |
| `xdm:claimStartDate`| string | Optional |
| `xdm:claimStatus`| string | Optional |
| `xdm:claimSteps`|  | Optional |
| `xdm:claimType`| string | Optional |
| `xdm:policy`|  | Optional |



#### xdm:claimID
##### Claim ID

ID of the claim being submitted.

`xdm:claimID`
* is optional
* type: `string`

##### xdm:claimID Type


`string`








#### xdm:claimStartDate
##### Claim Start Date

Date the claim was successfully submitted.

`xdm:claimStartDate`
* is optional
* type: `string`

##### xdm:claimStartDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:claimStatus
##### Claim Status

Captures the status of the claim for any given point in the application process.

`xdm:claimStatus`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmdisputes-known-values).

##### xdm:claimStatus Known Values
| Value | Description |
|-------|-------------|
| `initiated` |  |
| `in progress` |  |
| `approved` |  |
| `declined` |  |






#### xdm:claimSteps
##### Claim Steps

Extension of toolUsage data type.

`xdm:claimSteps`
* is optional
* type: reference

##### xdm:claimSteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:claimType
##### Claim Type

Type of claim submitted.

`xdm:claimType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmdisputes-known-values).

##### xdm:claimType Known Values
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






#### xdm:policy
##### Policy

Extension of Policy data type.

`xdm:policy`
* is optional
* type: reference

##### xdm:policy Type


* []() – `https://ns.adobe.com/xdm/datatypes/policy-details`









