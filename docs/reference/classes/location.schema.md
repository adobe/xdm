
# Location Schema

```
https://ns.adobe.com/xdm/classes/location
```

For Live Event Location information, such as a concert hall or sports arena.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/location.schema.json](classes/location.schema.json) |
## Schema Hierarchy

* Location `https://ns.adobe.com/xdm/classes/location`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Location Example
```json
{
  "xdm:locationID": "ABC-123",
  "xdm:locationName": "Colosseum"
}
```

# Location Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:locationID](#xdmlocationid) | `string` | Optional | Location (this schema) |
| [xdm:locationName](#xdmlocationname) | `string` | Optional | Location (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:locationID
### Location Identifier

Unique identifier for the Location.

`xdm:locationID`
* is optional
* type: `string`
* defined in this schema

### xdm:locationID Type


`string`






## xdm:locationName
### Location Name

Name of the location.

`xdm:locationName`
* is optional
* type: `string`
* defined in this schema

### xdm:locationName Type


`string`





