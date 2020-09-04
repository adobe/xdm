
# Geo Circle Schema

```
http://schema.org/GeoCircle
```

A circular region of a particular radius centered on a GeoCoordinate. Based on [schema.org](http://schema.org/GeoCircle)

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/external/schema/geocircle.schema.json](datatypes/external/schema/geocircle.schema.json) |
## Schema Hierarchy

* Geo Circle `http://schema.org/GeoCircle`
  * [Geo Coordinates](geocoordinates.schema.md) `http://schema.org/GeoCoordinates`


## Geo Circle Example
```json
{
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
```

# Geo Circle Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Geo Circle (this schema) |
| [schema:coordinates](#schemacoordinates) | Geo Coordinates | Optional | Geo Circle (this schema) |
| [schema:description](#schemadescription) | `string` | Optional | Geo Circle (this schema) |
| [schema:radius](#schemaradius) | `number` | Optional | Geo Circle (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

The unique identifier of the circle.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`






## schema:coordinates
### Coordinates

`schema:coordinates`
* is optional
* type: Geo Coordinates
* defined in this schema

### schema:coordinates Type


* [Geo Coordinates](geocoordinates.schema.md) – `http://schema.org/GeoCoordinates`





## schema:description
### Description

A description of what the circle contains.

`schema:description`
* is optional
* type: `string`
* defined in this schema

### schema:description Type


`string`






## schema:radius
### Radius

The length of the radius of the circle. This value conforms to the WGS84 datum and is measured in meters.

`schema:radius`
* is optional
* type: `number`
* defined in this schema

### schema:radius Type


`number`





