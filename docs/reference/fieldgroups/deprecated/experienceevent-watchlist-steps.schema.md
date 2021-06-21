
# Watchlist Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-watchlist-steps
```

Steps involved in adding stocks, bonds, ETFs, etc to a watchlist such as start, stop, name/symbol.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [fieldgroups/deprecated/experienceevent-watchlist-steps.schema.json](fieldgroups/deprecated/experienceevent-watchlist-steps.schema.json) |

## Watchlist Steps Example
```json
{
  "xdm:personalFinances": {
    "xdm:watchlistSteps": {
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

# Watchlist Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Watchlist Steps (this schema) |
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
| `xdm:watchlistSteps`|  | Optional |



#### xdm:watchlistSteps
##### Watchlist Steps

Extension of toolUsage data type.

`xdm:watchlistSteps`
* is optional
* type: reference

##### xdm:watchlistSteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









