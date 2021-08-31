
# Adobe Campaign ExperienceEvent - Profile Snapshot Personal Details Schema

```
https://ns.adobe.com/experience/campaign/experienceevent-profile-personal-details
```

Adobe Campaign ExperienceEvent optional snapshot of Profile personal details.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/experienceevent-profile-personal-details.schema.json](adobe/experience/campaign/experienceevent-profile-personal-details.schema.json) |

# Adobe Campaign ExperienceEvent - Profile Snapshot Personal Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/message](#httpsnsadobecomexperiencecampaignmessage) | `object` | Optional | Adobe Campaign ExperienceEvent - Profile Snapshot Personal Details (this schema) |
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
    "xdm:homeAddress": {
      "title": "Home Address",
      "$ref": "https://ns.adobe.com/xdm/common/address",
      "description": "A home postal address.",
      "meta:titleId": "experienceevent-profile-personal-details##xdm:homeAddress##title##29681",
      "meta:descriptionId": "experienceevent-profile-personal-details##xdm:homeAddress##description##8601"
    },
    "xdm:personalEmail": {
      "title": "Personal Email",
      "$ref": "https://ns.adobe.com/xdm/context/emailaddress",
      "description": "A personal email address.",
      "meta:titleId": "experienceevent-profile-personal-details##xdm:personalEmail##title##55581",
      "meta:descriptionId": "experienceevent-profile-personal-details##xdm:personalEmail##description##80671"
    },
    "xdm:homePhone": {
      "title": "Home Phone",
      "$ref": "https://ns.adobe.com/xdm/context/phonenumber",
      "description": "Home phone number.",
      "meta:titleId": "experienceevent-profile-personal-details##xdm:homePhone##title##34081",
      "meta:descriptionId": "experienceevent-profile-personal-details##xdm:homePhone##description##81681"
    },
    "xdm:mobilePhone": {
      "title": "Mobile Phone",
      "$ref": "https://ns.adobe.com/xdm/context/phonenumber",
      "description": "Mobile phone number.",
      "meta:titleId": "experienceevent-profile-personal-details##xdm:mobilePhone##title##51521",
      "meta:descriptionId": "experienceevent-profile-personal-details##xdm:mobilePhone##description##80491"
    },
    "xdm:faxPhone": {
      "title": "Fax Phone",
      "$ref": "https://ns.adobe.com/xdm/context/phonenumber",
      "description": "Fax phone number.",
      "meta:titleId": "experienceevent-profile-personal-details##xdm:faxPhone##title##80871",
      "meta:descriptionId": "experienceevent-profile-personal-details##xdm:faxPhone##description##63981"
    }
  },
  "meta:titleId": "experienceevent-profile-personal-details##xdm:profileSnapshot##title##31321",
  "meta:descriptionId": "experienceevent-profile-personal-details##xdm:profileSnapshot##description##27391",
  "simpletype": "`object`"
}
```









