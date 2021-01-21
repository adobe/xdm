
# Media Interaction Details  Schema

```
https://ns.adobe.com/xdm/context/experienceevent-media
```

Track interactions with media such as progress (how much was consumed), total time played, timing of any pauses, and number of media completions.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-media.schema.json](mixins/experience-event/experienceevent-media.schema.json) |
## Schema Hierarchy

* Media Interaction Details  `https://ns.adobe.com/xdm/context/experienceevent-media`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Media information](../../datatypes/media/media.schema.md) `https://ns.adobe.com/xdm/context/media`


## Media Interaction Details  Example
```json
{
  "xdm:media": {
    "xdm:mediaTimed": {
      "xdm:primaryAssetReference": {
        "@id": "https://data.adobe.io/entities/media-timed-asset-reference/15234430",
        "dc:title": "Floki Begs Helga for Freedom",
        "dc:creator": "Video Author",
        "dc:publisher": "tvonline",
        "xmpDM:duration": 87,
        "iptc4xmpExt:Series": {
          "iptc4xmpExt:Name": "nba_highlights",
          "iptc4xmpExt:Identifier": "http://sportcnl.com/series-identifiers/2613953"
        },
        "xdm:showType": "episode",
        "xdm:streamFormat": "long",
        "xdm:streamType": "video",
        "iptc4xmpExt:Season": {
          "iptc4xmpExt:Number": 1
        },
        "iptc4xmpExt:Episode": {
          "iptc4xmpExt:Number": 1
        },
        "iptc4xmpExt:Genre": [
          "sports"
        ],
        "iptc4xmpExt:Rating": [
          {
            "iptc4xmpExt:RatingValue": "TV14",
            "iptc4xmpExt:RatingSourceLink": "http://www.tvguidelines.org/ratings.htm"
          }
        ],
        "iptc4xmpExt:Creator": [
          {
            "iptc4xmpExt:Name": "SportCNL"
          }
        ]
      },
      "xdm:primaryAssetViewDetails": {
        "@id": "https://data.adobe.io/entities/media-sessionid/1427461282884250114230",
        "xdm:playerName": "watchsportcnl",
        "xdm:videoSegment": "3-10",
        "xdm:path": "id:arg:ep:npqr.com:dfb21354-4ce7",
        "xdm:broadcastChannel": "WatchSportCnl",
        "xdm:broadcastContentType": "VOD",
        "xdm:streamFormat": "short",
        "xdm:vhlVersion": "js-2.0.1.88-c8c0b1",
        "xdm:playerSDKVersion": {
          "xdm:version": "1.0.8"
        },
        "xdm:broadcastNetwork": "scu",
        "xdm:adLoadType": "2",
        "xdm:sourceFeed": "http%3A%2F%2Fvod01.url.net%2Fhls%2Fvu%2F9083406%2FVUBX0280890106690980_38_3_M_HD.m3u8",
        "xdm:sessionTimeout": 1800,
        "xdm:QOE": {
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
          "xdm:bitrateAverage": {
            "xdm:value": 320
          },
          "xdm:bitrateAverageBucket": "800-899",
          "xdm:bitrateChangeImpactedStreams": {
            "xdm:value": 0
          },
          "xdm:dropBeforeStart": {
            "xdm:value": 0
          },
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
        },
        "xdm:downloadedPlayback": false
      },
      "xdm:impressions": {
        "xdm:value": 1
      },
      "xdm:completes": {
        "xdm:value": 0
      },
      "xdm:timePlayed": {
        "xdm:value": 80
      },
      "xdm:federated": {
        "xdm:value": 0
      },
      "xdm:starts": {
        "xdm:value": 1
      },
      "xdm:mediaSegmentView": {
        "xdm:value": 1
      },
      "xdm:totalTimePlayed": {
        "xdm:value": 190
      },
      "xdm:uniqueTimePlayed": {
        "xdm:value": 80
      },
      "xdm:averageMinuteAudience": {
        "xdm:value": 1.03
      },
      "xdm:adCount": {
        "xdm:value": 3
      },
      "xdm:chapterCount": {
        "xdm:value": 1
      },
      "xdm:progress10": {
        "xdm:value": 1
      },
      "xdm:firstQuartiles": {
        "xdm:value": 1
      },
      "xdm:midpoints": {
        "xdm:value": 1
      },
      "xdm:thirdQuartiles": {
        "xdm:value": 1
      },
      "xdm:progress95": {
        "xdm:value": 0
      },
      "xdm:resumes": {
        "xdm:value": 0
      },
      "xdm:estimatedStreams": {
        "xdm:value": 2
      },
      "xdm:pauseImpactedStreams": {
        "xdm:value": 3
      },
      "xdm:pauses": {
        "xdm:value": 0
      },
      "xdm:pauseTime": {
        "xdm:value": 0
      },
      "xdm:idp": "MyTVOnline",
      "xdm:mediaAuth": "Sample auth",
      "xdm:dayPart": "daytime"
    }
  }
}
```

# Media Interaction Details  Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:media](#xdmmedia) | Media information | Optional | Media Interaction Details  (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:media
### Media

Media activity information related to the experience event.

`xdm:media`
* is optional
* type: Media information
* defined in this schema

### xdm:media Type


* [Media information](../../datatypes/media/media.schema.md) – `https://ns.adobe.com/xdm/context/media`




