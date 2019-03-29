
# Point of Interest Details Schema

```
https://ns.adobe.com/xdm/context/poi-detail
```

A Point or Place of Interest(POI) Details. Used to capture the techncial and metadata information for a POI.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/poi-detail.schema.json](context/poi-detail.schema.json) |
## Schema Hierarchy

* Point of Interest Details `https://ns.adobe.com/xdm/context/poi-detail`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Beacon](beacon-interaction-details.schema.md) `https://ns.adobe.com/xdm/context/beacon-interaction-details`
  * [Geo Interaction Details](geo-interaction-details.schema.md) `https://ns.adobe.com/xdm/context/geo-interaction-details`


## Point of Interest Details Examples

```json
{
  "xdm:POIID": "c7f4bf28-c8d9-4b89-a81f-2a8ef9367390",
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
  "xdm:POIID": "c7f4bf28-c8d9-4b89-a81f-2a8ef9367390",
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


# Point of Interest Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:POIID](#xdmpoiid) | `string` | Optional | Point of Interest Details (this schema) |
| [xdm:beaconInteractionDetails](#xdmbeaconinteractiondetails) | Beacon | Optional | Point of Interest Details (this schema) |
| [xdm:category](#xdmcategory) | `string` | Optional | Point of Interest Details (this schema) |
| [xdm:distanceToPOICenter](#xdmdistancetopoicenter) | `number` | Optional | Point of Interest Details (this schema) |
| [xdm:geoInteractionDetails](#xdmgeointeractiondetails) | Geo Interaction Details | Optional | Point of Interest Details (this schema) |
| [xdm:locatingType](#xdmlocatingtype) | `string` | Optional | Point of Interest Details (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Point of Interest Details (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Point of Interest Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:POIID
### POI Identity

The unique identifier of the POI.

`xdm:POIID`
* is optional
* type: `string`
* defined in this schema

### xdm:POIID Type


`string`






## xdm:beaconInteractionDetails
### Beacon Interaction Details

Beacon details active for the POI interaction.

`xdm:beaconInteractionDetails`
* is optional
* type: Beacon
* defined in this schema

### xdm:beaconInteractionDetails Type


* [Beacon](beacon-interaction-details.schema.md) – `https://ns.adobe.com/xdm/context/beacon-interaction-details`





## xdm:category
### POI Category

General category assigned for organizing the POIs by the administrator of POI definitions.

`xdm:category`
* is optional
* type: `string`
* defined in this schema

### xdm:category Type


`string`






## xdm:distanceToPOICenter
### Distance to POI Center

Estimated distance from the POI Center in meters.

`xdm:distanceToPOICenter`
* is optional
* type: `number`
* defined in this schema

### xdm:distanceToPOICenter Type


`number`






## xdm:geoInteractionDetails
### Geo Interaction Details

Geo details active for the POI interaction.

`xdm:geoInteractionDetails`
* is optional
* type: Geo Interaction Details
* defined in this schema

### xdm:geoInteractionDetails Type


* [Geo Interaction Details](geo-interaction-details.schema.md) – `https://ns.adobe.com/xdm/context/geo-interaction-details`





## xdm:locatingType
### Locating Type

Mechanism used to ascertain location.

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
| `ip+wifi` | IP with Wifi lookup |
| `wifi-triangulation` | Wifi triangulation |




## xdm:name
### POI Name

The name given to the POI.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:type
### POI Type

The general type of the POI using a typing schema selected by the administrator of the POI definitions.

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`





