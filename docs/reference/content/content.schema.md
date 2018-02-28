
# Content Schema

```
https://ns.adobe.com/xdm/content/content
```

Content is information that is directed towards an audience for consumption in a (digital) experience. Content is delivered through channels (or a particular medium), but the essence of content remains independent from the devliery medium.

In [Web Content Management by Deane Barker](https://www.safaribooksonline.com/library/view/web-content-management/9781491908112/ch01.html) two key differences between content and other digital information are pointed out:

&gt; 1.  Content is _created_ differently
&gt; 2.  Content is _used_ differently

These differences boil down to a number of key characteristics of content.

_Content is created by human editors_ in an editorial process that involves creation, revision, and publishing.

_Content is created for human audiences_, which gives the content the ultimate value.


| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [content/content.schema.json](content/content.schema.json) |

## Schema Hierarchy

* Content `https://ns.adobe.com/xdm/content/content`
  * [Asset](../external/repo/asset.schema.md) `http://ns.adobe.com/adobecloud/core/1.0/asset`
  * [Common Properties](../external/repo/common.schema.md) `http://ns.adobe.com/adobecloud/core/1.0`
  * [HAL Resource](../external/hal/hal.schema.md) `https://ns.adobe.com/xdm/external/hal/resource`

## Content Example
```json
{
  "@id": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ab",
  "repo:createdDate": "2017-11-23T13:11:05+00:00",
  "xdm:repositoryCreatedBy": "lars",
  "repo:lastModifiedDate": "2017-11-23T13:11:05+00:00",
  "xdm:repositoryLastModifiedBy": "lars",
  "repo:version": "1"
}
```

# Content Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `string` | Optional | Content (this schema) |
| [_embedded](#_embedded) | `object` | Optional | [HAL Resource](../external/hal/hal.schema.md#_embedded) |
| [_links](#_links) | `object` | Optional | [HAL Resource](../external/hal/hal.schema.md#_links) |
| [dc:format](#dcformat) | `string` | Optional | [Common Properties](../external/repo/common.schema.md#dcformat) |
| [repo:assetID](#repoassetID) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repoassetID) |
| [repo:createDate](#repocreateDate) | `string` | Optional | [Common Properties](../external/repo/common.schema.md#repocreateDate) |
| [repo:etag](#repoetag) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repoetag) |
| [repo:lastModifiedDate](#repolastModifiedDate) | `string` | Optional | [Common Properties](../external/repo/common.schema.md#repolastModifiedDate) |
| [repo:name](#reponame) | `string` | Optional | [Common Properties](../external/repo/common.schema.md#reponame) |
| [repo:path](#repopath) | `string` | Optional | [Common Properties](../external/repo/common.schema.md#repopath) |
| [repo:size](#reposize) | `integer` | Optional | [Asset](../external/repo/asset.schema.md#reposize) |
| [repo:version](#repoversion) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repoversion) |
| [tiff:imageLength](#tiffimageLength) | `integer` | Optional | [Asset](../external/repo/asset.schema.md#tiffimageLength) |
| [tiff:imageWidth](#tiffimageWidth) | `integer` | Optional | [Asset](../external/repo/asset.schema.md#tiffimageWidth) |
| [xdm:repositoryCreatedBy](#xdmrepositoryCreatedBy) | `string` | Optional | Content (this schema) |
| [xdm:repositoryLastModifiedBy](#xdmrepositoryLastModifiedBy) | `string` | Optional | Content (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

A unique identifier given to every addressable piece of content in a given repository.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## _embedded

It is an object whose property names are link relation types (as defined by [RFC5988](https://tools.ietf.org/html/rfc5988)) and values are either a Resource Object or an array of Resource Objects.\n\nEmbedded Resources MAY be a full, partial, or inconsistent version of the representation served from the target URI.

`_embedded`
* is optional
* type: `object`
* defined in [HAL Resource](../external/hal/hal.schema.md#_embedded)

### _embedded Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|






## _links

It is an object whose property names are link relation types (as defined by [RFC5988](https://tools.ietf.org/html/rfc5988) and values are either a Link Object or an array of Link Objects.  The subject resource of these links is the Resource Object of which the containing `_links` object is a property.

`_links`
* is optional
* type: `object`
* defined in [HAL Resource](../external/hal/hal.schema.md#_links)

### _links Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|






## dc:format
### Format

The physical or digital manifestation of the resource. Typically, Format should include the media-type of the resource. Format may be used to determine the software, hardware or other equipment needed to display or operate the resource. Recommended best practice is to select a value from a controlled vocabulary (for example, the list of [Internet Media Types](http://www.iana.org/ assignments/media-types/) defining computer media formats).

`dc:format`
* is optional
* type: `string`
* defined in [Common Properties](../external/repo/common.schema.md#dc:format)

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
* is optional
* type: `string`
* defined in [Asset](../external/repo/asset.schema.md#repo:assetID)

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

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The Date Time property should conform to ISO 8601 standard. An example form is &#34;2004-10-23T12:00:00-06:00&#34;.

`repo:createDate`
* is optional
* type: `string`
* defined in [Common Properties](../external/repo/common.schema.md#repo:createDate)

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
* is optional
* type: `string`
* defined in [Asset](../external/repo/asset.schema.md#repo:etag)

### repo:etag Type


`string`






## repo:lastModifiedDate

The server date and time when the resource was most recently modified in the repository, such as when a new version of an asset is uploaded or a directory&#39;s child resource is added or removed. The Date Time property should conform to ISO 8601 standard. An example form is &#34;2004-10-23T12:00:00-06:00&#34;.

`repo:lastModifiedDate`
* is optional
* type: `string`
* defined in [Common Properties](../external/repo/common.schema.md#repo:lastModifiedDate)

### repo:lastModifiedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:lastModifiedDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:name


`repo:name`
* is optional
* type: `string`
* defined in [Common Properties](../external/repo/common.schema.md#repo:name)

### repo:name Type


`string`






## repo:path


`repo:path`
* is optional
* type: `string`
* defined in [Common Properties](../external/repo/common.schema.md#repo:path)

### repo:path Type


`string`






## repo:size
### Size

Size of the asset in bytes.

`repo:size`
* is optional
* type: `integer`
* defined in [Asset](../external/repo/asset.schema.md#repo:size)

### repo:size Type


`integer`






## repo:version

The version ID of the piece of content. It will be generated both on explicit and implicit save or upload.

`repo:version`
* is optional
* type: `string`
* defined in [Asset](../external/repo/asset.schema.md#repo:version)

### repo:version Type


`string`






## tiff:imageLength
### Length

Height in pixels. To maintain continuity with the XMP and TIFF standards, the height of an image or video is specified in the property `imageLength`. The duration of the video (also commonly called length) is specified in the property `extent`

`tiff:imageLength`
* is optional
* type: `integer`
* defined in [Asset](../external/repo/asset.schema.md#tiff:imageLength)

### tiff:imageLength Type


`integer`
* minimum value: `0`






## tiff:imageWidth
### Width

Width in pixels

`tiff:imageWidth`
* is optional
* type: `integer`
* defined in [Asset](../external/repo/asset.schema.md#tiff:imageWidth)

### tiff:imageWidth Type


`integer`
* minimum value: `0`






## xdm:repositoryCreatedBy

ID of the user who initiated the action that caused the resource to be created in the repository.

`xdm:repositoryCreatedBy`
* is optional
* type: `string`
* defined in this schema

### xdm:repositoryCreatedBy Type


`string`






## xdm:repositoryLastModifiedBy

ID of the user who initiated the action that most recently caused the resource to be modified in the repository.

`xdm:repositoryLastModifiedBy`
* is optional
* type: `string`
* defined in this schema

### xdm:repositoryLastModifiedBy Type


`string`





