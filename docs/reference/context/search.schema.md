
# Search Schema

```
https://ns.adobe.com/xdm/context/search
```

Information about web search activity.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/search.schema.json](context/search.schema.json) |
## Schema Hierarchy

* Search `https://ns.adobe.com/xdm/context/search`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Search Example
```json
{
  "xdm:searchEngine": "Google",
  "xdm:searchEngineID": "https://ns.adobe.com/searchengines/3",
  "xdm:keywords": "rice cooker",
  "xdm:isPaid": true,
  "xdm:pageDepth": 1
}
```

# Search Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:isPaid](#xdmispaid) | `boolean` | Optional | Search (this schema) |
| [xdm:keywords](#xdmkeywords) | `string` | Optional | Search (this schema) |
| [xdm:pageDepth](#xdmpagedepth) | `integer` | Optional | Search (this schema) |
| [xdm:position](#xdmposition) | `integer` | Optional | Search (this schema) |
| [xdm:searchEngine](#xdmsearchengine) | `string` | Optional | Search (this schema) |
| [xdm:searchEngineID](#xdmsearchengineid) | `string` | Optional | Search (this schema) |
| [xdm:slot](#xdmslot) | `string` | Optional | Search (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:isPaid
### Is paid

Indicate if the search is paid or not.

`xdm:isPaid`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isPaid Type


`boolean`





## xdm:keywords
### Keywords

Keywords for the search.

`xdm:keywords`
* is optional
* type: `string`
* defined in this schema

### xdm:keywords Type


`string`






## xdm:pageDepth
### Page depth

Page depth in the search results.

`xdm:pageDepth`
* is optional
* type: `integer`
* defined in this schema

### xdm:pageDepth Type


`integer`






## xdm:position
### Listing position

Position or rank of the listing in the search result page.

`xdm:position`
* is optional
* type: `integer`
* defined in this schema

### xdm:position Type


`integer`






## xdm:searchEngine
### Search engine

The search engine used by the search.

`xdm:searchEngine`
* is optional
* type: `string`
* defined in this schema

### xdm:searchEngine Type


`string`






## xdm:searchEngineID
### Search engine ID

The application specified identifier used to identify the search engine used by the search.

`xdm:searchEngineID`
* is optional
* type: `string`
* defined in this schema

### xdm:searchEngineID Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:slot
### Page slot

Named section of the page where the search result appeared, for example, top or side.

`xdm:slot`
* is optional
* type: `string`
* defined in this schema

### xdm:slot Type


`string`



### xdm:slot Known Values
| Value | Description |
|-------|-------------|
| `top` | Top of the page |
| `side` | Side of the page |



