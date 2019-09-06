
# Commerce Schema

```
https://ns.adobe.com/xdm/context/commerce
```

The entities related to buying and selling activity.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/commerce.schema.json](context/commerce.schema.json) |
## Schema Hierarchy

* Commerce `https://ns.adobe.com/xdm/context/commerce`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Order](../data/order.schema.md) `https://ns.adobe.com/xdm/data/order`
  * [Measure](../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Commerce Example
```json
{
  "xdm:order": {
    "xdm:purchaseID": "a8g784hjq1mnp3",
    "xdm:purchaseOrderNumber": "123456",
    "xdm:payments": [
      {
        "xdm:transactionID": "transactid-a111",
        "xdm:paymentAmount": 899.99,
        "xdm:paymentType": "credit_card",
        "xdm:currencyCode": "USD"
      },
      {
        "xdm:transactionID": "transactid-a222",
        "xdm:paymentAmount": 99.99,
        "xdm:paymentType": "gift_card",
        "xdm:currencyCode": "USD"
      }
    ],
    "xdm:currencyCode": "USD",
    "xdm:priceTotal": 999.98
  },
  "xdm:purchases": {
    "xdm:value": 1
  }
}
```

# Commerce Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:cartAbandons](#xdmcartabandons) | Measure | Optional | Commerce (this schema) |
| [xdm:checkouts](#xdmcheckouts) | Measure | Optional | Commerce (this schema) |
| [xdm:inStrorePurchase](#xdminstrorepurchase) | Measure | Optional | Commerce (this schema) |
| [xdm:order](#xdmorder) | Order | Optional | Commerce (this schema) |
| [xdm:productListAdds](#xdmproductlistadds) | Measure | Optional | Commerce (this schema) |
| [xdm:productListOpens](#xdmproductlistopens) | Measure | Optional | Commerce (this schema) |
| [xdm:productListRemovals](#xdmproductlistremovals) | Measure | Optional | Commerce (this schema) |
| [xdm:productListReopens](#xdmproductlistreopens) | Measure | Optional | Commerce (this schema) |
| [xdm:productListViews](#xdmproductlistviews) | Measure | Optional | Commerce (this schema) |
| [xdm:productViews](#xdmproductviews) | Measure | Optional | Commerce (this schema) |
| [xdm:purchases](#xdmpurchases) | Measure | Optional | Commerce (this schema) |
| [xdm:saveForLaters](#xdmsaveforlaters) | Measure | Optional | Commerce (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:cartAbandons

A product list has been identified as no longer accessible (e.g purchasable) by the user.

`xdm:cartAbandons`
* is optional
* type: Measure
* defined in this schema

### xdm:cartAbandons Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:checkouts

An action during a checkout process of a product list, there can be more than one checkout event if there are multiple steps in a checkout process. If there are multiple steps the event time information and referenced page or experience is used to identify the step individual events represent in order.

`xdm:checkouts`
* is optional
* type: Measure
* defined in this schema

### xdm:checkouts Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:inStrorePurchase

inStore Purchase is saved for Analytics use.

`xdm:inStrorePurchase`
* is optional
* type: Measure
* defined in this schema

### xdm:inStrorePurchase Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:order
### Order

The placed order for one or more products.

`xdm:order`
* is optional
* type: Order
* defined in this schema

### xdm:order Type


* [Order](../data/order.schema.md) – `https://ns.adobe.com/xdm/data/order`





## xdm:productListAdds

Addition of a product to the product list. Example a product is added to a shopping cart.

`xdm:productListAdds`
* is optional
* type: Measure
* defined in this schema

### xdm:productListAdds Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:productListOpens

Initializations of a new product list. Example a shopping cart is created.

`xdm:productListOpens`
* is optional
* type: Measure
* defined in this schema

### xdm:productListOpens Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:productListRemovals

Removal(s) of a product entry from a product list. Example a product is removed from a shopping cart.

`xdm:productListRemovals`
* is optional
* type: Measure
* defined in this schema

### xdm:productListRemovals Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:productListReopens

A product list that was no longer accessible(abandoned) has been re-activated by the user. Example via a re-marketing activity.

`xdm:productListReopens`
* is optional
* type: Measure
* defined in this schema

### xdm:productListReopens Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:productListViews

View(s) of a product-list has occurred.

`xdm:productListViews`
* is optional
* type: Measure
* defined in this schema

### xdm:productListViews Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:productViews

View(s) of a product have occurred.

`xdm:productViews`
* is optional
* type: Measure
* defined in this schema

### xdm:productViews Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:purchases

An order has been accepted. Purchase is the only required action in a commerce conversion. Purchase must have a product list referenced.

`xdm:purchases`
* is optional
* type: Measure
* defined in this schema

### xdm:purchases Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:saveForLaters

Product list is saved for future use. Example a product wish list.

`xdm:saveForLaters`
* is optional
* type: Measure
* defined in this schema

### xdm:saveForLaters Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




