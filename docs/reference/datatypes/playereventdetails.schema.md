
# Player event details information Schema

```
https://ns.adobe.com/xdm/datatypes/playerEventDetails
```

Player event details information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/playereventdetails.schema.json](datatypes/playereventdetails.schema.json) |

## Player event details information Example
```json
{
  "xdm:playhead": 831,
  "xdm:sessionID": "1234567890"
}
```

# Player event details information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:playhead](#xdmplayhead) | `integer` | Optional | Player event details information (this schema) |
| [xdm:sessionID](#xdmsessionid) | `string` | Optional | Player event details information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:playhead
### Playhead

If the content is live, the playhead must be the current second of the day, 0 <= playhead < 86400. If the content is recorded, the playhead must be the current second of content, 0 <= playhead < content length.

`xdm:playhead`
* is optional
* type: `integer`
* defined in this schema

### xdm:playhead Type


`integer`
* minimum value: `0`






## xdm:sessionID
### Media Session ID

Identifies an instance of a content stream unique to an individual playback.

`xdm:sessionID`
* is optional
* type: `string`
* defined in this schema

### xdm:sessionID Type


`string`





