
# ExperienceEvent details for media Schema

```
https://ns.adobe.com/xdm/context/experienceevent-media
```

This mixin is used to capture information regarding interactions with media such as progress (how much was consumed), total time played, timing of any pauses, and number of media completions.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-media.schema.json](context/experienceevent-media.schema.json) |
## Schema Hierarchy

* ExperienceEvent details for media `https://ns.adobe.com/xdm/context/experienceevent-media`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Media information](media.schema.md) `https://ns.adobe.com/xdm/context/media`


## ExperienceEvent details for media Example
```json
{
  "xdm:media": {
    "xdm:mediaTimed": {
      "xdm:primaryAssetReference": {
        "@id": "https://data.adobe.io/entities/media-timed-asset-reference/15234430",
        "dc:title": "Floki Begs Helga for Freedom",
        "xmpDM:duration": 87,
        "iptc4xmpExt:Series": {
          "iptc4xmpExt:Name": "nba_highlights",
          "iptc4xmpExt:Identifier": "http://espn.com/series-identifiers/2613953"
        },
        "xdm:showType": "episode",
        "xdm:streamFormat": "long",
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
            "iptc4xmpExt:Name": "ESPN"
          }
        ]
      },
      "xdm:primaryAssetViewDetails": {
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
        "xdm:sessionTimeout": 1800,
        "xdm:QOE": {
          "xdm:errors": {
            "xdm:value": 0
          },
          "xdm:buffers": {
            "xdm:value": 4
          },
          "xdm:bufferTime": {
            "xdm:value": 5
          },
          "xdm:stalls": {
            "xdm:value": 0
          },
          "xdm:stallTime": {
            "xdm:value": 0
          },
          "xdm:bitrateChanges": {
            "xdm:value": 0
          },
          "xdm:bitrateAverage": {
            "xdm:value": 320
          },
          "xdm:droppedFrames": {
            "xdm:value": 2
          },
          "xdm:timeToStart": {
            "xdm:value": 3
          },
          "xdm:mediaSdkErrors": "300,500.300.200",
          "xdm:playerSdkErrors": "custom.error.code",
          "xdm:externalSdkErrors": "100-5,11.12"
        }
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
      "xdm:dropBeforeStart": {
        "xdm:value": 0
      },
      "xdm:totalTimePlayed": {
        "xdm:value": 190
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
      "xdm:pauses": {
        "xdm:value": 0
      },
      "xdm:pauseTime": {
        "xdm:value": 0
      }
    }
  }
}
```

# ExperienceEvent details for media Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:media](#xdmmedia) | Media information | Optional | ExperienceEvent details for media (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:media
### Media

Media activity information related to the experience event.

`xdm:media`
* is optional
* type: Media information
* defined in this schema

### xdm:media Type


* [Media information](media.schema.md) – `https://ns.adobe.com/xdm/context/media`




