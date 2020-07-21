
# Rectangular Object (measured in variable unit) Schema

```
https://ns.adobe.com/xdm/assets/variable-unit-rectangular
```

This is an abstract schema for objects of rectangular dimensions and position, with a user-specified unit of measurement. Examples include `Artboard` and `Layer`.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Cannot be instantiated | Yes | Stable | No | Forbidden | Permitted | [assets/variable-unit-rectangular.schema.json](assets/variable-unit-rectangular.schema.json) |

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
| [xdm:height](#xdmheight) | `integer` | `https://ns.adobe.com/xdm/assets/variable-unit-rectangular#/definitions/rectangular` |
| [xdm:originX](#xdmoriginx) | `integer` | `https://ns.adobe.com/xdm/assets/variable-unit-rectangular#/definitions/rectangular` |
| [xdm:originY](#xdmoriginy) | `integer` | `https://ns.adobe.com/xdm/assets/variable-unit-rectangular#/definitions/rectangular` |
| [xdm:unit](#xdmunit) | `string` | `https://ns.adobe.com/xdm/assets/variable-unit-rectangular#/definitions/rectangular` |
| [xdm:width](#xdmwidth) | `integer` | `https://ns.adobe.com/xdm/assets/variable-unit-rectangular#/definitions/rectangular` |

## xdm:height
### Height

Height of the artboard.

`xdm:height`
* is optional
* type: `integer`
* defined in this schema

### xdm:height Type


`integer`






## xdm:originX
### Origin X

Origin X position - base system is cartesian, relative to master page and origin in top, left (X increasing to right, Y increasing downwards).

`xdm:originX`
* is optional
* type: `integer`
* defined in this schema

### xdm:originX Type


`integer`






## xdm:originY
### Origin Y

Origin Y position - base system is cartesian, relative to master page and origin in top, left (X increasing to right, Y increasing downwards).

`xdm:originY`
* is optional
* type: `integer`
* defined in this schema

### xdm:originY Type


`integer`






## xdm:unit
### Unit

Unit used for artboard coordinates (`originX`, `originY`, `width` and `height`). For example: `inch`, `mm`, `pixel`, `pica`, `point` (default is `pixel`).

`xdm:unit`
* is optional
* type: `string`
* default: `"pixel"`
* defined in this schema

### xdm:unit Type


`string`






## xdm:width
### Width

Width of the artboard.

`xdm:width`
* is optional
* type: `integer`
* defined in this schema

### xdm:width Type


`integer`





