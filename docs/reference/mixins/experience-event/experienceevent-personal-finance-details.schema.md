
# Personal Finance Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-personal-finance-details
```

Personal finance details such as financial account details, credit score, and tax bracket.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-personal-finance-details.schema.json](mixins/experience-event/experienceevent-personal-finance-details.schema.json) |

## Personal Finance Details Example
```json
{
  "xdm:personalFinances": {
    "xdm:accountCardsTotal": 3,
    "xdm:creditScore": 760,
    "xdm:employmentStatus": "full time",
    "xdm:filingJointly": true,
    "xdm:filingSeparately": false,
    "xdm:hasAssignedBeneficiary": true,
    "xdm:isHeadOfHousehold": true,
    "xdm:singleFiler": false,
    "xdm:taxBracket": "TBD",
    "xdm:assignedBeneficiary": [
      {
        "xdm:person": {
          "xdm:name": {
            "xdm:firstName": "Jane",
            "xdm:middleName": "F",
            "xdm:lastName": "Doe",
            "xdm:fullName": "Jane F. Doe"
          },
          "xdm:birthDayAndMonth": "01-03",
          "xdm:gender": "female"
        }
      }
    ]
  }
}
```

# Personal Finance Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Personal Finance Details (this schema) |
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
| `xdm:accountCardsTotal`| integer | Optional |
| `xdm:assignedBeneficiary`| array | Optional |
| `xdm:creditScore`| integer | Optional |
| `xdm:employmentStatus`| string | Optional |
| `xdm:filingJointly`| boolean | Optional |
| `xdm:filingSeparately`| boolean | Optional |
| `xdm:financialAccount`| array | Optional |
| `xdm:hasAssignedBeneficiary`| boolean | Optional |
| `xdm:householdIncome`|  | Optional |
| `xdm:isHeadOfHousehold`| boolean | Optional |
| `xdm:singleFiler`| boolean | Optional |
| `xdm:taxBracket`| string | Optional |



#### xdm:accountCardsTotal
##### Account Cards Total

Total number of account (financial) cards assigned to a user.

`xdm:accountCardsTotal`
* is optional
* type: `integer`

##### xdm:accountCardsTotal Type


`integer`








#### xdm:assignedBeneficiary
##### Assigned Beneficiaries

Captures the beneficiary(s) assigned to the account.

`xdm:assignedBeneficiary`
* is optional
* type: reference


##### xdm:assignedBeneficiary Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/context/profile-person-details`










#### xdm:creditScore
##### Credit Score

Refers to a number between 300-850 that depicts a consumer's creditworthiness. 

`xdm:creditScore`
* is optional
* type: `integer`

##### xdm:creditScore Type


`integer`








#### xdm:employmentStatus
##### Employment Status

Tracks the employment status of the user.

`xdm:employmentStatus`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmpersonalfinances-known-values).

##### xdm:employmentStatus Known Values
| Value | Description |
|-------|-------------|
| `full time` |  |
| `part time` |  |
| `temporary` |  |
| `self employed` |  |
| `retired` |  |
| `unemployed` |  |






#### xdm:filingJointly
##### Filing Jointly

Refers to a filing status for married couples that have wed before the end of the tax year.

`xdm:filingJointly`
* is optional
* type: `boolean`

##### xdm:filingJointly Type


`boolean`







#### xdm:filingSeparately
##### Filing Separately

Refers to married couples who choose to record their respective incomes, exemptions, and deductions on separate tax returns.

`xdm:filingSeparately`
* is optional
* type: `boolean`

##### xdm:filingSeparately Type


`boolean`







#### xdm:financialAccount
##### financeAccountId

Financial account IDs assigned to the user, and array of Financial Account Details data type.

`xdm:financialAccount`
* is optional
* type: reference


##### xdm:financialAccount Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/datatypes/financial-account`










#### xdm:hasAssignedBeneficiary
##### Has Assigned Beneficiary

Flag determining if the account has a beneficiary assigned.

`xdm:hasAssignedBeneficiary`
* is optional
* type: `boolean`

##### xdm:hasAssignedBeneficiary Type


`boolean`







#### xdm:householdIncome
##### Household Income

Refers to the combined gross income of all members of a household.

`xdm:householdIncome`
* is optional
* type: reference

##### xdm:householdIncome Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`







#### xdm:isHeadOfHousehold
##### Head of Household

Users designed as head of household if they pay more than half the cost of supporting and housing a qualifying person.

`xdm:isHeadOfHousehold`
* is optional
* type: `boolean`

##### xdm:isHeadOfHousehold Type


`boolean`







#### xdm:singleFiler
##### Single Filer

Refers to a taxpayer who is unmarried and does not qualify for any other filing status.

`xdm:singleFiler`
* is optional
* type: `boolean`

##### xdm:singleFiler Type


`boolean`







#### xdm:taxBracket
##### Tax Bracket

Refers to a range of incomes subject to a certain income tax rate.

`xdm:taxBracket`
* is optional
* type: `string`

##### xdm:taxBracket Type


`string`










