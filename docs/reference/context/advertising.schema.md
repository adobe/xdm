
# Advertising Schema

```
https://ns.adobe.com/xdm/context/advertising
```

The information related to advertising activity related to the experience event

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/advertising.schema.json](context/advertising.schema.json) |
## Schema Hierarchy

* Advertising `https://ns.adobe.com/xdm/context/advertising`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [MRC Viewability](adviewability.schema.md) `https://ns.adobe.com/xdm/context/adviewability`
  * [Ad Asset Reference](advertising-timed-asset-reference.schema.md) `https://ns.adobe.com/xdm/context/advertising-timed-asset-reference`
  * [Ad Asset View Details](advertising-timed-asset-view-details.schema.md) `https://ns.adobe.com/xdm/context/advertising-timed-asset-view-details`
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
  "xdm:firstQuartiles": {
    "xdm:value": 1
  }
}
```

# Advertising Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:adAssetReference](#xdmadassetreference) | Ad Asset Reference | Optional | Advertising (this schema) |
| [xdm:adAssetViewDetails](#xdmadassetviewdetails) | Ad Asset View Details | Optional | Advertising (this schema) |
| [xdm:adViewability](#xdmadviewability) | MRC Viewability | Optional | Advertising (this schema) |
| [xdm:clicks](#xdmclicks) | Measure | Optional | Advertising (this schema) |
| [xdm:completes](#xdmcompletes) | Measure | Optional | Advertising (this schema) |
| [xdm:conversions](#xdmconversions) | Measure | Optional | Advertising (this schema) |
| [xdm:federated](#xdmfederated) | Measure | Optional | Advertising (this schema) |
| [xdm:firstQuartiles](#xdmfirstquartiles) | Measure | Optional | Advertising (this schema) |
| [xdm:impressions](#xdmimpressions) | Measure | Optional | Advertising (this schema) |
| [xdm:midpoints](#xdmmidpoints) | Measure | Optional | Advertising (this schema) |
| [xdm:starts](#xdmstarts) | Measure | Optional | Advertising (this schema) |
| [xdm:thirdQuartiles](#xdmthirdquartiles) | Measure | Optional | Advertising (this schema) |
| [xdm:timePlayed](#xdmtimeplayed) | Measure | Optional | Advertising (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:adAssetReference
### Ad Asset Reference

Asset information about the ad captured by the experience event.

`xdm:adAssetReference`
* is optional
* type: Ad Asset Reference
* defined in this schema

### xdm:adAssetReference Type


* [Ad Asset Reference](advertising-timed-asset-reference.schema.md) – `https://ns.adobe.com/xdm/context/advertising-timed-asset-reference`





## xdm:adAssetViewDetails
### Ad Asset View Details

View details for the ad playback captured by the experience event.

`xdm:adAssetViewDetails`
* is optional
* type: Ad Asset View Details
* defined in this schema

### xdm:adAssetViewDetails Type


* [Ad Asset View Details](advertising-timed-asset-view-details.schema.md) – `https://ns.adobe.com/xdm/context/advertising-timed-asset-view-details`





## xdm:adViewability
### MRC Viewability

The runtime measured viewability specific details such as player volume, library version, window status, viewport/ad measured dimensions, etc.

`xdm:adViewability`
* is optional
* type: MRC Viewability
* defined in this schema

### xdm:adViewability Type


* [MRC Viewability](adviewability.schema.md) – `https://ns.adobe.com/xdm/context/adviewability`





## xdm:clicks

Click(s) actions on an advertisement.

`xdm:clicks`
* is optional
* type: Measure
* defined in this schema

### xdm:clicks Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:completes
### Completes

Indicates if a timed media asset was watched to completion - this does not necessarily mean the viewer watched the whole video; viewer could have skipped ahead.

`xdm:completes`
* is optional
* type: Measure
* defined in this schema

### xdm:completes Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:conversions

A customer pre-defined action(s) which triggers an event for performance evaluation.

`xdm:conversions`
* is optional
* type: Measure
* defined in this schema

### xdm:conversions Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:federated
### Federated

Indicates if an experience event was created through data federation (data sharing between customers).

`xdm:federated`
* is optional
* type: Measure
* defined in this schema

### xdm:federated Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:firstQuartiles

A digital video ad has played through 25% of its duration at normal speed.

`xdm:firstQuartiles`
* is optional
* type: Measure
* defined in this schema

### xdm:firstQuartiles Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:impressions

Impression(s) of an advertisement to an end user with the potential of being viewed.

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
### Time Spent

Describes the amount of time spent by a user on a specific timed media asset.

`xdm:timePlayed`
* is optional
* type: Measure
* defined in this schema

### xdm:timePlayed Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




