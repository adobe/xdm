
# B2B Lead Schema

```
https://ns.adobe.com/xdm/common/b2b-lead
```

This Data Type is used to capture B2B Lead specific attributes.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/b2b-lead.schema.json](datatypes/b2b-lead.schema.json) |
## Schema Hierarchy

* B2B Lead `https://ns.adobe.com/xdm/common/b2b-lead`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Organization](organization.schema.md) `https://ns.adobe.com/xdm/common/organization`
  * [OptInOut](optinout.schema.md) `https://ns.adobe.com/xdm/context/optinout`
  * [XDM Contact and Lead common B2B attributes](contact-lead.schema.md) `https://ns.adobe.com/xdm/common/contact-lead`


## B2B Lead Example
```json
{
  "xdm:ID": "",
  "xdm:isConverted": true,
  "xdm:convertedAccountID": "",
  "xdm:convertedContactID": "",
  "xdm:convertedDate": "2018-12-20T15:52:25+00:00",
  "xdm:convertedOpportunityID": "",
  "xdm:jigsawContactID": "",
  "xdm:lastTransferDate": "2018-12-20T15:52:25+00:00",
  "xdm:source": "",
  "xdm:isUnReadByOwner": false,
  "xdm:extendedLead": {
    "xdm:type": "",
    "xdm:ownerID": "",
    "xdm:isDeleted": false,
    "xdm:emailBouncedDate": "2018-12-20T15:52:25+00:00",
    "xdm:emailBouncedReason": "Bounced Reason Here",
    "xdm:isEmailBounced": true,
    "xdm:description": "Contact description here",
    "xdm:status": "Contacted",
    "xdm:timezone": ""
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
  },
  "xdm:organization": {
    "xdm:legalName": "ABC Stores",
    "xdm:numberOfEmployees": 200,
    "xdm:annualRevenue": 1000000,
    "xdm:industry": "Retail",
    "xdm:website": "http://www.abcstores.com"
  }
}
```

# B2B Lead Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:ID](#xdmid) | `string` | **Required** | B2B Lead (this schema) |
| [xdm:convertedAccountID](#xdmconvertedaccountid) | `string` | Optional | B2B Lead (this schema) |
| [xdm:convertedContactID](#xdmconvertedcontactid) | `string` | Optional | B2B Lead (this schema) |
| [xdm:convertedDate](#xdmconverteddate) | `string` | Optional | B2B Lead (this schema) |
| [xdm:convertedOpportunityID](#xdmconvertedopportunityid) | `string` | Optional | B2B Lead (this schema) |
| [xdm:extendedLead](#xdmextendedlead) | XDM Contact and Lead common B2B attributes | Optional | B2B Lead (this schema) |
| [xdm:isConverted](#xdmisconverted) | `boolean` | Optional | B2B Lead (this schema) |
| [xdm:isUnReadByOwner](#xdmisunreadbyowner) | `boolean` | Optional | B2B Lead (this schema) |
| [xdm:jigsawContactID](#xdmjigsawcontactid) | `string` | Optional | B2B Lead (this schema) |
| [xdm:lastTransferDate](#xdmlasttransferdate) | `string` | Optional | B2B Lead (this schema) |
| [xdm:organization](#xdmorganization) | Organization | Optional | B2B Lead (this schema) |
| [xdm:preferences](#xdmpreferences) | OptInOut | Optional | B2B Lead (this schema) |
| [xdm:source](#xdmsource) | `string` | Optional | B2B Lead (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:ID
### Lead Id

Lead id.

`xdm:ID`
* is **required**
* type: `string`
* defined in this schema

### xdm:ID Type


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






## xdm:extendedLead
### Lead Extended Properties

Holds additional properties for a person to be recognized as a lead in the business-to-business space.

`xdm:extendedLead`
* is optional
* type: XDM Contact and Lead common B2B attributes
* defined in this schema

### xdm:extendedLead Type


* [XDM Contact and Lead common B2B attributes](contact-lead.schema.md) – `https://ns.adobe.com/xdm/common/contact-lead`





## xdm:isConverted
### Converted Indicator

Indicates whether the Lead was successfully converted or not.

`xdm:isConverted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isConverted Type


`boolean`





## xdm:isUnReadByOwner
### Un-Read By Owner

Un Read by owner indicator.

`xdm:isUnReadByOwner`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isUnReadByOwner Type


`boolean`





## xdm:jigsawContactID
### Jigsaw Contact Id

Lead’s Data.com ID if available.

`xdm:jigsawContactID`
* is optional
* type: `string`
* defined in this schema

### xdm:jigsawContactID Type


`string`






## xdm:lastTransferDate
### Last Transfer Date

Last transfer date.

`xdm:lastTransferDate`
* is optional
* type: `string`
* defined in this schema

### xdm:lastTransferDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:organization
### Organization Attributes

Organization attributes if the lead is an organization.

`xdm:organization`
* is optional
* type: Organization
* defined in this schema

### xdm:organization Type


* [Organization](organization.schema.md) – `https://ns.adobe.com/xdm/common/organization`





## xdm:preferences
### Lead Preferences

Holds opt out values for different channels as selected by the lead.

`xdm:preferences`
* is optional
* type: OptInOut
* defined in this schema

### xdm:preferences Type


* [OptInOut](optinout.schema.md) – `https://ns.adobe.com/xdm/context/optinout`





## xdm:source
### Lead Source

Field recording what source the lead originated from.

`xdm:source`
* is optional
* type: `string`
* defined in this schema

### xdm:source Type


`string`





