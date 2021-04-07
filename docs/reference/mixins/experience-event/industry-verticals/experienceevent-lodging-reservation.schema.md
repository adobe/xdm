
# Lodging Reservation Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-lodging-reservation
```

Collects all details specific to a lodging reservation.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-lodging-reservation.schema.json](mixins/experience-event/industry-verticals/experienceevent-lodging-reservation.schema.json) |

## Lodging Reservation Example
```json
{
  "xdm:lodgingReservation": {
    "xdm:agentID": "A118210921",
    "xdm:averageDailyPrice": {
      "xdm:amount": 197.85,
      "xdm:currencyCode": "USD"
    },
    "xdm:basePrice": "199.99",
    "xdm:bookingID": "81RI2021O510",
    "xdm:checkInDate": "1939-10-27T15:05:15+00:00",
    "xdm:checkOutDate": "1939-10-31T20:05:15+00:00",
    "xdm:couponCode": "20OFF",
    "xdm:discountPercent": 0.2,
    "xdm:freeCancelation": false,
    "xdm:guestID": "GUX818974145",
    "xdm:loyaltyID": "H887J001021",
    "xdm:numberOfRooms": 2,
    "xdm:propertyID": "H1939T10921",
    "xdm:propertyName": "Hollywood Tower Hotel",
    "xdm:refundable": true,
    "xdm:reservationStatus": "confirmed",
    "xdm:roomAccessibilityType": "n/a",
    "xdm:roomCapacity": 6,
    "xdm:roomType": "king",
    "xdm:smoking": false
  }
}
```

# Lodging Reservation Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:reservations](#xdmreservations) | `object` | Optional | Lodging Reservation (this schema) |
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
| `xdm:lodgingReservation`| object | Optional |



#### xdm:lodgingReservation

undefined

`xdm:lodgingReservation`
* is optional
* type: `object`

##### xdm:lodgingReservation Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:agentID": {
      "title": "Agent ID",
      "type": "string",
      "description": "Agent ID associated with the hotel booking."
    },
    "xdm:averageDailyPrice": {
      "title": "Average Daily Price",
      "$ref": "https://ns.adobe.com/xdm/datatypes/currency",
      "description": "Average daily price of the hotel room."
    },
    "xdm:basePrice": {
      "title": "Base Price",
      "type": "string",
      "description": "Base price before any discounts are added. "
    },
    "xdm:bookingID": {
      "title": "Booking ID",
      "type": "string",
      "description": "Booking ID associated with the hotel booking. "
    },
    "xdm:checkInDate": {
      "title": "Check-In Date",
      "type": "string",
      "format": "date-time",
      "description": "The check-in date of the for the room reservation."
    },
    "xdm:checkOutDate": {
      "title": "Check-Out Date",
      "type": "string",
      "format": "date-time",
      "description": "The check-out date of the for the room reservation."
    },
    "xdm:couponCode": {
      "title": "Coupon Code",
      "type": "string",
      "description": "Coupon code associated with the hotel booking."
    },
    "xdm:discountPercent": {
      "title": "Discount Percent",
      "type": "number",
      "description": "Discount percentage associated with the booking."
    },
    "xdm:freeCancelation": {
      "title": "Free Cancelation",
      "type": "boolean",
      "description": "Yes/no if the room has a free cancellation."
    },
    "xdm:guestID": {
      "title": "Guest ID",
      "type": "string",
      "description": "Guest ID associated with the hotel booking."
    },
    "xdm:loyaltyID": {
      "title": "Loyalty ID",
      "type": "string",
      "description": "Includes the loyalty/rewards program ID for the passenger listed in the reservation."
    },
    "xdm:numberOfRooms": {
      "title": "Number of Rooms",
      "type": "integer",
      "description": "Captures the number of rooms associated with the reservation."
    },
    "xdm:propertyID": {
      "title": "Property ID",
      "type": "string",
      "description": "Identifier of the hotel/resort for the reservation."
    },
    "xdm:propertyName": {
      "title": "Property Name",
      "type": "string",
      "description": "Name of the hotel/resort for the reservation."
    },
    "xdm:ratePlan": {
      "title": "Rate Plan",
      "type": "string",
      "description": "The rate deal on which the room was sold."
    },
    "xdm:refundable": {
      "title": "Refundable",
      "type": "boolean",
      "description": "Yes/no if the room is refundable."
    },
    "xdm:reservationStatus": {
      "title": "Reservation Status",
      "type": "string",
      "description": "update"
    },
    "xdm:roomAccessibilityType": {
      "title": "Room Accessibility Type",
      "type": "string",
      "enum": [
        "mobility",
        "hearing",
        "n/a"
      ],
      "description": "Type of accessible room, such as mobility, hearing, or other."
    },
    "xdm:roomCapacity": {
      "title": "Room Capacity",
      "type": "integer",
      "description": "Number of people the hotel room holds."
    },
    "xdm:roomType": {
      "title": "Room Type",
      "type": "string",
      "enum": [
        "queen",
        "king",
        "double",
        "meeting room",
        "other"
      ],
      "description": "Captures the type of room being reserved."
    },
    "xdm:smoking": {
      "title": "Smoking",
      "type": "boolean",
      "description": "Yes/no if the room allows smoking."
    }
  },
  "simpletype": "`object`"
}
```









