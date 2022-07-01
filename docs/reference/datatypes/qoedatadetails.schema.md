
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
  "xdm:bitrate": 100
}
```

# Qoe Data details information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:bitrate](#xdmbitrate) | `integer` | Optional | Qoe Data details information (this schema) |
| [xdm:bitrateAverage](#xdmbitrateaverage) | `number` | Optional | Qoe Data details information (this schema) |
| [xdm:bitrateChange](#xdmbitratechange) | `integer` | Optional | Qoe Data details information (this schema) |
| [xdm:bitrateChangeImpactedStreams](#xdmbitratechangeimpactedstreams) | `number` | Optional | Qoe Data details information (this schema) |
| [xdm:buffer](#xdmbuffer) | `number` | Optional | Qoe Data details information (this schema) |
| [xdm:bufferCount](#xdmbuffercount) | `number` | Optional | Qoe Data details information (this schema) |
| [xdm:bufferTime](#xdmbuffertime) | `number` | Optional | Qoe Data details information (this schema) |
| [xdm:dropBeforeStart](#xdmdropbeforestart) | `number` | Optional | Qoe Data details information (this schema) |
| [xdm:droppedFrameImpactedStreams](#xdmdroppedframeimpactedstreams) | `number` | Optional | Qoe Data details information (this schema) |
| [xdm:droppedFrames](#xdmdroppedframes) | `integer` | Optional | Qoe Data details information (this schema) |
| [xdm:error](#xdmerror) | `number` | Optional | Qoe Data details information (this schema) |
| [xdm:errorCount](#xdmerrorcount) | `number` | Optional | Qoe Data details information (this schema) |
| [xdm:externalErrors](#xdmexternalerrors) | `string[]` | Optional | Qoe Data details information (this schema) |
| [xdm:mediaSdkErrors](#xdmmediasdkerrors) | `string[]` | Optional | Qoe Data details information (this schema) |
| [xdm:playerSdkErrors](#xdmplayersdkerrors) | `string[]` | Optional | Qoe Data details information (this schema) |
| [xdm:stall](#xdmstall) | `number` | Optional | Qoe Data details information (this schema) |
| [xdm:stallCount](#xdmstallcount) | `number` | Optional | Qoe Data details information (this schema) |
| [xdm:stallTime](#xdmstalltime) | `integer` | Optional | Qoe Data details information (this schema) |
| [xdm:timeToStart](#xdmtimetostart) | `integer` | Optional | Qoe Data details information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:bitrate
### Average Bitrate Bucket

The average bitrate (in kbps). The value is predefined buckets at 100kbps intervals.

`xdm:bitrate`
* is optional
* type: `integer`
* defined in this schema

### xdm:bitrate Type


`integer`






## xdm:bitrateAverage
### Average Bitrate

A weighted average of all bitrate values related to the play duration that occurred during a playback session.

`xdm:bitrateAverage`
* is optional
* type: `number`
* defined in this schema

### xdm:bitrateAverage Type


`number`






## xdm:bitrateChange
### Bitrate Changes

The number of bitrate change events that occurred during a playback session.

`xdm:bitrateChange`
* is optional
* type: `integer`
* defined in this schema

### xdm:bitrateChange Type


`integer`






## xdm:bitrateChangeImpactedStreams
### Bitrate Change Impacted Streams

The number of streams in which bitrate changes occurred.

`xdm:bitrateChangeImpactedStreams`
* is optional
* type: `number`
* defined in this schema

### xdm:bitrateChangeImpactedStreams Type


`number`






## xdm:buffer
### Buffer Impacted Streams

The number of streams impacted by buffering.

`xdm:buffer`
* is optional
* type: `number`
* defined in this schema

### xdm:buffer Type


`number`






## xdm:bufferCount
### Buffer Events

The number of buffer states that occurred during a playback session.

`xdm:bufferCount`
* is optional
* type: `number`
* defined in this schema

### xdm:bufferCount Type


`number`






## xdm:bufferTime
### Total Buffer Duration

Describes the total amount of time in seconds, spent buffering.

`xdm:bufferTime`
* is optional
* type: `number`
* defined in this schema

### xdm:bufferTime Type


`number`






## xdm:dropBeforeStart
### Drops Before Starts

Indicates the user abandoned the media stream before the first frame for example, during the pre-roll ad break, or due to an error while loading the content from the CDN.

`xdm:dropBeforeStart`
* is optional
* type: `number`
* defined in this schema

### xdm:dropBeforeStart Type


`number`






## xdm:droppedFrameImpactedStreams
### Dropped Frame Impacted Streams

The number of streams in which frames were dropped.

`xdm:droppedFrameImpactedStreams`
* is optional
* type: `number`
* defined in this schema

### xdm:droppedFrameImpactedStreams Type


`number`






## xdm:droppedFrames
### Dropped Frames

The number of frames dropped during playback of the main content.

`xdm:droppedFrames`
* is optional
* type: `integer`
* defined in this schema

### xdm:droppedFrames Type


`integer`






## xdm:error
### Error Impacted Streams

The number of streams in which an error event occurred.

`xdm:error`
* is optional
* type: `number`
* defined in this schema

### xdm:error Type


`number`






## xdm:errorCount
### Errors

The number of errors that were encountered during playback.

`xdm:errorCount`
* is optional
* type: `number`
* defined in this schema

### xdm:errorCount Type


`number`






## xdm:externalErrors
### External Error IDs

The error IDs encountered during a playback session that originated outside the Player or SDK.

`xdm:externalErrors`
* is optional
* type: `string[]`

* defined in this schema

### xdm:externalErrors Type


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









## xdm:stall
### Stalling Impacted Streams

The number of streams impacted by stalling.

`xdm:stall`
* is optional
* type: `number`
* defined in this schema

### xdm:stall Type


`number`






## xdm:stallCount
### Stalling Events

The number of stall states that occurred during a playback session.

`xdm:stallCount`
* is optional
* type: `number`
* defined in this schema

### xdm:stallCount Type


`number`






## xdm:stallTime
### Total Stalling Duration

Describes the duration in seconds in which the playback was stalled during playback.

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





