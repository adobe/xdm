
# Product Catalog Category Schema

```
https://ns.adobe.com/xdm/mixins/product-catalog-category
```

This mixin is used to capture properties related to product catalog category.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/product/product-catalog-category.schema.json](fieldgroups/product/product-catalog-category.schema.json) |

## Product Catalog Category Example
```json
{
  "xdm:productCatalogCategoryName": "prime",
  "xdm:parentProductCatalogCategoryName": "video"
}
```

# Product Catalog Category Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:parentProductCatalogCategoryName](#xdmparentproductcatalogcategoryname) | `string` | Optional | Product Catalog Category (this schema) |
| [xdm:productCatalogCategoryName](#xdmproductcatalogcategoryname) | `string` | Optional | Product Catalog Category (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:parentProductCatalogCategoryName
### Parent Product Catalog Category Name

Parent product category name used to build hierarchy.

`xdm:parentProductCatalogCategoryName`
* is optional
* type: `string`
* defined in this schema

### xdm:parentProductCatalogCategoryName Type


`string`






## xdm:productCatalogCategoryName
### Product Category Name

friendly name of the product category.

`xdm:productCatalogCategoryName`
* is optional
* type: `string`
* defined in this schema

### xdm:productCatalogCategoryName Type


`string`





