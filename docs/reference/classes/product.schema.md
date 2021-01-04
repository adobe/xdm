
# Product Schema

```
https://ns.adobe.com/xdm/classes/product
```

This class is used to capture minimum set of properties that define a product.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/product.schema.json](classes/product.schema.json) |
## Schema Hierarchy

* Product `https://ns.adobe.com/xdm/classes/product`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Currency](../datatypes/currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`


## Product Example
```json
{
  "xdm:productID": "59yigdug",
  "xdm:productName": "photoshop",
  "xdm:productDescription": "photo editing software"
}
```

# Product Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:productDescription](#xdmproductdescription) | `string` | Optional | Product (this schema) |
| [xdm:productID](#xdmproductid) | `string` | Optional | Product (this schema) |
| [xdm:productLastModifiedDate](#xdmproductlastmodifieddate) | `string` | Optional | Product (this schema) |
| [xdm:productListPrice](#xdmproductlistprice) | Currency | Optional | Product (this schema) |
| [xdm:productManufacturedDate](#xdmproductmanufactureddate) | `string` | Optional | Product (this schema) |
| [xdm:productName](#xdmproductname) | `string` | Optional | Product (this schema) |
| [xdm:productRating](#xdmproductrating) | `number` | Optional | Product (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:productDescription
### Product Description

Description of the product.

`xdm:productDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:productDescription Type


`string`






## xdm:productID
### Product ID

Product unique identifer.

`xdm:productID`
* is optional
* type: `string`
* defined in this schema

### xdm:productID Type


`string`






## xdm:productLastModifiedDate
### Product last modified Date

The date when this product was last modified for any updates. The time using RFC3339 with a stated time zone offset such as "2001-07-04T12:08:56-07:00". An example formatting pattern is "yyyy-MM-dd'T'HH:mm:ssXXX".

`xdm:productLastModifiedDate`
* is optional
* type: `string`
* defined in this schema

### xdm:productLastModifiedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:productListPrice
### Product List price

Default price of the product before sales and discounting.

`xdm:productListPrice`
* is optional
* type: Currency
* defined in this schema

### xdm:productListPrice Type


* [Currency](../datatypes/currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:productManufacturedDate
### Product Manufactured date

The date when this product was created. The time using RFC3339 with a stated time zone offset such as "2001-07-04T12:08:56-07:00". An example formatting pattern is "yyyy-MM-dd'T'HH:mm:ssXXX".

`xdm:productManufacturedDate`
* is optional
* type: `string`
* defined in this schema

### xdm:productManufacturedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:productName
### Product Name

Name of the product.

`xdm:productName`
* is optional
* type: `string`
* defined in this schema

### xdm:productName Type


`string`






## xdm:productRating
### Product Rating

Customer review rating of the product.

`xdm:productRating`
* is optional
* type: `number`
* defined in this schema

### xdm:productRating Type


`number`





