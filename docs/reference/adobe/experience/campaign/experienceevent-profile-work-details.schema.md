
# Adobe Campaign ExperienceEvent - Profile Snapshot Work Details Schema

```
https://ns.adobe.com/experience/campaign/experienceevent-profile-work-details
```

Adobe Campaign ExperienceEvent optional snapshot of profile work details.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/experienceevent-profile-work-details.schema.json](adobe/experience/campaign/experienceevent-profile-work-details.schema.json) |

# Adobe Campaign ExperienceEvent - Profile Snapshot Work Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/message](#httpsnsadobecomexperiencecampaignmessage) | `object` | Optional | Adobe Campaign ExperienceEvent - Profile Snapshot Work Details (this schema) |
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

Profile snapshot contains the recipient of the message. This property is primarily used to link the message to a Profile using the `IdentityMap` but it can also be used to freeze some properties of the profile at the time the message was sent.

`xdm:profileSnapshot`
* is optional
* type: `object`

##### xdm:profileSnapshot Type

Unknown type `object`.

```json
{
  "title": "Profile Snapshot",
  "description": "Profile snapshot contains the recipient of the message. This property is primarily used to link the message to a Profile using the `IdentityMap` but it can also be used to freeze some properties of the profile at the time the message was sent.",
  "type": "object",
  "properties": {
    "xdm:workAddress": {
      "title": "Work Address",
      "$ref": "https://ns.adobe.com/xdm/common/address",
      "description": "A work postal address.",
      "meta:titleId": "experienceevent-profile-work-details##xdm:workAddress##title##76941",
      "meta:descriptionId": "experienceevent-profile-work-details##xdm:workAddress##description##44161"
    },
    "xdm:workEmail": {
      "title": "Work Email",
      "$ref": "https://ns.adobe.com/xdm/context/emailaddress",
      "description": "A work email address.",
      "meta:titleId": "experienceevent-profile-work-details##xdm:workEmail##title##24341",
      "meta:descriptionId": "experienceevent-profile-work-details##xdm:workEmail##description##31531"
    },
    "xdm:workPhone": {
      "title": "Work Phone",
      "$ref": "https://ns.adobe.com/xdm/context/phonenumber",
      "description": "Work phone number.",
      "meta:titleId": "experienceevent-profile-work-details##xdm:workPhone##title##77311",
      "meta:descriptionId": "experienceevent-profile-work-details##xdm:workPhone##description##89651"
    },
    "xdm:organizations": {
      "title": "Organizations",
      "type": "array",
      "items": {
        "type": "string"
      },
      "meta:titleId": "experienceevent-profile-work-details##xdm:organizations##title##54421"
    }
  },
  "meta:titleId": "experienceevent-profile-work-details##xdm:profileSnapshot##title##92411",
  "meta:descriptionId": "experienceevent-profile-work-details##xdm:profileSnapshot##description##49031",
  "simpletype": "`object`"
}
```









