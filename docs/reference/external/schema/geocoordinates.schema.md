
# Geo Coordinates Schema

```
http://schema.org/GeoCoordinates
```

The geographic coordinates of a place. Based on [schema.org](http://schema.org/GeoCoordinates).

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [external/schema/geocoordinates.schema.json](external/schema/geocoordinates.schema.json) |

## Geo Coordinates Example
```json
{
  "@id": "https://data.adobe.io/entities/geo/111",
  "xdm:description": "New York",
  "xdm:latitude": 37.3308953,
  "xdm:longitude": -121.8939894,
  "xdm:elevation": 31.0896
}
```

# Geo Coordinates Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Geo Coordinates (this schema) |
| [schema:description](#schemadescription) | `string` | Optional | Geo Coordinates (this schema) |
| [schema:elevation](#schemaelevation) | `number` | Optional | Geo Coordinates (this schema) |
| [schema:latitude](#schemalatitude) | `number` | Optional | Geo Coordinates (this schema) |
| [schema:longitude](#schemalongitude) | `number` | Optional | Geo Coordinates (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Coordinates ID

The unique identifier of the coordinates.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## schema:description
### Description

A description of what the coordinates identify.

`schema:description`
* is optional
* type: `string`
* defined in this schema

### schema:description Type


`string`






## schema:elevation
### Elevation

The specific elevation of the defined coordinate. The value conforms to the [WGS84](http://gisgeography.com/wgs84-world-geodetic-system/) datum and is measured in meters.

`schema:elevation`
* is optional
* type: `number`
* defined in this schema

### schema:elevation Type


`number`






## schema:latitude
### Latitude

The signed vertical coordinate of a geographic point.

`schema:latitude`
* is optional
* type: `number`
* defined in this schema

### schema:latitude Type


`number`
* minimum value: `-90`
* maximum value: `90`





## schema:longitude
### Longitude

The signed horizontal coordinate of a geographic point.

`schema:longitude`
* is optional
* type: `number`
* defined in this schema

### schema:longitude Type


`number`
* minimum value: `-180`
* maximum value: `180`




