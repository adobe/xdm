
# Personal Tax Profile Details Schema

```
https://ns.adobe.com/xdm/mixins/profile/profile-personal-tax-profile-details
```

Personal tax details such as filing statuses and tax bracket.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/profile/profile-personal-tax-profile-details.schema.json](fieldgroups/profile/profile-personal-tax-profile-details.schema.json) |

## Personal Tax Profile Details Example
```json
{
  "xdm:personalTaxProfile": {
    "xdm:filingJointly": true,
    "xdm:filingSeparately": false,
    "xdm:isHeadOfHousehold": true,
    "xdm:singleFiler": false,
    "xdm:taxBracket": "TBD"
  }
}
```

# Personal Tax Profile Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Personal Tax Profile Details (this schema) |
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
| `xdm:personalTaxProfile`| object | Optional |



#### xdm:personalTaxProfile

undefined

`xdm:personalTaxProfile`
* is optional
* type: `object`

##### xdm:personalTaxProfile Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:filingJointly": {
      "title": "Filing Jointly",
      "type": "boolean",
      "description": "Refers to a filing status for married couples that have wed before the end of the tax year.",
      "meta:titleId": "profile-personal-tax-profile-details##xdm:filingJointly##title##88371",
      "meta:descriptionId": "profile-personal-tax-profile-details##xdm:filingJointly##description##38811"
    },
    "xdm:filingSeparately": {
      "title": "Filing Separately",
      "type": "boolean",
      "description": "Refers to married couples who choose to record their respective incomes, exemptions, and deductions on separate tax returns.",
      "meta:titleId": "profile-personal-tax-profile-details##xdm:filingSeparately##title##61811",
      "meta:descriptionId": "profile-personal-tax-profile-details##xdm:filingSeparately##description##80471"
    },
    "xdm:isHeadOfHousehold": {
      "title": "Head of Household",
      "type": "boolean",
      "description": "Users designed as head of household if they pay more than half the cost of supporting and housing a qualifying person.",
      "meta:titleId": "profile-personal-tax-profile-details##xdm:isHeadOfHousehold##title##42801",
      "meta:descriptionId": "profile-personal-tax-profile-details##xdm:isHeadOfHousehold##description##99071"
    },
    "xdm:householdIncome": {
      "title": "Household Income",
      "$ref": "https://ns.adobe.com/xdm/datatypes/currency",
      "description": "Refers to the combined gross income of all members of a household.",
      "meta:titleId": "profile-personal-tax-profile-details##xdm:householdIncome##title##68531",
      "meta:descriptionId": "profile-personal-tax-profile-details##xdm:householdIncome##description##11911"
    },
    "xdm:singleFiler": {
      "title": "Single Filer",
      "type": "boolean",
      "description": "Refers to a taxpayer who is unmarried and does not qualify for any other filing status.",
      "meta:titleId": "profile-personal-tax-profile-details##xdm:singleFiler##title##1981",
      "meta:descriptionId": "profile-personal-tax-profile-details##xdm:singleFiler##description##27421"
    },
    "xdm:taxBracket": {
      "title": "Tax Bracket",
      "type": "string",
      "description": "Refers to a range of incomes subject to a certain income tax rate.",
      "meta:titleId": "profile-personal-tax-profile-details##xdm:taxBracket##title##23771",
      "meta:descriptionId": "profile-personal-tax-profile-details##xdm:taxBracket##description##34171"
    },
    "xdm:taxID": {
      "title": "Tax ID",
      "type": "string",
      "description": "Tax identifier for the individual.",
      "meta:titleId": "profile-personal-tax-profile-details##xdm:taxID##title##11741",
      "meta:descriptionId": "profile-personal-tax-profile-details##xdm:taxID##description##32611"
    }
  },
  "simpletype": "`object`"
}
```









