
# Player state information Schema

```
https://ns.adobe.com/xdm/context/player-state
```

Information related to player state.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/deprecated/player-state.schema.json](datatypes/deprecated/player-state.schema.json) |
## Schema Hierarchy

* Player state information `https://ns.adobe.com/xdm/context/player-state`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Player state information Example
```json
{
  "xdm:playerStateSet": true,
  "xdm:playerStateCount": 3,
  "xdm:playerStateTime": 180
}
```

# Player state information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:playerStateCount](#xdmplayerstatecount) | `integer` | Optional | Player state information (this schema) |
| [xdm:playerStateSet](#xdmplayerstateset) | `boolean` | Optional | Player state information (this schema) |
| [xdm:playerStateTime](#xdmplayerstatetime) | `integer` | Optional | Player state information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:playerStateCount
### Player state count

The number of times that player state was set on the stream.

`xdm:playerStateCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:playerStateCount Type


`integer`
* minimum value: `0`






## xdm:playerStateSet
### Player state set

Whether or not the player state is set on that state.

`xdm:playerStateSet`
* is optional
* type: `boolean`
* defined in this schema

### xdm:playerStateSet Type


`boolean`





## xdm:playerStateTime
### Player state time

The total duration of that player state.

`xdm:playerStateTime`
* is optional
* type: `integer`
* defined in this schema

### xdm:playerStateTime Type


`integer`
* minimum value: `0`





