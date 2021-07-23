
# Support Site Search Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-support-site-search
```



| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-support-site-search.schema.json](fieldgroups/experience-event/experienceevent-support-site-search.schema.json) |

## Support Site Search Example
```json
{
  "xdm:siteKnowledge": {
    "xdm:supportSiteSearch": {
      "xdm:internal-site-search": {
        "xdm:campusSearch": "",
        "xdm:numberOfResults": 258,
        "xdm:productFindingMethods": "pedals",
        "xdm:refinementValue": "aluminum",
        "xdm:refinementType": [
          "Customer Reviews = 5",
          "Recommended Use = Trail"
        ],
        "xdm:refinementInstances": 1,
        "xdm:resultsPageNumber": 2,
        "xdm:resultsPerPage": 50,
        "xdm:instances": 1,
        "xdm:locationInPage": "top nav",
        "xdm:nullInstances": 0,
        "xdm:postalCode": "63141",
        "xdm:radiusDistance": 25,
        "xdm:radiusType": "miles",
        "xdm:term": "shimano pedals",
        "xdm:autocompleteClicked": true,
        "xdm:autocompleteValue": "shimano pedals",
        "xdm:autocompleteTypedValue": "pedal",
        "xdm:searchType": "standard",
        "xdm:sortOrder": "ascending",
        "xdm:sortType": "price: low to high"
      }
    }
  }
}
```

# Support Site Search Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:siteKnowledge](#xdmsiteknowledge) | `object` | Optional | Support Site Search (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:siteKnowledge

Knowledge base tracking, support site searches and forum interaction details.

`xdm:siteKnowledge`
* is optional
* type: `object`
* defined in this schema

### xdm:siteKnowledge Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:supportSiteSearch`|  | Optional |



#### xdm:supportSiteSearch
##### Support Site Search

Extension of internalSearch data type.

`xdm:supportSiteSearch`
* is optional
* type: reference

##### xdm:supportSiteSearch Type


* []() – `https://ns.adobe.com/xdm/datatypes/internal-site-search`









