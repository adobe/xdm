
# Image Schema

```
https://ns.adobe.com/xdm/assets/image
```

The image class is for raster and vector image assets, including JPEG, PNG, SVG files.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [assets/image.schema.json](assets/image.schema.json) |
## Schema Hierarchy

* Image `https://ns.adobe.com/xdm/assets/image`
  * [Asset](../external/repo/asset.schema.md) `http://ns.adobe.com/adobecloud/core/1.0/asset`
  * [Simple Rectangular Area](rectangular.schema.md) `https://ns.adobe.com/xdm/assets/rectangular`


## Image Example
```json
{
  "repo:id": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ab",
  "xmp:createDate": "2017-09-26T15:52:25+00:00",
  "repo:createDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryCreatedBy": "lars",
  "xmp:modifyDate": "2017-09-26T15:52:25+00:00",
  "repo:modifyDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryLastModifiedBy": "2017-09-26T15:52:25+00:00",
  "repo:version": "15",
  "repo:size": 1632418,
  "xdm:path": "here",
  "repo:etag": "15",
  "tiff:imageLength": 768,
  "tiff:imageWidth": 1024,
  "xdm:aspectRatio": 1.3333333,
  "tiff:orientation": 1,
  "tiff:XResolution": {
    "tiff:numerator": 300,
    "tiff:denominator": 1
  }
}
```

# Image Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [photoshop:ICCProfile](#photoshopiccprofile) | `string` | Optional | Image (this schema) |
| [photoshop:colorMode](#photoshopcolormode) | `enum` | Optional | Image (this schema) |
| [repo:createdBy](#repocreatedby) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repocreatedby) |
| [repo:etag](#repoetag) | `string` | **Required** | [Asset](../external/repo/asset.schema.md#repoetag) |
| [repo:id](#repoid) | `string` | **Required** | [Asset](../external/repo/asset.schema.md#repoid) |
| [repo:modifiedBy](#repomodifiedby) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repomodifiedby) |
| [repo:size](#reposize) | `integer` | **Required** | [Asset](../external/repo/asset.schema.md#reposize) |
| [repo:version](#repoversion) | `string` | **Required** | [Asset](../external/repo/asset.schema.md#repoversion) |
| [tiff:XResolution](#tiffxresolution) | `object` | Optional | Image (this schema) |
| [tiff:YResolution](#tiffyresolution) | `object` | Optional | Image (this schema) |
| [tiff:imageLength](#tiffimagelength) | `integer` | Optional | [Simple Rectangular Area](rectangular.schema.md#tiffimagelength) |
| [tiff:imageWidth](#tiffimagewidth) | `integer` | Optional | [Simple Rectangular Area](rectangular.schema.md#tiffimagewidth) |
| [tiff:orientation](#tifforientation) | `integer` | Optional | Image (this schema) |
| [tiff:resolutionUnit](#tiffresolutionunit) | `enum` | Optional | Image (this schema) |
| [xdm:aspectRatio](#xdmaspectratio) | `number` | Optional | [Simple Rectangular Area](rectangular.schema.md#xdmaspectratio) |
| `*` | any | Additional | this schema *allows* additional properties |

## photoshop:ICCProfile
### ICC Profile

The [ICC color profile](http://www.color.org/iccprofile.xalter), such as AppleRGB, AdobeRGB1998.

`photoshop:ICCProfile`
* is optional
* type: `string`
* defined in this schema

### photoshop:ICCProfile Type


`string`



### photoshop:ICCProfile Known Values
| Value | Description |
|-------|-------------|
| `0` | ColorMatchRGB |
| `1` | AppleRGB |
| `2` | AdobeRGB1998 |
| `3` | JapanColor2002Newspaper |
| `4` | USSheetfedUncoated |
| `5` | JapanColor2001Uncoated |
| `6` | CoatedFOGRA27 |
| `7` | UncoatedFOGRA29 |
| `8` | USWebCoatedSWOP |
| `9` | JapanColor2001Coated |
| `10` | JapanWebCoated |
| `11` | WebCoatedFOGRA28 |
| `12` | USWebUncoated |
| `13` | CoatedFOGRA39 |
| `14` | USSheetfedCoated |




## photoshop:colorMode
### Color Mode

The color mode or image mode determines how colors combine based on the number of channels in a color model. Different color modes result in different levels of color detail and file size. For instance, use CMYK color mode for images in a full-color print brochure, and use RGB color mode for images in web or e-mail to reduce file size while maintaining color integrity.

`photoshop:colorMode`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#photoshopcolormode-known-values).

### photoshop:colorMode Known Values
| Value | Description |
|-------|-------------|
| `0` | Bitmap |
| `1` | Gray scale |
| `2` | Indexed color |
| `3` | RGB color |
| `4` | CMYK color |
| `7` | Multi-channel |
| `8` | Duotone |
| `9` | LAB color |




## repo:createdBy

ID of the user who initiated the action that caused the resource to be created in the repository.

`repo:createdBy`
* is optional
* type: `string`
* defined in [Asset](../external/repo/asset.schema.md#repocreatedby)

### repo:createdBy Type


`string`






## repo:etag
### ETag

An  ETag is an HTTP response header returned by an HTTP/1.1 compliant web server used to determine change in content of a resource at a given URL. 

`repo:etag`
* is **required**
* type: `string`
* defined in [Asset](../external/repo/asset.schema.md#repoetag)

### repo:etag Type


`string`






## repo:id

A unique identifier given to every addressable asset in a given repository.

`repo:id`
* is **required**
* type: `string`
* defined in [Asset](../external/repo/asset.schema.md#repoid)

### repo:id Type


`string`





### repo:id Example

```json
"urn:aaid:sc:US:6dc33479-13ca-4b19-b25d-c805eff8a69e"
```


## repo:modifiedBy

ID of the user who initiated the action that most recently caused the resource to be modified in the repository.

`repo:modifiedBy`
* is optional
* type: `string`
* defined in [Asset](../external/repo/asset.schema.md#repomodifiedby)

### repo:modifiedBy Type


`string`






## repo:size
### Size

Size of the asset in bytes.

`repo:size`
* is **required**
* type: `integer`
* defined in [Asset](../external/repo/asset.schema.md#reposize)

### repo:size Type


`integer`
* minimum value: `0`






## repo:version

The version ID of the piece of content. It will be generated both on explicit and implicit save or upload.

`repo:version`
* is **required**
* type: `string`
* defined in [Asset](../external/repo/asset.schema.md#repoversion)

### repo:version Type


`string`






## tiff:XResolution
### X-Resolution

Horizontal resolution in pixels per `resolutionUnit`.

`tiff:XResolution`
* is optional
* type: `object`
* defined in this schema

### tiff:XResolution Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## tiff:YResolution
### Y-Resolution

Vertical resolution in pixels per `resolutionUnit`.

`tiff:YResolution`
* is optional
* type: `object`
* defined in this schema

### tiff:YResolution Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## tiff:imageLength
### Length

Height in pixels. To maintain continuity with the XMP and TIFF standards, the height of an image or video is specified in the property `imageLength`. The duration of the video (also commonly called length) is specified in the property `extent`.

`tiff:imageLength`
* is optional
* type: `integer`
* defined in [Simple Rectangular Area](rectangular.schema.md#tiffimagelength)

### tiff:imageLength Type


`integer`
* minimum value: `0`






## tiff:imageWidth
### Width

Width in pixels.

`tiff:imageWidth`
* is optional
* type: `integer`
* defined in [Simple Rectangular Area](rectangular.schema.md#tiffimagewidth)

### tiff:imageWidth Type


`integer`
* minimum value: `0`






## tiff:orientation
### Orientation

The orientation of the image. Following values are permitted:
- `1` = Horizontal (normal)
- `2` = Mirror horizontal
- `3` = Rotate 180 degrees
- `4` = Mirror vertical
- `5` = Mirror horizontal and rotate 270 degrees clockwise
- `6` = Rotate 90 degrees clockwise
- `7` = Mirror horizontal and rotate 90 degrees clockwise
- `8` = Rotate 270 degrees clockwise.

`tiff:orientation`
* is optional
* type: `integer`
* defined in this schema

### tiff:orientation Type


`integer`
* minimum value: `1`
* maximum value: `8`


### tiff:orientation Known Values
| Value | Description |
|-------|-------------|
| `1` | Horizontal (normal) |
| `2` | Mirror horizontal |
| `3` | Rotate 180 degrees |
| `4` | Mirror vertical |
| `5` | Mirror horizontal and rotate 270 degrees clockwise |
| `6` | Rotate 90 degrees clockwise |
| `7` | Mirror horizontal and rotate 90 degrees clockwise |
| `8` | Rotate 270 degrees clockwise |




## tiff:resolutionUnit
### Resolution Unit

Unit used for `XResolution` and `YRresolution`. Possible values are 2 (inches) and 3 (centimeters).

`tiff:resolutionUnit`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#tiffresolutionunit-known-values).

### tiff:resolutionUnit Known Values
| Value | Description |
|-------|-------------|
| `2` | inches |
| `3` | centimeters |




## xdm:aspectRatio
### Aspect Ratio

Describes the proportional relationship between the width and the height. To determine the aspect ratio, divide width by height. Media that have an aspect ratio smaller than one are in landscape format, media that have an aspect ratio greater than one are in portrait format.

`xdm:aspectRatio`
* is optional
* type: `number`
* defined in [Simple Rectangular Area](rectangular.schema.md#xdmaspectratio)

### xdm:aspectRatio Type


`number`
* minimum value: `0`






# Image Definitions

| Property | Type | Group |
|----------|------|-------|
| [tiff:denominator](#tiffdenominator) | `integer` | `https://ns.adobe.com/xdm/assets/image#/definitions/rational` |
| [tiff:numerator](#tiffnumerator) | `integer` | `https://ns.adobe.com/xdm/assets/image#/definitions/rational` |

## tiff:denominator
### Denominator

The denominator of a fraction.

`tiff:denominator`
* is optional
* type: `integer`
* defined in this schema

### tiff:denominator Type


`integer`






## tiff:numerator
### Numerator

The numerator of a fraction.

`tiff:numerator`
* is optional
* type: `integer`
* defined in this schema

### tiff:numerator Type


`integer`





