
# Shipping Schema

```
https://ns.adobe.com/xdm/datatypes/shipping
```

Shipping information for one or more products, such as method, cost, etc.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/shipping.schema.json](datatypes/shipping.schema.json) |
## Schema Hierarchy

* Shipping `https://ns.adobe.com/xdm/datatypes/shipping`
  * [Postal address](demographic/address.schema.md) `https://ns.adobe.com/xdm/common/address`


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
| [xdm:address](#xdmaddress) | Postal address | Optional | Shipping (this schema) |
| [xdm:shippingAmount](#xdmshippingamount) | `number` | Optional | Shipping (this schema) |
| [xdm:shippingDestination](#xdmshippingdestination) | `enum` | Optional | Shipping (this schema) |
| [xdm:shippingMethod](#xdmshippingmethod) | `string` | Optional | Shipping (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:address
### Shipping Address

Shipping Address.

`xdm:address`
* is optional
* type: Postal address
* defined in this schema

### xdm:address Type


* [Postal address](demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:shippingAmount
### Shipping Amount

The amount the customer had to pay for shipping.

`xdm:shippingAmount`
* is optional
* type: `number`
* defined in this schema

### xdm:shippingAmount Type


`number`






## xdm:shippingDestination
### Shipping Destination

The ship-to  destination specified by the user. It could be home, store etc.

`xdm:shippingDestination`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmshippingdestination-known-values).

### xdm:shippingDestination Known Values
| Value | Description |
|-------|-------------|
| `home` | Home |
| `store` | Store |




## xdm:shippingMethod
### Shipping Method

The method of shipping chosen by the customer, such as standard delivery, expedited delivery, pick up in store, etc.

`xdm:shippingMethod`
* is optional
* type: `string`
* defined in this schema

### xdm:shippingMethod Type


`string`





