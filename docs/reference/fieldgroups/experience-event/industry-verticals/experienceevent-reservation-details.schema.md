
# Reservation Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-reservation-details
```

Reservation details such as length, modification, refundable status, and number of rooms.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-reservation-details.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-reservation-details.schema.json) |

## Reservation Details Example
```json
{
  "xdm:reservations": {
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
| [xdm:reservations](#xdmreservations) | `object` | Optional | Reservation Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:reservations

Interaction tracking for flights, lodging, vehicles, and dining reservations.

`xdm:reservations`
* is optional
* type: `object`
* defined in this schema

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








