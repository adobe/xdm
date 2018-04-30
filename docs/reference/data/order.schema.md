
# Order Schema

```
https://ns.adobe.com/xdm/data/order
```

The order placed for a product list.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/order.schema.json](data/order.schema.json) |

## Order Example
```json
{
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
```

# Order Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional | Order (this schema) |
| [xdm:payments](#xdmpayments) | Payment Item | Optional | Order (this schema) |
| [xdm:priceTotal](#xdmpricetotal) | `number` | Optional | Order (this schema) |
| [xdm:purchaseID](#xdmpurchaseid) | `string` | Optional | Order (this schema) |
| [xdm:purchaseOrderNumber](#xdmpurchaseordernumber) | `string` | Optional | Order (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:currencyCode
### Currency

The ISO 4217 currency code used for the order totals.

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



## xdm:payments
### Payment List

The list of payments for this order.

`xdm:payments`
* is optional
* type: Payment Item

* defined in this schema

### xdm:payments Type


Array type: Payment Item

All items must be of the type:
* [Payment Item](paymentitem.schema.md) – `https://ns.adobe.com/xdm/data/paymentitem`








## xdm:priceTotal
### Price Total

The total price of this order after all discounts and taxes have been applied.

`xdm:priceTotal`
* is optional
* type: `number`
* defined in this schema

### xdm:priceTotal Type


`number`






## xdm:purchaseID
### Purchase ID

Unique identifier assigned by the seller for this purchase or contract. There is no guarantee that the ID is unique.

`xdm:purchaseID`
* is optional
* type: `string`
* defined in this schema

### xdm:purchaseID Type


`string`






## xdm:purchaseOrderNumber
### Purchase Order Number

Unique identifier assigned by the purchaser for this purchase or contract.

`xdm:purchaseOrderNumber`
* is optional
* type: `string`
* defined in this schema

### xdm:purchaseOrderNumber Type


`string`





