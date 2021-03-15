
# Content Component Details Schema

```
https://ns.adobe.com/experience/decisioning/content-component-details
```

Content components are the fragments associated with the a particular content representation. Those fragments are used to compose the end-user experience.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/content-component-details.schema.json](adobe/experience/decisioning/content-component-details.schema.json) |

## Content Component Details Example
```json
{
  "@type": "https://ns.adobe.com/experience/offer-management/content-component-html-template",
  "dc:format": "text/x-handlebars-template+html",
  "dc:language": [
    "en"
  ],
  "repo:name": "firstname.hbs",
  "https://ns.adobe.com/experience/decisioning/content": "<p> The following text was replaced with a user profile attribute: {{profile.person.firstname}}.</p>"
}
```

# Content Component Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@type](#type) | `string` | **Required** | Content Component Details (this schema) |
| [dc:format](#dcformat) | `string` | **Required** | Content Component Details (this schema) |
| [dc:language](#dclanguage) | `string[]` | Optional | Content Component Details (this schema) |
| [repo:id](#repoid) | `string` | Optional | Content Component Details (this schema) |
| [repo:name](#reponame) | `string` | Optional | Content Component Details (this schema) |
| [repo:repositoryID](#reporepositoryid) | `string` | Optional | Content Component Details (this schema) |
| [repo:resolveURL](#reporesolveurl) | `string` | Optional | Content Component Details (this schema) |
| [xdm:content](#xdmcontent) | `string` | Optional | Content Component Details (this schema) |
| [xdm:deliveryURL](#xdmdeliveryurl) | `string` | Optional | Content Component Details (this schema) |
| [xdm:linkURL](#xdmlinkurl) | `string` | Optional | Content Component Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @type
### Content Component Type

Type of the component. Acts as processing contract for the client. When the experience is assembled the composer will look for the component(s) that have a specific type.

`@type`
* is **required**
* type: `string`
* defined in this schema

### @type Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## dc:format
### Format

The physical or digital manifestation of the resource. Typically, Format should include the media-type of the resource. Format may be used to determine the software, hardware or other equipment needed to display or operate the resource. Recommended best practice is to select a value from a controlled vocabulary (for example, the list of [Internet Media Types](http://www.iana.org/ assignments/media-types/) defining computer media formats).

`dc:format`
* is **required**
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


## dc:language
### Language

The language or languages of the resource.
Languages are specified in language code as defined in [IETF RFC 3066](https://www.ietf.org/rfc/rfc3066.txt), which is part of BCP 47, which is used elsewhere in XDM.

`dc:language`
* is optional
* type: `string[]`

* defined in this schema

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



## repo:id

An optional unique identifier to reference the asset in a content repository. When Platform APIs are used to retrieve the representation the client can expect an addtional propery "repo:resolveUrl" to retrieve the asset.

`repo:id`
* is optional
* type: `string`
* defined in this schema

### repo:id Type


`string`





### repo:id Example

```json
"urn:aaid:sc:US:6dc33479-13ca-4b19-b25d-c805eff8a69e"
```


## repo:name

Some hint about where to locate the repository that stores the external asset by the "repo:id".

`repo:name`
* is optional
* type: `string`
* defined in this schema

### repo:name Type


`string`






## repo:repositoryID

An optional unique identifier to reference the asset in a content repository. When Platform APIs are used to retrieve the representation the client can expect an addtional propery "repo:resolveUrl" to retrieve the asset.

`repo:repositoryID`
* is optional
* type: `string`
* defined in this schema

### repo:repositoryID Type


`string`





### repo:repositoryID Example

```json
"C87932A55B06F7070A49412D@AdobeOrg"
```


## repo:resolveURL

An optional unique resource locator to read the asset in a content repository. This will make it easier to obtain the asset whithout the client understanding where the asset is manages and what APIs to call. This is similar to a HAL link but the semantic is simpler and more pursposeful.

`repo:resolveURL`
* is optional
* type: `string`
* defined in this schema

### repo:resolveURL Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))




### repo:resolveURL Example

```json
"https://plaftform.adobe.io/resolveByPath?path=&quot;/mycorp/content/projectx/fragment/prod/herobanners/banner14.html3&quot;"
```


## xdm:content

An optional field to hold content directly. Instead of referencing content in an asset repository the component can hold simple content directly. This field is not used for composite, complex and binary content assets.

`xdm:content`
* is optional
* type: `string`
* defined in this schema

### xdm:content Type


`string`





### xdm:content Example

```json
""
```


## xdm:deliveryURL

An optional unique resource locator to obtain the asset from a content delivery network or service endpoint. This URL is used to access the asset publicly by a user agent.

`xdm:deliveryURL`
* is optional
* type: `string`
* defined in this schema

### xdm:deliveryURL Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))




### xdm:deliveryURL Example

```json
"https://cdn.adobe.io/content/projectx/fragment/prod/static/1232324wd32.jpeg"
```


## xdm:linkURL

An optional unique resource locator for user interactions. This URL is used to refer the end user to in a user agent and can be tracked.

`xdm:linkURL`
* is optional
* type: `string`
* defined in this schema

### xdm:linkURL Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))




### xdm:linkURL Example

```json
"https://cdn.adobe.io/tracker?code=23432&redirect=/content/projectx/fragment/prod/static/1232324wd32.jpeg"
```

