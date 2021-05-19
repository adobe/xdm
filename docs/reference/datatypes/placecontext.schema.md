
# Place context Schema

```
https://ns.adobe.com/xdm/context/placecontext
```

The transient circumstances related to the place or physical location of the observation. 
Examples include location specific information such as weather, local time, traffic, day of the week, workday vs. holiday, working hours.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/placecontext.schema.json](datatypes/placecontext.schema.json) |
## Schema Hierarchy

* Place context `https://ns.adobe.com/xdm/context/placecontext`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Geo](demographic/geo.schema.md) `https://ns.adobe.com/xdm/common/geo`


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
| [xdm:POIinteraction](#xdmpoiinteraction) | `object` | Optional | Place context (this schema) |
| [xdm:activePOIs](#xdmactivepois) | Point of interest details | Optional | Place context (this schema) |
| [xdm:geo](#xdmgeo) | Geo | Optional | Place context (this schema) |
| [xdm:ianaTimezone](#xdmianatimezone) | `string` | Optional | Place context (this schema) |
| [xdm:localTime](#xdmlocaltime) | `string` | Optional | Place context (this schema) |
| [xdm:localTimezoneOffset](#xdmlocaltimezoneoffset) | `integer` | Optional | Place context (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:POIinteraction
### POI interaction

The point of interest (POI) interaction details.

`xdm:POIinteraction`
* is optional
* type: `object`
* defined in this schema

### xdm:POIinteraction Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:POIDetail`|  | Optional |
| `xdm:poiDetail`|  | Optional |
| `xdm:poiEntries`|  | Optional |
| `xdm:poiExits`|  | Optional |



#### xdm:POIDetail
##### POI detail

Detail of the POI that cause the event.

`xdm:POIDetail`
* is optional
* type: reference

##### xdm:POIDetail Type


* []() – `https://ns.adobe.com/xdm/context/poi-detail`







#### xdm:poiDetail
##### POI detail

Detail of the POI that cause the event.

`xdm:poiDetail`
* is optional
* type: reference

##### xdm:poiDetail Type


* []() – `https://ns.adobe.com/xdm/context/poi-detail`







#### xdm:poiEntries

The number of times a person has entered the point of interest (POI).

`xdm:poiEntries`
* is optional
* type: reference

##### xdm:poiEntries Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:poiExits

The number of times a person has exited the point of interest (POI).

`xdm:poiExits`
* is optional
* type: reference

##### xdm:poiExits Type


* []() – `https://ns.adobe.com/xdm/data/measure`










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


* [Geo](demographic/geo.schema.md) – `https://ns.adobe.com/xdm/common/geo`





## xdm:ianaTimezone
### Iana Timezone

Timezone of the device represented as a standard timezone string. https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.

`xdm:ianaTimezone`
* is optional
* type: `string`
* defined in this schema

### xdm:ianaTimezone Type


`string`






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





