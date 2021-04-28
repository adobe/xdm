
# Impressions Schema

```
https://ns.adobe.com/xdm/datatypes/impressions
```

Tracks when impressions are presented on a site, along with names, types, and counts.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/industry-verticals/impressions.schema.json](datatypes/industry-verticals/impressions.schema.json) |

## Impressions Example
```json
{}
```

# Impressions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:ID](#xdmid) | `string` | Optional | Impressions (this schema) |
| [xdm:displays](#xdmdisplays) | `integer` | Optional | Impressions (this schema) |
| [xdm:selected](#xdmselected) | `integer` | Optional | Impressions (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Impressions (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:ID
### ID

Tracks the ID of an item in an impression array.

`xdm:ID`
* is optional
* type: `string`
* defined in this schema

### xdm:ID Type


`string`






## xdm:displays
### Displays

Counts the number of times an impression item has been displayed to a visitor.

`xdm:displays`
* is optional
* type: `integer`
* defined in this schema

### xdm:displays Type


`integer`






## xdm:selected
### Selected

Tracks when a given item in an impression array has been selected or clicked.

`xdm:selected`
* is optional
* type: `integer`
* defined in this schema

### xdm:selected Type


`integer`






## xdm:type
### Type

Tracks the type of impression in an impression array.

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`





