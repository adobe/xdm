
# Artboard Schema

```
https://ns.adobe.com/xdm/assets/artboard
```

An artboard works like a piece of paper on a physical desk. You can place elements you are not using on your desk outside the bounds of the paper.
They are still close for easy access, but they don’t interfere with the artwork taking shape on the paper.
XDM artboards work in a similar way.
They contain areas for your artwork that can be are printed or exported.

You can think of an artboard as a special type of layer group.
An artboard clips the contents of any contained elements to its boundaries.
The hierarchy of elements in an artboard is displayed in the Layers panel, together with layers and layer groups.
Artboards can contain layers and layer groups, but not other artboards.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [assets/artboard.schema.json](assets/artboard.schema.json) |
## Schema Hierarchy

* Artboard `https://ns.adobe.com/xdm/assets/artboard`
  * [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md) `https://ns.adobe.com/xdm/assets/variable-unit-rectangular`


## Artboard Example
```json
{
  "xdm:name": "Example Artboard",
  "width": 768,
  "height": 768,
  "originY": 0,
  "originX": 256,
  "unit": "pixels"
}
```

# Artboard Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:height](#xdmheight) | `integer` | Optional |  | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmheight) |
| [xdm:name](#xdmname) | `string` | Optional |  | Artboard (this schema) |
| [xdm:originX](#xdmoriginx) | `integer` | Optional |  | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmoriginx) |
| [xdm:originY](#xdmoriginy) | `integer` | Optional |  | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmoriginy) |
| [xdm:unit](#xdmunit) | `string` | Optional | `"pixel"` | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmunit) |
| [xdm:width](#xdmwidth) | `integer` | Optional |  | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmwidth) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:height
### Height

Height of the artboard.

`xdm:height`
* is optional
* type: `integer`
* defined in [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmheight)

### xdm:height Type


`integer`






## xdm:name

Name of the artboard. This would be visible to the user and users can specify names that can help them uniquely identify different artboards.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:originX
### Origin X

Origin X position - base system is cartesian, relative to master page and origin in top, left (X increasing to right, Y increasing downwards).

`xdm:originX`
* is optional
* type: `integer`
* defined in [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmoriginx)

### xdm:originX Type


`integer`






## xdm:originY
### Origin Y

Origin Y position - base system is cartesian, relative to master page and origin in top, left (X increasing to right, Y increasing downwards).

`xdm:originY`
* is optional
* type: `integer`
* defined in [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmoriginy)

### xdm:originY Type


`integer`






## xdm:unit
### Unit

Unit used for artboard coordinates (`originX`, `originY`, `width` and `height`). For example: `inch`, `mm`, `pixel`, `pica`, `point` (default is `pixel`).

`xdm:unit`
* is optional
* type: `string`
* default: `"pixel"`
* defined in [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmunit)

### xdm:unit Type


`string`






## xdm:width
### Width

Width of the artboard.

`xdm:width`
* is optional
* type: `integer`
* defined in [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmwidth)

### xdm:width Type


`integer`





