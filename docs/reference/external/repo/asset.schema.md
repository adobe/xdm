
# Asset Schema

```
http://ns.adobe.com/adobecloud/core/1.0/asset
```

An asset in Adobe Cloud Platform. It is not neccessarily a Digital Asset in the sense of Digital Asset Management, but a piece of content or data that can be represented in the form of a file.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [external/repo/asset.schema.json](external/repo/asset.schema.json) |
## Schema Hierarchy

* Asset `http://ns.adobe.com/adobecloud/core/1.0/asset`
  * [Common Properties](common.schema.md) `http://ns.adobe.com/adobecloud/core/1.0`
  * [HAL Resource](../hal/hal.schema.md) `https://ns.adobe.com/xdm/external/hal/resource`


## Asset Example
```json
{
  "repo:assetID": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ab",
  "repo:createdDate": "2017-09-26T15:52:25+00:00",
  "repo:lastModifiedDate": "2017-09-26T15:52:25+00:00",
  "repo:version": "15",
  "repo:size": 1632418,
  "repo:path": "here",
  "repo:name": "example.png",
  "repo:etag": "15",
  "dc:format": "image/png"
}
```

# Asset Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [_embedded](#_embedded) | `object` | Optional | [HAL Resource](../hal/hal.schema.md#_embedded) |
| [_links](#_links) | `object` | Optional | [HAL Resource](../hal/hal.schema.md#_links) |
| [dc:format](#dcformat) | `string` | **Required** | [Common Properties](common.schema.md#dcformat) |
| [repo:assetID](#repoassetid) | `string` | **Required** | Asset (this schema) |
| [repo:createDate](#repocreatedate) | `string` | Optional | [Common Properties](common.schema.md#repocreatedate) |
| [repo:etag](#repoetag) | `string` | **Required** | Asset (this schema) |
| [repo:lastModifiedDate](#repolastmodifieddate) | `string` | **Required** | [Common Properties](common.schema.md#repolastmodifieddate) |
| [repo:name](#reponame) | `string` | **Required** | [Common Properties](common.schema.md#reponame) |
| [repo:path](#repopath) | `string` | **Required** | [Common Properties](common.schema.md#repopath) |
| [repo:size](#reposize) | `integer` | **Required** | Asset (this schema) |
| [repo:version](#repoversion) | `string` | **Required** | Asset (this schema) |
| [tiff:imageLength](#tiffimagelength) | `integer` | Optional | Asset (this schema) |
| [tiff:imageWidth](#tiffimagewidth) | `integer` | Optional | Asset (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## _embedded

It is an object whose property names are link relation types (as defined by [RFC5988](https://tools.ietf.org/html/rfc5988)) and values are either a Resource Object or an array of Resource Objects.\n\nEmbedded Resources MAY be a full, partial, or inconsistent version of the representation served from the target URI.

`_embedded`
* is optional
* type: `object`
* defined in [HAL Resource](../hal/hal.schema.md#_embedded)

### _embedded Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|






## _links

It is an object whose property names are link relation types (as defined by [RFC5988](https://tools.ietf.org/html/rfc5988) and values are either a Link Object or an array of Link Objects.  The subject resource of these links is the Resource Object of which the containing `_links` object is a property.

`_links`
* is optional
* type: `object`
* defined in [HAL Resource](../hal/hal.schema.md#_links)

### _links Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|






## dc:format
### Format

The physical or digital manifestation of the resource. Typically, Format should include the media-type of the resource. Format may be used to determine the software, hardware or other equipment needed to display or operate the resource. Recommended best practice is to select a value from a controlled vocabulary (for example, the list of [Internet Media Types](http://www.iana.org/ assignments/media-types/) defining computer media formats).

`dc:format`
* is **required**
* type: `string`
* defined in [Common Properties](common.schema.md#dc:format)

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


## repo:assetID

A unique identifier given to every addressable asset in a given repository.

The format is a [GUID-based URN](https://www.ietf.org/rfc/rfc4122.txt). The pattern to generate an Asset ID is ```urn:aaid:{system}:{id} - {format}:{namespace}:{system}:{id}```

`repo:assetID`
* is **required**
* type: `string`
* defined in this schema

### repo:assetID Type


`string`


All instances must conform to this regular expression 
```regex
^urn:aaid:[A-Za-z0-9]+:[A-Za-z0-9]+:[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$
```

* test example: [urn:aaid:sc:US:6dc33479-13ca-4b19-b25d-c805eff8a69e](https://regexr.com/?expression=%5Eurn%3Aaaid%3A%5BA-Za-z0-9%5D%2B%3A%5BA-Za-z0-9%5D%2B%3A%5BA-Fa-f0-9%5D%7B8%7D-%5BA-Fa-f0-9%5D%7B4%7D-%5BA-Fa-f0-9%5D%7B4%7D-%5BA-Fa-f0-9%5D%7B4%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=urn%3Aaaid%3Asc%3AUS%3A6dc33479-13ca-4b19-b25d-c805eff8a69e)




### repo:assetID Example

```json
"urn:aaid:sc:US:6dc33479-13ca-4b19-b25d-c805eff8a69e"
```


## repo:createDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The Date Time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:createDate`
* is optional
* type: `string`
* defined in [Common Properties](common.schema.md#repo:createDate)

### repo:createDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:createDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:etag
### ETag

An  ETag is an HTTP response header returned by an HTTP/1.1 compliant web server used to determine change in content of a resource at a given URL. 

`repo:etag`
* is **required**
* type: `string`
* defined in this schema

### repo:etag Type


`string`






## repo:lastModifiedDate

The server date and time when the resource was most recently modified in the repository, such as when a new version of an asset is uploaded or a directory's child resource is added or removed. The Date Time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:lastModifiedDate`
* is **required**
* type: `string`
* defined in [Common Properties](common.schema.md#repo:lastModifiedDate)

### repo:lastModifiedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:lastModifiedDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:name


`repo:name`
* is **required**
* type: `string`
* defined in [Common Properties](common.schema.md#repo:name)

### repo:name Type


`string`






## repo:path


`repo:path`
* is **required**
* type: `string`
* defined in [Common Properties](common.schema.md#repo:path)

### repo:path Type


`string`






## repo:size
### Size

Size of the asset in bytes.

`repo:size`
* is **required**
* type: `integer`
* defined in this schema

### repo:size Type


`integer`






## repo:version

The version ID of the piece of content. It will be generated both on explicit and implicit save or upload.

`repo:version`
* is **required**
* type: `string`
* defined in this schema

### repo:version Type


`string`






## tiff:imageLength
### Length

Height in pixels. To maintain continuity with the XMP and TIFF standards, the height of an image or video is specified in the property `imageLength`. The duration of the video (also commonly called length) is specified in the property `extent`

`tiff:imageLength`
* is optional
* type: `integer`
* defined in this schema

### tiff:imageLength Type


`integer`
* minimum value: `0`






## tiff:imageWidth
### Width

Width in pixels

`tiff:imageWidth`
* is optional
* type: `integer`
* defined in this schema

### tiff:imageWidth Type


`integer`
* minimum value: `0`





