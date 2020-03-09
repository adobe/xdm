
# Componentized page Schema

```
https://ns.adobe.com/xdm/content/componentized-page
```

A componentized page is a part of a digital experience that is authored though modular components.
Examples for componentized pages include web pages as managed by a web content management system or mobile app pages as managed by a mobile content management system.
Componentized pages are modular (consist of smaller content components), hyperlinked (link to other pages), and include digital assets (like images or videos).


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [content/componentized-page.schema.json](content/componentized-page.schema.json) |
## Schema Hierarchy

* Componentized page `https://ns.adobe.com/xdm/content/componentized-page`
  * [Asset](../external/repo/asset.schema.md) `http://ns.adobe.com/adobecloud/core/1.0/asset`


## Componentized page Example
```json
{
  "repo:name": "example",
  "repo:path": "/content/example",
  "dc:title": "Example Page for XDM.",
  "xdm:shortTitle": "Example",
  "repo:createDate": "2017-09-26T13:27:36+00:00",
  "xdm:repositoryCreatedBy": "https://identity.adobe.io/users/tripod@adobe.com",
  "repo:modifyDate": "2017-09-26T13:31:19+00:00",
  "xdm:repositoryLastModifiedBy": "https://identity.adobe.io/users/trieloff@adobe.com",
  "xdm:language": "en-US",
  "xdm:template": "https://francois.corp.adobe.com:4502/apps/foundation/generic_page",
  "teaser": {
    "type": "https://francois.corp.adobe.com:4502/apps/foundation/teaser",
    "title": "Sunglasses",
    "image": {
      "@type": "http://ns.adobe.com/adobecloud/core/1.0/asset",
      "repo:id": "urn:aaid:aem:4123ba4c-93a8-4c5d-b979-ffbbe4318185",
      "@id": "https://francois.corp.adobe.com:4502/content/dam/Fx_DUKE-small.jpg"
    }
  },
  "par": {
    "@type": "https://francois.corp.adobe.com:4502/apps/foundation/generic_container",
    "xdm:items_order": [
      "title0",
      "text0",
      "image0"
    ],
    "xdm:items": {
      "title0": {
        "type": "https://francois.corp.adobe.com:4502/apps/foundation/title",
        "title": "Protect Your Eyes"
      },
      "image0": {
        "type": "https://francois.corp.adobe.com:4502/apps/foundation/image",
        "image": {
          "@type": "http://ns.adobe.com/adobecloud/core/1.0/asset",
          "asset_id": "urn:aaid:aem:4123ba4c-93a8-4c5d-b979-1234e4318185",
          "id": "https://francois.corp.adobe.com:4502/content/dam/Glasses-small.jpg"
        }
      },
      "text0": {
        "type": "https://francois.corp.adobe.com:4502/apps/foundation/text",
        "text": "<p>Even during high UV levels...</p>"
      }
    }
  }
}
```

# Componentized page Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [dc:title](#dctitle) | `string` | Optional | Componentized page (this schema) |
| [repo:createdBy](#repocreatedby) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repocreatedby) |
| [repo:etag](#repoetag) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repoetag) |
| [repo:id](#repoid) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repoid) |
| [repo:modifiedBy](#repomodifiedby) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repomodifiedby) |
| [repo:name](#reponame) | `string` | **Required** | Componentized page (this schema) |
| [repo:path](#repopath) | `string` | **Required** | Componentized page (this schema) |
| [repo:size](#reposize) | `integer` | Optional | [Asset](../external/repo/asset.schema.md#reposize) |
| [repo:version](#repoversion) | `string` | Optional | [Asset](../external/repo/asset.schema.md#repoversion) |
| [tiff:imageLength](#tiffimagelength) | `integer` | Optional | [Asset](../external/repo/asset.schema.md#tiffimagelength) |
| [tiff:imageWidth](#tiffimagewidth) | `integer` | Optional | [Asset](../external/repo/asset.schema.md#tiffimagewidth) |
| [xdm:language](#xdmlanguage) | `string` | Optional | Componentized page (this schema) |
| [xdm:navOrder](#xdmnavorder) | `integer` | Optional | Componentized page (this schema) |
| [xdm:shortTitle](#xdmshorttitle) | `string` | Optional | Componentized page (this schema) |
| [xdm:template](#xdmtemplate) | `string` | Optional | Componentized page (this schema) |
| [xdm:unlisted](#xdmunlisted) | `boolean` | Optional | Componentized page (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## dc:title

Full title of the page.

`dc:title`
* is optional
* type: `string`
* defined in this schema

### dc:title Type


`string`






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






## repo:name

Name of the page in the repository. This could be a file name or any name provided by the repository to the page.

`repo:name`
* is **required**
* type: `string`
* defined in this schema

### repo:name Type


`string`






## repo:path

Shows the hierarchy of the page. The path semantics should be same as that defined in [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3.3). In case a repository is not path based then it can return the information which will help in browsing. It could be just an document id, or something like `{catalog}/{id}` in case of a document database.

`repo:path`
* is **required**
* type: `string`
* defined in this schema

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






## tiff:imageLength
### Length

Height in pixels. To maintain continuity with the XMP and TIFF standards, the height of an image or video is specified in the property `imageLength`. The duration of the video (also commonly called length) is specified in the property `extent`

`tiff:imageLength`
* is optional
* type: `integer`
* defined in [Asset](../external/repo/asset.schema.md#tiffimagelength)

### tiff:imageLength Type


`integer`
* minimum value: `0`






## tiff:imageWidth
### Width

Width in pixels

`tiff:imageWidth`
* is optional
* type: `integer`
* defined in [Asset](../external/repo/asset.schema.md#tiffimagewidth)

### tiff:imageWidth Type


`integer`
* minimum value: `0`






## xdm:language

Specifies the language of this page. the language property should conform to BPC 47, for example `en-GB`.

`xdm:language`
* is optional
* type: `string`
* defined in this schema

### xdm:language Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E((((%5BA-Za-z%5D%7B2%2C3%7D(-(%5BA-Za-z%5D%7B3%7D(-%5BA-Za-z%5D%7B3%7D)%7B0%2C2%7D))%3F)%7C%5BA-Za-z%5D%7B4%7D%7C%5BA-Za-z%5D%7B5%2C8%7D)(-(%5BA-Za-z%5D%7B4%7D))%3F(-(%5BA-Za-z%5D%7B2%7D%7C%5B0-9%5D%7B3%7D))%3F(-(%5BA-Za-z0-9%5D%7B5%2C8%7D%7C%5B0-9%5D%5BA-Za-z0-9%5D%7B3%7D))*(-(%5B0-9A-WY-Za-wy-z%5D(-%5BA-Za-z0-9%5D%7B2%2C8%7D)%2B))*(-(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B))%3F)%7C(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B)%7C((en-GB-oed%7Ci-ami%7Ci-bnn%7Ci-default%7Ci-enochian%7Ci-hak%7Ci-klingon%7Ci-lux%7Ci-mingo%7Ci-navajo%7Ci-pwn%7Ci-tao%7Ci-tay%7Ci-tsu%7Csgn-BE-FR%7Csgn-BE-NL%7Csgn-CH-DE)%7C(art-lojban%7Ccel-gaulish%7Cno-bok%7Cno-nyn%7Czh-guoyu%7Czh-hakka%7Czh-min%7Czh-min-nan%7Czh-xiang)))%24)):
```regex
^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$
```






## xdm:navOrder

When this page is shown in a collection of pages, use `nav_order` to sort. The smallest `nav_order` should be the first item in the sorted collection.

`xdm:navOrder`
* is optional
* type: `integer`
* defined in this schema

### xdm:navOrder Type


`integer`
* minimum value: `0`






## xdm:shortTitle

Short title of the page that is suitable to be displayed in navigation links.

`xdm:shortTitle`
* is optional
* type: `string`
* defined in this schema

### xdm:shortTitle Type


`string`






## xdm:template

The template that was used to create this page.

`xdm:template`
* is optional
* type: `string`
* defined in this schema

### xdm:template Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:unlisted

Indicates if this page should be hidden by default in navigational collections.

`xdm:unlisted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:unlisted Type


`boolean`




