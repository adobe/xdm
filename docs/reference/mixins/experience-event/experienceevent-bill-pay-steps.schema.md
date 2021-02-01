
# Bill Pay Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-bill-pay-steps
```

Bill pay steps such as start, save, failure, and complete.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-bill-pay-steps.schema.json](mixins/experience-event/experienceevent-bill-pay-steps.schema.json) |

## Bill Pay Steps Example
```json
{}
```

# Bill Pay Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Bill Pay Steps (this schema) |
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
| `xdm:billPay`|  | Optional |
| `xdm:billPayAccount`|  | Optional |



#### xdm:billPay
##### Bill Pay Steps

Extension of toolUsage data type.

`xdm:billPay`
* is optional
* type: reference

##### xdm:billPay Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:billPayAccount
##### Bill Pay Account

Extension of financialAccount data type.

`xdm:billPayAccount`
* is optional
* type: reference

##### xdm:billPayAccount Type


* []() – `https://ns.adobe.com/xdm/datatypes/financial-account`









