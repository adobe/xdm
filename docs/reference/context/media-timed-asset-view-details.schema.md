
# Primary asset view details Schema

```
https://ns.adobe.com/xdm/context/media-timed-asset-view-details
```

View details for the main content playback, present on all ads and chapters that occur during the content's playback.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/media-timed-asset-view-details.schema.json](context/media-timed-asset-view-details.schema.json) |
## Schema Hierarchy

* Primary asset view details `https://ns.adobe.com/xdm/context/media-timed-asset-view-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Implementation details](implementationdetails.schema.md) `https://ns.adobe.com/xdm/context/implementationdetails`
  * [Timed media quality of experience](media-timed-qoe.schema.md) `https://ns.adobe.com/xdm/context/media-timed-qoe`


## Primary asset view details Example
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

# Primary asset view details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:adLoadType](#xdmadloadtype) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:broadcastChannel](#xdmbroadcastchannel) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:broadcastContentType](#xdmbroadcastcontenttype) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:broadcastNetwork](#xdmbroadcastnetwork) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:playerName](#xdmplayername) | `string` | Optional | Primary asset view details (this schema) |
| [xdm:playerSDKVersion](#xdmplayersdkversion) | Implementation details | Optional | Primary asset view details (this schema) |
| [xdm:qoe](#xdmqoe) | Timed media quality of experience | Optional | Primary asset view details (this schema) |
| [xdm:sessionTimeout](#xdmsessiontimeout) | `integer` | Optional | Primary asset view details (this schema) |
| [xdm:sourceFeed](#xdmsourcefeed) | `string` | Optional | Primary asset view details (this schema) |
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
### Distribution channel

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


* [Implementation details](implementationdetails.schema.md) – `https://ns.adobe.com/xdm/context/implementationdetails`





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





