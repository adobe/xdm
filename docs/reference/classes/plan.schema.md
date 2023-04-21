
# Plan Schema

```
https://ns.adobe.com/xdm/classes/plan
```

Plan business entity to collect data pertaining to plans (e.g. health plan, insurance plan).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/plan.schema.json](classes/plan.schema.json) |
## Schema Hierarchy

* Plan `https://ns.adobe.com/xdm/classes/plan`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Plan Example
```json
{}
```

# Plan Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:planID](#xdmplanid) | `string` | Optional | Plan (this schema) |
| [xdm:planName](#xdmplanname) | `string` | Optional | Plan (this schema) |
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






## xdm:planID
### Plan ID

Unique identifier of the plan.

`xdm:planID`
* is optional
* type: `string`
* defined in this schema

### xdm:planID Type


`string`






## xdm:planName
### Plan Name

Name of the plan.

`xdm:planName`
* is optional
* type: `string`
* defined in this schema

### xdm:planName Type


`string`





