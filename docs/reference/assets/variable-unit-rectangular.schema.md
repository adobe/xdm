
# Rectangular Object (measured in variable unit) Schema

```
https://ns.adobe.com/xdm/assets/variable-unit-rectangular
```

This is an abstract schema for objects of rectangular dimensions and position, with a user-specified unit of measurement. Examples include `Artboard` and `Layer`.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Forbidden | Permitted | [assets/variable-unit-rectangular.schema.json](assets/variable-unit-rectangular.schema.json) |

## Rectangular Object (measured in variable unit) Example
```json
{
  "xdm:width": 768,
  "xdm:height": 768,
  "xdm:originY": 0,
  "xdm:originX": 256,
  "xdm:unit": "pixels"
}
```

# Rectangular Object (measured in variable unit) Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:height](#xdm:height) | `integer` | `https://ns.adobe.com/xdm/assets/variable-unit-rectangular#/definitions/rectangular` |
| [xdm:originX](#xdm:originX) | `integer` | `https://ns.adobe.com/xdm/assets/variable-unit-rectangular#/definitions/rectangular` |
| [xdm:originY](#xdm:originY) | `integer` | `https://ns.adobe.com/xdm/assets/variable-unit-rectangular#/definitions/rectangular` |
| [xdm:unit](#xdm:unit) | `string` | `https://ns.adobe.com/xdm/assets/variable-unit-rectangular#/definitions/rectangular` |
| [xdm:width](#xdm:width) | `integer` | `https://ns.adobe.com/xdm/assets/variable-unit-rectangular#/definitions/rectangular` |

## xdm:height
### Height

Height of the artboard

`xdm:height`
* is optional
* type: `integer`
* defined in this schema

### xdm:height Type


`integer`






## xdm:originX
### Origin X

Origin X position - Base system is cartesian, relative to master page and origin in top, left (X increasing to right, Y increasing downwards)

`xdm:originX`
* is optional
* type: `integer`
* defined in this schema

### xdm:originX Type


`integer`






## xdm:originY
### Origin Y

Origin Y position - Base system is cartesian, relative to master page and origin in top, left (X increasing to right, Y increasing downwards)

`xdm:originY`
* is optional
* type: `integer`
* defined in this schema

### xdm:originY Type


`integer`






## xdm:unit
### Unit

Unit used for artboard coordinates (`originX`, `originY`, `width` and `height`). For example: `inch`, `mm`, `pixel`, `pica`, `point` (default is `pixel`)

`xdm:unit`
* is optional
* type: `string`
* defined in this schema

### xdm:unit Type


`string`






## xdm:width
### Width

Width of the artboard

`xdm:width`
* is optional
* type: `integer`
* defined in this schema

### xdm:width Type


`integer`





