
# Video Schema

```
https://ns.adobe.com/xdm/assets/video
```

The video class is for video assets, i.e. assets that consist of moving pictures and, optionally, sound.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [assets/video.schema.json](assets/video.schema.json) |
## Schema Hierarchy

* Video `https://ns.adobe.com/xdm/assets/video`
  * [Asset](../external/repo/asset.schema.md) `http://ns.adobe.com/adobecloud/core/1.0/asset`
  * [Simple Rectangular Area](rectangular.schema.md) `https://ns.adobe.com/xdm/assets/rectangular`


## Video Examples

```json
{
  "repo:id": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ad",
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
  "tiff:imageLength": 2160,
  "tiff:imageWidth": 3840,
  "xdm:aspectRatio": 1.77777777778,
  "xdm:extent": 10920000,
  "xdm:videoFrameRate": "f48s1"
}
```

```json
{
  "repo:id": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ac",
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
  "tiff:imageLength": 2160,
  "tiff:imageWidth": 3840,
  "xdm:aspectRatio": 1.77777777778,
  "xdm:extent": 11700000,
  "xdm:videoFrameRate": "NTSC"
}
```


# Video Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [repo:createdBy](#repocreatedby) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repocreatedby) |
| [repo:etag](#repoetag) | `string` | **Required** | [Asset](../external/repo/asset.schema.md#repoetag) |
| [repo:id](#repoid) | `string` | **Required** | [Asset](../external/repo/asset.schema.md#repoid) |
| [repo:modifiedBy](#repomodifiedby) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repomodifiedby) |
| [repo:size](#reposize) | `integer` | **Required** | [Asset](../external/repo/asset.schema.md#reposize) |
| [repo:version](#repoversion) | `string` | **Required** | [Asset](../external/repo/asset.schema.md#repoversion) |
| [tiff:imageLength](#tiffimagelength) | `integer` | Optional | [Simple Rectangular Area](rectangular.schema.md#tiffimagelength) |
| [tiff:imageWidth](#tiffimagewidth) | `integer` | Optional | [Simple Rectangular Area](rectangular.schema.md#tiffimagewidth) |
| [xdm:aspectRatio](#xdmaspectratio) | `number` | Optional | [Simple Rectangular Area](rectangular.schema.md#xdmaspectratio) |
| [xdm:extent](#xdmextent) | `integer` | Optional | Video (this schema) |
| [xmpDM:videoFrameRate](#xmpdmvideoframerate) | `string` | Optional | Video (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

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
* defined in this schema

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
* defined in this schema

### xmpDM:videoFrameRate Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=((f%5Cd%2B(s%5Cd%2B)%3F)%7CPAL%7CNTSC%7C24))):
```regex
((f\d+(s\d+)?)|PAL|NTSC|24)
```





