
# Discount Schema

```
https://ns.adobe.com/xdm/data/discount
```

This is an offer from the supplier to the purchaser, to reduce the payment amount if the payment is made within a certain period of time.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/discount.schema.json](data/discount.schema.json) |

## Discount Example
```json
{
  "xdm:code": "percentage",
  "xdm:value": 30
}
```

# Discount Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [schema:description](#schemadescription) | `string` | Optional | Discount (this schema) |
| [xdm:code](#xdmcode) | `string` | **Required** | Discount (this schema) |
| [xdm:condition](#xdmcondition) | complex | Optional | Discount (this schema) |
| [xdm:value](#xdmvalue) | `number` | Optional | Discount (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## schema:description
### Description

Describes the discounting rules in detail. 

`schema:description`
* is optional
* type: `string`
* defined in this schema

### schema:description Type


`string`






## xdm:code
### Code

The description of the discountValue attribute. e.g percentage, currency, 3for2 etc. Can be enumerated, custom values allowed.

`xdm:code`
* is **required**
* type: `string`
* defined in this schema

### xdm:code Type


`string`



### xdm:code Known Values
| Value | Description |
|-------|-------------|
| `bogo` | Buy one, get one free |
| `bogoho` | Buy one, get one half off |
| `3for2` | Three for the price of two |
| `3fixed` | Any three items for a fixed price |
| `voucher` | Save `xdm:value` when you spend more than `xdm:condition` |
| `fixed` | Fixed amount off |
| `percentage` | Percentage amount off |
| `shipping` | Free shipping |




## xdm:condition
### Condition

The minimum amount of items or price for the dicount to qualify

`xdm:condition`
* is optional
* type: complex
* defined in this schema

### xdm:condition Type

Unknown type ``.

```json
{
  "title": "Condition",
  "description": "The minimum amount of items or price for the dicount to qualify",
  "simpletype": "complex"
}
```





## xdm:value
### Value

If the discount description indicates a percentage or similar formulaic value, it is represented here, can be percentage or currency amount.

`xdm:value`
* is optional
* type: `number`
* defined in this schema

### xdm:value Type


`number`





