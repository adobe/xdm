
# Layer Group Schema

```
https://ns.adobe.com/xdm/assets/layer-group
```

Layer group help in preserving the hierarchy of layers in a document.
Users can apply a common style to the group instead of working at individual layers.
A Layer Group can contain layers or other layer groups.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [assets/layer-group.schema.json](assets/layer-group.schema.json) |

## Layer Group Example
```json
{
  "xdm:name": "Example Layer Group",
  "xdm:layers": [
    {
      "xdm:name": "Example Layer",
      "xdm:width": 768,
      "xdm:height": 768,
      "xdm:originY": 0,
      "xdm:originX": 256,
      "xdm:unit": "pixels",
      "xdm:visible": true
    },
    {
      "xdm:name": "Nested Layer Group",
      "xdm:layers": [
        {
          "xdm:name": "Example Layer in Nested Layer Group",
          "xdm:width": 768,
          "xdm:height": 768,
          "xdm:originY": 0,
          "xdm:originX": 256,
          "xdm:unit": "pixels",
          "xdm:visible": false
        }
      ]
    }
  ]
}
```

# Layer Group Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:layers](#xdmlayers) | `array` | Optional | Layer Group (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Layer Group (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:layers

The layers or layer groups contained in this layer group.

`xdm:layers`
* is optional
* type: `array`

* defined in this schema

### xdm:layers Type


Array type: `array`

All items must be of the type:
Unknown type ``.

```json
{
  "name": "Layers",
  "description": "The layers or layer groups contained in this layer group.",
  "type": "array",
  "items": {
    "anyOf": [
      {
        "$ref": "#/definitions/layer-group"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/assets/layer#/definitions/layer"
      }
    ],
    "simpletype": "complex"
  },
  "simpletype": "`array`"
}
```








## xdm:name
### Name

Name of the layer group. This will be visible to the user and users can specify names that can help them to identify different layer groups.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`





