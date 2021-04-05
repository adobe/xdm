
# Flight Check In Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-flight
```

Flight check in details such as passengers, bags, as well as start, save, failure and complete of check in.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-flight.schema.json](mixins/experience-event/industry-verticals/experienceevent-flight.schema.json) |
## Schema Hierarchy

* Flight Check In Details `https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-flight`
  * [Tool Usage](../../../datatypes/industry-verticals/tool-usage.schema.md) `https://ns.adobe.com/xdm/datatypes/tool-usage`


## Flight Check In Details Example
```json
{
  "xdm:checkIn": {
    "xdm:checkedBags": 2,
    "xdm:checkedPassengers": 3,
    "xdm:checkInMethod": "kiosk"
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
| [xdm:seatMapProcess](#xdmseatmapprocess) | Tool Usage | Optional | Flight Check In Details (this schema) |
| [xdm:statusSearch](#xdmstatussearch) | `object` | Optional | Flight Check In Details (this schema) |
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
### Seat Map Process

Extension of toolUsage data type.

`xdm:seatMapProcess`
* is optional
* type: Tool Usage
* defined in this schema

### xdm:seatMapProcess Type


* [Tool Usage](../../../datatypes/industry-verticals/tool-usage.schema.md) – `https://ns.adobe.com/xdm/datatypes/tool-usage`





## xdm:statusSearch


`xdm:statusSearch`
* is optional
* type: `object`
* defined in this schema

### xdm:statusSearch Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:arrivalLocation`| string | Optional |
| `xdm:date`| string | Optional |
| `xdm:departureLocation`| string | Optional |
| `xdm:flightNumber`| string | Optional |
| `xdm:flightStatusSearch`|  | Optional |



#### xdm:arrivalLocation
##### Arrival Location

Tracks the arrival city or airport code.

`xdm:arrivalLocation`
* is optional
* type: `string`

##### xdm:arrivalLocation Type


`string`








#### xdm:date
##### Travel Date

Tracks the flight departure date.

`xdm:date`
* is optional
* type: `string`

##### xdm:date Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:departureLocation
##### Departure Location

Tracks the departure city or airport code.

`xdm:departureLocation`
* is optional
* type: `string`

##### xdm:departureLocation Type


`string`








#### xdm:flightNumber
##### Flight Number

Tracks the flight number.

`xdm:flightNumber`
* is optional
* type: `string`

##### xdm:flightNumber Type


`string`








#### xdm:flightStatusSearch
##### Flight Status Search

Extension of internalSearch data type.

`xdm:flightStatusSearch`
* is optional
* type: reference

##### xdm:flightStatusSearch Type


* []() – `https://ns.adobe.com/xdm/datatypes/internal-site-search`









