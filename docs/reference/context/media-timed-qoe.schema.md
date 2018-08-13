
# Timed Media Quality of Experience Schema

```
https://ns.adobe.com/xdm/context/media-timed-qoe
```

Timed media properties related to the content playback's quality of experience (QoE).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/media-timed-qoe.schema.json](context/media-timed-qoe.schema.json) |
## Schema Hierarchy

* Timed Media Quality of Experience `https://ns.adobe.com/xdm/context/media-timed-qoe`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Measure](../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Timed Media Quality of Experience Example
```json
{
  "xdm:errors": {
    "xdm:value": 0
  },
  "xdm:buffers": {
    "xdm:value": 4
  },
  "xdm:bufferTime": {
    "xdm:value": 5
  },
  "xdm:stalls": {
    "xdm:value": 0
  },
  "xdm:stallTime": {
    "xdm:value": 0
  },
  "xdm:bitrateChanges": {
    "xdm:value": 0
  },
  "xdm:bitrateAverage": {
    "xdm:value": 320
  },
  "xdm:droppedFrames": {
    "xdm:value": 2
  },
  "xdm:timeToStart": {
    "xdm:value": 3
  }
}
```

# Timed Media Quality of Experience Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:bitrateAverage](#xdmbitrateaverage) | Measure | Optional | Timed Media Quality of Experience (this schema) |
| [xdm:bitrateChanges](#xdmbitratechanges) | Measure | Optional | Timed Media Quality of Experience (this schema) |
| [xdm:bufferTime](#xdmbuffertime) | Measure | Optional | Timed Media Quality of Experience (this schema) |
| [xdm:buffers](#xdmbuffers) | Measure | Optional | Timed Media Quality of Experience (this schema) |
| [xdm:droppedFrames](#xdmdroppedframes) | Measure | Optional | Timed Media Quality of Experience (this schema) |
| [xdm:errors](#xdmerrors) | Measure | Optional | Timed Media Quality of Experience (this schema) |
| [xdm:stallTime](#xdmstalltime) | Measure | Optional | Timed Media Quality of Experience (this schema) |
| [xdm:stalls](#xdmstalls) | Measure | Optional | Timed Media Quality of Experience (this schema) |
| [xdm:timeToStart](#xdmtimetostart) | Measure | Optional | Timed Media Quality of Experience (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:bitrateAverage
### Average Bitrate

A weighted average of all bitrate values related to the play duration that occurred during a playback session.

`xdm:bitrateAverage`
* is optional
* type: Measure
* defined in this schema

### xdm:bitrateAverage Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:bitrateChanges
### Bitrate Changes

The number of bitrate change events that occurred during a playback session.

`xdm:bitrateChanges`
* is optional
* type: Measure
* defined in this schema

### xdm:bitrateChanges Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:bufferTime
### Total Buffer Duration

Describes the total amount of time (in seconds) spent buffering.

`xdm:bufferTime`
* is optional
* type: Measure
* defined in this schema

### xdm:bufferTime Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:buffers
### Buffers

The number of buffer states that occurred during a playback session.

`xdm:buffers`
* is optional
* type: Measure
* defined in this schema

### xdm:buffers Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:droppedFrames
### Dropped Frames

The number of frames dropped during playback of the main content.

`xdm:droppedFrames`
* is optional
* type: Measure
* defined in this schema

### xdm:droppedFrames Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:errors
### Errors

The number of errors that were encountered during playback.

`xdm:errors`
* is optional
* type: Measure
* defined in this schema

### xdm:errors Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:stallTime
### Total Stalling Duration

Describes the duration (in seconds) in which the playback was stalled during playback.

`xdm:stallTime`
* is optional
* type: Measure
* defined in this schema

### xdm:stallTime Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:stalls
### Stalls

The number of stall states that occurred during a playback session.

`xdm:stalls`
* is optional
* type: Measure
* defined in this schema

### xdm:stalls Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:timeToStart
### Time to Start

Describes the duration (in seconds) passed between video load and start.

`xdm:timeToStart`
* is optional
* type: Measure
* defined in this schema

### xdm:timeToStart Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




