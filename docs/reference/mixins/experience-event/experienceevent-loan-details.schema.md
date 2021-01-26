
# Loan Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-loan-details
```

Loan application details such as ID, type, approval, and status.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-loan-details.schema.json](mixins/experience-event/experienceevent-loan-details.schema.json) |

## Loan Details Example
```json
{
  "xdm:personalFinances": {
    "xdm:loan": {
      "xdm:form-applications": {
        "xdm:formApplicationApproved": "",
        "xdm:formApplicationDeclined": "",
        "xdm:formApplicationID": "F102931032",
        "xdm:formApplicationRequestedAmount": "2000.00",
        "xdm:formApplicationStatus": "initiated",
        "xdm:formApplicationStatusUpdate": "",
        "xdm:formApplicationType": "loan",
        "xdm:formApplicationUnderReview": "",
        "xdm:formApplicationUsage": ""
      }
    }
  }
}
```

# Loan Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Loan Details (this schema) |
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
| `xdm:loan`|  | Optional |



#### xdm:loan
##### Loan

Extension of form application data type.

`xdm:loan`
* is optional
* type: reference

##### xdm:loan Type


* []() – `https://ns.adobe.com/xdm/datatypes/form-applications`









