
# Product Measurement Schema

```
https://ns.adobe.com/xdm/mixins/product-measurement
```

This mixin is used to capture properties related to product measurements.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/product/product-measurement.schema.json](mixins/product/product-measurement.schema.json) |

## Product Measurement Example
```json
{
  "productSize": 5,
  "xdm:unitOfMeasureCode": "cms",
  "xdm:unitOfMeasureName": "centi meters"
}
```

# Product Measurement Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:productSize](#xdmproductsize) | `string` | Optional | Product Measurement (this schema) |
| [xdm:unitOfMeasureCode](#xdmunitofmeasurecode) | `string` | Optional | Product Measurement (this schema) |
| [xdm:unitOfMeasureName](#xdmunitofmeasurename) | `string` | Optional | Product Measurement (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:productSize
### Product Size

Standard product size for the product.

`xdm:productSize`
* is optional
* type: `string`
* defined in this schema

### xdm:productSize Type


`string`






## xdm:unitOfMeasureCode
### Product Unit Of Measure Code

Standard unit of measure of the product and or variation and relates the units for the size measurement.

`xdm:unitOfMeasureCode`
* is optional
* type: `string`
* defined in this schema

### xdm:unitOfMeasureCode Type


`string`






## xdm:unitOfMeasureName
### Product Unit Of Measure Name

Friendly name for product unit of measure.

`xdm:unitOfMeasureName`
* is optional
* type: `string`
* defined in this schema

### xdm:unitOfMeasureName Type


`string`





