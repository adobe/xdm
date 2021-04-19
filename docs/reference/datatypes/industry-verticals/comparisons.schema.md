
# Comparisons Schema

```
https://ns.adobe.com/xdm/datatypes/comparisons
```

Used for site comparisons, such as products, cards, rooms, flights, etc.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/industry-verticals/comparisons.schema.json](datatypes/industry-verticals/comparisons.schema.json) |

## Comparisons Example
```json
{}
```

# Comparisons Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:count](#xdmcount) | `integer` | Optional | Comparisons (this schema) |
| [xdm:items](#xdmitems) | `object[]` | Optional | Comparisons (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Comparisons (this schema) |
| [xdm:view](#xdmview) | `integer` | Optional | Comparisons (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:count
### Count

Count of the total number of items being compared.

`xdm:count`
* is optional
* type: `integer`
* defined in this schema

### xdm:count Type


`integer`






## xdm:items
### Items

`xdm:items`
* is optional
* type: `object[]`

* defined in this schema

### xdm:items Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:addition`| integer | Optional |
| `xdm:removal`| integer | Optional |
| `xdm:selected`| integer | Optional |



#### xdm:ID
##### ID

Identifier for the item included within a comparison.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:addition
##### Addition

Tracked when an item is added to a comparison.

`xdm:addition`
* is optional
* type: `integer`

##### xdm:addition Type


`integer`








#### xdm:removal
##### Removal

Tracked when an item is removed from a comparison.

`xdm:removal`
* is optional
* type: `integer`

##### xdm:removal Type


`integer`








#### xdm:selected
##### Selected

Tracked when an item is selected/clicked-through upon to view more details.

`xdm:selected`
* is optional
* type: `integer`

##### xdm:selected Type


`integer`








  
Array of all items and add/remove/select actions in a comparison.







## xdm:type
### Type

Type of comparison tool in use.

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`






## xdm:view
### View

Tracked when a comparison page is viewed.

`xdm:view`
* is optional
* type: `integer`
* defined in this schema

### xdm:view Type


`integer`





