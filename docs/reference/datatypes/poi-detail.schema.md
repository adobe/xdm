
# Point of interest details Schema

```
https://ns.adobe.com/xdm/context/poi-detail
```

A point or place of interest (POI) Details. Used to capture the technical and metadata information for a POI.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/poi-detail.schema.json](datatypes/poi-detail.schema.json) |
## Schema Hierarchy

* Point of interest details `https://ns.adobe.com/xdm/context/poi-detail`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Point of interest details Examples

```json
{
  "xdm:poiID": "c7f4bf28-c8d9-4b89-a81f-2a8ef9367390",
  "xdm:name": "Acme Hotel Tokyo",
  "xdm:category": "Resorts",
  "xdm:type": "Hotel",
  "xdm:locatingType": "beacon",
  "xdm:beaconInteractionDetails": {
    "xdm:proximityUUID": "dd0094a0-52bb-4d3a-ab15-fcccb9b9b48e",
    "xdm:beaconMajor": 100,
    "xdm:beaconMinor": 23
  }
}
```

```json
{
  "xdm:poiID": "c7f4bf28-c8d9-4b89-a81f-2a8ef9367390",
  "xdm:name": "Acme Hotel Tokyo",
  "xdm:category": "Resorts",
  "xdm:type": "Hotel",
  "xdm:locatingType": "gps",
  "xdm:geoInteractionDetails": {
    "xdm:distanceToCenter": 100,
    "xdm:accuracy": 30
  }
}
```


# Point of interest details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:POIID](#xdmpoiid) | `string` | Optional | Point of interest details (this schema) |
| [xdm:beaconInteractionDetails](#xdmbeaconinteractiondetails) | `object` | Optional | Point of interest details (this schema) |
| [xdm:category](#xdmcategory) | `string` | Optional | Point of interest details (this schema) |
| [xdm:distanceToPOICenter](#xdmdistancetopoicenter) | `number` | Optional | Point of interest details (this schema) |
| [xdm:geoInteractionDetails](#xdmgeointeractiondetails) | `object` | Optional | Point of interest details (this schema) |
| [xdm:locatingType](#xdmlocatingtype) | `string` | Optional | Point of interest details (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Point of interest details (this schema) |
| [xdm:poiID](#xdmpoiid-1) | `string` | Optional | Point of interest details (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Point of interest details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:POIID
### POI identity

The unique identifier of the POI.

`xdm:POIID`
* is optional
* type: `string`
* defined in this schema

### xdm:POIID Type


`string`






## xdm:beaconInteractionDetails
### Beacon interaction details

Beacon details active for the POI interaction.

`xdm:beaconInteractionDetails`
* is optional
* type: `object`
* defined in this schema

### xdm:beaconInteractionDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:beaconMajor`| number | Optional |
| `xdm:beaconMinor`| number | Optional |
| `xdm:proximity`| string | Optional |
| `xdm:proximityUUID`| string | Optional |



#### xdm:beaconMajor
##### Beacon major

Major values identify and distinguish a group and unsigned integer values between 1 and 65,535.

`xdm:beaconMajor`
* is optional
* type: `number`

##### xdm:beaconMajor Type


`number`








#### xdm:beaconMinor
##### Beacon Minor

Minor values identify and distinguish an individual and unsigned integer values between 1 and 65,535.

`xdm:beaconMinor`
* is optional
* type: `number`

##### xdm:beaconMinor Type


`number`








#### xdm:proximity
##### Proximity to beacon

Estimated distance from the beacon.

`xdm:proximity`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmbeaconinteractiondetails-known-values).

##### xdm:proximity Known Values
| Value | Description |
|-------|-------------|
| `immediate` | Within a few centimeter. |
| `near` | Within a couple of meters. |
| `far` | Greater than 10 meters away. |
| `unknown` | Not able to ascertain distance, signal likely very weak. |






#### xdm:proximityUUID
##### Proximity UUID

A proximity UUID (Universally Unique IDentifier) is a special type of identifier used to distinguish beacons in your network from all other beacons in networks outside your control. The proximity UUID is configured into a beacon, to be transmitted to mobile devices in range to identify an organizations beacons.

`xdm:proximityUUID`
* is optional
* type: `string`

##### xdm:proximityUUID Type


`string`











## xdm:category
### POI category

General category assigned for organizing the POIs by the administrator of POI definitions.

`xdm:category`
* is optional
* type: `string`
* defined in this schema

### xdm:category Type


`string`






## xdm:distanceToPOICenter
### Distance to POI center

Estimated distance from the POI center in meters.

`xdm:distanceToPOICenter`
* is optional
* type: `number`
* defined in this schema

### xdm:distanceToPOICenter Type


`number`






## xdm:geoInteractionDetails
### Geo interaction details

Geo details active for the POI interaction.

`xdm:geoInteractionDetails`
* is optional
* type: `object`
* defined in this schema

### xdm:geoInteractionDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:deviceGeoAccuracy`| number | Optional |
| `xdm:distanceToCenter`| number | Optional |
| `xdm:geoShape`|  | Optional |



#### xdm:deviceGeoAccuracy
##### Geo device accuracy

The accuracy of the geo measuring device or mechanism, measured in meters.

`xdm:deviceGeoAccuracy`
* is optional
* type: `number`

##### xdm:deviceGeoAccuracy Type


`number`








#### xdm:distanceToCenter
##### Distance to center

Distance to center of geo in, case of a geo circle, measured in meters.

`xdm:distanceToCenter`
* is optional
* type: `number`

##### xdm:distanceToCenter Type


`number`








#### xdm:geoShape
##### Geo shape

Geo shape of the geo being interacted with.

`xdm:geoShape`
* is optional
* type: reference

##### xdm:geoShape Type


* []() – `http://schema.org/GeoShape`










## xdm:locatingType
### Locating type

Mechanism used to determine location.

`xdm:locatingType`
* is optional
* type: `string`
* defined in this schema

### xdm:locatingType Type


`string`



### xdm:locatingType Known Values
| Value | Description |
|-------|-------------|
| `beacon` | Hardware beacon |
| `gps` | Device GPS |
| `ip` | IP to geo lookup |
| `ip+wifi` | IP with wifi lookup |
| `wifi-triangulation` | Wifi triangulation |




## xdm:name
### POI name

The name given to the POI.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:poiID
### POI Identity

The unique identifier of the POI.

`xdm:poiID`
* is optional
* type: `string`
* defined in this schema

### xdm:poiID Type


`string`






## xdm:type
### POI type

The general type of the POI using a typing schema selected by the administrator of the POI definitions.

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`





