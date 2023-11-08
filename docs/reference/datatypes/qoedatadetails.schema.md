
# Qoe Data details information Schema

```
https://ns.adobe.com/xdm/datatypes/qoeDataDetails
```

Qoe Data details information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/qoedatadetails.schema.json](datatypes/qoedatadetails.schema.json) |

## Qoe Data details information Example
```json
{
  "xdm:bitrateAverageBucket": "800-899"
}
```

# Qoe Data details information Properties

| Property | Type       | Required | Defined by |
|----------|------------|----------|------------|
| [xdm:bitrate](#xdmbitrate) | `integer`  | Optional | Qoe Data details information (this schema) |
| [xdm:bitrateAverage](#xdmbitrateaverage) | `number`   | Optional | Qoe Data details information (this schema) |
| [xdm:bitrateAverageBucket](#xdmbitrateaveragebucket) | `string`   | Optional | Qoe Data details information (this schema) |
| [xdm:bitrateChangeCount](#xdmbitratechangecount) | `integer`  | Optional | Qoe Data details information (this schema) |
| [xdm:bufferCount](#xdmbuffercount) | `integer`  | Optional | Qoe Data details information (this schema) |
| [xdm:bufferTime](#xdmbuffertime) | `integer`  | Optional | Qoe Data details information (this schema) |
| [xdm:droppedFrameCount](#xdmdroppedframecount) | `integer`  | Optional | Qoe Data details information (this schema) |
| [xdm:droppedFrames](#xdmdroppedframes) | `integer`  | Optional | Qoe Data details information (this schema) |
| [xdm:errorCount](#xdmerrorcount) | `integer`  | Optional | Qoe Data details information (this schema) |
| [xdm:externalErrors](#xdmexternalerrors) | `string[]` | Optional | Qoe Data details information (this schema) |
| [xdm:framesPerSecond](#xdmframespersecond) | `integer`  | Optional | Qoe Data details information (this schema) |
| [xdm:hasBitrateChangeImpactedStreams](#xdmhasbitratechangeimpactedstreams) | `boolean`  | Optional | Qoe Data details information (this schema) |
| [xdm:hasBufferImpactedStreams](#xdmhasbufferimpactedstreams) | `boolean`  | Optional | Qoe Data details information (this schema) |
| [xdm:hasDroppedFrameImpactedStreams](#xdmhasdroppedframeimpactedstreams) | `boolean`  | Optional | Qoe Data details information (this schema) |
| [xdm:hasErrorImpactedStreams](#xdmhaserrorimpactedstreams) | `boolean`  | Optional | Qoe Data details information (this schema) |
| [xdm:hasStallImpactedStreams](#xdmhasstallimpactedstreams) | `boolean`  | Optional | Qoe Data details information (this schema) |
| [xdm:isDroppedBeforeStart](#xdmisdroppedbeforestart) | `boolean`  | Optional | Qoe Data details information (this schema) |
| [xdm:mediaSdkErrors](#xdmmediasdkerrors) | `string[]` | Optional | Qoe Data details information (this schema) |
| [xdm:playerSdkErrors](#xdmplayersdkerrors) | `string[]` | Optional | Qoe Data details information (this schema) |
| [xdm:stallCount](#xdmstallcount) | `integer`  | Optional | Qoe Data details information (this schema) |
| [xdm:stallTime](#xdmstalltime) | `integer`  | Optional | Qoe Data details information (this schema) |
| [xdm:timeToStart](#xdmtimetostart) | `integer`  | Optional | Qoe Data details information (this schema) |
| `*` | any        | Additional | this schema *allows* additional properties |

## xdm:bitrate
### Bitrate

The bitrate value (in kbps).

`xdm:bitrate`
* is optional
* type: `integer`
* defined in this schema

### xdm:bitrate Type


`integer`






## xdm:bitrateAverage
### Average Bitrate

The average bitrate (in kbps, integer). This metric is computed as a weighted average of all bitrate values related to the play duration that occurred during a playback session.

`xdm:bitrateAverage`
* is optional
* type: `number`
* defined in this schema

### xdm:bitrateAverage Type


`number`






## xdm:bitrateAverageBucket
### Average Bitrate Bucket

The average bitrate (in kbps). The value is predefined buckets at 100kbps intervals. The Average Bitrate is computed as a weighted average of all bitrate values related to the play duration that occurred during a playback session.

`xdm:bitrateAverageBucket`
* is optional
* type: `string`
* defined in this schema

### xdm:bitrateAverageBucket Type


`string`






## xdm:bitrateChangeCount
### Bitrate Changes

The number of bitrate changes. This value is computed as a sum of all bitrate change events that occurred during a playback session.

`xdm:bitrateChangeCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:bitrateChangeCount Type


`integer`






## xdm:bufferCount
### Buffer Events

The number of buffer events. This metric is computed as a count of the different buffer states that occurred during a playback session. This is a count of how many times the player enters a buffer state from other states, e.g., playing or pausing.

`xdm:bufferCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:bufferCount Type


`integer`






## xdm:bufferTime
### Total Buffer Duration

The total amount of time, in seconds, spent buffering. This value is computed as a sum of all buffer events durations that occurred during a playback session.

`xdm:bufferTime`
* is optional
* type: `integer`
* defined in this schema

### xdm:bufferTime Type


`integer`






## xdm:droppedFrameCount
### Dropped Frames Reporting

The number of frames dropped during playback of the main content.

`xdm:droppedFrameCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:droppedFrameCount Type


`integer`






## xdm:droppedFrames
### Dropped Frames Collection

The number of frames dropped during playback of the main content.

`xdm:droppedFrames`
* is optional
* type: `integer`
* defined in this schema

### xdm:droppedFrames Type


`integer`






## xdm:errorCount
### Errors

The number of errors that occurred (Integer). This value is computed as a sum of all error events that occurred during a playback session.

`xdm:errorCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:errorCount Type


`integer`






## xdm:externalErrors
### External Error IDs

The unique error IDs from any external source, e.g., CDN errors. Customers must provide the error codes/ids at implementation time via provided error APIs.

`xdm:externalErrors`
* is optional
* type: `string[]`

* defined in this schema

### xdm:externalErrors Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:framesPerSecond
### Frames Per Second

The current value of the stream frame-rate (in frames per second). The field is mapped to the fps field on the close call and can be accessed through processing rules.

`xdm:framesPerSecond`
* is optional
* type: `integer`
* defined in this schema

### xdm:framesPerSecond Type


`integer`






## xdm:hasBitrateChangeImpactedStreams
### Bitrate Change Impacted Streams

The number of streams in which bitrate changes occurred. This metric is set to true only if at least one bitrate change event occurred during a playback session.

`xdm:hasBitrateChangeImpactedStreams`
* is optional
* type: `boolean`
* defined in this schema

### xdm:hasBitrateChangeImpactedStreams Type


`boolean`





## xdm:hasBufferImpactedStreams
### Buffer Impacted Streams

The number of streams impacted by buffering. This metric is set to true only if at least one buffer event occurred during a playback session.

`xdm:hasBufferImpactedStreams`
* is optional
* type: `boolean`
* defined in this schema

### xdm:hasBufferImpactedStreams Type


`boolean`





## xdm:hasDroppedFrameImpactedStreams
### Dropped Frame Impacted Streams

The number of streams in which frames were dropped. This metric is set to true only if at least one frame was dropped during a playback session.

`xdm:hasDroppedFrameImpactedStreams`
* is optional
* type: `boolean`
* defined in this schema

### xdm:hasDroppedFrameImpactedStreams Type


`boolean`





## xdm:hasErrorImpactedStreams
### Error Impacted Streams

The number of streams in which an error event occurred (i.e., trackError was called during the playback session, and a type=error heartbeat call was generated). This metric is set to true only if at least one error occurred during playback.

`xdm:hasErrorImpactedStreams`
* is optional
* type: `boolean`
* defined in this schema

### xdm:hasErrorImpactedStreams Type


`boolean`





## xdm:hasStallImpactedStreams
### Stalling Impacted Streams

The number of streams in which a stalled event occurred. This metric is set to true only if at least one stall occurred during playback.

`xdm:hasStallImpactedStreams`
* is optional
* type: `boolean`
* defined in this schema

### xdm:hasStallImpactedStreams Type


`boolean`





## xdm:isDroppedBeforeStart
### Drops Before Starts

The number of times a user quit the video before its start. This metric is set to true only if no content was rendered, regardless of ads.

`xdm:isDroppedBeforeStart`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDroppedBeforeStart Type


`boolean`





## xdm:mediaSdkErrors
### Media SDK Error IDs

The unique error IDs generated by Media SDK during playback.

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

The unique error IDs generated by the player SDK. Customers must provide the error codes/ids at implementation time via provided error APIs.

`xdm:playerSdkErrors`
* is optional
* type: `string[]`

* defined in this schema

### xdm:playerSdkErrors Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:stallCount
### Stalling Events

The number of times the playback was stalled during a playback session.

`xdm:stallCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:stallCount Type


`integer`






## xdm:stallTime
### Total Stalling Duration

The total time (seconds; integer) the playback was stalled during a playback session.

`xdm:stallTime`
* is optional
* type: `integer`
* defined in this schema

### xdm:stallTime Type


`integer`






## xdm:timeToStart
### Time To Start

Describes the duration (in seconds) passed between video load and start.

`xdm:timeToStart`
* is optional
* type: `integer`
* defined in this schema

### xdm:timeToStart Type


`integer`





