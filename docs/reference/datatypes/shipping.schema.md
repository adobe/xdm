
# Shipping Schema

```
https://ns.adobe.com/xdm/datatypes/shipping
```

Shipping information for one or more products, such as method, cost, etc.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/shipping.schema.json](datatypes/shipping.schema.json) |

## Shipping Example
```json
{
  "xdm:shippingAmount": 20,
  "xdm:shippingMethod": "standard ground"
}
```

# Shipping Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:shippingAmount](#xdmshippingamount) | `number` | Optional | Shipping (this schema) |
| [xdm:shippingMethod](#xdmshippingmethod) | `string` | Optional | Shipping (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:shippingAmount
### Shipping Amount

The amount the customer had to pay for shipping.

`xdm:shippingAmount`
* is optional
* type: `number`
* defined in this schema

### xdm:shippingAmount Type


`number`






## xdm:shippingMethod
### Shipping Method

The method of shipping chosen by the customer, such as standard delivery, expedited delivery, pick up in store, etc.

`xdm:shippingMethod`
* is optional
* type: `string`
* defined in this schema

### xdm:shippingMethod Type


`string`





