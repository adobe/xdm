
# Product Category Schema

```
https://ns.adobe.com/xdm/mixins/product-category
```

This mixin is used to capture properties related to product category.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/product/product-category.schema.json](mixins/product/product-category.schema.json) |

## Product Category Example
```json
{
  "xdm:productCatelogCategoryName": "prime",
  "xdm:parentProductCatelogCategoryName": "video"
}
```

# Product Category Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:productCategoryDescription](#xdmproductcategorydescription) | `string` | Optional | Product Category (this schema) |
| [xdm:productCategoryName](#xdmproductcategoryname) | `string` | Optional | Product Category (this schema) |
| [xdm:productSubcategoryDescription](#xdmproductsubcategorydescription) | `string` | Optional | Product Category (this schema) |
| [xdm:productSubcategoryName](#xdmproductsubcategoryname) | `string` | Optional | Product Category (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:productCategoryDescription
### Product Category Description

Friendly description of product category.

`xdm:productCategoryDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:productCategoryDescription Type


`string`






## xdm:productCategoryName
### Product Category Name

friendly name of the product category.

`xdm:productCategoryName`
* is optional
* type: `string`
* defined in this schema

### xdm:productCategoryName Type


`string`






## xdm:productSubcategoryDescription
### Product Sub category Description

Friendly description of product subcategory.

`xdm:productSubcategoryDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:productSubcategoryDescription Type


`string`






## xdm:productSubcategoryName
### Product Subcategory Name

friendly name of the product subcategory.

`xdm:productSubcategoryName`
* is optional
* type: `string`
* defined in this schema

### xdm:productSubcategoryName Type


`string`





