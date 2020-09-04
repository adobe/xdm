
# Geo Shape Schema

```
http://schema.org/GeoShape
```

The geographic shape of a place. Based on [schema.org](http://schema.org/GeoShape).

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/external/schema/geoshape.schema.json](datatypes/external/schema/geoshape.schema.json) |
## Schema Hierarchy

* Geo Shape `http://schema.org/GeoShape`
  * [Geo Circle](geocircle.schema.md) `http://schema.org/GeoCircle`


## Geo Shape Example
```json
{
  "@id": "https://data.adobe.io/entities/geo/shapeid123",
  "schema:description": "GeoCircle of New York Metro",
  "schema:circle": {
    "@id": "https://data.adobe.io/entities/geo/circleid123",
    "schema:description": "New York Metro",
    "schema:coordinates": {
      "@id": "https://data.adobe.io/entities/geo/111",
      "schema:description": "New York",
      "schema:latitude": 37.3308953,
      "schema:longitude": -121.8939894,
      "schema:elevation": 31.0896
    },
    "schema:radius": 80000
  }
}
```

# Geo Shape Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Geo Shape (this schema) |
| [schema:box](#schemabox) | Geo Coordinates | Optional | Geo Shape (this schema) |
| [schema:circle](#schemacircle) | Geo Circle | Optional | Geo Shape (this schema) |
| [schema:description](#schemadescription) | `string` | Optional | Geo Shape (this schema) |
| [schema:elevation](#schemaelevation) | `number` | Optional | Geo Shape (this schema) |
| [schema:polygon](#schemapolygon) | Geo Coordinates | Optional | Geo Shape (this schema) |
| [xdm:ceiling](#xdmceiling) | `number` | Optional | Geo Shape (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Shape ID

The unique identifier of the shape.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`






## schema:box
### Box

The area enclosed by the rectangle formed by two coordinates. The first coordinate is the lower corner and the second coordinate is the upper corner of a rectangle.

`schema:box`
* is optional
* type: Geo Coordinates
* between `2` and `2` items in the array
* defined in this schema

### schema:box Type


Array type: Geo Coordinates

All items must be of the type:
* [Geo Coordinates](geocoordinates.schema.md) – `http://schema.org/GeoCoordinates`








## schema:circle
### Circle

A circular region with a specific radius centered on a geographic coordinate.

`schema:circle`
* is optional
* type: Geo Circle
* defined in this schema

### schema:circle Type


* [Geo Circle](geocircle.schema.md) – `http://schema.org/GeoCircle`





## schema:description
### Description

A description of what the shape is defining.

`schema:description`
* is optional
* type: `string`
* defined in this schema

### schema:description Type


`string`






## schema:elevation
### Elevation

The specific or minimum elevation of the shape. This value conforms to the [WGS84](http://gisgeography.com/wgs84-world-geodetic-system/) datum and is measured in meters. In combination with `ceiling`, this property can be used to express a three-dimensional bounding box for a location.

`schema:elevation`
* is optional
* type: `number`
* defined in this schema

### schema:elevation Type


`number`






## schema:polygon
### Polygon

A series of four or more coordinates where the first and final coordinates are identical. In schema.org, this is a plain text. In XDM, it is a structured array instead.

`schema:polygon`
* is optional
* type: Geo Coordinates
* at least `4` items in the array
* defined in this schema

### schema:polygon Type


Array type: Geo Coordinates

All items must be of the type:
* [Geo Coordinates](geocoordinates.schema.md) – `http://schema.org/GeoCoordinates`








## xdm:ceiling
### Ceiling

The maximum elevation of the shape. Only valid when used in combination with `elevation`. This value conforms to the [WGS84](http://gisgeography.com/wgs84-world-geodetic-system/) datum and is measured in meters. This value is not part of the schema.org spec. In combination with `elevation`, this property can be used to express a three-dimensional bounding box for a location.

`xdm:ceiling`
* is optional
* type: `number`
* defined in this schema

### xdm:ceiling Type


`number`





