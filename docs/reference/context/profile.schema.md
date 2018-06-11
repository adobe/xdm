
# Profile Schema

```
https://ns.adobe.com/xdm/context/profile
```

XDM Profiles are a singular representation of the attributes of identified and
partially identified persons. Profiles that are highly identified maybe used for
personal communications or highly targeted engagements and can contain detailed
personal information such as names, gender, date of birth, locations, and contact
information like phone numbers and email addresses. Profiles may range to the
other end of the identification spectrum where only anonymous behavioral signals
are being observed and the amount of identification is simple browser cookies.
In this latter case, the sparse Profile data is useful to build more knowledge
on the interests and preferences of the anonymous profile, and over time can
become richer as the person interacting with brand becomes more engaged and
ultimately signs-on to notifications, subscriptions, purchases and other
connections with the brand that enrich and fill out the profile.

XDM Profile can contain personal information, identification information, contact
details and communication preferences. Over time XDM Profile will expand to cater
for other Profile data such as preference, propensities and other attributes.



| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile.schema.json](context/profile.schema.json) |
## Schema Hierarchy

* Profile `https://ns.adobe.com/xdm/context/profile`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Audit Trail](../common/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`
  * [Person](person.schema.md) `https://ns.adobe.com/xdm/context/person`
  * [Address](../common/address.schema.md) `https://ns.adobe.com/xdm/common/address`
  * [Email Address](emailaddress.schema.md) `https://ns.adobe.com/xdm/context/emailaddress`
  * [Phone Number](phonenumber.schema.md) `https://ns.adobe.com/xdm/context/phonenumber`
  * [OptInOut](optinout.schema.md) `https://ns.adobe.com/xdm/context/optinout`
  * [Organizational Unit](../common/orgunit.schema.md) `https://ns.adobe.com/xdm/common/orgunit`
  * [Geographical Unit](../common/geounit.schema.md) `https://ns.adobe.com/xdm/common/geounit`


## Profile Example
```json
{
  "xdm:identities": [
    {
      "@id": "https://data.adobe.io/entities/identity/id123",
      "xdm:namespace": {
        "xdm:code": "AA111"
      }
    }
  ],
  "xdm:person": {
    "xdm:name": {
      "xdm:givenName": "Jane",
      "xdm:middleName": "F",
      "xdm:surname": "Doe"
    },
    "xdm:birthMonth": 1,
    "xdm:birthDay": 3,
    "xdm:birthYear": 1996,
    "xdm:gender": "female"
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
    "schema:longitude": 121.8863,
    "xdm:status": "active",
    "xdm:lastVerifiedDate": "2018-01-02"
  },
  "xdm:workEmail": {
    "xdm:primary": false,
    "xdm:address": "jsmith@xyzinc.com",
    "xdm:label": "John Smith",
    "xdm:type": "work",
    "xdm:status": "active"
  },
  "xdm:mobilePhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active"
  },
  "xdm:optInOut": {
    "https://ns.adobe.com/xdm/channels/email": "pending",
    "https://ns.adobe.com/xdm/channels/phone": "out",
    "https://ns.adobe.com/xdm/channels/sms": "in",
    "https://ns.adobe.com/xdm/channels/fax": "not_provided",
    "https://ns.adobe.com/xdm/channels/direct-mail": "not_provided",
    "https://ns.adobe.com/xdm/channels/apns": "not_provided",
    "xdm:globalOptout": false
  },
  "xdm:orgUnit": {
    "@id": "https://data.adobe.io/org-apparals-men"
  },
  "xdm:geoUnit": {
    "@id": "https://data.adobe.io/geo-france"
  }
}
```

# Profile Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:createdByBatchID](#xdmcreatedbybatchid) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmcreatedbybatchid) |
| [xdm:emailFormat](#xdmemailformat) | `string` | Optional | Profile (this schema) |
| [xdm:faxPhone](#xdmfaxphone) | Phone Number | Optional | Profile (this schema) |
| [xdm:geoUnit](#xdmgeounit) | Geographical Unit | Optional | Profile (this schema) |
| [xdm:homeAddress](#xdmhomeaddress) | Address | Optional | Profile (this schema) |
| [xdm:homePhone](#xdmhomephone) | Phone Number | Optional | Profile (this schema) |
| [xdm:identities](#xdmidentities) | Identity | Optional | Profile (this schema) |
| [xdm:mobilePhone](#xdmmobilephone) | Phone Number | Optional | Profile (this schema) |
| [xdm:modifiedByBatchID](#xdmmodifiedbybatchid) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmmodifiedbybatchid) |
| [xdm:optInOut](#xdmoptinout) | OptInOut | Optional | Profile (this schema) |
| [xdm:orgUnit](#xdmorgunit) | Organizational Unit | Optional | Profile (this schema) |
| [xdm:organizations](#xdmorganizations) | `string[]` | Optional | Profile (this schema) |
| [xdm:person](#xdmperson) | Person | Optional | Profile (this schema) |
| [xdm:personalEmail](#xdmpersonalemail) | Email Address | Optional | Profile (this schema) |
| [xdm:preferredLanguage](#xdmpreferredlanguage) | `string` | Optional | Profile (this schema) |
| [xdm:profilePictureLink](#xdmprofilepicturelink) | `string` | Optional | Profile (this schema) |
| [xdm:pushNotificationTokens](#xdmpushnotificationtokens) | Push Notification Token | Optional | Profile (this schema) |
| [xdm:repositoryCreatedBy](#xdmrepositorycreatedby) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmrepositorycreatedby) |
| [xdm:repositoryLastModifiedBy](#xdmrepositorylastmodifiedby) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmrepositorylastmodifiedby) |
| [xdm:subscriptions](#xdmsubscriptions) | Subscription | Optional | Profile (this schema) |
| [xdm:testProfile](#xdmtestprofile) | `boolean` | Optional | Profile (this schema) |
| [xdm:timeZone](#xdmtimezone) | `string` | Optional | Profile (this schema) |
| [xdm:workAddress](#xdmworkaddress) | Address | Optional | Profile (this schema) |
| [xdm:workEmail](#xdmworkemail) | Email Address | Optional | Profile (this schema) |
| [xdm:workPhone](#xdmworkphone) | Phone Number | Optional | Profile (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:createdByBatchID
### Created by Batch Identifier

The Data Set Files in Catalog Services which has been originating the creation of the entity.


`xdm:createdByBatchID`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#xdm:createdByBatchID)

### xdm:createdByBatchID Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:emailFormat
### Email Format

Email format preferred by the profile. This can be rich text/plain text

`xdm:emailFormat`
* is optional
* type: `string`
* defined in this schema

### xdm:emailFormat Type


`string`



### xdm:emailFormat Known Values
| Value | Description |
|-------|-------------|
| `html` | Rich text |
| `plaintext` | Plain text |




## xdm:faxPhone
### Fax Phone

Fax phone number.


`xdm:faxPhone`
* is optional
* type: Phone Number
* defined in this schema

### xdm:faxPhone Type


* [Phone Number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:geoUnit
### Geographical Unit

The geographical unit within the organization owning the profile. This can be used to reference the geographical information maintained in another dataset.

`xdm:geoUnit`
* is optional
* type: Geographical Unit
* defined in this schema

### xdm:geoUnit Type


* [Geographical Unit](../common/geounit.schema.md) – `https://ns.adobe.com/xdm/common/geounit`





## xdm:homeAddress
### Home Address

A home postal address.


`xdm:homeAddress`
* is optional
* type: Address
* defined in this schema

### xdm:homeAddress Type


* [Address](../common/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:homePhone
### Home Phone

Home phone number.


`xdm:homePhone`
* is optional
* type: Phone Number
* defined in this schema

### xdm:homePhone Type


* [Phone Number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:identities
### All User Identities

Array of Identities. Condensed, normalized encapsulation of all end user identifiers.

`xdm:identities`
* is optional
* type: Identity
* at least `1` items in the array
* defined in this schema

### xdm:identities Type


Array type: Identity

All items must be of the type:
* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`








## xdm:mobilePhone
### Mobile Phone

Mobile phone number.


`xdm:mobilePhone`
* is optional
* type: Phone Number
* defined in this schema

### xdm:mobilePhone Type


* [Phone Number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:modifiedByBatchID
### Modified by Batch Identifier

The last Data Set Files in Catalog Services which has modified the entity.
At creation time, `modifiedByBatchID` is set as `createdByBatchID`.


`xdm:modifiedByBatchID`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#xdm:modifiedByBatchID)

### xdm:modifiedByBatchID Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:optInOut
### OptInOut

Describes a users opting in and out preferences for communication by medium
and communication type.


`xdm:optInOut`
* is optional
* type: OptInOut
* defined in this schema

### xdm:optInOut Type


* [OptInOut](optinout.schema.md) – `https://ns.adobe.com/xdm/context/optinout`





## xdm:orgUnit
### Organizational Unit

The unit within the organization owning the profile. This can be used to reference the organization details maintained in another dataset.

`xdm:orgUnit`
* is optional
* type: Organizational Unit
* defined in this schema

### xdm:orgUnit Type


* [Organizational Unit](../common/orgunit.schema.md) – `https://ns.adobe.com/xdm/common/orgunit`





## xdm:organizations
### Organizations

`xdm:organizations`
* is optional
* type: `string[]`

* defined in this schema

### xdm:organizations Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:person
### Person

An individual actor, contact, or owner.


`xdm:person`
* is optional
* type: Person
* defined in this schema

### xdm:person Type


* [Person](person.schema.md) – `https://ns.adobe.com/xdm/context/person`





## xdm:personalEmail
### Personal Email

A personal email address.


`xdm:personalEmail`
* is optional
* type: Email Address
* defined in this schema

### xdm:personalEmail Type


* [Email Address](emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/emailaddress`





## xdm:preferredLanguage
### Preferred Language

Describes the preferred system of communication used by the profile. Language codes are expressed in BCP 47 format.

`xdm:preferredLanguage`
* is optional
* type: `string`
* defined in this schema

### xdm:preferredLanguage Type


`string`


All instances must conform to this regular expression 
```regex
^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$
```

* test example: [en-GB](https://regexr.com/?expression=%5E((((%5BA-Za-z%5D%7B2%2C3%7D(-(%5BA-Za-z%5D%7B3%7D(-%5BA-Za-z%5D%7B3%7D)%7B0%2C2%7D))%3F)%7C%5BA-Za-z%5D%7B4%7D%7C%5BA-Za-z%5D%7B5%2C8%7D)(-(%5BA-Za-z%5D%7B4%7D))%3F(-(%5BA-Za-z%5D%7B2%7D%7C%5B0-9%5D%7B3%7D))%3F(-(%5BA-Za-z0-9%5D%7B5%2C8%7D%7C%5B0-9%5D%5BA-Za-z0-9%5D%7B3%7D))*(-(%5B0-9A-WY-Za-wy-z%5D(-%5BA-Za-z0-9%5D%7B2%2C8%7D)%2B))*(-(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B))%3F)%7C(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B)%7C((en-GB-oed%7Ci-ami%7Ci-bnn%7Ci-default%7Ci-enochian%7Ci-hak%7Ci-klingon%7Ci-lux%7Ci-mingo%7Ci-navajo%7Ci-pwn%7Ci-tao%7Ci-tay%7Ci-tsu%7Csgn-BE-FR%7Csgn-BE-NL%7Csgn-CH-DE)%7C(art-lojban%7Ccel-gaulish%7Cno-bok%7Cno-nyn%7Czh-guoyu%7Czh-hakka%7Czh-min%7Czh-min-nan%7Czh-xiang)))%24&text=en-GB)
* test example: [de-DE](https://regexr.com/?expression=%5E((((%5BA-Za-z%5D%7B2%2C3%7D(-(%5BA-Za-z%5D%7B3%7D(-%5BA-Za-z%5D%7B3%7D)%7B0%2C2%7D))%3F)%7C%5BA-Za-z%5D%7B4%7D%7C%5BA-Za-z%5D%7B5%2C8%7D)(-(%5BA-Za-z%5D%7B4%7D))%3F(-(%5BA-Za-z%5D%7B2%7D%7C%5B0-9%5D%7B3%7D))%3F(-(%5BA-Za-z0-9%5D%7B5%2C8%7D%7C%5B0-9%5D%5BA-Za-z0-9%5D%7B3%7D))*(-(%5B0-9A-WY-Za-wy-z%5D(-%5BA-Za-z0-9%5D%7B2%2C8%7D)%2B))*(-(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B))%3F)%7C(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B)%7C((en-GB-oed%7Ci-ami%7Ci-bnn%7Ci-default%7Ci-enochian%7Ci-hak%7Ci-klingon%7Ci-lux%7Ci-mingo%7Ci-navajo%7Ci-pwn%7Ci-tao%7Ci-tay%7Ci-tsu%7Csgn-BE-FR%7Csgn-BE-NL%7Csgn-CH-DE)%7C(art-lojban%7Ccel-gaulish%7Cno-bok%7Cno-nyn%7Czh-guoyu%7Czh-hakka%7Czh-min%7Czh-min-nan%7Czh-xiang)))%24&text=de-DE)
* test example: [yue-HK](https://regexr.com/?expression=%5E((((%5BA-Za-z%5D%7B2%2C3%7D(-(%5BA-Za-z%5D%7B3%7D(-%5BA-Za-z%5D%7B3%7D)%7B0%2C2%7D))%3F)%7C%5BA-Za-z%5D%7B4%7D%7C%5BA-Za-z%5D%7B5%2C8%7D)(-(%5BA-Za-z%5D%7B4%7D))%3F(-(%5BA-Za-z%5D%7B2%7D%7C%5B0-9%5D%7B3%7D))%3F(-(%5BA-Za-z0-9%5D%7B5%2C8%7D%7C%5B0-9%5D%5BA-Za-z0-9%5D%7B3%7D))*(-(%5B0-9A-WY-Za-wy-z%5D(-%5BA-Za-z0-9%5D%7B2%2C8%7D)%2B))*(-(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B))%3F)%7C(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B)%7C((en-GB-oed%7Ci-ami%7Ci-bnn%7Ci-default%7Ci-enochian%7Ci-hak%7Ci-klingon%7Ci-lux%7Ci-mingo%7Ci-navajo%7Ci-pwn%7Ci-tao%7Ci-tay%7Ci-tsu%7Csgn-BE-FR%7Csgn-BE-NL%7Csgn-CH-DE)%7C(art-lojban%7Ccel-gaulish%7Cno-bok%7Cno-nyn%7Czh-guoyu%7Czh-hakka%7Czh-min%7Czh-min-nan%7Czh-xiang)))%24&text=yue-HK)




### xdm:preferredLanguage Examples

```json
"en-GB"
```

```json
"de-DE"
```

```json
"yue-HK"
```



## xdm:profilePictureLink
### Profile Picture Link

Link to profile's picture

`xdm:profilePictureLink`
* is optional
* type: `string`
* defined in this schema

### xdm:profilePictureLink Type


`string`






## xdm:pushNotificationTokens
### Push Notification Tokens

Push notification tokens are used to communicate with applications that
are installed on devices or SaaS application accounts.


`xdm:pushNotificationTokens`
* is optional
* type: Push Notification Token

* defined in this schema

### xdm:pushNotificationTokens Type


Array type: Push Notification Token

All items must be of the type:
* [Push Notification Token](pushnotificationtoken.schema.md) – `https://ns.adobe.com/xdm/context/pushnotificationtoken`








## xdm:repositoryCreatedBy
### Created by User Identifier

User id who has created the entity.


`xdm:repositoryCreatedBy`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#xdm:repositoryCreatedBy)

### xdm:repositoryCreatedBy Type


`string`






## xdm:repositoryLastModifiedBy
### Modified by User Identifier

User id who last modified the entity.
At creation time, `modifiedByUser` is set as `createdByUser`.


`xdm:repositoryLastModifiedBy`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#xdm:repositoryLastModifiedBy)

### xdm:repositoryLastModifiedBy Type


`string`






## xdm:subscriptions
### Subscriptions

Subscriptions that this profile is entitled to including terminated, expired or exhausted subscriptions.

`xdm:subscriptions`
* is optional
* type: Subscription

* defined in this schema

### xdm:subscriptions Type


Array type: Subscription

All items must be of the type:
* [Subscription](subscription.schema.md) – `https://ns.adobe.com/xdm/context/subscription`








## xdm:testProfile
### Test Profile

Indicates the `profile` record is for use in testing/verification purposes and should not be automatically included in normal operation(s).

`xdm:testProfile`
* is optional
* type: `boolean`
* defined in this schema

### xdm:testProfile Type


`boolean`





## xdm:timeZone
### Time Zone

Describes which time zone the profile is present in, most frequently/the time zone preferred by the profile. Time zones are expressed according to the IETF tz database: https://www.ietf.org/timezones/tzdb-2016i/tz-link.htm

`xdm:timeZone`
* is optional
* type: `string`
* defined in this schema

### xdm:timeZone Type


`string`





### xdm:timeZone Examples

```json
"America/Barbados"
```

```json
"Antarctica/Davis"
```

```json
"Asia/Calcutta"
```



## xdm:workAddress
### Work Address

A work postal address.


`xdm:workAddress`
* is optional
* type: Address
* defined in this schema

### xdm:workAddress Type


* [Address](../common/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:workEmail
### Work Email

A work email address.


`xdm:workEmail`
* is optional
* type: Email Address
* defined in this schema

### xdm:workEmail Type


* [Email Address](emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/emailaddress`





## xdm:workPhone
### Work Phone

Work phone number.


`xdm:workPhone`
* is optional
* type: Phone Number
* defined in this schema

### xdm:workPhone Type


* [Phone Number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`




