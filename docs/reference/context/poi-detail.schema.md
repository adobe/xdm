
# Point of interest details Schema

```
https://ns.adobe.com/xdm/context/poi-detail
```

A point or place of interest (POI) Details. Used to capture the technical and metadata information for a POI.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/poi-detail.schema.json](context/poi-detail.schema.json) |
## Schema Hierarchy

* Point of interest details `https://ns.adobe.com/xdm/context/poi-detail`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Beacon](beacon-interaction-details.schema.md) `https://ns.adobe.com/xdm/context/beacon-interaction-details`
  * [Geo interaction details](geo-interaction-details.schema.md) `https://ns.adobe.com/xdm/context/geo-interaction-details`


## Point of interest details Examples

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


# Point of interest details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:POIID](#xdmpoiid) | `string` | Optional | Point of interest details (this schema) |
| [xdm:beaconInteractionDetails](#xdmbeaconinteractiondetails) | Beacon | Optional | Point of interest details (this schema) |
| [xdm:category](#xdmcategory) | `string` | Optional | Point of interest details (this schema) |
| [xdm:distanceToPOICenter](#xdmdistancetopoicenter) | `number` | Optional | Point of interest details (this schema) |
| [xdm:geoInteractionDetails](#xdmgeointeractiondetails) | Geo interaction details | Optional | Point of interest details (this schema) |
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
* type: Beacon
* defined in this schema

### xdm:beaconInteractionDetails Type


* [Beacon](beacon-interaction-details.schema.md) – `https://ns.adobe.com/xdm/context/beacon-interaction-details`





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
* type: Geo interaction details
* defined in this schema

### xdm:geoInteractionDetails Type


* [Geo interaction details](geo-interaction-details.schema.md) – `https://ns.adobe.com/xdm/context/geo-interaction-details`





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





