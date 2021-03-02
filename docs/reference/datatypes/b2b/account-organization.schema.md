
# Account Organization Schema

```
https://ns.adobe.com/xdm/datatypes/b2b-account-organization
```

Commonly used organizational attributes for a B2B account such as number of employees, market segment, industry, rating, tickersymbol etc.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/b2b/account-organization.schema.json](datatypes/b2b/account-organization.schema.json) |
## Schema Hierarchy

* Account Organization `https://ns.adobe.com/xdm/datatypes/b2b-account-organization`
  * [Currency](../currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`


## Account Organization Example
```json
{}
```

# Account Organization Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:DUNSNumber](#xdmdunsnumber) | `string` | Optional | Account Organization (this schema) |
| [xdm:NAICSCode](#xdmnaicscode) | `string` | Optional | Account Organization (this schema) |
| [xdm:NAICSDescription](#xdmnaicsdescription) | `string` | Optional | Account Organization (this schema) |
| [xdm:SICCode](#xdmsiccode) | `string` | Optional | Account Organization (this schema) |
| [xdm:SICDescription](#xdmsicdescription) | `string` | Optional | Account Organization (this schema) |
| [xdm:annualRevenue](#xdmannualrevenue) | Currency | Optional | Account Organization (this schema) |
| [xdm:companyProductAndServices](#xdmcompanyproductandservices) | `string` | Optional | Account Organization (this schema) |
| [xdm:facebookPageUrl](#xdmfacebookpageurl) | `string` | Optional | Account Organization (this schema) |
| [xdm:industry](#xdmindustry) | `string` | Optional | Account Organization (this schema) |
| [xdm:jigsaw](#xdmjigsaw) | `string` | Optional | Account Organization (this schema) |
| [xdm:linkedinPageUrl](#xdmlinkedinpageurl) | `string` | Optional | Account Organization (this schema) |
| [xdm:logoUrl](#xdmlogourl) | `string` | Optional | Account Organization (this schema) |
| [xdm:marketSegment](#xdmmarketsegment) | `string` | Optional | Account Organization (this schema) |
| [xdm:numberOfEmployees](#xdmnumberofemployees) | `integer` | Optional | Account Organization (this schema) |
| [xdm:organizationType](#xdmorganizationtype) | `string` | Optional | Account Organization (this schema) |
| [xdm:primaryEmailDomain](#xdmprimaryemaildomain) | `string` | Optional | Account Organization (this schema) |
| [xdm:rating](#xdmrating) | `number` | Optional | Account Organization (this schema) |
| [xdm:tickerSymbol](#xdmtickersymbol) | `string` | Optional | Account Organization (this schema) |
| [xdm:twitterHandleUrl](#xdmtwitterhandleurl) | `string` | Optional | Account Organization (this schema) |
| [xdm:website](#xdmwebsite) | `string` | Optional | Account Organization (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:DUNSNumber
### Dun &amp; Bradstreet D-U-N-S Number

The number for the account in the Dun & Bradstreet database.

`xdm:DUNSNumber`
* is optional
* type: `string`
* defined in this schema

### xdm:DUNSNumber Type


`string`






## xdm:NAICSCode
### NAICS Code

The code for the account's industry within the North American Industry Classification System.

`xdm:NAICSCode`
* is optional
* type: `string`
* defined in this schema

### xdm:NAICSCode Type


`string`






## xdm:NAICSDescription
### NAICS Description

The description for the account's industry based on its NAICS code.

`xdm:NAICSDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:NAICSDescription Type


`string`






## xdm:SICCode
### SIC Code

The code for the account's industry within the Standard Industrial Classification system.

`xdm:SICCode`
* is optional
* type: `string`
* defined in this schema

### xdm:SICCode Type


`string`






## xdm:SICDescription
### SIC Description

The description for the account's industry based on its SIC code.

`xdm:SICDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:SICDescription Type


`string`






## xdm:annualRevenue
### Annual Revenue

Estimated annual revenue of the account.

`xdm:annualRevenue`
* is optional
* type: Currency
* defined in this schema

### xdm:annualRevenue Type


* [Currency](../currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:companyProductAndServices
### Company Product and Services

Description of the account's product and/or services.

`xdm:companyProductAndServices`
* is optional
* type: `string`
* defined in this schema

### xdm:companyProductAndServices Type


`string`






## xdm:facebookPageUrl
### Facebook Page URL

The URL of the account's Facebook page.

`xdm:facebookPageUrl`
* is optional
* type: `string`
* defined in this schema

### xdm:facebookPageUrl Type


`string`






## xdm:industry
### Industry

Industry of the account.

`xdm:industry`
* is optional
* type: `string`
* defined in this schema

### xdm:industry Type


`string`






## xdm:jigsaw
### Jigsaw

The key for the account in Data.com.

`xdm:jigsaw`
* is optional
* type: `string`
* defined in this schema

### xdm:jigsaw Type


`string`






## xdm:linkedinPageUrl
### Linkedinin Page URL

The URL of the account's LinkedIn page.

`xdm:linkedinPageUrl`
* is optional
* type: `string`
* defined in this schema

### xdm:linkedinPageUrl Type


`string`






## xdm:logoUrl
### Logo URL

URL for the image of the account's logo.

`xdm:logoUrl`
* is optional
* type: `string`
* defined in this schema

### xdm:logoUrl Type


`string`






## xdm:marketSegment
### Market segment

Market segment of the account.

`xdm:marketSegment`
* is optional
* type: `string`
* defined in this schema

### xdm:marketSegment Type


`string`






## xdm:numberOfEmployees
### Number of employees

Number of employees of the account.

`xdm:numberOfEmployees`
* is optional
* type: `integer`
* defined in this schema

### xdm:numberOfEmployees Type


`integer`






## xdm:organizationType
### Type of Organizations

Label describing the type of organization.

`xdm:organizationType`
* is optional
* type: `string`
* defined in this schema

### xdm:organizationType Type


`string`






## xdm:primaryEmailDomain
### Primary Email Domain

The primary domain of email addresses associated with the account.

`xdm:primaryEmailDomain`
* is optional
* type: `string`
* defined in this schema

### xdm:primaryEmailDomain Type


`string`






## xdm:rating
### Rating

The calculated score or star rating for this account. `1` indicates the maximum possible rating, `0` the minimum possible rating.

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

The stock market symbol for this account.

`xdm:tickerSymbol`
* is optional
* type: `string`
* defined in this schema

### xdm:tickerSymbol Type


`string`






## xdm:twitterHandleUrl
### Twitter handle URL

The URL of the account's Twitter profile.

`xdm:twitterHandleUrl`
* is optional
* type: `string`
* defined in this schema

### xdm:twitterHandleUrl Type


`string`






## xdm:website
### Website URL

The URL of the account's website.

`xdm:website`
* is optional
* type: `string`
* defined in this schema

### xdm:website Type


`string`





