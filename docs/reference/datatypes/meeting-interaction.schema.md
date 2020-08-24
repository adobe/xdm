
# Meeting Interaction Schema

```
https://ns.adobe.com/xdm/common/meetinginteraction
```

Captures information in the context of a meeting between people online or at a specified location

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/meeting-interaction.schema.json](datatypes/meeting-interaction.schema.json) |
## Schema Hierarchy

* Meeting Interaction `https://ns.adobe.com/xdm/common/meetinginteraction`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Meeting Interaction Example
```json
{
  "xdm:isAllDay": true,
  "xdm:isOnline": true,
  "xdm:isReminderSet": true,
  "xdm:reminderDateTime": "2020-05-19T00:00:00+00:00",
  "xdm:scheduledStartDateTime": "2020-05-20T09:00:00+00:00",
  "xdm:scheduledEndDateTime": "2020-05-20T18:00:00+00:00",
  "xdm:organizerID": "98536"
}
```

# Meeting Interaction Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:isAllDay](#xdmisallday) | `boolean` | Optional | Meeting Interaction (this schema) |
| [xdm:isOnline](#xdmisonline) | `boolean` | Optional | Meeting Interaction (this schema) |
| [xdm:isReminderSet](#xdmisreminderset) | `boolean` | Optional | Meeting Interaction (this schema) |
| [xdm:organizerID](#xdmorganizerid) | `string` | Optional | Meeting Interaction (this schema) |
| [xdm:reminderDateTime](#xdmreminderdatetime) | `string` | Optional | Meeting Interaction (this schema) |
| [xdm:scheduledEndDateTime](#xdmscheduledenddatetime) | `string` | Optional | Meeting Interaction (this schema) |
| [xdm:scheduledStartDateTime](#xdmscheduledstartdatetime) | `string` | Optional | Meeting Interaction (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:isAllDay
### All Day meeting/event

A flag to represent whether the meeting is all day long

`xdm:isAllDay`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isAllDay Type


`boolean`





## xdm:isOnline
### Meeting online/offline

A flag indicating whether the neeting is online of offline

`xdm:isOnline`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isOnline Type


`boolean`





## xdm:isReminderSet
### Reminder Set for the meeting

A flag indicating whether a reminder has been in place for the meeting

`xdm:isReminderSet`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isReminderSet Type


`boolean`





## xdm:organizerID
### Person organizing the meeting

Person who is responsible to control and manage the meeting

`xdm:organizerID`
* is optional
* type: `string`
* defined in this schema

### xdm:organizerID Type


`string`






## xdm:reminderDateTime
### Date and time at which the reminder is set

The date and time for which the reminder is set, if the flag for reminder set has been set to true

`xdm:reminderDateTime`
* is optional
* type: `string`
* defined in this schema

### xdm:reminderDateTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:scheduledEndDateTime
### Scheduled time for the meeting to end

Scheduled time by which the meeting should end

`xdm:scheduledEndDateTime`
* is optional
* type: `string`
* defined in this schema

### xdm:scheduledEndDateTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:scheduledStartDateTime
### Time at which the meeting has been schedued to start

Scheduled time at which the meeting will start

`xdm:scheduledStartDateTime`
* is optional
* type: `string`
* defined in this schema

### xdm:scheduledStartDateTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





