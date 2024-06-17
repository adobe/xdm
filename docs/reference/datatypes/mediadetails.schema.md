
# Media details information Schema

```
https://ns.adobe.com/xdm/datatypes/mediaDetails
```

Media details information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable  | No | Forbidden | Permitted | [datatypes/mediadetails.schema.json](datatypes/mediadetails.schema.json) |
## Schema Hierarchy

* Media details information `https://ns.adobe.com/xdm/datatypes/mediaDetails`
  * [Session details information](sessiondetails.schema.md) `https://ns.adobe.com/xdm/datatypes/sessionDetails`
  * [Advertising details information](advertisingdetails.schema.md) `https://ns.adobe.com/xdm/datatypes/advertisingDetails`
  * [Advertising Pod details information](advertisingpoddetails.schema.md) `https://ns.adobe.com/xdm/datatypes/advertisingPodDetails`
  * [Chapter details information](chapterdetails.schema.md) `https://ns.adobe.com/xdm/datatypes/chapterDetails`
  * [Error details information](errordetails.schema.md) `https://ns.adobe.com/xdm/datatypes/errorDetails`
  * [Qoe Data details information](qoedatadetails.schema.md) `https://ns.adobe.com/xdm/datatypes/qoeDataDetails`


## Media details information Example
```json
{
  "xdm:playhead": 831,
  "xdm:sessionDetails": {
    "xdm:name": "123456789",
    "xdm:length": 100,
    "xdm:contentType": "VOD",
    "xdm:playerName": "playerName",
    "xdm:channel": "channel"
  },
  "xdm:advertisingDetails": {
    "xdm:name": "123456789",
    "xdm:length": 100,
    "xdm:podPosition": 1,
    "xdm:playerName": "playerName"
  },
  "xdm:advertisingPodDetails": {
    "xdm:index": 2,
    "xdm:offset": 123
  },
  "xdm:chapterDetails": {
    "xdm:length": 100,
    "xdm:offset": 50,
    "xdm:index": 2
  },
  "xdm:errorDetails": {
    "xdm:name": "errorID",
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
      "xdm:name": "fullScreen"
    }
  ],
  "xdm:states": [
    {
      "xdm:name": "mute",
      "xdm:isSet": true,
      "xdm:count": 2,
      "xdm:time": 5
    }
  ],
  "xdm:customMetadata": [
    {
      "xdm:name": "customName",
      "xdm:value": "test1"
    },
    {
      "xdm:name": "test2",
      "xdm:value": "customValue"
    }
  ]
}
```

# Media details information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:advertisingDetails](#xdmadvertisingdetails) | Advertising details information | Optional | Media details information (this schema) |
| [xdm:advertisingPodDetails](#xdmadvertisingpoddetails) | Advertising Pod details information | Optional | Media details information (this schema) |
| [xdm:chapterDetails](#xdmchapterdetails) | Chapter details information | Optional | Media details information (this schema) |
| [xdm:customMetadata](#xdmcustommetadata) | Custom metadata details information | Optional | Media details information (this schema) |
| [xdm:errorDetails](#xdmerrordetails) | Error details information | Optional | Media details information (this schema) |
| [xdm:playhead](#xdmplayhead) | `integer` | Optional | Media details information (this schema) |
| [xdm:qoeDataDetails](#xdmqoedatadetails) | Qoe Data details information | Optional | Media details information (this schema) |
| [xdm:sessionDetails](#xdmsessiondetails) | Session details information | Optional | Media details information (this schema) |
| [xdm:sessionID](#xdmsessionid) | `string` | Optional | Media details information (this schema) |
| [xdm:states](#xdmstates) | Player state data information | Optional | Media details information (this schema) |
| [xdm:statesEnd](#xdmstatesend) | Player state data information | Optional | Media details information (this schema) |
| [xdm:statesStart](#xdmstatesstart) | Player state data information | Optional | Media details information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:advertisingDetails
### Advertising Details

Advertising details information related to the experience event.

`xdm:advertisingDetails`
* is optional
* type: Advertising details information
* defined in this schema

### xdm:advertisingDetails Type


* [Advertising details information](advertisingdetails.schema.md) – `https://ns.adobe.com/xdm/datatypes/advertisingDetails`





## xdm:advertisingPodDetails
### Advertising Pod Details

Advertising pod details information related to the experience event.

`xdm:advertisingPodDetails`
* is optional
* type: Advertising Pod details information
* defined in this schema

### xdm:advertisingPodDetails Type


* [Advertising Pod details information](advertisingpoddetails.schema.md) – `https://ns.adobe.com/xdm/datatypes/advertisingPodDetails`





## xdm:chapterDetails
### Chapter Details

Chapter details information related to the experience event.

`xdm:chapterDetails`
* is optional
* type: Chapter details information
* defined in this schema

### xdm:chapterDetails Type


* [Chapter details information](chapterdetails.schema.md) – `https://ns.adobe.com/xdm/datatypes/chapterDetails`





## xdm:customMetadata
### The Custom Metadata

The list of custom metadata.

`xdm:customMetadata`
* is optional
* type: Custom metadata details information

* defined in this schema

### xdm:customMetadata Type


Array type: Custom metadata details information

All items must be of the type:
* [Custom metadata details information](custommetadatadetails.schema.md) – `https://ns.adobe.com/xdm/datatypes/customMetadataDetails`








## xdm:errorDetails
### Error Details

Error details information related to the experience event.

`xdm:errorDetails`
* is optional
* type: Error details information
* defined in this schema

### xdm:errorDetails Type


* [Error details information](errordetails.schema.md) – `https://ns.adobe.com/xdm/datatypes/errorDetails`





## xdm:playhead
### Playhead

If the content is live, the playhead must be the current second of the day, 0 <= playhead < 86400. If the content is recorded, the playhead must be the current second of content, 0 <= playhead < content length.

`xdm:playhead`
* is optional
* type: `integer`
* defined in this schema

### xdm:playhead Type


`integer`
* minimum value: `0`






## xdm:qoeDataDetails
### Qoe Data Details

Qoe data details information related to the experience event.

`xdm:qoeDataDetails`
* is optional
* type: Qoe Data details information
* defined in this schema

### xdm:qoeDataDetails Type


* [Qoe Data details information](qoedatadetails.schema.md) – `https://ns.adobe.com/xdm/datatypes/qoeDataDetails`





## xdm:sessionDetails
### Session Details

Session details information related to the experience event.

`xdm:sessionDetails`
* is optional
* type: Session details information
* defined in this schema

### xdm:sessionDetails Type


* [Session details information](sessiondetails.schema.md) – `https://ns.adobe.com/xdm/datatypes/sessionDetails`





## xdm:sessionID
### Media Session ID

Identifies an instance of a content stream unique to an individual playback.

`xdm:sessionID`
* is optional
* type: `string`
* defined in this schema

### xdm:sessionID Type


`string`






## xdm:states
### List Of States

The list of states.

`xdm:states`
* is optional
* type: Player state data information

* defined in this schema

### xdm:states Type


Array type: Player state data information

All items must be of the type:
* [Player state data information](playerstatedata.schema.md) – `https://ns.adobe.com/xdm/datatypes/playerStateData`








## xdm:statesEnd
### List Of States End

The list of states end.

`xdm:statesEnd`
* is optional
* type: Player state data information

* defined in this schema

### xdm:statesEnd Type


Array type: Player state data information

All items must be of the type:
* [Player state data information](playerstatedata.schema.md) – `https://ns.adobe.com/xdm/datatypes/playerStateData`








## xdm:statesStart
### List Of States Start

The list of states start.

`xdm:statesStart`
* is optional
* type: Player state data information

* defined in this schema

### xdm:statesStart Type


Array type: Player state data information

All items must be of the type:
* [Player state data information](playerstatedata.schema.md) – `https://ns.adobe.com/xdm/datatypes/playerStateData`







