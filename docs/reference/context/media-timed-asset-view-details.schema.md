
# Primary Asset View Details Schema

```
https://ns.adobe.com/xdm/context/media-timed-asset-view-details
```

View details for the main content playback, present on all ads and chapters that occur during the content's playback.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/media-timed-asset-view-details.schema.json](context/media-timed-asset-view-details.schema.json) |
## Schema Hierarchy

* Primary Asset View Details `https://ns.adobe.com/xdm/context/media-timed-asset-view-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Implementation Details](implementationdetails.schema.md) `https://ns.adobe.com/xdm/context/implementationdetails`
  * [Timed Media Quality of Experience](media-timed-qoe.schema.md) `https://ns.adobe.com/xdm/context/media-timed-qoe`


## Primary Asset View Details Example
```json
{
  "@id": "https://data.adobe.io/entities/media-sessionid/1427461282884250114230",
  "xdm:playerName": "watchespn",
  "xdm:broadcastChannel": "WatchESPN",
  "xdm:broadcastContentType": "VOD",
  "xdm:streamFormat": "short",
  "xdm:playerSDKVersion": {
    "xdm:version": "1.0.8"
  },
  "xdm:broadcastNetwork": "nbcu",
  "xdm:adLoadType": "2",
  "xdm:sourceFeed": "http%3A%2F%2Fvod01.pure.centurylink.net%2Fhls%2Fvu%2F9083406%2FVUBX0280890106690980_38_3_M_HD.m3u8",
  "xdm:sessionTimeout": 1800
}
```

# Primary Asset View Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Primary Asset View Details (this schema) |
| [xdm:adLoadType](#xdmadloadtype) | `string` | Optional | Primary Asset View Details (this schema) |
| [xdm:broadcastChannel](#xdmbroadcastchannel) | `string` | Optional | Primary Asset View Details (this schema) |
| [xdm:broadcastContentType](#xdmbroadcastcontenttype) | `string` | Optional | Primary Asset View Details (this schema) |
| [xdm:broadcastNetwork](#xdmbroadcastnetwork) | `string` | Optional | Primary Asset View Details (this schema) |
| [xdm:playerName](#xdmplayername) | `string` | Optional | Primary Asset View Details (this schema) |
| [xdm:playerSDKVersion](#xdmplayersdkversion) | Implementation Details | Optional | Primary Asset View Details (this schema) |
| [xdm:qoe](#xdmqoe) | Timed Media Quality of Experience | Optional | Primary Asset View Details (this schema) |
| [xdm:sessionTimeout](#xdmsessiontimeout) | `integer` | Optional | Primary Asset View Details (this schema) |
| [xdm:sourceFeed](#xdmsourcefeed) | `string` | Optional | Primary Asset View Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Media Session ID

Identifies an instance of a content stream unique to an individual playback.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:adLoadType
### Ad Load Type

The type of ad loaded as defined by each customer's internal representation.

`xdm:adLoadType`
* is optional
* type: `string`
* defined in this schema

### xdm:adLoadType Type


`string`






## xdm:broadcastChannel
### Distribution Channel

Distribution channel from where the content was played.

`xdm:broadcastChannel`
* is optional
* type: `string`
* defined in this schema

### xdm:broadcastChannel Type


`string`






## xdm:broadcastContentType
### Broadcast Content Type

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
| `VOD` | Video-on-Demand |
| `Live` | Live Streaming |
| `Linear` | Linear playback of the media asset |
| `UGC` | User-generated Content |
| `Radio` | Radio Show |
| `Podcast` | Audio Postcast |
| `Audiobook` | Audiobook |




## xdm:broadcastNetwork
### Broadcast Network

The programmer network name.

`xdm:broadcastNetwork`
* is optional
* type: `string`
* defined in this schema

### xdm:broadcastNetwork Type


`string`






## xdm:playerName
### Content Player Name

Name of the player.

`xdm:playerName`
* is optional
* type: `string`
* defined in this schema

### xdm:playerName Type


`string`






## xdm:playerSDKVersion
### Player SDK Version

The SDK version used by the player.

`xdm:playerSDKVersion`
* is optional
* type: Implementation Details
* defined in this schema

### xdm:playerSDKVersion Type


* [Implementation Details](implementationdetails.schema.md) – `https://ns.adobe.com/xdm/context/implementationdetails`





## xdm:qoe
### Quality of Experience

Timed media properties related to the content playback's quality of experience (QoE).

`xdm:qoe`
* is optional
* type: Timed Media Quality of Experience
* defined in this schema

### xdm:qoe Type


* [Timed Media Quality of Experience](media-timed-qoe.schema.md) – `https://ns.adobe.com/xdm/context/media-timed-qoe`





## xdm:sessionTimeout
### Media Session Server Timeout

Indicates the amount of time, in seconds, that passed between the user's last known interaction and the moment the session was closed.

`xdm:sessionTimeout`
* is optional
* type: `integer`
* defined in this schema

### xdm:sessionTimeout Type


`integer`






## xdm:sourceFeed
### Feed Type

The type of feed. Can either represent actual feed-related data (e.g. EAST HD/SD), or the source of the feed (e.g. an URL).

`xdm:sourceFeed`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceFeed Type


`string`





