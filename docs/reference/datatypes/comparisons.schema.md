
# Comparisons Schema

```
https://ns.adobe.com/xdm/datatypes/comparisons
```

Used for site comparisons, such as products, cards, rooms, flights, etc.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/comparisons.schema.json](datatypes/comparisons.schema.json) |
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
| [xdm:comparisonAddition](#xdmcomparisonaddition) | `integer` | Optional | Comparisons (this schema) |
| [xdm:comparisonCount](#xdmcomparisoncount) | `integer` | Optional | Comparisons (this schema) |
| [xdm:comparisonImpressions](#xdmcomparisonimpressions) | Impressions | Optional | Comparisons (this schema) |
| [xdm:comparisonItems](#xdmcomparisonitems) | `string[]` | Optional | Comparisons (this schema) |
| [xdm:comparisonRemoval](#xdmcomparisonremoval) | `integer` | Optional | Comparisons (this schema) |
| [xdm:comparisonType](#xdmcomparisontype) | `string` | Optional | Comparisons (this schema) |
| [xdm:comparisonView](#xdmcomparisonview) | `integer` | Optional | Comparisons (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:comparisonAddition
### Comparison Addition

Tracked when an item is added to a comparison.

`xdm:comparisonAddition`
* is optional
* type: `integer`
* defined in this schema

### xdm:comparisonAddition Type


`integer`






## xdm:comparisonCount
### Comparison Count

Count of the total number of items being compared.

`xdm:comparisonCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:comparisonCount Type


`integer`






## xdm:comparisonImpressions
### Comparison Impressions

Extension of the impressions data type.

`xdm:comparisonImpressions`
* is optional
* type: Impressions
* defined in this schema

### xdm:comparisonImpressions Type


* [Impressions](impressions.schema.md) – `https://ns.adobe.com/xdm/datatypes/impressions`





## xdm:comparisonItems
### Comparison List Items

An array of all item IDs/SKUs in the list of products.  

`xdm:comparisonItems`
* is optional
* type: `string[]`

* defined in this schema

### xdm:comparisonItems Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:comparisonRemoval
### Comparison Removal

Tracked when an item is removed from a comparison.

`xdm:comparisonRemoval`
* is optional
* type: `integer`
* defined in this schema

### xdm:comparisonRemoval Type


`integer`






## xdm:comparisonType
### Comparison Type

Type of comparison tool in use.

`xdm:comparisonType`
* is optional
* type: `string`
* defined in this schema

### xdm:comparisonType Type


`string`






## xdm:comparisonView
### Comparison View

Tracked when a comparison page is viewed.

`xdm:comparisonView`
* is optional
* type: `integer`
* defined in this schema

### xdm:comparisonView Type


`integer`





