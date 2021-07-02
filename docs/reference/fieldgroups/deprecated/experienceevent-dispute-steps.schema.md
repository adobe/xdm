
# Dispute Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-dispute-steps
```

Dispute steps such as start, save, failure, and complete.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [fieldgroups/deprecated/experienceevent-dispute-steps.schema.json](fieldgroups/deprecated/experienceevent-dispute-steps.schema.json) |

## Dispute Steps Example
```json
{
  "xdm:disputes": {
    "xdm:dispute": {
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

# Dispute Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:disputes](#xdmdisputes) | `object` | Optional | Dispute Steps (this schema) |
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
| `xdm:dispute`|  | Optional |



#### xdm:dispute
##### Dispute

Extension of toolUsage data type.

`xdm:dispute`
* is optional
* type: reference

##### xdm:dispute Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









