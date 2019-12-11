
# Organizational unit Schema

```
https://ns.adobe.com/xdm/common/orgunit
```

The organizational unit of a parent organization.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [common/orgunit.schema.json](common/orgunit.schema.json) |

## Organizational unit Example
```json
{
  "@id": "https://data.adobe.io/org-apparals-men",
  "xdm:label": "Men Apparals"
}
```

# Organizational unit Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Organizational unit (this schema) |
| [xdm:label](#xdmlabel) | `string` | Optional | Organizational unit (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

The ID associated with this organizational unit.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:label
### Label of the organizational unit.

The user-friendly name for the organizational unit.

`xdm:label`
* is optional
* type: `string`
* defined in this schema

### xdm:label Type


`string`





