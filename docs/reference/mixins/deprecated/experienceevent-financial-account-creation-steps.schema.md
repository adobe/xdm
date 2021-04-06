
# Financial Account Creation Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-financial-account-creation-steps
```

Financial account creation steps such as start, save, failure, and complete.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [mixins/deprecated/experienceevent-financial-account-creation-steps.schema.json](mixins/deprecated/experienceevent-financial-account-creation-steps.schema.json) |

## Financial Account Creation Steps Example
```json
{
  "xdm:personalFinances": {
    "xdm:financialAccount": {
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

# Financial Account Creation Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Financial Account Creation Steps (this schema) |
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
| `xdm:financialAccount`|  | Optional |



#### xdm:financialAccount
##### Financial Account

Extension of toolUsage data type.

`xdm:financialAccount`
* is optional
* type: reference

##### xdm:financialAccount Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









