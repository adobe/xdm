
# Lodging Check In Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-lodging-check-in-details
```

Lodging check in details such as room selection as well as start, save, failure and complete of check in.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-lodging-check-in-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-lodging-check-in-details.schema.json) |

## Lodging Check In Details Example
```json
{}
```

# Lodging Check In Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:lodgingCheckIn](#xdmlodgingcheckin) | `object` | Optional | Lodging Check In Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:lodgingCheckIn


`xdm:lodgingCheckIn`
* is optional
* type: `object`
* defined in this schema

### xdm:lodgingCheckIn Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:checkInSteps`|  | Optional |
| `xdm:digitalKey`| integer | Optional |
| `xdm:earlyCheckInRequested`| integer | Optional |
| `xdm:lateCheckInRequested`| integer | Optional |
| `xdm:noRoomCheckIn`| integer | Optional |
| `xdm:oneRoomCheckIn`| integer | Optional |
| `xdm:roomKeys`| integer | Optional |
| `xdm:userSelectedRoom`| boolean | Optional |



#### xdm:checkInSteps
##### Check In Steps

Extension of toolUsage data type.

`xdm:checkInSteps`
* is optional
* type: reference

##### xdm:checkInSteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:digitalKey
##### Digital Key Selected

Tracks when a user selects the use of a digital key upon check in.

`xdm:digitalKey`
* is optional
* type: `integer`

##### xdm:digitalKey Type


`integer`








#### xdm:earlyCheckInRequested
##### Early Check In Requested

Tracks when a user requests a check in earlier than normal check in hours.

`xdm:earlyCheckInRequested`
* is optional
* type: `integer`

##### xdm:earlyCheckInRequested Type


`integer`








#### xdm:lateCheckInRequested
##### Late Check In Requested

Tracks when a user requests a check in later than normal check in hours.

`xdm:lateCheckInRequested`
* is optional
* type: `integer`

##### xdm:lateCheckInRequested Type


`integer`








#### xdm:noRoomCheckIn
##### No Room Check In

Captured upon completion of check in when there is only one room available at that time.

`xdm:noRoomCheckIn`
* is optional
* type: `integer`

##### xdm:noRoomCheckIn Type


`integer`








#### xdm:oneRoomCheckIn
##### One Room Check In

Captured upon completion of check in when there is only one room available at that time.

`xdm:oneRoomCheckIn`
* is optional
* type: `integer`

##### xdm:oneRoomCheckIn Type


`integer`








#### xdm:roomKeys
##### Room Keys

Captures the number of standard room keys provided at check in.

`xdm:roomKeys`
* is optional
* type: `integer`

##### xdm:roomKeys Type


`integer`








#### xdm:userSelectedRoom
##### Guest Selected Room

Captures if the guest selected their room at check in.

`xdm:userSelectedRoom`
* is optional
* type: `boolean`

##### xdm:userSelectedRoom Type


`boolean`









