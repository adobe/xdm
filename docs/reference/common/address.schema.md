
# Postal address Schema

```
https://ns.adobe.com/xdm/common/address
```

A postal address. Address could relate to a person's home, work, or preferred store location.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [common/address.schema.json](common/address.schema.json) |
## Schema Hierarchy

* Postal address `https://ns.adobe.com/xdm/common/address`
  * [Geo Coordinates](../external/schema/geocoordinates.schema.md) `http://schema.org/GeoCoordinates`
  * [Geo](geo.schema.md) `https://ns.adobe.com/xdm/common/geo`
  * [Audit trail](auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


## Postal address Example
```json
{
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
}
```

# Postal address Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [@id](#id) | `string` | Optional |  | [Geo Coordinates](../external/schema/geocoordinates.schema.md#id) |
| [repo:createDate](#repocreatedate) | `string` | Optional |  | [Audit trail](auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional |  | [Audit trail](auditable.schema.md#repomodifydate) |
| [schema:description](#schemadescription) | `string` | Optional |  | [Geo Coordinates](../external/schema/geocoordinates.schema.md#schemadescription) |
| [schema:elevation](#schemaelevation) | `number` | Optional |  | [Geo Coordinates](../external/schema/geocoordinates.schema.md#schemaelevation) |
| [schema:latitude](#schemalatitude) | `number` | Optional |  | [Geo Coordinates](../external/schema/geocoordinates.schema.md#schemalatitude) |
| [schema:longitude](#schemalongitude) | `number` | Optional |  | [Geo Coordinates](../external/schema/geocoordinates.schema.md#schemalongitude) |
| [xdm:city](#xdmcity) | `string` | Optional |  | [Geo](geo.schema.md#xdmcity) |
| [xdm:country](#xdmcountry) | `string` | Optional |  | Postal address (this schema) |
| [xdm:countryCode](#xdmcountrycode) | `string` | Optional |  | [Geo](geo.schema.md#xdmcountrycode) |
| [xdm:createdByBatchID](#xdmcreatedbybatchid) | `string` | Optional |  | [Audit trail](auditable.schema.md#xdmcreatedbybatchid) |
| [xdm:dmaID](#xdmdmaid) | `integer` | Optional |  | [Geo](geo.schema.md#xdmdmaid) |
| [xdm:label](#xdmlabel) | `string` | Optional |  | Postal address (this schema) |
| [xdm:lastVerifiedDate](#xdmlastverifieddate) | `string` | Optional |  | Postal address (this schema) |
| [xdm:modifiedByBatchID](#xdmmodifiedbybatchid) | `string` | Optional |  | [Audit trail](auditable.schema.md#xdmmodifiedbybatchid) |
| [xdm:msaID](#xdmmsaid) | `integer` | Optional |  | [Geo](geo.schema.md#xdmmsaid) |
| [xdm:postOfficeBox](#xdmpostofficebox) | `string` | Optional |  | Postal address (this schema) |
| [xdm:postalCode](#xdmpostalcode) | `string` | Optional |  | [Geo](geo.schema.md#xdmpostalcode) |
| [xdm:primary](#xdmprimary) | `boolean` | Optional |  | Postal address (this schema) |
| [xdm:region](#xdmregion) | `string` | Optional |  | Postal address (this schema) |
| [xdm:repositoryCreatedBy](#xdmrepositorycreatedby) | `string` | Optional |  | [Audit trail](auditable.schema.md#xdmrepositorycreatedby) |
| [xdm:repositoryLastModifiedBy](#xdmrepositorylastmodifiedby) | `string` | Optional |  | [Audit trail](auditable.schema.md#xdmrepositorylastmodifiedby) |
| [xdm:stateProvince](#xdmstateprovince) | `string` | Optional |  | [Geo](geo.schema.md#xdmstateprovince) |
| [xdm:status](#xdmstatus) | `string` | Optional | `"active"` | Postal address (this schema) |
| [xdm:statusReason](#xdmstatusreason) | `string` | Optional |  | Postal address (this schema) |
| [xdm:street1](#xdmstreet1) | `string` | Optional |  | Postal address (this schema) |
| [xdm:street2](#xdmstreet2) | `string` | Optional |  | Postal address (this schema) |
| [xdm:street3](#xdmstreet3) | `string` | Optional |  | Postal address (this schema) |
| [xdm:street4](#xdmstreet4) | `string` | Optional |  | Postal address (this schema) |
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






## repo:createDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:createDate`
* is optional
* type: `string`
* defined in [Audit trail](auditable.schema.md#repocreatedate)

### repo:createDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:createDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:modifyDate

The server date and time when the resource was last modified in the repository, such as when a new version of an asset is uploaded or a directory's child resource is added or removed. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:modifyDate`
* is optional
* type: `string`
* defined in [Audit trail](auditable.schema.md#repomodifydate)

### repo:modifyDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:modifyDate Example

```json
"2004-10-23T12:00:00-06:00"
```


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
* defined in [Geo](geo.schema.md#xdmcity)

### xdm:city Type


`string`






## xdm:country
### Country

The name of the government-administered territory. Other than `xdm:countryCode`, this is a free-form field that can have the country name in any language.

`xdm:country`
* is optional
* type: `string`
* defined in this schema

### xdm:country Type


`string`






## xdm:countryCode
### Country code

The two-character [ISO 3166-1 alpha-2](https://datahub.io/core/country-list) code for the country.

`xdm:countryCode`
* is optional
* type: `string`
* defined in [Geo](geo.schema.md#xdmcountrycode)

### xdm:countryCode Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%7D%24)):
```regex
^[A-Z]{2}$
```






## xdm:createdByBatchID
### Created by batch identifier

The dataset files in Catalog which has been originating the creation of the record.

`xdm:createdByBatchID`
* is optional
* type: `string`
* defined in [Audit trail](auditable.schema.md#xdmcreatedbybatchid)

### xdm:createdByBatchID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:dmaID
### Designated market area

The Nielsen media research designated market area.

`xdm:dmaID`
* is optional
* type: `integer`
* defined in [Geo](geo.schema.md#xdmdmaid)

### xdm:dmaID Type


`integer`






## xdm:label
### Label

Free form name of the address.

`xdm:label`
* is optional
* type: `string`
* defined in this schema

### xdm:label Type


`string`






## xdm:lastVerifiedDate
### Last verified date

The date that the address was last verified as still associated to the person.

`xdm:lastVerifiedDate`
* is optional
* type: `string`
* defined in this schema

### xdm:lastVerifiedDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:modifiedByBatchID
### Modified by batch identifier

The last dataset files in Catalog which has modified the record. At creation time, `modifiedByBatchID` is set as `createdByBatchID`.

`xdm:modifiedByBatchID`
* is optional
* type: `string`
* defined in [Audit trail](auditable.schema.md#xdmmodifiedbybatchid)

### xdm:modifiedByBatchID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:msaID
### Metropolitan statistical area

The metropolitan statistical area in the United States where the observation occurred.

`xdm:msaID`
* is optional
* type: `integer`
* defined in [Geo](geo.schema.md#xdmmsaid)

### xdm:msaID Type


`integer`






## xdm:postOfficeBox
### Post office box

Post office box of the address.

`xdm:postOfficeBox`
* is optional
* type: `string`
* defined in this schema

### xdm:postOfficeBox Type


`string`

* maximum length: 20 characters





## xdm:postalCode
### Postal code

The postal code of the location. Postal codes are not available for all countries. In some countries, this will only contain part of the postal code.

`xdm:postalCode`
* is optional
* type: `string`
* defined in [Geo](geo.schema.md#xdmpostalcode)

### xdm:postalCode Type


`string`






## xdm:primary
### Primary

Primary address indicator. A profile can have only one `primary` address at a given point of time.

`xdm:primary`
* is optional
* type: `boolean`
* defined in this schema

### xdm:primary Type


`boolean`





## xdm:region
### Region

The region, county, or district portion of the address.

`xdm:region`
* is optional
* type: `string`
* defined in this schema

### xdm:region Type


`string`






## xdm:repositoryCreatedBy
### Created by user identifier

User ID of who created the record.

`xdm:repositoryCreatedBy`
* is optional
* type: `string`
* defined in [Audit trail](auditable.schema.md#xdmrepositorycreatedby)

### xdm:repositoryCreatedBy Type


`string`






## xdm:repositoryLastModifiedBy
### Modified by user identifier

User ID of who last modified the record. At creation time, `modifiedByUser` is set as `createdByUser`.

`xdm:repositoryLastModifiedBy`
* is optional
* type: `string`
* defined in [Audit trail](auditable.schema.md#xdmrepositorylastmodifiedby)

### xdm:repositoryLastModifiedBy Type


`string`






## xdm:stateProvince
### State or province

The state, or province portion of the observation. The format follows the [ISO 3166-2 (country and subdivision)][http://www.unece.org/cefact/locode/subdivisions.html] standard.

`xdm:stateProvince`
* is optional
* type: `string`
* defined in [Geo](geo.schema.md#xdmstateprovince)

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



## xdm:status
### Status

An indication as to the ability to use the address.

`xdm:status`
* is optional
* type: `string`
* default: `"active"`
* defined in this schema

### xdm:status Type


`string`



### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `active` | Active |
| `incomplete` | Incomplete |
| `pending_verification` | Pending verification |
| `blacklisted` | Blacklisted |
| `blocked` | Blocked |




## xdm:statusReason
### Status reason

A description of the current status.

`xdm:statusReason`
* is optional
* type: `string`
* defined in this schema

### xdm:statusReason Type


`string`






## xdm:street1
### Street 1

Primary street level information, apartment number, street number, and street name.

`xdm:street1`
* is optional
* type: `string`
* defined in this schema

### xdm:street1 Type


`string`






## xdm:street2
### Street 2

Optional street information second line.

`xdm:street2`
* is optional
* type: `string`
* defined in this schema

### xdm:street2 Type


`string`






## xdm:street3
### Street 3

Optional street information third line.

`xdm:street3`
* is optional
* type: `string`
* defined in this schema

### xdm:street3 Type


`string`






## xdm:street4
### Street 4

Optional street information fourth line.

`xdm:street4`
* is optional
* type: `string`
* defined in this schema

### xdm:street4 Type


`string`





