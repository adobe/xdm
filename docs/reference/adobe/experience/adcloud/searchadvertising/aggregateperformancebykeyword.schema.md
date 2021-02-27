
# Search Advertising Aggregated Performance Measures By Keyword Schema

```
https://ns.adobe.com/experience/adcloud/searchadvertising/aggregateperformancebykeyword
```

Search Advertising Aggregated Performance Measures By Keyword is a rolled up data of the collection of aggregated performance measures as pulled from Search Advertising Platforms by Keyword.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/adcloud/searchadvertising/aggregateperformancebykeyword.schema.json](adobe/experience/adcloud/searchadvertising/aggregateperformancebykeyword.schema.json) |
## Schema Hierarchy

* Search Advertising Aggregated Performance Measures By Keyword `https://ns.adobe.com/experience/adcloud/searchadvertising/aggregateperformancebykeyword`
  * [Time-series Schema](../../../../behaviors/time-series.schema.md) `https://ns.adobe.com/xdm/data/time-series`
  * [Measure](../../../../datatypes/data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`
  * [Device](../../../../datatypes/device.schema.md) `https://ns.adobe.com/xdm/context/device`


# Search Advertising Aggregated Performance Measures By Keyword Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Time-series Schema](../../../../behaviors/time-series.schema.md#id) |
| [xdm:accountId](#xdmaccountid) | `string` | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:adgroupId](#xdmadgroupid) | `string` | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:avgPosition](#xdmavgposition) | Measure | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:campaignId](#xdmcampaignid) | `string` | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:clicks](#xdmclicks) | Measure | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:device](#xdmdevice) | Device | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:eventType](#xdmeventtype) | `string` | Optional | [Time-series Schema](../../../../behaviors/time-series.schema.md#xdmeventtype) |
| [xdm:impressions](#xdmimpressions) | Measure | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:matchType](#xdmmatchtype) | `enum` | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:qualityScore](#xdmqualityscore) | Measure | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:searchEngineId](#xdmsearchengineid) | `integer` | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:term](#xdmterm) | `string` | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:termId](#xdmtermid) | `string` | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:timestamp](#xdmtimestamp) | `string` | Optional | [Time-series Schema](../../../../behaviors/time-series.schema.md#xdmtimestamp) |
| [xdm:topPageBid](#xdmtoppagebid) | Measure | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| [xdm:totalCost](#xdmtotalcost) | Measure | Optional | Search Advertising Aggregated Performance Measures By Keyword (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the time-series event.

`@id`
* is optional
* type: `string`
* defined in [Time-series Schema](../../../../behaviors/time-series.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:accountId
### Account Identifier

Identifier that defines Customer/Client ID setup on the Search Advertising Platform.

`xdm:accountId`
* is optional
* type: `string`
* defined in this schema

### xdm:accountId Type


`string`






## xdm:adgroupId
### Ad Group Identifier

Ad Group ID on the search advertising platform.

`xdm:adgroupId`
* is optional
* type: `string`
* defined in this schema

### xdm:adgroupId Type


`string`






## xdm:avgPosition

Average Position of the Ad displayed on the network.

`xdm:avgPosition`
* is optional
* type: Measure
* defined in this schema

### xdm:avgPosition Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:campaignId
### Campaign Identifier

Campaign ID on the search advertising platform..

`xdm:campaignId`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignId Type


`string`






## xdm:clicks

Count of Clicks for a given ad displayed on the network.

`xdm:clicks`
* is optional
* type: Measure
* defined in this schema

### xdm:clicks Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:device
### Device

The device from where the ad was displayed.

`xdm:device`
* is optional
* type: Device
* defined in this schema

### xdm:device Type


* [Device](../../../../datatypes/device.schema.md) – `https://ns.adobe.com/xdm/context/device`





## xdm:eventType
### Event Type

The primary event type for this time-series record.

`xdm:eventType`
* is optional
* type: `string`
* defined in [Time-series Schema](../../../../behaviors/time-series.schema.md#xdmeventtype)

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




## xdm:impressions

Count of impressions for a given ad displayed on the network.

`xdm:impressions`
* is optional
* type: Measure
* defined in this schema

### xdm:impressions Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:matchType
### Term Match Type

Match Type associated to the Search Term being targeted for the Ad.

`xdm:matchType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmmatchtype-known-values).

### xdm:matchType Known Values
| Value | Description |
|-------|-------------|
| `Broad` | Broad |
| `Phrase` | Phrase |
| `Exact` | Exact |
| `Advanced` | Advanced |
| `Standard` | Standard |
| `Website` | Website |
| `Product Target` | Product Target |
| `Product Group` | Product Group |




## xdm:qualityScore

Quality Score of the Keyword assigned by the network - range 1 to 10. This is not an additive measure.

`xdm:qualityScore`
* is optional
* type: Measure
* defined in this schema

### xdm:qualityScore Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:searchEngineId
### Search Engine Identifier

The application-specified identifier used to identify the Search Advertising Platform Name.

`xdm:searchEngineId`
* is optional
* type: `integer`
* defined in this schema

### xdm:searchEngineId Type


`integer`






## xdm:term
### Search Term

Search Term targeted for the Ad.

`xdm:term`
* is optional
* type: `string`
* defined in this schema

### xdm:term Type


`string`






## xdm:termId
### Search Term Identifier

Search Term ID on the search advertising platform.

`xdm:termId`
* is optional
* type: `string`
* defined in this schema

### xdm:termId Type


`string`






## xdm:timestamp
### Timestamp

The time when an event or observation occurred.

`xdm:timestamp`
* is optional
* type: `string`
* defined in [Time-series Schema](../../../../behaviors/time-series.schema.md#xdmtimestamp)

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:topPageBid

Top of the Page Bid Estimator. The measure is computed by the network and is not an additive measure.

`xdm:topPageBid`
* is optional
* type: Measure
* defined in this schema

### xdm:topPageBid Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:totalCost

Total Advertising Spend for a given ad displayed on the network. The spend is in the account currency configured on the network.

`xdm:totalCost`
* is optional
* type: Measure
* defined in this schema

### xdm:totalCost Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




