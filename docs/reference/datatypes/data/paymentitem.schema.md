
# Payment Item Schema

```
https://ns.adobe.com/xdm/data/paymentitem
```

A payment associated with an order that defines the type of payment, the amount and the associated currency.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/data/paymentitem.schema.json](datatypes/data/paymentitem.schema.json) |

## Payment Item Example
```json
{
  "xdm:transactionID": "transactid-a12345",
  "xdm:paymentAmount": 333.99,
  "xdm:paymentType": "credit_card",
  "xdm:currencyCode": "USD"
}
```

# Payment Item Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional |  | Payment Item (this schema) |
| [xdm:paymentAmount](#xdmpaymentamount) | `number` | Optional |  | Payment Item (this schema) |
| [xdm:paymentType](#xdmpaymenttype) | `string` | Optional | `"other"` | Payment Item (this schema) |
| [xdm:transactionID](#xdmtransactionid) | `string` | Optional |  | Payment Item (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:currencyCode
### Currency Code

The ISO 4217 currency code used for this payment item.

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



## xdm:paymentAmount
### Payment Amount

The value of the payment.

`xdm:paymentAmount`
* is optional
* type: `number`
* defined in this schema

### xdm:paymentAmount Type


`number`






## xdm:paymentType
### Payment Type

The method of payment for this order. Enumerated, custom values allowed.

`xdm:paymentType`
* is optional
* type: `string`
* default: `"other"`
* defined in this schema

### xdm:paymentType Type


`string`



### xdm:paymentType Known Values
| Value | Description |
|-------|-------------|
| `cash` | Cash |
| `credit_card` | Credit Card |
| `debit_card` | Debit Card |
| `gift_card` | Gift Card |
| `check` | Check |
| `paypal` | PayPal |
| `wire_transfer` | Wire Transfer |
| `credit_card_reference` | Credit Card Reference Transaction |
| `other` | Other |




## xdm:transactionID
### Transaction ID

The unique transaction identifier for this payment item.

`xdm:transactionID`
* is optional
* type: `string`
* defined in this schema

### xdm:transactionID Type


`string`





