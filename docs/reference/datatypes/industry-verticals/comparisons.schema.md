
# Comparisons Schema

```
https://ns.adobe.com/xdm/datatypes/comparisons
```

Used for site comparisons, such as products, cards, rooms, flights, etc.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/industry-verticals/comparisons.schema.json](datatypes/industry-verticals/comparisons.schema.json) |
## Schema Hierarchy

* Comparisons `https://ns.adobe.com/xdm/datatypes/comparisons`
  * [Impressions](impressions.schema.md) `https://ns.adobe.com/xdm/datatypes/impressions`


## Comparisons Example
```json
{}
```

# Comparisons Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:addition](#xdmaddition) | `integer` | Optional | Comparisons (this schema) |
| [xdm:count](#xdmcount) | `integer` | Optional | Comparisons (this schema) |
| [xdm:impressions](#xdmimpressions) | Impressions | Optional | Comparisons (this schema) |
| [xdm:items](#xdmitems) | `string[]` | Optional | Comparisons (this schema) |
| [xdm:removal](#xdmremoval) | `integer` | Optional | Comparisons (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Comparisons (this schema) |
| [xdm:view](#xdmview) | `integer` | Optional | Comparisons (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:addition
### Addition

Tracked when an item is added to a comparison.

`xdm:addition`
* is optional
* type: `integer`
* defined in this schema

### xdm:addition Type


`integer`






## xdm:count
### Count

Count of the total number of items being compared.

`xdm:count`
* is optional
* type: `integer`
* defined in this schema

### xdm:count Type


`integer`






## xdm:impressions
### Impressions

Extension of the impressions data type.

`xdm:impressions`
* is optional
* type: Impressions
* defined in this schema

### xdm:impressions Type


* [Impressions](impressions.schema.md) – `https://ns.adobe.com/xdm/datatypes/impressions`





## xdm:items
### Items

An array of all item IDs/SKUs in the list of products.  

`xdm:items`
* is optional
* type: `string[]`

* defined in this schema

### xdm:items Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:removal
### Removal

Tracked when an item is removed from a comparison.

`xdm:removal`
* is optional
* type: `integer`
* defined in this schema

### xdm:removal Type


`integer`






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





