
# XDM Business Account Schema

```
https://ns.adobe.com/xdm/context/account-crm
```

An XDM Business Account.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [mixins/account/account-crm.schema.json](mixins/account/account-crm.schema.json) |
## Schema Hierarchy

* XDM Business Account `https://ns.adobe.com/xdm/context/account-crm`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Account Organization](../../datatypes/account-organization.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-account-organization`


## XDM Business Account Example
```json
{
  "xdm:ownerID": "OWNER111",
  "xdm:parentID": "ACC000",
  "xdm:partnerAccountID": "PRTNR1111",
  "xdm:territoryID": "Terr1",
  "xdm:accountSite": "Additional account site details",
  "xdm:currencyCode": "USD",
  "xdm:annualRevenue": 10000000,
  "xdm:fax": [
    {
      "xdm:primary": true,
      "xdm:number": "1-408-888-8888",
      "xdm:status": "active"
    }
  ],
  "xdm:accountOrganization": {
    "@id": "https://data.adobe.io/entities/org/orgid111",
    "xdm:legalName": "ABC Stores",
    "xdm:numberOfEmployees": 200,
    "xdm:industry": "Retail",
    "xdm:website": "http://www.abcstores.com",
    "rating": 1,
    "xdm:marketSegment": "apparel for kids",
    "xdm:location": {
      "@id": "https://data.adobe.io/entities/places/locid123",
      "schema:description": "ABC Store location",
      "xdm:address": {
        "@id": "https://data.adobe.io/entities/address/123",
        "xdm:primary": true,
        "xdm:type": "work",
        "xdm:street1": "100 Lincoln Ave",
        "xdm:city": "San Jose",
        "xdm:stateProvince": "US-CA",
        "xdm:postalCode": "95125",
        "xdm:country": "United States",
        "xdm:countryCode": "US",
        "schema:latitude": 37.3382,
        "schema:longitude": -121.8863,
        "xdm:status": "active",
        "xdm:lastVerifiedDate": "2018-12-20"
      },
      "schema:telephone": "1-408-800-0000",
      "xdm:identifier": {
        "https://ns.adobe.com/xdm/external/dnb": "1234",
        "https://ns.adobe.com/xdm/external/angellist": "https://angel.co/adobe"
      },
      "xdm:classifier": {
        "https://ns.adobe.com/xdm/external/sic": "1234",
        "https://ns.adobe.com/xdm/external/naics": "1234"
      }
    }
  },
  "xdm:naicsDescription": "Naics Description Here",
  "xdm:sicDescription": "SIC Description Here",
  "xdm:accountName": "Account 123",
  "xdm:accountDescription": "Account Description",
  "xdm:ownership": "Public",
  "xdm:logoUrl": "https://sampleaccount.com/logo.png",
  "xdm:tradeStyle": "Trade style here",
  "xdm:tickerSymbol": "Ticker Symbol Here",
  "xdm:isDeleted": false,
  "xdm:billingAddress": [
    {
      "@id": "https://data.adobe.io/entities/address/123",
      "xdm:primary": true,
      "xdm:street1": "345 Park Ave",
      "xdm:city": "San Jose",
      "xdm:stateProvince": "US-CA",
      "xdm:postalCode": "95110",
      "xdm:country": "United States",
      "xdm:countryCode": "US",
      "schema:latitude": 37.3382,
      "schema:longitude": -121.8863,
      "xdm:status": "active",
      "xdm:lastVerifiedDate": "2018-12-20"
    }
  ],
  "xdm:shippingAddress": [
    {
      "@id": "https://data.adobe.io/entities/address/234",
      "xdm:primary": true,
      "xdm:street1": "100 Park Ave",
      "xdm:city": "San Jose",
      "xdm:stateProvince": "US-CA",
      "xdm:postalCode": "95110",
      "xdm:country": "United States",
      "xdm:countryCode": "US",
      "schema:latitude": 37.3382,
      "schema:longitude": -121.8863,
      "xdm:status": "active",
      "xdm:lastVerifiedDate": "2018-12-20"
    }
  ]
}
```

# XDM Business Account Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:accountDescription](#xdmaccountdescription) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:accountName](#xdmaccountname) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:accountOrganization](#xdmaccountorganization) | Account Organization | Optional | XDM Business Account (this schema) |
| [xdm:accountSite](#xdmaccountsite) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:annualRevenue](#xdmannualrevenue) | `number` | Optional | XDM Business Account (this schema) |
| [xdm:billingAddress](#xdmbillingaddress) | Postal address | Optional | XDM Business Account (this schema) |
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:fax](#xdmfax) | Phone number | Optional | XDM Business Account (this schema) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | XDM Business Account (this schema) |
| [xdm:logoUrl](#xdmlogourl) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:naicsDescription](#xdmnaicsdescription) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:ownerID](#xdmownerid) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:ownership](#xdmownership) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:parentID](#xdmparentid) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:partnerAccountID](#xdmpartneraccountid) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:shippingAddress](#xdmshippingaddress) | Postal address | Optional | XDM Business Account (this schema) |
| [xdm:sicDescription](#xdmsicdescription) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:sourceType](#xdmsourcetype) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:territoryID](#xdmterritoryid) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:tickerSymbol](#xdmtickersymbol) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:tradeStyle](#xdmtradestyle) | `string` | Optional | XDM Business Account (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:accountDescription
### Account Description

Text description of the account.

`xdm:accountDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:accountDescription Type


`string`






## xdm:accountName
### Account Name

name of company. Up to 255 characters are allowed in this field.

`xdm:accountName`
* is optional
* type: `string`
* defined in this schema

### xdm:accountName Type


`string`






## xdm:accountOrganization
### Account Details

Account details like number of employees, market segment, industry, and location.

`xdm:accountOrganization`
* is optional
* type: Account Organization
* defined in this schema

### xdm:accountOrganization Type


* [Account Organization](../../datatypes/account-organization.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-account-organization`





## xdm:accountSite
### Account Site Details

Information about the account’s location, such as single location, headquarters, or branch. Up to 80 characters are allowed in this field.

`xdm:accountSite`
* is optional
* type: `string`
* defined in this schema

### xdm:accountSite Type


`string`






## xdm:annualRevenue
### Annual Revenue

Estimated annual revenue of the account.

`xdm:annualRevenue`
* is optional
* type: `number`
* defined in this schema

### xdm:annualRevenue Type


`number`






## xdm:billingAddress
### Account Billing Address

Billing address(es) for the account.

`xdm:billingAddress`
* is optional
* type: Postal address

* defined in this schema

### xdm:billingAddress Type


Array type: Postal address

All items must be of the type:
* [Postal address](../../datatypes/address.schema.md) – `https://ns.adobe.com/xdm/common/address`








## xdm:currencyCode
### Currency Code

The ISO 4217 currency code.

`xdm:currencyCode`
* is optional
* type: `string`
* defined in this schema

### xdm:currencyCode Type


`string`


All instances must conform to this regular expression 
```regex
^[A-Z]{3}$
```

* test example: [USD](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=USD)
* test example: [EUR](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=EUR)




### xdm:currencyCode Examples

```json
"USD"
```

```json
"EUR"
```



## xdm:fax
### Fax Number

Fax number for the account.

`xdm:fax`
* is optional
* type: Phone number

* defined in this schema

### xdm:fax Type


Array type: Phone number

All items must be of the type:
* [Phone number](../../datatypes/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`








## xdm:isDeleted
### Account Record Deleted Indicator

Indicator whether the Account record is deleted or not.

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDeleted Type


`boolean`





## xdm:logoUrl
### Logo URL

Path to be combined with the URL of a Salesforce instance (for example, https://yourInstance.salesforce.com/) to generate a URL to request the social network profile image associated with the account. Generated URL returns an HTTP redirect (code 302) to the social network profile image for the account.

`xdm:logoUrl`
* is optional
* type: `string`
* defined in this schema

### xdm:logoUrl Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:naicsDescription
### NAICS Description

A brief description of an organization’s line of business, based on its NAICS code.

`xdm:naicsDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:naicsDescription Type


`string`






## xdm:ownerID
### Account Owner

assigned owner of account. Not available in personal edition.

`xdm:ownerID`
* is optional
* type: `string`
* defined in this schema

### xdm:ownerID Type


`string`






## xdm:ownership
### Ownership

Ownership of company, for example, public or private. Entry is selected from a picklist of available values, which a salesforce admin sets. Each picklist value can have up to 40 characters.

`xdm:ownership`
* is optional
* type: `string`
* defined in this schema

### xdm:ownership Type


`string`






## xdm:parentID
### Parent Account

Parent company for companies that are subsidiaries of a larger company or organization. The parent account must be an existing account in salesforce. You can enter the account name, or select (or optionally, create) the account using the lookup icon.

`xdm:parentID`
* is optional
* type: `string`
* defined in this schema

### xdm:parentID Type


`string`






## xdm:partnerAccountID
### Partner Account Id

Partner accounts are accounts that a channel manager uses to manage partner organizations, partner users, and activities when using a partner community or partner portal.

`xdm:partnerAccountID`
* is optional
* type: `string`
* defined in this schema

### xdm:partnerAccountID Type


`string`






## xdm:shippingAddress
### Account Shipping Address

Shipping address(es) for the account.

`xdm:shippingAddress`
* is optional
* type: Postal address

* defined in this schema

### xdm:shippingAddress Type


Array type: Postal address

All items must be of the type:
* [Postal address](../../datatypes/address.schema.md) – `https://ns.adobe.com/xdm/common/address`








## xdm:sicDescription
### SIC Description

A brief description of an organization’s line of business, based on its SIC code.

`xdm:sicDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:sicDescription Type


`string`






## xdm:sourceType
### Account Source Type

Source type for the account.

`xdm:sourceType`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceType Type


`string`






## xdm:territoryID
### Territory Id

The territory to which the account has been assigned.

`xdm:territoryID`
* is optional
* type: `string`
* defined in this schema

### xdm:territoryID Type


`string`






## xdm:tickerSymbol
### Ticker Symbol

The stock market symbol for this account. Maximum of 20 characters.

`xdm:tickerSymbol`
* is optional
* type: `string`
* defined in this schema

### xdm:tickerSymbol Type


`string`






## xdm:tradeStyle
### Account Trade Style

A name, different from its legal name, that an organization may use for conducting business. Similar to (Doing business as) or (DBA).

`xdm:tradeStyle`
* is optional
* type: `string`
* defined in this schema

### xdm:tradeStyle Type


`string`





