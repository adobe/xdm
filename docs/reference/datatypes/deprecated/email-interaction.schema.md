
# Email Interaction Schema

```
https://ns.adobe.com/xdm/common/emailinteraction
```

Captures information in the context of an email correspondence between persons

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/deprecated/email-interaction.schema.json](datatypes/deprecated/email-interaction.schema.json) |
## Schema Hierarchy

* Email Interaction `https://ns.adobe.com/xdm/common/emailinteraction`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Email Interaction Example
```json
{
  "xdm:priority": "high",
  "xdm:sentDateTime": "2020-05-18T00:00:00+00:00",
  "xdm:receivedDateTime": "2020-05-18T00:00:28+00:00",
  "xdm:body": "Mark nice to meet you virtually and welcome back to conversations with Marketo......",
  "xdm:hasAttachments": false,
  "xdm:isQuarantined": false,
  "xdm:sizeInBytes": 2576,
  "xdm:failureReasonCode": "0-0000",
  "xdm:failureReasonMessage": "Success",
  "xdm:fromAddress": "abc@google.com",
  "xdm:toAddress": [
    "mark@google.com"
  ],
  "xdm:ccAddress": [
    "p@google.com",
    "q@yahoo.com"
  ],
  "xdm:bccAddress": [
    "r@google.com"
  ],
  "xdm:headers": "Return-Path: <abc@google.com> X-SpamCatcher-Score: 1 [X] Received: from [136.167.40.119]",
  "xdm:incomingMessage": false,
  "xdm:firstOpenDate": "2020-05-18T05:00:00+00:00",
  "xdm:lastOpenDate": "2020-05-20T00:12:28+00:00",
  "xdm:isTracked": true
}
```

# Email Interaction Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:bccAddress](#xdmbccaddress) | `string[]` | Optional | Email Interaction (this schema) |
| [xdm:body](#xdmbody) | `string` | Optional | Email Interaction (this schema) |
| [xdm:ccAddress](#xdmccaddress) | `string[]` | Optional | Email Interaction (this schema) |
| [xdm:failureReasonCode](#xdmfailurereasoncode) | `string` | Optional | Email Interaction (this schema) |
| [xdm:failureReasonMessage](#xdmfailurereasonmessage) | `string` | Optional | Email Interaction (this schema) |
| [xdm:firstOpenDate](#xdmfirstopendate) | `string` | Optional | Email Interaction (this schema) |
| [xdm:fromAddress](#xdmfromaddress) | `string` | Optional | Email Interaction (this schema) |
| [xdm:hasAttachments](#xdmhasattachments) | `boolean` | Optional | Email Interaction (this schema) |
| [xdm:headers](#xdmheaders) | `string` | Optional | Email Interaction (this schema) |
| [xdm:incomingMessage](#xdmincomingmessage) | `boolean` | Optional | Email Interaction (this schema) |
| [xdm:isQuarantined](#xdmisquarantined) | `boolean` | Optional | Email Interaction (this schema) |
| [xdm:isTracked](#xdmistracked) | `boolean` | Optional | Email Interaction (this schema) |
| [xdm:lastOpenDate](#xdmlastopendate) | `string` | Optional | Email Interaction (this schema) |
| [xdm:priority](#xdmpriority) | `string` | Optional | Email Interaction (this schema) |
| [xdm:receivedDateTime](#xdmreceiveddatetime) | `string` | Optional | Email Interaction (this schema) |
| [xdm:sentDateTime](#xdmsentdatetime) | `string` | Optional | Email Interaction (this schema) |
| [xdm:sizeInBytes](#xdmsizeinbytes) | `number` | Optional | Email Interaction (this schema) |
| [xdm:toAddress](#xdmtoaddress) | `string[]` | Optional | Email Interaction (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:bccAddress
### An array of email addresses for the bcc list

Person or list of people who are in the bcc list of the email message

`xdm:bccAddress`
* is optional
* type: `string[]`

* defined in this schema

### xdm:bccAddress Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `email` – email address (according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322))








## xdm:body
### Body of the mail

The contents of the email after substitution of the placeholders in the template

`xdm:body`
* is optional
* type: `string`
* defined in this schema

### xdm:body Type


`string`






## xdm:ccAddress
### An array of email addresses for the cc list

Person or list of people who are in the cc list of the email message

`xdm:ccAddress`
* is optional
* type: `string[]`

* defined in this schema

### xdm:ccAddress Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `email` – email address (according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322))








## xdm:failureReasonCode
### Reason code for failure

Indicates the error code for not able to deliver the email message

`xdm:failureReasonCode`
* is optional
* type: `string`
* defined in this schema

### xdm:failureReasonCode Type


`string`






## xdm:failureReasonMessage
### Reason Message for failure

Indicates the full message for the error code, for not able to deliver the message

`xdm:failureReasonMessage`
* is optional
* type: `string`
* defined in this schema

### xdm:failureReasonMessage Type


`string`






## xdm:firstOpenDate
### First time the email was opened by the receiver

First date and time when the receiver took the action to open the email

`xdm:firstOpenDate`
* is optional
* type: `string`
* defined in this schema

### xdm:firstOpenDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:fromAddress
### Person sending the email communication

Person who is sender of the email message

`xdm:fromAddress`
* is optional
* type: `string`
* defined in this schema

### xdm:fromAddress Type


`string`
* format: `email` – email address (according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322))






## xdm:hasAttachments
### Email has attachments

A flag represent whether any attachment is part of the email message

`xdm:hasAttachments`
* is optional
* type: `boolean`
* defined in this schema

### xdm:hasAttachments Type


`boolean`





## xdm:headers
### Email headers

Captures the headers of the email for diagnosis

`xdm:headers`
* is optional
* type: `string`
* defined in this schema

### xdm:headers Type


`string`






## xdm:incomingMessage
### Inbound or Outbound Message 

A flag to represent whether a message was sent or recieved

`xdm:incomingMessage`
* is optional
* type: `boolean`
* defined in this schema

### xdm:incomingMessage Type


`boolean`





## xdm:isQuarantined
### quarantine message

A flag to represent whether the email message is a spam

`xdm:isQuarantined`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isQuarantined Type


`boolean`





## xdm:isTracked
### Email Tracking flag

A flag to capture whether the email was tracked by the sender

`xdm:isTracked`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isTracked Type


`boolean`





## xdm:lastOpenDate
### Last time when the email was opened by the receiver

Last time the email was opened, by any receiver

`xdm:lastOpenDate`
* is optional
* type: `string`
* defined in this schema

### xdm:lastOpenDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:priority
### Email&#39;s priority

Captures the priority set by the person who sent the email

`xdm:priority`
* is optional
* type: `string`
* defined in this schema

### xdm:priority Type


`string`






## xdm:receivedDateTime
### Date and time the email was received

Captures the date and time when the email was received

`xdm:receivedDateTime`
* is optional
* type: `string`
* defined in this schema

### xdm:receivedDateTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:sentDateTime
### Date and time the email was sent

Captures the date and time the email correspondence was sent to an individual or a group of people

`xdm:sentDateTime`
* is optional
* type: `string`
* defined in this schema

### xdm:sentDateTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:sizeInBytes
### Email message size

Record the size of the email message in bytes

`xdm:sizeInBytes`
* is optional
* type: `number`
* defined in this schema

### xdm:sizeInBytes Type


`number`






## xdm:toAddress
### An array of email addresses for the To list

Person or list of people who are in the To list of the email message

`xdm:toAddress`
* is optional
* type: `string[]`

* defined in this schema

### xdm:toAddress Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `email` – email address (according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322))







