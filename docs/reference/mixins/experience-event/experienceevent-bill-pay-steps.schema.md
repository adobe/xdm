
# Bill Pay Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-bill-pay-steps
```

Bill pay steps such as start, save, failure, and complete.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-bill-pay-steps.schema.json](mixins/experience-event/experienceevent-bill-pay-steps.schema.json) |
## Schema Hierarchy

* Bill Pay Steps `https://ns.adobe.com/xdm/mixins/experienceevent-bill-pay-steps`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Bill Pay Steps Example
```json
{}
```

# Bill Pay Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinance](#xdmpersonalfinance) | `object` | Optional | Bill Pay Steps (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:personalFinance


`xdm:personalFinance`
* is optional
* type: `object`
* defined in this schema

### xdm:personalFinance Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:billPaySteps`| object | Optional |



#### xdm:billPaySteps

undefined

`xdm:billPaySteps`
* is optional
* type: `object`

##### xdm:billPaySteps Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:billPay": {
      "title": "Bill Pay Steps",
      "$ref": "https://ns.adobe.com/xdm/datatypes/tool-usage",
      "description": "Extension of toolUsage data type."
    },
    "xdm:billPayAccount": {
      "title": "Bill Pay Account",
      "$ref": "https://ns.adobe.com/xdm/datatypes/financial-account",
      "description": "Extension of financialAccount data type."
    }
  },
  "simpletype": "`object`"
}
```









