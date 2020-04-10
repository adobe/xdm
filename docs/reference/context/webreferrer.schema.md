
# Web referrer Schema

```
https://ns.adobe.com/xdm/context/webreferrer
```

The referrer of the web page, which is the URL a visitor came from immediately before the current web interaction was recorded.
The information in this schema is semantically compatible with the information in the HTTP `referer` header field, but allows for additional classification.

> **Note:** While the [HTTP specification](https://www.w3.org/Protocols/HTTP/HTRQ_Headers.html#z14) uses the term "referer", XDM follows the [Document Object Model specification ](https://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/level-one-html.html#ID-95229140) and uses the spelling "referrer", which is more widely accepted as the correct spelling.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/webreferrer.schema.json](context/webreferrer.schema.json) |
## Schema Hierarchy

* Web referrer `https://ns.adobe.com/xdm/context/webreferrer`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Web referrer Example
```json
{
  "xdm:URL": "https://www.some-adserver.com",
  "xdm:type": "external"
}
```

# Web referrer Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:URL](#xdmurl) | `string` | Optional | Web referrer (this schema) |
| [xdm:type](#xdmtype) | `enum` | Optional | Web referrer (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:URL
### URL

The referrer URL.

`xdm:URL`
* is optional
* type: `string`
* defined in this schema

### xdm:URL Type


`string`






## xdm:type
### Type

The referrer type.

`xdm:type`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmtype-known-values).

### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `internal` | Internal |
| `external` | External |
| `search_engine` | Search engine |
| `typed_bookmarked` | Typed or bookmarked |
| `email` | Email |
| `social` | Social network |
| `unknown` | Unknown |
| `news` | Usenet newsgroup |
| `usenet` |  |



