
# Bill Pay Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-bill-pay-steps
```

Bill pay steps such as start, save, failure, and complete.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-bill-pay-steps.schema.json](mixins/experience-event/industry-verticals/experienceevent-bill-pay-steps.schema.json) |

## Bill Pay Steps Example
```json
{
  "xdm:personalFinances": {
    "xdm:billPay": {
      "xdm:tool-usage": {
        "xdm:toolUsageCancelled": 1,
        "xdm:toolUsageComplete": 1,
        "xdm:toolUsageFailure": 1,
        "xdm:toolUsageID": "T421",
        "xdm:toolUsageName": "calculator",
        "xdm:toolUsageSaved": 1,
        "xdm:toolUsageStart": 1,
        "xdm:toolUsageStep": 1,
        "xdm:toolUsageStepName": "enter parameters",
        "xdm:toolUsageSubmitted": 1,
        "xdm:toolUsageType": "generic"
      }
    },
    "xdm:billPayAccount": {
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

# Bill Pay Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Bill Pay Steps (this schema) |
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
| `xdm:billPay`|  | Optional |
| `xdm:billPayAccount`|  | Optional |



#### xdm:billPay
##### Bill Pay Steps

Extension of toolUsage data type.

`xdm:billPay`
* is optional
* type: reference

##### xdm:billPay Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:billPayAccount
##### Bill Pay Account

Extension of financialAccount data type.

`xdm:billPayAccount`
* is optional
* type: reference

##### xdm:billPayAccount Type


* []() – `https://ns.adobe.com/xdm/datatypes/financial-account`









