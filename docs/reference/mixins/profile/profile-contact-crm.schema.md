
# XDM Business Contact Schema

```
https://ns.adobe.com/xdm/context/profile-contact-crm
```

This mixin is used to capture information regarding person details in context of Business to Business contact.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [mixins/profile/profile-contact-crm.schema.json](mixins/profile/profile-contact-crm.schema.json) |
## Schema Hierarchy

* XDM Business Contact `https://ns.adobe.com/xdm/context/profile-contact-crm`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [External Source System Audit Details Mixin](../shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`
  * [IdentityMap](../shared/identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`
  * [Demographic Details](profile-person-details.schema.md) `https://ns.adobe.com/xdm/context/profile-person-details`
  * [Personal Contact Details](profile-personal-details.schema.md) `https://ns.adobe.com/xdm/context/profile-personal-details`
  * [Work Contact Details](profile-work-details.schema.md) `https://ns.adobe.com/xdm/context/profile-work-details`
  * [Profile Other Work Details](profile-other-work-details.schema.md) `https://ns.adobe.com/xdm/context/profile-other-work-details`
  * [Profile owning entity details](profile-owning-entities.schema.md) `https://ns.adobe.com/xdm/context/profile-owning-entities`
  * [B2B Contact](../../datatypes/b2b-contact.schema.md) `https://ns.adobe.com/xdm/common/b2b-contact`


## XDM Business Contact Example
```json
{
  "xdm:contact": {
    "xdm:ID": "11110000",
    "xdm:accountID": "",
    "xdm:leadSource": "Lead Source",
    "xdm:extendedContact": {
      "xdm:type": "",
      "xdm:ownerID": "",
      "xdm:isDeleted": false,
      "xdm:emailBouncedDate": "2018-12-20T15:52:25+00:00",
      "xdm:emailBouncedReason": "Bounced Reason Here",
      "xdm:isEmailBounced": true,
      "xdm:description": "Contact/Lead description here",
      "xdm:status": "Status",
      "xdm:timezone": "",
      "xdm:jigsaw": "12345"
    },
    "xdm:identityMap": {
      "EMAIL": [
        {
          "xdm:id": "jane@doe.com"
        }
      ]
    },
    "xdm:preferences": {
      "https://ns.adobe.com/xdm/channels/email": "pending",
      "https://ns.adobe.com/xdm/channels/phone": "out",
      "https://ns.adobe.com/xdm/channels/sms": "in",
      "https://ns.adobe.com/xdm/channels/fax": "not_provided",
      "https://ns.adobe.com/xdm/channels/direct-mail": "not_provided",
      "https://ns.adobe.com/xdm/channels/apns": "not_provided",
      "xdm:globalOptout": false,
      "xdm:optOutDetails": {
        "xdm:email": {
          "xdm:optOutReason": "Reason here",
          "xdm:optOutDate": "2018-01-20T15:52:25+00:00"
        },
        "xdm:phone": {
          "xdm:optOutReason": "Reason here",
          "xdm:optOutDate": "2018-01-20T15:52:25+00:00"
        }
      }
    }
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
  "xdm:name": {
    "xdm:firstName": "Jane",
    "xdm:middleName": "F",
    "xdm:lastName": "Doe",
    "xdm:fullName": "Jane F. Doe"
  },
  "xdm:birthDate": "1996-10-28",
  "xdm:homePhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active"
  },
  "xdm:workAddress": {
    "@id": "https://data.adobe.io/entities/address/123",
    "xdm:primary": false,
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
  },
  "xdm:workEmail": {
    "xdm:primary": false,
    "xdm:address": "jsmith@xyzinc.com",
    "xdm:label": "John Smith",
    "xdm:type": "work",
    "xdm:status": "active"
  },
  "xdm:workPhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active"
  },
  "xdm:otherAddress": {
    "@id": "https://data.adobe.io/entities/address/234",
    "xdm:primary": false,
    "xdm:street1": "100 Park Ave",
    "xdm:city": "San Jose",
    "xdm:stateProvince": "US-CA",
    "xdm:postalCode": "95110",
    "xdm:country": "United States",
    "xdm:countryCode": "US",
    "schema:latitude": 37.3382,
    "schema:longitude": -121.8863,
    "xdm:status": "active",
    "xdm:lastVerifiedDate": "2018-01-02"
  },
  "xdm:otherPhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-7777",
    "xdm:status": "active"
  },
  "xdm:extendedWorkDetails": {
    "xdm:assistantDetails": {
      "xdm:name": {
        "xdm:firstName": "John",
        "xdm:middleName": "S",
        "xdm:lastName": "Doe",
        "xdm:fullName": "John S. Doe"
      },
      "xdm:phone": {
        "xdm:primary": true,
        "xdm:number": "1-408-888-7777",
        "xdm:status": "active"
      }
    },
    "xdm:reportsToID": "RPT10000",
    "xdm:departments": [
      "Finance",
      "Marketing"
    ],
    "xdm:jobTitle": "",
    "xdm:photoUrl": "https://PersonOrg.com/personPhoto.jpg"
  },
  "xdm:photoUrl": "https://PersonOrg.com/personPhoto.jpg",
  "xdm:orgUnit": {
    "@id": "https://data.adobe.io/org-apparals-men"
  },
  "xdm:geoUnit": {
    "@id": "https://data.adobe.io/geo-france"
  }
}
```

# XDM Business Contact Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:contact](#xdmcontact) | B2B Contact | Optional | XDM Business Contact (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:extendedWorkDetails](#xdmextendedworkdetails) | `object` | Optional | [Profile Other Work Details](profile-other-work-details.schema.md#xdmextendedworkdetails) |
| [xdm:faxPhone](#xdmfaxphone) | Phone number | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmfaxphone) |
| [xdm:geoUnit](#xdmgeounit) | Geographical unit | Optional | [Profile owning entity details](profile-owning-entities.schema.md#xdmgeounit) |
| [xdm:homeAddress](#xdmhomeaddress) | Postal address | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmhomeaddress) |
| [xdm:homePhone](#xdmhomephone) | Phone number | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmhomephone) |
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](../shared/identitymap.schema.md#xdmidentitymap) |
| [xdm:mobilePhone](#xdmmobilephone) | Phone number | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmmobilephone) |
| [xdm:orgUnit](#xdmorgunit) | Organizational unit | Optional | [Profile owning entity details](profile-owning-entities.schema.md#xdmorgunit) |
| [xdm:organizations](#xdmorganizations) | `string[]` | Optional | [Work Contact Details](profile-work-details.schema.md#xdmorganizations) |
| [xdm:otherAddress](#xdmotheraddress) | Postal address | Optional | [Profile Other Work Details](profile-other-work-details.schema.md#xdmotheraddress) |
| [xdm:otherPhone](#xdmotherphone) | Phone number | Optional | [Profile Other Work Details](profile-other-work-details.schema.md#xdmotherphone) |
| [xdm:person](#xdmperson) | Person | Optional | [Demographic Details](profile-person-details.schema.md#xdmperson) |
| [xdm:personalEmail](#xdmpersonalemail) | Email address | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmpersonalemail) |
| [xdm:workAddress](#xdmworkaddress) | Postal address | Optional | [Work Contact Details](profile-work-details.schema.md#xdmworkaddress) |
| [xdm:workEmail](#xdmworkemail) | Email address | Optional | [Work Contact Details](profile-work-details.schema.md#xdmworkemail) |
| [xdm:workPhone](#xdmworkphone) | Phone number | Optional | [Work Contact Details](profile-work-details.schema.md#xdmworkphone) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:contact
### Contact Details

Holds properties for a person to be recognized as a contact in the business-to-business space.

`xdm:contact`
* is optional
* type: B2B Contact
* defined in this schema

### xdm:contact Type


* [B2B Contact](../../datatypes/b2b-contact.schema.md) – `https://ns.adobe.com/xdm/common/b2b-contact`





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





## xdm:geoUnit
### Geographical unit

The geographical unit within the organization owning the profile. This can be used to reference the geographical information maintained in another dataset.

`xdm:geoUnit`
* is optional
* type: Geographical unit
* defined in [Profile owning entity details](profile-owning-entities.schema.md#xdmgeounit)

### xdm:geoUnit Type


* [Geographical unit](../../datatypes/geounit.schema.md) – `https://ns.adobe.com/xdm/common/geounit`





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






## xdm:mobilePhone
### Mobile phone

Mobile phone number.

`xdm:mobilePhone`
* is optional
* type: Phone number
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmmobilephone)

### xdm:mobilePhone Type


* [Phone number](../../datatypes/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:orgUnit
### Organizational unit

The unit within the organization owning the profile. This can be used to reference the organization details maintained in another dataset.

`xdm:orgUnit`
* is optional
* type: Organizational unit
* defined in [Profile owning entity details](profile-owning-entities.schema.md#xdmorgunit)

### xdm:orgUnit Type


* [Organizational unit](../../datatypes/orgunit.schema.md) – `https://ns.adobe.com/xdm/common/orgunit`





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




