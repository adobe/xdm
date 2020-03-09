
# Physical place Schema

```
https://ns.adobe.com/xdm/context/place
```

A place in the real world with a physical location.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/place.schema.json](context/place.schema.json) |
## Schema Hierarchy

* Physical place `https://ns.adobe.com/xdm/context/place`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Postal address](../common/address.schema.md) `https://ns.adobe.com/xdm/common/address`
  * [Geo Shape](../external/schema/geoshape.schema.md) `http://schema.org/GeoShape`
  * [Geo Coordinates](../external/schema/geocoordinates.schema.md) `http://schema.org/GeoCoordinates`


## Physical place Example
```json
{
  "@id": "https://data.adobe.io/entities/places/locationid-123456",
  "schema:description": "A nice place to work",
  "xdm:address": {
    "@id": "https://data.adobe.io/entities/address/123",
    "xdm:primary": false,
    "xdm:street1": "345 Park Ave",
    "xdm:city": "San Jose",
    "xdm:stateProvince": "US-CA",
    "xdm:postalCode": "95110",
    "xdm:country": "United States",
    "xdm:countryCode": "US",
    "schema:latitude": 37.3382,
    "schema:longitude": 121.8863,
    "xdm:status": "active",
    "xdm:lastVerifiedDate": "2018-01-02"
  },
  "schema:telephone": "1-408-888-0000",
  "xdm:containsPlaces": [
    "https://data.adobe.io/entities/places/locationid-123457",
    "https://data.adobe.io/entities/places/locationid-123458"
  ]
}
```

# Physical place Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Physical place (this schema) |
| [schema:branchCode](#schemabranchcode) | `string` | Optional | Physical place (this schema) |
| [schema:description](#schemadescription) | `string` | Optional | Physical place (this schema) |
| [schema:telephone](#schematelephone) | `string` | Optional | Physical place (this schema) |
| [xdm:address](#xdmaddress) | Postal address | Optional | Physical place (this schema) |
| [xdm:containedInPlace](#xdmcontainedinplace) | `string` | Optional | Physical place (this schema) |
| [xdm:containsPlaces](#xdmcontainsplaces) | `string[]` | Optional | Physical place (this schema) |
| [xdm:pointOfInterest](#xdmpointofinterest) | Geo Coordinates | Optional | Physical place (this schema) |
| [xdm:shape](#xdmshape) | Geo Shape | Optional | Physical place (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Place ID

The unique identifier of the place.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## schema:branchCode
### Location code

A short textual code also called "store code" that uniquely identifies a place of business. The code is typically assigned by the parent organization and used in structured URLs. For example, in the URL `http://www.starbucks.co.uk/store-locator/etc/detail/3047` the code "3047" is a `branchCode` for a particular branch.

`schema:branchCode`
* is optional
* type: `string`
* defined in this schema

### schema:branchCode Type


`string`






## schema:description
### Description

The description of the physical location.

`schema:description`
* is optional
* type: `string`
* defined in this schema

### schema:description Type


`string`






## schema:telephone
### Phone number

The phone number.

`schema:telephone`
* is optional
* type: `string`
* defined in this schema

### schema:telephone Type


`string`






## xdm:address
### Address

The physical address of the location.

`xdm:address`
* is optional
* type: Postal address
* defined in this schema

### xdm:address Type


* [Postal address](../common/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:containedInPlace
### Contained by location

XDM URI of another `Place` that this place is contained in. This property is based on `schema:containedInPlace`, but is using URI references instead of embedding the containing place.

`xdm:containedInPlace`
* is optional
* type: `string`
* defined in this schema

### xdm:containedInPlace Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:containsPlaces
### Contains locations

An array of XDM URIs of other `Place` instances that this place is containing. This property is based on `schema:containsPlace`, but is using URI references instead of embedding the containing place. In addition, it is an array, allowing one place to include multiple other places.

`xdm:containsPlaces`
* is optional
* type: `string[]`

* defined in this schema

### xdm:containsPlaces Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))


  
The XDM URI of another `Place` that this place contains.







## xdm:pointOfInterest
### Point of interest

The coordinates of the point of interest for this location.

`xdm:pointOfInterest`
* is optional
* type: Geo Coordinates
* defined in this schema

### xdm:pointOfInterest Type


* [Geo Coordinates](../external/schema/geocoordinates.schema.md) – `http://schema.org/GeoCoordinates`





## xdm:shape
### Geo shape

The geographic shape of the physical location.

`xdm:shape`
* is optional
* type: Geo Shape
* defined in this schema

### xdm:shape Type


* [Geo Shape](../external/schema/geoshape.schema.md) – `http://schema.org/GeoShape`




