
# Upgrade Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-upgrade-details
```

Upgrade details such as offer name, type, and ID, as well as transaction details such as type and amount.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-upgrade-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-upgrade-details.schema.json) |

## Upgrade Details Example
```json
{
  "xdm:upgrade": {
    "xdm:upgradeOffer": {
      "xdm:Offer Details": {}
    },
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
| [xdm:upgrade](#xdmupgrade) | `object` | Optional | Upgrade Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:upgrade


`xdm:upgrade`
* is optional
* type: `object`
* defined in this schema

### xdm:upgrade Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:upgradeOffer`|  | Optional |
| `xdm:upgradeSteps`|  | Optional |
| `xdm:upgradeTransaction`|  | Optional |



#### xdm:upgradeOffer
##### Upgrade Offer

Extension of offer details data type.

`xdm:upgradeOffer`
* is optional
* type: reference

##### xdm:upgradeOffer Type


* []() – `https://ns.adobe.com/xdm/mixins/experienceevent-offer-impression-details`







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









