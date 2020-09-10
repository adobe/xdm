
# Adobe Campaign ExperienceEvent - Profile Snapshot Owning Entities Schema

```
https://ns.adobe.com/experience/campaign/experienceevent-profile-owning-entities
```

Adobe Campaign ExperienceEvent optional snapshot of Profile owning entities.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/experienceevent-profile-owning-entities.schema.json](adobe/experience/campaign/experienceevent-profile-owning-entities.schema.json) |

# Adobe Campaign ExperienceEvent - Profile Snapshot Owning Entities Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/message](#httpsnsadobecomexperiencecampaignmessage) | `object` | Optional | Adobe Campaign ExperienceEvent - Profile Snapshot Owning Entities (this schema) |
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

Profile Snapshot contains the recipient of the message. This property is primarily used to link the message to a Profile using the `IdentityMap` but it can also be used to freeze some properties of the profile at the time the message was sent.

`xdm:profileSnapshot`
* is optional
* type: `object`

##### xdm:profileSnapshot Type

Unknown type `object`.

```json
{
  "title": "Profile Snapshot",
  "description": "Profile Snapshot contains the recipient of the message. This property is primarily used to link the message to a Profile using the `IdentityMap` but it can also be used to freeze some properties of the profile at the time the message was sent.",
  "type": "object",
  "properties": {
    "xdm:orgUnit": {
      "title": "Organizational Unit",
      "$ref": "https://ns.adobe.com/xdm/common/orgunit",
      "description": "The unit within the organization owning the profile. This can be used to reference the organization details maintained in another dataset."
    },
    "xdm:geoUnit": {
      "title": "Geographical Unit",
      "$ref": "https://ns.adobe.com/xdm/common/geounit",
      "description": "The geographical unit within the organization owning the profile. This can be used to reference the geographical information maintained in another dataset."
    }
  },
  "simpletype": "`object`"
}
```









