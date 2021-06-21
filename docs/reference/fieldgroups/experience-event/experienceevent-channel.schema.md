
# Channel Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-channel
```

Channel information such as ID, channel type, media type, and location type.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-channel.schema.json](fieldgroups/experience-event/experienceevent-channel.schema.json) |
## Schema Hierarchy

* Channel Details `https://ns.adobe.com/xdm/context/experienceevent-channel`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Experience Channel](../../datatypes/channels/channel.schema.md) `https://ns.adobe.com/xdm/channels/channel`


## Channel Details Example
```json
{
  "xdm:channel": {
    "@id": "https://ns.adobe.com/xdm/channels/apns",
    "@type": "https://ns.adobe.com/xdm/channel-types/mobile"
  }
}
```

# Channel Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:channel](#xdmchannel) | Experience Channel | Optional | Channel Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:channel
### Experience channel

Experience channel related to the ExperienceEvent.

`xdm:channel`
* is optional
* type: Experience Channel
* defined in this schema

### xdm:channel Type


* [Experience Channel](../../datatypes/channels/channel.schema.md) – `https://ns.adobe.com/xdm/channels/channel`




