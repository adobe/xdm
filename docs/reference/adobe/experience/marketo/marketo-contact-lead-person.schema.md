
# Marketo Contact/Lead Person Schema Schema

```
https://ns.adobe.com/experience/marketo/marketo-contact-lead-person
```

Marketo Person schema for use within  B2B space. Includes other Profile mixins like person/work details, opt in/out etc.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/marketo/marketo-contact-lead-person.schema.json](adobe/experience/marketo/marketo-contact-lead-person.schema.json) |
## Schema Hierarchy

* Marketo Contact/Lead Person Schema `https://ns.adobe.com/experience/marketo/marketo-contact-lead-person`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Postal address](../../../datatypes/address.schema.md) `https://ns.adobe.com/xdm/common/address`


## Marketo Contact/Lead Person Schema Example
```json
{
  "marketo:marketoIntegrationLogID": "ABC1111",
  "marketo:anonymousHostname": "",
  "marketo:isBlocked": false,
  "marketo:blockedCause": "",
  "marketo:isEmailInvalid": false,
  "marketo:emailInvalidCause": "",
  "marketo:employeePositionID": "",
  "marketo:inferredAddress": {
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
  },
  "marketo:inferredCompany": "",
  "marketo:inferredCompanyStatus": "",
  "marketo:inferredMetropolitanArea": "",
  "marketo:inferredPhoneAreaCode": "",
  "marketo:isAnonymous": false,
  "marketo:isCustomer": false,
  "marketo:isEmployee": false,
  "marketo:isPartner": true,
  "marketo:isPrivate": false,
  "marketo:accountID": "",
  "marketo:marketingSuspended": false,
  "marketo:marketingSuspendedCause": "",
  "marketo:notes": "",
  "marketo:orgID": "",
  "marketo:primaryLeadInterestID": false,
  "marketo:registerSourceInfo": "",
  "marketo:registerSourceType": "",
  "marketo:salesContactOwnerID": "",
  "marketo:originalReferrer": "",
  "marketo:originalSearchEngine": "",
  "marketo:originalSearchPhrase": "",
  "marketo:originalSourceInfo": "",
  "marketo:originalSourceType": ""
}
```

# Marketo Contact/Lead Person Schema Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [marketo:accountID](#marketoaccountid) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:anonymousHostname](#marketoanonymoushostname) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:blockedCause](#marketoblockedcause) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:emailInvalidCause](#marketoemailinvalidcause) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:employeePositionID](#marketoemployeepositionid) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:inferredAddress](#marketoinferredaddress) | Postal address | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:inferredCompany](#marketoinferredcompany) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:inferredCompanyStatus](#marketoinferredcompanystatus) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:inferredMetropolitanArea](#marketoinferredmetropolitanarea) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:inferredPhoneAreaCode](#marketoinferredphoneareacode) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:isAnonymous](#marketoisanonymous) | `boolean` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:isBlocked](#marketoisblocked) | `boolean` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:isCustomer](#marketoiscustomer) | `boolean` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:isEmailInvalid](#marketoisemailinvalid) | `boolean` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:isEmployee](#marketoisemployee) | `boolean` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:isPartner](#marketoispartner) | `boolean` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:isPrivate](#marketoisprivate) | `boolean` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:marketingSuspended](#marketomarketingsuspended) | `boolean` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:marketingSuspendedCause](#marketomarketingsuspendedcause) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:marketoIntegrationLogID](#marketomarketointegrationlogid) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:notes](#marketonotes) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:orgID](#marketoorgid) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:originalReferrer](#marketooriginalreferrer) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:originalSearchEngine](#marketooriginalsearchengine) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:originalSearchPhrase](#marketooriginalsearchphrase) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:originalSourceInfo](#marketooriginalsourceinfo) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:originalSourceType](#marketooriginalsourcetype) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:primaryLeadInterestID](#marketoprimaryleadinterestid) | `boolean` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:registerSourceInfo](#marketoregistersourceinfo) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:registerSourceType](#marketoregistersourcetype) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| [marketo:salesContactOwnerID](#marketosalescontactownerid) | `string` | Optional | Marketo Contact/Lead Person Schema (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## marketo:accountID
### Marketo Account id

Unique indentier for Marketo account.

`marketo:accountID`
* is optional
* type: `string`
* defined in this schema

### marketo:accountID Type


`string`






## marketo:anonymousHostname
### Anonymous Hostname

`marketo:anonymousHostname`
* is optional
* type: `string`
* defined in this schema

### marketo:anonymousHostname Type


`string`






## marketo:blockedCause
### Blocked Cause

`marketo:blockedCause`
* is optional
* type: `string`
* defined in this schema

### marketo:blockedCause Type


`string`






## marketo:emailInvalidCause
### Email Invalid Cause

Reason for invalidity of email.

`marketo:emailInvalidCause`
* is optional
* type: `string`
* defined in this schema

### marketo:emailInvalidCause Type


`string`






## marketo:employeePositionID
### Employee Position Id

`marketo:employeePositionID`
* is optional
* type: `string`
* defined in this schema

### marketo:employeePositionID Type


`string`






## marketo:inferredAddress
### Inferred Address

Address details inferred by reverse IP lookup of the lead’s first recorded web visit.

`marketo:inferredAddress`
* is optional
* type: Postal address
* defined in this schema

### marketo:inferredAddress Type


* [Postal address](../../../datatypes/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## marketo:inferredCompany
### Inferred Company

Company name inferred by reverse IP lookup of the lead’s first recorded web visit.

`marketo:inferredCompany`
* is optional
* type: `string`
* defined in this schema

### marketo:inferredCompany Type


`string`






## marketo:inferredCompanyStatus
### Inferred Company Status

Status of the company name inferred by reverse IP lookup of the lead’s first recorded web visit.

`marketo:inferredCompanyStatus`
* is optional
* type: `string`
* defined in this schema

### marketo:inferredCompanyStatus Type


`string`






## marketo:inferredMetropolitanArea
### Inferred Metropolitan Area

Metropolitan area inferred by reverse IP lookup of lead’s first recorded web visit.

`marketo:inferredMetropolitanArea`
* is optional
* type: `string`
* defined in this schema

### marketo:inferredMetropolitanArea Type


`string`






## marketo:inferredPhoneAreaCode
### Inferred Phone Area Code

Phone area code inferred by reverse IP lookup of lead’s first recorded web visit.

`marketo:inferredPhoneAreaCode`
* is optional
* type: `string`
* defined in this schema

### marketo:inferredPhoneAreaCode Type


`string`






## marketo:isAnonymous
### Anonymous Indicator

Anonymous status of lead record. System managed.

`marketo:isAnonymous`
* is optional
* type: `boolean`
* defined in this schema

### marketo:isAnonymous Type


`boolean`





## marketo:isBlocked
### Blocked Indicator

`marketo:isBlocked`
* is optional
* type: `boolean`
* defined in this schema

### marketo:isBlocked Type


`boolean`





## marketo:isCustomer
### Customer Indicator

`marketo:isCustomer`
* is optional
* type: `boolean`
* defined in this schema

### marketo:isCustomer Type


`boolean`





## marketo:isEmailInvalid
### Invalid Email Indicator

Indicator whether the email is valid or not.

`marketo:isEmailInvalid`
* is optional
* type: `boolean`
* defined in this schema

### marketo:isEmailInvalid Type


`boolean`





## marketo:isEmployee
### Employee Indicator

Indicator if the contact/lead is an employee or not.

`marketo:isEmployee`
* is optional
* type: `boolean`
* defined in this schema

### marketo:isEmployee Type


`boolean`





## marketo:isPartner
### Partner Indicator

Indicator if the contact/lead is a partner or not.

`marketo:isPartner`
* is optional
* type: `boolean`
* defined in this schema

### marketo:isPartner Type


`boolean`





## marketo:isPrivate
### Private Indicator

`marketo:isPrivate`
* is optional
* type: `boolean`
* defined in this schema

### marketo:isPrivate Type


`boolean`





## marketo:marketingSuspended
### Marketing Suspended

`marketo:marketingSuspended`
* is optional
* type: `boolean`
* defined in this schema

### marketo:marketingSuspended Type


`boolean`





## marketo:marketingSuspendedCause
### Marketing Suspended Cause

`marketo:marketingSuspendedCause`
* is optional
* type: `string`
* defined in this schema

### marketo:marketingSuspendedCause Type


`string`






## marketo:marketoIntegrationLogID
### Marketo Integration Log Id

Marketo integration log id.

`marketo:marketoIntegrationLogID`
* is optional
* type: `string`
* defined in this schema

### marketo:marketoIntegrationLogID Type


`string`






## marketo:notes
### Notes

`marketo:notes`
* is optional
* type: `string`
* defined in this schema

### marketo:notes Type


`string`






## marketo:orgID
### Organization ID

Identifier of the Organization.

`marketo:orgID`
* is optional
* type: `string`
* defined in this schema

### marketo:orgID Type


`string`






## marketo:originalReferrer
### Original Referrer

The original referrer is typically the page that leads to a form fill out.

`marketo:originalReferrer`
* is optional
* type: `string`
* defined in this schema

### marketo:originalReferrer Type


`string`






## marketo:originalSearchEngine
### Original Search Engine

Search engine that the original referrer used.

`marketo:originalSearchEngine`
* is optional
* type: `string`
* defined in this schema

### marketo:originalSearchEngine Type


`string`






## marketo:originalSearchPhrase
### Original Search Phrase

Search phrase used by the original referrer.

`marketo:originalSearchPhrase`
* is optional
* type: `string`
* defined in this schema

### marketo:originalSearchPhrase Type


`string`






## marketo:originalSourceInfo
### Original Source Info

`marketo:originalSourceInfo`
* is optional
* type: `string`
* defined in this schema

### marketo:originalSourceInfo Type


`string`






## marketo:originalSourceType
### Original Source Type

`marketo:originalSourceType`
* is optional
* type: `string`
* defined in this schema

### marketo:originalSourceType Type


`string`






## marketo:primaryLeadInterestID
### Primary Lead Interest Id

`marketo:primaryLeadInterestID`
* is optional
* type: `boolean`
* defined in this schema

### marketo:primaryLeadInterestID Type


`boolean`





## marketo:registerSourceInfo
### Register Source Info

`marketo:registerSourceInfo`
* is optional
* type: `string`
* defined in this schema

### marketo:registerSourceInfo Type


`string`






## marketo:registerSourceType
### Register Source Type

`marketo:registerSourceType`
* is optional
* type: `string`
* defined in this schema

### marketo:registerSourceType Type


`string`






## marketo:salesContactOwnerID
### Sales Contact Owner Id

`marketo:salesContactOwnerID`
* is optional
* type: `string`
* defined in this schema

### marketo:salesContactOwnerID Type


`string`





