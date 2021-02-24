
# Attributed Model Conversions Schema

```
https://ns.adobe.com/xdm/adcloud/attributedconversionmodel
```

Attributed Model Conversions is the Raw Conversion Count and Sum of Conversions

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/attributedconversionmodel.schema.json](adobe/experience/adcloud/attributedconversionmodel.schema.json) |
## Schema Hierarchy

* Attributed Model Conversions `https://ns.adobe.com/xdm/adcloud/attributedconversionmodel`
  * [Time-series Schema](../../../behaviors/time-series.schema.md) `https://ns.adobe.com/xdm/data/time-series`
  * [Measure](../../../datatypes/data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`
  * [Device](../../../datatypes/device.schema.md) `https://ns.adobe.com/xdm/context/device`


# Attributed Model Conversions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Time-series Schema](../../../behaviors/time-series.schema.md#id) |
| [adcloud:adId](#adcloudadid) | `string` | Optional | Attributed Model Conversions (this schema) |
| [adcloud:adgroupId](#adcloudadgroupid) | `string` | Optional | Attributed Model Conversions (this schema) |
| [adcloud:advertiserId](#adcloudadvertiserid) | `string` | Optional | Attributed Model Conversions (this schema) |
| [adcloud:campaignId](#adcloudcampaignid) | `string` | Optional | Attributed Model Conversions (this schema) |
| [adcloud:clickPlusViewThroughCount](#adcloudclickplusviewthroughcount) | Measure | Optional | Attributed Model Conversions (this schema) |
| [adcloud:clickPlusViewThroughValue](#adcloudclickplusviewthroughvalue) | Measure | Optional | Attributed Model Conversions (this schema) |
| [adcloud:clickThroughCount](#adcloudclickthroughcount) | Measure | Optional | Attributed Model Conversions (this schema) |
| [adcloud:clickThroughValue](#adcloudclickthroughvalue) | Measure | Optional | Attributed Model Conversions (this schema) |
| [adcloud:conversionType](#adcloudconversiontype) | `enum` | Optional | Attributed Model Conversions (this schema) |
| [adcloud:device](#adclouddevice) | Device | Optional | Attributed Model Conversions (this schema) |
| [adcloud:matchType](#adcloudmatchtype) | `enum` | Optional | Attributed Model Conversions (this schema) |
| [adcloud:modelName](#adcloudmodelname) | `string` | Optional | Attributed Model Conversions (this schema) |
| [adcloud:placementId](#adcloudplacementid) | `string` | Optional | Attributed Model Conversions (this schema) |
| [adcloud:propertyName](#adcloudpropertyname) | `string` | Optional | Attributed Model Conversions (this schema) |
| [adcloud:searchEngineId](#adcloudsearchengineid) | `integer` | Optional | Attributed Model Conversions (this schema) |
| [adcloud:term](#adcloudterm) | `string` | Optional | Attributed Model Conversions (this schema) |
| [adcloud:termId](#adcloudtermid) | `string` | Optional | Attributed Model Conversions (this schema) |
| [adcloud:viewPlusClickThroughCount](#adcloudviewplusclickthroughcount) | Measure | Optional | Attributed Model Conversions (this schema) |
| [adcloud:viewPlusClickThroughValue](#adcloudviewplusclickthroughvalue) | Measure | Optional | Attributed Model Conversions (this schema) |
| [adcloud:viewThroughCount](#adcloudviewthroughcount) | Measure | Optional | Attributed Model Conversions (this schema) |
| [adcloud:viewThroughValue](#adcloudviewthroughvalue) | Measure | Optional | Attributed Model Conversions (this schema) |
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






## adcloud:adId
### Ad Identifier

Ad ID on the advertising platform

`adcloud:adId`
* is optional
* type: `string`
* defined in this schema

### adcloud:adId Type


`string`






## adcloud:adgroupId
### Ad Group Identifier

Ad Group ID on the search advertising platform

`adcloud:adgroupId`
* is optional
* type: `string`
* defined in this schema

### adcloud:adgroupId Type


`string`






## adcloud:advertiserId
### Advertiser Identifier

Identifier for the advertiser

`adcloud:advertiserId`
* is optional
* type: `string`
* defined in this schema

### adcloud:advertiserId Type


`string`






## adcloud:campaignId
### Campaign Identifier

Campaign Identifer on the advertising platform

`adcloud:campaignId`
* is optional
* type: `string`
* defined in this schema

### adcloud:campaignId Type


`string`






## adcloud:clickPlusViewThroughCount
### Click Plus View Through Conversion Count

Evaluated as Raw Conversion Count for models if trigger event is click but impressions present in path

`adcloud:clickPlusViewThroughCount`
* is optional
* type: Measure
* defined in this schema

### adcloud:clickPlusViewThroughCount Type


* [Measure](../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## adcloud:clickPlusViewThroughValue
### Click Plus View Through Conversion Sum

Evaluated as Raw Conversion Sum for models if trigger event is click but impressions present in path

`adcloud:clickPlusViewThroughValue`
* is optional
* type: Measure
* defined in this schema

### adcloud:clickPlusViewThroughValue Type


* [Measure](../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## adcloud:clickThroughCount
### Click Through Conversion Count

Evaluated as Raw Conversion Count for models if trigger event is Click

`adcloud:clickThroughCount`
* is optional
* type: Measure
* defined in this schema

### adcloud:clickThroughCount Type


* [Measure](../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## adcloud:clickThroughValue
### Click Through Conversion Sum

Evaluated as Raw Conversion Sum for models if trigger event is Click

`adcloud:clickThroughValue`
* is optional
* type: Measure
* defined in this schema

### adcloud:clickThroughValue Type


* [Measure](../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## adcloud:conversionType
### Conversion Type

Feed Conversion Type the conversion event originated from

`adcloud:conversionType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#adcloudconversiontype-known-values).

### adcloud:conversionType Known Values
| Value | Description |
|-------|-------------|
| `Feed` |  |
| `Pixel` |  |
| `Cross Device` |  |




## adcloud:device
### Device

The device conversion event originated from

`adcloud:device`
* is optional
* type: Device
* defined in this schema

### adcloud:device Type


* [Device](../../../datatypes/device.schema.md) – `https://ns.adobe.com/xdm/context/device`





## adcloud:matchType
### Term Match Type

Match Type associated to the Search Term being targeted for the Ad

`adcloud:matchType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#adcloudmatchtype-known-values).

### adcloud:matchType Known Values
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




## adcloud:modelName
### Model Name

Model that was executed to generate Raw Conversion Count and Sum for the attributed conversion

`adcloud:modelName`
* is optional
* type: `string`
* defined in this schema

### adcloud:modelName Type


`string`





### adcloud:modelName Examples

```json
"LAST EVENT"
```

```json
"FIRST EVENT"
```

```json
"EVEN"
```



## adcloud:placementId
### Placement Identifier

Placement ID on the dsp advertising platform

`adcloud:placementId`
* is optional
* type: `string`
* defined in this schema

### adcloud:placementId Type


`string`






## adcloud:propertyName
### Property Name

Property Name Configured by Pixel, Analytics, Custom Feeds

`adcloud:propertyName`
* is optional
* type: `string`
* defined in this schema

### adcloud:propertyName Type


`string`






## adcloud:searchEngineId
### Search Engine Identifier

The application-specified identifier used to identify the Search Advertising Platform Name

`adcloud:searchEngineId`
* is optional
* type: `integer`
* defined in this schema

### adcloud:searchEngineId Type


`integer`






## adcloud:term
### Search Term

Search Term that contributed to the conversion

`adcloud:term`
* is optional
* type: `string`
* defined in this schema

### adcloud:term Type


`string`






## adcloud:termId
### Search Term Identifier

Search Term ID on the search advertising platform

`adcloud:termId`
* is optional
* type: `string`
* defined in this schema

### adcloud:termId Type


`string`






## adcloud:viewPlusClickThroughCount
### View Plus Click Through Conversion Count

Raw Conversion Count for models if trigger event is impression but clicks present in path

`adcloud:viewPlusClickThroughCount`
* is optional
* type: Measure
* defined in this schema

### adcloud:viewPlusClickThroughCount Type


* [Measure](../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## adcloud:viewPlusClickThroughValue
### View Plus Click Through Conversion Sum

Raw Conversion Sum for models if trigger event is impression but clicks present in path

`adcloud:viewPlusClickThroughValue`
* is optional
* type: Measure
* defined in this schema

### adcloud:viewPlusClickThroughValue Type


* [Measure](../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## adcloud:viewThroughCount
### View Through Conversion Count

Evaluated as Raw Conversion Count for models if trigger event is Impression

`adcloud:viewThroughCount`
* is optional
* type: Measure
* defined in this schema

### adcloud:viewThroughCount Type


* [Measure](../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## adcloud:viewThroughValue
### View Through Conversion Sum

Evaluated as Raw Conversion Sum for models if trigger event is Impression

`adcloud:viewThroughValue`
* is optional
* type: Measure
* defined in this schema

### adcloud:viewThroughValue Type


* [Measure](../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





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
* defined in [Time-series Schema](../../../behaviors/time-series.schema.md#xdmtimestamp)

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





