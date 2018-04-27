
# Link Schema

```
https://ns.adobe.com/xdm/external/activity-streams-2/link
```

A Link is an indirect, qualified reference to a resource identified by a URL. The fundamental model for links is established by [RFC5988](https://tools.ietf.org/html/rfc5988). Many of the properties defined by the Activity Vocabulary allow values that are either instances of `[Object](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object)` or `[Link](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-link)`. When a `[Link](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-link)` is used, it establishes a [qualified relation](http://patterns.dataincubator.org/book/qualified-relation.html) connecting the subject (the containing object) to the resource identified by the `[href](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-href)`. Properties of the `[Link](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-link)` are properties of the reference as opposed to properties of the resource.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [external/activity-streams-2/link.schema.json](external/activity-streams-2/link.schema.json) |
## Schema Hierarchy

* Link `https://ns.adobe.com/xdm/external/activity-streams-2/link`
  * [Object](object.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/object`
  * [RDF Language Tagged String](rdf-langstring.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/rdf-langstring`
  * [Link](link.schema.md) `https://ns.adobe.com/xdm/external/activity-streams-2/link`


## Link Example
```json
{
  "@context": {
    "activitystreams": "http://www.w3.org/ns/activitystreams#"
  },
  "@type": "https://www.w3.org/ns/activitystreams#Link",
  "activitystreams:href": "http://example.org/abc",
  "activitystreams:hreflang": "en",
  "activitystreams:mediaType": "text/html",
  "activitystreams:name": "An example link"
}
```

# Link Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [activitystreams:height](#activitystreamsheight) | `integer` | Optional | Link (this schema) |
| [activitystreams:href](#activitystreamshref) | `string` | Optional | Link (this schema) |
| [activitystreams:hreflang](#activitystreamshreflang) | `string` | Optional | Link (this schema) |
| [activitystreams:mediaType](#activitystreamsmediatype) | `string` | Optional | Link (this schema) |
| [activitystreams:name](#activitystreamsname) | complex | Optional | Link (this schema) |
| [activitystreams:preview](#activitystreamspreview) | complex | Optional | Link (this schema) |
| [activitystreams:rel](#activitystreamsrel) | complex | Optional | Link (this schema) |
| [activitystreams:width](#activitystreamswidth) | `integer` | Optional | Link (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## activitystreams:height

On a Link, specifies a hint as to the rendering height in device-independent pixels of the linked resource. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-height) document for a complete description.

`activitystreams:height`
* is optional
* type: `integer`
* defined in this schema

### activitystreams:height Type


`integer`
* minimum value: `0`






## activitystreams:href

The target resource pointed to by a Link. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-href) document for a complete description.

`activitystreams:href`
* is optional
* type: `string`
* defined in this schema

### activitystreams:href Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## activitystreams:hreflang
### Language Tag

Hints as to the language used by the target resource. Value must be a [BCP47] Language-Tag. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-hreflang) document for a complete description.

`activitystreams:hreflang`
* is optional
* type: `string`
* defined in this schema

### activitystreams:hreflang Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E((((%5BA-Za-z%5D%7B2%2C3%7D(-(%5BA-Za-z%5D%7B3%7D(-%5BA-Za-z%5D%7B3%7D)%7B0%2C2%7D))%3F)%7C%5BA-Za-z%5D%7B4%7D%7C%5BA-Za-z%5D%7B5%2C8%7D)(-(%5BA-Za-z%5D%7B4%7D))%3F(-(%5BA-Za-z%5D%7B2%7D%7C%5B0-9%5D%7B3%7D))%3F(-(%5BA-Za-z0-9%5D%7B5%2C8%7D%7C%5B0-9%5D%5BA-Za-z0-9%5D%7B3%7D))*(-(%5B0-9A-WY-Za-wy-z%5D(-%5BA-Za-z0-9%5D%7B2%2C8%7D)%2B))*(-(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B))%3F)%7C(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B)%7C((en-GB-oed%7Ci-ami%7Ci-bnn%7Ci-default%7Ci-enochian%7Ci-hak%7Ci-klingon%7Ci-lux%7Ci-mingo%7Ci-navajo%7Ci-pwn%7Ci-tao%7Ci-tay%7Ci-tsu%7Csgn-BE-FR%7Csgn-BE-NL%7Csgn-CH-DE)%7C(art-lojban%7Ccel-gaulish%7Cno-bok%7Cno-nyn%7Czh-guoyu%7Czh-hakka%7Czh-min%7Czh-min-nan%7Czh-xiang)))%24)):
```regex
^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$
```






## activitystreams:mediaType
### MIME Media Type

When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mediatype) document for a complete description.

`activitystreams:mediaType`
* is optional
* type: `string`
* defined in this schema

### activitystreams:mediaType Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5Cw%2B%5C%2F%5B-.%5Cw%5D%2B(%3F%3A%5C%2B%5B-.%5Cw%5D%2B)%3F)):
```regex
\w+\/[-.\w]+(?:\+[-.\w]+)?
```






## activitystreams:name

Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name) document for a complete description.

`activitystreams:name`
* is optional
* type: complex
* defined in this schema

### activitystreams:name Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`



#### Condition 2


* []() – `https://ns.adobe.com/xdm/external/activity-streams-2/rdf-langstring`






## activitystreams:preview

Identifies an entity that provides a preview of this object. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview) document for a complete description.

`activitystreams:preview`
* is optional
* type: complex
* defined in this schema

### activitystreams:preview Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



**Any** following *options* needs to be fulfilled.


#### Option 1


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



#### Option 2


* [Object](object.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/object`


#### Option 3


* [Link](link.schema.md) – `https://ns.adobe.com/xdm/external/activity-streams-2/link`



#### Condition 2


Array type: 

All items must be of the type:
Unknown type `anyOf`.

```json
{
  "items": {
    "anyOf": [
      {
        "type": "string",
        "format": "uri"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/object",
        "$linkVal": "Object",
        "$linkPath": "object.schema.md"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/external/activity-streams-2/link",
        "$linkVal": "Link",
        "$linkPath": "link.schema.md"
      }
    ],
    "type": "anyOf"
  },
  "type": "array"
}
```









## activitystreams:rel
### Link Relation

A link relation associated with a `[Link](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-link)`. The value _MUST_ conform to both the [HTML5](https://www.w3.org/TR/html5/) and [RFC5988](https://tools.ietf.org/html/rfc5988) 'link relation' definitions. In the [HTML5](https://www.w3.org/TR/html5/), any string not containing the 'space' U+0020, 'tab' (U+0009), 'LF' (U+000A), 'FF' (U+000C), 'CR' (U+000D) or ',' (U+002C) characters can be used as a valid link relation.

`activitystreams:rel`
* is optional
* type: complex
* defined in this schema

### activitystreams:rel Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5Ba-z%5D(%5Ba-z%5D%7C%5B0-9%5D%7C%5C.%7C-)*%24)):
```regex
^[a-z]([a-z]|[0-9]|\.|-)*$
```



#### Condition 2


Array type: 

All items must be of the type:
`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5Ba-z%5D(%5Ba-z%5D%7C%5B0-9%5D%7C%5C.%7C-)*%24)):
```regex
^[a-z]([a-z]|[0-9]|\.|-)*$
```










## activitystreams:width

On a Link, specifies a hint as to the rendering width in device-independent pixels of the linked resource. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-width) document for a complete description.

`activitystreams:width`
* is optional
* type: `integer`
* defined in this schema

### activitystreams:width Type


`integer`
* minimum value: `0`





