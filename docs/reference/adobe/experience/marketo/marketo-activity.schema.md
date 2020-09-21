
# Marketo Activity Log Schema

```
https://ns.adobe.com/experience/marketo/activity-marketo-details
```

Marketo specific Activity Log Details

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/marketo/marketo-activity.schema.json](adobe/experience/marketo/marketo-activity.schema.json) |
## Schema Hierarchy

* Marketo Activity Log `https://ns.adobe.com/experience/marketo/activity-marketo-details`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md) `https://ns.adobe.com/xdm/context/activity-log-details`


# Marketo Activity Log Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [marketo:activityLog](#marketoactivitylog) | `object` | Optional | Marketo Activity Log (this schema) |
| [xdm:accountID](#xdmaccountid) | `string` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmaccountid) |
| [xdm:activityDescription](#xdmactivitydescription) | `string` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivitydescription) |
| [xdm:activityDueDateTime](#xdmactivityduedatetime) | `string` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivityduedatetime) |
| [xdm:activityEndDateTime](#xdmactivityenddatetime) | `string` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivityenddatetime) |
| [xdm:activityPriority](#xdmactivitypriority) | `string` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivitypriority) |
| [xdm:activityStartDateTime](#xdmactivitystartdatetime) | `string` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivitystartdatetime) |
| [xdm:activityStatus](#xdmactivitystatus) | `string` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivitystatus) |
| [xdm:activitySubject](#xdmactivitysubject) | `string` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivitysubject) |
| [xdm:asset](#xdmasset) | `object` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmasset) |
| [xdm:campaign](#xdmcampaign) | `object` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmcampaign) |
| [xdm:division](#xdmdivision) | `string` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmdivision) |
| [xdm:entity](#xdmentity) | `object` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmentity) |
| [xdm:highPriority](#xdmhighpriority) | `boolean` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmhighpriority) |
| [xdm:interactionEvents](#xdminteractionevents) | `object` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdminteractionevents) |
| [xdm:isCompleted](#xdmiscompleted) | `boolean` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmiscompleted) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmisdeleted) |
| [xdm:isTask](#xdmistask) | `boolean` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmistask) |
| [xdm:ownerID](#xdmownerid) | `string` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmownerid) |
| [xdm:sourceType](#xdmsourcetype) | `string` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmsourcetype) |
| [xdm:userID](#xdmuserid) | `string` | Optional | [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmuserid) |
| `*` | any | Additional | this schema *allows* additional properties |

## marketo:activityLog


`marketo:activityLog`
* is optional
* type: `object`
* defined in this schema

### marketo:activityLog Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `marketo:activityID`| string | Optional |
| `marketo:attributeValues`| object | Optional |
| `marketo:bypassTrigger`| integer | Optional |



#### marketo:activityID
##### Marketo Activity Unique Identifier

Marketo Activity Unique identifier.

`marketo:activityID`
* is optional
* type: `string`

##### marketo:activityID Type


`string`








#### marketo:attributeValues
##### Attribute Values

undefined

`marketo:attributeValues`
* is optional
* type: `object`

##### marketo:attributeValues Type

Unknown type `object`.

```json
{
  "title": "Attribute Values",
  "type": "object",
  "meta:xdmType": "map",
  "additionalProperties": {
    "title": "Value defined for each Key",
    "description": "Map describing open set of key value pairs which are not composed semantically",
    "type": "string"
  },
  "simpletype": "`object`"
}
```







#### marketo:bypassTrigger
##### Bypass Trigger

Bypass Trigger

`marketo:bypassTrigger`
* is optional
* type: `integer`

##### marketo:bypassTrigger Type


`integer`











## xdm:accountID
### Business Account

Business Account Unique Identifier

`xdm:accountID`
* is optional
* type: `string`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmaccountid)

### xdm:accountID Type


`string`






## xdm:activityDescription
### Activity description

Activity self detailed description

`xdm:activityDescription`
* is optional
* type: `string`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivitydescription)

### xdm:activityDescription Type


`string`






## xdm:activityDueDateTime
### Activity Due date time

Due date and time by which the activity should complete

`xdm:activityDueDateTime`
* is optional
* type: `string`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivityduedatetime)

### xdm:activityDueDateTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:activityEndDateTime
### Activity end date time

The date and time when the activity in the form of task/business event got completed

`xdm:activityEndDateTime`
* is optional
* type: `string`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivityenddatetime)

### xdm:activityEndDateTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:activityPriority
### Activity priority

Current priority of the activity

`xdm:activityPriority`
* is optional
* type: `string`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivitypriority)

### xdm:activityPriority Type


`string`






## xdm:activityStartDateTime
### Activity Start date time

The date and time when the activity in the form of task/business event got started

`xdm:activityStartDateTime`
* is optional
* type: `string`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivitystartdatetime)

### xdm:activityStartDateTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:activityStatus
### Activity Status

Current Status of the activity

`xdm:activityStatus`
* is optional
* type: `string`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivitystatus)

### xdm:activityStatus Type


`string`






## xdm:activitySubject
### Subject of the activity

Shortened version of the activityDescription

`xdm:activitySubject`
* is optional
* type: `string`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmactivitysubject)

### xdm:activitySubject Type


`string`






## xdm:asset
### Object asset

Asset details for its type and ID

`xdm:asset`
* is optional
* type: `object`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmasset)

### xdm:asset Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | **Required** |
| `xdm:type`| string | **Required** |



#### xdm:ID
##### Asset ID

Holds Asset Identifier

`xdm:ID`
* is **required**
* type: `string`

##### xdm:ID Type


`string`








#### xdm:type
##### Asset Type

Holds Asset Type

`xdm:type`
* is **required**
* type: `string`

##### xdm:type Type


`string`











## xdm:campaign
### Campaign details

Campaign amd its relevant associated details

`xdm:campaign`
* is optional
* type: `object`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmcampaign)

### xdm:campaign Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:member`| object | Optional |
| `xdm:program`| object | Optional |
| `xdm:type`| string | Optional |



#### xdm:ID
##### Campaign ID

Unique identifer for Campaign.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:member

undefined

`xdm:member`
* is optional
* type: `object`

##### xdm:member Type

Unknown type `object`.

```json
{
  "type": "object",
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
  },
  "simpletype": "`object`"
}
```







#### xdm:program

undefined

`xdm:program`
* is optional
* type: `object`

##### xdm:program Type

Unknown type `object`.

```json
{
  "type": "object",
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
      "type": "object",
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
  },
  "simpletype": "`object`"
}
```







#### xdm:type
##### Campaign Type

The type of campaign for which audience is invited

`xdm:type`
* is optional
* type: `string`

##### xdm:type Type


`string`











## xdm:division
### Division of Account Enterprise

name of division of the account

`xdm:division`
* is optional
* type: `string`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmdivision)

### xdm:division Type


`string`






## xdm:entity
### Entity

Holds Entity Name and its ID on which activity action is based upon.

`xdm:entity`
* is optional
* type: `object`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmentity)

### xdm:entity Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | **Required** |
| `xdm:name`| string | **Required** |



#### xdm:ID
##### Entity tuple ID

Holds Entity Tuple's Primary Identifier

`xdm:ID`
* is **required**
* type: `string`

##### xdm:ID Type


`string`








#### xdm:name
##### Entity Name

Holds Entity Name

`xdm:name`
* is **required**
* type: `string`

##### xdm:name Type


`string`











## xdm:highPriority
### Activity is a high priority task

A boolean flag to indicate whether the activity is of high priority

`xdm:highPriority`
* is optional
* type: `boolean`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmhighpriority)

### xdm:highPriority Type


`boolean`





## xdm:interactionEvents
### Interaction Events

collection of various forms of interactions

`xdm:interactionEvents`
* is optional
* type: `object`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdminteractionevents)

### xdm:interactionEvents Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:email`|  | Optional |
| `xdm:meeting`| object | Optional |
| `xdm:phoneCall`|  | Optional |



#### xdm:email
##### Email interaction

Contextual information captured during any given email message

`xdm:email`
* is optional
* type: reference

##### xdm:email Type


* []() – `https://ns.adobe.com/xdm/common/emailinteraction`







#### xdm:meeting
##### Meeting

Meeting details with location co-ordinates

`xdm:meeting`
* is optional
* type: `object`

##### xdm:meeting Type

Unknown type `object`.

```json
{
  "type": "object",
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
  },
  "simpletype": "`object`"
}
```







#### xdm:phoneCall
##### Phone interaction

Contextual information captured during a given phone conversation

`xdm:phoneCall`
* is optional
* type: reference

##### xdm:phoneCall Type


* []() – `https://ns.adobe.com/xdm/common/phoneinteraction`










## xdm:isCompleted
### Activity completed or still open to work on

A boolean flag to indicate whether the activity is completed

`xdm:isCompleted`
* is optional
* type: `boolean`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmiscompleted)

### xdm:isCompleted Type


`boolean`





## xdm:isDeleted
### Activity soft deletion

A boolean flag to indicate whether the activity is soft deleted

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmisdeleted)

### xdm:isDeleted Type


`boolean`





## xdm:isTask
### Activity is task or business event

A boolean flag to represent whether the activity is a task of Event Management

`xdm:isTask`
* is optional
* type: `boolean`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmistask)

### xdm:isTask Type


`boolean`





## xdm:ownerID
### Ownership of the Activity

The owner which is responsible for completing the task or event management

`xdm:ownerID`
* is optional
* type: `string`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmownerid)

### xdm:ownerID Type


`string`






## xdm:sourceType
### Activity Source Type

The upstream source from where the activity record has been syncronized

`xdm:sourceType`
* is optional
* type: `string`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmsourcetype)

### xdm:sourceType Type


`string`






## xdm:userID
### User who is performing the activity

The user initiating the activity

`xdm:userID`
* is optional
* type: `string`
* defined in [XDM Business Activity Log details](../../../mixins/activity-log/activity-log-details.schema.md#xdmuserid)

### xdm:userID Type


`string`





