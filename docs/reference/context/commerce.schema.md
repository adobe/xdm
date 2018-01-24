
# Commerce Schema

```
https://ns.adobe.com/xdm/context/commerce
```

The entites related to buying and selling activity.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/commerce.schema.json](context/commerce.schema.json) |

## Schema Hierarchy

* Commerce `https://ns.adobe.com/xdm/context/commerce`
  * [Order](../data/order.schema.md) `https://ns.adobe.com/xdm/data/order`

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
        "xdm:transactionId": "transactid-a222",
        "xdm:paymentAmount": 99.99,
        "xdm:paymentType": "gift_card",
        "xdm:currencyCode": "USD"
      }
    ],
    "xdm:currencyCode": "USD",
    "xdm:priceTotal": 999.98
  }
}
```

# Commerce Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:order](#xdmorder) | Order | Optional | Commerce (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:order
### Order

The placed order for one or more products.

`xdm:order`
* is optional
* type: Order
* defined in this schema

### xdm:order Type


* [Order](../data/order.schema.md) – `https://ns.adobe.com/xdm/data/order`




