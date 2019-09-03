
# Simple Rectangular Area Schema

```
https://ns.adobe.com/xdm/assets/rectangular
```

Properties that apply to images, videos, and other rectangular media. It represents a rectangular area on a pixel-based surface, but without any indication of origin.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Cannot be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [assets/rectangular.schema.json](assets/rectangular.schema.json) |

## Simple Rectangular Area Example
```json
{
  "tiff:imageWidth": 768,
  "tiff:imageLength": 1024,
  "xdm:aspectRatio": 1.333333333
}
```

# Simple Rectangular Area Definitions

| Property | Type | Group |
|----------|------|-------|
| [tiff:imageLength](#tiffimagelength) | `integer` | `https://ns.adobe.com/xdm/assets/rectangular#/definitions/rectangular` |
| [tiff:imageWidth](#tiffimagewidth) | `integer` | `https://ns.adobe.com/xdm/assets/rectangular#/definitions/rectangular` |
| [xdm:aspectRatio](#xdmaspectratio) | `number` | `https://ns.adobe.com/xdm/assets/rectangular#/definitions/rectangular` |

## tiff:imageLength
### Length

Height in pixels. To maintain continuity with the XMP and TIFF standards, the height of an image or video is specified in the property `imageLength`. The duration of the video (also commonly called length) is specified in the property `extent`.

`tiff:imageLength`
* is optional
* type: `integer`
* defined in this schema

### tiff:imageLength Type


`integer`
* minimum value: `0`






## tiff:imageWidth
### Width

Width in pixels.

`tiff:imageWidth`
* is optional
* type: `integer`
* defined in this schema

### tiff:imageWidth Type


`integer`
* minimum value: `0`






## xdm:aspectRatio
### Aspect Ratio

Describes the proportional relationship between the width and the height. To determine the aspect ratio, divide width by height. Media that have an aspect ratio smaller than one are in landscape format, media that have an aspect ratio greater than one are in portrait format.

`xdm:aspectRatio`
* is optional
* type: `number`
* defined in this schema

### xdm:aspectRatio Type


`number`
* minimum value: `0`





