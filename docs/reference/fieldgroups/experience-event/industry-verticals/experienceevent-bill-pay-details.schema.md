
# Bill Pay Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-bill-pay-details
```

Bill pay details such as transaction information, service account ID, and balance.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-bill-pay-details.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-bill-pay-details.schema.json) |

## Bill Pay Details Example
```json
{
  "xdm:personalFinances": {
    "xdm:billPayDetails": {
      "xdm:scheduledTransactionDate": "2020-04-11T05:05:05Z"
    }
  }
}
```

# Bill Pay Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Bill Pay Details (this schema) |
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
| `xdm:billPayDetails`| object | Optional |



#### xdm:billPayDetails

undefined

`xdm:billPayDetails`
* is optional
* type: `object`

##### xdm:billPayDetails Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:steps": {
      "title": "Steps",
      "$ref": "https://ns.adobe.com/xdm/datatypes/tool-usage",
      "description": "Extension of toolUsage data type.",
      "meta:status": "deprecated",
      "meta:titleId": "experienceevent-bill-pay-details##xdm:steps##title##67611",
      "meta:descriptionId": "experienceevent-bill-pay-details##xdm:steps##description##96461"
    },
    "xdm:transaction": {
      "title": "Transaction",
      "$ref": "https://ns.adobe.com/xdm/datatypes/transaction",
      "description": "Extension of transaction data type.",
      "meta:titleId": "experienceevent-bill-pay-details##xdm:transaction##title##90541",
      "meta:descriptionId": "experienceevent-bill-pay-details##xdm:transaction##description##5461"
    },
    "xdm:financialAccount": {
      "title": "Financial Account",
      "$ref": "https://ns.adobe.com/xdm/datatypes/financial-account",
      "description": "Extension of financialAccount data type.  Details the account to which the balance is being transferred.",
      "meta:titleId": "experienceevent-bill-pay-details##xdm:financialAccount##title##63131",
      "meta:descriptionId": "experienceevent-bill-pay-details##xdm:financialAccount##description##96381"
    },
    "xdm:scheduledTransactionDate": {
      "title": "Scheduled Transaction Date",
      "type": "string",
      "format": "date-time",
      "description": "Records the scheduled date/time of the transaction.",
      "meta:titleId": "experienceevent-bill-pay-details##xdm:scheduledTransactionDate##title##11581",
      "meta:descriptionId": "experienceevent-bill-pay-details##xdm:scheduledTransactionDate##description##65331"
    },
    "xdm:serviceProvider": {
      "type": "object",
      "description": "Tracks all details related to a biller.",
      "properties": {
        "xdm:name": {
          "title": "Service Provider Name",
          "type": "string",
          "description": "The name/nickname for the service provider.",
          "meta:titleId": "experienceevent-bill-pay-details##xdm:name##title##7831",
          "meta:descriptionId": "experienceevent-bill-pay-details##xdm:name##description##82791"
        },
        "xdm:userAccountID": {
          "title": "User Account ID",
          "type": "string",
          "description": "The user account ID for the service provider.",
          "meta:titleId": "experienceevent-bill-pay-details##xdm:userAccountID##title##6371",
          "meta:descriptionId": "experienceevent-bill-pay-details##xdm:userAccountID##description##75451"
        }
      },
      "meta:descriptionId": "experienceevent-bill-pay-details##xdm:serviceProvider##description##37971"
    }
  },
  "simpletype": "`object`"
}
```









