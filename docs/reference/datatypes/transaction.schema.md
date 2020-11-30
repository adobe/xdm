
# Transaction Schema

```
https://ns.adobe.com/xdm/datatypes/transaction
```

Transactions capture when non-order transactions occur, such as balance transfers or applied payments.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/transaction.schema.json](datatypes/transaction.schema.json) |
## Schema Hierarchy

* Transaction `https://ns.adobe.com/xdm/datatypes/transaction`
  * [Currency](currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`


## Transaction Example
```json
{}
```

# Transaction Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:transactionAmount](#xdmtransactionamount) | Currency | Optional | Transaction (this schema) |
| [xdm:transactionDate](#xdmtransactiondate) | `string` | Optional | Transaction (this schema) |
| [xdm:transactionID](#xdmtransactionid) | `string` | Optional | Transaction (this schema) |
| [xdm:transactionType](#xdmtransactiontype) | `string` | Optional | Transaction (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:transactionAmount
### Transaction Amount

Captures the amount of the transaction.

`xdm:transactionAmount`
* is optional
* type: Currency
* defined in this schema

### xdm:transactionAmount Type


* [Currency](currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:transactionDate
### Transaction Date

Records the date/time of the transaction.

`xdm:transactionDate`
* is optional
* type: `string`
* defined in this schema

### xdm:transactionDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:transactionID
### Transaction ID

Identifier for the transaction.

`xdm:transactionID`
* is optional
* type: `string`
* defined in this schema

### xdm:transactionID Type


`string`






## xdm:transactionType
### Transaction Type

Records the type of transaction utilized by the visitor.

`xdm:transactionType`
* is optional
* type: `string`
* defined in this schema

### xdm:transactionType Type


`string`





