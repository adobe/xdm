---
---

# Rectangular Object (measured in variable unit) Schema

```
https://ns.adobe.com/xdm/assets/variable-unit-rectangular
```

This is an abstract schema for objects of rectangular dimensions and position, with a user-specified unit of measurement. Examples include `Artboard` and `Layer`.

| Abstract | Extensible | Custom Properties | Defined In |
|----------|------------|-------------------|------------|
| Cannot be instantiated | Yes | Forbidden | [assets/variable-unit-rectangular.schema.json](assets/variable-unit-rectangular.schema.json) |

## Rectangular Object (measured in variable unit) Example
```json
{
  "stLayer:width": 768,
  "stLayer:height": 768,
  "stLayer:originY": 0,
  "stLayer:originX": 256,
  "stLayer:unit": "pixels"
}
```

# Rectangular Object (measured in variable unit) Definitions

| Property | Type | Group |
|----------|------|-------|
| [stLayer:originX](#stLayer:originX) | `integer` | `#/definitions/rectangular` |
| [stLayer:originY](#stLayer:originY) | `integer` | `#/definitions/rectangular` |
| [stLayer:width](#stLayer:width) | `integer` | `#/definitions/rectangular` |
| [stLayer:height](#stLayer:height) | `integer` | `#/definitions/rectangular` |
| [stLayer:unit](#stLayer:unit) | `string` | `#/definitions/rectangular` |

## stLayer:originX
### Origin X

Origin X position - Base system is cartesian, relative to master page and origin in top, left (X increasing to right, Y increasing downwards)

`stLayer:originX`
* is optional
* type: `integer`
* defined in this schema

### stLayer:originX Type


`integer`






## stLayer:originY
### Origin Y

Origin Y position - Base system is cartesian, relative to master page and origin in top, left (X increasing to right, Y increasing downwards)

`stLayer:originY`
* is optional
* type: `integer`
* defined in this schema

### stLayer:originY Type


`integer`






## stLayer:width
### Width

Width of the artboard

`stLayer:width`
* is optional
* type: `integer`
* defined in this schema

### stLayer:width Type


`integer`






## stLayer:height
### Height

Height of the artboard

`stLayer:height`
* is optional
* type: `integer`
* defined in this schema

### stLayer:height Type


`integer`






## stLayer:unit
### Unit

Unit used for artboard coordinates (`originX`, `originY`, `width` and `height`). For example: `inch`, `mm`, `pixel`, `pica`, `point` (default is `pixel`)

`stLayer:unit`
* is optional
* type: `string`
* defined in this schema

### stLayer:unit Type


`string`





