
# Store and Web Order Schema

```
https://ns.adobe.com/xdm/datatypes/store-web-order
```

The order placed via a store or web portal.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/store-web-order.schema.json](datatypes/store-web-order.schema.json) |

## Store and Web Order Example
```json
{
  "xdm:orderID": "a8g784hjq1mnp3",
  "xdm:orderDate": "2017-09-26T15:52:25+00:00",
  "xdm:payment": {
    "xdm:transactionID": "transactid-a111",
    "xdm:paymentAmount": 899.99,
    "xdm:paymentType": "credit",
    "xdm:currencyCode": "USD"
  },
  "xdm:priceTotal": 999.98
}
```

# Store and Web Order Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:orderDate](#xdmorderdate) | `string` | Optional | Store and Web Order (this schema) |
| [xdm:orderID](#xdmorderid) | `string` | Optional | Store and Web Order (this schema) |
| [xdm:payment](#xdmpayment) | `object` | Optional | Store and Web Order (this schema) |
| [xdm:priceTotal](#xdmpricetotal) | `number` | Optional | Store and Web Order (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:orderDate
### Order Date

The date and time when the order was placed.

`xdm:orderDate`
* is optional
* type: `string`
* defined in this schema

### xdm:orderDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:orderID
### Order ID

Unique identifier assigned by the seller for this order. There is no guarantee that the ID is unique.

`xdm:orderID`
* is optional
* type: `string`
* defined in this schema

### xdm:orderID Type


`string`






## xdm:payment
### Payment Details

Payment related information.

`xdm:payment`
* is optional
* type: `object`
* defined in this schema

### xdm:payment Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:currencyCode`| string | Optional |
| `xdm:paymentAmount`| number | Optional |
| `xdm:paymentType`| string | Optional |
| `xdm:transactionID`| string | Optional |



#### xdm:currencyCode
##### Currency

The ISO 4217 currency code used for the order totals.

`xdm:currencyCode`
* is optional
* type: `string`

##### xdm:currencyCode Type


`string`


All instances must conform to this regular expression 
```regex
^[A-Z]{3}$
```

* test example: [USD](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=USD)
* test example: [EUR](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=EUR)




##### xdm:currencyCode Examples

```json
USD
```

```json
EUR
```





#### xdm:paymentAmount
##### Payment Amount

Unique identifier assigned by the payment system.

`xdm:paymentAmount`
* is optional
* type: `number`

##### xdm:paymentAmount Type


`number`








#### xdm:paymentType
##### Payment Type

Type of payment used.

`xdm:paymentType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmpayment-known-values).

##### xdm:paymentType Known Values
| Value | Description |
|-------|-------------|
| `credit` | Credit |
| `dedit` | Dedit |
| `gift` | Gift |
| `cash` | Cash |
| `debit` |  |






#### xdm:transactionID
##### Transaction ID

Unique identifier assigned by the payment system.

`xdm:transactionID`
* is optional
* type: `string`

##### xdm:transactionID Type


`string`











## xdm:priceTotal
### Price Total

The total price of this order after all discounts and taxes have been applied.

`xdm:priceTotal`
* is optional
* type: `number`
* defined in this schema

### xdm:priceTotal Type


`number`





