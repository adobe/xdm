
# Credit Limit Increase Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-credit-limit-increase-details
```

Credit limit increase application details such as ID, type, approval, and status.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-credit-limit-increase-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-credit-limit-increase-details.schema.json) |

## Credit Limit Increase Details Example
```json
{
  "xdm:personalFinances": {
    "xdm:creditLimitIncrease": {
      "xdm:form-applications": {
        "xdm:formApplicationApproved": "",
        "xdm:formApplicationDeclined": "",
        "xdm:formApplicationID": "F102931032",
        "xdm:formApplicationRequestedAmount": "2000.00",
        "xdm:formApplicationStatus": "initiated",
        "xdm:formApplicationStatusUpdate": "",
        "xdm:formApplicationType": "credit limit increase",
        "xdm:formApplicationUnderReview": "",
        "xdm:formApplicationUsage": ""
      }
    }
  }
}
```

# Credit Limit Increase Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Credit Limit Increase Details (this schema) |
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
| `xdm:creditLimitIncrease`|  | Optional |



#### xdm:creditLimitIncrease
##### Credit Limit Increase

Extension of form application data type.

`xdm:creditLimitIncrease`
* is optional
* type: reference

##### xdm:creditLimitIncrease Type


* []() – `https://ns.adobe.com/xdm/datatypes/form-applications`









