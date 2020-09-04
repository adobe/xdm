
# Season Schema

```
http://www.iptc.org/season
```

The season the show belongs to. Based on [www.iptc.org](https://www.iptc.org/std/videometadatahub/recommendation/pre-versions/IPTC-VideoMetadataHub-props-Rec_1.1.html)

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/external/iptc/season.schema.json](datatypes/external/iptc/season.schema.json) |

## Season Example
```json
{
  "iptc4xmpExt:Number": 1
}
```

# Season Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [iptc4xmpExt:Identifier](#iptc4xmpextidentifier) | `string` | Optional | Season (this schema) |
| [iptc4xmpExt:Name](#iptc4xmpextname) | `string` | Optional | Season (this schema) |
| [iptc4xmpExt:Number](#iptc4xmpextnumber) | `number` | Optional | Season (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## iptc4xmpExt:Identifier
### Season Identifier

Identifier of the season.

`iptc4xmpExt:Identifier`
* is optional
* type: `string`
* defined in this schema

### iptc4xmpExt:Identifier Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## iptc4xmpExt:Name
### Season Name

Name of the season.

`iptc4xmpExt:Name`
* is optional
* type: `string`
* defined in this schema

### iptc4xmpExt:Name Type


`string`






## iptc4xmpExt:Number
### Season Number

Number of the season.

`iptc4xmpExt:Number`
* is optional
* type: `number`
* defined in this schema

### iptc4xmpExt:Number Type


`number`





