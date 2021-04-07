
# Flight Reservation Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-flight-reservation
```

Collects all details specific to a flight reservation.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-flight-reservation.schema.json](mixins/experience-event/industry-verticals/experienceevent-flight-reservation.schema.json) |

## Flight Reservation Example
```json
{
  "xdm:flightReservation": {
    "xdm:arrivalLocation": "SYD",
    "xdm:departureLocation": "LAX",
    "xdm:fareClass": "business class",
    "xdm:flightDate": "2004-09-22T15:52:25+00:00",
    "xdm:flightNumber": "815",
    "xdm:loyaltyID": "H1102199221",
    "xdm:passenger": {
      "xdm:name": {
        "xdm:firstName": "Jane",
        "xdm:middleName": "F",
        "xdm:lastName": "Doe",
        "xdm:fullName": "Jane F. Doe"
      },
      "xdm:birthDate": "1996-01-19",
      "xdm:gender": "female"
    }
  },
  "xdm:reservationID": "RM8I9FG7HR",
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
  "xdm:securityScreening": "PreCheck"
}
```

# Flight Reservation Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:reservations](#xdmreservations) | `object` | Optional | Flight Reservation (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:reservations


`xdm:reservations`
* is optional
* type: `object`
* defined in this schema

### xdm:reservations Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:flightReservation`| object | Optional |



#### xdm:flightReservation

Captures all details specific to an individual flight reservation

`xdm:flightReservation`
* is optional
* type: `object`

##### xdm:flightReservation Type

Unknown type `object`.

```json
{
  "type": "object",
  "description": "Captures all details specific to an individual flight reservation",
  "properties": {
    "xdm:agentID": {
      "title": "Agent ID",
      "type": "string",
      "description": "Agent or broker responsible for booking the reservation, if applicable."
    },
    "xdm:arrivalAirportCode": {
      "title": "Arrival Airport Code",
      "type": "string",
      "description": "Tracks the arrival city airport code.",
      "pattern": "^[A-Z]{3}$"
    },
    "xdm:itemComparison": {
      "title": "Item Comparison",
      "$ref": "https://ns.adobe.com/xdm/datatypes/comparisons",
      "description": "Used to track flight comparisons on a site or an app."
    },
    "xdm:departureAirportCode": {
      "title": "Departure Airport Code",
      "type": "string",
      "description": "Tracks the departure city airport code.",
      "pattern": "^[A-Z]{3}$"
    },
    "xdm:fareClass": {
      "title": "Fare Class",
      "type": "string",
      "enum": [
        "first class",
        "business class",
        "premium economy",
        "economy"
      ],
      "description": "The fare class of the flight being reserved."
    },
    "xdm:departureDate": {
      "title": "Departure Date",
      "type": "string",
      "format": "date-time",
      "description": "The departure date of the flight being reserved."
    },
    "xdm:arrivalDate": {
      "title": "Arrival Date",
      "type": "string",
      "format": "date-time",
      "description": "The arrival date of the flight being reserved."
    },
    "xdm:flightNumber": {
      "title": "Flight Number",
      "type": "string",
      "description": "Tracks the flight number."
    },
    "xdm:loyaltyID": {
      "title": "Loyalty ID",
      "type": "string",
      "description": "Includes the loyalty/rewards program ID for the passenger listed in the reservation."
    },
    "xdm:passenger": {
      "title": "Passenger",
      "$ref": "https://ns.adobe.com/xdm/context/person",
      "description": "Passenger info associated with the reservation."
    },
    "xdm:reservationID": {
      "title": "Reservation ID",
      "type": "string",
      "description": ""
    },
    "xdm:salesChannel": {
      "title": "Sales Channel",
      "type": "string",
      "enum": [
        "Web",
        "Mobile",
        "Mobile App",
        "Call Center",
        "Agent",
        "Third-Party"
      ],
      "description": "Sales channel from which the reservation was booked."
    },
    "xdm:securityScreening": {
      "title": "Security Screening",
      "type": "string",
      "enum": [
        "Standard",
        "PreCheck"
      ],
      "description": "Type of security screening the passenger is subject to."
    },
    "xdm:status": {
      "title": "Status",
      "type": "string",
      "enum": [
        "cancelled",
        "confirmed",
        "hold",
        "pending"
      ],
      "description": "The status of the flight reservation."
    }
  },
  "simpletype": "`object`"
}
```









