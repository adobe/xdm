
# Media event information Schema

```
https://ns.adobe.com/xdm/datatypes/mediaEvent
```

Media event information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/mediaevent.schema.json](datatypes/mediaevent.schema.json) |
## Schema Hierarchy

* Media event information `https://ns.adobe.com/xdm/datatypes/mediaEvent`
  * [Media details information](mediadetails.schema.md) `https://ns.adobe.com/xdm/datatypes/mediaDetails`


## Media event information Example
```json
{
  "xdm:mediaEventTimestamp": "2017-09-26T15:52:25+00:00",
  "xdm:mediaEventType": "media.sessionStart",
  "xdm:mediaCollection": {
    "xdm:playhead": 831,
    "xdm:sessionDetails": {
      "xdm:ID": "1482236761294786918253",
      "xdm:name": "123456789",
      "xdm:length": 100,
      "xdm:contentType": "VOD",
      "xdm:playerName": "playerName",
      "xdm:channel": "channel"
    },
    "xdm:advertisingDetails": {
      "xdm:ID": "123456789",
      "xdm:length": 100,
      "xdm:podPosition": 1,
      "xdm:playerName": "playerName",
      "xdm:isCompleted": false,
      "xdm:isStarted": false
    },
    "xdm:advertisingPodDetails": {
      "xdm:index": 2,
      "xdm:offset": 123,
      "xdm:ID": "123"
    },
    "xdm:chapterDetails": {
      "xdm:length": 100,
      "xdm:offset": 50,
      "xdm:index": 2,
      "xdm:isStarted": false,
      "xdm:isCompleted": false,
      "xdm:timePlayed": 70
    },
    "xdm:errorDetails": {
      "xdm:ID": "errorID",
      "xdm:source": "player"
    },
    "xdm:qoeDataDetails": {
      "xdm:bitrate": 100
    },
    "xdm:statesStart": [
      {
        "xdm:name": "mute"
      },
      {
        "xdm:name": "pictureInPicture"
      }
    ],
    "xdm:statesEnd": [
      {
        "xdm:name": "fullscreen"
      }
    ]
  }
}
```

# Media event information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:mediaCollection](#xdmmediacollection) | Media details information | Optional | Media event information (this schema) |
| [xdm:mediaEventTimestamp](#xdmmediaeventtimestamp) | `string` | Optional | Media event information (this schema) |
| [xdm:mediaEventType](#xdmmediaeventtype) | `string` | Optional | Media event information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:mediaCollection
### Media Details

Media details information related to the experience event.

`xdm:mediaCollection`
* is optional
* type: Media details information
* defined in this schema

### xdm:mediaCollection Type


* [Media details information](mediadetails.schema.md) – `https://ns.adobe.com/xdm/datatypes/mediaDetails`





## xdm:mediaEventTimestamp
### Media Timestamp

The time when an event or observation occurred.

`xdm:mediaEventTimestamp`
* is optional
* type: `string`
* defined in this schema

### xdm:mediaEventTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:mediaEventType
### Media Event Type

The media event type.

`xdm:mediaEventType`
* is optional
* type: `string`
* defined in this schema

### xdm:mediaEventType Type


`string`



### xdm:mediaEventType Known Values
| Value | Description |
|-------|-------------|
| `media.ping` | Media ping |
| `media.sessionStart` | Media sessionStart |
| `media.play` | Media play |
| `media.bufferStart` | Media bufferStart |
| `media.pauseStart` | Media pauseStart |
| `media.chapterStart` | Media chapterStart |
| `media.chapterSkip` | Media chapterSkip |
| `media.chapterComplete` | Media chapterComplete |
| `media.adStart` | Media adStart |
| `media.adSkip` | Media adSkip |
| `media.adComplete` | Media adComplete |
| `media.adBreakStart` | Media adBreakStart |
| `media.adBreakComplete` | Media adBreakComplete |
| `media.bitrateChange` | Media bitrateChange |
| `media.error` | Media error |
| `media.sessionComplete` | Media sessionComplete |
| `media.sessionEnd` | Media sessionEnd |
| `media.statesUpdate` | Media statesUpdate |



