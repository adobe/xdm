
# Timed media quality of experience Schema

```
https://ns.adobe.com/xdm/context/media-timed-qoe
```

Timed media properties related to the content playback's quality of experience (QoE).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/media-timed-qoe.schema.json](datatypes/media-timed-qoe.schema.json) |
## Schema Hierarchy

* Timed media quality of experience `https://ns.adobe.com/xdm/context/media-timed-qoe`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Measure](data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Timed media quality of experience Example
```json
{
  "xdm:errors": {
    "xdm:value": 0
  },
  "xdm:errorImpactedStreams": {
    "xdm:value": 0
  },
  "xdm:buffers": {
    "xdm:value": 4
  },
  "xdm:bufferTime": {
    "xdm:value": 5
  },
  "xdm:bufferImpactedStreams": {
    "xdm:value": 2
  },
  "xdm:stalls": {
    "xdm:value": 0
  },
  "xdm:stallTime": {
    "xdm:value": 0
  },
  "xdm:stallingImpactedStreams": {
    "xdm:value": 0
  },
  "xdm:bitrateChanges": {
    "xdm:value": 0
  },
  "xdm:bitrateChangeImpactedStreams": {
    "xdm:value": 0
  },
  "xdm:bitrateAverage": {
    "xdm:value": 320
  },
  "xdm:bitrateAverageBucket": "800-899",
  "xdm:droppedFrames": {
    "xdm:value": 2
  },
  "xdm:droppedFrameImpactedStreams": {
    "xdm:value": 2
  },
  "xdm:timeToStart": {
    "xdm:value": 3
  },
  "xdm:mediaSdkErrors": [
    "300",
    "500.300.200"
  ],
  "xdm:playerSdkErrors": [
    "custom.error.code"
  ],
  "xdm:externalSdkErrors": [
    "100-5",
    "11.12"
  ]
}
```

# Timed media quality of experience Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:bitrateAverage](#xdmbitrateaverage) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:bitrateAverageBucket](#xdmbitrateaveragebucket) | `string` | Optional | Timed media quality of experience (this schema) |
| [xdm:bitrateChangeImpactedStreams](#xdmbitratechangeimpactedstreams) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:bitrateChanges](#xdmbitratechanges) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:bufferImpactedStreams](#xdmbufferimpactedstreams) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:bufferTime](#xdmbuffertime) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:buffers](#xdmbuffers) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:dropBeforeStarts](#xdmdropbeforestarts) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:droppedFrameImpactedStreams](#xdmdroppedframeimpactedstreams) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:droppedFrames](#xdmdroppedframes) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:errorImpactedStreams](#xdmerrorimpactedstreams) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:errors](#xdmerrors) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:externalSdkErrors](#xdmexternalsdkerrors) | `string[]` | Optional | Timed media quality of experience (this schema) |
| [xdm:mediaSdkErrors](#xdmmediasdkerrors) | `string[]` | Optional | Timed media quality of experience (this schema) |
| [xdm:playerSdkErrors](#xdmplayersdkerrors) | `string[]` | Optional | Timed media quality of experience (this schema) |
| [xdm:stallTime](#xdmstalltime) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:stallingImpactedStreams](#xdmstallingimpactedstreams) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:stalls](#xdmstalls) | Measure | Optional | Timed media quality of experience (this schema) |
| [xdm:timeToStart](#xdmtimetostart) | Measure | Optional | Timed media quality of experience (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:bitrateAverage
### Average bitrate

A weighted average of all bitrate values related to the play duration that occurred during a playback session.

`xdm:bitrateAverage`
* is optional
* type: Measure
* defined in this schema

### xdm:bitrateAverage Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:bitrateAverageBucket
### Average bitrate bucket

The average bitrate (in kbps). The value is predefined buckets at 100kbps intervals.

`xdm:bitrateAverageBucket`
* is optional
* type: `string`
* defined in this schema

### xdm:bitrateAverageBucket Type


`string`






## xdm:bitrateChangeImpactedStreams
### Bitrate change impacted streams

The number of streams in which bitrate changes occurred.

`xdm:bitrateChangeImpactedStreams`
* is optional
* type: Measure
* defined in this schema

### xdm:bitrateChangeImpactedStreams Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:bitrateChanges
### Bitrate changes

The number of bitrate change events that occurred during a playback session.

`xdm:bitrateChanges`
* is optional
* type: Measure
* defined in this schema

### xdm:bitrateChanges Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:bufferImpactedStreams
### Buffer impacted streams

The number of streams impacted by buffering.

`xdm:bufferImpactedStreams`
* is optional
* type: Measure
* defined in this schema

### xdm:bufferImpactedStreams Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:bufferTime
### Total buffer duration

Describes the total amount of time in seconds, spent buffering.

`xdm:bufferTime`
* is optional
* type: Measure
* defined in this schema

### xdm:bufferTime Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:buffers
### Buffer events

The number of buffer states that occurred during a playback session.

`xdm:buffers`
* is optional
* type: Measure
* defined in this schema

### xdm:buffers Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:dropBeforeStarts
### Drops before starts

Indicates the user abandoned the media stream before the first frame for example, during the pre-roll ad break, or due to an error while loading the content from the CDN.

`xdm:dropBeforeStarts`
* is optional
* type: Measure
* defined in this schema

### xdm:dropBeforeStarts Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:droppedFrameImpactedStreams
### Dropped frame impacted streams

The number of streams in which frames were dropped.

`xdm:droppedFrameImpactedStreams`
* is optional
* type: Measure
* defined in this schema

### xdm:droppedFrameImpactedStreams Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:droppedFrames
### Dropped frames

The number of frames dropped during playback of the main content.

`xdm:droppedFrames`
* is optional
* type: Measure
* defined in this schema

### xdm:droppedFrames Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:errorImpactedStreams
### Error impacted streams

The number of streams in which an error event occurred.

`xdm:errorImpactedStreams`
* is optional
* type: Measure
* defined in this schema

### xdm:errorImpactedStreams Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:errors
### Errors

The number of errors that were encountered during playback.

`xdm:errors`
* is optional
* type: Measure
* defined in this schema

### xdm:errors Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:externalSdkErrors
### External Error IDs

The error IDs encountered during a playback session that originated outside the Player or SDK.

`xdm:externalSdkErrors`
* is optional
* type: `string[]`

* defined in this schema

### xdm:externalSdkErrors Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:mediaSdkErrors
### Media SDK Error IDs

The error IDs encountered during a playback session that originated in the Media SDK.

`xdm:mediaSdkErrors`
* is optional
* type: `string[]`

* defined in this schema

### xdm:mediaSdkErrors Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:playerSdkErrors
### Player SDK Error IDs

The error IDs encountered during a playback session that originated in the Player.

`xdm:playerSdkErrors`
* is optional
* type: `string[]`

* defined in this schema

### xdm:playerSdkErrors Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:stallTime
### Total stalling duration

Describes the duration in seconds in which the playback was stalled during playback.

`xdm:stallTime`
* is optional
* type: Measure
* defined in this schema

### xdm:stallTime Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:stallingImpactedStreams
### Stalling impacted streams

The number of streams impacted by stalling.

`xdm:stallingImpactedStreams`
* is optional
* type: Measure
* defined in this schema

### xdm:stallingImpactedStreams Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:stalls
### Stalling events

The number of stall states that occurred during a playback session.

`xdm:stalls`
* is optional
* type: Measure
* defined in this schema

### xdm:stalls Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:timeToStart
### Time to start

Describes the duration (in seconds) passed between video load and start.

`xdm:timeToStart`
* is optional
* type: Measure
* defined in this schema

### xdm:timeToStart Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




