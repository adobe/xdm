
# Search Advertising Aggregate Performance Measures By Ad and Keyword Schema

```
https://ns.adobe.com/xdm/adcloud/searchads/aggregateperformancebyadbykeyword
```

Search Advertising Aggregate Performance Measures by Ad and Keyword is a collection of measures pulled from Search Advertising Platforms.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/searchads/aggregateperformancebyadbykeyword.schema.json](adobe/experience/adcloud/searchads/aggregateperformancebyadbykeyword.schema.json) |
## Schema Hierarchy

* Search Advertising Aggregate Performance Measures By Ad and Keyword `https://ns.adobe.com/xdm/adcloud/searchads/aggregateperformancebyadbykeyword`
  * [Time-series Schema](../../../../behaviors/time-series.schema.md) `https://ns.adobe.com/xdm/data/time-series`
  * [Measure](../../../../datatypes/data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`
  * [Device](../../../../datatypes/device.schema.md) `https://ns.adobe.com/xdm/context/device`


# Search Advertising Aggregate Performance Measures By Ad and Keyword Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Time-series Schema](../../../../behaviors/time-series.schema.md#id) |
| [searchads:accountId](#searchadsaccountid) | `string` | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:adId](#searchadsadid) | `string` | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:adgroupId](#searchadsadgroupid) | `string` | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:avgPosition](#searchadsavgposition) | Measure | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:campaignId](#searchadscampaignid) | `string` | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:clicks](#searchadsclicks) | Measure | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:device](#searchadsdevice) | Device | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:impressions](#searchadsimpressions) | Measure | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:matchType](#searchadsmatchtype) | `enum` | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:qualityScore](#searchadsqualityscore) | Measure | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:searchEngineId](#searchadssearchengineid) | `integer` | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:term](#searchadsterm) | `string` | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:termId](#searchadstermid) | `string` | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:topPageBid](#searchadstoppagebid) | Measure | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [searchads:totalCost](#searchadstotalcost) | Measure | Optional | Search Advertising Aggregate Performance Measures By Ad and Keyword (this schema) |
| [xdm:eventType](#xdmeventtype) | `string` | Optional | [Time-series Schema](../../../../behaviors/time-series.schema.md#xdmeventtype) |
| [xdm:timestamp](#xdmtimestamp) | `string` | Optional | [Time-series Schema](../../../../behaviors/time-series.schema.md#xdmtimestamp) |
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






## searchads:accountId
### Account Identifier

Identifier that defines Customer/Client ID setup on the Search Advertising Platform.

`searchads:accountId`
* is optional
* type: `string`
* defined in this schema

### searchads:accountId Type


`string`






## searchads:adId
### Ad Identifier

Ad ID on the search advertising platform.

`searchads:adId`
* is optional
* type: `string`
* defined in this schema

### searchads:adId Type


`string`






## searchads:adgroupId
### Ad Group Identifier

Ad Group ID on the search advertising platform.

`searchads:adgroupId`
* is optional
* type: `string`
* defined in this schema

### searchads:adgroupId Type


`string`






## searchads:avgPosition

Average Position of the Ad displayed on the network.

`searchads:avgPosition`
* is optional
* type: Measure
* defined in this schema

### searchads:avgPosition Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## searchads:campaignId
### Campaign Identifier

Campaign ID on the search advertising platform..

`searchads:campaignId`
* is optional
* type: `string`
* defined in this schema

### searchads:campaignId Type


`string`






## searchads:clicks

Count of Clicks for a given ad displayed on the network.

`searchads:clicks`
* is optional
* type: Measure
* defined in this schema

### searchads:clicks Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## searchads:device
### Device

The device from where the ad was displayed.

`searchads:device`
* is optional
* type: Device
* defined in this schema

### searchads:device Type


* [Device](../../../../datatypes/device.schema.md) – `https://ns.adobe.com/xdm/context/device`





## searchads:impressions

Count of impressions for a given ad displayed on the network.

`searchads:impressions`
* is optional
* type: Measure
* defined in this schema

### searchads:impressions Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## searchads:matchType
### Term Match Type

Match Type associated to the Search Term being targeted for the Ad.

`searchads:matchType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#searchadsmatchtype-known-values).

### searchads:matchType Known Values
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
| `Content` | Content |
| `SiteCpc` | SiteCpc |
| `Sitecpm` | SiteCpm |
| `Category` | Category |
| `Search` | Search |
| `Adgroup` | Adgroup |
| `Dynamic Ad Target` | Dynamic Ad Target |
| `Unknown` | Unknown |
| `SiteCpm` |  |




## searchads:qualityScore

Quality Score of the Keyword assigned by the network - range 1 to 10. This is not an additive measure.

`searchads:qualityScore`
* is optional
* type: Measure
* defined in this schema

### searchads:qualityScore Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## searchads:searchEngineId
### Search Engine Identifier

The application-specified identifier used to identify the Search Advertising Platform Name.

`searchads:searchEngineId`
* is optional
* type: `integer`
* defined in this schema

### searchads:searchEngineId Type


`integer`






## searchads:term
### Search Term

Search Term targeted for the Ad.

`searchads:term`
* is optional
* type: `string`
* defined in this schema

### searchads:term Type


`string`






## searchads:termId
### Search Term Identifier

Search Term ID on the search advertising platform.

`searchads:termId`
* is optional
* type: `string`
* defined in this schema

### searchads:termId Type


`string`






## searchads:topPageBid

Top of the Page Bid Estimator. The measure is computed by the network and is not an additive measure.

`searchads:topPageBid`
* is optional
* type: Measure
* defined in this schema

### searchads:topPageBid Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## searchads:totalCost

Total Advertising Spend for a given ad displayed on the network. The spend is in the account currency configured on the network.

`searchads:totalCost`
* is optional
* type: Measure
* defined in this schema

### searchads:totalCost Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





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





