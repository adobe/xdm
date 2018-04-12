
# Web Referrer Schema

```
https://ns.adobe.com/xdm/context/webreferrer
```

The referrer of the web page, which is the URL a visitor came from immediately before the current web interaction was recorded.
The information in this schema is semantically compatible with the information in the HTTP `referer` header field, but allows for additional classification.

&gt; **Note:** While the [HTTP specification](https://www.w3.org/Protocols/HTTP/HTRQ_Headers.html#z14) uses the term &#34;referer&#34;, XDM follows the [Document Object Model specification ](https://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/level-one-html.html#ID-95229140) and uses the spelling &#34;referrer&#34;, which is more widely accepted as the correct spelling.


| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [context/webreferrer.schema.json](context/webreferrer.schema.json) |

## Web Referrer Example
```json
{
  "xdm:URL": "https://www.some-adserver.com",
  "xdm:type": "external"
}
```

# Web Referrer Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:URL](#xdmurl) | `string` | Optional | Web Referrer (this schema) |
| [xdm:type](#xdmtype) | `enum` | Optional | Web Referrer (this schema) |
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

The value of this property **must** be equal to one of the [known values below](#xdm:type-known-values).

### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `internal` | Referral originated from the current domain or site. |
| `external` | Referral originated from a different domain or site that was not a search or social type. |
| `search_engine` | Search engine referrers are identified when visitors use a search engine to access the site. |
| `typed_bookmarked` | Typed/bookmarked referrers are identified when visitors type your site’s URL directly into their browser, or if they access the site by selecting bookmarks. |
| `email` | A referring domain is considered as an email referring domain type when visitors click an emailed message link containing the protocol imap:// or mail:// and arrive at the site. |
| `social` | The referrer is identified as a social network. |
| `unknown` | The referrer is unidentifiable (unknown). `No JavaScript` could be the cause. |
| `news` | The URL of a referrer started with news://. As such, the referrer link was posted on a Usenet newsgroup rather than a web page. |
| `usenet` |  |



