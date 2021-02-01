
# Deposit Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-deposit-details
```

Deposit details such as ID, type, and amount.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-deposit-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-deposit-details.schema.json) |

## Deposit Details Example
```json
{
  "xdm:personalFinances": {
    "xdm:deposit": {
      "xdm:transaction": {
        "xdm:balanceTransfer": "",
        "xdm:formApplicationFee": "",
        "xdm:toolUsageTransaction": "",
        "xdm:transactionAmount": "67.85",
        "xdm:transactionID": "T10291832",
        "xdm:transactionDate": "2021-01-07",
        "xdm:transactionType": "transfer"
      }
    },
    "xdm:depositAccount": {
      "xdm:financial-account": {
        "xdm:balanceTransferAccount": "",
        "xdm:currentAccountBalance": "678.93",
        "xdm:financialAccountID": "1019283724",
        "xdm:financialAccountName": "Personal Checking",
        "xdm:financialAccountOwner": "TBD",
        "xdm:financialAccountType": "checking",
        "xdm:openedDate": "2021-02-17"
      }
    }
  }
}
```

# Deposit Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Deposit Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:personalFinances


`xdm:personalFinances`
* is optional
* type: `object`
* defined in this schema

### xdm:personalFinances Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:deposit`|  | Optional |
| `xdm:depositAccount`|  | Optional |



#### xdm:deposit
##### Deposit

Extension of transaction data type.

`xdm:deposit`
* is optional
* type: reference

##### xdm:deposit Type


* []() – `https://ns.adobe.com/xdm/datatypes/transaction`







#### xdm:depositAccount
##### Deposit Account

Extension of financialAccount data type.

`xdm:depositAccount`
* is optional
* type: reference

##### xdm:depositAccount Type


* []() – `https://ns.adobe.com/xdm/datatypes/financial-account`









