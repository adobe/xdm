
# Product Identifiers Schema

```
https://ns.adobe.com/xdm/mixins/product-identifiers
```

This mixin is used to capture properties related to product identifiers generic to all industries.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/product/product-identifiers.schema.json](mixins/product/product-identifiers.schema.json) |

## Product Identifiers Example
```json
{}
```

# Product Identifiers Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:productGTIN](#xdmproductgtin) | `string` | Optional | Product Identifiers (this schema) |
| [xdm:productImageURL](#xdmproductimageurl) | `string` | Optional | Product Identifiers (this schema) |
| [xdm:productSKU](#xdmproductsku) | `string` | Optional | Product Identifiers (this schema) |
| [xdm:productSearchKeywords](#xdmproductsearchkeywords) | `string[]` | Optional | Product Identifiers (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:productGTIN
### Product GTIN

Global Trade Item Number of the product.

`xdm:productGTIN`
* is optional
* type: `string`
* defined in this schema

### xdm:productGTIN Type


`string`






## xdm:productImageURL
### Product Image URL

The URL for the primary product image of the product.

`xdm:productImageURL`
* is optional
* type: `string`
* defined in this schema

### xdm:productImageURL Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:productSKU
### Product SKU

The unique SKU (stock keeping unit) of the product assigned by the vendor.

`xdm:productSKU`
* is optional
* type: `string`
* defined in this schema

### xdm:productSKU Type


`string`






## xdm:productSearchKeywords
### Product Search Keywords

The search keywords associated with the product.

`xdm:productSearchKeywords`
* is optional
* type: `string[]`

* defined in this schema

### xdm:productSearchKeywords Type


Array type: `string[]`

All items must be of the type:
`string`








