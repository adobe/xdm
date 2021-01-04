
# Product Catalog Schema

```
https://ns.adobe.com/xdm/mixins/product-catalog
```

This mixin is used to capture properties related to product catalog.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/product/product-catalog.schema.json](mixins/product/product-catalog.schema.json) |

## Product Catalog Example
```json
{
  "xdm:productCatalogName": "video",
  "xdm:productCatalogDescription": "video products"
}
```

# Product Catalog Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:productCatalogDescription](#xdmproductcatalogdescription) | `string` | Optional | Product Catalog (this schema) |
| [xdm:productCatalogName](#xdmproductcatalogname) | `string` | Optional | Product Catalog (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:productCatalogDescription
### Product Catalog Description

Catalog description of the product.

`xdm:productCatalogDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:productCatalogDescription Type


`string`






## xdm:productCatalogName
### Product Catalog Name

friendly name of the product catalog.

`xdm:productCatalogName`
* is optional
* type: `string`
* defined in this schema

### xdm:productCatalogName Type


`string`





