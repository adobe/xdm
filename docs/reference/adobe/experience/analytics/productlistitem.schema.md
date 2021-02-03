
# Adobe Analytics extension to XDM Product List Item Schema

```
https://ns.adobe.com/experience/analytics/productlistitem
```

XDM Product List Item extension properties specific to Adobe Analytics that implements Merchandizing support.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/analytics/productlistitem.schema.json](adobe/experience/analytics/productlistitem.schema.json) |
## Schema Hierarchy

* Adobe Analytics extension to XDM Product List Item `https://ns.adobe.com/experience/analytics/productlistitem`
  * [customDimensions.schema](customDimensions.schema.md) `https://ns.adobe.com/experience/analytics/customDimensions`
  * [Product list item](../../../datatypes/productlistitem.schema.md) `https://ns.adobe.com/xdm/content/productlistitem`
  * [Adobe Analytics Custom Events](events.schema.md) `https://ns.adobe.com/experience/analytics/events`


# Adobe Analytics extension to XDM Product List Item Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Product list item](../../../datatypes/productlistitem.schema.md#id) |
| [https://ns.adobe.com/experience/analytics/customDimensions](#httpsnsadobecomexperienceanalyticscustomdimensions) | customDimensions.schema | Optional | Adobe Analytics extension to XDM Product List Item (this schema) |
| [https://ns.adobe.com/experience/analytics/event101to200](#httpsnsadobecomexperienceanalyticsevent101to200) | event101to200.schema | Optional | [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent101to200) |
| [https://ns.adobe.com/experience/analytics/event1to100](#httpsnsadobecomexperienceanalyticsevent1to100) | event1to100.schema | Optional | [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent1to100) |
| [https://ns.adobe.com/experience/analytics/event201to300](#httpsnsadobecomexperienceanalyticsevent201to300) | event201to300.schema | Optional | [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent201to300) |
| [https://ns.adobe.com/experience/analytics/event301to400](#httpsnsadobecomexperienceanalyticsevent301to400) | event301to400.schema | Optional | [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent301to400) |
| [https://ns.adobe.com/experience/analytics/event401to500](#httpsnsadobecomexperienceanalyticsevent401to500) | event401to500.schema | Optional | [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent401to500) |
| [https://ns.adobe.com/experience/analytics/event501to600](#httpsnsadobecomexperienceanalyticsevent501to600) | event501to600.schema | Optional | [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent501to600) |
| [https://ns.adobe.com/experience/analytics/event601to700](#httpsnsadobecomexperienceanalyticsevent601to700) | event601to700.schema | Optional | [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent601to700) |
| [https://ns.adobe.com/experience/analytics/event701to800](#httpsnsadobecomexperienceanalyticsevent701to800) | event701to800.schema | Optional | [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent701to800) |
| [https://ns.adobe.com/experience/analytics/event801to900](#httpsnsadobecomexperienceanalyticsevent801to900) | event801to900.schema | Optional | [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent801to900) |
| [https://ns.adobe.com/experience/analytics/event901to1000](#httpsnsadobecomexperienceanalyticsevent901to1000) | event901to1000.schema | Optional | [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent901to1000) |
| [xdm:SKU](#xdmsku) | `string` | Optional | [Product list item](../../../datatypes/productlistitem.schema.md#xdmsku) |
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional | [Product list item](../../../datatypes/productlistitem.schema.md#xdmcurrencycode) |
| [xdm:name](#xdmname) | `string` | Optional | [Product list item](../../../datatypes/productlistitem.schema.md#xdmname) |
| [xdm:priceTotal](#xdmpricetotal) | `number` | Optional | [Product list item](../../../datatypes/productlistitem.schema.md#xdmpricetotal) |
| [xdm:product](#xdmproduct) | `string` | Optional | [Product list item](../../../datatypes/productlistitem.schema.md#xdmproduct) |
| [xdm:productAddMethod](#xdmproductaddmethod) | `string` | Optional | [Product list item](../../../datatypes/productlistitem.schema.md#xdmproductaddmethod) |
| [xdm:quantity](#xdmquantity) | `integer` | Optional | [Product list item](../../../datatypes/productlistitem.schema.md#xdmquantity) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Line item ID.

The line item identifier for this product entry. The product itself is identified through `xdm:product`.

`@id`
* is optional
* type: `string`
* defined in [Product list item](../../../datatypes/productlistitem.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/analytics/customDimensions
### Merchandizing Custom Dimensions

`https://ns.adobe.com/experience/analytics/customDimensions`
* is optional
* type: customDimensions.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/customDimensions Type


* [customDimensions.schema](customDimensions.schema.md) – `https://ns.adobe.com/experience/analytics/customDimensions`





## https://ns.adobe.com/experience/analytics/event101to200
### Event 101 to 200

`https://ns.adobe.com/experience/analytics/event101to200`
* is optional
* type: event101to200.schema
* defined in [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent101to200)

### https://ns.adobe.com/experience/analytics/event101to200 Type


* [event101to200.schema](event101to200.schema.md) – `https://ns.adobe.com/experience/analytics/event101to200`





## https://ns.adobe.com/experience/analytics/event1to100
### Event 1 to 100

`https://ns.adobe.com/experience/analytics/event1to100`
* is optional
* type: event1to100.schema
* defined in [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent1to100)

### https://ns.adobe.com/experience/analytics/event1to100 Type


* [event1to100.schema](event1to100.schema.md) – `https://ns.adobe.com/experience/analytics/event1to100`





## https://ns.adobe.com/experience/analytics/event201to300
### Event 201 to 300

`https://ns.adobe.com/experience/analytics/event201to300`
* is optional
* type: event201to300.schema
* defined in [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent201to300)

### https://ns.adobe.com/experience/analytics/event201to300 Type


* [event201to300.schema](event201to300.schema.md) – `https://ns.adobe.com/experience/analytics/event201to300`





## https://ns.adobe.com/experience/analytics/event301to400
### Event 301 to 400

`https://ns.adobe.com/experience/analytics/event301to400`
* is optional
* type: event301to400.schema
* defined in [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent301to400)

### https://ns.adobe.com/experience/analytics/event301to400 Type


* [event301to400.schema](event301to400.schema.md) – `https://ns.adobe.com/experience/analytics/event301to400`





## https://ns.adobe.com/experience/analytics/event401to500
### Event 401 to 500

`https://ns.adobe.com/experience/analytics/event401to500`
* is optional
* type: event401to500.schema
* defined in [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent401to500)

### https://ns.adobe.com/experience/analytics/event401to500 Type


* [event401to500.schema](event401to500.schema.md) – `https://ns.adobe.com/experience/analytics/event401to500`





## https://ns.adobe.com/experience/analytics/event501to600
### Event 501 to 600

`https://ns.adobe.com/experience/analytics/event501to600`
* is optional
* type: event501to600.schema
* defined in [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent501to600)

### https://ns.adobe.com/experience/analytics/event501to600 Type


* [event501to600.schema](event501to600.schema.md) – `https://ns.adobe.com/experience/analytics/event501to600`





## https://ns.adobe.com/experience/analytics/event601to700
### Event 601 to 700

`https://ns.adobe.com/experience/analytics/event601to700`
* is optional
* type: event601to700.schema
* defined in [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent601to700)

### https://ns.adobe.com/experience/analytics/event601to700 Type


* [event601to700.schema](event601to700.schema.md) – `https://ns.adobe.com/experience/analytics/event601to700`





## https://ns.adobe.com/experience/analytics/event701to800
### Event 701 to 800

`https://ns.adobe.com/experience/analytics/event701to800`
* is optional
* type: event701to800.schema
* defined in [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent701to800)

### https://ns.adobe.com/experience/analytics/event701to800 Type


* [event701to800.schema](event701to800.schema.md) – `https://ns.adobe.com/experience/analytics/event701to800`





## https://ns.adobe.com/experience/analytics/event801to900
### Event 801 to 900

`https://ns.adobe.com/experience/analytics/event801to900`
* is optional
* type: event801to900.schema
* defined in [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent801to900)

### https://ns.adobe.com/experience/analytics/event801to900 Type


* [event801to900.schema](event801to900.schema.md) – `https://ns.adobe.com/experience/analytics/event801to900`





## https://ns.adobe.com/experience/analytics/event901to1000
### Event 901 to 1000

`https://ns.adobe.com/experience/analytics/event901to1000`
* is optional
* type: event901to1000.schema
* defined in [Adobe Analytics Custom Events](events.schema.md#httpsnsadobecomexperienceanalyticsevent901to1000)

### https://ns.adobe.com/experience/analytics/event901to1000 Type


* [event901to1000.schema](event901to1000.schema.md) – `https://ns.adobe.com/experience/analytics/event901to1000`





## xdm:SKU
### SKU

Stock keeping unit (SKU), the unique identifier for a product defined by the vendor.

`xdm:SKU`
* is optional
* type: `string`
* defined in [Product list item](../../../datatypes/productlistitem.schema.md#xdmsku)

### xdm:SKU Type


`string`






## xdm:currencyCode
### Currency code

The ISO 4217 alphabetic currency code used for pricing the product.

`xdm:currencyCode`
* is optional
* type: `string`
* defined in [Product list item](../../../datatypes/productlistitem.schema.md#xdmcurrencycode)

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
* defined in [Product list item](../../../datatypes/productlistitem.schema.md#xdmname)

### xdm:name Type


`string`






## xdm:priceTotal
### Price total

The total price for the product line item.

`xdm:priceTotal`
* is optional
* type: `number`
* defined in [Product list item](../../../datatypes/productlistitem.schema.md#xdmpricetotal)

### xdm:priceTotal Type


`number`






## xdm:product
### Product

The XDM identifier of the product itself.

`xdm:product`
* is optional
* type: `string`
* defined in [Product list item](../../../datatypes/productlistitem.schema.md#xdmproduct)

### xdm:product Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:productAddMethod
### Product add method

The method that was used to add a product item to the list by the visitor. Set with product list add metrics.

`xdm:productAddMethod`
* is optional
* type: `string`
* defined in [Product list item](../../../datatypes/productlistitem.schema.md#xdmproductaddmethod)

### xdm:productAddMethod Type


`string`






## xdm:quantity
### Quantity

The number of units the customer has indicated they require of the product.

`xdm:quantity`
* is optional
* type: `integer`
* defined in [Product list item](../../../datatypes/productlistitem.schema.md#xdmquantity)

### xdm:quantity Type


`integer`





