
# Balance Transfers Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-balance-transfers
```

Used for financial account balance transfers between accounts.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-balance-transfers.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-balance-transfers.schema.json) |

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

Financial details including transactions, accounts, and applications.

`xdm:personalFinances`
* is optional
* type: `object`
* defined in this schema

### xdm:personalFinances Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:balanceTransfers`| object | Optional |



#### xdm:balanceTransfers

Captures the details of balance transfers between accounts.

`xdm:balanceTransfers`
* is optional
* type: `object`

##### xdm:balanceTransfers Type

Unknown type `object`.

```json
{
  "type": "object",
  "description": "Captures the details of balance transfers between accounts.",
  "properties": {
    "xdm:transaction": {
      "title": "Transaction",
      "$ref": "https://ns.adobe.com/xdm/datatypes/transaction",
      "description": "Extension of transaction data type."
    },
    "xdm:accountTo": {
      "title": "Account To",
      "$ref": "https://ns.adobe.com/xdm/datatypes/financial-account",
      "description": "Extension of financialAccount data type.  Details the account to which the balance is being transferred."
    },
    "xdm:accountFrom": {
      "title": "Account From",
      "$ref": "https://ns.adobe.com/xdm/datatypes/financial-account",
      "description": "Extension of financialAccount data type.  Details the account fr which the balance is being transferred."
    }
  },
  "simpletype": "`object`"
}
```









