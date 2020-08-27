
# Rating Schema

```
http://www.iptc.org/rating
```

The rating of the show. Based on [www.iptc.org](https://www.iptc.org/std/videometadatahub/recommendation/pre-versions/IPTC-VideoMetadataHub-props-Rec_1.1.html)

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/external/iptc/rating.schema.json](datatypes/external/iptc/rating.schema.json) |

## Rating Example
```json
{
  "iptc4xmpExt:RatingValue": "TV14",
  "iptc4xmpExt:RatingSourceLink": "http://www.tvguidelines.org/ratings.htm"
}
```

# Rating Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [iptc4xmpExt:RatingSourceLink](#iptc4xmpextratingsourcelink) | `string` | Optional | Rating (this schema) |
| [iptc4xmpExt:RatingValue](#iptc4xmpextratingvalue) | `string` | Optional | Rating (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## iptc4xmpExt:RatingSourceLink
### Rating Source Link

Link to the site and optionally the page of the party which has issued the rating value, linked resource should explain the rating rules.

`iptc4xmpExt:RatingSourceLink`
* is optional
* type: `string`
* defined in this schema

### iptc4xmpExt:RatingSourceLink Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## iptc4xmpExt:RatingValue
### Rating Value

Rating value as issued by the rating source.

`iptc4xmpExt:RatingValue`
* is optional
* type: `string`
* defined in this schema

### iptc4xmpExt:RatingValue Type


`string`





