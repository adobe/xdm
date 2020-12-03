
# Financial Account Schema

```
https://ns.adobe.com/xdm/datatypes/financial-account
```

Financial account details, such as owners, balances, and types.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/financial-account.schema.json](datatypes/financial-account.schema.json) |

## Financial Account Example
```json
{}
```

# Financial Account Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:currentAccountBalance](#xdmcurrentaccountbalance) | reference | `https://ns.adobe.com/xdm/datatypes/financial-account#/definitions/financialAccount` |
| [xdm:financialAccountID](#xdmfinancialaccountid) | `string` | `https://ns.adobe.com/xdm/datatypes/financial-account#/definitions/financialAccount` |
| [xdm:financialAccountName](#xdmfinancialaccountname) | `string` | `https://ns.adobe.com/xdm/datatypes/financial-account#/definitions/financialAccount` |
| [xdm:financialAccountOwner](#xdmfinancialaccountowner) | reference | `https://ns.adobe.com/xdm/datatypes/financial-account#/definitions/financialAccount` |
| [xdm:financialAccountType](#xdmfinancialaccounttype) | `enum` | `https://ns.adobe.com/xdm/datatypes/financial-account#/definitions/financialAccount` |
| [xdm:openedDate](#xdmopeneddate) | `string` | `https://ns.adobe.com/xdm/datatypes/financial-account#/definitions/financialAccount` |

## xdm:currentAccountBalance
### Current Financial Account Balance

Balance in the account.

`xdm:currentAccountBalance`
* is optional
* type: reference
* defined in this schema

### xdm:currentAccountBalance Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`





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
* type: reference

* defined in this schema

### xdm:financialAccountOwner Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/experience/campaign/experienceevent-profile-personal-details`








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





