
# Phone Interaction Schema

```
https://ns.adobe.com/xdm/common/phoneinteraction
```

Captures information in the context of a phone call conversation 

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/deprecated/phone-interaction.schema.json](datatypes/deprecated/phone-interaction.schema.json) |
## Schema Hierarchy

* Phone Interaction `https://ns.adobe.com/xdm/common/phoneinteraction`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Phone Interaction Example
```json
{
  "xdm:ID": "7263723",
  "xdm:fromWhoID": "4587",
  "xdm:toWhoID": "3785",
  "xdm:disposition": "Setup a meeting for next week to pursue opportunity",
  "xdm:duration": 387,
  "xdm:type": "Inbound",
  "xdm:fromNumber": "408-536-4985",
  "xdm:toNumber": "650-497-0986",
  "xdm:hasLeftVoiceMail": false
}
```

# Phone Interaction Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:ID](#xdmid) | `string` | Optional | Phone Interaction (this schema) |
| [xdm:disposition](#xdmdisposition) | `string` | Optional | Phone Interaction (this schema) |
| [xdm:duration](#xdmduration) | `number` | Optional | Phone Interaction (this schema) |
| [xdm:fromNumber](#xdmfromnumber) | `string` | Optional | Phone Interaction (this schema) |
| [xdm:fromWhoID](#xdmfromwhoid) | `string` | Optional | Phone Interaction (this schema) |
| [xdm:hasLeftVoiceMail](#xdmhasleftvoicemail) | `boolean` | Optional | Phone Interaction (this schema) |
| [xdm:toNumber](#xdmtonumber) | `string` | Optional | Phone Interaction (this schema) |
| [xdm:toWhoID](#xdmtowhoid) | `string` | Optional | Phone Interaction (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Phone Interaction (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:ID
### ID of the call conversation

A unique identifier to represent the phone call conversation

`xdm:ID`
* is optional
* type: `string`
* defined in this schema

### xdm:ID Type


`string`






## xdm:disposition
### Label the outcome of the phone call

The outcome of the call as next triggering actions such as 'demo scheduled','left voicemail', etc.

`xdm:disposition`
* is optional
* type: `string`
* defined in this schema

### xdm:disposition Type


`string`






## xdm:duration
### Time Spent during the call

Record the length of the phone conversation in seconds

`xdm:duration`
* is optional
* type: `number`
* defined in this schema

### xdm:duration Type


`number`






## xdm:fromNumber
### Phone Number of the initiator of the call

Person's phone number who initiated the conversation. Note the phone number is a string and may include meaningful characters such as brackets '()', hyphens '-', or characters to indicate sub-dialing identifiers like extensions 'x' for example,  1-353(0)18391111 or +613 9403600x1234.

`xdm:fromNumber`
* is optional
* type: `string`
* defined in this schema

### xdm:fromNumber Type


`string`






## xdm:fromWhoID
### Initiator of the call

Person ID who initiated the call of the conversation

`xdm:fromWhoID`
* is optional
* type: `string`
* defined in this schema

### xdm:fromWhoID Type


`string`






## xdm:hasLeftVoiceMail
### Has the initiator of the call left any Voice Mail message

A boolean flag to represent whether a voice mail has been left for the reciever

`xdm:hasLeftVoiceMail`
* is optional
* type: `boolean`
* defined in this schema

### xdm:hasLeftVoiceMail Type


`boolean`





## xdm:toNumber
### Phone number of the call reciever

Person's phone number who is the reciever of the call. Note the phone number is a string and may include meaningful characters such as brackets '()', hyphens '-', or characters to indicate sub-dialing identifiers like extensions 'x' for example,  1-353(0)18391111 or +613 9403600x1234.

`xdm:toNumber`
* is optional
* type: `string`
* defined in this schema

### xdm:toNumber Type


`string`






## xdm:toWhoID
### Call reciever

Person ID who recieved the call

`xdm:toWhoID`
* is optional
* type: `string`
* defined in this schema

### xdm:toWhoID Type


`string`






## xdm:type
### Type of the phone call

A way to represent the nature of the call

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`



### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `internal` | Internal |
| `inbound` | Inbound |
| `outbound` | Outbound |



