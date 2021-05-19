
# Personal Finance Details Schema

```
https://ns.adobe.com/xdm/mixins/profile-personal-finance-details
```

Personal finance details such as financial account details, credit score, and tax bracket.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/profile/profile-personal-finance-details.schema.json](mixins/profile/profile-personal-finance-details.schema.json) |

## Personal Finance Details Example
```json
{
  "xdm:personalFinances": {
    "xdm:accountCardsTotal": 3,
    "xdm:creditScore": 760,
    "xdm:employmentStatus": "full time",
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

Financial details including transactions, accounts, and applications.

`xdm:personalFinances`
* is optional
* type: `object`
* defined in this schema

### xdm:personalFinances Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| array | Optional |
| `xdm:accountCardsTotal`| integer | Optional |
| `xdm:assignedBeneficiary`| array | Optional |
| `xdm:creditScores`| array | Optional |
| `xdm:employmentStatus`| string | Optional |
| `xdm:hasAssignedBeneficiary`| boolean | Optional |



#### xdm:ID
##### ID

Array of financial account IDs assigned to the user.

`xdm:ID`
* is optional
* type: `string[]`


##### xdm:ID Type


Array type: `string[]`

All items must be of the type:
`string`











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










#### xdm:creditScores

undefined

`xdm:creditScores`
* is optional
* type: `object[]`


##### xdm:creditScores Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:provider`| string | Optional |
| `xdm:score`| integer | Optional |
| `xdm:scoreDate`| string | Optional |



#### xdm:provider
##### Credit Bureau

Refers to the credit bureau responsible for providing the credit score.

`xdm:provider`
* is optional
* type: `string`

##### xdm:provider Type


`string`



##### xdm:provider Known Values
| Value | Description |
|-------|-------------|
| `experian` | Experian |
| `equifax` | Equifax |
| `transunion` | TransUnion |






#### xdm:score
##### Score

Refers to a number between 300-850 that depicts a consumer's creditworthiness.

`xdm:score`
* is optional
* type: `integer`

##### xdm:score Type


`integer`








#### xdm:scoreDate
##### Score Date

Date when the score was reported.

`xdm:scoreDate`
* is optional
* type: `string`

##### xdm:scoreDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))















#### xdm:employmentStatus
##### Employment Status

Tracks the employment status of the user.

`xdm:employmentStatus`
* is optional
* type: `string`

##### xdm:employmentStatus Type


`string`



##### xdm:employmentStatus Known Values
| Value | Description |
|-------|-------------|
| `fullTime` | Full Time |
| `partTime` | Part Time |
| `temporary` | Temporary |
| `selfEmployed` | Self-Employed |
| `retired` | Retired |
| `unemployed` | Unemployed |






#### xdm:hasAssignedBeneficiary
##### Has Assigned Beneficiary

Flag determining if the account has a beneficiary assigned.

`xdm:hasAssignedBeneficiary`
* is optional
* type: `boolean`

##### xdm:hasAssignedBeneficiary Type


`boolean`









