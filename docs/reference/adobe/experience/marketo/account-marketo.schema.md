
# Marketo Account Schema

```
https://ns.adobe.com/experience/marketo/account-marketo
```

Marketo specific Account fields.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/marketo/account-marketo.schema.json](adobe/experience/marketo/account-marketo.schema.json) |
## Schema Hierarchy

* Marketo Account `https://ns.adobe.com/experience/marketo/account-marketo`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [XDM Business Account](../../../mixins/account/account-crm.schema.md) `https://ns.adobe.com/xdm/context/account-crm`


## Marketo Account Example
```json
{
  "marketo:accountID": "MKTO1111",
  "marketo:instanceID": "AAABBB",
  "marketo:org": {
    "marketo:notes": "Account Notes",
    "marketo:accountType": "Business",
    "marketo:primaryInterestID": "ABC111",
    "marketo:isPrivate": true
  },
  "marketo:namedAccount": {
    "marketo:opportunityAmount": 10000,
    "marketo:opportunityCount": 2,
    "marketo:percentiles": [
      10,
      15,
      20,
      20,
      15
    ],
    "marketo:scores": [
      1,
      0.9,
      0.8,
      0.75,
      0.5
    ],
    "marketo:membershipCount": 3,
    "marketo:crmOrgID": "crmorg111",
    "marketo:domainName": "Retail",
    "marketo:isTargeted": true
  },
  "xdm:extSourceSystemAudit": {
    "xdm:createdBy": "USER111",
    "xdm:createdDate": "2018-01-20T15:52:25+00:00",
    "xdm:lastUpdatedBy": "USER2222",
    "xdm:lastUpdatedDate": "2018-01-20T15:52:25+00:00",
    "xdm:lastActivityDate": "2018-01-20T15:52:25+00:00",
    "xdm:lastReferencedDate": "2018-01-20T15:52:25+00:00",
    "xdm:lastViewedDate": "2018-01-20T15:52:25+00:00"
  },
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
        "xdm:lastVerifiedDate": "2018-12-23"
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
  "xdm:deleted": false,
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

# Marketo Account Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [marketo:accountID](#marketoaccountid) | `string` | Optional | Marketo Account (this schema) |
| [marketo:instanceID](#marketoinstanceid) | `string` | Optional | Marketo Account (this schema) |
| [marketo:namedAccount](#marketonamedaccount) | `object` | Optional | Marketo Account (this schema) |
| [marketo:org](#marketoorg) | `object` | Optional | Marketo Account (this schema) |
| [xdm:accountDescription](#xdmaccountdescription) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmaccountdescription) |
| [xdm:accountName](#xdmaccountname) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmaccountname) |
| [xdm:accountOrganization](#xdmaccountorganization) | Account Organization | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmaccountorganization) |
| [xdm:accountSite](#xdmaccountsite) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmaccountsite) |
| [xdm:annualRevenue](#xdmannualrevenue) | `number` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmannualrevenue) |
| [xdm:billingAddress](#xdmbillingaddress) | Postal address | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmbillingaddress) |
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmcurrencycode) |
| [xdm:fax](#xdmfax) | Phone number | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmfax) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmisdeleted) |
| [xdm:logoUrl](#xdmlogourl) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmlogourl) |
| [xdm:naicsDescription](#xdmnaicsdescription) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmnaicsdescription) |
| [xdm:ownerID](#xdmownerid) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmownerid) |
| [xdm:ownership](#xdmownership) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmownership) |
| [xdm:parentID](#xdmparentid) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmparentid) |
| [xdm:partnerAccountID](#xdmpartneraccountid) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmpartneraccountid) |
| [xdm:shippingAddress](#xdmshippingaddress) | Postal address | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmshippingaddress) |
| [xdm:sicDescription](#xdmsicdescription) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmsicdescription) |
| [xdm:sourceType](#xdmsourcetype) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmsourcetype) |
| [xdm:territoryID](#xdmterritoryid) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmterritoryid) |
| [xdm:tickerSymbol](#xdmtickersymbol) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmtickersymbol) |
| [xdm:tradeStyle](#xdmtradestyle) | `string` | Optional | [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmtradestyle) |
| `*` | any | Additional | this schema *allows* additional properties |

## marketo:accountID
### Marketo Account Identifier

Unique identifier for an account in the Marketo instance.

`marketo:accountID`
* is optional
* type: `string`
* defined in this schema

### marketo:accountID Type


`string`






## marketo:instanceID
### Instance Identifier

Instance identifier of Marketo where the record originated from.

`marketo:instanceID`
* is optional
* type: `string`
* defined in this schema

### marketo:instanceID Type


`string`






## marketo:namedAccount


`marketo:namedAccount`
* is optional
* type: `object`
* defined in this schema

### marketo:namedAccount Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `marketo:crmOrgID`| string | Optional |
| `marketo:domainName`| string | Optional |
| `marketo:isTargeted`| boolean | Optional |
| `marketo:membershipCount`| integer | Optional |
| `marketo:opportunityAmount`| number | Optional |
| `marketo:opportunityCount`| integer | Optional |
| `marketo:percentiles`| array | Optional |
| `marketo:scores`| array | Optional |



#### marketo:crmOrgID
##### CRM Organization Id

Organization Id of the account from the CRM system.

`marketo:crmOrgID`
* is optional
* type: `string`

##### marketo:crmOrgID Type


`string`








#### marketo:domainName
##### Domain Name

Organization Domain name.

`marketo:domainName`
* is optional
* type: `string`

##### marketo:domainName Type


`string`








#### marketo:isTargeted
##### Account targeted Indicator

Indicator whether the Account is targeted.

`marketo:isTargeted`
* is optional
* type: `boolean`

##### marketo:isTargeted Type


`boolean`







#### marketo:membershipCount
##### Membership Count

undefined

`marketo:membershipCount`
* is optional
* type: `integer`

##### marketo:membershipCount Type


`integer`








#### marketo:opportunityAmount
##### Opportunity Amount

undefined

`marketo:opportunityAmount`
* is optional
* type: `number`

##### marketo:opportunityAmount Type


`number`








#### marketo:opportunityCount
##### Opportunity Count

undefined

`marketo:opportunityCount`
* is optional
* type: `integer`

##### marketo:opportunityCount Type


`integer`








#### marketo:percentiles
##### Percentile Measures

undefined

`marketo:percentiles`
* is optional
* type: `number[]`


##### marketo:percentiles Type


Array type: `number[]`

All items must be of the type:
`number`











#### marketo:scores
##### Score Measures

undefined

`marketo:scores`
* is optional
* type: `number[]`


##### marketo:scores Type


Array type: `number[]`

All items must be of the type:
`number`














## marketo:org


`marketo:org`
* is optional
* type: `object`
* defined in this schema

### marketo:org Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `marketo:accountType`| string | Optional |
| `marketo:isPrivate`| boolean | Optional |
| `marketo:notes`| string | Optional |
| `marketo:primaryInterestID`| string | Optional |



#### marketo:accountType
##### Account Type

Type of Account.

`marketo:accountType`
* is optional
* type: `string`

##### marketo:accountType Type


`string`








#### marketo:isPrivate
##### Private Flag

undefined

`marketo:isPrivate`
* is optional
* type: `boolean`

##### marketo:isPrivate Type


`boolean`







#### marketo:notes
##### Account Notes

undefined

`marketo:notes`
* is optional
* type: `string`

##### marketo:notes Type


`string`








#### marketo:primaryInterestID
##### Primary Interest Id

undefined

`marketo:primaryInterestID`
* is optional
* type: `string`

##### marketo:primaryInterestID Type


`string`











## xdm:accountDescription
### Account Description

Text description of the account.

`xdm:accountDescription`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmaccountdescription)

### xdm:accountDescription Type


`string`






## xdm:accountName
### Account Name

name of company. Up to 255 characters are allowed in this field.

`xdm:accountName`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmaccountname)

### xdm:accountName Type


`string`






## xdm:accountOrganization
### Account Details

Account details like number of employees, market segment, industry, and location.

`xdm:accountOrganization`
* is optional
* type: Account Organization
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmaccountorganization)

### xdm:accountOrganization Type


* [Account Organization](../../../datatypes/account-organization.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-account-organization`





## xdm:accountSite
### Account Site Details

Information about the account’s location, such as single location, headquarters, or branch. Up to 80 characters are allowed in this field.

`xdm:accountSite`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmaccountsite)

### xdm:accountSite Type


`string`






## xdm:annualRevenue
### Annual Revenue

Estimated annual revenue of the account.

`xdm:annualRevenue`
* is optional
* type: `number`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmannualrevenue)

### xdm:annualRevenue Type


`number`






## xdm:billingAddress
### Account Billing Address

Billing address(es) for the account.

`xdm:billingAddress`
* is optional
* type: Postal address

* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmbillingaddress)

### xdm:billingAddress Type


Array type: Postal address

All items must be of the type:
* [Postal address](../../../datatypes/address.schema.md) – `https://ns.adobe.com/xdm/common/address`








## xdm:currencyCode
### Currency Code

The ISO 4217 currency code.

`xdm:currencyCode`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmcurrencycode)

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

* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmfax)

### xdm:fax Type


Array type: Phone number

All items must be of the type:
* [Phone number](../../../datatypes/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`








## xdm:isDeleted
### Account Record Deleted Indicator

Indicator whether the Account record is deleted or not.

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmisdeleted)

### xdm:isDeleted Type


`boolean`





## xdm:logoUrl
### Logo URL

Path to be combined with the URL of a Salesforce instance (for example, https://yourInstance.salesforce.com/) to generate a URL to request the social network profile image associated with the account. Generated URL returns an HTTP redirect (code 302) to the social network profile image for the account.

`xdm:logoUrl`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmlogourl)

### xdm:logoUrl Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:naicsDescription
### NAICS Description

A brief description of an organization’s line of business, based on its NAICS code.

`xdm:naicsDescription`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmnaicsdescription)

### xdm:naicsDescription Type


`string`






## xdm:ownerID
### Account Owner

assigned owner of account. Not available in personal edition.

`xdm:ownerID`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmownerid)

### xdm:ownerID Type


`string`






## xdm:ownership
### Ownership

Ownership of company, for example, public or private. Entry is selected from a picklist of available values, which a salesforce admin sets. Each picklist value can have up to 40 characters.

`xdm:ownership`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmownership)

### xdm:ownership Type


`string`






## xdm:parentID
### Parent Account

Parent company for companies that are subsidiaries of a larger company or organization. The parent account must be an existing account in salesforce. You can enter the account name, or select (or optionally, create) the account using the lookup icon.

`xdm:parentID`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmparentid)

### xdm:parentID Type


`string`






## xdm:partnerAccountID
### Partner Account Id

Partner accounts are accounts that a channel manager uses to manage partner organizations, partner users, and activities when using a partner community or partner portal.

`xdm:partnerAccountID`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmpartneraccountid)

### xdm:partnerAccountID Type


`string`






## xdm:shippingAddress
### Account Shipping Address

Shipping address(es) for the account.

`xdm:shippingAddress`
* is optional
* type: Postal address

* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmshippingaddress)

### xdm:shippingAddress Type


Array type: Postal address

All items must be of the type:
* [Postal address](../../../datatypes/address.schema.md) – `https://ns.adobe.com/xdm/common/address`








## xdm:sicDescription
### SIC Description

A brief description of an organization’s line of business, based on its SIC code.

`xdm:sicDescription`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmsicdescription)

### xdm:sicDescription Type


`string`






## xdm:sourceType
### Account Source Type

Source type for the account.

`xdm:sourceType`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmsourcetype)

### xdm:sourceType Type


`string`






## xdm:territoryID
### Territory Id

The territory to which the account has been assigned.

`xdm:territoryID`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmterritoryid)

### xdm:territoryID Type


`string`






## xdm:tickerSymbol
### Ticker Symbol

The stock market symbol for this account. Maximum of 20 characters.

`xdm:tickerSymbol`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmtickersymbol)

### xdm:tickerSymbol Type


`string`






## xdm:tradeStyle
### Account Trade Style

A name, different from its legal name, that an organization may use for conducting business. Similar to (Doing business as) or (DBA).

`xdm:tradeStyle`
* is optional
* type: `string`
* defined in [XDM Business Account](../../../mixins/account/account-crm.schema.md#xdmtradestyle)

### xdm:tradeStyle Type


`string`





