
# Media information Schema

```
https://ns.adobe.com/xdm/context/media
```

Media context information for content related interactions.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/media.schema.json](context/media.schema.json) |
## Schema Hierarchy

* Media information `https://ns.adobe.com/xdm/context/media`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Timed media information](media-timed.schema.md) `https://ns.adobe.com/xdm/context/media-timed`


## Media information Example
```json
{
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
      "iptc4xmpExt:rating": [
        {
          "iptc4xmpExt:RatingValue": "TV14",
          "iptc4xmpExt:RatingSourceLink": "http://www.tvguidelines.org/ratings.htm"
        }
      ],
      "iptc4xmpExt:creator": [
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
      "xdm:sessionTimeout": 1800
    },
    "xdm:mediaChapter": {
      "xdm:chapterAssetReference": {
        "@id": "https://data.adobe.io/entities/media-chapter-asset-reference/2144511",
        "xdm:name": "Chapter1",
        "xmpDM:duration": 44
      },
      "xdm:chapterAssetViewDetails": {
        "xdm:index": 0,
        "xdm:offset": 0
      },
      "xdm:impressions": {
        "xdm:value": 1
      },
      "xdm:completes": {
        "xdm:value": 1
      },
      "xdm:timePlayed": {
        "xdm:value": 44
      },
      "xdm:federated": {
        "xdm:value": 0
      }
    }
  }
}
```

# Media information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:mediaTimed](#xdmmediatimed) | Timed media information | Optional | Media information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:mediaTimed
### Timed media information

Information related to timed media main content, such as ads and chapters.

`xdm:mediaTimed`
* is optional
* type: Timed media information
* defined in this schema

### xdm:mediaTimed Type


* [Timed media information](media-timed.schema.md) – `https://ns.adobe.com/xdm/context/media-timed`




