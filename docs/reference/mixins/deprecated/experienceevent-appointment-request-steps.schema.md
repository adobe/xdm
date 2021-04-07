
# Appointment Request Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-appointment-request-steps
```

Steps for setting up any type of appointment with a company.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [mixins/deprecated/experienceevent-appointment-request-steps.schema.json](mixins/deprecated/experienceevent-appointment-request-steps.schema.json) |

## Appointment Request Steps Example
```json
{
  "xdm:userAccount": {
    "xdm:appointmentRequestSteps": {
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
    }
  }
}
```

# Appointment Request Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:userAccount](#xdmuseraccount) | `object` | Optional | Appointment Request Steps (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:userAccount


`xdm:userAccount`
* is optional
* type: `object`
* defined in this schema

### xdm:userAccount Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:appointmentRequestSteps`|  | Optional |



#### xdm:appointmentRequestSteps
##### Appointment Request Steps

Extension of toolUsage data type.

`xdm:appointmentRequestSteps`
* is optional
* type: reference

##### xdm:appointmentRequestSteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









