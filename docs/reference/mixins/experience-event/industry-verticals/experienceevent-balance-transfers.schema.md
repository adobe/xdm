
# Balance Transfers Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-balance-transfers
```

Used for financial account balance transfers between accounts.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-balance-transfers.schema.json](mixins/experience-event/industry-verticals/experienceevent-balance-transfers.schema.json) |

## Balance Transfers Example
```json
{
  "xdm:personalFinances": {
    "xdm:balanceTransfer": {
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
    "xdm:balanceTransferAccount": {
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

# Balance Transfers Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Balance Transfers (this schema) |
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
| `xdm:balanceTransfer`|  | Optional |
| `xdm:balanceTransferAccount`|  | Optional |



#### xdm:balanceTransfer
##### Balance Transfer

Extension of transaction data type.

`xdm:balanceTransfer`
* is optional
* type: reference

##### xdm:balanceTransfer Type


* []() – `https://ns.adobe.com/xdm/datatypes/transaction`







#### xdm:balanceTransferAccount
##### Balance Transfer Account

Extension of financialAccount data type.

`xdm:balanceTransferAccount`
* is optional
* type: reference

##### xdm:balanceTransferAccount Type


* []() – `https://ns.adobe.com/xdm/datatypes/financial-account`









