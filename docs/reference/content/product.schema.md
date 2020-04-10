
# Product Schema

```
https://ns.adobe.com/xdm/context/product
```

XDM product variant, master product and key attributes of product in the product catalog.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [content/product.schema.json](content/product.schema.json) |
## Schema Hierarchy

* Product `https://ns.adobe.com/xdm/context/product`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Product Example
```json
{
  "@id": "https://commerce.adobe.io/entities/product/product-203766910",
  "xdm:SKU": "203766910",
  "xdm:name": "Lahara Single Hole Single-Handle Bathroom Faucet with Metal Drain Assembly in Stainless",
  "schema:description": "Just like ocean waves, the one-piece curves and sleek lines of this Lahara Single Hole 1-Handle High Arc Bathroom Faucet in Stainless make a lasting impression. Delta's exclusive DIAMOND seal technology uses a valve with a tough diamond coating to bring you a faucet built to last up to five million uses.",
  "xdm:category": "Bathroom Faucets",
  "xdm:department": "Bathroom",
  "xdm:brand": "Delta",
  "xdm:fabrication": "stainless steel",
  "xdm:size": 8.91,
  "xdm:unitOfMeasure": "Inch",
  "xdm:countryOfOrigin": "US",
  "xdm:listPrice": 151.99,
  "xdm:currencyCode": "USD",
  "xdm:productURL": "https://www.homedepot.com/p/Delta-Lahara-Single-Hole-Single-Handle-Bathroom-Faucet-with-Metal-Drain-Assembly-in-Stainless-538-SSMPU-DST/203766910",
  "xdm:manufacturerName": "Delta Faucet Company",
  "xdm:supplierName": "Home Depot"
}
```

# Product Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Product (this schema) |
| [schema:description](#schemadescription) | `string` | Optional | Product (this schema) |
| [xdm:COGS](#xdmcogs) | `number` | Optional | Product (this schema) |
| [xdm:SKU](#xdmsku) | `string` | Optional | Product (this schema) |
| [xdm:brand](#xdmbrand) | `string` | Optional | Product (this schema) |
| [xdm:category](#xdmcategory) | `string` | Optional | Product (this schema) |
| [xdm:countryOfOrigin](#xdmcountryoforigin) | `string` | Optional | Product (this schema) |
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional | Product (this schema) |
| [xdm:department](#xdmdepartment) | `string` | Optional | Product (this schema) |
| [xdm:fabrication](#xdmfabrication) | `string` | Optional | Product (this schema) |
| [xdm:gender](#xdmgender) | `string` | Optional | Product (this schema) |
| [xdm:listPrice](#xdmlistprice) | `number` | Optional | Product (this schema) |
| [xdm:manufacturerName](#xdmmanufacturername) | `string` | Optional | Product (this schema) |
| [xdm:masterProductDescription](#xdmmasterproductdescription) | `string` | Optional | Product (this schema) |
| [xdm:masterProductID](#xdmmasterproductid) | `string` | Optional | Product (this schema) |
| [xdm:masterProductName](#xdmmasterproductname) | `string` | Optional | Product (this schema) |
| [xdm:masterProductSKU](#xdmmasterproductsku) | `string` | Optional | Product (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Product (this schema) |
| [xdm:originalSaleDate](#xdmoriginalsaledate) | `string` | Optional | Product (this schema) |
| [xdm:productCreateDate](#xdmproductcreatedate) | `string` | Optional | Product (this schema) |
| [xdm:productLastModified](#xdmproductlastmodified) | `string` | Optional | Product (this schema) |
| [xdm:productURL](#xdmproducturl) | `string` | Optional | Product (this schema) |
| [xdm:size](#xdmsize) | `number` | Optional | Product (this schema) |
| [xdm:supplierName](#xdmsuppliername) | `string` | Optional | Product (this schema) |
| [xdm:unitOfMeasure](#xdmunitofmeasure) | `string` | Optional | Product (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

The internal unique ID of the product in the commerce backend system.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## schema:description
### Description

The localized description of the product.

`schema:description`
* is optional
* type: `string`
* defined in this schema

### schema:description Type


`string`






## xdm:COGS
### Cost of good sold

Cost of good sold, in the `currencyCode` currency.

`xdm:COGS`
* is optional
* type: `number`
* defined in this schema

### xdm:COGS Type


`number`






## xdm:SKU
### SKU

The unique SKU (stock keeping unit) of the product assigned by the vendor.

`xdm:SKU`
* is optional
* type: `string`
* defined in this schema

### xdm:SKU Type


`string`






## xdm:brand
### Brand

The brand of the product.

`xdm:brand`
* is optional
* type: `string`
* defined in this schema

### xdm:brand Type


`string`






## xdm:category
### Category

Primary categorization or category name of the product.

`xdm:category`
* is optional
* type: `string`
* defined in this schema

### xdm:category Type


`string`






## xdm:countryOfOrigin
### Country of origin

The two-character [ISO 3166-1 alpha-2](https://datahub.io/core/country-list) code for the country of origin of the product as defined by customs requirements.

`xdm:countryOfOrigin`
* is optional
* type: `string`
* defined in this schema

### xdm:countryOfOrigin Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%7D%24)):
```regex
^[A-Z]{2}$
```






## xdm:currencyCode
### Currency code

The ISO 4217 alphabetic currency code used for cost and pricing, including `listPrice` and `COGS`.

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



## xdm:department
### Department

Primary department the product is associated with.

`xdm:department`
* is optional
* type: `string`
* defined in this schema

### xdm:department Type


`string`






## xdm:fabrication
### Fabrication

Primary material of the product construction.

`xdm:fabrication`
* is optional
* type: `string`
* defined in this schema

### xdm:fabrication Type


`string`






## xdm:gender
### Gender

Gender the product is marketed to.

`xdm:gender`
* is optional
* type: `string`
* defined in this schema

### xdm:gender Type


`string`



### xdm:gender Known Values
| Value | Description |
|-------|-------------|
| `male` | For men |
| `female` | For women |
| `unisex` | For both men and women |
| `unknown` | Unknown |




## xdm:listPrice
### List price

Default price of the product before sales and discounting, in the `currencyCode` currency.

`xdm:listPrice`
* is optional
* type: `number`
* defined in this schema

### xdm:listPrice Type


`number`






## xdm:manufacturerName
### Manufacturer name

Manufacturer of the product.

`xdm:manufacturerName`
* is optional
* type: `string`
* defined in this schema

### xdm:manufacturerName Type


`string`






## xdm:masterProductDescription
### Master product description

The description of the product.

`xdm:masterProductDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:masterProductDescription Type


`string`






## xdm:masterProductID
### Master product identifier

The internal unique ID of the product in the commerce backend system.

`xdm:masterProductID`
* is optional
* type: `string`
* defined in this schema

### xdm:masterProductID Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:masterProductName
### Master product name

The localized name of the product.

`xdm:masterProductName`
* is optional
* type: `string`
* defined in this schema

### xdm:masterProductName Type


`string`






## xdm:masterProductSKU
### Master product SKU

The unique SKU (stock keeping unit) of the master product assigned by the vendor or manufacturer.

`xdm:masterProductSKU`
* is optional
* type: `string`
* defined in this schema

### xdm:masterProductSKU Type


`string`






## xdm:name
### Name

The name of the product.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:originalSaleDate
### Original sale date

First date the product was made available for sale. The time using RFC3339 with a stated time zone offset such as "2001-07-04T12:08:56-07:00". An example formatting pattern is "yyyy-MM-dd'T'HH:mm:ssXXX".

`xdm:originalSaleDate`
* is optional
* type: `string`
* defined in this schema

### xdm:originalSaleDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:productCreateDate
### Product creation date

The date when this product was created. The time using RFC3339 with a stated time zone offset such as "2001-07-04T12:08:56-07:00". An example formatting pattern is "yyyy-MM-dd'T'HH:mm:ssXXX".

`xdm:productCreateDate`
* is optional
* type: `string`
* defined in this schema

### xdm:productCreateDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:productLastModified
### Product last modified

The date when this product was last modified. The time using RFC3339 with a stated time zone offset such as "2001-07-04T12:08:56-07:00". An example formatting pattern is "yyyy-MM-dd'T'HH:mm:ssXXX".

`xdm:productLastModified`
* is optional
* type: `string`
* defined in this schema

### xdm:productLastModified Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:productURL
### Product URL

The URL for the primary product view of the product page.

`xdm:productURL`
* is optional
* type: `string`
* defined in this schema

### xdm:productURL Type


`string`






## xdm:size
### Size

Standard product size for the product.

`xdm:size`
* is optional
* type: `number`
* defined in this schema

### xdm:size Type


`number`






## xdm:supplierName
### Supplier name

The distributor of the product.

`xdm:supplierName`
* is optional
* type: `string`
* defined in this schema

### xdm:supplierName Type


`string`






## xdm:unitOfMeasure
### Unit of measure

Standard unit of measure of the product and or variation and relates the units for the size measurement.

`xdm:unitOfMeasure`
* is optional
* type: `string`
* defined in this schema

### xdm:unitOfMeasure Type


`string`





