
# B2B Account Schema

```
https://ns.adobe.com/xdm/datatypes/b2b-account
```

This Data Type is used to capture B2B Account properties. They are grouped functioanlly under separate definitions.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/b2b/b2b-account.schema.json](datatypes/b2b/b2b-account.schema.json) |
## Schema Hierarchy

* B2B Account `https://ns.adobe.com/xdm/datatypes/b2b-account`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Phone number](../demographic/phonenumber.schema.md) `https://ns.adobe.com/xdm/context/phonenumber`
  * [Postal address](../demographic/address.schema.md) `https://ns.adobe.com/xdm/common/address`
  * [Account Details](account-organization.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-account-organization`


## B2B Account Example
```json
{}
```

# B2B Account Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:accountBillingAddress](#xdmaccountbillingaddress) | Postal address | Optional | B2B Account (this schema) |
| [xdm:accountDescription](#xdmaccountdescription) | `string` | Optional | B2B Account (this schema) |
| [xdm:accountFax](#xdmaccountfax) | Phone number | Optional | B2B Account (this schema) |
| [xdm:accountName](#xdmaccountname) | `string` | Optional | B2B Account (this schema) |
| [xdm:accountNumber](#xdmaccountnumber) | `string` | Optional | B2B Account (this schema) |
| [xdm:accountOrganization](#xdmaccountorganization) | Account Details | Optional | B2B Account (this schema) |
| [xdm:accountOwnership](#xdmaccountownership) | `string` | Optional | B2B Account (this schema) |
| [xdm:accountParentID](#xdmaccountparentid) | `string` | Optional | B2B Account (this schema) |
| [xdm:accountPhone](#xdmaccountphone) | Phone number | Optional | B2B Account (this schema) |
| [xdm:accountPhysicalAddress](#xdmaccountphysicaladdress) | Postal address | Optional | B2B Account (this schema) |
| [xdm:accountScore](#xdmaccountscore) | `number` | Optional | B2B Account (this schema) |
| [xdm:accountShippingAddress](#xdmaccountshippingaddress) | Postal address | Optional | B2B Account (this schema) |
| [xdm:accountSite](#xdmaccountsite) | `string` | Optional | B2B Account (this schema) |
| [xdm:accountSourceType](#xdmaccountsourcetype) | `string` | Optional | B2B Account (this schema) |
| [xdm:accountTerritoryID](#xdmaccountterritoryid) | `string` | Optional | B2B Account (this schema) |
| [xdm:accountTradeStyle](#xdmaccounttradestyle) | `string` | Optional | B2B Account (this schema) |
| [xdm:accountType](#xdmaccounttype) | `string` | Optional | B2B Account (this schema) |
| [xdm:defaultCurrencyCode](#xdmdefaultcurrencycode) | `string` | Optional | B2B Account (this schema) |
| [xdm:partnerAccountID](#xdmpartneraccountid) | `string` | Optional | B2B Account (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:accountBillingAddress
### Account Billing Address

`xdm:accountBillingAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:accountBillingAddress Type


* [Postal address](../demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:accountDescription
### Account Description

Text description of the account.

`xdm:accountDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:accountDescription Type


`string`






## xdm:accountFax
### Account Fax Number

Fax number for the account.

`xdm:accountFax`
* is optional
* type: Phone number
* defined in this schema

### xdm:accountFax Type


* [Phone number](../demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:accountName
### Account Name

name of company. Up to 255 characters are allowed in this field.

`xdm:accountName`
* is optional
* type: `string`
* defined in this schema

### xdm:accountName Type


`string`






## xdm:accountNumber
### Account Number

Tracking or reference number for account. Up to 40 characters are allowed in this field.

`xdm:accountNumber`
* is optional
* type: `string`
* defined in this schema

### xdm:accountNumber Type


`string`






## xdm:accountOrganization
### Account Organization

`xdm:accountOrganization`
* is optional
* type: Account Details
* defined in this schema

### xdm:accountOrganization Type


* [Account Details](account-organization.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-account-organization`





## xdm:accountOwnership
### Ownership

Ownership of company, for example, public or private. Entry is selected from a picklist of available values, which a salesforce admin sets. Each picklist value can have up to 40 characters.

`xdm:accountOwnership`
* is optional
* type: `string`
* defined in this schema

### xdm:accountOwnership Type


`string`






## xdm:accountParentID
### Parent Account

Parent company for companies that are subsidiaries of a larger company or organization. The parent account must be an existing account in salesforce. You can enter the account name, or select (or optionally, create) the account using the lookup icon.

`xdm:accountParentID`
* is optional
* type: `string`
* defined in this schema

### xdm:accountParentID Type


`string`






## xdm:accountPhone
### Account Phone Number

Phone number for the account.

`xdm:accountPhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:accountPhone Type


* [Phone number](../demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:accountPhysicalAddress
### Account Physical Address

Actual physical address of the account. Could be the HQ address or any preffered business address for communication.

`xdm:accountPhysicalAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:accountPhysicalAddress Type


* [Postal address](../demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:accountScore
### Account Score

`xdm:accountScore`
* is optional
* type: `number`
* defined in this schema

### xdm:accountScore Type


`number`






## xdm:accountShippingAddress
### Account Shipping Address

`xdm:accountShippingAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:accountShippingAddress Type


* [Postal address](../demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:accountSite
### Account Site Details

Information about the account’s location, such as single location, headquarters, or branch. Up to 80 characters are allowed in this field.

`xdm:accountSite`
* is optional
* type: `string`
* defined in this schema

### xdm:accountSite Type


`string`






## xdm:accountSourceType
### Account Source Type

Source type for the account.

`xdm:accountSourceType`
* is optional
* type: `string`
* defined in this schema

### xdm:accountSourceType Type


`string`






## xdm:accountTerritoryID
### Account Territory Id

The territory to which the account has been assigned.

`xdm:accountTerritoryID`
* is optional
* type: `string`
* defined in this schema

### xdm:accountTerritoryID Type


`string`






## xdm:accountTradeStyle
### Account Trade Style

A name, different from its legal name, that an organization may use for conducting business. Similar to (Doing business as) or (DBA).

`xdm:accountTradeStyle`
* is optional
* type: `string`
* defined in this schema

### xdm:accountTradeStyle Type


`string`






## xdm:accountType
### Account Type

Account Type.

`xdm:accountType`
* is optional
* type: `string`
* defined in this schema

### xdm:accountType Type


`string`






## xdm:defaultCurrencyCode
### Default Currency Code

The ISO 4217 currency code.

`xdm:defaultCurrencyCode`
* is optional
* type: `string`
* defined in this schema

### xdm:defaultCurrencyCode Type


`string`


All instances must conform to this regular expression 
```regex
^[A-Z]{3}$
```

* test example: [USD](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=USD)
* test example: [EUR](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=EUR)




### xdm:defaultCurrencyCode Examples

```json
"USD"
```

```json
"EUR"
```



## xdm:partnerAccountID
### Partner Account Id

Partner accounts are accounts that a channel manager uses to manage partner organizations, partner users, and activities when using a partner community or partner portal.

`xdm:partnerAccountID`
* is optional
* type: `string`
* defined in this schema

### xdm:partnerAccountID Type


`string`





