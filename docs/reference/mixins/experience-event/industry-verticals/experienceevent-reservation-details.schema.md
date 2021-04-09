
# Reservation Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-reservation-details
```

Reservation details such as length, modification, refundable status, and number of rooms.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-reservation-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-reservation-details.schema.json) |
## Schema Hierarchy

* Reservation Details `https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-reservation-details`
  * [Flight Reservation](experienceevent-flight-reservation.schema.md) `https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-flight-reservation`
  * [Lodging Reservation](experienceevent-lodging-reservation.schema.md) `https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-lodging-reservation`
  * [Vehicle Reservation](experienceevent-vehicle-reservation.schema.md) `https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-vehicle-reservation`
  * [Dining Reservation](experienceevent-dining-reservation.schema.md) `https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-dining-reservation`


## Reservation Details Example
```json
{
  "xdm:reservations": {
    "xdm:ancillaryRevenue": {
      "xdm:amount": 27.85,
      "xdm:currencyCode": "USD"
    },
    "xdm:cancellation": 0,
    "xdm:created": 1,
    "xdm:currencyCode": "USD",
    "xdm:endDate": "2021-06-18T15:52:25+00:00",
    "xdm:ID": "8101991J1211X",
    "xdm:itemComparison": {
      "xdm:comparisons": {
        "xdm:comparisonAddition": 1,
        "xdm:comparisonCount": 3,
        "xdm:comparisonImpressions": 4,
        "xdm:comparisonItems": [
          "TF0021",
          "WCAT102340P11BN",
          "DEL45CCP"
        ],
        "xdm:comparisonRemoval": 1,
        "xdm:comparisonType": "product",
        "xdm:comparisonView": 1
      }
    },
    "xdm:length": 8,
    "xdm:modification": 0,
    "xdm:nonRefundableAmount": {
      "xdm:amount": 378.58,
      "xdm:currencyCode": "USD"
    },
    "xdm:numberOfAdults": 2,
    "xdm:numberOfChildren": 3,
    "xdm:purpose": "personal",
    "xdm:startDate": "2021-06-10T15:52:25+00:00",
    "xdm:transaction": {
      "xdm:transaction": {
        "xdm:transactionAmount": 67.85,
        "xdm:transactionDate": "2021-01-07",
        "xdm:transactionID": "T10291832",
        "xdm:transactionType": "transfer"
      }
    },
    "xdm:triptype": "roundtrip"
  }
}
```

# Reservation Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:reservations](#xdmreservations) | `object` | Optional | [Dining Reservation](experienceevent-dining-reservation.schema.md#xdmreservations) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:reservations


`xdm:reservations`
* is optional
* type: `object`
* defined in [Dining Reservation](experienceevent-dining-reservation.schema.md#xdmreservations)

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









