
# Workfront Change Event Schema

```
https://ns.adobe.com/experience/workfront/taskevent
```

Data associated with a change event within Workfront project execution

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/workfront/changeevent.schema.json](adobe/experience/workfront/changeevent.schema.json) |
## Schema Hierarchy

* Workfront Change Event `https://ns.adobe.com/experience/workfront/taskevent`
  * [Time-series Schema](../../../behaviors/time-series.schema.md) `https://ns.adobe.com/xdm/data/time-series`


# Workfront Change Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Time-series Schema](../../../behaviors/time-series.schema.md#id) |
| [workfront:actualCompletionDate](#workfrontactualcompletiondate) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:actualStartDate](#workfrontactualstartdate) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:assignedToID](#workfrontassignedtoid) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:completed](#workfrontcompleted) | `integer` | Optional | Workfront Change Event (this schema) |
| [workfront:created](#workfrontcreated) | `integer` | Optional | Workfront Change Event (this schema) |
| [workfront:deleted](#workfrontdeleted) | `integer` | Optional | Workfront Change Event (this schema) |
| [workfront:durationMinutes](#workfrontdurationminutes) | `integer` | Optional | Workfront Change Event (this schema) |
| [workfront:iterationID](#workfrontiterationid) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:objectID](#workfrontobjectid) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:objectName](#workfrontobjectname) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:objectType](#workfrontobjecttype) | `enum` | Optional | Workfront Change Event (this schema) |
| [workfront:parentPortfolioID](#workfrontparentportfolioid) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:parentProgramID](#workfrontparentprogramid) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:parentProjectID](#workfrontparentprojectid) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:percentComplete](#workfrontpercentcomplete) | `number` | Optional | Workfront Change Event (this schema) |
| [workfront:plannedStartDate](#workfrontplannedstartdate) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:priority](#workfrontpriority) | `integer` | Optional | Workfront Change Event (this schema) |
| [workfront:remainingMinutes](#workfrontremainingminutes) | `integer` | Optional | Workfront Change Event (this schema) |
| [workfront:status](#workfrontstatus) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:storyPoints](#workfrontstorypoints) | `integer` | Optional | Workfront Change Event (this schema) |
| [workfront:updated](#workfrontupdated) | `integer` | Optional | Workfront Change Event (this schema) |
| [xdm:eventType](#xdmeventtype) | `string` | Optional | [Time-series Schema](../../../behaviors/time-series.schema.md#xdmeventtype) |
| [xdm:timestamp](#xdmtimestamp) | `string` | Optional | [Time-series Schema](../../../behaviors/time-series.schema.md#xdmtimestamp) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the time-series event.

`@id`
* is optional
* type: `string`
* defined in [Time-series Schema](../../../behaviors/time-series.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## workfront:actualCompletionDate
### Actual Completion

Actual completion date execution

`workfront:actualCompletionDate`
* is optional
* type: `string`
* defined in this schema

### workfront:actualCompletionDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## workfront:actualStartDate
### Actual Start Date

Actual start date of execution

`workfront:actualStartDate`
* is optional
* type: `string`
* defined in this schema

### workfront:actualStartDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## workfront:assignedToID
### Assigned To

The ID of the employee or person this object type is assigned to

`workfront:assignedToID`
* is optional
* type: `string`
* defined in this schema

### workfront:assignedToID Type


`string`






## workfront:completed
### Completed

Set to 1 if this was a completed event

`workfront:completed`
* is optional
* type: `integer`
* defined in this schema

### workfront:completed Type


`integer`






## workfront:created
### Created

Set to 1 if this was a created event

`workfront:created`
* is optional
* type: `integer`
* defined in this schema

### workfront:created Type


`integer`






## workfront:deleted
### Deleted

Set to 1 if this was a deleted event

`workfront:deleted`
* is optional
* type: `integer`
* defined in this schema

### workfront:deleted Type


`integer`






## workfront:durationMinutes
### Duration Minutes

Number of minutes spent

`workfront:durationMinutes`
* is optional
* type: `integer`
* defined in this schema

### workfront:durationMinutes Type


`integer`






## workfront:iterationID
### Iteration ID

Iteration/Sprint this task was associated with

`workfront:iterationID`
* is optional
* type: `string`
* defined in this schema

### workfront:iterationID Type


`string`






## workfront:objectID
### Object ID

The ID of this object

`workfront:objectID`
* is optional
* type: `string`
* defined in this schema

### workfront:objectID Type


`string`






## workfront:objectName
### Object Name

Name assigned to this object

`workfront:objectName`
* is optional
* type: `string`
* defined in this schema

### workfront:objectName Type


`string`






## workfront:objectType
### Object Type

The type of object

`workfront:objectType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#workfrontobjecttype-known-values).

### workfront:objectType Known Values
| Value | Description |
|-------|-------------|
| `TASK` |  |
| `PROJECT` |  |
| `ISSUE` |  |




## workfront:parentPortfolioID
### Portfolio ID

The parent Portfolio ID

`workfront:parentPortfolioID`
* is optional
* type: `string`
* defined in this schema

### workfront:parentPortfolioID Type


`string`






## workfront:parentProgramID
### Program ID

The parent Program ID

`workfront:parentProgramID`
* is optional
* type: `string`
* defined in this schema

### workfront:parentProgramID Type


`string`






## workfront:parentProjectID
### Project ID

The parent Project ID

`workfront:parentProjectID`
* is optional
* type: `string`
* defined in this schema

### workfront:parentProjectID Type


`string`






## workfront:percentComplete
### Percent Complete

Current percentage complete

`workfront:percentComplete`
* is optional
* type: `number`
* defined in this schema

### workfront:percentComplete Type


`number`






## workfront:plannedStartDate
### Planned Start Date

Planned start date of execution

`workfront:plannedStartDate`
* is optional
* type: `string`
* defined in this schema

### workfront:plannedStartDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## workfront:priority
### Priority

Current priority of this object

`workfront:priority`
* is optional
* type: `integer`
* defined in this schema

### workfront:priority Type


`integer`






## workfront:remainingMinutes
### Remaining Minutes

Remaining minutes expected

`workfront:remainingMinutes`
* is optional
* type: `integer`
* defined in this schema

### workfront:remainingMinutes Type


`integer`






## workfront:status
### Status

Current Status

`workfront:status`
* is optional
* type: `string`
* defined in this schema

### workfront:status Type


`string`






## workfront:storyPoints
### Story Points

Story points assigned to this object

`workfront:storyPoints`
* is optional
* type: `integer`
* defined in this schema

### workfront:storyPoints Type


`integer`






## workfront:updated
### Updated

Set to 1 if this was a updated event

`workfront:updated`
* is optional
* type: `integer`
* defined in this schema

### workfront:updated Type


`integer`






## xdm:eventType
### Event Type

The primary event type for this time-series record.

`xdm:eventType`
* is optional
* type: `string`
* defined in [Time-series Schema](../../../behaviors/time-series.schema.md#xdmeventtype)

### xdm:eventType Type


`string`



### xdm:eventType Known Values
| Value | Description |
|-------|-------------|
| `advertising.completes` | Advertising Completes |
| `advertising.timePlayed` | Advertising Time Played |
| `advertising.federated` | Advertising Federated |
| `advertising.clicks` | Advertising Clicks |
| `advertising.conversions` | Advertising Conversions |
| `advertising.firstQuartiles` | Advertising First Quartiles |
| `advertising.impressions` | Advertising Impressions |
| `advertising.midpoints` | Advertising Midpoints |
| `advertising.starts` | Advertising Starts |
| `advertising.thirdQuartiles` | Advertising Third Quartiles |
| `application.close` | Application Close |
| `application.launch` | Application Launch |
| `web.webpagedetails.pageViews` | Web Webpagedetails Page Views |
| `web.webinteraction.linkClicks` | Web Webinteraction Link Clicks |
| `web.formFilledOut` | Web Form Filled Out |
| `commerce.checkouts` | Commerce Checkouts |
| `commerce.productListAdds` | Commerce Product List Adds |
| `commerce.productListOpens` | Commerce Product List Opens |
| `commerce.productListRemovals` | Commerce Product List Removals |
| `commerce.productListReopens` | Commerce Product List Reopens |
| `commerce.productListViews` | Commerce Product List Views |
| `commerce.productViews` | Commerce Product Views |
| `commerce.purchases` | Commerce Purchases |
| `commerce.saveForLaters` | Commerce Save For Laters |
| `decisioning.propositionDisplay` | Decisioning Proposition Display |
| `decisioning.propositionInteract` | Decisioning Proposition Interact |
| `delivery.feedback` | Delivery Feedback |
| `message.feedback` | Message Feedback |
| `message.tracking` | Message Tracking |
| `pushTracking.applicationOpened` | Push Tracking Application Opened |
| `pushTracking.customAction` | Push Tracking Custom Action |
| `listOperation.removeFromList` | List Operation Remove From List |
| `listOperation.addToList` | List Operation Add To List |
| `leadOperation.scoreChanged` | Lead Operation Score Changed |
| `leadOperation.statusInCampaignProgressionChanged` | Lead Operation Status In Campaign Progression Changed |
| `leadOperation.interestingMoment` | Lead Operation Interesting Moment |
| `leadOperation.newLead` | Lead Operation New Lead |
| `leadOperation.convertLead` | Lead Operation Convert Lead |
| `leadOperation.callWebhook` | Lead Operation Call Webhook |
| `directMarketing.emailBounced` | Direct Marketing Email Bounced |
| `directMarketing.emailBouncedSoft` | Direct Marketing Email Bounced Soft |
| `directMarketing.emailDelivered` | Direct Marketing Email Delivered |
| `directMarketing.emailUnsubscribed` | Direct Marketing Email Unsubscribed |
| `directMarketing.emailOpened` | Direct Marketing Email Opened |
| `directMarketing.emailClicked` | Direct Marketing Email Clicked |
| `opportunityEvent.removeFromOpportunity` | Opportunity Event Remove From Opportunity |
| `opportunityEvent.addToOpportunity` | Opportunity Event Add To Opportunity |
| `opportunityEvent.opportunityUpdated` | Opportunity Event Opportunity Updated |
| `inappmessageTracking.dismiss` | inapp message was dimissed |
| `inappmessageTracking.display` | inapp message was displayed |
| `inappmessageTracking.interact` | inapp message was interacted with |




## xdm:timestamp
### Timestamp

The time when an event or observation occurred.

`xdm:timestamp`
* is optional
* type: `string`
* defined in [Time-series Schema](../../../behaviors/time-series.schema.md#xdmtimestamp)

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





