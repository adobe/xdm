
# Adobe Campaign ExperienceEvent - Profile Snapshot Preferences Details Schema

```
https://ns.adobe.com/experience/campaign/experienceevent-profile-preferences-details
```

Adobe Campaign ExperienceEvent optional snapshot of Profile preferences details.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/experienceevent-profile-preferences-details.schema.json](adobe/experience/campaign/experienceevent-profile-preferences-details.schema.json) |

# Adobe Campaign ExperienceEvent - Profile Snapshot Preferences Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/message](#httpsnsadobecomexperiencecampaignmessage) | `object` | Optional | Adobe Campaign ExperienceEvent - Profile Snapshot Preferences Details (this schema) |
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
    "xdm:preferredLanguage": {
      "title": "Preferred Language",
      "type": "string",
      "pattern": "^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$",
      "examples": [
        "en-GB",
        "de-DE",
        "yue-HK"
      ],
      "description": "Describes the preferred system of communication used by the profile. Language codes are expressed in BCP 47 format."
    },
    "xdm:profilePictureLink": {
      "title": "Profile Picture Link",
      "type": "string",
      "description": "Link to profile's picture"
    },
    "xdm:emailFormat": {
      "title": "Email Format",
      "type": "string",
      "description": "Email format preferred by the profile. This can be rich text/plain text",
      "meta:enum": {
        "html": "Rich text",
        "plaintext": "Plain text"
      }
    },
    "xdm:timeZone": {
      "title": "Time Zone",
      "type": "string",
      "examples": [
        "America/Barbados",
        "Antarctica/Davis",
        "Asia/Calcutta"
      ],
      "description": "Describes which time zone the profile is present in, most frequently/the time zone preferred by the profile. Time zones are expressed according to the IETF tz database: https://www.ietf.org/timezones/tzdb-2016i/tz-link.htm"
    },
    "xdm:optInOut": {
      "title": "OptInOut",
      "$ref": "https://ns.adobe.com/xdm/context/optinout",
      "description": "Describes a users opting in and out preferences for communication by medium and communication type.",
      "meta:status": "deprecated"
    }
  },
  "simpletype": "`object`"
}
```









