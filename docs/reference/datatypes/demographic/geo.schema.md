
# Geo Schema

```
https://ns.adobe.com/xdm/common/geo
```

The geographic related data where an event was observed.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/demographic/geo.schema.json](datatypes/demographic/geo.schema.json) |
## Schema Hierarchy

* Geo `https://ns.adobe.com/xdm/common/geo`
  * [Geo Coordinates](../external/schema/geocoordinates.schema.md) `http://schema.org/GeoCoordinates`


## Geo Examples

```json
{
  "@id": "https://data.adobe.io/entities/geo/potsdam",
  "xdm:countryCode": "DE",
  "xdm:stateProvince": "DE-BB",
  "xdm:city": "Potsdam",
  "xdm:postalCode": "14482"
}
```

```json
{
  "@id": "https://data.adobe.io/entities/geo/tokyo",
  "xdm:countryCode": "JP",
  "xdm:stateProvince": "JP-13",
  "xdm:city": "Tōkyō",
  "xdm:postalCode": "141-0032",
  "schema:latitude": 35.6185,
  "schema:longitude": 139.73237
}
```


# Geo Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Geo Coordinates](../external/schema/geocoordinates.schema.md#id) |
| [schema:description](#schemadescription) | `string` | Optional | [Geo Coordinates](../external/schema/geocoordinates.schema.md#schemadescription) |
| [schema:elevation](#schemaelevation) | `number` | Optional | [Geo Coordinates](../external/schema/geocoordinates.schema.md#schemaelevation) |
| [schema:latitude](#schemalatitude) | `number` | Optional | [Geo Coordinates](../external/schema/geocoordinates.schema.md#schemalatitude) |
| [schema:longitude](#schemalongitude) | `number` | Optional | [Geo Coordinates](../external/schema/geocoordinates.schema.md#schemalongitude) |
| [xdm:city](#xdmcity) | `string` | Optional | Geo (this schema) |
| [xdm:countryCode](#xdmcountrycode) | `string` | Optional | Geo (this schema) |
| [xdm:dmaID](#xdmdmaid) | `integer` | Optional | Geo (this schema) |
| [xdm:msaID](#xdmmsaid) | `integer` | Optional | Geo (this schema) |
| [xdm:postalCode](#xdmpostalcode) | `string` | Optional | Geo (this schema) |
| [xdm:stateProvince](#xdmstateprovince) | `string` | Optional | Geo (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Coordinates ID

The unique identifier of the coordinates.

`@id`
* is optional
* type: `string`
* defined in [Geo Coordinates](../external/schema/geocoordinates.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## schema:description
### Description

A description of what the coordinates identify.

`schema:description`
* is optional
* type: `string`
* defined in [Geo Coordinates](../external/schema/geocoordinates.schema.md#schemadescription)

### schema:description Type


`string`






## schema:elevation
### Elevation

The specific elevation of the defined coordinate. The value conforms to the [WGS84](http://gisgeography.com/wgs84-world-geodetic-system/) datum and is measured in meters.

`schema:elevation`
* is optional
* type: `number`
* defined in [Geo Coordinates](../external/schema/geocoordinates.schema.md#schemaelevation)

### schema:elevation Type


`number`






## schema:latitude
### Latitude

The signed vertical coordinate of a geographic point.

`schema:latitude`
* is optional
* type: `number`
* defined in [Geo Coordinates](../external/schema/geocoordinates.schema.md#schemalatitude)

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
* defined in [Geo Coordinates](../external/schema/geocoordinates.schema.md#schemalongitude)

### schema:longitude Type


`number`
* minimum value: `-180`
* maximum value: `180`





## xdm:city
### City

The name of the city.

`xdm:city`
* is optional
* type: `string`
* defined in this schema

### xdm:city Type


`string`






## xdm:countryCode
### Country code

The two-character [ISO 3166-1 alpha-2](https://datahub.io/core/country-list) code for the country.

`xdm:countryCode`
* is optional
* type: `string`
* defined in this schema

### xdm:countryCode Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%7D%24)):
```regex
^[A-Z]{2}$
```






## xdm:dmaID
### Designated market area

The Nielsen media research designated market area.

`xdm:dmaID`
* is optional
* type: `integer`
* defined in this schema

### xdm:dmaID Type


`integer`






## xdm:msaID
### Metropolitan statistical area

The metropolitan statistical area in the United States where the observation occurred.

`xdm:msaID`
* is optional
* type: `integer`
* defined in this schema

### xdm:msaID Type


`integer`






## xdm:postalCode
### Postal code

The postal code of the location. Postal codes are not available for all countries. In some countries, this will only contain part of the postal code.

`xdm:postalCode`
* is optional
* type: `string`
* defined in this schema

### xdm:postalCode Type


`string`






## xdm:stateProvince
### State or province

The state, or province portion of the observation. The format follows the [ISO 3166-2 (country and subdivision)][http://www.unece.org/cefact/locode/subdivisions.html] standard.

`xdm:stateProvince`
* is optional
* type: `string`
* defined in this schema

### xdm:stateProvince Type


`string`


All instances must conform to this regular expression 
```regex
([A-Z]{2}-[A-Z0-9]{1,3}|)
```

* test example: [US-CA](https://regexr.com/?expression=(%5BA-Z%5D%7B2%7D-%5BA-Z0-9%5D%7B1%2C3%7D%7C)&text=US-CA)
* test example: [DE-BB](https://regexr.com/?expression=(%5BA-Z%5D%7B2%7D-%5BA-Z0-9%5D%7B1%2C3%7D%7C)&text=DE-BB)
* test example: [JP-13](https://regexr.com/?expression=(%5BA-Z%5D%7B2%7D-%5BA-Z0-9%5D%7B1%2C3%7D%7C)&text=JP-13)




### xdm:stateProvince Examples

```json
"US-CA"
```

```json
"DE-BB"
```

```json
"JP-13"
```


