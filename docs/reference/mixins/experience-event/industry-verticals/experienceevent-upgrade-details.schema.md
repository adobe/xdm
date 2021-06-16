
# Upgrade Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-upgrade-details
```

Upgrade details such as offer name, type, and ID, as well as transaction details such as type and amount.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-upgrade-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-upgrade-details.schema.json) |

## Upgrade Details Example
```json
{
  "xdm:upgrades": {
    "xdm:upgradeTransaction": {
      "xdm:transaction": {
        "xdm:transactionID": "T10291832",
        "xdm:transactionDate": "2021-01-0715:52:25+00:00",
        "xdm:transactionType": "deposit"
      }
    }
  }
}
```

# Upgrade Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:upgrades](#xdmupgrades) | `object` | Optional | Upgrade Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:upgrades

Upgrade information including impressions and transactions associated with upgrades.

`xdm:upgrades`
* is optional
* type: `object`
* defined in this schema

### xdm:upgrades Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:upgradeImpressions`| array | Optional |
| `xdm:upgradeSteps`|  | Optional |
| `xdm:upgradeTransaction`|  | Optional |



#### xdm:upgradeImpressions
##### Upgrade Impressions

Array of the impressions data type.

`xdm:upgradeImpressions`
* is optional
* type: reference


##### xdm:upgradeImpressions Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/datatypes/impressions`










#### xdm:upgradeSteps
##### Upgrade Steps

Extension of toolUsage data type.

`xdm:upgradeSteps`
* is optional
* type: reference

##### xdm:upgradeSteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:upgradeTransaction
##### Upgrade Transaction

Extension of transaction data type.

`xdm:upgradeTransaction`
* is optional
* type: reference

##### xdm:upgradeTransaction Type


* []() – `https://ns.adobe.com/xdm/datatypes/transaction`









