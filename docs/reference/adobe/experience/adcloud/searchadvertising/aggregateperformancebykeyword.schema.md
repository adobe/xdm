
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
| `advertising.completes` | Indicates if a timed media asset was watched to completion - this does not necessarily mean the viewer watched the whole video; viewer could have skipped ahead. |
| `advertising.timePlayed` | Describes the amount of time spent by a user on a specific timed media asset. |
| `advertising.federated` | Indicates if an experience event was created through data federation (data sharing between customers). |
| `advertising.clicks` | Click(s) actions on an advertisement. |
| `advertising.conversions` | A customer pre-defined action(s) which triggers an event for performance evaluation. |
| `advertising.firstQuartiles` | A digital video ad has played through 25% of its duration at normal speed. |
| `advertising.impressions` | Impression(s) of an advertisement to an end-user with the potential of being viewed. |
| `advertising.midpoints` | A digital video ad has played through 50% of its duration at normal speed. |
| `advertising.starts` | A digital video ad has started playing. |
| `advertising.thirdQuartiles` | A digital video ad has played through 75% of its duration at normal speed. |
| `web.webpagedetails.pageViews` | View(s) of a webpage has occurred. |
| `web.webinteraction.linkClicks` | Click of a web-link has occurred. |
| `commerce.checkouts` | An action during a checkout process of a product list, there can be more than one checkout event if there are multiple steps in a checkout process. If there are multiple steps the event time information and referenced page or experience is used to identify the step individual events represent in order. |
| `commerce.productListAdds` | Addition of a product to the product list. Example a product is added to a shopping cart. |
| `commerce.productListOpens` | Initializations of a new product list. Example a shopping cart is created. |
| `commerce.productListRemovals` | Removal(s) of a product entry from a product list. Example a product is removed from a shopping cart. |
| `commerce.productListReopens` | A product list that was no longer accessible(abandoned) has been re-activated by the user. Example via a re-marketing activity. |
| `commerce.productListViews` | View(s) of a product-list has occurred. |
| `commerce.productViews` | View(s) of a product have occurred. |
| `commerce.purchases` | An order has been accepted. Purchase is the only required action in a commerce conversion. Purchase must have a product list referenced. |
| `commerce.saveForLaters` | Product list is saved for future use. Example a product wish list. |
| `delivery.feedback` | Feedback events for a delivery. Example feedback events for an email delivery. |
| `message.feedback` | Feedback events like sent/bounce/error for messages sent to a user. |
| `message.tracking` | Tracking events like open/click/custom action on messages sent to a user. |




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




