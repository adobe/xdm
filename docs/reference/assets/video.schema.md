
# Video Schema

```
https://ns.adobe.com/xdm/assets/video
```

The Video class is for video assets, i.e. assets that consist of moving pictures and, optionally, sound.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [assets/video.schema.json](assets/video.schema.json) |

## Schema Hierarchy

* Video `https://ns.adobe.com/xdm/assets/video`
  * [Asset](asset.schema.md) `https://ns.adobe.com/xdm/assets/asset`
  * [Rectangular Media](rectangular.schema.md) `https://ns.adobe.com/xdm/assets/rectangular`

## Video Examples

```json
{
  "repo:assetID": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ac",
  "xmp:createDate": "2017-09-26T15:52:25+00:00",
  "repo:createdDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryCreatedBy": "lars",
  "xmp:modifyDate": "2017-09-26T15:52:25+00:00",
  "repo:lastModifiedDate": "2017-09-26T15:52:25+00:00",
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

```json
{
  "repo:assetID": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ad",
  "xmp:createDate": "2017-09-26T15:52:25+00:00",
  "repo:createdDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryCreatedBy": "lars",
  "xmp:modifyDate": "2017-09-26T15:52:25+00:00",
  "repo:lastModifiedDate": "2017-09-26T15:52:25+00:00",
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


# Video Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [cc:attributionName](#ccattributionName) | `string` | Optional | [Asset](asset.schema.md#ccattributionName) |
| [cc:attributionUrl](#ccattributionUrl) | `string` | Optional | [Asset](asset.schema.md#ccattributionUrl) |
| [cc:license](#cclicense) | `string` | Optional | [Asset](asset.schema.md#cclicense) |
| [dc:creator](#dccreator) | `string[]` | Optional | [Asset](asset.schema.md#dccreator) |
| [dc:description](#dcdescription) | reference | Optional | [Asset](asset.schema.md#dcdescription) |
| [dc:language](#dclanguage) | `string[]` | Optional | [Asset](asset.schema.md#dclanguage) |
| [dc:rights](#dcrights) | reference | Optional | [Asset](asset.schema.md#dcrights) |
| [dc:subject](#dcsubject) | `string[]` | Optional | [Asset](asset.schema.md#dcsubject) |
| [dc:title](#dctitle) | reference | Optional | [Asset](asset.schema.md#dctitle) |
| [exif:gpsAltitude](#exifgpsAltitude) | `number` | Optional | [Asset](asset.schema.md#exifgpsAltitude) |
| [exif:gpsAltitudeRef](#exifgpsAltitudeRef) | `enum` | Optional | [Asset](asset.schema.md#exifgpsAltitudeRef) |
| [exif:gpsLatitude](#exifgpsLatitude) | `string` | Optional | [Asset](asset.schema.md#exifgpsLatitude) |
| [exif:gpsLongitude](#exifgpsLongitude) | `string` | Optional | [Asset](asset.schema.md#exifgpsLongitude) |
| [photoshop:credit](#photoshopcredit) | `string` | Optional | [Asset](asset.schema.md#photoshopcredit) |
| [plus:copyrightOwner](#pluscopyrightOwner) | reference | Optional | [Asset](asset.schema.md#pluscopyrightOwner) |
| [tiff:imageLength](#tiffimageLength) | `integer` | Optional | [Rectangular Media](rectangular.schema.md#tiffimageLength) |
| [tiff:imageWidth](#tiffimageWidth) | `integer` | Optional | [Rectangular Media](rectangular.schema.md#tiffimageWidth) |
| [xdm:aliasIDs](#xdmaliasIDs) | `array` | Optional | [Asset](asset.schema.md#xdmaliasIDs) |
| [xdm:aspectRatio](#xdmaspectRatio) | `number` | Optional | [Rectangular Media](rectangular.schema.md#xdmaspectRatio) |
| [xdm:documentID](#xdmdocumentID) | `string` | Optional | [Asset](asset.schema.md#xdmdocumentID) |
| [xdm:extent](#xdmextent) | `integer` | Optional | Video (this schema) |
| [xdm:milestone](#xdmmilestone) | `object` | Optional | [Asset](asset.schema.md#xdmmilestone) |
| [xdm:notSafe](#xdmnotSafe) | `enum` | Optional | [Asset](asset.schema.md#xdmnotSafe) |
| [xmp:artboards](#xmpartboards) | Artboard | Optional | [Asset](asset.schema.md#xmpartboards) |
| [xmp:createDate](#xmpcreateDate) | `string` | Optional | [Asset](asset.schema.md#xmpcreateDate) |
| [xmp:creatorTool](#xmpcreatorTool) | `string` | Optional | [Asset](asset.schema.md#xmpcreatorTool) |
| [xmp:fonts](#xmpfonts) | reference | Optional | [Asset](asset.schema.md#xmpfonts) |
| [xmp:keywords](#xmpkeywords) | `array` | Optional | [Asset](asset.schema.md#xmpkeywords) |
| [xmp:layers](#xmplayers) | complex | Optional | [Asset](asset.schema.md#xmplayers) |
| [xmp:machineKeywords](#xmpmachineKeywords) | `array` | Optional | [Asset](asset.schema.md#xmpmachineKeywords) |
| [xmp:modifyDate](#xmpmodifyDate) | `string` | Optional | [Asset](asset.schema.md#xmpmodifyDate) |
| [xmp:rating](#xmprating) | `enum` | Optional | [Asset](asset.schema.md#xmprating) |
| [xmpDM:videoFrameRate](#xmpDMvideoFrameRate) | `string` | Optional | Video (this schema) |
| [xmpMM:history](#xmpMMhistory) | reference | Optional | [Asset](asset.schema.md#xmpMMhistory) |
| [xmpMM:manageTo](#xmpMMmanageTo) | `string` | Optional | [Asset](asset.schema.md#xmpMMmanageTo) |
| [xmpMM:manageUI](#xmpMMmanageUI) | `string` | Optional | [Asset](asset.schema.md#xmpMMmanageUI) |
| [xmpRights:marked](#xmpRightsmarked) | `boolean` | Optional | [Asset](asset.schema.md#xmpRightsmarked) |
| [xmpRights:usageTerms](#xmpRightsusageTerms) | reference | Optional | [Asset](asset.schema.md#xmpRightsusageTerms) |
| [xmpRights:webStatement](#xmpRightswebStatement) | `string` | Optional | [Asset](asset.schema.md#xmpRightswebStatement) |
| [xmpTPg:NPages](#xmpTPgNPages) | `integer` | Optional | [Asset](asset.schema.md#xmpTPgNPages) |
| `*` | any | Additional | this schema *allows* additional properties |

## cc:attributionName
### Attribution Name

For licenses that require attribution, such as some Creative Commons licenses, the user to which a work is attributed. When publishing to Behance, this is taken from the user&#39;s Behance profile information.

`cc:attributionName`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#cc:attributionName)

### cc:attributionName Type


`string`






## cc:attributionUrl
### Attribution URL

For licenses that require attribution, such as some Creative Commons licenses, a URL that identifies the user to which a work should be attributed. When publishing to Behance, we link to the user&#39;s profile page.

`cc:attributionUrl`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#cc:attributionUrl)

### cc:attributionUrl Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## cc:license
### License

A license is a set of requests/permissions to users of a Work, e.g. a copyright license, the public domain, information for distributors.

`cc:license`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#cc:license)

### cc:license Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## dc:creator
### Creator

An entity primarily responsible for making the resource. Examples of a creator include a person, an organization, or a service. Typically, the name of a creator should be used to indicate the entity.

XMP usage is a list of creators. Entities should be listed in order of decreasing precedence, if such order is significant.

`dc:creator`
* is optional
* type: `string[]`

* defined in [Asset](asset.schema.md#dc:creator)

### dc:creator Type


Array type: `string[]`

All items must be of the type:
`string`









## dc:description
### Description

An account of the content of the resource. Description may include but is not limited to: an abstract, table of contents, reference to a graphical representation of content or a free-text account of the content.

`dc:description`
* is optional
* type: reference

* defined in [Asset](asset.schema.md#dc:description)

### dc:description Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/assets/language-alternative#/definitions/language-alternative`








## dc:language
### Language

The language or languages of the resource.
Languages are specified in language code as defined in [IETF RFC 3066](https://www.ietf.org/rfc/rfc3066.txt), which is part of BCP 47, which is used elsewhere in XDM.

`dc:language`
* is optional
* type: `string[]`

* defined in [Asset](asset.schema.md#dc:language)

### dc:language Type


Array type: `string[]`

All items must be of the type:
`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E((((%5BA-Za-z%5D%7B2%2C3%7D(-(%5BA-Za-z%5D%7B3%7D(-%5BA-Za-z%5D%7B3%7D)%7B0%2C2%7D))%3F)%7C%5BA-Za-z%5D%7B4%7D%7C%5BA-Za-z%5D%7B5%2C8%7D)(-(%5BA-Za-z%5D%7B4%7D))%3F(-(%5BA-Za-z%5D%7B2%7D%7C%5B0-9%5D%7B3%7D))%3F(-(%5BA-Za-z0-9%5D%7B5%2C8%7D%7C%5B0-9%5D%5BA-Za-z0-9%5D%7B3%7D))*(-(%5B0-9A-WY-Za-wy-z%5D(-%5BA-Za-z0-9%5D%7B2%2C8%7D)%2B))*(-(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B))%3F)%7C(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B)%7C((en-GB-oed%7Ci-ami%7Ci-bnn%7Ci-default%7Ci-enochian%7Ci-hak%7Ci-klingon%7Ci-lux%7Ci-mingo%7Ci-navajo%7Ci-pwn%7Ci-tao%7Ci-tay%7Ci-tsu%7Csgn-BE-FR%7Csgn-BE-NL%7Csgn-CH-DE)%7C(art-lojban%7Ccel-gaulish%7Cno-bok%7Cno-nyn%7Czh-guoyu%7Czh-hakka%7Czh-min%7Czh-min-nan%7Czh-xiang)))%24)):
```regex
^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$
```







### dc:language Examples

```json
"\n"
```

```json
"pt-BR"
```

```json
"es-ES"
```



## dc:rights
### Rights

Information about rights held in and over the resource.
We can live without mentioning locale if only one entry is there. Default locale is en_us.
Locale codes should follow IETF BCP 47 standard.

`dc:rights`
* is optional
* type: reference

* defined in [Asset](asset.schema.md#dc:rights)

### dc:rights Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/assets/language-alternative#/definitions/language-alternative`








## dc:subject
### Subject

Set of descriptive phrases or keywords that describe the content of the resource. These keywords are part of the XMP metadata of the asset. Compare this with the `keyword` and `machineKeywords` properties, which provide more structure and context.

`dc:subject`
* is optional
* type: `string[]`

* defined in [Asset](asset.schema.md#dc:subject)

### dc:subject Type


Array type: `string[]`

All items must be of the type:
`string`









## dc:title
### Title

A name given to the resource. Typically, a Title will be a name by which the resource is formally known.

`dc:title`
* is optional
* type: reference

* defined in [Asset](asset.schema.md#dc:title)

### dc:title Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/assets/language-alternative#/definitions/language-alternative`








## exif:gpsAltitude
### GPS Altitude

GPS tag 6, 0x06. Indicates altitude in meters.

`exif:gpsAltitude`
* is optional
* type: `number`
* defined in [Asset](asset.schema.md#exif:gpsAltitude)

### exif:gpsAltitude Type


`number`






## exif:gpsAltitudeRef
### GPS Altitude Reference

GPS tag 5, 0x5. Indicates whether the altitude is above or below sea level.

`exif:gpsAltitudeRef`
* is optional
* type: `enum`
* defined in [Asset](asset.schema.md#exif:gpsAltitudeRef)

The value of this property **must** be equal to one of the [known values below](#exif:gpsAltitudeRef-known-values).

### exif:gpsAltitudeRef Known Values
| Value | Description |
|-------|-------------|
| `0` | The `exif:gpsAltitude` specifies a value above sea level |
| `1` | The `exif:gpsAltitude` specifies a value below sea level |




## exif:gpsLatitude
### GPS Latitude

GPS tag 2, 0x02 (position) and 1, 0x01 (North/South). Indicates latitude. A Text value in the form “DDD,MM,SSk” or “DDD,MM.mmk”, where:
* DDD is a number of degrees
* MM is a number of minutes
* SS is a number of seconds
* mm is a fraction of minutes
* k is a single character N or S, indicating a direction (north, south)
Leading zeros are not necessary for the for DDD, MM, and SS values. The DDD,MM.mmk form should be used when any of the native Exif component rational values has a denominator other than 1. There can be any number of fractional digits.

`exif:gpsLatitude`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#exif:gpsLatitude)

### exif:gpsLatitude Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B%5Cd%5D%7B1%2C3%7D%2C%5B%5Cd%5D%7B1%2C2%7D(%2C%5B%5Cd%5D%7B1%2C2%7D%7C.%5B%5Cd%5D%2B)%5BNS%5D%24)):
```regex
^[\d]{1,3},[\d]{1,2}(,[\d]{1,2}|.[\d]+)[NS]$
```






## exif:gpsLongitude
### GPS Longitude

GPS tag 4, 0x04 (position) and 3, 0x03 (East/West). Indicates longitude. A Text value in the form “DDD,MM,SSk” or “DDD,MM.mmk”, where:
* DDD is a number of degrees
* MM is a number of minutes
* SS is a number of seconds
* mm is a fraction of minutes
* k is a single character E or W, indicating a direction (east, west)
Leading zeros are not necessary for the for DDD, MM, and SS values. The DDD,MM.mmk form should be used when any of the native Exif component rational values has a denominator other than 1. There can be any number of fractional digits.

`exif:gpsLongitude`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#exif:gpsLongitude)

### exif:gpsLongitude Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B%5Cd%5D%7B1%2C3%7D%2C%5B%5Cd%5D%7B1%2C2%7D(%2C%5B%5Cd%5D%7B1%2C2%7D%7C.%5B%5Cd%5D%2B)%5BEW%5D%24)):
```regex
^[\d]{1,3},[\d]{1,2}(,[\d]{1,2}|.[\d]+)[EW]$
```






## photoshop:credit
### Credit

Who should be credited when the asset is published.

`photoshop:credit`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#photoshop:credit)

### photoshop:credit Type


`string`






## plus:copyrightOwner
### Copyright Owners

Owner or owners of the copyright in the licensed asset.

`plus:copyrightOwner`
* is optional
* type: reference

* defined in [Asset](asset.schema.md#plus:copyrightOwner)

### plus:copyrightOwner Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/assets/copyright-owner#/definitions/copyright`








## tiff:imageLength
### Length

Height in pixels. To maintain continuity with the XMP and TIFF standards, the height of an image or video is specified in the property `imageLength`. The duration of the video (also commonly called length) is specified in the property `extent`

`tiff:imageLength`
* is optional
* type: `integer`
* defined in [Rectangular Media](rectangular.schema.md#tiff:imageLength)

### tiff:imageLength Type


`integer`
* minimum value: `0`






## tiff:imageWidth
### Width

Width in pixels

`tiff:imageWidth`
* is optional
* type: `integer`
* defined in [Rectangular Media](rectangular.schema.md#tiff:imageWidth)

### tiff:imageWidth Type


`integer`
* minimum value: `0`






## xdm:aliasIDs
### Alias IDs

List of IDs under which external systems track the asset. Example of external systems : google, facebook etc.

`xdm:aliasIDs`
* is optional
* type: `array`

* defined in [Asset](asset.schema.md#xdm:aliasIDs)

### xdm:aliasIDs Type


Array type: `array`

All items must be of the type:
Unknown type ``.

```json
{
  "type": "array",
  "meta:usereditable": false,
  "title": "Alias IDs",
  "items": {
    "properties": {
      "system": {
        "title": "External System",
        "type": "string",
        "description": "A string used to identify the external systems like google, facebook etc."
      },
      "id": {
        "type": "string",
        "title": "External ID",
        "description": "An Id under which external systems track the asset."
      }
    },
    "simpletype": "complex"
  },
  "description": "List of IDs under which external systems track the asset. Example of external systems : google, facebook etc.",
  "$oSchema": {
    "$linkVal": "Asset",
    "$linkPath": "asset.schema.md"
  },
  "simpletype": "`array`"
}
```








## xdm:aspectRatio
### Aspect Ratio

Describes the proportional relationship between the width and the height. To determine the aspect ratio, divide width by height. Media that have an aspect ratio smaller than one are in landscape format, media that have an aspect ratio greater than one are in portrait format.

`xdm:aspectRatio`
* is optional
* type: `number`
* defined in [Rectangular Media](rectangular.schema.md#xdm:aspectRatio)

### xdm:aspectRatio Type


`number`
* minimum value: `0`






## xdm:documentID
### Document ID

It takes the value of xmpMM:DocumentID present in the [XMP packet of the asset](http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/xmp/pdfs/XMP%20SDK%20Release%20cc-2014-12/XMPSpecificationPart1.pdf). For the assets having no XMP packet this property won&#39;t be populated. 

The value is a GUID, capital A-F, 8-4-4-12, preceded by the string `uuid:`

`xdm:documentID`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#xdm:documentID)

### xdm:documentID Type


`string`


All instances must conform to this regular expression 
```regex
^uuid:[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$
```

* test example: [uuid:00112233-4455-6677-8899-AABBCCDDEEFF](https://regexr.com/?expression=%5Euuid%3A%5BA-Fa-f0-9%5D%7B8%7D-%5BA-Fa-f0-9%5D%7B4%7D-%5BA-Fa-f0-9%5D%7B4%7D-%5BA-Fa-f0-9%5D%7B4%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=uuid%3A00112233-4455-6677-8899-AABBCCDDEEFF)




### xdm:documentID Example

```json
"uuid:00112233-4455-6677-8899-AABBCCDDEEFF"
```


## xdm:extent
### Duration

The duration of the video in milliseconds. This property is inspired by `dc:extent`. However, `dc:extent` does not specify units. `core:extent` is always an integer and describes the duration in milliseconds.

`xdm:extent`
* is optional
* type: `integer`
* defined in this schema

### xdm:extent Type


`integer`






## xdm:milestone
### Milestone

A label given to a version of the asset.

`xdm:milestone`
* is optional
* type: `object`
* defined in [Asset](asset.schema.md#xdm:milestone)

### xdm:milestone Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|
| `description`| string | Optional | 
| `label`| string | Optional | 



#### description
##### Milestone Description

Description for the version of an asset

`description`
* is optional
* type: `string`

##### description Type


`string`








#### label
##### Milestone Label

Label for the version of an asset

`label`
* is optional
* type: `string`

##### label Type


`string`











## xdm:notSafe
### NSFW State

Indicates if the content is SFW (safe for work). Safe is value 0 or missing value. NSFW is value 1.

`xdm:notSafe`
* is optional
* type: `enum`
* defined in [Asset](asset.schema.md#xdm:notSafe)

The value of this property **must** be equal to one of the [known values below](#xdm:notSafe-known-values).

### xdm:notSafe Known Values
| Value | Description |
|-------|-------------|
| `0` | The content is safe for work |
| `1` | The content is not safe for work |




## xmp:artboards
### Artboards

Contains the artboards that are being used in the document. A document can have multiple artboards.

`xmp:artboards`
* is optional
* type: Artboard

* defined in [Asset](asset.schema.md#xmp:artboards)

### xmp:artboards Type


Array type: Artboard

All items must be of the type:
* [Artboard](artboard.schema.md) – `https://ns.adobe.com/xdm/assets/artboard`








## xmp:createDate
### Date Created

The date and time the resource was created. It will be taken from within the asset.

`xmp:createDate`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#xmp:createDate)

### xmp:createDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xmp:creatorTool
### Creator Tool

Name of the application which authored the asset. It takes the value present in `xmp:CreatorTool` property in XMP.
It is recommended that the value use this format convention:
Organization Software_name Version (token;token;...)
- Organization: The name of the company or organization providing the software, no SPACEs.
- Software_name: The full name of the software, SPACEs allowed.
- version: The version of the software, no SPACEs.
- tokens: Can be used to identify an operating system, plug-in, or more detailed version information.

`xmp:creatorTool`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#xmp:creatorTool)

### xmp:creatorTool Type


`string`






## xmp:fonts
### Fonts

This is a list of fonts and typefaces that are used in the document. The order of fonts does not matter.

`xmp:fonts`
* is optional
* type: reference

* defined in [Asset](asset.schema.md#xmp:fonts)

### xmp:fonts Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/assets/font#/definitions/font`








## xmp:keywords
### Keywords

The `keywords` property is used to track human-assigned descriptive phrases like keywords or tags of an asset. Rather than a plan list of tags, it is a structured set of keywords, where keywords can have an explicit importance ranking and a locale. This allows the management of multi-lingual keywords for a given asset. For machine-generated keywords, use the `machineKeywords` property. 

`xmp:keywords`
* is optional
* type: `array`

* defined in [Asset](asset.schema.md#xmp:keywords)

### xmp:keywords Type


Array type: `array`

All items must be of the type:
Unknown type ``.

```json
{
  "type": "array",
  "title": "Keywords",
  "items": {
    "$schema": "http://json-schema.org/draft-06/schema#",
    "title": "Keyword",
    "description": "The `Keyword` schema describes a keyword in a list of keywords, with specific locale and importance relative to other keywords in the same list.",
    "properties": {
      "value": {
        "title": "Value",
        "description": "The keyword itself. A keyword can be considered like a tag, i.e. a short description of the content of the asset.",
        "type": "string"
      },
      "localeCode": {
        "type": "string",
        "pattern": "^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$",
        "description": "Language of the keyword. The locale code should follow [RFC BCP 47](https://tools.ietf.org/html/bcp47)",
        "examples": [
          "en-US",
          "de-CH"
        ]
      },
      "importance": {
        "type": "number",
        "title": "Importance",
        "minimum": 0,
        "maximum": 1,
        "description": "The importance of the keyword on a scale from zero to one. If required repository will infer it as per its policies and add it for the keywords"
      }
    },
    "required": [
      "value"
    ],
    "simpletype": "complex"
  },
  "description": "The `keywords` property is used to track human-assigned descriptive phrases like keywords or tags of an asset. Rather than a plan list of tags, it is a structured set of keywords, where keywords can have an explicit importance ranking and a locale. This allows the management of multi-lingual keywords for a given asset. For machine-generated keywords, use the `machineKeywords` property. ",
  "$oSchema": {
    "$linkVal": "Asset",
    "$linkPath": "asset.schema.md"
  },
  "simpletype": "`array`"
}
```


  
The `Keyword` schema describes a keyword in a list of keywords, with specific locale and importance relative to other keywords in the same list.







## xmp:layers


`xmp:layers`
* is optional
* type: complex
* defined in [Asset](asset.schema.md#xmp:layers)

### xmp:layers Type

Unknown type ``.

```json
{
  "properties": {
    "xdm:name": {
      "type": "string",
      "title": "Name",
      "description": "Name of the Layer Group. This will be visible to the user and users can specify names that can help them to identify different Layer Groups"
    },
    "xdm:layers": {
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
        ]
      }
    }
  },
  "$oSchema": {
    "$linkVal": "Asset",
    "$linkPath": "asset.schema.md"
  },
  "simpletype": "complex"
}
```





## xmp:machineKeywords

The `machineKeywords` property is used to track machine-assigned descriptive phrases like keywords or tags of an asset. Rather than a plan list of tags, it is a structured set of keywords, where keywords can have an explicit confidence ranking and a locale. For human-defined keywords, use the `keywords` property. 

`xmp:machineKeywords`
* is optional
* type: `array`

* defined in [Asset](asset.schema.md#xmp:machineKeywords)

### xmp:machineKeywords Type


Array type: `array`

All items must be of the type:
Unknown type ``.

```json
{
  "meta:usereditable": false,
  "type": "array",
  "items": {
    "$schema": "http://json-schema.org/draft-06/schema#",
    "properties": {
      "confidence": {
        "type": "number",
        "minimum": 0,
        "maximum": 1,
        "description": "Confidence of the algorithm that this keyword is applicable to the asset. Confidence values are numbers between zero and one. A value of .95 indicates that the algorithm expects less than 5% of all tags with the same confidence value to be mis-applied, i.e. not to be a proper description of the asset."
      },
      "algorithm": {
        "type": "string",
        "description": "Name of the algorithm which generated the keyword."
      },
      "value": {
        "type": "string",
        "description": "The keyword itself. A keyword can be considered like a tag, i.e. a short description of the content of the asset."
      },
      "localeCode": {
        "type": "string",
        "pattern": "^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$",
        "description": "Language of the keyword. The locale code should follow [RFC BCP47](https://tools.ietf.org/html/bcp47)"
      }
    },
    "simpletype": "complex"
  },
  "description": "The `machineKeywords` property is used to track machine-assigned descriptive phrases like keywords or tags of an asset. Rather than a plan list of tags, it is a structured set of keywords, where keywords can have an explicit confidence ranking and a locale. For human-defined keywords, use the `keywords` property. ",
  "$oSchema": {
    "$linkVal": "Asset",
    "$linkPath": "asset.schema.md"
  },
  "simpletype": "`array`"
}
```








## xmp:modifyDate
### Mofification Date

The date and time when asset was last modified. The Date Time property should conform to ISO 8601 standard. An example form is &#34;2004-10-23T12:00:00-06:00&#34;. Opposed to `repositoryLastModifiedDate`, this is the time when the asset was last modified locally, with or without knowledge of the repository.

`xmp:modifyDate`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#xmp:modifyDate)

### xmp:modifyDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xmp:rating
### Rating

A user-assigned editable rating for this file. The value shall be -1 or in the range [0..5], where -1 indicates “rejected” and 0 indicates “unrated”. If xmp:Rating is not present, a value of 0 should be assumed. NOTE: Anticipated usage is for a typical “star rating” UI, with the addition of a notion of rejection.

`xmp:rating`
* is optional
* type: `enum`
* defined in [Asset](asset.schema.md#xmp:rating)

The value of this property **must** be equal to one of the [known values below](#xmp:rating-known-values).

### xmp:rating Known Values
| Value | Description |
|-------|-------------|
| `0` |  |
| `1` | ⭑ |
| `2` | ⭑⭑ |
| `3` | ⭑⭑⭑ |
| `4` | ⭑⭑⭑⭑ |
| `5` | ⭑⭑⭑⭑⭑ |
| `-1` | rejected |




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
- NTSC at 29.97 fps (frame rate = 30000, rate basis = 1001): `f30000s1001`

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






## xmpMM:history
### History

High-level actions that resulted in the creation of this asset. It is intended to give human readers a description of the steps taken to make the changes from the previous version to this one. The list should be at an abstract level; it is not intended to be an exhaustive keystroke or other detailed history. The description should be sufficient for metadata management, as well as for workflow enhancement.

`xmpMM:history`
* is optional
* type: reference

* defined in [Asset](asset.schema.md#xmpMM:history)

### xmpMM:history Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/assets/resource-event#/definitions/resource-event`








## xmpMM:manageTo
### Manage To

A URI identifying the managed resource to the asset management system; the presence of this property is the formal indication that this resource is managed. The form and content of this URI is private to the asset management system.

`xmpMM:manageTo`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#xmpMM:manageTo)

### xmpMM:manageTo Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xmpMM:manageUI
### Manage UI

A URI that can be used to access information about the managed resource through a web browser.

`xmpMM:manageUI`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#xmpMM:manageUI)

### xmpMM:manageUI Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xmpRights:marked
### Marked

When true, indicates that this is a rights-managed resource. When false, indicates that this is a public-domain resource. Omit if the state is unknown.

`xmpRights:marked`
* is optional
* type: `boolean`
* defined in [Asset](asset.schema.md#xmpRights:marked)

### xmpRights:marked Type


`boolean`





## xmpRights:usageTerms
### Usage Terms

A collection of text instructions on how a resource can be legally used, given in a variety of languages.

`xmpRights:usageTerms`
* is optional
* type: reference

* defined in [Asset](asset.schema.md#xmpRights:usageTerms)

### xmpRights:usageTerms Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/assets/language-alternative#/definitions/language-alternative`








## xmpRights:webStatement

A Web URL for a statement of the ownership and usage rights for this resource. This is a normal (non-URI) simple value because of historical usage.

`xmpRights:webStatement`
* is optional
* type: `string`
* defined in [Asset](asset.schema.md#xmpRights:webStatement)

### xmpRights:webStatement Type


`string`





### xmpRights:webStatement Example

```json
"http://creativecommons.org/licenses/by/4.0/"
```


## xmpTPg:NPages
### Number of pages

The number of pages in the document (including any in contained documents).

`xmpTPg:NPages`
* is optional
* type: `integer`
* defined in [Asset](asset.schema.md#xmpTPg:NPages)

### xmpTPg:NPages Type


`integer`
* minimum value: `0`





