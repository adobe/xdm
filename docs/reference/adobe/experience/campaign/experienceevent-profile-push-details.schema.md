
# Adobe Campaign ExperienceEvent - Profile Snapshot Push Details Schema

```
https://ns.adobe.com/experience/campaign/experienceevent-profile-push-details
```

Adobe Campaign ExperienceEvent optional snapshot of profile push details.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/experienceevent-profile-push-details.schema.json](adobe/experience/campaign/experienceevent-profile-push-details.schema.json) |

# Adobe Campaign ExperienceEvent - Profile Snapshot Push Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/message](#httpsnsadobecomexperiencecampaignmessage) | `object` | Optional | Adobe Campaign ExperienceEvent - Profile Snapshot Push Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/campaign/message
### A single message sent to a recipient.

`https://ns.adobe.com/experience/campaign/message`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/message Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:profileSnapshot`| object | Optional |



#### xdm:profileSnapshot
##### Profile Snapshot

Profile snapshot contains the recipient of the message. This property is primarily used to link the message to a profile using the `IdentityMap` but it can also be used to freeze some properties of the profile at the time the message was sent.

`xdm:profileSnapshot`
* is optional
* type: `object`

##### xdm:profileSnapshot Type

Unknown type `object`.

```json
{
  "title": "Profile Snapshot",
  "description": "Profile snapshot contains the recipient of the message. This property is primarily used to link the message to a profile using the `IdentityMap` but it can also be used to freeze some properties of the profile at the time the message was sent.",
  "type": "object",
  "properties": {
    "xdm:pushNotificationTokens": {
      "title": "Push Notification Tokens",
      "type": "array",
      "description": "Push notification tokens are used to communicate with applications that are installed on devices or SaaS application accounts.",
      "items": {
        "$ref": "https://ns.adobe.com/xdm/context/pushnotificationtoken"
      }
    }
  },
  "simpletype": "`object`"
}
```









