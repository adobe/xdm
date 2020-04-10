
# Geo interaction details Schema

```
https://ns.adobe.com/xdm/context/geo-interaction-details
```

The geo details relating to the current state of inclusion in a geo defined area.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/geo-interaction-details.schema.json](context/geo-interaction-details.schema.json) |
## Schema Hierarchy

* Geo interaction details `https://ns.adobe.com/xdm/context/geo-interaction-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Geo Shape](../external/schema/geoshape.schema.md) `http://schema.org/GeoShape`


## Geo interaction details Example
```json
{
  "xdm:distanceToCenter": 100,
  "xdm:accuracy": 30
}
```

# Geo interaction details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:deviceGeoAccuracy](#xdmdevicegeoaccuracy) | `number` | Optional | Geo interaction details (this schema) |
| [xdm:distanceToCenter](#xdmdistancetocenter) | `number` | Optional | Geo interaction details (this schema) |
| [xdm:geoShape](#xdmgeoshape) | Geo Shape | Optional | Geo interaction details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:deviceGeoAccuracy
### Geo device accuracy

The accuracy of the geo measuring device or mechanism, measured in meters.

`xdm:deviceGeoAccuracy`
* is optional
* type: `number`
* defined in this schema

### xdm:deviceGeoAccuracy Type


`number`






## xdm:distanceToCenter
### Distance to center

Distance to center of geo in, case of a geo circle, measured in meters.

`xdm:distanceToCenter`
* is optional
* type: `number`
* defined in this schema

### xdm:distanceToCenter Type


`number`






## xdm:geoShape
### Geo shape

Geo shape of the geo being interacted with.

`xdm:geoShape`
* is optional
* type: Geo Shape
* defined in this schema

### xdm:geoShape Type


* [Geo Shape](../external/schema/geoshape.schema.md) – `http://schema.org/GeoShape`




