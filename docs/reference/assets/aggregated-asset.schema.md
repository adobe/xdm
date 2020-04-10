
# Aggregated Asset Schema

```
https://ns.adobe.com/xdm/assets/aggregated-asset
```

This schema aggregates all asset sub-schemas that are supported by XDM.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | No | Experimental | No | Forbidden | Permitted | [assets/aggregated-asset.schema.json](assets/aggregated-asset.schema.json) |
## Schema Hierarchy

* Aggregated Asset `https://ns.adobe.com/xdm/assets/aggregated-asset`
  * [Asset](../external/repo/asset.schema.md) `http://ns.adobe.com/adobecloud/core/1.0/asset`
  * [Common Properties](../external/repo/common.schema.md) `http://ns.adobe.com/adobecloud/core/1.0`
  * [HAL Resource](../external/hal/hal.schema.md) `https://ns.adobe.com/xdm/external/hal/resource`
  * [Copyright Owner](copyright-owner.schema.md) `https://ns.adobe.com/xdm/assets/copyright-owner`
  * [Simple Rectangular Area](rectangular.schema.md) `https://ns.adobe.com/xdm/assets/rectangular`
  * [Image](image.schema.md) `https://ns.adobe.com/xdm/assets/image`
  * [Video](video.schema.md) `https://ns.adobe.com/xdm/assets/video`


## Aggregated Asset Example
```json
{
  "repo:id": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ab",
  "xmp:createDate": "2017-09-26T15:52:25+00:00",
  "repo:createDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryCreatedBy": "lars",
  "xmp:modifyDate": "2017-09-26T15:52:25+00:00",
  "repo:modifyDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryLastModifiedBy": "lars",
  "repo:version": "15",
  "repo:size": 1632418,
  "repo:path": "here",
  "repo:etag": "15",
  "repo:name": "example.pdf",
  "dc:format": "application/pdf"
}
```

# Aggregated Asset Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [_embedded](#_embedded) | `object` | Optional | [HAL Resource](../external/hal/hal.schema.md#_embedded) |
| [_links](#_links) | `object` | Optional | [HAL Resource](../external/hal/hal.schema.md#_links) |
| [dc:format](#dcformat) | `string` | Optional | [Common Properties](../external/repo/common.schema.md#dcformat) |
| [photoshop:ICCProfile](#photoshopiccprofile) | `string` | Optional | [Image](image.schema.md#photoshopiccprofile) |
| [photoshop:colorMode](#photoshopcolormode) | `enum` | Optional | [Image](image.schema.md#photoshopcolormode) |
| [plus:copyrightOwnerID](#pluscopyrightownerid) | `string` | Optional | [Copyright Owner](copyright-owner.schema.md#pluscopyrightownerid) |
| [plus:copyrightOwnerName](#pluscopyrightownername) | `string` | Optional | [Copyright Owner](copyright-owner.schema.md#pluscopyrightownername) |
| [repo:createDate](#repocreatedate) | `string` | Optional | [Common Properties](../external/repo/common.schema.md#repocreatedate) |
| [repo:createdBy](#repocreatedby) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repocreatedby) |
| [repo:etag](#repoetag) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repoetag) |
| [repo:id](#repoid) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repoid) |
| [repo:modifiedBy](#repomodifiedby) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repomodifiedby) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional | [Common Properties](../external/repo/common.schema.md#repomodifydate) |
| [repo:name](#reponame) | `string` | Optional | [Common Properties](../external/repo/common.schema.md#reponame) |
| [repo:path](#repopath) | `string` | Optional | [Common Properties](../external/repo/common.schema.md#repopath) |
| [repo:size](#reposize) | `integer` | Optional | [Asset](../external/repo/asset.schema.md#reposize) |
| [repo:version](#repoversion) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repoversion) |
| [tiff:XResolution](#tiffxresolution) | `object` | Optional | [Image](image.schema.md#tiffxresolution) |
| [tiff:YResolution](#tiffyresolution) | `object` | Optional | [Image](image.schema.md#tiffyresolution) |
| [tiff:imageLength](#tiffimagelength) | `integer` | Optional | [Simple Rectangular Area](rectangular.schema.md#tiffimagelength) |
| [tiff:imageWidth](#tiffimagewidth) | `integer` | Optional | [Simple Rectangular Area](rectangular.schema.md#tiffimagewidth) |
| [tiff:orientation](#tifforientation) | `integer` | Optional | [Image](image.schema.md#tifforientation) |
| [tiff:resolutionUnit](#tiffresolutionunit) | `enum` | Optional | [Image](image.schema.md#tiffresolutionunit) |
| [xdm:aspectRatio](#xdmaspectratio) | `number` | Optional | [Simple Rectangular Area](rectangular.schema.md#xdmaspectratio) |
| [xdm:extent](#xdmextent) | `integer` | Optional | [Video](video.schema.md#xdmextent) |
| [xmpDM:videoFrameRate](#xmpdmvideoframerate) | `string` | Optional | [Video](video.schema.md#xmpdmvideoframerate) |
| `*` | any | Additional | this schema *allows* additional properties |

## _embedded

It is an object whose property names are link relation types (as defined by [RFC5988](https://tools.ietf.org/html/rfc5988)) and values are either a Resource Object or an array of Resource Objects.\n\nEmbedded Resources MAY be a full, partial, or inconsistent version of the representation served from the target URI.

`_embedded`
* is optional
* type: `object`
* defined in [HAL Resource](../external/hal/hal.schema.md#_embedded)

### _embedded Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## _links

It is an object whose property names are link relation types (as defined by [RFC5988](https://tools.ietf.org/html/rfc5988) and values are either a Link Object or an array of Link Objects.  The subject resource of these links is the Resource Object of which the containing `_links` object is a property.

`_links`
* is optional
* type: `object`
* defined in [HAL Resource](../external/hal/hal.schema.md#_links)

### _links Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## dc:format
### Format

The physical or digital manifestation of the resource. Typically, Format should include the media-type of the resource. Format may be used to determine the software, hardware or other equipment needed to display or operate the resource. Recommended best practice is to select a value from a controlled vocabulary (for example, the list of [Internet Media Types](http://www.iana.org/ assignments/media-types/) defining computer media formats).

`dc:format`
* is optional
* type: `string`
* defined in [Common Properties](../external/repo/common.schema.md#dcformat)

### dc:format Type


`string`


All instances must conform to this regular expression 
```regex
\w+\/[-.\w]+(?:\+[-.\w]+)?
```

* test example: [application/vnd.adobe.photoshop](https://regexr.com/?expression=%5Cw%2B%5C%2F%5B-.%5Cw%5D%2B(%3F%3A%5C%2B%5B-.%5Cw%5D%2B)%3F&text=application%2Fvnd.adobe.photoshop)




### dc:format Example

```json
"application/vnd.adobe.photoshop"
```


## photoshop:ICCProfile
### ICC Profile

The [ICC color profile](http://www.color.org/iccprofile.xalter), such as AppleRGB, AdobeRGB1998.

`photoshop:ICCProfile`
* is optional
* type: `string`
* defined in [Image](image.schema.md#photoshopiccprofile)

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
* defined in [Image](image.schema.md#photoshopcolormode)

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




## plus:copyrightOwnerID
### Copyright Owner ID

ID of the copyright owner.
If the PLUS-ID being stored in this property is registered with the PLUS Coalition, it should be expressed as a URL. For example: http://plus-id.org/PLUS-ID.

`plus:copyrightOwnerID`
* is optional
* type: `string`
* defined in [Copyright Owner](copyright-owner.schema.md#pluscopyrightownerid)

### plus:copyrightOwnerID Type


`string`






## plus:copyrightOwnerName
### Copyright Owner Name

Name of Copyright Owner.

`plus:copyrightOwnerName`
* is optional
* type: `string`
* defined in [Copyright Owner](copyright-owner.schema.md#pluscopyrightownername)

### plus:copyrightOwnerName Type


`string`






## repo:createDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:createDate`
* is optional
* type: `string`
* defined in [Common Properties](../external/repo/common.schema.md#repocreatedate)

### repo:createDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:createDate Example

```json
"2004-10-23T12:00:00-06:00"
```


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
* is optional
* type: `string`
* defined in [Asset](../external/repo/asset.schema.md#repoetag)

### repo:etag Type


`string`






## repo:id

A unique identifier given to every addressable asset in a given repository.

`repo:id`
* is optional
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






## repo:modifyDate

The server date and time when the resource was last modified in the repository, such as when a new version of an asset is uploaded or a directory's child resource is added or removed. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:modifyDate`
* is optional
* type: `string`
* defined in [Common Properties](../external/repo/common.schema.md#repomodifydate)

### repo:modifyDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:modifyDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:name


`repo:name`
* is optional
* type: `string`
* defined in [Common Properties](../external/repo/common.schema.md#reponame)

### repo:name Type


`string`






## repo:path


`repo:path`
* is optional
* type: `string`
* defined in [Common Properties](../external/repo/common.schema.md#repopath)

### repo:path Type


`string`






## repo:size
### Size

Size of the asset in bytes.

`repo:size`
* is optional
* type: `integer`
* defined in [Asset](../external/repo/asset.schema.md#reposize)

### repo:size Type


`integer`
* minimum value: `0`






## repo:version

The version ID of the piece of content. It will be generated both on explicit and implicit save or upload.

`repo:version`
* is optional
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
* defined in [Image](image.schema.md#tiffxresolution)

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
* defined in [Image](image.schema.md#tiffyresolution)

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
* defined in [Image](image.schema.md#tifforientation)

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
* defined in [Image](image.schema.md#tiffresolutionunit)

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






## xdm:extent
### Duration

The duration of the video in milliseconds. This property is inspired by `dc:extent`. However, `dc:extent` does not specify units. `core:extent` is always an integer and describes the duration in milliseconds.

`xdm:extent`
* is optional
* type: `integer`
* defined in [Video](video.schema.md#xdmextent)

### xdm:extent Type


`integer`






## xmpDM:videoFrameRate
### Frame Rate

The video frame rate in frames per second (FPS). Predefined values include: 
 -`24`
 -`NTSC`
 -`PAL`
 Other values must include `f` and the integer value of the frame rate. Optionally, `s` and the integer value of the rate basis may be included.

These examples show common video and audio frame rates:
- Film at 24 fps (frame rate = 24, rate basis = 1): `f24`
- Speech-to-text in milliseconds (frame rate = 1000, rate basis = 1): `f1000`
- NTSC at 29.97 fps (frame rate = 30000, rate basis = 1001): `f30000s1001`.

`xmpDM:videoFrameRate`
* is optional
* type: `string`
* defined in [Video](video.schema.md#xmpdmvideoframerate)

### xmpDM:videoFrameRate Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=((f%5Cd%2B(s%5Cd%2B)%3F)%7CPAL%7CNTSC%7C24))):
```regex
((f\d+(s\d+)?)|PAL|NTSC|24)
```





