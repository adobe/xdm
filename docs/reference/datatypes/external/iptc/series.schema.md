
# Series Schema

```
http://www.iptc.org/series
```

The series the show belongs to. Based on [www.iptc.org](https://www.iptc.org/std/videometadatahub/recommendation/pre-versions/IPTC-VideoMetadataHub-props-Rec_1.1.html)

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/external/iptc/series.schema.json](datatypes/external/iptc/series.schema.json) |

## Series Example
```json
{
  "iptc4xmpExt:Name": "nba_highlights",
  "iptc4xmpExt:Identifier": "http://espn.com/series-identifiers/2613953"
}
```

# Series Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [iptc4xmpExt:Identifier](#iptc4xmpextidentifier) | `string` | Optional | Series (this schema) |
| [iptc4xmpExt:Name](#iptc4xmpextname) | `string` | Optional | Series (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## iptc4xmpExt:Identifier
### Series Identifier

Identifier of the series.

`iptc4xmpExt:Identifier`
* is optional
* type: `string`
* defined in this schema

### iptc4xmpExt:Identifier Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## iptc4xmpExt:Name
### Series Name

Name of the series.

`iptc4xmpExt:Name`
* is optional
* type: `string`
* defined in this schema

### iptc4xmpExt:Name Type


`string`





