
# Dining Reservation Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-dining-reservation
```

Collects all details specific to a dining reservation.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-dining-reservation.schema.json](mixins/experience-event/industry-verticals/experienceevent-dining-reservation.schema.json) |

## Dining Reservation Example
```json
{
  "xdm:diningReservation": {
    "xdm:cuisine": "Sushi",
    "xdm:deliveryPartners": "GrubHub",
    "xdm:diningOptions": "Delivery",
    "xdm:groupReservation": false,
    "xdm:loyaltyID": "D11988721",
    "xdm:partySize": 5,
    "xdm:priceCategory": "$$$",
    "xdm:reservationTime": "2021-06-18T18:00:00+00:00",
    "xdm:specialOccasion": true
  }
}
```

# Dining Reservation Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:reservations](#xdmreservations) | `object` | Optional | Dining Reservation (this schema) |
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
| `xdm:diningReservation`| object | Optional |



#### xdm:diningReservation

undefined

`xdm:diningReservation`
* is optional
* type: `object`

##### xdm:diningReservation Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:cuisine": {
      "title": "Cuisine",
      "type": "string",
      "enum": [
        "Chinese",
        "Steak",
        "Sushi",
        "Asian",
        "Vietnamese",
        "European",
        "French",
        "Italian",
        "Burgers",
        "Japanese",
        "Barbecue",
        "Mediterranean",
        "Indian",
        "Grill",
        "Seafood",
        "Steakhouse",
        "Mexican",
        "Greek",
        "American",
        "Thai"
      ],
      "description": "Type of restaurant cuisine."
    },
    "xdm:deliveryPartners": {
      "title": "Delivery Partners",
      "type": "string",
      "enum": [
        "GrubHub",
        "UberEats",
        "DoorDash",
        "Other"
      ],
      "description": "Delivery partners available from the restaurant."
    },
    "xdm:location": {
      "title": "Dining Location",
      "$ref": "https://ns.adobe.com/xdm/context/place",
      "description": "Physical location for the restaurant."
    },
    "xdm:diningOptions": {
      "title": "Dining Options",
      "type": "string",
      "enum": [
        "Outdoor Dining",
        "Delivery",
        "Curbside",
        "Takeout"
      ],
      "description": "Delivery and dining options available from the restaurant."
    },
    "xdm:groupReservation": {
      "title": "Group Reservation",
      "type": "boolean",
      "description": "Indicates if the reservation is being made for a group."
    },
    "xdm:loyaltyID": {
      "title": "Loyalty ID",
      "type": "string",
      "description": "Includes the loyalty/rewards program ID for the party listed in the reservation."
    },
    "xdm:partySize": {
      "title": "Party Size",
      "type": "integer",
      "description": "Number of individuals in the dining party."
    },
    "xdm:priceCategory": {
      "title": "Price Category",
      "type": "string",
      "enum": [
        "$",
        "$$",
        "$$$",
        "$$$$"
      ],
      "description": "Price category for the reservation being made."
    },
    "xdm:reservationTime": {
      "title": "Reservation Time",
      "type": "string",
      "format": "date-time",
      "description": "The time for which the dining reservation is booked."
    },
    "xdm:specialOccasion": {
      "title": "Special Occasion",
      "type": "boolean",
      "description": "Indicates if the reservation is being made for a special occasion."
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
      "description": "The status of the dining reservation."
    }
  },
  "simpletype": "`object`"
}
```









