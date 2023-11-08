
# MediaAnalytics Interaction Details  Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-media-analytics
```

Track interactions with media.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-media-analytics.schema.json](fieldgroups/experience-event/experienceevent-media-analytics.schema.json) |
## Schema Hierarchy

* MediaAnalytics Interaction Details  `https://ns.adobe.com/xdm/mixins/experienceevent-media-analytics`
  * [Media details information](../../datatypes/mediadetails.schema.md) `https://ns.adobe.com/xdm/datatypes/mediaDetails`


## MediaAnalytics Interaction Details  Example
```json
{
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
      "xdm:playerName": "playerName"
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
  },
  "xdm:mediaReporting": {
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
      "xdm:playerName": "playerName"
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
    "xdm:qoeDataDetails": {
      "xdm:bitrateAverageBucket": "800-899"
    },
    "xdm:states": [
      {
        "xdm:name": "pictureInPicture",
        "xdm:set": true,
        "xdm:count": 2,
        "xdm:time": 100
      }
    ]
  },
  "xdm:mediaDownloadedEvents": [
    {
      "xdm:mediaEventTimestamp": "2017-09-26T15:52:25+00:00",
      "xdm:mediaEventType": "media.sessionStart",
      "xdm:mediaCollection": {
        "xdm:playhead": 0,
        "xdm:sessionDetails": {
          "xdm:ID": "1482236761294786918253",
          "xdm:name": "123456789",
          "xdm:length": 100,
          "xdm:contentType": "VOD",
          "xdm:playerName": "playerName",
          "xdm:channel": "channel"
        },
        "xdm:qoeDataDetails": {
          "xdm:bitrate": 100
        }
      }
    },
    {
      "xdm:mediaEventTimestamp": "2017-09-26T15:53:25+00:00",
      "xdm:mediaEventType": "media.play",
      "xdm:mediaCollection": {
        "xdm:playhead": 5,
        "xdm:qoeDataDetails": {
          "xdm:timeToStart": 1234
        }
      }
    },
    {
      "xdm:mediaEventTimestamp": "2017-09-26T15:54:25+00:00",
      "xdm:mediaEventType": "media.chapterStart",
      "xdm:mediaCollection": {
        "xdm:playhead": 10,
        "xdm:chapterDetails": {
          "xdm:friendlyName": "friendlyName",
          "xdm:length": 100,
          "xdm:offset": 50,
          "xdm:index": 2,
          "xdm:isStarted": false,
          "xdm:isCompleted": false,
          "xdm:timePlayed": 70
        }
      }
    },
    {
      "xdm:mediaEventTimestamp": "2017-09-26T15:55:25+00:00",
      "xdm:mediaEventType": "media.ping",
      "xdm:mediaCollection": {
        "xdm:playhead": 15
      }
    },
    {
      "xdm:mediaEventTimestamp": "2017-09-26T15:56:25+00:00",
      "xdm:mediaEventType": "media.chapterComplete",
      "xdm:mediaCollection": {
        "xdm:playhead": 20
      }
    },
    {
      "xdm:mediaEventTimestamp": "2017-09-26T15:57:25+00:00",
      "xdm:mediaEventType": "media.adStart",
      "xdm:mediaCollection": {
        "xdm:advertisingDetails": {
          "xdm:ID": "123456789",
          "xdm:length": 100,
          "xdm:podPosition": 1,
          "xdm:playerName": "playerName"
        },
        "xdm:playhead": 25
      }
    },
    {
      "xdm:mediaEventTimestamp": "2017-09-26T15:58:25+00:00",
      "xdm:mediaEventType": "media.adBreakStart",
      "xdm:mediaCollection": {
        "xdm:advertisingPodDetails": {
          "xdm:index": 2,
          "xdm:offset": 123,
          "xdm:ID": "123"
        },
        "xdm:playhead": 30
      }
    },
    {
      "xdm:mediaEventTimestamp": "2017-09-26T15:59:25+00:00",
      "xdm:mediaEventType": "media.adBreakComplete",
      "xdm:mediaCollection": {
        "xdm:playhead": 35
      }
    },
    {
      "xdm:mediaEventTimestamp": "2017-09-26T16:00:25+00:00",
      "xdm:mediaEventType": "media.adComplete",
      "xdm:mediaCollection": {
        "xdm:playhead": 40
      }
    },
    {
      "xdm:mediaEventTimestamp": "2017-09-26T16:01:25+00:00",
      "xdm:mediaEventType": "media.sessionComplete",
      "xdm:mediaCollection": {
        "xdm:playhead": 45
      }
    }
  ]
}
```

# MediaAnalytics Interaction Details  Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:mediaCollection](#xdmmediacollection) | Media details information | Optional | MediaAnalytics Interaction Details  (this schema) |
| [xdm:mediaDownloadedEvents](#xdmmediadownloadedevents) | Media event information | Optional | MediaAnalytics Interaction Details  (this schema) |
| [xdm:mediaReporting](#xdmmediareporting) | Media details information | Optional | MediaAnalytics Interaction Details  (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:mediaCollection
### Media Collection Details

Media Collection related fields.

`xdm:mediaCollection`
* is optional
* type: Media details information
* defined in this schema

### xdm:mediaCollection Type


* [Media details information](../../datatypes/mediadetails.schema.md) – `https://ns.adobe.com/xdm/datatypes/mediaDetails`





## xdm:mediaDownloadedEvents
### List Of Media Collection Downloaded Content Events

The list of media collection downloaded content events.

`xdm:mediaDownloadedEvents`
* is optional
* type: Media event information

* defined in this schema

### xdm:mediaDownloadedEvents Type


Array type: Media event information

All items must be of the type:
* [Media event information](../../datatypes/mediaevent.schema.md) – `https://ns.adobe.com/xdm/datatypes/mediaEvent`








## xdm:mediaReporting
### Media Reporting Details

Media Reporting related fields.

`xdm:mediaReporting`
* is optional
* type: Media details information
* defined in this schema

### xdm:mediaReporting Type


* [Media details information](../../datatypes/mediadetails.schema.md) – `https://ns.adobe.com/xdm/datatypes/mediaDetails`




