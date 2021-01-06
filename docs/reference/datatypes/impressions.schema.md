
# Impressions Schema

```
https://ns.adobe.com/xdm/datatypes/impressions
```

Tracks when impressions are presented on a site, along with names, types, and counts.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/impressions.schema.json](datatypes/impressions.schema.json) |

## Impressions Examples

```json
{}
```

```json
{
  "schema:name": "metric: impressions",
  "@id": "xdm:impressions",
  "xdm:measurement": "count",
  "xdm:unit": ""
}
```


# Impressions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:impressionDisplays](#xdmimpressiondisplays) | `integer` | Optional | Impressions (this schema) |
| [xdm:impressionID](#xdmimpressionid) | `string` | Optional | Impressions (this schema) |
| [xdm:impressionType](#xdmimpressiontype) | `string` | Optional | Impressions (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:impressionDisplays
### Impression Displays

Counts the number of times an impression item has been displayed to a visitor.

`xdm:impressionDisplays`
* is optional
* type: `integer`
* defined in this schema

### xdm:impressionDisplays Type


`integer`






## xdm:impressionID
### Impression ID

Tracks the ID of an item in an impression array.

`xdm:impressionID`
* is optional
* type: `string`
* defined in this schema

### xdm:impressionID Type


`string`






## xdm:impressionType
### Impression Type

Tracks the type of impression in an impression array.

`xdm:impressionType`
* is optional
* type: `string`
* defined in this schema

### xdm:impressionType Type


`string`





