
# ExperienceEvent commerce details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-commerce
```

This mixin is used to capture information regarding commerce activities related to an ExperienceEvent such as standard cart operations (order, checkout, abandon) and product details (SKU, product name, quantity).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-commerce.schema.json](context/experienceevent-commerce.schema.json) |
## Schema Hierarchy

* ExperienceEvent commerce details `https://ns.adobe.com/xdm/context/experienceevent-commerce`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Commerce](commerce.schema.md) `https://ns.adobe.com/xdm/context/commerce`


## ExperienceEvent commerce details Example
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

# ExperienceEvent commerce details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:commerce](#xdmcommerce) | Commerce | Optional | ExperienceEvent commerce details (this schema) |
| [xdm:productListItems](#xdmproductlistitems) | Product list item | Optional | ExperienceEvent commerce details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:commerce
### Commerce

Commerce specific data related to this event.

`xdm:commerce`
* is optional
* type: Commerce
* defined in this schema

### xdm:commerce Type


* [Commerce](commerce.schema.md) – `https://ns.adobe.com/xdm/context/commerce`





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
* [Product list item](../content/productlistitem.schema.md) – `https://ns.adobe.com/xdm/content/productlistitem`







