
# Geographical Unit Schema

```
https://ns.adobe.com/xdm/common/geounit
```

The geographical unit of a parent geographical unit.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [common/geounit.schema.json](common/geounit.schema.json) |
## Schema Hierarchy

* Geographical Unit `https://ns.adobe.com/xdm/common/geounit`
  * [Geographical Unit](geounit.schema.md) `https://ns.adobe.com/xdm/common/geounit`


## Geographical Unit Example
```json
{
  "@id": "https://data.adobe.io/geo-san-jose",
  "xdm:label": "San Jose",
  "xdm:parentGeoUnit": {
    "@id": "https://data.adobe.io/geo-sf-bay-area"
  }
}
```

# Geographical Unit Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `string` | Optional | Geographical Unit (this schema) |
| [xdm:label](#xdmlabel) | `string` | Optional | Geographical Unit (this schema) |
| [xdm:parentGeoUnit](#xdmparentgeounit) | Geographical Unit | Optional | Geographical Unit (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

The ID associated with this geographical unit.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:label
### Label of the geographical unit.

The user-friendly name for the geographical unit.

`xdm:label`
* is optional
* type: `string`
* defined in this schema

### xdm:label Type


`string`






## xdm:parentGeoUnit
### Parent Geographical Unit.

Parent geographical unit of the current geographical unit in the geographical hierarchy. For e.g. `geounit` for `France` might have `xdm:parentGeoUnit` as `geounit` `Europe`.

`xdm:parentGeoUnit`
* is optional
* type: Geographical Unit
* defined in this schema

### xdm:parentGeoUnit Type


* [Geographical Unit](geounit.schema.md) – `https://ns.adobe.com/xdm/common/geounit`




