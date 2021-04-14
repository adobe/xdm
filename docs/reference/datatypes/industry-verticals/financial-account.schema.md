
# Financial Account Schema

```
https://ns.adobe.com/xdm/datatypes/financial-account
```

Financial account details, such as owners, balances, and types.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/industry-verticals/financial-account.schema.json](datatypes/industry-verticals/financial-account.schema.json) |
## Schema Hierarchy

* Financial Account `https://ns.adobe.com/xdm/datatypes/financial-account`
  * [Currency](../currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`


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
| [xdm:financialAccountType](#xdmfinancialaccounttype) | `enum` | Optional | Financial Account (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:currentAccountBalance
### Current Financial Account Balance

Balance in the account.

`xdm:currentAccountBalance`
* is optional
* type: Currency
* defined in this schema

### xdm:currentAccountBalance Type


* [Currency](../currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





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



