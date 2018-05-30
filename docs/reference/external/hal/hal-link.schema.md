
# HAL Link Schema

```
https://ns.adobe.com/xdm/external/hal/link
```

> A Link Object represents a hyperlink from the containing resource to a URI.

-- from [JSON Hypertext Application Language, section 5](https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5)


| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [external/hal/hal-link.schema.json](external/hal/hal-link.schema.json) |

## HAL Link Examples

```json
{
  "href": "http://www.adobe.com/"
}
```

```json
{
  "href": "http://www.adobe.com/{product}",
  "templated": true
}
```


# HAL Link Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [deprecation](#deprecation) | `string` | Optional | HAL Link (this schema) |
| [href](#href) | `string` | Optional | HAL Link (this schema) |
| [hreflang](#hreflang) | `string` | Optional | HAL Link (this schema) |
| [name](#name) | `string` | Optional | HAL Link (this schema) |
| [profile](#profile) | `string` | Optional | HAL Link (this schema) |
| [templated](#templated) | `boolean` | Optional | HAL Link (this schema) |
| [title](#title) | `string` | Optional | HAL Link (this schema) |
| [type](#type) | `string` | Optional | HAL Link (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## deprecation

> Its presence indicates that the link is to be deprecated (i.e. removed) at a future date.  Its value is a URL that SHOULD provide further information about the deprecation.

`deprecation`
* is optional
* type: `string`
* defined in this schema

### deprecation Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## href

> If the value is a URI Template then the Link Object SHOULD have a `templated` attribute whose value is `true`

`href`
* is optional
* type: `string`
* defined in this schema

### href Type


`string`






## hreflang

> Its value is a string and is intended for indicating the language of the target resource (as defined by [RFC5988](https://tools.ietf.org/html/rfc5988)

`hreflang`
* is optional
* type: `string`
* defined in this schema

### hreflang Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E((((%5BA-Za-z%5D%7B2%2C3%7D(-(%5BA-Za-z%5D%7B3%7D(-%5BA-Za-z%5D%7B3%7D)%7B0%2C2%7D))%3F)%7C%5BA-Za-z%5D%7B4%7D%7C%5BA-Za-z%5D%7B5%2C8%7D)(-(%5BA-Za-z%5D%7B4%7D))%3F(-(%5BA-Za-z%5D%7B2%7D%7C%5B0-9%5D%7B3%7D))%3F(-(%5BA-Za-z0-9%5D%7B5%2C8%7D%7C%5B0-9%5D%5BA-Za-z0-9%5D%7B3%7D))*(-(%5B0-9A-WY-Za-wy-z%5D(-%5BA-Za-z0-9%5D%7B2%2C8%7D)%2B))*(-(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B))%3F)%7C(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B)%7C((en-GB-oed%7Ci-ami%7Ci-bnn%7Ci-default%7Ci-enochian%7Ci-hak%7Ci-klingon%7Ci-lux%7Ci-mingo%7Ci-navajo%7Ci-pwn%7Ci-tao%7Ci-tay%7Ci-tsu%7Csgn-BE-FR%7Csgn-BE-NL%7Csgn-CH-DE)%7C(art-lojban%7Ccel-gaulish%7Cno-bok%7Cno-nyn%7Czh-guoyu%7Czh-hakka%7Czh-min%7Czh-min-nan%7Czh-xiang)))%24)):
```regex
^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$
```






## name

> Its value MAY be used as a secondary key for selecting Link Objects which share the same relation type.

`name`
* is optional
* type: `string`
* defined in this schema

### name Type


`string`






## profile

> Its value is a string which is a URI that hints about the profile (as defined by [I-D.wilde-profile-link](https://tools.ietf.org/html/draft-wilde-profile-link-04) of the target resource.

`profile`
* is optional
* type: `string`
* defined in this schema

### profile Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## templated

> Its value is boolean and SHOULD be true when the Link Object's `href` property is a URI Template.\n\nIts value SHOULD be considered false if it is undefined or any other value than `true`.

`templated`
* is optional
* type: `boolean`
* defined in this schema

### templated Type


`boolean`





## title

> Its value is a string and is intended for labelling the link with a human-readable identifier (as defined by [RFC5988](https://tools.ietf.org/html/rfc5988))

`title`
* is optional
* type: `string`
* defined in this schema

### title Type


`string`






## type

> Its value is a string used as a hint to indicate the media type expected when dereferencing the target resource.

`type`
* is optional
* type: `string`
* defined in this schema

### type Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5Cw%2B%5C%2F%5B-.%5Cw%5D%2B(%3F%3A%5C%2B%5B-.%5Cw%5D%2B)%3F)):
```regex
\w+\/[-.\w]+(?:\+[-.\w]+)?
```





