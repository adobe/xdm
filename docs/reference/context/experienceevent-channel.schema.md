
# ExperienceEvent channel details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-channel
```

This mixin is used to capture channel information related to an ExperienceEvent, including the channel ID, channel type, media type, and location type.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-channel.schema.json](context/experienceevent-channel.schema.json) |
## Schema Hierarchy

* ExperienceEvent channel details `https://ns.adobe.com/xdm/context/experienceevent-channel`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Experience Channel](../channels/channel.schema.md) `https://ns.adobe.com/xdm/channels/channel`


## ExperienceEvent channel details Example
```json
{
  "xdm:channel": {
    "@id": "https://ns.adobe.com/xdm/channels/apns",
    "@type": "https://ns.adobe.com/xdm/channel-types/mobile"
  }
}
```

# ExperienceEvent channel details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:channel](#xdmchannel) | Experience Channel | Optional | ExperienceEvent channel details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:channel
### Experience channel

Experience channel related to the ExperienceEvent.

`xdm:channel`
* is optional
* type: Experience Channel
* defined in this schema

### xdm:channel Type


* [Experience Channel](../channels/channel.schema.md) – `https://ns.adobe.com/xdm/channels/channel`




