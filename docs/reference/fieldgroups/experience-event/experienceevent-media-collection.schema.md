
# MediaCollection Interaction Details  Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-media-collection
```

Track interactions with media collection.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-media-collection.schema.json](fieldgroups/experience-event/experienceevent-media-collection.schema.json) |

## MediaCollection Interaction Details  Example
```json
{
  "xdm:mediaCollection": {
    "xdm:playerEventDetails": {
      "xdm:playhead": 831,
      "xdm:sessionID": "1234567890"
    },
    "xdm:sessionDetails": {
      "xdm:ID": "123456789",
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
      "xdm:isStarted": false,
      "xdm:timePlayed": 50,
      "xdm:adBreakID": "123"
    },
    "xdm:advertisingPodDetails": {
      "xdm:index": 2,
      "xdm:second": 123
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
      "xdm:errorID": "errorID",
      "xdm:errorSource": "player"
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
    ]
  }
}
```

# MediaCollection Interaction Details  Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:mediaCollection](#xdmmediacollection) | `object` | Optional | MediaCollection Interaction Details  (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:mediaCollection

Media Collection related fields.

`xdm:mediaCollection`
* is optional
* type: `object`
* defined in this schema

### xdm:mediaCollection Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:advertisingDetails`|  | Optional |
| `xdm:advertisingPodDetails`|  | Optional |
| `xdm:chapterDetails`|  | Optional |
| `xdm:errorDetails`|  | Optional |
| `xdm:playerEventDetails`|  | Optional |
| `xdm:qoeDataDetails`|  | Optional |
| `xdm:sessionDetails`|  | Optional |
| `xdm:statesEnd`| array | Optional |
| `xdm:statesStart`| array | Optional |



#### xdm:advertisingDetails
##### Advertising Details

Advertising details information related to the experience event.

`xdm:advertisingDetails`
* is optional
* type: reference

##### xdm:advertisingDetails Type


* []() – `https://ns.adobe.com/xdm/datatypes/advertisingDetails`







#### xdm:advertisingPodDetails
##### Advertising Pod Details

Advertising pod details information related to the experience event.

`xdm:advertisingPodDetails`
* is optional
* type: reference

##### xdm:advertisingPodDetails Type


* []() – `https://ns.adobe.com/xdm/datatypes/advertisingPodDetails`







#### xdm:chapterDetails
##### Chapter Details

Chapter details information related to the experience event.

`xdm:chapterDetails`
* is optional
* type: reference

##### xdm:chapterDetails Type


* []() – `https://ns.adobe.com/xdm/datatypes/chapterDetails`







#### xdm:errorDetails
##### Error Details

Error details information related to the experience event.

`xdm:errorDetails`
* is optional
* type: reference

##### xdm:errorDetails Type


* []() – `https://ns.adobe.com/xdm/datatypes/errorDetails`







#### xdm:playerEventDetails
##### Player Event Details

Player event details information related to the experience event.

`xdm:playerEventDetails`
* is optional
* type: reference

##### xdm:playerEventDetails Type


* []() – `https://ns.adobe.com/xdm/datatypes/playerEventDetails`







#### xdm:qoeDataDetails
##### Qoe Data Details

Qoe data details information related to the experience event.

`xdm:qoeDataDetails`
* is optional
* type: reference

##### xdm:qoeDataDetails Type


* []() – `https://ns.adobe.com/xdm/datatypes/qoeDataDetails`







#### xdm:sessionDetails
##### Session Details

Session details information related to the experience event.

`xdm:sessionDetails`
* is optional
* type: reference

##### xdm:sessionDetails Type


* []() – `https://ns.adobe.com/xdm/datatypes/sessionDetails`







#### xdm:statesEnd
##### List Of States End

The list of states end.

`xdm:statesEnd`
* is optional
* type: reference


##### xdm:statesEnd Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/datatypes/playerStateData`










#### xdm:statesStart
##### List Of States Start

The list of states start.

`xdm:statesStart`
* is optional
* type: reference


##### xdm:statesStart Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/datatypes/playerStateData`












