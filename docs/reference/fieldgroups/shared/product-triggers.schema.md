
# Product Triggers Schema

```
https://ns.adobe.com/xdm/mixins/product-triggers
```

Weather Product Triggers

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/shared/product-triggers.schema.json](fieldgroups/shared/product-triggers.schema.json) |

## Product Triggers Example
```json
{
  "xdm:productTriggers": {
    "xdm:triggersProduct": [
      7
    ]
  }
}
```

# Product Triggers Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:productTriggers](#xdmproducttriggers) | `object` | Optional | Product Triggers (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:productTriggers


`xdm:productTriggers`
* is optional
* type: `object`
* defined in this schema

### xdm:productTriggers Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:triggersProduct`| array | Optional |



#### xdm:triggersProduct
##### Product Triggers

undefined

`xdm:triggersProduct`
* is optional
* type: `integer[]`


##### xdm:triggersProduct Type


Array type: `integer[]`

All items must be of the type:
`integer`













