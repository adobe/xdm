
# Search Schema

```
https://ns.adobe.com/xdm/context/search
```

Information about web search activity.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/search.schema.json](context/search.schema.json) |

## Search Example
```json
{
  "xdm:searchEngine": "Google",
  "xdm:keywords": "rice cooker",
  "xdm:isPaid": true,
  "xdm:pageDepth": 1
}
```

# Search Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:isPaid](#xdmisPaid) | `boolean` | Optional | Search (this schema) |
| [xdm:keywords](#xdmkeywords) | `string` | Optional | Search (this schema) |
| [xdm:pageDepth](#xdmpageDepth) | `number` | Optional | Search (this schema) |
| [xdm:searchEngine](#xdmsearchEngine) | `string` | Optional | Search (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:isPaid
### Is Paid

Indicate if the search is paid or not.

`xdm:isPaid`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isPaid Type


`boolean`





## xdm:keywords
### Keywords

The keywords for the search.

`xdm:keywords`
* is optional
* type: `string`
* defined in this schema

### xdm:keywords Type


`string`






## xdm:pageDepth
### Page Depth

The page depth in the search results.

`xdm:pageDepth`
* is optional
* type: `number`
* defined in this schema

### xdm:pageDepth Type


`number`






## xdm:searchEngine
### Search Engine

The search engine used by the search.

`xdm:searchEngine`
* is optional
* type: `string`
* defined in this schema

### xdm:searchEngine Type


`string`





