
# MRC Viewability Schema

```
https://ns.adobe.com/xdm/context/adviewability
```

Browser environment measured at runtime describing the viewability of an advertisement or content associated with each page load.

According to [IAB/MRC definition](https://www.iab.com/wp-content/uploads/2015/06/MRC-Viewable-Ad-Impression-Measurement-Guideline.pdf) of Viewable Browser Space is defined as: 

> Advertisements and content associated with each
page load can appear either within or outside the viewable space of the browser
on a user’s screen—i.e., that part of the page within the browser that a user can
see. This is similar to the concepts once referred to as “Above the Fold” (i.e.,
within the viewable browser space) and “Below the Fold” (i.e., outside the
viewable browser space). The “fold” was traditionally considered to be where the
initially-loaded viewable space of the page ends – so advertisements and content
above the fold were considered likely to be viewable upon load, and for content
below the fold, it was considered necessary to scroll to in order for that content to
be viewable. In reality, the location of the fold, and consequently the viewable
status of advertising and content, is variable based on the browser settings of the
user (resolution, font size, window size, etc.) and there are generally four
locations (top, bottom, left and right sides) where advertising and content may be
cut-off from being viewable based on user actions and settings. Upon initial page
load, advertising or content placed at the top and left side of the page is most 
likely to be viewable, however this can change if content or ads are obscured by
overlays or with further user action (scrolling) coupled with latency; therefore,
placement and viewable status are separate attributes to be assessed.

Viewability details are always measured fields during runtime.

>Note regarding the applicability of these guidelines for mobile viewable ad
 impression measurement: While these viewability guidelines are primarily
 designed for desktop browser-based advertising rather than mobile advertising,
 the following points should be noted: 1) measurers of viewability of mobile
 browser-based web ads are encouraged to consider these guidelines in
 measurements until such time as guidance specifically designed for the
 measurement of viewability in mobile web based ads is created; and 2) as noted
 in the [Mobile Application Advertising Measurement Guidelines issued by IAB,
 MMA and MRC in July 2013](http://www.iab.net/inappguidelines), ad impressions
 served in an in-application environment are currently generally assumed to be
 viewable.





| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/adviewability.schema.json](context/adviewability.schema.json) |
## Schema Hierarchy

* MRC Viewability `https://ns.adobe.com/xdm/context/adviewability`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Implementation details](implementationdetails.schema.md) `https://ns.adobe.com/xdm/context/implementationdetails`
  * [Measure](../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## MRC Viewability Example
```json
{
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
  "xdm:viewableImpressions": {
    "xdm:value": 1
  }
}
```

# MRC Viewability Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:activeWindow](#xdmactivewindow) | `boolean` | Optional | MRC Viewability (this schema) |
| [xdm:adHeight](#xdmadheight) | `integer` | Optional | MRC Viewability (this schema) |
| [xdm:adUnitDepth](#xdmadunitdepth) | `integer` | Optional | MRC Viewability (this schema) |
| [xdm:adWidth](#xdmadwidth) | `integer` | Optional | MRC Viewability (this schema) |
| [xdm:implementationDetails](#xdmimplementationdetails) | Implementation details | Optional | MRC Viewability (this schema) |
| [xdm:measuredAdNotVisible](#xdmmeasuredadnotvisible) | Measure | Optional | MRC Viewability (this schema) |
| [xdm:measuredMuted](#xdmmeasuredmuted) | Measure | Optional | MRC Viewability (this schema) |
| [xdm:measuredWindowInactive](#xdmmeasuredwindowinactive) | Measure | Optional | MRC Viewability (this schema) |
| [xdm:measurementEligible](#xdmmeasurementeligible) | `boolean` | Optional | MRC Viewability (this schema) |
| [xdm:percentViewable](#xdmpercentviewable) | `integer` | Optional | MRC Viewability (this schema) |
| [xdm:playerVolume](#xdmplayervolume) | `integer` | Optional | MRC Viewability (this schema) |
| [xdm:unmeasurableIframe](#xdmunmeasurableiframe) | Measure | Optional | MRC Viewability (this schema) |
| [xdm:unmeasurableOther](#xdmunmeasurableother) | Measure | Optional | MRC Viewability (this schema) |
| [xdm:viewabilityEligibleImpressions](#xdmviewabilityeligibleimpressions) | Measure | Optional | MRC Viewability (this schema) |
| [xdm:viewable](#xdmviewable) | `boolean` | Optional | MRC Viewability (this schema) |
| [xdm:viewableCompletes](#xdmviewablecompletes) | Measure | Optional | MRC Viewability (this schema) |
| [xdm:viewableFirstQuartiles](#xdmviewablefirstquartiles) | Measure | Optional | MRC Viewability (this schema) |
| [xdm:viewableImpressions](#xdmviewableimpressions) | Measure | Optional | MRC Viewability (this schema) |
| [xdm:viewableMidpoints](#xdmviewablemidpoints) | Measure | Optional | MRC Viewability (this schema) |
| [xdm:viewableThirdQuartiles](#xdmviewablethirdquartiles) | Measure | Optional | MRC Viewability (this schema) |
| [xdm:viewportHeight](#xdmviewportheight) | `integer` | Optional | MRC Viewability (this schema) |
| [xdm:viewportWidth](#xdmviewportwidth) | `integer` | Optional | MRC Viewability (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:activeWindow
### Active Window

Indicates whether ad was shown on active window on users' device.

`xdm:activeWindow`
* is optional
* type: `boolean`
* defined in this schema

### xdm:activeWindow Type


`boolean`





## xdm:adHeight
### Ad Height

The number of vertical pixels of the player, measured at runtime. This can be larger than the size of the ad if the player has extra controls or thumbnails.

`xdm:adHeight`
* is optional
* type: `integer`
* defined in this schema

### xdm:adHeight Type


`integer`
* minimum value: `0`






## xdm:adUnitDepth
### Ad Unit Depth

Publishers may embed ad units inside containers/iFrames in order limit the ad's access solely to the code of the page. This describes how many 'containers' or iFrames the ad unit is displayed inside of.

`xdm:adUnitDepth`
* is optional
* type: `integer`
* defined in this schema

### xdm:adUnitDepth Type


`integer`
* minimum value: `0`






## xdm:adWidth
### Ad Width

The number of horizontal pixels of the player, measured at runtime. This can be larger than the size of the ad if the player has extra controls or thumbnails.

`xdm:adWidth`
* is optional
* type: `integer`
* defined in this schema

### xdm:adWidth Type


`integer`
* minimum value: `0`






## xdm:implementationDetails
### Viewabiltity Implementation Details

The name and version of the library instrumented to measure viewability metrics.

`xdm:implementationDetails`
* is optional
* type: Implementation details
* defined in this schema

### xdm:implementationDetails Type


* [Implementation details](implementationdetails.schema.md) – `https://ns.adobe.com/xdm/context/implementationdetails`





## xdm:measuredAdNotVisible

Indicator of ad not being visible as measured by a viewability library at impression time.

`xdm:measuredAdNotVisible`
* is optional
* type: Measure
* defined in this schema

### xdm:measuredAdNotVisible Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:measuredMuted

Indicator of ad being muted as measured by a viewability library at impression time.

`xdm:measuredMuted`
* is optional
* type: Measure
* defined in this schema

### xdm:measuredMuted Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:measuredWindowInactive

Indicator of ad being displayed in an inactive window as measured by a viewability library at impression time.

`xdm:measuredWindowInactive`
* is optional
* type: Measure
* defined in this schema

### xdm:measuredWindowInactive Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:measurementEligible
### Viewability Measurement Eligible

Whether or not the ad was eligible to viewability measurement. An ad is eligible if the unit has a supported creative format and tag type.

`xdm:measurementEligible`
* is optional
* type: `boolean`
* defined in this schema

### xdm:measurementEligible Type


`boolean`





## xdm:percentViewable
### Percent Viewable

Percent of pixels in the ad deemed viewable at measurement time.

`xdm:percentViewable`
* is optional
* type: `integer`
* defined in this schema

### xdm:percentViewable Type


`integer`
* minimum value: `0`
* maximum value: `100`





## xdm:playerVolume
### Player Volume Percentage

The player volume percentage, measured at runtime where 0 is muted and 100 is maximum volume.

`xdm:playerVolume`
* is optional
* type: `integer`
* defined in this schema

### xdm:playerVolume Type


`integer`
* minimum value: `0`
* maximum value: `100`





## xdm:unmeasurableIframe

Indicator of viewability library not being able to properly execute measurements due to ad being displayed inside an iframe.

`xdm:unmeasurableIframe`
* is optional
* type: Measure
* defined in this schema

### xdm:unmeasurableIframe Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:unmeasurableOther

Indicator of viewability library not being able to properly execute measurements due to non-predefined error.

`xdm:unmeasurableOther`
* is optional
* type: Measure
* defined in this schema

### xdm:unmeasurableOther Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:viewabilityEligibleImpressions

Impression(s) of an advertisement to an end-user with viewablility library instrumented.

`xdm:viewabilityEligibleImpressions`
* is optional
* type: Measure
* defined in this schema

### xdm:viewabilityEligibleImpressions Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:viewable
### Viewable Ad

Display ads are considered viewable when at least 50% of the ad is visible for at least 1 second. Video ads are considered viewable when at least 50% of the ad is visible while the video is playing for at least 2 consecutive seconds. All viewable ads are measurable, because you can't confirm that an ad has met the criteria for viewability unless it can be measured.

`xdm:viewable`
* is optional
* type: `boolean`
* defined in this schema

### xdm:viewable Type


`boolean`





## xdm:viewableCompletes

Completion(s) of an advertisement to an end-user deemed viewable at completion time by a viewability library.

`xdm:viewableCompletes`
* is optional
* type: Measure
* defined in this schema

### xdm:viewableCompletes Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:viewableFirstQuartiles

First quartile(s) of an advertisement to an end-user deemed viewable at first quartile of play by a viewability library.

`xdm:viewableFirstQuartiles`
* is optional
* type: Measure
* defined in this schema

### xdm:viewableFirstQuartiles Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:viewableImpressions

Impressions of an advertisement to an end-user deemed viewable after two seconds of play by a viewability library.

`xdm:viewableImpressions`
* is optional
* type: Measure
* defined in this schema

### xdm:viewableImpressions Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:viewableMidpoints

Midpoint(s) of an advertisement to an end-user deemed viewable at midpoint of play by a viewability library.

`xdm:viewableMidpoints`
* is optional
* type: Measure
* defined in this schema

### xdm:viewableMidpoints Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:viewableThirdQuartiles

Third quartile(s) of an advertisement to an end-user deemed viewable at third quartile of play by a viewability library.

`xdm:viewableThirdQuartiles`
* is optional
* type: Measure
* defined in this schema

### xdm:viewableThirdQuartiles Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:viewportHeight
### Viewport Height

The vertical size (in pixels) of the window the experience was displayed inside measured at runtime. For a web view event, the browser viewport height.

`xdm:viewportHeight`
* is optional
* type: `integer`
* defined in this schema

### xdm:viewportHeight Type


`integer`
* minimum value: `0`






## xdm:viewportWidth
### Viewport Width

The horizontal size (in pixels) of the window the experience was displayed inside measured at runtime. For a web view event, the browser viewport width.

`xdm:viewportWidth`
* is optional
* type: `integer`
* defined in this schema

### xdm:viewportWidth Type


`integer`
* minimum value: `0`





