
# Loan Details Schema

```
https://ns.adobe.com/xdm/classes/loan
```

Loan specifics, such as loan type, amount, rate, & term.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/loan.schema.json](classes/loan.schema.json) |
## Schema Hierarchy

* Loan Details `https://ns.adobe.com/xdm/classes/loan`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Currency](../datatypes/currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`
  * [Personal Contact Details](../fieldgroups/profile/profile-personal-details.schema.md) `https://ns.adobe.com/xdm/context/profile-personal-details`


## Loan Details Example
```json
{
  "xdm:ID": "K8819108483Z",
  "xdm:status": "current",
  "xdm:termInMonths": 120,
  "xdm:type": "mortgage",
  "xdm:renegotiable": true,
  "xdm:collateralRequired": false
}
```

# Loan Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:annualPercentageRate](#xdmannualpercentagerate) | `integer` | Optional | Loan Details (this schema) |
| [xdm:borrower](#xdmborrower) | Personal Contact Details | Optional | Loan Details (this schema) |
| [xdm:collateralRequired](#xdmcollateralrequired) | `boolean` | Optional | Loan Details (this schema) |
| [xdm:downpayment](#xdmdownpayment) | Currency | Optional | Loan Details (this schema) |
| [xdm:fees](#xdmfees) | Currency | Optional | Loan Details (this schema) |
| [xdm:gracePeriod](#xdmgraceperiod) | `integer` | Optional | Loan Details (this schema) |
| [xdm:interestRate](#xdminterestrate) | `integer` | Optional | Loan Details (this schema) |
| [xdm:loanAmount](#xdmloanamount) | Currency | Optional | Loan Details (this schema) |
| [xdm:loanID](#xdmloanid) | `string` | Optional | Loan Details (this schema) |
| [xdm:loanStatus](#xdmloanstatus) | `enum` | Optional | Loan Details (this schema) |
| [xdm:loanType](#xdmloantype) | `enum` | Optional | Loan Details (this schema) |
| [xdm:renegotiable](#xdmrenegotiable) | `boolean` | Optional | Loan Details (this schema) |
| [xdm:termInMonths](#xdmterminmonths) | `integer` | Optional | Loan Details (this schema) |
| [xdm:totalInterestPaid](#xdmtotalinterestpaid) | Currency | Optional | Loan Details (this schema) |
| [xdm:totalPrincipalPaid](#xdmtotalprincipalpaid) | Currency | Optional | Loan Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:annualPercentageRate
### Annual Percentage Rate

Records the annual percentage rate of the loan.

`xdm:annualPercentageRate`
* is optional
* type: `integer`
* defined in this schema

### xdm:annualPercentageRate Type


`integer`






## xdm:borrower
### Borrower

Records the details for the borrower.

`xdm:borrower`
* is optional
* type: Personal Contact Details
* defined in this schema

### xdm:borrower Type


* [Personal Contact Details](../fieldgroups/profile/profile-personal-details.schema.md) – `https://ns.adobe.com/xdm/context/profile-personal-details`





## xdm:collateralRequired
### Collateral Required

Indicates if collateral has been provided to secure the loan.

`xdm:collateralRequired`
* is optional
* type: `boolean`
* defined in this schema

### xdm:collateralRequired Type


`boolean`





## xdm:downpayment
### Downpayment

Captures the downpayment amount of loan.

`xdm:downpayment`
* is optional
* type: Currency
* defined in this schema

### xdm:downpayment Type


* [Currency](../datatypes/currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:fees
### Fees

Tracks any fees or commissions applied to the loan.

`xdm:fees`
* is optional
* type: Currency
* defined in this schema

### xdm:fees Type


* [Currency](../datatypes/currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:gracePeriod
### Grace Period

Tracks the number of days a borrow has to issue a loan payment before the loan is considered to be in default.

`xdm:gracePeriod`
* is optional
* type: `integer`
* defined in this schema

### xdm:gracePeriod Type


`integer`






## xdm:interestRate
### Interest Rate

Captures the interest rate of the loan.

`xdm:interestRate`
* is optional
* type: `integer`
* defined in this schema

### xdm:interestRate Type


`integer`






## xdm:loanAmount
### Loan Amount

Total amount of the loan.

`xdm:loanAmount`
* is optional
* type: Currency
* defined in this schema

### xdm:loanAmount Type


* [Currency](../datatypes/currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:loanID
### Loan ID

Identifier for the loan.

`xdm:loanID`
* is optional
* type: `string`
* defined in this schema

### xdm:loanID Type


`string`






## xdm:loanStatus
### Loan Status

Indicates the current status of the loan.

`xdm:loanStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmloanstatus-known-values).

### xdm:loanStatus Known Values
| Value | Description |
|-------|-------------|
| `notIssued` | Not Issued |
| `current` | Current |
| `inGracePeriod` | In Grace Period |
| `fullyPaid` | Fully Paid |
| `late` | Late |
| `default` | Default |
| `chargedOff` | Charged Off |
| `cancelled` | Cancelled |




## xdm:loanType
### Loan Type

Records the type of loan issued.

`xdm:loanType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmloantype-known-values).

### xdm:loanType Known Values
| Value | Description |
|-------|-------------|
| `personal` | Personal |
| `cashAdvance` | Cash Advance |
| `title` | Title |
| `homeEquity` | Home Equity |
| `smallBusiness` | Small Business |
| `debtConsolidation` | Debt Consolidation |
| `student` | Student |
| `automobile` | Automobile |
| `mortgage` | Mortgage |




## xdm:renegotiable
### Renegotiable

Identifies if the loan can be renegotiated while it is still active.

`xdm:renegotiable`
* is optional
* type: `boolean`
* defined in this schema

### xdm:renegotiable Type


`boolean`





## xdm:termInMonths
### Term in Months

Captures the length of the loan, in months.

`xdm:termInMonths`
* is optional
* type: `integer`
* defined in this schema

### xdm:termInMonths Type


`integer`






## xdm:totalInterestPaid
### Total Interest Paid

Total amount of interest paid on the loan to date.

`xdm:totalInterestPaid`
* is optional
* type: Currency
* defined in this schema

### xdm:totalInterestPaid Type


* [Currency](../datatypes/currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:totalPrincipalPaid
### Total Principal Paid

Total amount of principal paid on the loan to date.

`xdm:totalPrincipalPaid`
* is optional
* type: Currency
* defined in this schema

### xdm:totalPrincipalPaid Type


* [Currency](../datatypes/currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`




