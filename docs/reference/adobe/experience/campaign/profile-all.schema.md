
# Adobe Campaign Profile Full Extension Schema

```
https://ns.adobe.com/experience/campaign/profile-all
```

Adobe Campaign full extension for Profile

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/profile-all.schema.json](adobe/experience/campaign/profile-all.schema.json) |

# Adobe Campaign Profile Full Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:journeyAI](#xdmjourneyai) | `object` | Optional | Adobe Campaign Profile Full Extension (this schema) |
| [xdm:notificationSubscriptions](#xdmnotificationsubscriptions) | Notification Subscription | Optional | Adobe Campaign Profile Full Extension (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:journeyAI
### Journey AI Scores

Journey AI scores for all channels.

`xdm:journeyAI`
* is optional
* type: `object`
* defined in this schema

### xdm:journeyAI Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:emailScore`|  | Optional |



#### xdm:emailScore
##### Journey AI scores for Email Channel

Journey AI open, click and fatigue scores for email channel.

`xdm:emailScore`
* is optional
* type: reference

##### xdm:emailScore Type


* []() – `https://ns.adobe.com/experience/campaign/journeyaiscores`










## xdm:notificationSubscriptions
### Adobe Campaign Notification Subscriptions

Adobe Campaign notification subscriptions are used to communicate with endusers that have enrolled for specific notifications.

`xdm:notificationSubscriptions`
* is optional
* type: Notification Subscription

* defined in this schema

### xdm:notificationSubscriptions Type


Array type: Notification Subscription

All items must be of the type:
* [Notification Subscription](notificationsubscription.schema.md) – `https://ns.adobe.com/experience/campaign/notificationsubscription`







