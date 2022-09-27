
# Weather Schema

```
https://ns.adobe.com/xdm/classes/weather
```

Class for tracking weather data

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/weather.schema.json](classes/weather.schema.json) |
## Schema Hierarchy

* Weather `https://ns.adobe.com/xdm/classes/weather`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Weather Example
```json
{
  "xdm:weatherID": "1234567"
}
```

# Weather Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:weatherID](#xdmweatherid) | `string` | **Required** | Weather (this schema) |
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






## xdm:weatherID
### Weather ID

Weather identifier

`xdm:weatherID`
* is **required**
* type: `string`
* defined in this schema

### xdm:weatherID Type


`string`





