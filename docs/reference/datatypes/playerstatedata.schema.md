
# Player state data information Schema

```
https://ns.adobe.com/xdm/datatypes/playerStateData
```

Player state data information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/playerstatedata.schema.json](datatypes/playerstatedata.schema.json) |

## Player state data information Example
```json
{
  "xdm:name": "pictureInPicture",
  "xdm:isSet": true,
  "xdm:count": 2,
  "xdm:time": 100
}
```

# Player state data information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:count](#xdmcount) | `integer` | Optional | Player state data information (this schema) |
| [xdm:isSet](#xdmisset) | `boolean` | Optional | Player state data information (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Player state data information (this schema) |
| [xdm:time](#xdmtime) | `integer` | Optional | Player state data information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:count
### Player State Count

The number of times that player state was set on the stream.

`xdm:count`
* is optional
* type: `integer`
* defined in this schema

### xdm:count Type


`integer`






## xdm:isSet
### Player State Set

Whether or not the player state is set on that state.

`xdm:isSet`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isSet Type


`boolean`





## xdm:name
### Player State Name

The name of the player state.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9_.%5D%7B1%2C64%7D%24)):
```regex
^[a-zA-Z0-9_.]{1,64}$
```






## xdm:time
### Player State Time

The total duration of that player state.

`xdm:time`
* is optional
* type: `integer`
* defined in this schema

### xdm:time Type


`integer`





