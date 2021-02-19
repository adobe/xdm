
# Adobe Advertising Cloud Creative Management Platform Event Extension Schema

```
https://ns.adobe.com/experience/adcloud/creative-event
```

Adobe Advertising Cloud Creative Management Platform Event extension.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/creative-event.schema.json](adobe/experience/adcloud/creative-event.schema.json) |
## Schema Hierarchy

* Adobe Advertising Cloud Creative Management Platform Event Extension `https://ns.adobe.com/experience/adcloud/creative-event`
  * [XDM ExperienceEvent](../../../classes/experienceevent.schema.md) `https://ns.adobe.com/xdm/context/experienceevent`
  * [Advertising Creative Management Platform Details](creative.schema.md) `https://ns.adobe.com/experience/adcloud/creative`


## Adobe Advertising Cloud Creative Management Platform Event Extension Example
```json
{
  "https://ns.adobe.com/experience/adcloud/creative": {
    "xdm:experienceId": "1001",
    "xdm:targetingBranchId": "4001",
    "xdm:adThemeCreativeId": "3001",
    "xdm:segments": [
      {
        "xdm:identityMap": {
          "AdCloudSegments": [
            {
              "xdm:id": "112233",
              "xdm:primary": true
            }
          ]
        },
        "xdm:segmentName": "Users with TV segment",
        "xdm:description": "Segment is about users who have TV",
        "xdm:segmentStatus": "ACTIVE",
        "repo:createDate": "2018-10-23T12:00:00-06:00",
        "repo:modifyDate": "2019-03-21T12:00:00-06:00",
        "xdm:targeted": true,
        "xdm:partnerId": "10"
      }
    ]
  }
}
```

# Adobe Advertising Cloud Creative Management Platform Event Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/adcloud/creative](#httpsnsadobecomexperienceadcloudcreative) | Advertising Creative Management Platform Details | Optional | Adobe Advertising Cloud Creative Management Platform Event Extension (this schema) |
| [xdm:eventMergeId](#xdmeventmergeid) | `string` | Optional | [XDM ExperienceEvent](../../../classes/experienceevent.schema.md#xdmeventmergeid) |
| [xdm:eventType](#xdmeventtype) | `string` | Optional | [XDM ExperienceEvent](../../../classes/experienceevent.schema.md#xdmeventtype) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/adcloud/creative
### Advertising Creative Management Platform Details

Advertising Creative Management Platform Details.

`https://ns.adobe.com/experience/adcloud/creative`
* is optional
* type: Advertising Creative Management Platform Details
* defined in this schema

### https://ns.adobe.com/experience/adcloud/creative Type


* [Advertising Creative Management Platform Details](creative.schema.md) – `https://ns.adobe.com/experience/adcloud/creative`





## xdm:eventMergeId
### ExperienceEvent merge ID

An ID to correlate or merge multiple Experience events together that are essentially the same event or should be merged. This is intended to be populated by the data producer prior to ingestion.

`xdm:eventMergeId`
* is optional
* type: `string`
* defined in [XDM ExperienceEvent](../../../classes/experienceevent.schema.md#xdmeventmergeid)

### xdm:eventMergeId Type


`string`






## xdm:eventType
### Event Type

The primary event type for this time-series record.

`xdm:eventType`
* is optional
* type: `string`
* defined in [XDM ExperienceEvent](../../../classes/experienceevent.schema.md#xdmeventtype)

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
| `delivery.feedback` | Delivery Feedback |
| `message.feedback` | Message Feedback |
| `message.tracking` | Message Tracking |
| `pushTracking.applicationOpened` | Push Tracking Application Opened |
| `pushTracking.customAction` | Push Tracking Custom Action |
| `listOpearation.removeFromList` | List Operation Remove From List |
| `listOperation.addToList` | List Operation Add To List |
| `leadoperation.scoreChanged` | Lead Operation Score Changed |
| `leadoperation.statusInCampaignProgressionChanged` | Lead Operation Status In Campaign Progression Changed |
| `leadOperation.interestingMoment` | Lead Operation Interesting Moment |
| `leadOperation.newLead` | Lead Operation New Lead |
| `leadoperation.convertLead` | Lead Operation Convert Lead |
| `directMarketing.emailBounced` | Direct Marketing Email Bounced |
| `directMarketing.emailBouncedSoft` | Direct Marketing Email Bounced Soft |
| `directMarketing.emailDelivered` | Direct Marketing Email Delivered |
| `directMarketing.emailUnsubscribed` | Direct Marketing Email Unsubscribed |
| `directMarketing.emailOpened` | Direct Marketing Email Opened |
| `directMarketing.emailClicked` | Direct Marketing Email Clicked |
| `opportunityEvent.removeFromOpportunity` | Opportunity Event Remove From Opportunity |
| `opportunityEvent.addToOpportunity` | Opportunity Event Add To Opportunity |
| `opportunityevent.opportunityUpdated` | Opportunity Event Opportunity Updated |



