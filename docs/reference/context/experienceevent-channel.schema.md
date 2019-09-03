
# ExperienceEvent Channel Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-channel
```

ExperienceEvent channel details.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-channel.schema.json](context/experienceevent-channel.schema.json) |
## Schema Hierarchy

* ExperienceEvent Channel Details `https://ns.adobe.com/xdm/context/experienceevent-channel`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Experience Channel](../channels/channel.schema.md) `https://ns.adobe.com/xdm/channels/channel`


## ExperienceEvent Channel Details Example
```json
{
  "xdm:channel": {
    "@id": "https://ns.adobe.com/xdm/channels/apns",
    "@type": "https://ns.adobe.com/xdm/channel-types/mobile"
  }
}
```

# ExperienceEvent Channel Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:channel](#xdmchannel) | Experience Channel | Optional | ExperienceEvent Channel Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:channel
### Experience Channel

Experience channel related to this ExperienceEvent.

`xdm:channel`
* is optional
* type: Experience Channel
* defined in this schema

### xdm:channel Type


* [Experience Channel](../channels/channel.schema.md) – `https://ns.adobe.com/xdm/channels/channel`




