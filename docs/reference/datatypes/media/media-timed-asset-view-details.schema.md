
# Primary asset view details Schema

```
https://ns.adobe.com/xdm/context/media-timed-asset-view-details
```

View details for the main content playback, present on all ads and chapters that occur during the content's playback.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/media/media-timed-asset-view-details.schema.json](datatypes/media/media-timed-asset-view-details.schema.json) |
## Schema Hierarchy

* Primary asset view details `https://ns.adobe.com/xdm/context/media-timed-asset-view-details`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Implementation details](../industry-verticals/implementationdetails.schema.md) `https://ns.adobe.com/xdm/context/implementationdetails`
  * [Timed media quality of experience](media-timed-qoe.schema.md) `https://ns.adobe.com/xdm/context/media-timed-qoe`
  * [Player state information](../player-state.schema.md) `https://ns.adobe.com/xdm/context/player-state`


## Primary asset view details Examples

```json
{
  "@id": "https://data.adobe.io/entities/media-sessionid/1427461282884250114230",
  "xdm:playerName": "watchtv",
  "xdm:videoSegment": "3-10",
  "xdm:path": "mid:cartoon:episode:kidschannel.com:dfb59263-4ce7",
  "xdm:broadcastChannel": "WatchTV",
  "xdm:broadcastContentType": "VOD",
  "xdm:streamFormat": "short",
  "xdm:vhlVersion": "js-2.0.1.88-c8c0b1",
  "xdm:playerSDKVersion": {
    "xdm:version": "1.0.8"
  },
  "xdm:broadcastNetwork": "nbpu",
  "xdm:adLoadType": "2",
  "xdm:sourceFeed": "http%3A%2F%2Fvod01.pure.centurylink.net%2Fhls%2Fvu%2F9083406%2FVUBX0280890106690980_38_3_M_HD.m3u8",
  "xdm:sessionTimeout": 1800,
  "xdm:downloadedPlayback": false,
  "xdm:fullScreen": {
    "xdm:playerStateSet": true,
    "xdm:playerStateCount": 3,
    "xdm:playerStateTime": 2520
  },
  "xdm:mute": {
    "xdm:playerStateSet": false,
    "xdm:playerStateCount": 5,
    "xdm:playerStateTime": 80
  },
  "xdm:closeCaption": {
    "xdm:playerStateSet": true,
    "xdm:playerStateCount": 1,
    "xdm:playerStateTime": 3
  },
  "xdm:pictureInPicture": {
    "xdm:playerStateSet": true,
    "xdm:playerStateCount": 1,
    "xdm:playerStateTime": 2700
  },
  "xdm:inFocus": {
    "xdm:playerStateSet": false,
    "xdm:playerStateCount": 2,
    "xdm:playerStateTime": 10
  }
}
```

```json
{
  "@id": "https://data.adobe.io/entities/media-sessionid/1427461282884250114231",
  "xdm:playerName": "watchtv",
  "xdm:adLoadType": "1",
  "xdm:sessionTimeout": 1800,
  "xdm:downloadedPlayback": false
}
```


# Primary asset view details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:adLoadType](#xdmadloadtype) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:broadcastChannel](#xdmbroadcastchannel) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:broadcastContentType](#xdmbroadcastcontenttype) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:broadcastNetwork](#xdmbroadcastnetwork) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:closeCaption](#xdmclosecaption) | Player state information | Optional | Primary asset view details (this schema) |
| [xdm:downloadedPlayback](#xdmdownloadedplayback) | `boolean` | Optional | Primary asset view details (this schema) |
| [xdm:fullScreen](#xdmfullscreen) | Player state information | Optional | Primary asset view details (this schema) |
| [xdm:inFocus](#xdminfocus) | Player state information | Optional | Primary asset view details (this schema) |
| [xdm:mute](#xdmmute) | Player state information | Optional | Primary asset view details (this schema) |
| [xdm:path](#xdmpath) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:pictureInPicture](#xdmpictureinpicture) | Player state information | Optional | Primary asset view details (this schema) |
| [xdm:playerName](#xdmplayername) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:playerSDKVersion](#xdmplayersdkversion) | Implementation details | Optional | Primary asset view details (this schema) |
| [xdm:qoe](#xdmqoe) | Timed media quality of experience | Optional | Primary asset view details (this schema) |
| [xdm:sessionTimeout](#xdmsessiontimeout) | `integer` | Optional | Primary asset view details (this schema) |
| [xdm:sourceFeed](#xdmsourcefeed) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:vhlVersion](#xdmvhlversion) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:videoSegment](#xdmvideosegment) | `string` | Optional | Primary asset view details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Media session ID

Identifies an instance of a content stream unique to an individual playback.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:adLoadType
### Ad load type

The type of ad loaded as defined by each customer's internal representation.

`xdm:adLoadType`
* is optional
* type: `string`
* defined in this schema

### xdm:adLoadType Type


`string`






## xdm:broadcastChannel
### Content channel

Distribution channel from where the content was played.

`xdm:broadcastChannel`
* is optional
* type: `string`
* defined in this schema

### xdm:broadcastChannel Type


`string`






## xdm:broadcastContentType
### Broadcast content type

The type of the stream delivery.

`xdm:broadcastContentType`
* is optional
* type: `string`
* defined in this schema

### xdm:broadcastContentType Type


`string`



### xdm:broadcastContentType Known Values
| Value | Description |
|-------|-------------|
| `VOD` | Video-on-demand |
| `Live` | Live streaming |
| `Linear` | Linear playback of the media asset |
| `UGC` | User-generated content |
| `Radio` | Radio show |
| `Podcast` | Audio podcast |
| `Audiobook` | Audiobook |




## xdm:broadcastNetwork
### Broadcast network

The programmer network name.

`xdm:broadcastNetwork`
* is optional
* type: `string`
* defined in this schema

### xdm:broadcastNetwork Type


`string`






## xdm:closeCaption
### Close caption

Timed media properties related to close caption player state.

`xdm:closeCaption`
* is optional
* type: Player state information
* defined in this schema

### xdm:closeCaption Type


* [Player state information](../player-state.schema.md) – `https://ns.adobe.com/xdm/context/player-state`





## xdm:downloadedPlayback
### Media downloaded flag

The stream was played locally on the device after being downloaded.

`xdm:downloadedPlayback`
* is optional
* type: `boolean`
* defined in this schema

### xdm:downloadedPlayback Type


`boolean`





## xdm:fullScreen
### Full screen

Timed media properties related to full screen player state.

`xdm:fullScreen`
* is optional
* type: Player state information
* defined in this schema

### xdm:fullScreen Type


* [Player state information](../player-state.schema.md) – `https://ns.adobe.com/xdm/context/player-state`





## xdm:inFocus
### In focus

Timed media properties related to in focus player state.

`xdm:inFocus`
* is optional
* type: Player state information
* defined in this schema

### xdm:inFocus Type


* [Player state information](../player-state.schema.md) – `https://ns.adobe.com/xdm/context/player-state`





## xdm:mute
### Mute

Timed media properties related to mute player state.

`xdm:mute`
* is optional
* type: Player state information
* defined in this schema

### xdm:mute Type


* [Player state information](../player-state.schema.md) – `https://ns.adobe.com/xdm/context/player-state`





## xdm:path
### Video path

The path to the video in the app or site.

`xdm:path`
* is optional
* type: `string`
* defined in this schema

### xdm:path Type


`string`






## xdm:pictureInPicture
### Picture in picture

Timed media properties related to picture in picture player state.

`xdm:pictureInPicture`
* is optional
* type: Player state information
* defined in this schema

### xdm:pictureInPicture Type


* [Player state information](../player-state.schema.md) – `https://ns.adobe.com/xdm/context/player-state`





## xdm:playerName
### Content player name

Name of the content player.

`xdm:playerName`
* is optional
* type: `string`
* defined in this schema

### xdm:playerName Type


`string`






## xdm:playerSDKVersion
### Player SDK version

The SDK version used by the player.

`xdm:playerSDKVersion`
* is optional
* type: Implementation details
* defined in this schema

### xdm:playerSDKVersion Type


* [Implementation details](../industry-verticals/implementationdetails.schema.md) – `https://ns.adobe.com/xdm/context/implementationdetails`





## xdm:qoe
### Quality of experience

Timed media properties related to the content playback's quality of experience (QoE).

`xdm:qoe`
* is optional
* type: Timed media quality of experience
* defined in this schema

### xdm:qoe Type


* [Timed media quality of experience](media-timed-qoe.schema.md) – `https://ns.adobe.com/xdm/context/media-timed-qoe`





## xdm:sessionTimeout
### Media session server timeout

Indicates the amount of time, in seconds, that passed between the user's last known interaction and the moment the session was closed.

`xdm:sessionTimeout`
* is optional
* type: `integer`
* defined in this schema

### xdm:sessionTimeout Type


`integer`






## xdm:sourceFeed
### Feed type

The type of feed, which can either represent actual feed-related data such as  EAST HD or SD, or the source of the feed like a URL.

`xdm:sourceFeed`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceFeed Type


`string`






## xdm:vhlVersion
### VHL version

The Media SDK version used for the tracking session.

`xdm:vhlVersion`
* is optional
* type: `string`
* defined in this schema

### xdm:vhlVersion Type


`string`






## xdm:videoSegment
### Video segment

The interval that describes the part of the content that has been viewed in minutes.

`xdm:videoSegment`
* is optional
* type: `string`
* defined in this schema

### xdm:videoSegment Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B0-9%5D%2B-%5B0-9%5D%2B%24)):
```regex
^[0-9]+-[0-9]+$
```





