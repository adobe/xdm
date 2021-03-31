
# Flight Check In Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-flight-check-in-details
```

Flight check in details such as passengers, bags, as well as start, save, failure and complete of check in.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-flight-check-in-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-flight-check-in-details.schema.json) |

## Flight Check In Details Example
```json
{}
```

# Flight Check In Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:flightCheckIn](#xdmflightcheckin) | `object` | Optional | Flight Check In Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:flightCheckIn


`xdm:flightCheckIn`
* is optional
* type: `object`
* defined in this schema

### xdm:flightCheckIn Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:boardingGroup`| string | Optional |
| `xdm:checkInMethod`| string | Optional |
| `xdm:checkInProcess`|  | Optional |
| `xdm:checkedBags`| integer | Optional |
| `xdm:checkedPassengers`| integer | Optional |
| `xdm:destinationAirportCode`| string | Optional |
| `xdm:flightNumber`| string | Optional |



#### xdm:boardingGroup
##### Boarding Group

The airline specific indicator of boarding order.

`xdm:boardingGroup`
* is optional
* type: `string`

##### xdm:boardingGroup Type


`string`








#### xdm:checkInMethod
##### Check In Method

Tracks the method used to check in i.e. counter, online, kiosk, or self-service.

`xdm:checkInMethod`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmflightcheckin-known-values).

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








#### xdm:destinationAirportCode
##### Destination Airport Code

Three letter airport code indicating the destination city of the flight.

`xdm:destinationAirportCode`
* is optional
* type: `string`

##### xdm:destinationAirportCode Type


`string`








#### xdm:flightNumber
##### Flight Number

The flight number for the flight being reserved.

`xdm:flightNumber`
* is optional
* type: `string`

##### xdm:flightNumber Type


`string`










