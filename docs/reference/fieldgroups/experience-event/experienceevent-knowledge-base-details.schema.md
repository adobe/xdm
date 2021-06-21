
# Knowledge Base Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-knowledge-base-details
```



| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-knowledge-base-details.schema.json](fieldgroups/experience-event/experienceevent-knowledge-base-details.schema.json) |

## Knowledge Base Details Example
```json
{
  "xdm:siteKnowledge": {
    "xdm:knowledgeBaseArticeID": "",
    "xdm:knowledgeBaseArticleType": "",
    "xdm:knowledgeBaseArticleView": 1,
    "xdm:knowledgeBaseSearch": {
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

# Knowledge Base Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:siteKnowledge](#xdmsiteknowledge) | `object` | Optional | Knowledge Base Details (this schema) |
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
| `xdm:knowledgeBaseArticleID`| string | Optional |
| `xdm:knowledgeBaseArticleType`| string | Optional |
| `xdm:knowledgeBaseArticleView`| integer | Optional |
| `xdm:knowledgeBaseSearch`|  | Optional |



#### xdm:knowledgeBaseArticleID
##### Knowledge Base Article ID

Tracks the knowledge base article ID when it has been viewed.

`xdm:knowledgeBaseArticleID`
* is optional
* type: `string`

##### xdm:knowledgeBaseArticleID Type


`string`








#### xdm:knowledgeBaseArticleType
##### Knowledge Base Article Type

Tracks the knowledge base article type when it has been viewed.

`xdm:knowledgeBaseArticleType`
* is optional
* type: `string`

##### xdm:knowledgeBaseArticleType Type


`string`








#### xdm:knowledgeBaseArticleView
##### Knowledge Base Article View

Tracked when a knowledge base article has been viewed.

`xdm:knowledgeBaseArticleView`
* is optional
* type: `integer`

##### xdm:knowledgeBaseArticleView Type


`integer`








#### xdm:knowledgeBaseSearch
##### Knowledge Base Search

Extension of internalSearch data type.

`xdm:knowledgeBaseSearch`
* is optional
* type: reference

##### xdm:knowledgeBaseSearch Type


* []() – `https://ns.adobe.com/xdm/datatypes/internal-site-search`









