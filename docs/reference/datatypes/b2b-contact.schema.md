
# B2B Contact Schema

```
https://ns.adobe.com/xdm/common/b2b-contact
```

This Data Type is used to capture B2B Contact specific attributes.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/b2b-contact.schema.json](datatypes/b2b-contact.schema.json) |
## Schema Hierarchy

* B2B Contact `https://ns.adobe.com/xdm/common/b2b-contact`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [XDM Contact and Lead common B2B attributes](contact-lead.schema.md) `https://ns.adobe.com/xdm/common/contact-lead`
  * [OptInOut](optinout.schema.md) `https://ns.adobe.com/xdm/context/optinout`


## B2B Contact Example
```json
{
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
}
```

# B2B Contact Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:ID](#xdmid) | `string` | **Required** | B2B Contact (this schema) |
| [xdm:accountID](#xdmaccountid) | `string` | **Required** | B2B Contact (this schema) |
| [xdm:extendedContact](#xdmextendedcontact) | XDM Contact and Lead common B2B attributes | Optional | B2B Contact (this schema) |
| [xdm:leadSource](#xdmleadsource) | `string` | Optional | B2B Contact (this schema) |
| [xdm:preferences](#xdmpreferences) | OptInOut | Optional | B2B Contact (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:ID
### Contact Record Id

Unique record id of the contact in the source system.

`xdm:ID`
* is **required**
* type: `string`
* defined in this schema

### xdm:ID Type


`string`






## xdm:accountID
### Contact Account id

ID of the account that’s the parent of this contact.

`xdm:accountID`
* is **required**
* type: `string`
* defined in this schema

### xdm:accountID Type


`string`






## xdm:extendedContact
### Contact Extended Properties

Holds additional properties for a person to be recognized as a contact in the business-to-business space.

`xdm:extendedContact`
* is optional
* type: XDM Contact and Lead common B2B attributes
* defined in this schema

### xdm:extendedContact Type


* [XDM Contact and Lead common B2B attributes](contact-lead.schema.md) – `https://ns.adobe.com/xdm/common/contact-lead`





## xdm:leadSource
### Lead Source

Field recording what source the lead originated from.

`xdm:leadSource`
* is optional
* type: `string`
* defined in this schema

### xdm:leadSource Type


`string`






## xdm:preferences
### Contact Preferences

Holds opt out values for different channels as selected by the contact.

`xdm:preferences`
* is optional
* type: OptInOut
* defined in this schema

### xdm:preferences Type


* [OptInOut](optinout.schema.md) – `https://ns.adobe.com/xdm/context/optinout`




