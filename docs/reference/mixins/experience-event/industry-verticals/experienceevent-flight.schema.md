
# Flight Check In Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-flight
```

Flight check in details such as passengers, bags, as well as start, save, failure and complete of check in.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-flight.schema.json](mixins/experience-event/industry-verticals/experienceevent-flight.schema.json) |

## Flight Check In Details Example
```json
{
  "xdm:checkIn": {
    "xdm:checkedBags": 2,
    "xdm:checkedPassengers": 3,
    "xdm:checkInMethod": "kiosk",
    "xdm:checkInProcess": {
      "xdm:tool-usage": {
        "xdm:toolUsageCancelled": 1,
        "xdm:toolUsageComplete": 1,
        "xdm:toolUsageFailure": 1,
        "xdm:toolUsageID": "T421",
        "xdm:toolUsageName": "flight check-in process",
        "xdm:toolUsageSaved": 1,
        "xdm:toolUsageStart": 1,
        "xdm:toolUsageStep": 1,
        "xdm:toolUsageStepName": "enter reservation number",
        "xdm:toolUsageSubmitted": 1,
        "xdm:toolUsageType": "generic"
      }
    }
  },
  "xdm:seatMapProcess": {
    "xdm:tool-usage": {
      "xdm:toolUsageCancelled": 1,
      "xdm:toolUsageComplete": 1,
      "xdm:toolUsageFailure": 1,
      "xdm:toolUsageID": "T421",
      "xdm:toolUsageName": "seat map selection",
      "xdm:toolUsageSaved": 1,
      "xdm:toolUsageStart": 1,
      "xdm:toolUsageStep": 1,
      "xdm:toolUsageStepName": "select seat",
      "xdm:toolUsageSubmitted": 1,
      "xdm:toolUsageType": "generic"
    }
  },
  "xdm:statusSearch": {
    "xdm:arrivalLocation": "ORD",
    "xdm:date": "2021-06-18T15:52:25+00:00",
    "xdm:departureLocation": "",
    "xdm:flightNumber": "",
    "xdm:flightStatusSearch": {
      "xdm:internal-site-search": {
        "xdm:campusSearch": "",
        "xdm:numberOfResults": 258,
        "xdm:refinementValue": "nonstop",
        "xdm:refinementType": [
          "Stops=0"
        ],
        "xdm:refinementInstances": 1,
        "xdm:resultsPageNumber": 2,
        "xdm:resultsPerPage": 50,
        "xdm:instances": 1,
        "xdm:locationInPage": "top nav",
        "xdm:nullInstances": 0,
        "xdm:postalCode": "63141",
        "xdm:radiusDistance": 25,
        "xdm:radiusType": "miles",
        "xdm:term": "STL",
        "xdm:autocompleteClicked": true,
        "xdm:searchType": "standard",
        "xdm:sortOrder": "ascending",
        "xdm:sortType": "price: low to high"
      }
    }
  }
}
```

# Flight Check In Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:checkIn](#xdmcheckin) | `object` | Optional | Flight Check In Details (this schema) |
| [xdm:seatMapProcess](#xdmseatmapprocess) | complex | Optional | Flight Check In Details (this schema) |
| [xdm:statusSearch](#xdmstatussearch) | complex | Optional | Flight Check In Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:checkIn


`xdm:checkIn`
* is optional
* type: `object`
* defined in this schema

### xdm:checkIn Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:checkInMethod`| string | Optional |
| `xdm:checkInProcess`|  | Optional |
| `xdm:checkedBags`| integer | Optional |
| `xdm:checkedPassengers`| integer | Optional |



#### xdm:checkInMethod
##### Check In Method

Tracks the method used to check in i.e. counter, online, kiosk, or self-service.

`xdm:checkInMethod`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmcheckin-known-values).

##### xdm:checkInMethod Known Values
| Value | Description |
|-------|-------------|
| `counter` |  |
| `mobile` |  |
| `web` |  |
| `kiosk` |  |






#### xdm:checkInProcess
##### Check In Process

Extension of toolUsage data type.

`xdm:checkInProcess`
* is optional
* type: reference

##### xdm:checkInProcess Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:checkedBags
##### Checked Bags

Tracks the number of bags checked for a flight.

`xdm:checkedBags`
* is optional
* type: `integer`

##### xdm:checkedBags Type


`integer`








#### xdm:checkedPassengers
##### Checked Passengers

Tracks the number of passengers checked in for a flight, if multiple passengers exist for the same reservation number.

`xdm:checkedPassengers`
* is optional
* type: `integer`

##### xdm:checkedPassengers Type


`integer`











## xdm:seatMapProcess


`xdm:seatMapProcess`
* is optional
* type: complex
* defined in this schema

### xdm:seatMapProcess Type

Unknown type ``.

```json
{
  "xdm:seatMapProcess": {
    "title": "Seat Map Process",
    "$ref": "https://ns.adobe.com/xdm/datatypes/tool-usage",
    "description": "Extension of toolUsage data type."
  },
  "simpletype": "complex"
}
```





## xdm:statusSearch


`xdm:statusSearch`
* is optional
* type: complex
* defined in this schema

### xdm:statusSearch Type

Unknown type ``.

```json
{
  "xdm:arrivalLocation": {
    "title": "Arrival Location",
    "type": "string",
    "description": "Tracks the arrival city or airport code."
  },
  "xdm:date": {
    "title": "Travel Date",
    "type": "string",
    "format": "date-time",
    "description": "Tracks the flight departure date."
  },
  "xdm:departureLocation": {
    "title": "Departure Location",
    "type": "string",
    "description": "Tracks the departure city or airport code."
  },
  "xdm:flightNumber": {
    "title": "Flight Number",
    "type": "string",
    "description": "Tracks the flight number."
  },
  "xdm:flightStatusSearch": {
    "title": "Flight Status Search",
    "$ref": "https://ns.adobe.com/xdm/datatypes/internal-site-search",
    "description": "Extension of internalSearch data type."
  },
  "simpletype": "complex"
}
```




