
# Financial Account Schema

```
https://ns.adobe.com/xdm/datatypes/financial-account
```

Financial account details, such as owners, balances, and types.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/financial-account.schema.json](datatypes/financial-account.schema.json) |
## Schema Hierarchy

* Financial Account `https://ns.adobe.com/xdm/datatypes/financial-account`
  * [Currency](currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`


## Financial Account Example
```json
{}
```

# Financial Account Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:currentAccountBalance](#xdmcurrentaccountbalance) | Currency | Optional | Financial Account (this schema) |
| [xdm:financialAccountID](#xdmfinancialaccountid) | `string` | Optional | Financial Account (this schema) |
| [xdm:financialAccountName](#xdmfinancialaccountname) | `string` | Optional | Financial Account (this schema) |
| [xdm:financialAccountOwner](#xdmfinancialaccountowner) | Personal Contact Details | Optional | Financial Account (this schema) |
| [xdm:financialAccountType](#xdmfinancialaccounttype) | `enum` | Optional | Financial Account (this schema) |
| [xdm:openedDate](#xdmopeneddate) | `string` | Optional | Financial Account (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:currentAccountBalance
### Current Financial Account Balance

Balance in the account.

`xdm:currentAccountBalance`
* is optional
* type: Currency
* defined in this schema

### xdm:currentAccountBalance Type


* [Currency](currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:financialAccountID
### Financial Account ID

Current account balance for a single user account.

`xdm:financialAccountID`
* is optional
* type: `string`
* defined in this schema

### xdm:financialAccountID Type


`string`






## xdm:financialAccountName
### Financial Account Name

Name assigned to the financial account.

`xdm:financialAccountName`
* is optional
* type: `string`
* defined in this schema

### xdm:financialAccountName Type


`string`






## xdm:financialAccountOwner
### Financial Account Owners

Array of the owner(s) of the selected financial account. Extension of the personal profile details data type.

`xdm:financialAccountOwner`
* is optional
* type: Personal Contact Details

* defined in this schema

### xdm:financialAccountOwner Type


Array type: Personal Contact Details

All items must be of the type:
* [Personal Contact Details](../mixins/profile/profile-personal-details.schema.md) – `https://ns.adobe.com/xdm/context/profile-personal-details`








## xdm:financialAccountType
### Financial Account Type

Describes the type of finanical account, such as checking, savings, or retirement.

`xdm:financialAccountType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmfinancialaccounttype-known-values).

### xdm:financialAccountType Known Values
| Value | Description |
|-------|-------------|
| `checking` |  |
| `savings` |  |
| `retirement` |  |
| `investment` |  |




## xdm:openedDate
### Financial Account Open Date

Date which the account was opened.

`xdm:openedDate`
* is optional
* type: `string`
* defined in this schema

### xdm:openedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





