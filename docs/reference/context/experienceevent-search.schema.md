
# ExperienceEvent details for search Schema

```
https://ns.adobe.com/xdm/context/experienceevent-search
```

This mixin is used to capture search-related information for an ExperienceEvent, such as search engine, paid search (boolean), keywords, and position.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-search.schema.json](context/experienceevent-search.schema.json) |
## Schema Hierarchy

* ExperienceEvent details for search `https://ns.adobe.com/xdm/context/experienceevent-search`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Search](search.schema.md) `https://ns.adobe.com/xdm/context/search`


## ExperienceEvent details for search Example
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

# ExperienceEvent details for search Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:search](#xdmsearch) | Search | Optional | ExperienceEvent details for search (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:search
### Search

The information related to web or mobile search.

`xdm:search`
* is optional
* type: Search
* defined in this schema

### xdm:search Type


* [Search](search.schema.md) – `https://ns.adobe.com/xdm/context/search`




