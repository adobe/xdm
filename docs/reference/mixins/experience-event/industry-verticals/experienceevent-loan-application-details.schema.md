
# Loan Application Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-loan-application-details
```

Loan application details such as ID, type, approval, and status.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-loan-application-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-loan-application-details.schema.json) |

## Loan Application Details Example
```json
{
  "xdm:personalFinances": {
    "xdm:loanApplicationDetails": {
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
}
```

# Loan Application Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Loan Application Details (this schema) |
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
| `xdm:annualPercentageRate`| number | Optional |
| `xdm:downpayment`|  | Optional |
| `xdm:endDate`| string | Optional |
| `xdm:interestRate`| number | Optional |
| `xdm:interestType`| string | Optional |
| `xdm:loanApplicationDetails`| object | Optional |
| `xdm:startDate`| string | Optional |
| `xdm:term`| integer | Optional |



#### xdm:annualPercentageRate
##### Annual Percentage Rate

Records the annual percentage rate of the loan.

`xdm:annualPercentageRate`
* is optional
* type: `number`

##### xdm:annualPercentageRate Type


`number`








#### xdm:downpayment
##### Downpayment

Captures the downpayment amount of loan.

`xdm:downpayment`
* is optional
* type: reference

##### xdm:downpayment Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`







#### xdm:endDate
##### End Date

Records the anticipated end date of the loan.

`xdm:endDate`
* is optional
* type: `string`

##### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:interestRate
##### Interest Rate

Records the interest rate of the loan.

`xdm:interestRate`
* is optional
* type: `number`

##### xdm:interestRate Type


`number`








#### xdm:interestType
##### Interest Type

Records the type interest rate of the loan, i.e. fixed or variable.

`xdm:interestType`
* is optional
* type: `string`

##### xdm:interestType Type


`string`








#### xdm:loanApplicationDetails

undefined

`xdm:loanApplicationDetails`
* is optional
* type: `object`

##### xdm:loanApplicationDetails Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:loan": {
      "title": "Loan",
      "$ref": "https://ns.adobe.com/xdm/datatypes/form-applications",
      "description": "Extension of form application data type."
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:startDate
##### Start Date

Records the anticipated start date of the loan.

`xdm:startDate`
* is optional
* type: `string`

##### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:term
##### Term

Records the duration of the loan, in months.

`xdm:term`
* is optional
* type: `integer`

##### xdm:term Type


`integer`










