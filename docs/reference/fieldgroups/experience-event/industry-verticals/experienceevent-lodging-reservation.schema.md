
# Lodging Reservation Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-lodging-reservation
```

Collects all details specific to a lodging reservation.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-lodging-reservation.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-lodging-reservation.schema.json) |
## Schema Hierarchy

* Lodging Reservation `https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-lodging-reservation`
  * [Reservation Details](experienceevent-reservation-details.schema.md) `https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-reservation-details`


## Lodging Reservation Example
```json
{
  "xdm:reservations": {
    "xdm:lodgingReservations": [
      {
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
        "xdm:smoking": false,
        "xdm:lodgingCheckout": {
          "xdm:receiptURL": "https://adobe.com",
          "xdm:dailyCharges": [
            {
              "xdm:chargeDescription": "Room charge",
              "xdm:chargeReferenceCode": "XYZ",
              "xdm:chargeDate": "2020-01-01",
              "xdm:dailyCharge": {
                "xdm:amount": 1203.01,
                "xdm:currencyCode": "USD",
                "xdm:conversionDate": "2018-01-12T15:52:25+00:00"
              }
            },
            {
              "xdm:chargeDescription": "State Tax",
              "xdm:chargeReferenceCode": "ST-TAX",
              "xdm:chargeDate": "2020-01-01",
              "xdm:dailyCharge": {
                "xdm:amount": 12.01,
                "xdm:currencyCode": "USD",
                "xdm:conversionDate": "2018-01-12T15:52:25+00:00"
              }
            }
          ]
        }
      }
    ]
  }
}
```

# Lodging Reservation Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:reservations](#xdmreservations) | `object` | Optional | [Reservation Details](experienceevent-reservation-details.schema.md#xdmreservations) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:reservations

Interaction tracking for flights, lodging, vehicles, and dining reservations.

`xdm:reservations`
* is optional
* type: `object`
* defined in [Reservation Details](experienceevent-reservation-details.schema.md#xdmreservations)

### xdm:reservations Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:cancellation`| integer | Optional |
| `xdm:confirmationNumber`| string | Optional |
| `xdm:created`| integer | Optional |
| `xdm:currencyCode`| string | Optional |
| `xdm:endDate`| string | Optional |
| `xdm:length`| integer | Optional |
| `xdm:modification`| integer | Optional |
| `xdm:modificationDate`| string | Optional |
| `xdm:nonRefundableAmount`|  | Optional |
| `xdm:numberOfAdults`| integer | Optional |
| `xdm:numberOfChildren`| integer | Optional |
| `xdm:processSteps`|  | Optional |
| `xdm:purpose`| string | Optional |
| `xdm:startDate`| string | Optional |
| `xdm:transaction`|  | Optional |
| `xdm:triptype`| string | Optional |



#### xdm:ID
##### ID

Tracks the reservation number/identifier.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:cancellation
##### Cancellation

Tracked when a reservation has been cancelled.

`xdm:cancellation`
* is optional
* type: `integer`

##### xdm:cancellation Type


`integer`








#### xdm:confirmationNumber
##### Confirmation Number

Tracks the reservation confirmation number/identifier.

`xdm:confirmationNumber`
* is optional
* type: `string`

##### xdm:confirmationNumber Type


`string`








#### xdm:created
##### Created

Tracked when a reservation has been created.

`xdm:created`
* is optional
* type: `integer`

##### xdm:created Type


`integer`








#### xdm:currencyCode
##### Currency Code

Currency code used to make the purchase. ISO 4217 currency code.

`xdm:currencyCode`
* is optional
* type: `string`

##### xdm:currencyCode Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24)):
```regex
^[A-Z]{3}$
```








#### xdm:endDate
##### End Date

The end drop-off/return/check-out date of the reservation.

`xdm:endDate`
* is optional
* type: `string`

##### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:length
##### Length

Tracks the total number of days for a reservation.

`xdm:length`
* is optional
* type: `integer`

##### xdm:length Type


`integer`








#### xdm:modification
##### Modification

Captured when a reservation has been modified.

`xdm:modification`
* is optional
* type: `integer`

##### xdm:modification Type


`integer`








#### xdm:modificationDate
##### Modification Date

Tracks when a reservation has been modified.

`xdm:modificationDate`
* is optional
* type: `string`

##### xdm:modificationDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:nonRefundableAmount
##### Non-Refundable Amount

Amount of the reservation price that is marked as non-refundable.

`xdm:nonRefundableAmount`
* is optional
* type: reference

##### xdm:nonRefundableAmount Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`







#### xdm:numberOfAdults
##### Number of Adults

Captures the number of adults associated with the reservation.

`xdm:numberOfAdults`
* is optional
* type: `integer`

##### xdm:numberOfAdults Type


`integer`








#### xdm:numberOfChildren
##### Number of Children

Captures the number of children associated with the reservation.

`xdm:numberOfChildren`
* is optional
* type: `integer`

##### xdm:numberOfChildren Type


`integer`








#### xdm:processSteps
##### Process Steps

Extension of toolUsage data type.

`xdm:processSteps`
* is optional
* type: reference

##### xdm:processSteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:purpose
##### Purpose

Tracks the purpose of the reservation, typically either business or personal.

`xdm:purpose`
* is optional
* type: `string`

##### xdm:purpose Type


`string`



##### xdm:purpose Known Values
| Value | Description |
|-------|-------------|
| `business` | Business |
| `personal` | Personal |






#### xdm:startDate
##### Start Date

The start pick-up/outbound/check-in date of the reservation.

`xdm:startDate`
* is optional
* type: `string`

##### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:transaction
##### Transaction

Extension of transaction data type.

`xdm:transaction`
* is optional
* type: reference

##### xdm:transaction Type


* []() – `https://ns.adobe.com/xdm/datatypes/transaction`







#### xdm:triptype
##### Trip Type

Indicates if the reservation is for a one way, round trip, or multi-city.

`xdm:triptype`
* is optional
* type: `string`

##### xdm:triptype Type


`string`



##### xdm:triptype Known Values
| Value | Description |
|-------|-------------|
| `roundtrip` | Roundtrip |
| `oneWay` | One Way |
| `multiCity` | Multi-City |








