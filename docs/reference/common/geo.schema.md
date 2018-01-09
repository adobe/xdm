
# Geo Schema

```
https://ns.adobe.com/xdm/common/geo.schema.json
```

The geographic related data where an event was observed.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [common/geo.schema.json](common/geo.schema.json) |

## Geo Examples

```json
{
  "xdm:countryCode": "JP",
  "xdm:stateProvince": "Tōkyō-to",
  "xdm:city": "Tōkyō",
  "xdm:postalCode": "141-0032",
  "xdm:latitude": 35.6185,
  "xdm:longitude": 139.73237
}
```

```json
{
  "xdm:countryCode": "DE",
  "xdm:stateProvince": "Brandenburg",
  "xdm:city": "Potsdam",
  "xdm:postalCode": "14482"
}
```


# Geo Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:city](#xdmcity) | `string` | Optional | Geo (this schema) |
| [xdm:countryCode](#xdmcountryCode) | `string` | Optional | Geo (this schema) |
| [xdm:dmaID](#xdmdmaID) | `integer` | Optional | Geo (this schema) |
| [xdm:latitude](#xdmlatitude) | `number` | Optional | Geo (this schema) |
| [xdm:longitude](#xdmlongitude) | `number` | Optional | Geo (this schema) |
| [xdm:msaID](#xdmmsaID) | `integer` | Optional | Geo (this schema) |
| [xdm:postalCode](#xdmpostalCode) | `string` | Optional | Geo (this schema) |
| [xdm:stateProvince](#xdmstateProvince) | `string` | Optional | Geo (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

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
### Designated Market Area

The Nielsen Media Research designated market area.

`xdm:dmaID`
* is optional
* type: `integer`
* defined in this schema

### xdm:dmaID Type


`integer`






## xdm:latitude
### Latitude

The signed vertical coordinate of a geographic point.

`xdm:latitude`
* is optional
* type: `number`
* defined in this schema

### xdm:latitude Type


`number`
* minimum value: `-90`
* maximum value: `90`





## xdm:longitude
### Longitude

The signed horizontal coordinate of a geographic point.

`xdm:longitude`
* is optional
* type: `number`
* defined in this schema

### xdm:longitude Type


`number`
* minimum value: `-180`
* maximum value: `180`





## xdm:msaID
### Metropolitan Statistical Area

The Metropolitan Statistical Area in the USA where the observation occurred.

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

The state, or province portion of the observation.

`xdm:stateProvince`
* is optional
* type: `string`
* defined in this schema

### xdm:stateProvince Type


`string`





