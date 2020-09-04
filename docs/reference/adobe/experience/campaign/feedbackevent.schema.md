
# Adobe Delivery Feedback Events Schema

```
https://ns.adobe.com/experience/campaign/feedbackevent
```

Contains all delivery event fields.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/feedbackevent.schema.json](adobe/experience/campaign/feedbackevent.schema.json) |

# Adobe Delivery Feedback Events Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/feedback/channel](#httpsnsadobecomexperiencecampaignfeedbackchannel) | `object` | Optional | Adobe Delivery Feedback Events (this schema) |
| [https://ns.adobe.com/experience/campaign/feedback/delivery](#httpsnsadobecomexperiencecampaignfeedbackdelivery) | `object` | Optional | Adobe Delivery Feedback Events (this schema) |
| [https://ns.adobe.com/experience/campaign/feedback/message](#httpsnsadobecomexperiencecampaignfeedbackmessage) | `object` | Optional | Adobe Delivery Feedback Events (this schema) |
| [https://ns.adobe.com/experience/campaign/feedback/messageFailure](#httpsnsadobecomexperiencecampaignfeedbackmessagefailure) | `object` | Optional | Adobe Delivery Feedback Events (this schema) |
| [https://ns.adobe.com/experience/campaign/feedback/solutionContext](#httpsnsadobecomexperiencecampaignfeedbacksolutioncontext) | Key Value Pair | Optional | Adobe Delivery Feedback Events (this schema) |
| [https://ns.adobe.com/experience/campaign/feedback/type](#httpsnsadobecomexperiencecampaignfeedbacktype) | `string` | Optional | Adobe Delivery Feedback Events (this schema) |
| [xdm:retryCount](#xdmretrycount) | `integer` | Optional | Adobe Delivery Feedback Events (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/campaign/feedback/channel
### Delivery channel

`https://ns.adobe.com/experience/campaign/feedback/channel`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/feedback/channel Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `email`| object | Optional |
| `xdm:type`| string | Optional |



#### email
##### E-mail Channel

undefined

`email`
* is optional
* type: `object`

##### email Type

Unknown type `object`.

```json
{
  "title": "E-mail Channel",
  "type": "object",
  "properties": {
    "interactions": {
      "title": "User Interactions",
      "type": "object",
      "properties": {
        "xdm:spamType": {
          "title": "Spam Type",
          "type": "string",
          "description": "Type of spam report entered against this message (see RFC 5965 § 7.3)."
        },
        "xdm:reportedBy": {
          "title": "Reported By",
          "type": "string",
          "description": "E-mail Address of the entity reporting this message as spam."
        },
        "xdm:reportTo": {
          "title": "Report To",
          "type": "string",
          "description": "E-mail Address to which this spam report is to be delivered."
        },
        "xdm:userAgent": {
          "title": "User Agent",
          "type": "string",
          "description": "Value of the browser's User-Agent header."
        }
      }
    },
    "operationalContext": {
      "title": "Operational Context",
      "type": "object",
      "properties": {
        "xdm:outboundIP": {
          "title": "IP Address",
          "type": "string",
          "description": "Outbound IP address of the customer used to deliver the message."
        },
        "xdm:sendProtocol": {
          "title": "Send Protocol",
          "type": "string",
          "description": "Protocol by which the message is delivered."
        },
        "xdm:remoteIp": {
          "title": "IP Address",
          "type": "string",
          "oneOf": [
            {
              "format": "ipv4"
            },
            {
              "format": "ipv6"
            }
          ],
          "description": "IP address of the host to which this message is delivered."
        },
        "xdm:mtaHost": {
          "title": "Node Name",
          "type": "string",
          "description": "Name of the MTA Instance originating the events."
        },
        "xdm:mtaIp": {
          "title": "Sending IP Address",
          "type": "string",
          "oneOf": [
            {
              "format": "ipv4"
            },
            {
              "format": "ipv6"
            }
          ],
          "description": "IP address through which this message was sent."
        },
        "xdm:queueTime": {
          "title": "Queue time",
          "type": "number",
          "description": "Delay, expressed in milliseconds, between this message's injection into SparkPost and its delivery to the receiving domain; that is, the length of time this message spent in the outgoing queue."
        }
      }
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:type
##### Channel Type

Classifies whether the channel is email, push, sms.

`xdm:type`
* is optional
* type: `string`

##### xdm:type Type


`string`











## https://ns.adobe.com/experience/campaign/feedback/delivery
### The campaign activity originating a message to a recipient.

`https://ns.adobe.com/experience/campaign/feedback/delivery`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/feedback/delivery Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:campaignId`| string | Optional |
| `xdm:from`| string | Optional |
| `xdm:id`| string | Optional |
| `xdm:label`| string | Optional |
| `xdm:name`| string | Optional |
| `xdm:type`| string | Optional |



#### xdm:campaignId
##### Campaign Id

Campaign of which this delivery was a part.

`xdm:campaignId`
* is optional
* type: `string`

##### xdm:campaignId Type


`string`








#### xdm:from
##### From

Address used as a from/sender/caller address. Depending on the communication channel, the `address` has a different format.

  * `email`: an email address.
  * `textMessage` or `phone`: a shortcode or phone number.

`xdm:from`
* is optional
* type: `string`

##### xdm:from Type


`string`








#### xdm:id
##### Delivery ID

The campaign activity originating this message.

`xdm:id`
* is optional
* type: `string`

##### xdm:id Type


`string`








#### xdm:label
##### Delivery Label

A human-friendly name of the campaign activity which is originating this message.

`xdm:label`
* is optional
* type: `string`

##### xdm:label Type


`string`








#### xdm:name
##### Delivery Internal Name

A human-friendly identifier of the campaign activity which is originating this message.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`








#### xdm:type
##### Delivery Type

Mode of delivery for the messages sent.

`xdm:type`
* is optional
* type: `string`

##### xdm:type Type


`string`











## https://ns.adobe.com/experience/campaign/feedback/message
### A single message sent to a recipient.

`https://ns.adobe.com/experience/campaign/feedback/message`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/feedback/message Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `recipient`| object | Optional |
| `size`| integer | Optional |
| `subject`| string | Optional |
| `xdm:id`| string | Optional |



#### recipient
##### The recipient of this message

undefined

`recipient`
* is optional
* type: `object`

##### recipient Type

Unknown type `object`.

```json
{
  "title": "The recipient of this message",
  "type": "object",
  "properties": {
    "xdm:to": {
      "title": "To",
      "type": "string",
      "description": "Address used as a to/callee address. Depending on the communication channel, the `address` has a different format.\n\n  * `email`: an email address.\n  * `textMessage` or `phone`: a shortcode or phone number."
    },
    "xdm:type": {
      "title": "Type",
      "type": "string",
      "description": "Whether this message message event describes the BCC, CC or To recipient."
    }
  },
  "simpletype": "`object`"
}
```







#### size
##### Message Size

Size in bytes of the message.

`size`
* is optional
* type: `integer`

##### size Type


`integer`








#### subject
##### Message Subject

Subject line of the message.

`subject`
* is optional
* type: `string`

##### subject Type


`string`








#### xdm:id
##### Message Identifier

Identifier of the message.

`xdm:id`
* is optional
* type: `string`

##### xdm:id Type


`string`











## https://ns.adobe.com/experience/campaign/feedback/messageFailure
### Message Failure

`https://ns.adobe.com/experience/campaign/feedback/messageFailure`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/feedback/messageFailure Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:bounceClass`| string | Optional |
| `xdm:bounceType`| string | Optional |
| `xdm:canonicalReason`| string | Optional |
| `xdm:errorCode`| string | Optional |
| `xdm:reason`| string | Optional |



#### xdm:bounceClass
##### Bounce Class

Classification code for a given message.

`xdm:bounceClass`
* is optional
* type: `string`

##### xdm:bounceClass Type


`string`








#### xdm:bounceType
##### Bounce Type

Classifies whether it is a soft bounce or hard bounce.

`xdm:bounceType`
* is optional
* type: `string`

##### xdm:bounceType Type


`string`








#### xdm:canonicalReason
##### Canonical Reason

Canonicalized text of the response returned by the remote server due to a failed delivery attempt.

`xdm:canonicalReason`
* is optional
* type: `string`

##### xdm:canonicalReason Type


`string`








#### xdm:errorCode
##### Error Code

Error code by which the remote server described a failed delivery attempt.

`xdm:errorCode`
* is optional
* type: `string`

##### xdm:errorCode Type


`string`








#### xdm:reason
##### Reason

Unmodified, exact response returned by the remote server due to a failed delivery attempt.

`xdm:reason`
* is optional
* type: `string`

##### xdm:reason Type


`string`











## https://ns.adobe.com/experience/campaign/feedback/solutionContext
### Solution Context

List of solution specific key value pairs.

`https://ns.adobe.com/experience/campaign/feedback/solutionContext`
* is optional
* type: Key Value Pair

* defined in this schema

### https://ns.adobe.com/experience/campaign/feedback/solutionContext Type


Array type: Key Value Pair

All items must be of the type:
* [Key Value Pair](../analytics/keyvalue.schema.md) – `https://ns.adobe.com/experience/analytics/keyvalue`








## https://ns.adobe.com/experience/campaign/feedback/type
### Feedback Type

The type of message event.

`https://ns.adobe.com/experience/campaign/feedback/type`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/feedback/type Type


`string`






## xdm:retryCount
### Retry Count

Number of failed attempts before the current event.

`xdm:retryCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:retryCount Type


`integer`





