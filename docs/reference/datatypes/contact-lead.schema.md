
# XDM Contact and Lead common B2B attributes Schema

```
https://ns.adobe.com/xdm/common/contact-lead
```

Common B2B attributes for contacts and leads.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/contact-lead.schema.json](datatypes/contact-lead.schema.json) |
## Schema Hierarchy

* XDM Contact and Lead common B2B attributes `https://ns.adobe.com/xdm/common/contact-lead`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## XDM Contact and Lead common B2B attributes Example
```json
{
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
}
```

# XDM Contact and Lead common B2B attributes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:description](#xdmdescription) | `string` | Optional | XDM Contact and Lead common B2B attributes (this schema) |
| [xdm:emailBouncedDate](#xdmemailbounceddate) | `string` | Optional | XDM Contact and Lead common B2B attributes (this schema) |
| [xdm:emailBouncedReason](#xdmemailbouncedreason) | `string` | Optional | XDM Contact and Lead common B2B attributes (this schema) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | XDM Contact and Lead common B2B attributes (this schema) |
| [xdm:isEmailBounced](#xdmisemailbounced) | `boolean` | Optional | XDM Contact and Lead common B2B attributes (this schema) |
| [xdm:jigsaw](#xdmjigsaw) | `string` | Optional | XDM Contact and Lead common B2B attributes (this schema) |
| [xdm:ownerID](#xdmownerid) | `string` | Optional | XDM Contact and Lead common B2B attributes (this schema) |
| [xdm:sourceType](#xdmsourcetype) | `string` | Optional | XDM Contact and Lead common B2B attributes (this schema) |
| [xdm:status](#xdmstatus) | `string` | Optional | XDM Contact and Lead common B2B attributes (this schema) |
| [xdm:timezone](#xdmtimezone) | `string` | Optional | XDM Contact and Lead common B2B attributes (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | XDM Contact and Lead common B2B attributes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:description
### Contact/Lead Description

Detailed description of Contact/Lead.

`xdm:description`
* is optional
* type: `string`
* defined in this schema

### xdm:description Type


`string`






## xdm:emailBouncedDate
### Email Bounced Date

If bounce management is activated and an email is sent to a contact/lead, provides the date when the email was bounced.

`xdm:emailBouncedDate`
* is optional
* type: `string`
* defined in this schema

### xdm:emailBouncedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:emailBouncedReason
### Email Bounced Reason

If bounce management is activated and an email is sent to a contact/lead, provides the reason for bounced email.

`xdm:emailBouncedReason`
* is optional
* type: `string`
* defined in this schema

### xdm:emailBouncedReason Type


`string`






## xdm:isDeleted
### Deleted Indicator

Indicator whether the instance was deleted.

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDeleted Type


`boolean`





## xdm:isEmailBounced
### Email Bounced Indicator

If bounce management is activated and an email is sent to a contact/lead, indicates whether the email bounced (true) or not (false).

`xdm:isEmailBounced`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isEmailBounced Type


`boolean`





## xdm:jigsaw
### Jigsaw

Data.com key

`xdm:jigsaw`
* is optional
* type: `string`
* defined in this schema

### xdm:jigsaw Type


`string`






## xdm:ownerID
### Owner ID

The unique identofier for the Owner of the contact/lead record.

`xdm:ownerID`
* is optional
* type: `string`
* defined in this schema

### xdm:ownerID Type


`string`






## xdm:sourceType
### Source Type

Type of Source system. It could be CRM or a in house system.

`xdm:sourceType`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceType Type


`string`






## xdm:status
### Lead/Contact Status

Field recording the current marketing/sales status of the lead/contact.

`xdm:status`
* is optional
* type: `string`
* defined in this schema

### xdm:status Type


`string`






## xdm:timezone
### Timezone

Timezone of the contact's/lead's location.

`xdm:timezone`
* is optional
* type: `string`
* defined in this schema

### xdm:timezone Type


`string`






## xdm:type
### Contact/Lead Type

Type of the contact/lead.

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`





