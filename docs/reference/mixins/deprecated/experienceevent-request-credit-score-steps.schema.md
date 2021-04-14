
# Request Credit Score Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-request-credit-score-steps
```



| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [mixins/deprecated/experienceevent-request-credit-score-steps.schema.json](mixins/deprecated/experienceevent-request-credit-score-steps.schema.json) |

## Request Credit Score Steps Example
```json
{
  "xdm:personalFinances": {
    "xdm:requestCreditScore": {
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

# Request Credit Score Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Request Credit Score Steps (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:personalFinances


`xdm:personalFinances`
* is optional
* type: `object`
* defined in this schema

### xdm:personalFinances Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:requestCreditScore`|  | Optional |



#### xdm:requestCreditScore
##### Request Credit Score

Extension of toolUsage data type.

`xdm:requestCreditScore`
* is optional
* type: reference

##### xdm:requestCreditScore Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









