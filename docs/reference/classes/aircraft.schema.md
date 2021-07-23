
# Aircraft Details Schema

```
https://ns.adobe.com/xdm/classes/aircraft
```

Aircraft details including tail number (ID) and type.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/aircraft.schema.json](classes/aircraft.schema.json) |
## Schema Hierarchy

* Aircraft Details `https://ns.adobe.com/xdm/classes/aircraft`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Aircraft Details Example
```json
{
  "xdm:tailNumber": "N415OCA",
  "xdm:type": "Boeing 757-200"
}
```

# Aircraft Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:aircraftType](#xdmaircrafttype) | `string` | Optional | Aircraft Details (this schema) |
| [xdm:tailNumber](#xdmtailnumber) | `string` | Optional | Aircraft Details (this schema) |
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






## xdm:aircraftType
### Aircraft Type

Records the aircraft type.

`xdm:aircraftType`
* is optional
* type: `string`
* defined in this schema

### xdm:aircraftType Type


`string`






## xdm:tailNumber
### Tail Number

Captures the tail number (identification string) for the aircraft.

`xdm:tailNumber`
* is optional
* type: `string`
* defined in this schema

### xdm:tailNumber Type


`string`





