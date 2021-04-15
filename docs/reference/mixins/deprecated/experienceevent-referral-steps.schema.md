
# Referral Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-referral-steps
```

Referral steps such as start, save, failure, and complete.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [mixins/deprecated/experienceevent-referral-steps.schema.json](mixins/deprecated/experienceevent-referral-steps.schema.json) |

## Referral Steps Example
```json
{
  "xdm:web": {
    "xdm:referral": {
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

# Referral Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:web](#xdmweb) | `object` | Optional | Referral Steps (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:web


`xdm:web`
* is optional
* type: `object`
* defined in this schema

### xdm:web Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:referral`|  | Optional |



#### xdm:referral
##### Referral

Extension of toolUsage data type.

`xdm:referral`
* is optional
* type: reference

##### xdm:referral Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









