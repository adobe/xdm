---
---

# Layer Group Schema

```
https://ns.adobe.com/xdm/assets/layer-group
```

Layer group help in preserving the hierarchy of layers in a document. 
Users can apply a common style to the group instead of working at individual layers. 
A Layer Group can contain layers or other layer groups.

| Abstract | Extensible | Custom Properties | Defined In |
|----------|------------|-------------------|------------|
| Can be instantiated | Yes | Forbidden | [assets/layer-group.schema.json](assets/layer-group.schema.json) |

## Layer Group Example
```json
{
  "xdm:name": "Example Layer Group",
  "xdm:layers": [
    {
      "xdm:name": "Example Layer",
      "stLayer:width": 768,
      "stLayer:height": 768,
      "stLayer:originY": 0,
      "stLayer:originX": 256,
      "stLayer:unit": "pixels",
      "xdm:visible": true
    },
    {
      "xdm:name": "Nested Layer Group",
      "xdm:layers": [
        {
          "xdm:name": "Example Layer in Nested Layer Group",
          "stLayer:width": 768,
          "stLayer:height": 768,
          "stLayer:originY": 0,
          "stLayer:originX": 256,
          "stLayer:unit": "pixels",
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
| [xdm:name](#xdm:name) | `string` | Optional | Layer Group (this schema) |
| [xdm:layers](#xdm:layers) | `array` | Optional | Layer Group (this schema) |

## xdm:name
### Name

Name of the Layer Group. This will be visible to the user and users can specify names that can help them to identify different Layer Groups

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:layers

The layers or layer groups contained in this layer group.

`xdm:layers`
* is optional
* type: `array`

* defined in this schema

### xdm:layers Type


Array type: `array`

All items must be of the type:
Unknown type `array`.

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







