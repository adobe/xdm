
# XDM Business Person Details Schema

```
https://ns.adobe.com/xdm/mixins/b2b-person-details
```

This mixin is used to capture B2B Person specific attributes. A B2B Person could be a contact/lead etc.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/b2b-person-details.schema.json](mixins/profile/b2b-person-details.schema.json) |
## Schema Hierarchy

* XDM Business Person Details `https://ns.adobe.com/xdm/mixins/b2b-person-details`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [OptInOut](../../datatypes/optinout.schema.md) `https://ns.adobe.com/xdm/context/optinout`
  * [Account Organization](../../datatypes/account-organization.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-account-organization`
  * [Postal address](../../datatypes/address.schema.md) `https://ns.adobe.com/xdm/common/address`
  * [Personal Contact Details](profile-personal-details.schema.md) `https://ns.adobe.com/xdm/context/profile-personal-details`
  * [Demographic Details](profile-person-details.schema.md) `https://ns.adobe.com/xdm/context/profile-person-details`
  * [Profile Other Work Details](profile-other-work-details.schema.md) `https://ns.adobe.com/xdm/context/profile-other-work-details`
  * [Work Contact Details](profile-work-details.schema.md) `https://ns.adobe.com/xdm/context/profile-work-details`
  * [IdentityMap](../shared/identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`
  * [External Source System Audit Details Mixin](../shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Business Person Details Example
```json
{}
```

# XDM Business Person Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:accountID](#xdmaccountid) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:anonymousHostname](#xdmanonymoushostname) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:blockedCause](#xdmblockedcause) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:convertedAccountID](#xdmconvertedaccountid) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:convertedContactID](#xdmconvertedcontactid) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:convertedDate](#xdmconverteddate) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:convertedOpportunityID](#xdmconvertedopportunityid) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:extendedWorkDetails](#xdmextendedworkdetails) | `object` | Optional | [Profile Other Work Details](profile-other-work-details.schema.md#xdmextendedworkdetails) |
| [xdm:faxPhone](#xdmfaxphone) | Phone number | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmfaxphone) |
| [xdm:homeAddress](#xdmhomeaddress) | Postal address | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmhomeaddress) |
| [xdm:homePhone](#xdmhomephone) | Phone number | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmhomephone) |
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](../shared/identitymap.schema.md#xdmidentitymap) |
| [xdm:inferredAddress](#xdminferredaddress) | Postal address | Optional | XDM Business Person Details (this schema) |
| [xdm:inferredCompany](#xdminferredcompany) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:inferredCompanyStatus](#xdminferredcompanystatus) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:inferredMetropolitanArea](#xdminferredmetropolitanarea) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:inferredPhoneAreaCode](#xdminferredphoneareacode) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:isBlocked](#xdmisblocked) | `boolean` | Optional | XDM Business Person Details (this schema) |
| [xdm:isConverted](#xdmisconverted) | `boolean` | Optional | XDM Business Person Details (this schema) |
| [xdm:isMarketingSuspended](#xdmismarketingsuspended) | `boolean` | Optional | XDM Business Person Details (this schema) |
| [xdm:leadOrganization](#xdmleadorganization) | Account Organization | Optional | XDM Business Person Details (this schema) |
| [xdm:marketingSuspendedCause](#xdmmarketingsuspendedcause) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:mobilePhone](#xdmmobilephone) | Phone number | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmmobilephone) |
| [xdm:organizations](#xdmorganizations) | `string[]` | Optional | [Work Contact Details](profile-work-details.schema.md#xdmorganizations) |
| [xdm:otherAddress](#xdmotheraddress) | Postal address | Optional | [Profile Other Work Details](profile-other-work-details.schema.md#xdmotheraddress) |
| [xdm:otherPhone](#xdmotherphone) | Phone number | Optional | [Profile Other Work Details](profile-other-work-details.schema.md#xdmotherphone) |
| [xdm:person](#xdmperson) | Person | Optional | [Demographic Details](profile-person-details.schema.md#xdmperson) |
| [xdm:personGroupID](#xdmpersongroupid) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:personID](#xdmpersonid) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:personOptInOut](#xdmpersonoptinout) | OptInOut | Optional | XDM Business Person Details (this schema) |
| [xdm:personOwnerID](#xdmpersonownerid) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:personScore](#xdmpersonscore) | `number` | Optional | XDM Business Person Details (this schema) |
| [xdm:personSource](#xdmpersonsource) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:personStatus](#xdmpersonstatus) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:personType](#xdmpersontype) | `string` | Optional | XDM Business Person Details (this schema) |
| [xdm:personalEmail](#xdmpersonalemail) | Email address | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmpersonalemail) |
| [xdm:workAddress](#xdmworkaddress) | Postal address | Optional | [Work Contact Details](profile-work-details.schema.md#xdmworkaddress) |
| [xdm:workEmail](#xdmworkemail) | Email address | Optional | [Work Contact Details](profile-work-details.schema.md#xdmworkemail) |
| [xdm:workPhone](#xdmworkphone) | Phone number | Optional | [Work Contact Details](profile-work-details.schema.md#xdmworkphone) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:accountID
### Contact Account id

ID of the account that’s the parent of this person.

`xdm:accountID`
* is optional
* type: `string`
* defined in this schema

### xdm:accountID Type


`string`






## xdm:anonymousHostname
### Anonymous Hostname

Anonymous hostname.

`xdm:anonymousHostname`
* is optional
* type: `string`
* defined in this schema

### xdm:anonymousHostname Type


`string`






## xdm:blockedCause
### Blocked Cause

Reason why the person is blocked.

`xdm:blockedCause`
* is optional
* type: `string`
* defined in this schema

### xdm:blockedCause Type


`string`






## xdm:convertedAccountID
### Converted Account ID

Account Id if the lead was successfully converted.

`xdm:convertedAccountID`
* is optional
* type: `string`
* defined in this schema

### xdm:convertedAccountID Type


`string`






## xdm:convertedContactID
### Converted Contact ID

Contact Id if the lead was successfully converted.

`xdm:convertedContactID`
* is optional
* type: `string`
* defined in this schema

### xdm:convertedContactID Type


`string`






## xdm:convertedDate
### Converted Date

Date of conversion if the lead was successfully converted.

`xdm:convertedDate`
* is optional
* type: `string`
* defined in this schema

### xdm:convertedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:convertedOpportunityID
### Converted Opportunity ID

Opportunity Id if the lead was successfully converted.

`xdm:convertedOpportunityID`
* is optional
* type: `string`
* defined in this schema

### xdm:convertedOpportunityID Type


`string`






## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details Mixin](../shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../../datatypes/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`





## xdm:extendedWorkDetails
### Some Additional Person Work Details

`xdm:extendedWorkDetails`
* is optional
* type: `object`
* defined in [Profile Other Work Details](profile-other-work-details.schema.md#xdmextendedworkdetails)

### xdm:extendedWorkDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:assistantDetails`| object | Optional |
| `xdm:departments`| array | Optional |
| `xdm:jobTitle`| string | Optional |
| `xdm:photoUrl`| string | Optional |
| `xdm:reportsToID`| string | Optional |



#### xdm:assistantDetails
##### Assitant Details

undefined

`xdm:assistantDetails`
* is optional
* type: `object`

##### xdm:assistantDetails Type

Unknown type `object`.

```json
{
  "type": "object",
  "title": "Assitant Details",
  "properties": {
    "xdm:name": {
      "title": "Assistant Name",
      "$ref": "https://ns.adobe.com/xdm/context/person-name",
      "description": "Person's assistant full name."
    },
    "xdm:phone": {
      "title": "Assistant Phone",
      "$ref": "https://ns.adobe.com/xdm/context/phonenumber",
      "description": "Person's assistant phone number."
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:departments
##### Department Name

Department name where the person works.

`xdm:departments`
* is optional
* type: `string[]`


##### xdm:departments Type


Array type: `string[]`

All items must be of the type:
`string`











#### xdm:jobTitle
##### Job Title

Job title of the person.

`xdm:jobTitle`
* is optional
* type: `string`

##### xdm:jobTitle Type


`string`








#### xdm:photoUrl
##### Photo Url

Photo url of the person.

`xdm:photoUrl`
* is optional
* type: `string`

##### xdm:photoUrl Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))








#### xdm:reportsToID
##### Reports To Id

Identifier of the Reporting Manager.

`xdm:reportsToID`
* is optional
* type: `string`

##### xdm:reportsToID Type


`string`











## xdm:faxPhone
### Fax phone

Fax phone number.

`xdm:faxPhone`
* is optional
* type: Phone number
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmfaxphone)

### xdm:faxPhone Type


* [Phone number](../../datatypes/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:homeAddress
### Home address

A home postal address.

`xdm:homeAddress`
* is optional
* type: Postal address
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmhomeaddress)

### xdm:homeAddress Type


* [Postal address](../../datatypes/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:homePhone
### Home phone

Home phone number.

`xdm:homePhone`
* is optional
* type: Phone number
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmhomephone)

### xdm:homePhone Type


* [Phone number](../../datatypes/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:identityMap


`xdm:identityMap`
* is optional
* type: `object`
* defined in [IdentityMap](../shared/identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:inferredAddress
### Inferred Address

Address details inferred by reverse IP lookup of the lead’s first recorded web visit.

`xdm:inferredAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:inferredAddress Type


* [Postal address](../../datatypes/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:inferredCompany
### Inferred Company

Company name inferred by reverse IP lookup of the lead’s first recorded web visit.

`xdm:inferredCompany`
* is optional
* type: `string`
* defined in this schema

### xdm:inferredCompany Type


`string`






## xdm:inferredCompanyStatus
### Inferred Company Status

Status of the company name inferred by reverse IP lookup of the lead’s first recorded web visit.

`xdm:inferredCompanyStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:inferredCompanyStatus Type


`string`






## xdm:inferredMetropolitanArea
### Inferred Metropolitan Area

Metropolitan area inferred by reverse IP lookup of lead’s first recorded web visit.

`xdm:inferredMetropolitanArea`
* is optional
* type: `string`
* defined in this schema

### xdm:inferredMetropolitanArea Type


`string`






## xdm:inferredPhoneAreaCode
### Inferred Phone Area Code

Phone area code inferred by reverse IP lookup of lead’s first recorded web visit.

`xdm:inferredPhoneAreaCode`
* is optional
* type: `string`
* defined in this schema

### xdm:inferredPhoneAreaCode Type


`string`






## xdm:isBlocked
### Blocked Indicator

Indicator if the person is blocked or not.

`xdm:isBlocked`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isBlocked Type


`boolean`





## xdm:isConverted
### Converted Indicator

Indicates whether the Lead was successfully converted or not.

`xdm:isConverted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isConverted Type


`boolean`





## xdm:isMarketingSuspended
### Marketing Suspended Indicator

Marketing suspended flag.

`xdm:isMarketingSuspended`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isMarketingSuspended Type


`boolean`





## xdm:leadOrganization
### Lead Organization Properties

`xdm:leadOrganization`
* is optional
* type: Account Organization
* defined in this schema

### xdm:leadOrganization Type


* [Account Organization](../../datatypes/account-organization.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-account-organization`





## xdm:marketingSuspendedCause
### Marketing Suspended Cause

Reason why the person is suspended for any marketing purposes.

`xdm:marketingSuspendedCause`
* is optional
* type: `string`
* defined in this schema

### xdm:marketingSuspendedCause Type


`string`






## xdm:mobilePhone
### Mobile phone

Mobile phone number.

`xdm:mobilePhone`
* is optional
* type: Phone number
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmmobilephone)

### xdm:mobilePhone Type


* [Phone number](../../datatypes/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:organizations
### Organizations

`xdm:organizations`
* is optional
* type: `string[]`

* defined in [Work Contact Details](profile-work-details.schema.md#xdmorganizations)

### xdm:organizations Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:otherAddress
### Other Address

Other/Alternate postal address of the person.

`xdm:otherAddress`
* is optional
* type: Postal address
* defined in [Profile Other Work Details](profile-other-work-details.schema.md#xdmotheraddress)

### xdm:otherAddress Type


* [Postal address](../../datatypes/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:otherPhone
### Other Phone

Other/Alternate phone number of the person.

`xdm:otherPhone`
* is optional
* type: Phone number
* defined in [Profile Other Work Details](profile-other-work-details.schema.md#xdmotherphone)

### xdm:otherPhone Type


* [Phone number](../../datatypes/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:person
### Person

An individual actor, contact, or owner.

`xdm:person`
* is optional
* type: Person
* defined in [Demographic Details](profile-person-details.schema.md#xdmperson)

### xdm:person Type


* [Person](../../datatypes/person.schema.md) – `https://ns.adobe.com/xdm/context/person`





## xdm:personGroupID
### Person Group ID

Group identifier for the person.

`xdm:personGroupID`
* is optional
* type: `string`
* defined in this schema

### xdm:personGroupID Type


`string`






## xdm:personID
### Person ID

Unique identifier of B2B person.

`xdm:personID`
* is optional
* type: `string`
* defined in this schema

### xdm:personID Type


`string`






## xdm:personOptInOut
### Person Preferences

Holds opt out values for different channels as selected by the person.

`xdm:personOptInOut`
* is optional
* type: OptInOut
* defined in this schema

### xdm:personOptInOut Type


* [OptInOut](../../datatypes/optinout.schema.md) – `https://ns.adobe.com/xdm/context/optinout`





## xdm:personOwnerID
### Person Owner ID

Person owner id.

`xdm:personOwnerID`
* is optional
* type: `string`
* defined in this schema

### xdm:personOwnerID Type


`string`






## xdm:personScore
### Person Score

A Score generated for a person by the CRM system.

`xdm:personScore`
* is optional
* type: `number`
* defined in this schema

### xdm:personScore Type


`number`






## xdm:personSource
### Person Source

Source from where the information regarding the person was received.

`xdm:personSource`
* is optional
* type: `string`
* defined in this schema

### xdm:personSource Type


`string`






## xdm:personStatus
### Person Status

Field recording the current marketing/sales status of the Person.

`xdm:personStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:personStatus Type


`string`






## xdm:personType
### Person Type

Type of the B2B person.

`xdm:personType`
* is optional
* type: `string`
* defined in this schema

### xdm:personType Type


`string`






## xdm:personalEmail
### Personal email

A personal email address.

`xdm:personalEmail`
* is optional
* type: Email address
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmpersonalemail)

### xdm:personalEmail Type


* [Email address](../../datatypes/emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/emailaddress`





## xdm:workAddress
### Work Address

A work postal address.

`xdm:workAddress`
* is optional
* type: Postal address
* defined in [Work Contact Details](profile-work-details.schema.md#xdmworkaddress)

### xdm:workAddress Type


* [Postal address](../../datatypes/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:workEmail
### Work Email

A work email address.

`xdm:workEmail`
* is optional
* type: Email address
* defined in [Work Contact Details](profile-work-details.schema.md#xdmworkemail)

### xdm:workEmail Type


* [Email address](../../datatypes/emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/emailaddress`





## xdm:workPhone
### Work Phone

Work phone number.

`xdm:workPhone`
* is optional
* type: Phone number
* defined in [Work Contact Details](profile-work-details.schema.md#xdmworkphone)

### xdm:workPhone Type


* [Phone number](../../datatypes/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`




