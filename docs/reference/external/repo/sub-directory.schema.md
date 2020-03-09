
# Sub-Directory Schema

```
http://ns.adobe.com/adobecloud/core/1.0/sub-directory
```

A sub-directory in a directory listing.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [external/repo/sub-directory.schema.json](external/repo/sub-directory.schema.json) |
## Schema Hierarchy

* Sub-Directory `http://ns.adobe.com/adobecloud/core/1.0/sub-directory`
  * [Common Properties](common.schema.md) `http://ns.adobe.com/adobecloud/core/1.0`
  * [HAL Resource](../hal/hal.schema.md) `https://ns.adobe.com/xdm/external/hal/resource`


## Sub-Directory Example
```json
{
  "repo:path": "/here",
  "repo:name": "here/foo",
  "dc:format": "application/vnd.adobecloud.directory+json"
}
```

# Sub-Directory Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [_embedded](#_embedded) | `object` | Optional | [HAL Resource](../hal/hal.schema.md#_embedded) |
| [_links](#_links) | `object` | Optional | [HAL Resource](../hal/hal.schema.md#_links) |
| [dc:format](#dcformat) | `string` | **Required** | [Common Properties](common.schema.md#dcformat) |
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





