
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
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/adviewability.schema.json](context/adviewability.schema.json) |
## Schema Hierarchy

* MRC Viewability `https://ns.adobe.com/xdm/context/adviewability`
  * [Implementation Details](implementationdetails.schema.md) `https://ns.adobe.com/xdm/context/implementationdetails`


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
    "xdm:name": "https://ns.adobe.com/xdm/context/viewability-details",
    "xdm:version": "1"
  },
  "xdm:viewable": true,
  "xdm:activeWindow": true,
  "xdm:percentViewable": 89
}
```

# MRC Viewability Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:activeWindow](#xdmactivewindow) | `boolean` | Optional | MRC Viewability (this schema) |
| [xdm:adHeight](#xdmadheight) | `integer` | Optional | MRC Viewability (this schema) |
| [xdm:adUnitDepth](#xdmadunitdepth) | `integer` | Optional | MRC Viewability (this schema) |
| [xdm:adWidth](#xdmadwidth) | `integer` | Optional | MRC Viewability (this schema) |
| [xdm:implementationDetails](#xdmimplementationdetails) | Implementation Details | Optional | MRC Viewability (this schema) |
| [xdm:measurementEligible](#xdmmeasurementeligible) | `boolean` | Optional | MRC Viewability (this schema) |
| [xdm:percentViewable](#xdmpercentviewable) | `integer` | Optional | MRC Viewability (this schema) |
| [xdm:playerVolume](#xdmplayervolume) | `integer` | Optional | MRC Viewability (this schema) |
| [xdm:viewable](#xdmviewable) | `boolean` | Optional | MRC Viewability (this schema) |
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
### Viewabiltity implementation details

The name and version of the library instrumented to measure viewability metrics.

`xdm:implementationDetails`
* is optional
* type: Implementation Details
* defined in this schema

### xdm:implementationDetails Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|






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





## xdm:viewable
### Viewable Ad

Display ads are considered viewable when at least 50% of the ad is visible for at least 1 second. Video ads are considered viewable when at least 50% of the ad is visible while the video is playing for at least 2 consecutive seconds. All viewable ads are measurable, because you can't confirm that an ad has met the criteria for viewability unless it can be measured.

`xdm:viewable`
* is optional
* type: `boolean`
* defined in this schema

### xdm:viewable Type


`boolean`





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





