
# Content Schema

```
https://ns.adobe.com/xdm/content/content
```

Content is information that is directed towards an audience for consumption in a (digital) experience. Content is delivered through channels (or a particular medium), but the essence of content remains independent from the devliery medium.

In [Web Content Management by Deane Barker](https://www.safaribooksonline.com/library/view/web-content-management/9781491908112/ch01.html) two key differences between content and other digital information are pointed out:

&gt; 1. Content is *created* differently
&gt; 2. Content is *used* differently

These differences boil down to a number of key characteristics of content.

*Content is created by human editors* in an editorial process that involves creation, revision, and publishing.

*Content is created for human audiences*, which gives the content the ultimate value.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Forbidden | Permitted | [content/content.schema.json](content/content.schema.json) |

## Content Example
```json
{
  "@id": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ab",
  "xdm:repositoryCreatedDate": "2017-11-23T13:11:05+00:00",
  "xdm:repositoryCreatedBy": "lars",
  "xdm:repositoryLastModifiedDate": "2017-11-23T13:11:05+00:00",
  "xdm:repositoryLastModifiedBy": "lars",
  "xdm:versionID": "1"
}
```

# Content Definitions

| Property | Type | Group |
|----------|------|-------|
| [@id](#@id) | `string` | `https://ns.adobe.com/xdm/content/content#/definitions/content` |
| [xdm:repositoryCreatedBy](#xdm:repositoryCreatedBy) | `string` | `https://ns.adobe.com/xdm/content/content#/definitions/content` |
| [xdm:repositoryCreatedDate](#xdm:repositoryCreatedDate) | `string` | `https://ns.adobe.com/xdm/content/content#/definitions/content` |
| [xdm:repositoryLastModifiedBy](#xdm:repositoryLastModifiedBy) | `string` | `https://ns.adobe.com/xdm/content/content#/definitions/content` |
| [xdm:repositoryLastModifiedDate](#xdm:repositoryLastModifiedDate) | `string` | `https://ns.adobe.com/xdm/content/content#/definitions/content` |
| [xdm:versionID](#xdm:versionID) | `string` | `https://ns.adobe.com/xdm/content/content#/definitions/content` |

## @id

A unique identifier given to every addressable piece of content in a given repository.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:repositoryCreatedBy

ID of the user who initiated the action that caused the resource to be created in the repository.

`xdm:repositoryCreatedBy`
* is optional
* type: `string`
* defined in this schema

### xdm:repositoryCreatedBy Type


`string`






## xdm:repositoryCreatedDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The Date Time property should conform to ISO 8601 standard. An example form is &#34;2004-10-23T12:00:00-06:00&#34;.

`xdm:repositoryCreatedDate`
* is optional
* type: `string`
* defined in this schema

### xdm:repositoryCreatedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:repositoryLastModifiedBy

ID of the user who initiated the action that most recently caused the resource to be modified in the repository.

`xdm:repositoryLastModifiedBy`
* is optional
* type: `string`
* defined in this schema

### xdm:repositoryLastModifiedBy Type


`string`






## xdm:repositoryLastModifiedDate

The server date and time when the resource was most recently modified in the repository, such as when a new version of an asset is uploaded or a directory&#39;s child resource is added or removed. The Date Time property should conform to ISO 8601 standard. An example form is &#34;2004-10-23T12:00:00-06:00&#34;.

`xdm:repositoryLastModifiedDate`
* is optional
* type: `string`
* defined in this schema

### xdm:repositoryLastModifiedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:versionID

The version ID of the piece of content. It will be generated both on explicit and implicit save or upload.

`xdm:versionID`
* is optional
* type: `string`
* defined in this schema

### xdm:versionID Type


`string`





