
# Layer Schema

```
https://ns.adobe.com/xdm/assets/layer
```

Layers are like stacked sheets.
Users can add transparency/opacity to see through transparent areas of a layer.
They are used for compositing multiple images, adding text to an image, or adding vector graphic shapes.
Users can also apply a layer style to add a special effect such as a drop shadow or a glow.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [assets/layer.schema.json](assets/layer.schema.json) |
## Schema Hierarchy

* Layer `https://ns.adobe.com/xdm/assets/layer`
  * [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md) `https://ns.adobe.com/xdm/assets/variable-unit-rectangular`


## Layer Example
```json
{
  "xdm:name": "Example Layer",
  "xdm:width": 768,
  "xdm:height": 768,
  "xdm:originY": 0,
  "xdm:originX": 256,
  "xdm:unit": "pixels",
  "xdm:visible": true
}
```

# Layer Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:height](#xdmheight) | `integer` | Optional |  | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmheight) |
| [xdm:name](#xdmname) | `string` | Optional |  | Layer (this schema) |
| [xdm:originX](#xdmoriginx) | `integer` | Optional |  | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmoriginx) |
| [xdm:originY](#xdmoriginy) | `integer` | Optional |  | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmoriginy) |
| [xdm:style](#xdmstyle) | `string` | Optional |  | Layer (this schema) |
| [xdm:unit](#xdmunit) | `string` | Optional | `"pixel"` | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmunit) |
| [xdm:visible](#xdmvisible) | `boolean` | Optional |  | Layer (this schema) |
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
### Name

Name of the layer. This will be visible to the user and users can specify names that can help them to identify different Layers.

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






## xdm:style

A layer style is one or more effects applied to a layer or layer group. You can apply one of the preset styles provided with Photoshop or create a custom style. Photoshop provides a variety of effects—such as shadows, glows, and bevels—that change the appearance of a layer’s contents in a non-destructive way. Layer effects are linked to the layer contents. When you move or edit the contents of the layer, the same effects are applied to the modified contents. For example, if you apply a drop shadow to a text layer and then add new text, the shadow is added automatically to the new text.

`xdm:style`
* is optional
* type: `string`
* defined in this schema

### xdm:style Type


`string`






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






## xdm:visible
### Visible

Indicates if a layer is visible in the document. `visible = true` - Layer is visible and `false` - Layer is hidden. Visibility is not to be confused with opacity, which is a layer effect.

`xdm:visible`
* is optional
* type: `boolean`
* defined in this schema

### xdm:visible Type


`boolean`





## xdm:width
### Width

Width of the artboard.

`xdm:width`
* is optional
* type: `integer`
* defined in [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#xdmwidth)

### xdm:width Type


`integer`





