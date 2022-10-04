
# AEP Hygiene Schema

```
https://ns.adobe.com/xdm/classes/aep-hygiene
```

AEP Hygiene.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [hygiene/aep-hygiene.schema.json](hygiene/aep-hygiene.schema.json) |
## Schema Hierarchy

* AEP Hygiene `https://ns.adobe.com/xdm/classes/aep-hygiene`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## AEP Hygiene Example
```json
{}
```

# AEP Hygiene Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
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





