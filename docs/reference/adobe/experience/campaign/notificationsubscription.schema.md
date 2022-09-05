
# Notification Subscription Schema

```
https://ns.adobe.com/experience/campaign/notificationsubscription
```

Adobe Campaign notification subscriptions allow end-users opt into topics that can be used for communication such as marketing subscription lists.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/notificationsubscription.schema.json](adobe/experience/campaign/notificationsubscription.schema.json) |
## Schema Hierarchy

* Notification Subscription `https://ns.adobe.com/experience/campaign/notificationsubscription`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Notification Subscription Target](notificationsubscriptiontarget.schema.md) `https://ns.adobe.com/experience/campaign/notificationsubscriptiontarget`
  * [Notification Unsubscription Details](notificationunsubscriptiondetails.schema.md) `https://ns.adobe.com/experience/campaign/notificationunsubscriptiondetails`


## Notification Subscription Examples

```json
{
  "xdm:topicID": "40ac9bf9-721d-44ac-8cf3-fb04c089f3bf",
  "xdm:type": "Campaign/SubscriptionList",
  "xdm:subscriptionDate": "2017-09-26T15:52:25+00:00",
  "xdm:emailAddress": "johnDoe@adobe.com"
}
```

```json
{
  "xdm:topicID": "50ac9bf9-721d-44ac-8cf3-fb04c089f3bf",
  "xdm:type": "Campaign/SubscriptionList",
  "xdm:subscriptionDate": "2017-02-26T15:52:25+00:00",
  "xdm:emailAddress": "johnDoe@adobe.com",
  "xdm:unsubscriptionDetails": {
    "xdm:unsubscriptionDate": "2017-09-26T15:52:25+00:00",
    "xdm:remarkID": "40ac9bf9-721d-44ac-8cf3-fb04c089f3be",
    "xdm:remarkText": "Sorry, leave me alone. These are my personal comments"
  }
}
```


# Notification Subscription Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:notificationTarget](#xdmnotificationtarget) | Notification Subscription Target | Optional | Notification Subscription (this schema) |
| [xdm:subscriptionDate](#xdmsubscriptiondate) | `string` | Optional | Notification Subscription (this schema) |
| [xdm:topicID](#xdmtopicid) | `string` | Optional | Notification Subscription (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Notification Subscription (this schema) |
| [xdm:unsubscriptionDetails](#xdmunsubscriptiondetails) | Notification Unsubscription Details | Optional | Notification Subscription (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:notificationTarget
### Target/destination for the notification

Target/destination for where to send/receive the notification.

`xdm:notificationTarget`
* is optional
* type: Notification Subscription Target
* defined in this schema

### xdm:notificationTarget Type


* [Notification Subscription Target](notificationsubscriptiontarget.schema.md) – `https://ns.adobe.com/experience/campaign/notificationsubscriptiontarget`





## xdm:subscriptionDate
### Subscription Date

Date and time when the end-user has subscribed to a notification topic. An end-user is subscribed if they have a Subscription Date and the `unsubscriptiondetails/unsubscriptionDate` is empty.

`xdm:subscriptionDate`
* is optional
* type: `string`
* defined in this schema

### xdm:subscriptionDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:topicID
### Topic Identifier

The topic that the end-user has subscribed to and opted into notifications for.

`xdm:topicID`
* is optional
* type: `string`
* defined in this schema

### xdm:topicID Type


`string`






## xdm:type
### Subscription type

The type of notification/subscription.

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`






## xdm:unsubscriptionDetails
### Adobe Campaign Notification Unsubscription details

Adobe Campaign notification unsubscription details.

`xdm:unsubscriptionDetails`
* is optional
* type: Notification Unsubscription Details
* defined in this schema

### xdm:unsubscriptionDetails Type


* [Notification Unsubscription Details](notificationunsubscriptiondetails.schema.md) – `https://ns.adobe.com/experience/campaign/notificationunsubscriptiondetails`




