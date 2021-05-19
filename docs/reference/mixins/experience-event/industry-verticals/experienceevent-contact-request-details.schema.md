
# Contact Request Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-contact-request-details
```

Visitor contact details such as chat start and end, as well as click to email, text, and call counts. 

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-contact-request-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-contact-request-details.schema.json) |

## Contact Request Details Example
```json
{
  "xdm:customerFeedback": {
    "xdm:chatDeclined": 1,
    "xdm:chatEnd": 1,
    "xdm:chatOffered": 1,
    "xdm:chatSessionID": "C0192910",
    "xdm:chatStart": 1,
    "xdm:clickToCall": 1,
    "xdm:clickToDirectMessage": 1,
    "xdm:clickToEmail": 1,
    "xdm:clickToText": 1,
    "xdm:subject": "Service Request",
    "xdm:callBackNumber": {
      "xdm:primary": true,
      "xdm:number": "1-408-888-8888",
      "xdm:status": "active"
    },
    "xdm:replyToEmailAddress": {
      "xdm:primary": false,
      "xdm:address": "jsmith@xyzinc.com",
      "xdm:label": "John Smith",
      "xdm:type": "work",
      "xdm:status": "active"
    }
  }
}
```

# Contact Request Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:customerFeedback](#xdmcustomerfeedback) | `object` | Optional | Contact Request Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:customerFeedback

Customer interaction information such as chat, click to call, email and survey questions/answers.

`xdm:customerFeedback`
* is optional
* type: `object`
* defined in this schema

### xdm:customerFeedback Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:callBackNumber`|  | Optional |
| `xdm:chatDeclined`| integer | Optional |
| `xdm:chatEnd`| integer | Optional |
| `xdm:chatOffered`| integer | Optional |
| `xdm:chatSessionID`| string | Optional |
| `xdm:chatStart`| integer | Optional |
| `xdm:clickToCall`| integer | Optional |
| `xdm:clickToDirectMessage`| integer | Optional |
| `xdm:clickToEmail`| integer | Optional |
| `xdm:clickToText`| integer | Optional |
| `xdm:replyToEmailAddress`|  | Optional |
| `xdm:subject`| string | Optional |



#### xdm:callBackNumber
##### Call Back Contact Information

The contact phone number the visitor uses for responses to contact requests.

`xdm:callBackNumber`
* is optional
* type: reference

##### xdm:callBackNumber Type


* []() – `https://ns.adobe.com/xdm/context/phonenumber`







#### xdm:chatDeclined
##### Chat Declined

Captured when an offered chat is declined by a visitor.

`xdm:chatDeclined`
* is optional
* type: `integer`

##### xdm:chatDeclined Type


`integer`








#### xdm:chatEnd
##### Chat End

Captured when a chat is ended with a visitor.

`xdm:chatEnd`
* is optional
* type: `integer`

##### xdm:chatEnd Type


`integer`








#### xdm:chatOffered
##### Chat Offered

Captures the number of times a chat session has been offered to a visitor.

`xdm:chatOffered`
* is optional
* type: `integer`

##### xdm:chatOffered Type


`integer`








#### xdm:chatSessionID
##### Chat Session ID

Captures the chat session identifier, if available.

`xdm:chatSessionID`
* is optional
* type: `string`

##### xdm:chatSessionID Type


`string`








#### xdm:chatStart
##### Chat Start

Captured when a chat is initiated with a visitor.

`xdm:chatStart`
* is optional
* type: `integer`

##### xdm:chatStart Type


`integer`








#### xdm:clickToCall
##### Click to Call

Visitor initiates a call to the client from a telephone number link on the site/app.

`xdm:clickToCall`
* is optional
* type: `integer`

##### xdm:clickToCall Type


`integer`








#### xdm:clickToDirectMessage
##### Click to Direct Message

Visitor initiates a direct message or feedback to the client from a direct message form on the site/app.

`xdm:clickToDirectMessage`
* is optional
* type: `integer`

##### xdm:clickToDirectMessage Type


`integer`








#### xdm:clickToEmail
##### Click to Email

Visitor initiates an email to the client from an email link on the site/app.

`xdm:clickToEmail`
* is optional
* type: `integer`

##### xdm:clickToEmail Type


`integer`








#### xdm:clickToText
##### Click to Text

Visitor initiates a SMS/text message to the client from a SMS/text link on the site/app.

`xdm:clickToText`
* is optional
* type: `integer`

##### xdm:clickToText Type


`integer`








#### xdm:replyToEmailAddress
##### Reply to Email Address

The email address the visitor uses for responses to contact requests.

`xdm:replyToEmailAddress`
* is optional
* type: reference

##### xdm:replyToEmailAddress Type


* []() – `https://ns.adobe.com/xdm/context/emailaddress`







#### xdm:subject
##### Subject

Subject of contact requested by the visitor, such as in-store purchase support, online order support, credit customer service, etc.

`xdm:subject`
* is optional
* type: `string`

##### xdm:subject Type


`string`










