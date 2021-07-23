
# Deposit Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-deposit-details
```

Deposit details such as ID, type, and amount.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-deposit-details.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-deposit-details.schema.json) |

## Deposit Details Example
```json
{
  "xdm:personalFinances": {
    "xdm:deposits": {
      "xdm:transaction": {
        "xdm:balanceTransfer": "",
        "xdm:formApplicationFee": "",
        "xdm:toolUsageTransaction": "",
        "xdm:transactionAmount": {
          "xdm:amount": 61.35,
          "xdm:currencyCode": "USD",
          "xdm:conversionDate": "2018-01-12T15:52:25+00:00"
        },
        "xdm:transactionID": "T10291832",
        "xdm:transactionDate": "2020-04-11T05:05:05Z",
        "xdm:transactionType": "transfer"
      }
    },
    "xdm:mobileDeposit": true
  }
}
```

# Deposit Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Deposit Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:personalFinances

Financial details including transactions, accounts, and applications.

`xdm:personalFinances`
* is optional
* type: `object`
* defined in this schema

### xdm:personalFinances Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:deposits`| object | Optional |



#### xdm:deposits

undefined

`xdm:deposits`
* is optional
* type: `object`

##### xdm:deposits Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:transaction": {
      "title": "Deposit Transaction",
      "$ref": "https://ns.adobe.com/xdm/datatypes/transaction",
      "description": "Extension of transaction data type."
    },
    "xdm:account": {
      "title": "Deposit Account",
      "$ref": "https://ns.adobe.com/xdm/datatypes/financial-account",
      "description": "Extension of financialAccount data type. Details of the account and transactions associated with the deposit."
    },
    "xdm:mobileDeposit": {
      "title": "Mobile Deposit",
      "type": "boolean",
      "description": "Indicator for whether the deposit was done through mobile or not."
    }
  },
  "simpletype": "`object`"
}
```









