
# Live Event Ticket Purchase Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-live-event-purchase
```

Purchase history for tickets to a live event, e.g., a concert or sports game.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-live-event-ticket-purchase.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-live-event-ticket-purchase.schema.json) |

## Live Event Ticket Purchase Example
```json
{
  "xdm:eventPurchaseDetails": {
    "xdm:ticketPurchaseID": "ABC-123",
    "xdm:liveEventID": "123-456",
    "xdm:ticketMasterEventCode": "XYZ",
    "xdm:liveEventName": "Sports Game",
    "xdm:corporateSponsorshipFlag": true,
    "xdm:tickets": [
      {
        "xdm:barcodeID": "8819624561542398",
        "xdm:deliveryMethod": "digital",
        "xdm:rowName": "A",
        "xdm:seatingArea": "balcony",
        "xdm:seatName": "A1",
        "xdm:seatingAreaNumeric": 1,
        "xdm:sectionCategory": "A",
        "xdm:sectionGroup": "1",
        "xdm:sectionLevel": "2",
        "xdm:sectionName": "50",
        "xdm:sectionRowName": "1",
        "xdm:ticketClassCategory": "premium",
        "xdm:ticketClassGroupName": "box",
        "xdm:ticketClassName": "63141",
        "xdm:ticketType": "single",
        "xdm:ticketPurchase": {
          "transactionAmount": {
            "amount": 54.32,
            "conversionDate": "2022-01-01T20:20:39+00:00",
            "currencyCode": "USD"
          },
          "transactionDate": "2022-01-01T20:20:39+00:00",
          "transactionID": "ABC-123",
          "transactionType": "Sample value"
        }
      }
    ]
  }
}
```

# Live Event Ticket Purchase Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:eventPurchaseDetails](#xdmeventpurchasedetails) | `object` | Optional | Live Event Ticket Purchase (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:eventPurchaseDetails


`xdm:eventPurchaseDetails`
* is optional
* type: `object`
* defined in this schema

### xdm:eventPurchaseDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:corporateSponsorshipFlag`| boolean | Optional |
| `xdm:liveEventID`| string | Optional |
| `xdm:liveEventName`| string | Optional |
| `xdm:ticketMasterEventCode`| string | Optional |
| `xdm:ticketPurchase`|  | Optional |
| `xdm:ticketPurchaseID`| string | Optional |
| `xdm:tickets`| array | Optional |



#### xdm:corporateSponsorshipFlag
##### Corporate Sponsorship Flag 

Indicates if the ticket was provided by a corporate sponsorship.

`xdm:corporateSponsorshipFlag`
* is optional
* type: `boolean`

##### xdm:corporateSponsorshipFlag Type


`boolean`







#### xdm:liveEventID
##### Live Event Identifier

Unique ID for the event in which the ticket was purchased for.

`xdm:liveEventID`
* is optional
* type: `string`

##### xdm:liveEventID Type


`string`








#### xdm:liveEventName
##### Live Event Name

Name of the live event.

`xdm:liveEventName`
* is optional
* type: `string`

##### xdm:liveEventName Type


`string`








#### xdm:ticketMasterEventCode
##### TicketMaster.com Event Code

TicketMaster.com Event Code

`xdm:ticketMasterEventCode`
* is optional
* type: `string`

##### xdm:ticketMasterEventCode Type


`string`








#### xdm:ticketPurchase
##### Ticket Purchase Transaction

Transaction details for ticket purchase.

`xdm:ticketPurchase`
* is optional
* type: reference

##### xdm:ticketPurchase Type


* []() – `https://ns.adobe.com/xdm/datatypes/transaction`







#### xdm:ticketPurchaseID
##### Ticket Purchase ID

Unique ID for the ticket purchase order.

`xdm:ticketPurchaseID`
* is optional
* type: `string`

##### xdm:ticketPurchaseID Type


`string`








#### xdm:tickets
##### Tickets

Ticket(s) Purchased

`xdm:tickets`
* is optional
* type: `object[]`


##### xdm:tickets Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:barcodeID`| string | Optional |
| `xdm:deliveryMethod`| string | Optional |
| `xdm:rowName`| string | Optional |
| `xdm:seatName`| string | Optional |
| `xdm:seatingArea`| string | Optional |
| `xdm:seatingAreaNumeric`| integer | Optional |
| `xdm:sectionCategory`| string | Optional |
| `xdm:sectionGroup`| string | Optional |
| `xdm:sectionLevel`| string | Optional |
| `xdm:sectionName`| string | Optional |
| `xdm:sectionRowName`| string | Optional |
| `xdm:ticketClassCategory`| string | Optional |
| `xdm:ticketClassGroupName`| string | Optional |
| `xdm:ticketClassName`| string | Optional |
| `xdm:ticketType`| string | Optional |



#### xdm:barcodeID
##### Ticket Bar Code

Unique bar code assigned to a ticket.

`xdm:barcodeID`
* is optional
* type: `string`

##### xdm:barcodeID Type


`string`








#### xdm:deliveryMethod
##### Delivery Method

Ticket Delivery Method, for example, postal or digital.

`xdm:deliveryMethod`
* is optional
* type: `string`

##### xdm:deliveryMethod Type


`string`



##### xdm:deliveryMethod Known Values
| Value | Description |
|-------|-------------|
| `postal` | Postal Delivery |
| `digital` | Digital Delivery |






#### xdm:rowName
##### Seat Row Name

Seat row name as printed on the ticket

`xdm:rowName`
* is optional
* type: `string`

##### xdm:rowName Type


`string`








#### xdm:seatName
##### Seat Name

Seat name as printed on ticket.

`xdm:seatName`
* is optional
* type: `string`

##### xdm:seatName Type


`string`








#### xdm:seatingArea
##### Seating Area

Seating area as printed on ticket

`xdm:seatingArea`
* is optional
* type: `string`

##### xdm:seatingArea Type


`string`








#### xdm:seatingAreaNumeric
##### Seating Area Numeric

Numeric Seating Area value

`xdm:seatingAreaNumeric`
* is optional
* type: `integer`

##### xdm:seatingAreaNumeric Type


`integer`








#### xdm:sectionCategory
##### Seating Section Category

Category of section, used to describe tier of ticket, balcony, box, etc...

`xdm:sectionCategory`
* is optional
* type: `string`

##### xdm:sectionCategory Type


`string`








#### xdm:sectionGroup
##### Seating Section Group

Section Group as presented on ticket

`xdm:sectionGroup`
* is optional
* type: `string`

##### xdm:sectionGroup Type


`string`








#### xdm:sectionLevel
##### Seating Section Level

Section Level as presented on ticket.

`xdm:sectionLevel`
* is optional
* type: `string`

##### xdm:sectionLevel Type


`string`








#### xdm:sectionName
##### Seating Section Name

Section name as presented on the ticket.

`xdm:sectionName`
* is optional
* type: `string`

##### xdm:sectionName Type


`string`








#### xdm:sectionRowName
##### Seating Section Row Name

Seating section row name as presented on ticket.

`xdm:sectionRowName`
* is optional
* type: `string`

##### xdm:sectionRowName Type


`string`








#### xdm:ticketClassCategory
##### Ticket Class Category

Category of the ticket class.

`xdm:ticketClassCategory`
* is optional
* type: `string`

##### xdm:ticketClassCategory Type


`string`








#### xdm:ticketClassGroupName
##### Ticket Class Group Name

Group name of the ticket class.

`xdm:ticketClassGroupName`
* is optional
* type: `string`

##### xdm:ticketClassGroupName Type


`string`








#### xdm:ticketClassName
##### Ticket Class Name

Name of the ticket class.

`xdm:ticketClassName`
* is optional
* type: `string`

##### xdm:ticketClassName Type


`string`








#### xdm:ticketType
##### ticketType

Enum: Type of ticket purchase, season, package, or single ticket.

`xdm:ticketType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmeventpurchasedetails-known-values).

##### xdm:ticketType Known Values
| Value | Description |
|-------|-------------|
| `season` | Season Ticket Purchase |
| `package` | Mini-Package Purchase |
| `single` | Single Ticket Purchase |
















