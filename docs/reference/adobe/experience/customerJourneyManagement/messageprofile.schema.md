
# Adobe CJM ExperienceEvent - Message Profile Details Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/messageprofile
```

Message Profile details for the Adobe CJM ExperienceEvent.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/messageprofile.schema.json](adobe/experience/customerJourneyManagement/messageprofile.schema.json) |
## Schema Hierarchy

* Adobe CJM ExperienceEvent - Message Profile Details `https://ns.adobe.com/experience/customerJourneyManagement/messageprofile`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Experience Channel](../../../datatypes/channels/channel.schema.md) `https://ns.adobe.com/xdm/channels/channel`


## Adobe CJM ExperienceEvent - Message Profile Details Example
```json
{
  "https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/messageProfileID": "4218b775-bef3-46b2-aee2-7caae052cf94",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/requestID": "5319c886-def4-57c3-bff3-8dbaf053df97",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/channel": {
    "@id": "https://ns.adobe.com/xdm/channels/email"
  },
  "https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/variant": "A",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/isSendTimeOptimized": true,
  "https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/isTestExecution": false,
  "https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/address": "user@domain.com",
  "https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/namespace": "Email",
  "https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/outboundIP": "52.247.77.92"
}
```

# Adobe CJM ExperienceEvent - Message Profile Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/address](#httpsnsadobecomexperiencecustomerjourneymanagementemailchannelcontextaddress) | `string` | Optional | Adobe CJM ExperienceEvent - Message Profile Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/namespace](#httpsnsadobecomexperiencecustomerjourneymanagementemailchannelcontextnamespace) | `string` | Optional | Adobe CJM ExperienceEvent - Message Profile Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/outboundIP](#httpsnsadobecomexperiencecustomerjourneymanagementemailchannelcontextoutboundip) | `string` | Optional | Adobe CJM ExperienceEvent - Message Profile Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/channel](#httpsnsadobecomexperiencecustomerjourneymanagementmessageprofilechannel) | Experience Channel | **Required** | Adobe CJM ExperienceEvent - Message Profile Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/isSendTimeOptimized](#httpsnsadobecomexperiencecustomerjourneymanagementmessageprofileissendtimeoptimized) | `boolean` | Optional | Adobe CJM ExperienceEvent - Message Profile Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/isTestExecution](#httpsnsadobecomexperiencecustomerjourneymanagementmessageprofileistestexecution) | `boolean` | Optional | Adobe CJM ExperienceEvent - Message Profile Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/messageProfileID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageprofilemessageprofileid) | `string` | Optional | Adobe CJM ExperienceEvent - Message Profile Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/requestID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageprofile-requestid) | `string` | Optional | Adobe CJM ExperienceEvent - Message Profile Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/variant](#httpsnsadobecomexperiencecustomerjourneymanagementmessageprofilevariant) | `string` | Optional | Adobe CJM ExperienceEvent - Message Profile Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/pushChannelContext/platform](#httpsnsadobecomexperiencecustomerjourneymanagementpushchannelcontextplatform) | `string` | Optional | Adobe CJM ExperienceEvent - Message Profile Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/smsProvider](#httpsnsadobecomexperiencecustomerjourneymanagementsmschannelcontextsmsprovider) | `string` | Optional | Adobe CJM ExperienceEvent - Message Profile Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/messageType](#httpsnsadobecomexperiencecustomerjourneymanagementsmschannelcontextmessageType) | `string` | Optional | Adobe CJM ExperienceEvent - Message Profile Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/address
### Address

The technical address, for example, 'name@domain.com' as commonly defined in RFC2822 and subsequent standards.

`https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/address`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/address Type


`string`
* format: `email` – email address (according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322))






## https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/namespace
### Email Namespace

Email namespace associated with the email address in the consent preferences in the Profile, e.g. email or Email

`https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/namespace`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/namespace Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/outboundIP
### IP Address

Outbound IP address of the customer used to deliver the message.

`https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/outboundIP`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/emailChannelContext/outboundIP Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/channel
### Experience channel

Experience channel related to the ExperienceEvent.

`https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/channel`
* is **required**
* type: Experience Channel
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/channel Type


* [Experience Channel](../../../datatypes/channels/channel.schema.md) – `https://ns.adobe.com/xdm/channels/channel`





## https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/isSendTimeOptimized
### isSendTimeOptimized

True if the message execution is send time optimized.

`https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/isSendTimeOptimized`
* is optional
* type: `boolean`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/isSendTimeOptimized Type


`boolean`





## https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/isTestExecution
### isTestExecution

True if the message is sent as Test Execution.

`https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/isTestExecution`
* is optional
* type: `boolean`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/isTestExecution Type


`boolean`





## https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/messageProfileID
### MessageProfile ID

A unique id refers to every single message sent as part of a MessageExecution activity.

`https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/messageProfileID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/messageProfileID Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/variant
### Content Variant

A message execution can have multiple variants e.g. Multilingual (translated variants for the same content) or A/B testing (different content to test what works better) but a message delivered to a recipient always contains one of them.

`https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/variant`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/variant Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/pushChannelContext/platform
### Push Platform

Push provider service, e.g. apns or fcm

`https://ns.adobe.com/experience/customerJourneyManagement/pushChannelContext/platform`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/pushChannelContext/platform Type


`string`



### https://ns.adobe.com/experience/customerJourneyManagement/pushChannelContext/platform Known Values
| Value | Description |
|-------|-------------|
| `apns` | Apple Push Notification service |
| `fcm` | Firebase cloud messaging service |




## https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/smsProvider
### SMS Provider

SMS provider , e.g. sinch, infobip or twilio

`https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/smsProvider`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/smsProvider Type


`string`



### https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/messageType Known Values
| Value | Description |
|-------|-------------|
| `inbound` | Inbound received for the profile |
| `inboundReply` | Replied with custom message for inbound |
| `send` | sms send |

## https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/messageType
### SMS messageType

SMS provider, e.g. inbound, inboundReply or send

`https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/messageType`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/messageType Type


`string`



### https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/inboundMessage Known Values

## https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/inboundMessage
### SMS inbound Message

SMS inbound reply, e.g. stop, start, subscribe, etc.

`https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/inboundMessage`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/smsChannelContext/inboundMessage Type


`string`








## https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/requestID
### Request ID

A unique request id refers to every single message sent as part of a MessageExecution activity.

`https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/requestID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageProfile/requestID Type


`string`




