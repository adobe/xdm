
# Deposit Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-deposit-details
```

Deposit details such as ID, type, and amount.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-deposit-details.schema.json](mixins/experience-event/experienceevent-deposit-details.schema.json) |

## Deposit Details Example
```json
{}
```

# Deposit Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Deposit Details (this schema) |
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
| `xdm:depositDetails`| object | Optional |



#### xdm:depositDetails

undefined

`xdm:depositDetails`
* is optional
* type: `object`

##### xdm:depositDetails Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:deposit": {
      "title": "Deposit",
      "$ref": "https://ns.adobe.com/xdm/datatypes/transaction",
      "description": "Extension of transaction data type."
    },
    "xdm:depositAccount": {
      "title": "Deposit Account",
      "$ref": "https://ns.adobe.com/xdm/datatypes/financial-account",
      "description": "Extension of financialAccount data type."
    }
  },
  "simpletype": "`object`"
}
```









