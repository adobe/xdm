
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
      "meta:enum": {
        "chinese": "Chinese",
        "steak": "Steak",
        "sushi": "Sushi",
        "asian": "Asian",
        "vietnamese": "Vietnamese",
        "european": "European",
        "french": "French",
        "italian": "Italian",
        "burgers": "Burgers",
        "japanese": "Japanese",
        "barbecue": "Barbecue",
        "mediterranean": "Mediterranean",
        "indian": "Indian",
        "grill": "Grill",
        "seafood": "Seafood",
        "steakhouse": "Steakhouse",
        "mexican": "Mexican",
        "greek": "Greek",
        "american": "American",
        "thai": "Thai"
      },
      "description": "Type of restaurant cuisine."
    },
    "xdm:restaurantID": {
      "title": "Restaurant ID",
      "type": "string",
      "description": "Identifier for the restaurant/dining location."
    },
    "xdm:deliveryPartners": {
      "title": "Delivery Partners",
      "type": "string",
      "meta:enum": {
        "grubhub": "GrubHub",
        "ubereats": "UberEats",
        "doordash": "DoorDash",
        "other": "Other"
      },
      "description": "Delivery partners available from the restaurant."
    },
    "xdm:diningOptions": {
      "title": "Dining Options",
      "type": "string",
      "meta:enum": {
        "outdoorSeating": "Outdoor Seating",
        "delivery": "Delivery",
        "curbside": "Curbside",
        "takeout": "Takeout"
      },
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
      "meta:enum": {
        "$": "$",
        "$$": "$$",
        "$$$": "$$$",
        "$$$$": "$$$$"
      },
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
      "meta:enum": {
        "cancelled": "Cancelled",
        "confirmed": "Confirmed",
        "hold": "Hold",
        "pending": "Pending"
      },
      "description": "The status of the dining reservation."
    },
    "xdm:cancellation": {
      "title": "Cancellation",
      "type": "integer",
      "description": "Tracked when a reservation has been cancelled."
    },
    "xdm:confirmationNumber": {
      "title": "Confirmation Number",
      "type": "string",
      "description": "Tracks the reservation confirmation number/identifier."
    },
    "xdm:created": {
      "title": "Created",
      "type": "integer",
      "description": "Tracked when a reservation has been created."
    },
    "xdm:currencyCode": {
      "title": "Currency Code",
      "type": "string",
      "description": "Currency code used to make the purchase. ISO 4217 currency code.",
      "pattern": "^[A-Z]{3}$"
    },
    "xdm:ID": {
      "title": "ID",
      "type": "string",
      "description": "Tracks the reservation number/identifier."
    },
    "xdm:length": {
      "title": "Length",
      "type": "integer",
      "description": "Tracks the total number of days for a reservation."
    },
    "xdm:modification": {
      "title": "Modification",
      "type": "integer",
      "description": "Captured when a reservation has been modified."
    },
    "xdm:modificationDate": {
      "title": "Modification Date",
      "type": "string",
      "format": "date-time",
      "description": "Tracks when a reservation has been modified."
    },
    "xdm:numberOfAdults": {
      "title": "Number of Adults",
      "type": "integer",
      "description": "Captures the number of adults associated with the reservation."
    },
    "xdm:numberOfChildren": {
      "title": "Number of Children",
      "type": "integer",
      "description": "Captures the number of children associated with the reservation."
    },
    "xdm:purpose": {
      "title": "Purpose",
      "type": "string",
      "meta:enum": {
        "business": "Business",
        "personal": "Personal"
      },
      "description": "Tracks the purpose of the reservation, typically either business or personal."
    },
    "xdm:type": {
      "title": "Type",
      "type": "string",
      "description": "Records the type of reservation being placed."
    }
  },
  "simpletype": "`object`"
}
```









