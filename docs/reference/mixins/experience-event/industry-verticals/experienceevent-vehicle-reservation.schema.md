
# Vehicle Reservation Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-vehicle-reservation
```

Collects all details specific to a vehicle reservation.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-vehicle-reservation.schema.json](mixins/experience-event/industry-verticals/experienceevent-vehicle-reservation.schema.json) |

## Vehicle Reservation Example
```json
{
  "xdm:vehicleReservation": {
    "xdm:couponCode": "10OFF",
    "xdm:vehicleDifferentDropoffLocation": false,
    "xdm:discountPercent": 0.1,
    "xdm:dropOffDateTime": "2021-06-18T15:52:25+00:00",
    "xdm:vehicleDropOffLocation": "Sydney International Airport",
    "xdm:vehicleDropOffLocationCode": "SYD",
    "xdm:freeCancelation": true,
    "xdm:guestID": "R101921H166",
    "xdm:loyaltyID": "X112JX123R594",
    "xdm:payLaterEligible": true,
    "xdm:pickUpDateTime": "2021-06-25T15:52:25+00:00",
    "xdm:vehiclePickUpLocation": "Phoenix Sky Harbor International Airport",
    "xdm:vehiclePickUpLocationCode": "PHX",
    "xdm:prePaid": false,
    "xdm:productID": "2021FRDMST",
    "xdm:refundable": true,
    "xdm:rentersAge": 33,
    "xdm:vehicleClass": "premium"
  }
}
```

# Vehicle Reservation Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:reservations](#xdmreservations) | `object` | Optional | Vehicle Reservation (this schema) |
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
| `xdm:vehicleReservation`| object | Optional |



#### xdm:vehicleReservation

Captures all details specific to an individual vehicle reservation

`xdm:vehicleReservation`
* is optional
* type: `object`

##### xdm:vehicleReservation Type

Unknown type `object`.

```json
{
  "type": "object",
  "description": "Captures all details specific to an individual vehicle reservation",
  "properties": {
    "xdm:agentID": {
      "title": "Agent ID",
      "type": "string",
      "description": "Agent or broker responsible for booking the reservation, if applicable."
    },
    "xdm:itemComparison": {
      "title": "Item Comparison",
      "$ref": "https://ns.adobe.com/xdm/datatypes/comparisons",
      "description": "Used to track vehicle comparisons on a site or an app."
    },
    "xdm:couponCode": {
      "title": "Coupon Code",
      "type": "string",
      "description": "Coupon code associated with the vehicle booking."
    },
    "xdm:vehicleDifferentDropoffLocation": {
      "title": "Different Drop-off Location",
      "type": "boolean",
      "description": "Indicates if a vehicle reservation has a different drop-off location than the pick-up location."
    },
    "xdm:discountPercent": {
      "title": "Discount Percent",
      "type": "number",
      "description": "Discount percentage associated with the booking."
    },
    "xdm:dropOffDateTime": {
      "title": "Drop-off Date & Time",
      "type": "string",
      "format": "date-time",
      "description": "The drop-off date & time of the for the vehicle reservation."
    },
    "xdm:vehicleDropOffLocation": {
      "title": "Drop-off Location",
      "type": "string",
      "description": "Drop-off location of the vehicle."
    },
    "xdm:vehicleDropOffLocationCode": {
      "title": "Drop-off Location Code",
      "type": "string",
      "description": "The airport location code for the vehicle drop off.",
      "pattern": "^[A-Z]{3}$"
    },
    "xdm:freeCancelation": {
      "title": "Free Cancelation",
      "type": "boolean",
      "description": "Yes/no if the car booking has a free cancellation."
    },
    "xdm:guestID": {
      "title": "Guest ID",
      "type": "string",
      "description": "Guest ID associated with the vehicle booking."
    },
    "xdm:loyaltyID": {
      "title": "Loyalty ID",
      "type": "string",
      "description": "Includes the loyalty/rewards program ID for the passenger listed in the reservation."
    },
    "xdm:payLaterEligible": {
      "title": "Pay Later Eligible",
      "type": "boolean",
      "description": "Yes/no if the booking is eligible to be paid later."
    },
    "xdm:pickUpDateTime": {
      "title": "Pick-up Date & Time",
      "type": "string",
      "format": "date-time",
      "description": "The pick-up date & time of the for the vehicle reservation."
    },
    "xdm:vehiclePickUpLocation": {
      "title": "Pick-up Location",
      "type": "string",
      "description": "Pick-up location of the vehicle."
    },
    "xdm:vehiclePickUpLocationCode": {
      "title": "Pick-up Location Code",
      "type": "string",
      "description": "The airport location code for the vehicle pick up.",
      "pattern": "^[A-Z]{3}$"
    },
    "xdm:prePaid": {
      "title": "Pre Paid",
      "type": "boolean",
      "description": "Yes/no if the booking is pre-paid"
    },
    "xdm:productID": {
      "title": "Product ID",
      "type": "string",
      "description": "The product ID associated with the booking."
    },
    "xdm:refundable": {
      "title": "Refundable",
      "type": "boolean",
      "description": "Yes/no if the car booking is refundable."
    },
    "xdm:rentersAge": {
      "title": "Renter's Age",
      "type": "integer",
      "description": "Age of the renter on the vehicle reservation."
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
    "xdm:status": {
      "title": "Status",
      "type": "string",
      "enum": [
        "cancelled",
        "confirmed",
        "hold",
        "pending"
      ],
      "description": "The status of the vehicle reservation."
    },
    "xdm:vehicleClass": {
      "title": "Vehicle Class",
      "type": "string",
      "enum": [
        "economy",
        "compact",
        "midsize",
        "fullsize",
        "standard",
        "suv",
        "premium",
        "minivan"
      ],
      "description": "The class/category of vehicle being reserved."
    }
  },
  "simpletype": "`object`"
}
```









