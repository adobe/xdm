
# Support Request Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-support-request
```

Included for any type of support request initiated by the customer.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [mixins/deprecated/experienceevent-support-request.schema.json](mixins/deprecated/experienceevent-support-request.schema.json) |

## Support Request Example
```json
{
  "xdm:supportRequest": {
    "xdm:supportRequestSteps": {
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

# Support Request Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:supportRequest](#xdmsupportrequest) | `object` | Optional | Support Request (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:supportRequest


`xdm:supportRequest`
* is optional
* type: `object`
* defined in this schema

### xdm:supportRequest Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:supportRequestSteps`|  | Optional |



#### xdm:supportRequestSteps
##### Support Request Steps

Extension of toolUsage data type.

`xdm:supportRequestSteps`
* is optional
* type: reference

##### xdm:supportRequestSteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









