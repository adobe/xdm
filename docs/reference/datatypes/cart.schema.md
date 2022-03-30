
# Cart Schema

```
https://ns.adobe.com/xdm/datatypes/cart
```

Cart-specific properties

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/cart.schema.json](datatypes/cart.schema.json) |

## Cart Example
```json
{
  "xdm:cartID": "abc123",
  "xdm:cartSource": "detail page"
}
```

# Cart Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:cartID](#xdmcartid) | `string` | Optional | Cart (this schema) |
| [xdm:cartSource](#xdmcartsource) | `string` | Optional | Cart (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:cartID
### Cart ID

Unique identifier assigned by the seller for the cart.

`xdm:cartID`
* is optional
* type: `string`
* defined in this schema

### xdm:cartID Type


`string`






## xdm:cartSource
### Cart Source

Where one or more products was added to the cart from.

`xdm:cartSource`
* is optional
* type: `string`
* defined in this schema

### xdm:cartSource Type


`string`





