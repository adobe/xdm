
# Layer Schema

```
https://ns.adobe.com/xdm/assets/layer
```

Layers are like stacked sheets. 
Users can add transparency/opacity to see through transparent areas of a layer. 
They are used for compositing multiple images, adding text to an image, or adding vector graphic shapes. 
Users can also apply a layer style to add a special effect such as a drop shadow or a glow.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [assets/layer.schema.json](assets/layer.schema.json) |

## Schema Hierarchy

* Layer `https://ns.adobe.com/xdm/assets/layer`
  * [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md) `https://ns.adobe.com/xdm/assets/variable-unit-rectangular`

## Layer Example
```json
{
  "xdm:name": "Example Layer",
  "stLayer:width": 768,
  "stLayer:height": 768,
  "stLayer:originY": 0,
  "stLayer:originX": 256,
  "stLayer:unit": "pixels",
  "xdm:visible": true
}
```

# Layer Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [stLayer:height](#stLayerheight) | `integer` | Optional | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayerheight) |
| [stLayer:originX](#stLayeroriginX) | `integer` | Optional | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayeroriginX) |
| [stLayer:originY](#stLayeroriginY) | `integer` | Optional | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayeroriginY) |
| [stLayer:unit](#stLayerunit) | `string` | Optional | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayerunit) |
| [stLayer:width](#stLayerwidth) | `integer` | Optional | [Rectangular Object (measured in variable unit)](variable-unit-rectangular.schema.md#stLayerwidth) |
| [xdm:name](#xdmname) | `string` | Optional | Layer (this schema) |
| [xdm:style](#xdmstyle) | `string` | Optional | Layer (this schema) |
| [xdm:visible](#xdmvisible) | `boolean` | Optional | Layer (this schema) |
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
### Name

Name of the Layer. This will be visible to the user and users can specify names that can help them to identify different Layers

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:style

A layer style is one or more effects applied to a layer or layer group. You can apply one of the preset styles provided with Photoshop or create a custom style. Photoshop provides a variety of effects—such as shadows, glows, and bevels—that change the appearance of a layer’s contents in a non-distructive way. Layer effects are linked to the layer contents. When you move or edit the contents of the layer, the same effects are applied to the modified contents. For example, if you apply a drop shadow to a text layer and then add new text, the shadow is added automatically to the new text.

`xdm:style`
* is optional
* type: `string`
* defined in this schema

### xdm:style Type


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




