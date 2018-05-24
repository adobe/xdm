
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
  * [MRC Viewability](adviewability.schema.md) `https://ns.adobe.com/xdm/context/adviewability`
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
| [xdm:adViewability](#xdmadviewability) | MRC Viewability | Optional | Advertising (this schema) |
| [xdm:clicks](#xdmclicks) | Measure | Optional | Advertising (this schema) |
| [xdm:completes](#xdmcompletes) | Measure | Optional | Advertising (this schema) |
| [xdm:conversions](#xdmconversions) | Measure | Optional | Advertising (this schema) |
| [xdm:firstQuartiles](#xdmfirstquartiles) | Measure | Optional | Advertising (this schema) |
| [xdm:impressions](#xdmimpressions) | Measure | Optional | Advertising (this schema) |
| [xdm:midpoints](#xdmmidpoints) | Measure | Optional | Advertising (this schema) |
| [xdm:starts](#xdmstarts) | Measure | Optional | Advertising (this schema) |
| [xdm:thirdQuartiles](#xdmthirdquartiles) | Measure | Optional | Advertising (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

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

A digital video ad has played through it's entirety.

`xdm:completes`
* is optional
* type: Measure
* defined in this schema

### xdm:completes Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:conversions

A pre-defined action on a website triggered a conversion event to be fired

`xdm:conversions`
* is optional
* type: Measure
* defined in this schema

### xdm:conversions Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:firstQuartiles

A digital video ad has played through 25% of it's duration at normal speed.

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

A digital video ad has played through 50% of it's duration at normal speed.

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

A digital video ad has played through 75% of it's duration at normal speed.

`xdm:thirdQuartiles`
* is optional
* type: Measure
* defined in this schema

### xdm:thirdQuartiles Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




