
# Upsell Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-upsell-details
```

Upsell details such as offer name, type, and ID, as well as transaction details such as type and amount.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-upsell-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-upsell-details.schema.json) |

## Upsell Details Example
```json
{
  "xdm:upsells": {
    "xdm:upsellOffer": {
      "xdm:Offer Details": {}
    },
    "xdm:upsellTransaction": {
      "xdm:transaction": {
        "xdm:transactionID": "T10291832",
        "xdm:transactionDate": "2021-01-0715:52:25+00:00",
        "xdm:transactionType": "transfer"
      }
    }
  }
}
```

# Upsell Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:upsells](#xdmupsells) | `object` | Optional | Upsell Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:upsells


`xdm:upsells`
* is optional
* type: `object`
* defined in this schema

### xdm:upsells Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:upsellOffer`|  | Optional |
| `xdm:upsellSteps`|  | Optional |
| `xdm:upsellTransaction`|  | Optional |



#### xdm:upsellOffer
##### Upsell Offer

Extension of offer details data type.

`xdm:upsellOffer`
* is optional
* type: reference

##### xdm:upsellOffer Type


* []() – `https://ns.adobe.com/xdm/mixins/experienceevent-offer-impression-details`







#### xdm:upsellSteps
##### Upsell Steps

Extension of toolUsage data type.

`xdm:upsellSteps`
* is optional
* type: reference

##### xdm:upsellSteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:upsellTransaction
##### Upsell Transaction

Extension of transaction data type.

`xdm:upsellTransaction`
* is optional
* type: reference

##### xdm:upsellTransaction Type


* []() – `https://ns.adobe.com/xdm/datatypes/transaction`









