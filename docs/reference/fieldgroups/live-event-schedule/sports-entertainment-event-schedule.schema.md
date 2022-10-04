
# Sports and Entertainment Event Schedule Schema

```
https://ns.adobe.com/xdm/mixins/sports-entertainment-event-schedule
```

For Live Event schedule data, such as a traveling concert schedule or a sports team's schedule.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/live-event-schedule/sports-entertainment-event-schedule.schema.json](fieldgroups/live-event-schedule/sports-entertainment-event-schedule.schema.json) |

## Sports and Entertainment Event Schedule Example
```json
{
  "xdm:sportsEntertainmentEventSchedule": {
    "xdm:locationID": "96698daa-d44a-4960-bb7e-588bfc928ea3",
    "xdm:eventStartDateTime": "2019-01-01T15:52:25+00:00",
    "xdm:attractionName": "sports Team",
    "xdm:eventClassification": "sports",
    "xdm:eventSubClassification": "baseball",
    "xdm:premiumDoorTime": "2019-03-10T15:52:25+00:00",
    "xdm:regularDoorTime": "2019-03-10T15:52:25+00:00",
    "xdm:ticketSalesStartTime": "2019-03-10T15:52:25+00:00",
    "xdm:ticketSalesEndTime": "2019-03-10T15:52:25+00:00",
    "xdm:ticketsAvailable": true,
    "xdm:eventSeasonName": "2021-2022"
  }
}
```

# Sports and Entertainment Event Schedule Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:sportsEntertainmentEventSchedule](#xdmsportsentertainmenteventschedule) | `object` | Optional | Sports and Entertainment Event Schedule (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:sportsEntertainmentEventSchedule


`xdm:sportsEntertainmentEventSchedule`
* is optional
* type: `object`
* defined in this schema

### xdm:sportsEntertainmentEventSchedule Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:attractionName`| string | Optional |
| `xdm:eventClassification`| string | Optional |
| `xdm:eventSeasonName`| string | Optional |
| `xdm:eventStartDateTime`| string | Optional |
| `xdm:eventSubClassification`| string | Optional |
| `xdm:locationID`| string | Optional |
| `xdm:premiumDoorTime`| string | Optional |
| `xdm:regularDoorTime`| string | Optional |
| `xdm:ticketSalesEndTime`| string | Optional |
| `xdm:ticketSalesStartTime`| string | Optional |
| `xdm:ticketsAvailable`| boolean | Optional |



#### xdm:attractionName
##### Attraction Name

Name of the attraction(s) at the event

`xdm:attractionName`
* is optional
* type: `string`

##### xdm:attractionName Type


`string`








#### xdm:eventClassification
##### Event Classification

Describes the type of event, e.g., sports, music

`xdm:eventClassification`
* is optional
* type: `string`

##### xdm:eventClassification Type


`string`








#### xdm:eventSeasonName
##### Season Name

Descriptive name of the event season, if it is an event within a series. For example, a sports season.

`xdm:eventSeasonName`
* is optional
* type: `string`

##### xdm:eventSeasonName Type


`string`








#### xdm:eventStartDateTime
##### Event Start Datetime

Datetime for the event

`xdm:eventStartDateTime`
* is optional
* type: `string`

##### xdm:eventStartDateTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:eventSubClassification
##### Event Sub Classification

Describes the sub-type of the event. For example, if the classification is sports, the sub-classification might be the type of sport (baseball).

`xdm:eventSubClassification`
* is optional
* type: `string`

##### xdm:eventSubClassification Type


`string`








#### xdm:locationID
##### Location ID

Unique identifier for the Location in which the event is taking place.

`xdm:locationID`
* is optional
* type: `string`

##### xdm:locationID Type


`string`








#### xdm:premiumDoorTime
##### Premium Door Time

Door open time for premium ticket holders.

`xdm:premiumDoorTime`
* is optional
* type: `string`

##### xdm:premiumDoorTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:regularDoorTime
##### Regular Door Time

The time the doors open for non-premium ticket holders.

`xdm:regularDoorTime`
* is optional
* type: `string`

##### xdm:regularDoorTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:ticketSalesEndTime
##### Ticket Sales End Time


`xdm:ticketSalesEndTime`
* is optional
* type: `string`

##### xdm:ticketSalesEndTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:ticketSalesStartTime
##### Ticket Sales Start Time


`xdm:ticketSalesStartTime`
* is optional
* type: `string`

##### xdm:ticketSalesStartTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:ticketsAvailable
##### Tickets Available

Indicates if tickets are still available for the event or not.

`xdm:ticketsAvailable`
* is optional
* type: `boolean`

##### xdm:ticketsAvailable Type


`boolean`









