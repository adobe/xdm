
# Contact Request Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-contact-request-details
```

Visitor contact details such as chat start and end, as well as click to email, text, and call counts. 

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-contact-request-details.schema.json](mixins/experience-event/experienceevent-contact-request-details.schema.json) |

## Contact Request Details Example
```json
{}
```

# Contact Request Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:customerFeedback](#xdmcustomerfeedback) | `object` | Optional | Contact Request Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:customerFeedback


`xdm:customerFeedback`
* is optional
* type: `object`
* defined in this schema

### xdm:customerFeedback Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:contactRequestDetails`| object | Optional |



#### xdm:contactRequestDetails

undefined

`xdm:contactRequestDetails`
* is optional
* type: `object`

##### xdm:contactRequestDetails Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:chatDeclined": {
      "title": "Chat Declined",
      "$ref": "https://ns.adobe.com/xdm/data/measure",
      "description": "Captured when an offered chat is declined by a visitor."
    },
    "xdm:chatEnd": {
      "title": "Chat End",
      "$ref": "https://ns.adobe.com/xdm/data/measure",
      "description": "Captured when a chat is ended with a visitor."
    },
    "xdm:chatOffered": {
      "title": "Chat Offered",
      "$ref": "https://ns.adobe.com/xdm/data/measure",
      "description": "Captures the number of times a chat session has been offered to a visitor."
    },
    "xdm:chatSessionID": {
      "title": "Chat Session ID",
      "type": "string",
      "description": "Captures the chat session identifier, if available."
    },
    "xdm:chatStart": {
      "title": "Chat Start",
      "$ref": "https://ns.adobe.com/xdm/data/measure",
      "description": "Captured when a chat is initiated with a visitor."
    },
    "xdm:clickToCall": {
      "title": "Click to Call",
      "$ref": "https://ns.adobe.com/xdm/data/measure",
      "description": "Visitor initiates a call to the client from a telephone number link on the site/app."
    },
    "xdm:clickToDirectMessage": {
      "title": "Click to Direct Message",
      "$ref": "https://ns.adobe.com/xdm/data/measure",
      "description": "Visitor initiates a direct message or feedback to the client from a direct message form on the site/app."
    },
    "xdm:clickToEmail": {
      "title": "Click to Email",
      "$ref": "https://ns.adobe.com/xdm/data/measure",
      "description": "Visitor initiates an email to the client from an email link on the site/app."
    },
    "xdm:clickToText": {
      "title": "Click to Text",
      "$ref": "https://ns.adobe.com/xdm/data/measure",
      "description": "Visitor initiates a SMS/text message to the client from a SMS/text link on the site/app."
    },
    "xdm:Subject": {
      "title": "Subject",
      "type": "string",
      "description": "Subject of contact requested by the visitor, such as in-store purchase support, online order support, credit customer service, etc."
    },
    "xdm:callBackNumber": {
      "title": "Call Back Contact Information",
      "$ref": "https://ns.adobe.com/xdm/context/phonenumber",
      "description": "The contact phone number the visitor uses for responses to contact requests."
    },
    "xdm:replyToEmailAddress": {
      "title": "Reply to Email Address",
      "$ref": "https://ns.adobe.com/xdm/context/emailaddress",
      "description": "The email address the visitor uses for responses to contact requests."
    }
  },
  "simpletype": "`object`"
}
```









