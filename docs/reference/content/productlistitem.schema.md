
# Product List Item Schema

```
https://ns.adobe.com/xdm/content/productlistitem
```

The product list item is a list item representing a product selected by a customer with specific options and pricing that are for that usage context at a specific point of time and may differ from the product record. For example the product record contains details from the product information system that are consistent for all customers, where the product list item has the actual price offered to the customer at that time which may vary due to sales campaigns or seasonal pricing.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Forbidden | Permitted | [content/productlistitem.schema.json](content/productlistitem.schema.json) |

## Product List Item Example
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

# Product List Item Definitions

| Property | Type | Group |
|----------|------|-------|
| [@id](#@id) | `string` | `https://ns.adobe.com/xdm/content/productlistitem#/definitions/productlistitem` |
| [xdm:SKU](#xdm:SKU) | `string` | `https://ns.adobe.com/xdm/content/productlistitem#/definitions/productlistitem` |
| [xdm:currencyCode](#xdm:currencyCode) | `string` | `https://ns.adobe.com/xdm/content/productlistitem#/definitions/productlistitem` |
| [xdm:name](#xdm:name) | `string` | `https://ns.adobe.com/xdm/content/productlistitem#/definitions/productlistitem` |
| [xdm:priceTotal](#xdm:priceTotal) | `number` | `https://ns.adobe.com/xdm/content/productlistitem#/definitions/productlistitem` |
| [xdm:product](#xdm:product) | `string` | `https://ns.adobe.com/xdm/content/productlistitem#/definitions/productlistitem` |
| [xdm:productAddMethod](#xdm:productAddMethod) | `string` | `https://ns.adobe.com/xdm/content/productlistitem#/definitions/productlistitem` |
| [xdm:quantity](#xdm:quantity) | `integer` | `https://ns.adobe.com/xdm/content/productlistitem#/definitions/productlistitem` |

## @id
### Line Item ID.

The line item identifier for this product entry. The product itself is identified through `xdm:product`.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:SKU
### SKU

Stock Keeping Unit, the unique identifier for a product defined by the vendor.

`xdm:SKU`
* is optional
* type: `string`
* defined in this schema

### xdm:SKU Type


`string`






## xdm:currencyCode
### Currency Code

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
### Price Total

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
### Product Add Method

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





