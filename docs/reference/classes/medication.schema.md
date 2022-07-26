
# Medication Schema

```
https://ns.adobe.com/xdm/classes/medication
```

A substance used for medical treatment, especially a medicine or drug.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/medication.schema.json](classes/medication.schema.json) |
## Schema Hierarchy

* Medication `https://ns.adobe.com/xdm/classes/medication`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Medication Example
```json
{}
```

# Medication Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:medicationID](#xdmmedicationid) | `string` | Optional | Medication (this schema) |
| [xdm:medicationName](#xdmmedicationname) | `string` | Optional | Medication (this schema) |
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






## xdm:medicationID
### Medication ID

Unique identifier of the medication.

`xdm:medicationID`
* is optional
* type: `string`
* defined in this schema

### xdm:medicationID Type


`string`






## xdm:medicationName
### Medication Name

Name of the medication.

`xdm:medicationName`
* is optional
* type: `string`
* defined in this schema

### xdm:medicationName Type


`string`





