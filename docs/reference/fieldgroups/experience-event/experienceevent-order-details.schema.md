
# Order Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-order-details
```

Order data such as product information (SKU, name, quantity), and related information like shipping, billing, payments etc.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-order-details.schema.json](fieldgroups/experience-event/experienceevent-order-details.schema.json) |
## Schema Hierarchy

* Order Details `https://ns.adobe.com/xdm/context/experienceevent-order-details`
  * [Store and Web Order](../../datatypes/store-web-order.schema.md) `https://ns.adobe.com/xdm/datatypes/store-web-order`
  * [Shipping](../../datatypes/shipping.schema.md) `https://ns.adobe.com/xdm/datatypes/shipping`


## Order Details Example
```json
{
  "xdm:productListItems": [
    {
      "xdm:_id": "1002352692",
      "xdm:currencyCode": "USD",
      "xdm:quantity": 1,
      "xdm:priceTotal": 159,
      "xdm:SKU": "1234566"
    }
  ],
  "xdm:order": {
    "xdm:orderID": "a8g784hjq1mnp3",
    "xdm:orderDate": "2017-09-26T15:52:25+00:00",
    "xdm:payment": {
      "xdm:transactionID": "transactid-a111",
      "xdm:paymentAmount": 899.99,
      "xdm:paymentType": "credit",
      "xdm:currencyCode": "USD"
    },
    "xdm:priceTotal": 999.98
  },
  "xdm:shipping": {
    "xdm:shippingAmount": 20,
    "xdm:shippingMethod": "standard",
    "xdm:shippingDestination": "home"
  }
}
```

# Order Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:billing](#xdmbilling) | `object` | Optional | Order Details (this schema) |
| [xdm:order](#xdmorder) | Store and Web Order | Optional | Order Details (this schema) |
| [xdm:productListItems](#xdmproductlistitems) | Product list item | Optional | Order Details (this schema) |
| [xdm:shipping](#xdmshipping) | Shipping | Optional | Order Details (this schema) |
| [xdm:store](#xdmstore) | `object` | Optional | Order Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:billing
### Billing Details

Billing related information.

`xdm:billing`
* is optional
* type: `object`
* defined in this schema

### xdm:billing Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:address`|  | Optional |



#### xdm:address
##### Billing Address

Billing Address.

`xdm:address`
* is optional
* type: reference

##### xdm:address Type


* []() – `https://ns.adobe.com/xdm/common/address`










## xdm:order
### Order

Product Orders and realted information like payments.

`xdm:order`
* is optional
* type: Store and Web Order
* defined in this schema

### xdm:order Type


* [Store and Web Order](../../datatypes/store-web-order.schema.md) – `https://ns.adobe.com/xdm/datatypes/store-web-order`





## xdm:productListItems
### Product list items

A list of items representing a product selected by a customer with specific options and pricing that are for that usage context at a specific point of time and may differ from the product record.

`xdm:productListItems`
* is optional
* type: Product list item

* defined in this schema

### xdm:productListItems Type


Array type: Product list item

All items must be of the type:
* [Product list item](../../datatypes/productlistitem.schema.md) – `https://ns.adobe.com/xdm/content/productlistitem`








## xdm:shipping
### Shipping

Shipping related informnation for the order.

`xdm:shipping`
* is optional
* type: Shipping
* defined in this schema

### xdm:shipping Type


* [Shipping](../../datatypes/shipping.schema.md) – `https://ns.adobe.com/xdm/datatypes/shipping`





## xdm:store
### Store Details

Store related information.

`xdm:store`
* is optional
* type: `object`
* defined in this schema

### xdm:store Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:storeID`| string | Optional |



#### xdm:storeID
##### Store ID

Unique identifier for the store.

`xdm:storeID`
* is optional
* type: `string`

##### xdm:storeID Type


`string`










