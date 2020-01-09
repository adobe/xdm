
# Product list item Schema

```
https://ns.adobe.com/xdm/content/productlistitem
```

The product list item represents a product selected by a customer with specific options, pricing, usage context for a specific point of time and may differ from the product record. For example the product record contains details from the product information system that are consistent for all customers, where the product list item has the actual price offered to the customer at that time which may vary due to sales campaigns or seasonal pricing.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [content/productlistitem.schema.json](content/productlistitem.schema.json) |

## Product list item Example
```json
{
  "xdm:SKU": "1002352692",
  "xdm:product": "https://commerce.adobe.io/entities/product/product-203766910",
  "@id": "https://commerce.adobe.io/entities/item/item-12345678",
  "xdm:name": "24-Watt 8-Light Chrome Integrated LED Bath Light",
  "xdm:currencyCode": "USD",
  "xdm:quantity": 1,
  "xdm:priceTotal": 159
}
```

# Product list item Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Product list item (this schema) |
| [xdm:SKU](#xdmsku) | `string` | Optional | Product list item (this schema) |
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional | Product list item (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Product list item (this schema) |
| [xdm:priceTotal](#xdmpricetotal) | `number` | Optional | Product list item (this schema) |
| [xdm:product](#xdmproduct) | `string` | Optional | Product list item (this schema) |
| [xdm:productAddMethod](#xdmproductaddmethod) | `string` | Optional | Product list item (this schema) |
| [xdm:quantity](#xdmquantity) | `integer` | Optional | Product list item (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Line item ID.

The line item identifier for this product entry. The product itself is identified through `xdm:product`.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:SKU
### SKU

Stock keeping unit (SKU), the unique identifier for a product defined by the vendor.

`xdm:SKU`
* is optional
* type: `string`
* defined in this schema

### xdm:SKU Type


`string`






## xdm:currencyCode
### Currency code

The ISO 4217 alphabetic currency code used for pricing the product.

`xdm:currencyCode`
* is optional
* type: `string`
* defined in this schema

### xdm:currencyCode Type


`string`


All instances must conform to this regular expression 
```regex
^[A-Z]{3}$
```

* test example: [USD](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=USD)
* test example: [EUR](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=EUR)




### xdm:currencyCode Examples

```json
"USD"
```

```json
"EUR"
```



## xdm:name
### Name

The display name for the product as presented to the user for this product view.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:priceTotal
### Price total

The total price for the product line item.

`xdm:priceTotal`
* is optional
* type: `number`
* defined in this schema

### xdm:priceTotal Type


`number`






## xdm:product
### Product

The XDM identifier of the product itself.

`xdm:product`
* is optional
* type: `string`
* defined in this schema

### xdm:product Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:productAddMethod
### Product add method

The method that was used to add a product item to the list by the visitor. Set with product list add metrics.

`xdm:productAddMethod`
* is optional
* type: `string`
* defined in this schema

### xdm:productAddMethod Type


`string`






## xdm:quantity
### Quantity

The number of units the customer has indicated they require of the product.

`xdm:quantity`
* is optional
* type: `integer`
* defined in this schema

### xdm:quantity Type


`integer`





