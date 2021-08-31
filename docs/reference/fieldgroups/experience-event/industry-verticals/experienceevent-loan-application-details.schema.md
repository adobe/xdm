
# Loan Application Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-loan-application-details
```

Loan application details such as ID, type, approval, and status.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-loan-application-details.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-loan-application-details.schema.json) |

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

Financial details including transactions, accounts, and applications.

`xdm:personalFinances`
* is optional
* type: `object`
* defined in this schema

### xdm:personalFinances Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:loanApplicationDetails`| object | Optional |



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
      "description": "Extension of form application data type.",
      "meta:titleId": "experienceevent-loan-application-details##xdm:loan##title##15091",
      "meta:descriptionId": "experienceevent-loan-application-details##xdm:loan##description##24641"
    }
  },
  "xdm:annualPercentageRate": {
    "title": "Annual Percentage Rate",
    "type": "number",
    "description": "Records the annual percentage rate of the loan.",
    "meta:titleId": "experienceevent-loan-application-details##xdm:annualPercentageRate##title##68141",
    "meta:descriptionId": "experienceevent-loan-application-details##xdm:annualPercentageRate##description##7181"
  },
  "xdm:downpayment": {
    "title": "Downpayment",
    "$ref": "https://ns.adobe.com/xdm/datatypes/currency",
    "description": "Captures the downpayment amount of loan.",
    "meta:titleId": "experienceevent-loan-application-details##xdm:downpayment##title##33291",
    "meta:descriptionId": "experienceevent-loan-application-details##xdm:downpayment##description##3601"
  },
  "xdm:startDate": {
    "title": "Start Date",
    "type": "string",
    "format": "date-time",
    "description": "Records the anticipated start date of the loan.",
    "meta:titleId": "experienceevent-loan-application-details##xdm:startDate##title##94651",
    "meta:descriptionId": "experienceevent-loan-application-details##xdm:startDate##description##98721"
  },
  "xdm:endDate": {
    "title": "End Date",
    "type": "string",
    "format": "date-time",
    "description": "Records the anticipated end date of the loan.",
    "meta:titleId": "experienceevent-loan-application-details##xdm:endDate##title##76061",
    "meta:descriptionId": "experienceevent-loan-application-details##xdm:endDate##description##28871"
  },
  "xdm:interestRate": {
    "title": "Interest Rate",
    "type": "number",
    "description": "Records the interest rate of the loan.",
    "meta:titleId": "experienceevent-loan-application-details##xdm:interestRate##title##53571",
    "meta:descriptionId": "experienceevent-loan-application-details##xdm:interestRate##description##93651"
  },
  "xdm:interestType": {
    "title": "Interest Type",
    "type": "string",
    "description": "Records the type interest rate of the loan, i.e. fixed or variable.",
    "meta:titleId": "experienceevent-loan-application-details##xdm:interestType##title##8441",
    "meta:descriptionId": "experienceevent-loan-application-details##xdm:interestType##description##23621"
  },
  "xdm:term": {
    "title": "Term",
    "type": "integer",
    "description": "Records the duration of the loan, in months.",
    "meta:titleId": "experienceevent-loan-application-details##xdm:term##title##88841",
    "meta:descriptionId": "experienceevent-loan-application-details##xdm:term##description##59901"
  },
  "simpletype": "`object`"
}
```









