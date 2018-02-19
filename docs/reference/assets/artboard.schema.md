
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


| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [assets/artboard.schema.json](assets/artboard.schema.json) |

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

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [stLayer:height](#stLayerheight) | `integer` | Optional | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayerheight) |
| [stLayer:originX](#stLayeroriginX) | `integer` | Optional | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayeroriginX) |
| [stLayer:originY](#stLayeroriginY) | `integer` | Optional | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayeroriginY) |
| [stLayer:unit](#stLayerunit) | `string` | Optional | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayerunit) |
| [stLayer:width](#stLayerwidth) | `integer` | Optional | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayerwidth) |
| [xdm:name](#xdmname) | `string` | Optional | Artboard (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## stLayer:height
### Height

Height of the artboard

`stLayer:height`
* is optional
* type: `integer`
* defined in [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayer:height)

### stLayer:height Type


`integer`






## stLayer:originX
### Origin X

Origin X position - Base system is cartesian, relative to master page and origin in top, left (X increasing to right, Y increasing downwards)

`stLayer:originX`
* is optional
* type: `integer`
* defined in [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayer:originX)

### stLayer:originX Type


`integer`






## stLayer:originY
### Origin Y

Origin Y position - Base system is cartesian, relative to master page and origin in top, left (X increasing to right, Y increasing downwards)

`stLayer:originY`
* is optional
* type: `integer`
* defined in [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayer:originY)

### stLayer:originY Type


`integer`






## stLayer:unit
### Unit

Unit used for artboard coordinates (`originX`, `originY`, `width` and `height`). For example: `inch`, `mm`, `pixel`, `pica`, `point` (default is `pixel`)

`stLayer:unit`
* is optional
* type: `string`
* defined in [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayer:unit)

### stLayer:unit Type


`string`






## stLayer:width
### Width

Width of the artboard

`stLayer:width`
* is optional
* type: `integer`
* defined in [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayer:width)

### stLayer:width Type


`integer`






## xdm:name

Name of the artboard. This would be visible to the user and users can specify names that can help them uniquely identfiy different Artboards.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`





