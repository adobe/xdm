
# Directory Schema

```
http://ns.adobe.com/adobecloud/core/1.0/directory
```

A directory in Adobe Cloud Platform.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [external/repo/directory.schema.json](external/repo/directory.schema.json) |

## Schema Hierarchy

* Directory `http://ns.adobe.com/adobecloud/core/1.0/directory`
  * [Common Properties](common.schema.md) `http://ns.adobe.com/adobecloud/core/1.0`
  * [HAL Resource](../hal/hal.schema.md) `https://ns.adobe.com/xdm/external/hal/resource`

## Directory Example
```json
{
  "_links": {
    "http://ns.adobe.com/adobecloud/rel/create": {
      "href": "https://api.example.com/v2/create{+path}{?intermediates}",
      "templated": true
    },
    "http://ns.adobe.com/adobecloud/rel/resolve/id": {
      "href": "https://api2.example.com/v7/resolve{?asset_id}",
      "templated": true
    }
  },
  "repo:createdDate": "2017-09-26T15:52:25+00:00",
  "repo:lastModifiedDate": "2017-09-26T15:52:25+00:00",
  "repo:path": "/",
  "repo:name": "here",
  "repo:etag": "15",
  "dc:format": "application/vnd.adobecloud.directory+json",
  "children": []
}
```

# Directory Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [_embedded](#_embedded) | `object` | Optional | [HAL Resource](../hal/hal.schema.md#_embedded) |
| [_links](#_links) | `object` | Optional | [HAL Resource](../hal/hal.schema.md#_links) |
| [children](#children) | `array` | Optional | Directory (this schema) |
| [dc:format](#dcformat) | `string` | **Required** | [Common Properties](common.schema.md#dcformat) |
| [repo:createDate](#repocreateDate) | `string` | Optional | [Common Properties](common.schema.md#repocreateDate) |
| [repo:lastModifiedDate](#repolastModifiedDate) | `string` | **Required** | [Common Properties](common.schema.md#repolastModifiedDate) |
| [repo:name](#reponame) | `string` | **Required** | [Common Properties](common.schema.md#reponame) |
| [repo:path](#repopath) | `string` | **Required** | [Common Properties](common.schema.md#repopath) |
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






## children


`children`
* is optional
* type: `array`

* defined in this schema

### children Type


Array type: `array`

All items must be of the type:
Unknown type ``.

```json
{
  "type": "array",
  "items": {
    "oneOf": [
      {
        "$ref": "http://ns.adobe.com/adobecloud/core/1.0/sub-directory"
      },
      {
        "$ref": "http://ns.adobe.com/adobecloud/core/1.0/asset"
      }
    ],
    "simpletype": "complex"
  },
  "simpletype": "`array`"
}
```








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


## repo:createDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The Date Time property should conform to ISO 8601 standard. An example form is &#34;2004-10-23T12:00:00-06:00&#34;.

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


## repo:lastModifiedDate

The server date and time when the resource was most recently modified in the repository, such as when a new version of an asset is uploaded or a directory&#39;s child resource is added or removed. The Date Time property should conform to ISO 8601 standard. An example form is &#34;2004-10-23T12:00:00-06:00&#34;.

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





