
# XDM Business Activity Log details Schema

```
https://ns.adobe.com/xdm/context/activity-log-details
```

An XDM Activity representing task or a business event

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/activity-log-details.schema.json](context/activity-log-details.schema.json) |
## Schema Hierarchy

* XDM Business Activity Log details `https://ns.adobe.com/xdm/context/activity-log-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## XDM Business Activity Log details Example
```json
{
  "xdm:activityDueDateTime": "2020-05-20T00:00:00+00:00",
  "xdm:activityStartDateTime": "2020-05-19T09:05:25+00:00",
  "xdm:activityEndDateTime": "2020-05-19T18:10:00+00:00",
  "xdm:isTask": false,
  "xdm:isCompleted": false,
  "xdm:isDeleted": false,
  "xdm:isHighPriority": false,
  "xdm:accountID": "423",
  "xdm:division": "div1",
  "xdm:ownerID": "6534",
  "xdm:userID": "3784",
  "xdm:entity": {
    "xdm:name": "Contact",
    "xdm:ID": "7863"
  },
  "xdm:sourceType": "Marketo",
  "xdm:asset": {
    "xdm:type": "Web Page",
    "xdm:ID": "1654"
  },
  "xdm:campaign": {
    "xdm:ID": "C1875",
    "xdm:type": "Marketing",
    "xdm:member": {
      "xdm:ID": "14563",
      "xdm:type": "Contact"
    },
    "xdm:program": {
      "xdm:ID": "Webinar",
      "xdm:type": "Event",
      "xdm:step": {
        "xdm:number": 10,
        "xdm:status": "Invited"
      }
    }
  },
  "xdm:activityDescription": "To organize a webinar on Finance",
  "xdm:activitySubject": "Finance Webinar",
  "xdm:activityStatus": "Not Started",
  "xdm:activityPriority": "Normal",
  "xdm:interactionEvents": {
    "xdm:meeting": {
      "xdm:meetingDetails": {
        "xdm:isAllDay": true,
        "xdm:inOnlineMeeting": true,
        "xdm:isReminderSet": true,
        "xdm:reminderDateTime": "2020-05-18T00:00:00+00:00",
        "xdm:scheduledStartDateTime": "2020-05-19T09:00:00+00:00",
        "xdm:scheduledEndDateTime": "2020-05-19T18:00:00+00:00",
        "xdm:organizerID": "98536"
      }
    }
  }
}
```

# XDM Business Activity Log details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:accountID](#xdmaccountid) | `string` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:activityDescription](#xdmactivitydescription) | `string` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:activityDueDateTime](#xdmactivityduedatetime) | `string` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:activityEndDateTime](#xdmactivityenddatetime) | `string` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:activityPriority](#xdmactivitypriority) | `string` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:activityStartDateTime](#xdmactivitystartdatetime) | `string` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:activityStatus](#xdmactivitystatus) | `string` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:activitySubject](#xdmactivitysubject) | `string` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:asset](#xdmasset) | complex | Optional | XDM Business Activity Log details (this schema) |
| [xdm:campaign](#xdmcampaign) | complex | Optional | XDM Business Activity Log details (this schema) |
| [xdm:division](#xdmdivision) | `string` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:entity](#xdmentity) | complex | Optional | XDM Business Activity Log details (this schema) |
| [xdm:highPriority](#xdmhighpriority) | `boolean` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:interactionEvents](#xdminteractionevents) | complex | Optional | XDM Business Activity Log details (this schema) |
| [xdm:isCompleted](#xdmiscompleted) | `boolean` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:isTask](#xdmistask) | `boolean` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:ownerID](#xdmownerid) | `string` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:sourceType](#xdmsourcetype) | `string` | Optional | XDM Business Activity Log details (this schema) |
| [xdm:userID](#xdmuserid) | `string` | Optional | XDM Business Activity Log details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:accountID
### Business Account

Business Account Unique Identifier

`xdm:accountID`
* is optional
* type: `string`
* defined in this schema

### xdm:accountID Type


`string`






## xdm:activityDescription
### Activity description

Activity self detailed description

`xdm:activityDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:activityDescription Type


`string`






## xdm:activityDueDateTime
### Activity Due date time

Due date and time by which the activity should complete

`xdm:activityDueDateTime`
* is optional
* type: `string`
* defined in this schema

### xdm:activityDueDateTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:activityEndDateTime
### Activity end date time

The date and time when the activity in the form of task/business event got completed

`xdm:activityEndDateTime`
* is optional
* type: `string`
* defined in this schema

### xdm:activityEndDateTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:activityPriority
### Activity priority

Current priority of the activity

`xdm:activityPriority`
* is optional
* type: `string`
* defined in this schema

### xdm:activityPriority Type


`string`






## xdm:activityStartDateTime
### Activity Start date time

The date and time when the activity in the form of task/business event got started

`xdm:activityStartDateTime`
* is optional
* type: `string`
* defined in this schema

### xdm:activityStartDateTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:activityStatus
### Activity Status

Current Status of the activity

`xdm:activityStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:activityStatus Type


`string`






## xdm:activitySubject
### Subject of the activity

Shortened version of the activityDescription

`xdm:activitySubject`
* is optional
* type: `string`
* defined in this schema

### xdm:activitySubject Type


`string`






## xdm:asset
### Object asset

Asset details for its type and ID

`xdm:asset`
* is optional
* type: complex
* defined in this schema

### xdm:asset Type

Unknown type ``.

```json
{
  "title": "Object asset",
  "description": "Asset details for its type and ID",
  "properties": {
    "xdm:type": {
      "title": "Asset Type",
      "description": "Holds Asset Type",
      "type": "string"
    },
    "xdm:ID": {
      "title": "Asset ID",
      "description": "Holds Asset Identifier",
      "type": "string"
    }
  },
  "required": [
    "xdm:type",
    "xdm:ID"
  ],
  "simpletype": "complex"
}
```





## xdm:campaign
### Campaign details

Campaign amd its relevant associated details

`xdm:campaign`
* is optional
* type: complex
* defined in this schema

### xdm:campaign Type

Unknown type ``.

```json
{
  "title": "Campaign details",
  "description": "Campaign amd its relevant associated details",
  "properties": {
    "xdm:ID": {
      "title": "Campaign ID",
      "description": "Unique identifer for Campaign.",
      "type": "string"
    },
    "xdm:type": {
      "title": "Campaign Type",
      "description": "The type of campaign for which audience is invited",
      "type": "string"
    },
    "xdm:member": {
      "properties": {
        "xdm:type": {
          "title": "Member type",
          "description": "Whether the Member is a lead or a contact",
          "type": "string"
        },
        "xdm:ID": {
          "title": "ID of the Member",
          "description": "Member's ID",
          "type": "string"
        }
      }
    },
    "xdm:program": {
      "properties": {
        "xdm:ID": {
          "title": "Program ID associated with the campaign",
          "description": "Unique identifer for Campaign.",
          "type": "string"
        },
        "xdm:type": {
          "title": "Program Type",
          "description": "The type of program which is associated with the campaign",
          "type": "string"
        },
        "xdm:step": {
          "properties": {
            "xdm:number": {
              "title": "Workflow step number",
              "description": "Program's Workflow Step Number",
              "type": "integer"
            },
            "xdm:status": {
              "title": "Program Workflow Step Status",
              "description": "Program's workflow name of the step status",
              "type": "string"
            }
          }
        }
      }
    }
  },
  "simpletype": "complex"
}
```





## xdm:division
### Division of Account Enterprise

name of division of the account

`xdm:division`
* is optional
* type: `string`
* defined in this schema

### xdm:division Type


`string`






## xdm:entity
### Entity

Holds Entity Name and its ID on which activity action is based upon.

`xdm:entity`
* is optional
* type: complex
* defined in this schema

### xdm:entity Type

Unknown type ``.

```json
{
  "title": "Entity",
  "description": "Holds Entity Name and its ID on which activity action is based upon.",
  "properties": {
    "xdm:name": {
      "title": "Entity Name",
      "description": "Holds Entity Name",
      "type": "string"
    },
    "xdm:ID": {
      "title": "Entity tuple ID",
      "description": "Holds Entity Tuple's Primary Identifier",
      "type": "string"
    }
  },
  "required": [
    "xdm:name",
    "xdm:ID"
  ],
  "simpletype": "complex"
}
```





## xdm:highPriority
### Activity is a high priority task

A boolean flag to indicate whether the activity is of high priority

`xdm:highPriority`
* is optional
* type: `boolean`
* defined in this schema

### xdm:highPriority Type


`boolean`





## xdm:interactionEvents
### Interaction Events

collection of various forms of interactions

`xdm:interactionEvents`
* is optional
* type: complex
* defined in this schema

### xdm:interactionEvents Type

Unknown type ``.

```json
{
  "title": "Interaction Events",
  "description": "collection of various forms of interactions",
  "properties": {
    "xdm:phoneCall": {
      "title": "Phone interaction",
      "$ref": "https://ns.adobe.com/xdm/common/phoneinteraction",
      "description": "Contextual information captured during a given phone conversation"
    },
    "xdm:meeting": {
      "title": "Meeting",
      "description": "Meeting details with location co-ordinates",
      "properties": {
        "xdm:meetingDetails": {
          "title": "Meeting interaction",
          "$ref": "https://ns.adobe.com/xdm/common/meetinginteraction",
          "description": "Contextual information captured for a online/offline meeting"
        },
        "xdm:location": {
          "title": "Physical location of the event management if meeting is offline ",
          "$ref": "https://ns.adobe.com/xdm/context/place",
          "description": "Physical location where the meeting is taking place"
        }
      }
    },
    "xdm:email": {
      "title": "Email interaction",
      "$ref": "https://ns.adobe.com/xdm/common/emailinteraction",
      "description": "Contextual information captured during any given email message"
    }
  },
  "simpletype": "complex"
}
```





## xdm:isCompleted
### Activity completed or still open to work on

A boolean flag to indicate whether the activity is completed

`xdm:isCompleted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isCompleted Type


`boolean`





## xdm:isDeleted
### Activity soft deletion

A boolean flag to indicate whether the activity is soft deleted

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDeleted Type


`boolean`





## xdm:isTask
### Activity is task or business event

A boolean flag to represent whether the activity is a task of Event Management

`xdm:isTask`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isTask Type


`boolean`





## xdm:ownerID
### Ownership of the Activity

The owner which is responsible for completing the task or event management

`xdm:ownerID`
* is optional
* type: `string`
* defined in this schema

### xdm:ownerID Type


`string`






## xdm:sourceType
### Activity Source Type

The upstream source from where the activity record has been syncronized

`xdm:sourceType`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceType Type


`string`






## xdm:userID
### User who is performing the activity

The user initiating the activity

`xdm:userID`
* is optional
* type: `string`
* defined in this schema

### xdm:userID Type


`string`





