
# Marketo Contact Schema

```
https://ns.adobe.com/experience/marketo/marketo-contact
```

Marketo Contact schema for use with B2B Accounts and Opportunities. Includes other Profile mixins like person/work details, opt in/out etc.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/marketo/marketo-contact.schema.json](adobe/experience/marketo/marketo-contact.schema.json) |
## Schema Hierarchy

* Marketo Contact `https://ns.adobe.com/experience/marketo/marketo-contact`
  * [XDM Business Contact](../../../mixins/profile/profile-contact-crm.schema.md) `https://ns.adobe.com/xdm/context/profile-contact-crm`
  * [Marketo Contact/Lead Person Schema](marketo-contact-lead-person.schema.md) `https://ns.adobe.com/experience/marketo/marketo-contact-lead-person`


## Marketo Contact Example
```json
{
  "marketo:contactID": "MKTCNTCT1111",
  "marketo:instanceID": "111222333",
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
    "schema:longitude": 121.8863,
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
  "marketo:originalSourceType": "",
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
    "schema:longitude": 121.8863,
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

# Marketo Contact Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [marketo:contactID](#marketocontactid) | `string` | **Required** | Marketo Contact (this schema) |
| [marketo:extendedContact](#marketoextendedcontact) | Marketo Contact/Lead Person Schema | Optional | Marketo Contact (this schema) |
| [marketo:instanceID](#marketoinstanceid) | `string` | Optional | Marketo Contact (this schema) |
| [xdm:contact](#xdmcontact) | B2B Contact | Optional | [XDM Business Contact](../../../mixins/profile/profile-contact-crm.schema.md#xdmcontact) |
| `*` | any | Additional | this schema *allows* additional properties |

## marketo:contactID
### Marketo Contact/Lead Id

Unique identifier for Marketo contact/lead.

`marketo:contactID`
* is **required**
* type: `string`
* defined in this schema

### marketo:contactID Type


`string`






## marketo:extendedContact
### Extended Marketo Contact Attributes

`marketo:extendedContact`
* is optional
* type: Marketo Contact/Lead Person Schema
* defined in this schema

### marketo:extendedContact Type


* [Marketo Contact/Lead Person Schema](marketo-contact-lead-person.schema.md) – `https://ns.adobe.com/experience/marketo/marketo-contact-lead-person`





## marketo:instanceID
### Instance Id

Identifier for the Source Marketo Instance.

`marketo:instanceID`
* is optional
* type: `string`
* defined in this schema

### marketo:instanceID Type


`string`






## xdm:contact
### Contact Details

Holds properties for a person to be recognized as a contact in the business-to-business space.

`xdm:contact`
* is optional
* type: B2B Contact
* defined in [XDM Business Contact](../../../mixins/profile/profile-contact-crm.schema.md#xdmcontact)

### xdm:contact Type


* [B2B Contact](../../../datatypes/b2b-contact.schema.md) – `https://ns.adobe.com/xdm/common/b2b-contact`




