
# Time-series Schema Schema

```
https://ns.adobe.com/xdm/data/time-series
```

Used to indicate the behavior of time partitioned semantics when composed into data schemas.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [behaviors/time-series.schema.json](behaviors/time-series.schema.json) |
## Schema Hierarchy

* Time-series Schema `https://ns.adobe.com/xdm/data/time-series`
  * [Extensibility base schema](../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Time-series Schema Example
```json
{
  "@id": "https://data.adobe.io/experienceid-123456",
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:eventType": "advertising.impressions"
}
```

# Time-series Schema Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Time-series Schema (this schema) |
| [xdm:eventType](#xdmeventtype) | `string` | Optional | Time-series Schema (this schema) |
| [xdm:timestamp](#xdmtimestamp) | `string` | Optional | Time-series Schema (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the time-series event.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:eventType
### Event Type

The primary event type for this time-series record.

`xdm:eventType`
* is optional
* type: `string`
* defined in this schema

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
| `inapp.dismiss` | inapp message was dimissed |
| `inapp.display` | inapp message was displayed |
| `inapp.interact` | inapp message was interacted with |
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
* defined in this schema

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





