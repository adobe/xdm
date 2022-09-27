
# Site Search Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-site-search
```

Site search related information such as search query, filtering, and ordering.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-site-search.schema.json](fieldgroups/experience-event/experienceevent-site-search.schema.json) |
## Schema Hierarchy

* Site Search `https://ns.adobe.com/xdm/mixins/experienceevent-site-search`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Site Search](../../datatypes/sitesearch.schema.md) `https://ns.adobe.com/xdm/datatypes/sitesearch`
  * [Measure](../../datatypes/data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Site Search Example
```json
{
  "xdm:searchRequest": {
    "xdm:value": 1
  },
  "xdm:siteSearch": {
    "xdm:filter": [
      {
        "xdm:attribute": "Device",
        "xdm:value": [
          "Mobile",
          "Phone"
        ],
        "xdm:isRange": false
      },
      {
        "xdm:attribute": "Price",
        "xdm:value": [
          "900",
          "1000"
        ],
        "xdm:isRange": true
      },
      {
        "xdm:attribute": "price",
        "xdm:value": [
          "800",
          "1000"
        ],
        "xdm:isRange": true
      }
    ],
    "xdm:sort": [
      {
        "xdm:attribute": "price",
        "xdm:order": "DESC"
      },
      {
        "xdm:attribute": "relevance",
        "xdm:order": "ASC"
      }
    ],
    "xdm:query": "Iphone 13"
  }
}
```

# Site Search Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:searchRequest](#xdmsearchrequest) | Measure | Optional | Site Search (this schema) |
| [xdm:searchResponse](#xdmsearchresponse) | Measure | Optional | Site Search (this schema) |
| [xdm:siteSearch](#xdmsitesearch) | Site Search | Optional | Site Search (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:searchRequest
### Search Request

A search request has been sent.

`xdm:searchRequest`
* is optional
* type: Measure
* defined in this schema

### xdm:searchRequest Type


* [Measure](../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:searchResponse
### Search Response

A search response has been received.

`xdm:searchResponse`
* is optional
* type: Measure
* defined in this schema

### xdm:searchResponse Type


* [Measure](../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:siteSearch
### Site Search

The information related to site search.

`xdm:siteSearch`
* is optional
* type: Site Search
* defined in this schema

### xdm:siteSearch Type


* [Site Search](../../datatypes/sitesearch.schema.md) – `https://ns.adobe.com/xdm/datatypes/sitesearch`




