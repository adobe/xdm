
# Geographical unit Schema

```
https://ns.adobe.com/xdm/common/geounit
```

The geographical unit of a parent geographical unit.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [common/geounit.schema.json](common/geounit.schema.json) |

## Geographical unit Example
```json
{
  "@id": "https://data.adobe.io/geo-san-jose",
  "xdm:label": "San Jose"
}
```

# Geographical unit Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Geographical unit (this schema) |
| [xdm:label](#xdmlabel) | `string` | Optional | Geographical unit (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

The ID associated with this geographical unit.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:label
### Label of the geographical unit.

The user-friendly name for the geographical unit.

`xdm:label`
* is optional
* type: `string`
* defined in this schema

### xdm:label Type


`string`





