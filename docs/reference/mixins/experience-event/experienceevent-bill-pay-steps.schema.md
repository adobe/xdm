
# Bill Pay Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-bill-pay-steps
```

Bill pay steps such as start, save, failure, and complete.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-bill-pay-steps.schema.json](mixins/experience-event/experienceevent-bill-pay-steps.schema.json) |

## Bill Pay Steps Example
```json
{}
```

# Bill Pay Steps Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:personalFinance](#xdmpersonalfinance) | `object` | `https://ns.adobe.com/xdm/mixins/experienceevent-bill-pay-steps#/definitions/billPaySteps` |

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









