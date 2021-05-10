
# Advertising Schema

```
https://ns.adobe.com/xdm/context/advertising
```

The information related to advertising activity in relationship to the experience event.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/marketing/advertising.schema.json](datatypes/marketing/advertising.schema.json) |
## Schema Hierarchy

* Advertising `https://ns.adobe.com/xdm/context/advertising`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Measure](../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Advertising Example
```json
{
  "xdm:adViewability": {
    "xdm:adUnitDepth": 0,
    "xdm:viewportHeight": 1250,
    "xdm:viewportWidth": 1600,
    "xdm:adHeight": 250,
    "xdm:adWidth": 300,
    "xdm:playerVolume": 85,
    "xdm:measurementEligible": true,
    "xdm:implementationDetails": {
      "xdm:name": "https://ns.adobe.com/experience/adcloud/viewability",
      "xdm:version": "1"
    },
    "xdm:viewable": true,
    "xdm:activeWindow": true,
    "xdm:percentViewable": 89,
    "xdm:viewableFirstQuartile": {
      "xdm:value": 1
    }
  },
  "xdm:adAssetReference": {
    "@id": "https://data.adobe.io/entities/ad-id/AD1",
    "xdm:creativeID": "6738737",
    "dc:title": "adNumber2",
    "xdm:advertiser": "Sample advertiser",
    "xdm:campaign": "Sample campaign",
    "xmpDM:duration": 10,
    "xdm:creativeURL": "www.creative.com",
    "xdm:siteID": "www.ad-site.com",
    "xdm:placementID": "www.place.org"
  },
  "xdm:firstQuartiles": {
    "xdm:value": 1
  }
}
```

# Advertising Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:adAssetReference](#xdmadassetreference) | `object` | Optional | Advertising (this schema) |
| [xdm:adAssetViewDetails](#xdmadassetviewdetails) | `object` | Optional | Advertising (this schema) |
| [xdm:adViewability](#xdmadviewability) | `object` | Optional | Advertising (this schema) |
| [xdm:clicks](#xdmclicks) | Measure | Optional | Advertising (this schema) |
| [xdm:completes](#xdmcompletes) | Measure | Optional | Advertising (this schema) |
| [xdm:conversions](#xdmconversions) | Measure | Optional | Advertising (this schema) |
| [xdm:downloadedPlayback](#xdmdownloadedplayback) | `boolean` | Optional | Advertising (this schema) |
| [xdm:federated](#xdmfederated) | Measure | Optional | Advertising (this schema) |
| [xdm:firstQuartiles](#xdmfirstquartiles) | Measure | Optional | Advertising (this schema) |
| [xdm:impressions](#xdmimpressions) | Measure | Optional | Advertising (this schema) |
| [xdm:midpoints](#xdmmidpoints) | Measure | Optional | Advertising (this schema) |
| [xdm:starts](#xdmstarts) | Measure | Optional | Advertising (this schema) |
| [xdm:thirdQuartiles](#xdmthirdquartiles) | Measure | Optional | Advertising (this schema) |
| [xdm:timePlayed](#xdmtimeplayed) | Measure | Optional | Advertising (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:adAssetReference
### Ad asset reference

Asset information about the ad captured by the experience event.

`xdm:adAssetReference`
* is optional
* type: `object`
* defined in this schema

### xdm:adAssetReference Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `@id`| string | **Required** |
| `dc:title`| string | Optional |
| `xdm:advertiser`| string | Optional |
| `xdm:campaign`| string | Optional |
| `xdm:creativeID`| string | Optional |
| `xdm:creativeURL`| string | Optional |
| `xdm:placementID`| string | Optional |
| `xdm:siteID`| string | Optional |
| `xmpDM:duration`| integer | Optional |



#### @id
##### Ad ID

Identifier of the ad asset provided by media analytics customers. Following the Ad-ID standard [https://www.ad-id.org].

`@id`
* is **required**
* type: `string`

##### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))








#### dc:title
##### Ad name

The friendly and human-readable name of the ad asset.

`dc:title`
* is optional
* type: `string`

##### dc:title Type


`string`








#### xdm:advertiser
##### Ad advertiser

Company/Brand whose product is featured in the ad.

`xdm:advertiser`
* is optional
* type: `string`

##### xdm:advertiser Type


`string`








#### xdm:campaign
##### Ad campaign

ID of the ad campaign.

`xdm:campaign`
* is optional
* type: `string`

##### xdm:campaign Type


`string`








#### xdm:creativeID
##### Ad creative ID

The ID of the ad creative.

`xdm:creativeID`
* is optional
* type: `string`

##### xdm:creativeID Type


`string`








#### xdm:creativeURL
##### Ad creative URL

The URL of the ad creative.

`xdm:creativeURL`
* is optional
* type: `string`

##### xdm:creativeURL Type


`string`








#### xdm:placementID
##### Ad placement ID

Placement ID of the ad.

`xdm:placementID`
* is optional
* type: `string`

##### xdm:placementID Type


`string`








#### xdm:siteID
##### Ad site ID

ID of the ad site.

`xdm:siteID`
* is optional
* type: `string`

##### xdm:siteID Type


`string`








#### xmpDM:duration
##### Ad length or duration

Length or duration of ad asset in seconds.

`xmpDM:duration`
* is optional
* type: `integer`

##### xmpDM:duration Type


`integer`











## xdm:adAssetViewDetails
### Ad asset view details

View details for the ad playback captured by the experience event.

`xdm:adAssetViewDetails`
* is optional
* type: `object`
* defined in this schema

### xdm:adAssetViewDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:adBreak`|  | Optional |
| `xdm:index`| integer | Optional |
| `xdm:playerName`| string | Optional |



#### xdm:adBreak
##### Ad break

Details about how a timed advertising is inserted into a timed media.

`xdm:adBreak`
* is optional
* type: reference

##### xdm:adBreak Type


* []() – `https://ns.adobe.com/xdm/context/advertising-break`







#### xdm:index
##### Ad In Pod Position

The index of the ad inside the parent ad break, for example, the first ad has index 0 and the second ad has index 1.

`xdm:index`
* is optional
* type: `integer`

##### xdm:index Type


`integer`








#### xdm:playerName
##### Ad player name

The name of the player responsible for rendering the ad.

`xdm:playerName`
* is optional
* type: `string`

##### xdm:playerName Type


`string`











## xdm:adViewability
### MRC viewability

Media Rating Council (MRC) defines viewability as an online advertising metric that indicates the number of impressions that are actually “seen” by end-users. Viewability captures specific details such as player volume, library version, window status, and viewport ad measured dimensions.

`xdm:adViewability`
* is optional
* type: `object`
* defined in this schema

### xdm:adViewability Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:activeWindow`| boolean | Optional |
| `xdm:adHeight`| integer | Optional |
| `xdm:adUnitDepth`| integer | Optional |
| `xdm:adWidth`| integer | Optional |
| `xdm:implementationDetails`|  | Optional |
| `xdm:measuredAdNotVisible`|  | Optional |
| `xdm:measuredMuted`|  | Optional |
| `xdm:measuredWindowInactive`|  | Optional |
| `xdm:measurementEligible`| boolean | Optional |
| `xdm:percentViewable`| integer | Optional |
| `xdm:playerVolume`| integer | Optional |
| `xdm:unmeasurableIframe`|  | Optional |
| `xdm:unmeasurableOther`|  | Optional |
| `xdm:viewabilityEligibleImpressions`|  | Optional |
| `xdm:viewable`| boolean | Optional |
| `xdm:viewableCompletes`|  | Optional |
| `xdm:viewableFirstQuartiles`|  | Optional |
| `xdm:viewableImpressions`|  | Optional |
| `xdm:viewableMidpoints`|  | Optional |
| `xdm:viewableThirdQuartiles`|  | Optional |
| `xdm:viewportHeight`| integer | Optional |
| `xdm:viewportWidth`| integer | Optional |



#### xdm:activeWindow
##### Active Window

Indicates whether ad was shown on active window on users' device.

`xdm:activeWindow`
* is optional
* type: `boolean`

##### xdm:activeWindow Type


`boolean`







#### xdm:adHeight
##### Ad Height

The number of vertical pixels of the player, measured at runtime. This can be larger than the size of the ad if the player has extra controls or thumbnails.

`xdm:adHeight`
* is optional
* type: `integer`

##### xdm:adHeight Type


`integer`
* minimum value: `0`








#### xdm:adUnitDepth
##### Ad Unit Depth

Publishers may embed ad units inside containers/iFrames in order limit the ad's access solely to the code of the page. This describes how many 'containers' or iFrames the ad unit is displayed inside of.

`xdm:adUnitDepth`
* is optional
* type: `integer`

##### xdm:adUnitDepth Type


`integer`
* minimum value: `0`








#### xdm:adWidth
##### Ad Width

The number of horizontal pixels of the player, measured at runtime. This can be larger than the size of the ad if the player has extra controls or thumbnails.

`xdm:adWidth`
* is optional
* type: `integer`

##### xdm:adWidth Type


`integer`
* minimum value: `0`








#### xdm:implementationDetails
##### Viewabiltity Implementation Details

The name and version of the library instrumented to measure viewability metrics.

`xdm:implementationDetails`
* is optional
* type: reference

##### xdm:implementationDetails Type


* []() – `https://ns.adobe.com/xdm/context/implementationdetails`







#### xdm:measuredAdNotVisible

Indicator of ad not being visible as measured by a viewability library at impression time.

`xdm:measuredAdNotVisible`
* is optional
* type: reference

##### xdm:measuredAdNotVisible Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:measuredMuted

Indicator of ad being muted as measured by a viewability library at impression time.

`xdm:measuredMuted`
* is optional
* type: reference

##### xdm:measuredMuted Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:measuredWindowInactive

Indicator of ad being displayed in an inactive window as measured by a viewability library at impression time.

`xdm:measuredWindowInactive`
* is optional
* type: reference

##### xdm:measuredWindowInactive Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:measurementEligible
##### Viewability Measurement Eligible

Whether or not the ad was eligible to viewability measurement. An ad is eligible if the unit has a supported creative format and tag type.

`xdm:measurementEligible`
* is optional
* type: `boolean`

##### xdm:measurementEligible Type


`boolean`







#### xdm:percentViewable
##### Percent Viewable

Percent of pixels in the ad deemed viewable at measurement time.

`xdm:percentViewable`
* is optional
* type: `integer`

##### xdm:percentViewable Type


`integer`
* minimum value: `0`
* maximum value: `100`







#### xdm:playerVolume
##### Player Volume Percentage

The player volume percentage, measured at runtime where 0 is muted and 100 is maximum volume.

`xdm:playerVolume`
* is optional
* type: `integer`

##### xdm:playerVolume Type


`integer`
* minimum value: `0`
* maximum value: `100`







#### xdm:unmeasurableIframe

Indicator of viewability library not being able to properly execute measurements due to ad being displayed inside an iframe.

`xdm:unmeasurableIframe`
* is optional
* type: reference

##### xdm:unmeasurableIframe Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:unmeasurableOther

Indicator of viewability library not being able to properly execute measurements due to non-predefined error.

`xdm:unmeasurableOther`
* is optional
* type: reference

##### xdm:unmeasurableOther Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:viewabilityEligibleImpressions

Impression(s) of an advertisement to an end-user with viewablility library instrumented.

`xdm:viewabilityEligibleImpressions`
* is optional
* type: reference

##### xdm:viewabilityEligibleImpressions Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:viewable
##### Viewable Ad

Display ads are considered viewable when at least 50% of the ad is visible for at least 1 second. Video ads are considered viewable when at least 50% of the ad is visible while the video is playing for at least 2 consecutive seconds. All viewable ads are measurable, because you can't confirm that an ad has met the criteria for viewability unless it can be measured.

`xdm:viewable`
* is optional
* type: `boolean`

##### xdm:viewable Type


`boolean`







#### xdm:viewableCompletes

Completion(s) of an advertisement to an end-user deemed viewable at completion time by a viewability library.

`xdm:viewableCompletes`
* is optional
* type: reference

##### xdm:viewableCompletes Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:viewableFirstQuartiles

First quartile(s) of an advertisement to an end-user deemed viewable at first quartile of play by a viewability library.

`xdm:viewableFirstQuartiles`
* is optional
* type: reference

##### xdm:viewableFirstQuartiles Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:viewableImpressions

Impressions of an advertisement to an end-user deemed viewable after two seconds of play by a viewability library.

`xdm:viewableImpressions`
* is optional
* type: reference

##### xdm:viewableImpressions Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:viewableMidpoints

Midpoint(s) of an advertisement to an end-user deemed viewable at midpoint of play by a viewability library.

`xdm:viewableMidpoints`
* is optional
* type: reference

##### xdm:viewableMidpoints Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:viewableThirdQuartiles

Third quartile(s) of an advertisement to an end-user deemed viewable at third quartile of play by a viewability library.

`xdm:viewableThirdQuartiles`
* is optional
* type: reference

##### xdm:viewableThirdQuartiles Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:viewportHeight
##### Viewport Height

The vertical size (in pixels) of the window the experience was displayed inside measured at runtime. For a web view event, the browser viewport height.

`xdm:viewportHeight`
* is optional
* type: `integer`

##### xdm:viewportHeight Type


`integer`
* minimum value: `0`








#### xdm:viewportWidth
##### Viewport Width

The horizontal size (in pixels) of the window the experience was displayed inside measured at runtime. For a web view event, the browser viewport width.

`xdm:viewportWidth`
* is optional
* type: `integer`

##### xdm:viewportWidth Type


`integer`
* minimum value: `0`











## xdm:clicks

Click actions on an advertisement.

`xdm:clicks`
* is optional
* type: Measure
* defined in this schema

### xdm:clicks Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:completes
### Ad completes

Indicates if a timed media asset was watched to completion but doesn't necessarily mean the end-user watched the whole video as the they could have skipped ahead.

`xdm:completes`
* is optional
* type: Measure
* defined in this schema

### xdm:completes Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:conversions

A customer pre-defined action or actions which triggers an event for performance evaluation.

`xdm:conversions`
* is optional
* type: Measure
* defined in this schema

### xdm:conversions Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:downloadedPlayback
### Ad downloaded flag

Set to true when the hit is generated due to playing a downloaded ad session.

`xdm:downloadedPlayback`
* is optional
* type: `boolean`
* defined in this schema

### xdm:downloadedPlayback Type


`boolean`





## xdm:federated
### Ad federated

Indicates if an experience event was created through data federation such as data sharing between customers.

`xdm:federated`
* is optional
* type: Measure
* defined in this schema

### xdm:federated Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:firstQuartiles

A digital video ad that has played through 25% of its duration at normal speed.

`xdm:firstQuartiles`
* is optional
* type: Measure
* defined in this schema

### xdm:firstQuartiles Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:impressions

Impression of an advertisement to a end-user with the potential of being viewed.

`xdm:impressions`
* is optional
* type: Measure
* defined in this schema

### xdm:impressions Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:midpoints

A digital video ad has played through 50% of its duration at normal speed.

`xdm:midpoints`
* is optional
* type: Measure
* defined in this schema

### xdm:midpoints Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:starts
### Ad starts

A digital video ad has started playing.

`xdm:starts`
* is optional
* type: Measure
* defined in this schema

### xdm:starts Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:thirdQuartiles

A digital video ad has played through 75% of its duration at normal speed.

`xdm:thirdQuartiles`
* is optional
* type: Measure
* defined in this schema

### xdm:thirdQuartiles Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:timePlayed
### Ad time spent

Describes the amount of time spent by an end-user on a specific timed media asset.

`xdm:timePlayed`
* is optional
* type: Measure
* defined in this schema

### xdm:timePlayed Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




