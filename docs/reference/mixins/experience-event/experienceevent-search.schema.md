
# Search Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-search
```

Search related information such as search engine, paid search, keywords, and position.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-search.schema.json](mixins/experience-event/experienceevent-search.schema.json) |
## Schema Hierarchy

* Search Details `https://ns.adobe.com/xdm/context/experienceevent-search`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Search](../../datatypes/search.schema.md) `https://ns.adobe.com/xdm/context/search`


## Search Details Example
```json
{
  "xdm:search": {
    "xdm:searchEngine": "Google",
    "xdm:searchEngineID": "https://ns.adobe.com/searchengines/3",
    "xdm:keywords": "rice cooker",
    "xdm:isPaid": true,
    "xdm:pageDepth": 1
  }
}
```

# Search Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:search](#xdmsearch) | Search | Optional | Search Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:search
### Search

The information related to web or mobile search.

`xdm:search`
* is optional
* type: Search
* defined in this schema

### xdm:search Type


* [Search](../../datatypes/search.schema.md) – `https://ns.adobe.com/xdm/context/search`




