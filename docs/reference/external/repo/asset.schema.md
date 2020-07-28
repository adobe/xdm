
# Asset Schema

```
http://ns.adobe.com/adobecloud/core/1.0/asset
```

An _asset_, as defined here, is the principal construct within a _repository_. It is an asset that is created, read, updated, and deleted. It is assets that have identifiers, names, and metadata. It is assets that are organized into hierarchies and collections, and linked to each other. Assets include but are not limited to documents, images, audio, video, motion graphics, and 3D models.


| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [external/repo/asset.schema.json](external/repo/asset.schema.json) |
## Schema Hierarchy

* Asset `http://ns.adobe.com/adobecloud/core/1.0/asset`
  * [Common Properties](common.schema.md) `http://ns.adobe.com/adobecloud/core/1.0`
  * [HAL Resource](../hal/hal.schema.md) `https://ns.adobe.com/xdm/external/hal/resource`


## Asset Example
```json
{
  "repo:id": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ab",
  "repo:createDate": "2017-09-26T15:52:25+00:00",
  "repo:modifyDate": "2017-09-26T15:52:25+00:00",
  "repo:version": "15b",
  "repo:size": 1632418,
  "repo:path": "/users/joe/Project 1/logo.png",
  "repo:name": "logo.png",
  "repo:etag": "\"aa15\"",
  "dc:format": "image/png"
}
```

# Asset Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [_embedded](#_embedded) | `object` | Optional | [HAL Resource](../hal/hal.schema.md#_embedded) |
| [_links](#_links) | `object` | Optional | [HAL Resource](../hal/hal.schema.md#_links) |
| [dc:format](#dcformat) | `string` | **Required** | [Common Properties](common.schema.md#dcformat) |
| [repo:createDate](#repocreatedate) | `string` | **Required** | [Common Properties](common.schema.md#repocreatedate) |
| [repo:createdBy](#repocreatedby) | `string` | Optional | Asset (this schema) |
| [repo:etag](#repoetag) | `string` | **Required** | Asset (this schema) |
| [repo:id](#repoid) | `string` | **Required** | Asset (this schema) |
| [repo:modifiedBy](#repomodifiedby) | `string` | Optional | Asset (this schema) |
| [repo:modifyDate](#repomodifydate) | `string` | **Required** | [Common Properties](common.schema.md#repomodifydate) |
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


| Property | Type | Required |
|----------|------|----------|






## _links

It is an object whose property names are link relation types (as defined by [RFC5988](https://tools.ietf.org/html/rfc5988) and values are either a Link Object or an array of Link Objects.  The subject resource of these links is the Resource Object of which the containing `_links` object is a property.

`_links`
* is optional
* type: `object`
* defined in [HAL Resource](../hal/hal.schema.md#_links)

### _links Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## dc:format
### Format

The physical or digital manifestation of the resource. Typically, Format should include the media-type of the resource. Format may be used to determine the software, hardware or other equipment needed to display or operate the resource. Recommended best practice is to select a value from a controlled vocabulary (for example, the list of [Internet Media Types](http://www.iana.org/ assignments/media-types/) defining computer media formats).

`dc:format`
* is **required**
* type: `string`
* defined in [Common Properties](common.schema.md#dcformat)

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


## repo:createDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:createDate`
* is **required**
* type: `string`
* defined in [Common Properties](common.schema.md#repocreatedate)

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
* defined in this schema

### repo:createdBy Type


`string`






## repo:etag
### ETag

An  ETag is an HTTP response header returned by an HTTP/1.1 compliant web server used to determine change in content of a resource at a given URL. 

`repo:etag`
* is **required**
* type: `string`
* defined in this schema

### repo:etag Type


`string`






## repo:id

A unique identifier given to every addressable asset in a given repository.

`repo:id`
* is **required**
* type: `string`
* defined in this schema

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
* defined in this schema

### repo:modifiedBy Type


`string`






## repo:modifyDate

The server date and time when the resource was last modified in the repository, such as when a new version of an asset is uploaded or a directory's child resource is added or removed. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:modifyDate`
* is **required**
* type: `string`
* defined in [Common Properties](common.schema.md#repomodifydate)

### repo:modifyDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:modifyDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:name


`repo:name`
* is **required**
* type: `string`
* defined in [Common Properties](common.schema.md#reponame)

### repo:name Type


`string`






## repo:path


`repo:path`
* is **required**
* type: `string`
* defined in [Common Properties](common.schema.md#repopath)

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
* minimum value: `0`






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





