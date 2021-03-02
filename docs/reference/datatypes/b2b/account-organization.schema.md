
# Account Details Schema

```
https://ns.adobe.com/xdm/datatypes/b2b-account-organization
```

Commonly used organizational attributes for a B2B account such as number of employees, market segment, industry, rating, tickersymbol etc.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/b2b/account-organization.schema.json](datatypes/b2b/account-organization.schema.json) |
## Schema Hierarchy

* Account Details `https://ns.adobe.com/xdm/datatypes/b2b-account-organization`
  * [Currency](../currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`


## Account Details Example
```json
{}
```

# Account Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:DUNSNumber](#xdmdunsnumber) | `string` | Optional | Account Details (this schema) |
| [xdm:NAICSCode](#xdmnaicscode) | `string` | Optional | Account Details (this schema) |
| [xdm:NAICSDescription](#xdmnaicsdescription) | `string` | Optional | Account Details (this schema) |
| [xdm:SICCode](#xdmsiccode) | `string` | Optional | Account Details (this schema) |
| [xdm:SICDescription](#xdmsicdescription) | `string` | Optional | Account Details (this schema) |
| [xdm:annualRevenue](#xdmannualrevenue) | Currency | Optional | Account Details (this schema) |
| [xdm:companyProductAndServices](#xdmcompanyproductandservices) | `string` | Optional | Account Details (this schema) |
| [xdm:facebookPageUrl](#xdmfacebookpageurl) | `string` | Optional | Account Details (this schema) |
| [xdm:industry](#xdmindustry) | `string` | Optional | Account Details (this schema) |
| [xdm:jigsaw](#xdmjigsaw) | `string` | Optional | Account Details (this schema) |
| [xdm:linkedinPageUrl](#xdmlinkedinpageurl) | `string` | Optional | Account Details (this schema) |
| [xdm:logoUrl](#xdmlogourl) | `string` | Optional | Account Details (this schema) |
| [xdm:marketSegment](#xdmmarketsegment) | `string` | Optional | Account Details (this schema) |
| [xdm:numberOfEmployees](#xdmnumberofemployees) | `integer` | Optional | Account Details (this schema) |
| [xdm:organizationType](#xdmorganizationtype) | `string` | Optional | Account Details (this schema) |
| [xdm:primaryEmailDomain](#xdmprimaryemaildomain) | `string` | Optional | Account Details (this schema) |
| [xdm:rating](#xdmrating) | `number` | Optional | Account Details (this schema) |
| [xdm:tickerSymbol](#xdmtickersymbol) | `string` | Optional | Account Details (this schema) |
| [xdm:twitterHandleUrl](#xdmtwitterhandleurl) | `string` | Optional | Account Details (this schema) |
| [xdm:website](#xdmwebsite) | `string` | Optional | Account Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:DUNSNumber
### Dun &amp; Bradstreet D-U-N-S Number

The Dun & Bradstreet D-U-N-S Number is a non-indicative, nine-digit number assigned to each business location in the Dun & Bradstreet database having a unique, separate, and distinct operation, and is maintained solely by Dun & Bradstreet.

`xdm:DUNSNumber`
* is optional
* type: `string`
* defined in this schema

### xdm:DUNSNumber Type


`string`






## xdm:NAICSCode
### NAICS Code

A NAICS (pronounced NAKES) Code is a classification within the North American Industry Classification System.

`xdm:NAICSCode`
* is optional
* type: `string`
* defined in this schema

### xdm:NAICSCode Type


`string`






## xdm:NAICSDescription
### NAICS Description

A brief description of an organization’s line of business, based on its NAICS code.

`xdm:NAICSDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:NAICSDescription Type


`string`






## xdm:SICCode
### SIC Code

The Standard Industrial Classification (SIC) are four-digit codes that categorize the industries that companies belong to based on their business activities.

`xdm:SICCode`
* is optional
* type: `string`
* defined in this schema

### xdm:SICCode Type


`string`






## xdm:SICDescription
### SIC Description

A brief description of an organization’s line of business, based on its SIC code.

`xdm:SICDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:SICDescription Type


`string`






## xdm:annualRevenue
### Annual Revenue

Estimated amount of annual revenue of the organization.

`xdm:annualRevenue`
* is optional
* type: Currency
* defined in this schema

### xdm:annualRevenue Type


* [Currency](../currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:companyProductAndServices
### Company Product and Services

Product and Services the Company is dealing or doing business in.

`xdm:companyProductAndServices`
* is optional
* type: `string`
* defined in this schema

### xdm:companyProductAndServices Type


`string`






## xdm:facebookPageUrl
### Facebook Page URL

Website link to the Facebook account of the account

`xdm:facebookPageUrl`
* is optional
* type: `string`
* defined in this schema

### xdm:facebookPageUrl Type


`string`






## xdm:industry
### Industry

The industry that this organization is a part of. This is a free-form field, and it is advisable to use a structured value for queries or to use the `xdm:classifier` property.

`xdm:industry`
* is optional
* type: `string`
* defined in this schema

### xdm:industry Type


`string`






## xdm:jigsaw
### Jigsaw

Data.com Key.

`xdm:jigsaw`
* is optional
* type: `string`
* defined in this schema

### xdm:jigsaw Type


`string`






## xdm:linkedinPageUrl
### Linkedinin Page URL

Website link to the Linkedin account of the account

`xdm:linkedinPageUrl`
* is optional
* type: `string`
* defined in this schema

### xdm:linkedinPageUrl Type


`string`






## xdm:logoUrl
### Logo URL

Path to be combined with the URL of a Salesforce instance (for example, https://yourInstance.salesforce.com/) to generate a URL to request the social network profile image associated with the account. Generated URL returns an HTTP redirect (code 302) to the social network profile image for the account.

`xdm:logoUrl`
* is optional
* type: `string`
* defined in this schema

### xdm:logoUrl Type


`string`






## xdm:marketSegment
### Market segment

The named market segment that the organization participates in. This is a free-form field, and it is advisable to use a structured value for queries or to use the `xdm:identifier` property.

`xdm:marketSegment`
* is optional
* type: `string`
* defined in this schema

### xdm:marketSegment Type


`string`






## xdm:numberOfEmployees
### Number of employees

The number of employees at the organization.

`xdm:numberOfEmployees`
* is optional
* type: `integer`
* defined in this schema

### xdm:numberOfEmployees Type


`integer`






## xdm:organizationType
### Type of Organizations

Label describing the type of organization

`xdm:organizationType`
* is optional
* type: `string`
* defined in this schema

### xdm:organizationType Type


`string`






## xdm:primaryEmailDomain
### Primary Email Domain

`xdm:primaryEmailDomain`
* is optional
* type: `string`
* defined in this schema

### xdm:primaryEmailDomain Type


`string`






## xdm:rating
### Rating

The calculated score or star rating for this organization. `1` indicates the maximum possible rating, `0` the minimum possible rating.

`xdm:rating`
* is optional
* type: `number`
* defined in this schema

### xdm:rating Type


`number`
* minimum value: `0`
* maximum value: `1`





## xdm:tickerSymbol
### Ticker Symbol

The stock market symbol for this account. Maximum of 20 characters.

`xdm:tickerSymbol`
* is optional
* type: `string`
* defined in this schema

### xdm:tickerSymbol Type


`string`






## xdm:twitterHandleUrl
### Twitter handle URL

Website link to the twitter handle of the account

`xdm:twitterHandleUrl`
* is optional
* type: `string`
* defined in this schema

### xdm:twitterHandleUrl Type


`string`






## xdm:website
### Website URL

The URL of the organization's website.

`xdm:website`
* is optional
* type: `string`
* defined in this schema

### xdm:website Type


`string`





