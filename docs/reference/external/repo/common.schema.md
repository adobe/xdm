
# Common Properties Schema

```
http://ns.adobe.com/adobecloud/core/1.0
```

Common Properties for Storage in the Adobe Cloud Platform

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted | [external/repo/common.schema.json](external/repo/common.schema.json) |

## Common Properties Example
```json
{
  "repo:name": "example.png",
  "repo:path": "/examples/from/xdm",
  "dc:format": "image/png"
}
```

# Common Properties Definitions

| Property | Type | Group |
|----------|------|-------|
| [dc:format](#dcformat) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:createDate](#repocreatedate) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/date-properties` |
| [repo:lastModifiedDate](#repolastmodifieddate) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/date-properties` |
| [repo:name](#reponame) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:path](#repopath) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |

## dc:format
### Format

The physical or digital manifestation of the resource. Typically, Format should include the media-type of the resource. Format may be used to determine the software, hardware or other equipment needed to display or operate the resource. Recommended best practice is to select a value from a controlled vocabulary (for example, the list of [Internet Media Types](http://www.iana.org/ assignments/media-types/) defining computer media formats).

`dc:format`
* is optional
* type: `string`
* defined in this schema

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

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The Date Time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:createDate`
* is optional
* type: `string`
* defined in this schema

### repo:createDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:createDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:lastModifiedDate

The server date and time when the resource was most recently modified in the repository, such as when a new version of an asset is uploaded or a directory's child resource is added or removed. The Date Time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:lastModifiedDate`
* is optional
* type: `string`
* defined in this schema

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
* defined in this schema

### repo:name Type


`string`






## repo:path


`repo:path`
* is optional
* type: `string`
* defined in this schema

### repo:path Type


`string`





