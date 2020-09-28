
# Search Advertising Aggregate Performance Measures By Keyword Schema

```
https://ns.adobe.com/xdm/adcloud/searchads/aggregateperformancebykeyword
```

Search Advertising Aggregate Performance Measures By Keyword is a collection of measures pulled from Search Advertising Platforms by Keyword.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/searchads/aggregateperformancebykeyword.schema.json](adobe/experience/adcloud/searchads/aggregateperformancebykeyword.schema.json) |
## Schema Hierarchy

* Search Advertising Aggregate Performance Measures By Keyword `https://ns.adobe.com/xdm/adcloud/searchads/aggregateperformancebykeyword`
  * [Time-series Schema](../../../../behaviors/time-series.schema.md) `https://ns.adobe.com/xdm/data/time-series`
  * [Measure](../../../../datatypes/data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`
  * [Device](../../../../datatypes/device.schema.md) `https://ns.adobe.com/xdm/context/device`


# Search Advertising Aggregate Performance Measures By Keyword Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Time-series Schema](../../../../behaviors/time-series.schema.md#id) |
| [searchads:accountId](#searchadsaccountid) | `string` | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:adgroupId](#searchadsadgroupid) | `string` | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:avgPosition](#searchadsavgposition) | Measure | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:campaignId](#searchadscampaignid) | `string` | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:clicks](#searchadsclicks) | Measure | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:device](#searchadsdevice) | Device | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:impressions](#searchadsimpressions) | Measure | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:matchType](#searchadsmatchtype) | `enum` | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:qualityScore](#searchadsqualityscore) | Measure | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:searchEngineId](#searchadssearchengineid) | `integer` | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:term](#searchadsterm) | `string` | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:termId](#searchadstermid) | `string` | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:topPageBid](#searchadstoppagebid) | Measure | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
| [searchads:totalCost](#searchadstotalcost) | Measure | Optional | Search Advertising Aggregate Performance Measures By Keyword (this schema) |
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





