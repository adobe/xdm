
# Time-series Schema Schema

```
https://ns.adobe.com/xdm/data/time-series
```

Used to indicate the behavior of time partitioned semantics when composed into data schemas.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [behaviors/time-series.schema.json](behaviors/time-series.schema.json) |
## Schema Hierarchy

* Time-series Schema `https://ns.adobe.com/xdm/data/time-series`
  * [Extensibility base schema](../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Time-series Schema Example
```json
{
  "@id": "https://data.adobe.io/experienceid-123456",
  "xdm:timestamp": "2017-09-26T15:52:25+00:00"
}
```

# Time-series Schema Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Time-series Schema (this schema) |
| [xdm:timestamp](#xdmtimestamp) | `string` | Optional | Time-series Schema (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the time-series event.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:timestamp
### Timestamp

The time when an event or observation occurred.

`xdm:timestamp`
* is optional
* type: `string`
* defined in this schema

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





