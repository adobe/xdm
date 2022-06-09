
# Workfront Change Event Schema

```
https://ns.adobe.com/experience/workfront/changeevent
```

Data associated with a change event within Workfront project execution

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/workfront/changeevent.schema.json](adobe/experience/workfront/changeevent.schema.json) |
## Schema Hierarchy

* Workfront Change Event `https://ns.adobe.com/experience/workfront/changeevent`
  * [Time-series Schema](../../../behaviors/time-series.schema.md) `https://ns.adobe.com/xdm/data/time-series`


# Workfront Change Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Time-series Schema](../../../behaviors/time-series.schema.md#id) |
| [workfront:completed](#workfrontcompleted) | `integer` | Optional | Workfront Change Event (this schema) |
| [workfront:created](#workfrontcreated) | `integer` | Optional | Workfront Change Event (this schema) |
| [workfront:createdByEmployeeID](#workfrontcreatedbyemployeeid) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:creationDate](#workfrontcreationdate) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:customData](#workfrontcustomdata) | `object` | Optional | Workfront Change Event (this schema) |
| [workfront:deleted](#workfrontdeleted) | `integer` | Optional | Workfront Change Event (this schema) |
| [workfront:objectID](#workfrontobjectid) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:objectName](#workfrontobjectname) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:objectType](#workfrontobjecttype) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:parentID](#workfrontparentid) | `string` | Optional | Workfront Change Event (this schema) |
| [workfront:parentObjectType](#workfrontparentobjecttype) | `string` | Optional | Workfront Change Event (this schema) |
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






## workfront:createdByEmployeeID
### Created By ID

The employeeID involved in the CREATE event

`workfront:createdByEmployeeID`
* is optional
* type: `string`
* defined in this schema

### workfront:createdByEmployeeID Type


`string`






## workfront:creationDate
### Creation Date

The entry date from the source system

`workfront:creationDate`
* is optional
* type: `string`
* defined in this schema

### workfront:creationDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## workfront:customData
### Custom Form Fields

Custom form data in the form of key/value pairs

`workfront:customData`
* is optional
* type: `object`
* defined in this schema

### workfront:customData Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## workfront:deleted
### Deleted

Set to 1 if this was a deleted event

`workfront:deleted`
* is optional
* type: `integer`
* defined in this schema

### workfront:deleted Type


`integer`






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
* type: `string`
* defined in this schema

### workfront:objectType Type


`string`






## workfront:parentID
### Parent Object ID

The ID of the parent object

`workfront:parentID`
* is optional
* type: `string`
* defined in this schema

### workfront:parentID Type


`string`






## workfront:parentObjectType
### Parent Object Type

String value representing the type of parent - PROJECT, TASK, etc.

`workfront:parentObjectType`
* is optional
* type: `string`
* defined in this schema

### workfront:parentObjectType Type


`string`






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
| `commerce.productListAdds` | Commerce Product List (Cart) Adds |
| `commerce.productListOpens` | Commerce Product List (Cart) Opens |
| `commerce.productListRemovals` | Commerce Product List (Cart) Removals |
| `commerce.productListReopens` | Commerce Product List (Cart) Reopens |
| `commerce.productListViews` | Commerce Product List (Cart) Views |
| `commerce.productViews` | Commerce Product (Cart) Views |
| `commerce.purchases` | Commerce Purchases |
| `commerce.saveForLaters` | Commerce Save For Laters |
| `decisioning.propositionDisplay` | Decisioning Proposition Display |
| `decisioning.propositionInteract` | Decisioning Proposition Interact |
| `decisioning.propositionDeliver` | Decisioning Proposition Deliver |
| `delivery.feedback` | Delivery Feedback |
| `message.feedback` | Message Feedback |
| `message.tracking` | Message Tracking |
| `pushTracking.applicationOpened` | Push Tracking Application Opened |
| `pushTracking.customAction` | Push Tracking Custom Action |
| `listOperation.removeFromList` | List Operation Remove From List |
| `listOperation.addToList` | List Operation Add To List |
| `leadOperation.scoreChanged` | Lead Operation Score Changed |
| `leadOperation.revenueStageChanged` | Lead Operation Revenue Stage changed |
| `leadOperation.statusInCampaignProgressionChanged` | Lead Operation Status In Campaign Progression Changed |
| `leadOperation.interestingMoment` | Lead Operation Interesting Moment |
| `leadOperation.newLead` | Lead Operation New Lead |
| `leadOperation.convertLead` | Lead Operation Convert Lead |
| `leadOperation.callWebhook` | Lead Operation Call Webhook |
| `leadOperation.changeEngagementCampaignCadence` | Change Engagement Campaign Cadence |
| `leadOperation.addToCampaign` | Lead Operation Add To Campaign |
| `leadOperation.changeCampaignStream` | Lead Operation Change Campaign Stream |
| `leadOperation.mergeLeads` | Lead Operation Merge Leads |
| `directMarketing.emailBounced` | Direct Marketing Email Bounced |
| `directMarketing.emailBouncedSoft` | Direct Marketing Email Bounced Soft |
| `directMarketing.emailDelivered` | Direct Marketing Email Delivered |
| `directMarketing.emailUnsubscribed` | Direct Marketing Email Unsubscribed |
| `directMarketing.emailOpened` | Direct Marketing Email Opened |
| `directMarketing.emailClicked` | Direct Marketing Email Clicked |
| `directMarketing.emailSent` | Direct Marketing Email Sent |
| `opportunityEvent.removeFromOpportunity` | Opportunity Event Remove From Opportunity |
| `opportunityEvent.addToOpportunity` | Opportunity Event Add To Opportunity |
| `opportunityEvent.opportunityUpdated` | Opportunity Event Opportunity Updated |
| `inappmessageTracking.dismiss` | inapp message was dimissed |
| `inappmessageTracking.display` | inapp message was displayed |
| `inappmessageTracking.interact` | inapp message was interacted with |
| `media.ping` | Media ping |
| `media.sessionStart` | Media sessionStart |
| `media.play` | Media play |
| `media.bufferStart` | Media bufferStart |
| `media.pauseStart` | Media pauseStart |
| `media.chapterStart` | Media chapterStart |
| `media.chapterSkip` | Media chapterSkip |
| `media.chapterComplete` | Media chapterComplete |
| `media.adStart` | Media adStart |
| `media.adSkip` | Media adSkip |
| `media.adComplete` | Media adComplete |
| `media.adBreakStart` | Media adBreakStart |
| `media.adBreakComplete` | Media adBreakComplete |
| `media.bitrateChange` | Media bitrateChange |
| `media.error` | Media error |
| `media.sessionComplete` | Media sessionComplete |
| `media.sessionEnd` | Media sessionEnd |
| `media.stateStart` | Media stateStart |
| `media.stateEnd` | Media stateEnd |




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





