
# Point of interest interaction Schema

```
https://ns.adobe.com/xdm/context/poi-interaction
```

A point or place of interest (POI) interaction used to capture triggered engagement activities when users enter, leave, or come within range of a POI.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/poi-interaction.schema.json](context/poi-interaction.schema.json) |
## Schema Hierarchy

* Point of interest interaction `https://ns.adobe.com/xdm/context/poi-interaction`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Point of interest details](poi-detail.schema.md) `https://ns.adobe.com/xdm/context/poi-detail`
  * [Measure](../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Point of interest interaction Example
```json
{
  "xdm:poiExits": {
    "xdm:value": 1
  },
  "xdm:poiDetail": {
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
}
```

# Point of interest interaction Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:POIDetail](#xdmpoidetail) | Point of interest details | Optional | Point of interest interaction (this schema) |
| [xdm:poiDetail](#xdmpoidetail-1) | Point of interest details | Optional | Point of interest interaction (this schema) |
| [xdm:poiEntries](#xdmpoientries) | Measure | Optional | Point of interest interaction (this schema) |
| [xdm:poiExits](#xdmpoiexits) | Measure | Optional | Point of interest interaction (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:POIDetail
### POI detail

Detail of the POI that cause the event.

`xdm:POIDetail`
* is optional
* type: Point of interest details
* defined in this schema

### xdm:POIDetail Type


* [Point of interest details](poi-detail.schema.md) – `https://ns.adobe.com/xdm/context/poi-detail`





## xdm:poiDetail
### POI detail

Detail of the POI that cause the event.

`xdm:poiDetail`
* is optional
* type: Point of interest details
* defined in this schema

### xdm:poiDetail Type


* [Point of interest details](poi-detail.schema.md) – `https://ns.adobe.com/xdm/context/poi-detail`





## xdm:poiEntries

The number of times a person has entered the point of interest (POI).

`xdm:poiEntries`
* is optional
* type: Measure
* defined in this schema

### xdm:poiEntries Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:poiExits

The number of times a person has exited the point of interest (POI).

`xdm:poiExits`
* is optional
* type: Measure
* defined in this schema

### xdm:poiExits Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




