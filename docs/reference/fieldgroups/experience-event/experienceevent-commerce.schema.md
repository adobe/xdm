
# Commerce Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-commerce
```

Commerce data such as product information (SKU, name, quantity), and standard cart operations (order, checkout, abandon).

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-commerce.schema.json](fieldgroups/experience-event/experienceevent-commerce.schema.json) |
## Schema Hierarchy

* Commerce Details `https://ns.adobe.com/xdm/context/experienceevent-commerce`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Commerce](../../datatypes/marketing/commerce.schema.md) `https://ns.adobe.com/xdm/context/commerce`


## Commerce Details Example
```json
{
  "xdm:productListItems": [
    {
      "xdm:SKU": "1002352692",
      "xdm:lineItemId": "12345678",
      "xdm:name": "24-Watt 8-Light Chrome Integrated LED Bath Light",
      "xdm:currencyCode": "USD",
      "xdm:quantity": 1,
      "xdm:priceTotal": 159
    }
  ],
  "xdm:commerce": {
    "xdm:order": {
      "xdm:purchaseID": "a8g784hjq1mnp3",
      "xdm:purchaseOrderNumber": "123456",
      "xdm:payments": [
        {
          "xdm:transactionID": "transactid-a111",
          "xdm:paymentAmount": 59,
          "xdm:paymentType": "credit_card",
          "xdm:currencyCode": "USD"
        },
        {
          "xdm:transactionId": "transactid-a222",
          "xdm:paymentAmount": 100,
          "xdm:paymentType": "gift_card",
          "xdm:currencyCode": "USD"
        }
      ],
      "xdm:currencyCode": "USD",
      "xdm:priceTotal": 159
    },
    "xdm:purchases": {
      "xdm:value": 1
    }
  }
}
```

# Commerce Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:commerce](#xdmcommerce) | Commerce | Optional | Commerce Details (this schema) |
| [xdm:productListItems](#xdmproductlistitems) | Product list item | Optional | Commerce Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:commerce
### Commerce

Product returns, warranty registration, and shopping cart/order process.

`xdm:commerce`
* is optional
* type: Commerce
* defined in this schema

### xdm:commerce Type


* [Commerce](../../datatypes/marketing/commerce.schema.md) – `https://ns.adobe.com/xdm/context/commerce`





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







