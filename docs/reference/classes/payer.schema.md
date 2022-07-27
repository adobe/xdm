
# Payer Schema

```
https://ns.adobe.com/xdm/classes/payer
```

Payer business entity to collect data pertaining to insurance companies (e.g. health insurance).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/payer.schema.json](classes/payer.schema.json) |
## Schema Hierarchy

* Payer `https://ns.adobe.com/xdm/classes/payer`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Payer Example
```json
{}
```

# Payer Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:payerID](#xdmpayerid) | `string` | Optional | Payer (this schema) |
| [xdm:payerName](#xdmpayername) | `string` | Optional | Payer (this schema) |
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






## xdm:payerID
### Payer ID

Unique identifier of the payer.

`xdm:payerID`
* is optional
* type: `string`
* defined in this schema

### xdm:payerID Type


`string`






## xdm:payerName
### Payer Name

Name of the payer.

`xdm:payerName`
* is optional
* type: `string`
* defined in this schema

### xdm:payerName Type


`string`





