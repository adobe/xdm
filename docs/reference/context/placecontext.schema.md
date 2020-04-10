
# Place context Schema

```
https://ns.adobe.com/xdm/context/placecontext
```

The transient circumstances related to the place or physical location of the observation. 
Examples include location specific information such as weather, local time, traffic, day of the week, workday vs. holiday, working hours.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/placecontext.schema.json](context/placecontext.schema.json) |
## Schema Hierarchy

* Place context `https://ns.adobe.com/xdm/context/placecontext`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Geo](../common/geo.schema.md) `https://ns.adobe.com/xdm/common/geo`
  * [Point of interest interaction](poi-interaction.schema.md) `https://ns.adobe.com/xdm/context/poi-interaction`


## Place context Example
```json
{
  "xdm:localTime": "2001-07-04T12:08:56+01:00",
  "xdm:localTimezoneOffset": -360,
  "xdm:geo": {
    "@id": "https://data.adobe.io/entities/geo/tokyo",
    "xdm:countryCode": "JP",
    "xdm:stateProvince": "JP-13",
    "xdm:city": "Tōkyō",
    "xdm:postalCode": "141-0032",
    "schema:latitude": 35.6185,
    "schema:longitude": 139.73237
  },
  "xdm:POIinteraction": {
    "https://ns.adobe.com/xdm/data/metrics/placecontext/poi-exits": {
      "xdm:value": 1
    },
    "xdm:POIID": "d8a5c08c-1e79-4051-8a8b-675fb235e03d",
    "xdm:name": "Acme Hotel Tokyo Lobby",
    "xdm:category": "Resorts",
    "xdm:type": "Hotel",
    "xdm:beacon": {
      "xdm:proximityUUID": "c6c03ed9-ea23-481c-ab15-833e88cfb22f",
      "xdm:beaconMajor": 300,
      "xdm:beaconMinor": 34
    }
  },
  "xdm:activePOIs": [
    {
      "xdm:POIID": "c7f4bf28-c8d9-4b89-a81f-2a8ef9367390",
      "xdm:name": "Acme Hotel Tokyo",
      "xdm:category": "Resorts",
      "xdm:type": "Hotel",
      "xdm:beacon": {
        "xdm:proximityUUID": "dd0094a0-52bb-4d3a-ab15-fcccb9b9b48e",
        "xdm:beaconMajor": 100,
        "xdm:beaconMinor": 23
      }
    },
    {
      "xdm:POIID": "d8a5c08c-1e79-4051-8a8b-675fb235e03d",
      "xdm:name": "Acme Hotel Tokyo Lobby",
      "xdm:category": "Resorts",
      "xdm:type": "Hotel",
      "xdm:beacon": {
        "xdm:proximityUUID": "c6c03ed9-ea23-481c-ab15-833e88cfb22f",
        "xdm:beaconMajor": 300,
        "xdm:beaconMinor": 34
      }
    }
  ]
}
```

# Place context Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:POIinteraction](#xdmpoiinteraction) | Point of interest interaction | Optional | Place context (this schema) |
| [xdm:activePOIs](#xdmactivepois) | Point of interest details | Optional | Place context (this schema) |
| [xdm:geo](#xdmgeo) | Geo | Optional | Place context (this schema) |
| [xdm:localTime](#xdmlocaltime) | `string` | Optional | Place context (this schema) |
| [xdm:localTimezoneOffset](#xdmlocaltimezoneoffset) | `integer` | Optional | Place context (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:POIinteraction
### POI interaction

The point of interest (POI) interaction details.

`xdm:POIinteraction`
* is optional
* type: Point of interest interaction
* defined in this schema

### xdm:POIinteraction Type


* [Point of interest interaction](poi-interaction.schema.md) – `https://ns.adobe.com/xdm/context/poi-interaction`





## xdm:activePOIs
### POI detail

Details of the points of interest (POIs) that cause the event.

`xdm:activePOIs`
* is optional
* type: Point of interest details

* defined in this schema

### xdm:activePOIs Type


Array type: Point of interest details

All items must be of the type:
* [Point of interest details](poi-detail.schema.md) – `https://ns.adobe.com/xdm/context/poi-detail`








## xdm:geo
### Geo

The geographic location where the experience was delivered.

`xdm:geo`
* is optional
* type: Geo
* defined in this schema

### xdm:geo Type


* [Geo](../common/geo.schema.md) – `https://ns.adobe.com/xdm/common/geo`





## xdm:localTime
### Local time

The local time using RFC3339 with a stated time zone offset such as "2001-07-04T12:08:56-07:00". An example formatting pattern is "yyyy-MM-dd'T'HH:mm:ssXXX".

`xdm:localTime`
* is optional
* type: `string`
* defined in this schema

### xdm:localTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:localTimezoneOffset
### Local time zone offset

The current, local time zone offset in minutes from UTC for the localTime in this object.  This will include the current DST offset if applicable.

`xdm:localTimezoneOffset`
* is optional
* type: `integer`
* defined in this schema

### xdm:localTimezoneOffset Type


`integer`





