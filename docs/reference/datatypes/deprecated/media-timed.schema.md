
# Timed media information Schema

```
https://ns.adobe.com/xdm/context/media-timed
```

Information related to timed media such main content, ads, and chapters.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/deprecated/media-timed.schema.json](datatypes/deprecated/media-timed.schema.json) |
## Schema Hierarchy

* Timed media information `https://ns.adobe.com/xdm/context/media-timed`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Timed media primary asset reference](media-timed-asset-reference.schema.md) `https://ns.adobe.com/xdm/context/media-timed-asset-reference`
  * [Primary asset view details](media-timed-asset-view-details.schema.md) `https://ns.adobe.com/xdm/context/media-timed-asset-view-details`
  * [Timed media chapter information](media-timed-chapter.schema.md) `https://ns.adobe.com/xdm/context/media-timed-chapter`
  * [Measure](../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Timed media information Example
```json
{
  "xdm:primaryAssetReference": {
    "@id": "https://data.adobe.io/entities/media-timed-asset-reference/15234430",
    "dc:title": "Floki Begs Helga for Freedom",
    "dc:creator": "Video Author",
    "dc:publisher": "tvonline",
    "xmpDM:duration": 87,
    "iptc4xmpExt:Series": {
      "iptc4xmpExt:Name": "show_summary",
      "iptc4xmpExt:Identifier": "http://sporttv.com/series-identifiers/2613123"
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
        "iptc4xmpExt:RatingValue": "MYTV",
        "iptc4xmpExt:RatingSourceLink": "http://www.sporttops.org/ratings.htm"
      }
    ],
    "iptc4xmpExt:Creator": [
      {
        "iptc4xmpExt:Name": "SportTV"
      }
    ]
  },
  "xdm:primaryAssetViewDetails": {
    "@id": "https://data.adobe.io/entities/media-sessionid/1427461282884250114230",
    "xdm:playerName": "watchsport",
    "xdm:videoSegment": "3-10",
    "xdm:path": "id:show:season:episode:bla.com:123a12263-4ce7",
    "xdm:broadcastChannel": "WatchSportTV",
    "xdm:broadcastContentType": "VOD",
    "xdm:streamFormat": "short",
    "xdm:playerSDKVersion": {
      "xdm:version": "1.0.8"
    },
    "xdm:broadcastNetwork": "ntwu",
    "xdm:adLoadType": "2",
    "xdm:sourceFeed": "http%3A%2F%2Fvod01.this.link.net%2Fhls%2Fvu%2F9083406%2FVUBX02804879t475=90980_38_3_M_HD.m3u8",
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
    }
  },
  "xdm:mediaChapter": {
    "xdm:chapterAssetReference": {
      "@id": "https://data.adobe.io/entities/media-chapter-asset-reference/2144511",
      "dc:title": "Chapter1",
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
```

# Timed media information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:adCount](#xdmadcount) | Measure | Optional | Timed media information (this schema) |
| [xdm:averageMinuteAudience](#xdmaverageminuteaudience) | Measure | Optional | Timed media information (this schema) |
| [xdm:chapterCount](#xdmchaptercount) | Measure | Optional | Timed media information (this schema) |
| [xdm:completes](#xdmcompletes) | Measure | Optional | Timed media information (this schema) |
| [xdm:dayPart](#xdmdaypart) | `string` | Optional | Timed media information (this schema) |
| [xdm:dropBeforeStarts](#xdmdropbeforestarts) | Measure | Optional | Timed media information (this schema) |
| [xdm:estimatedStreams](#xdmestimatedstreams) | Measure | Optional | Timed media information (this schema) |
| [xdm:federated](#xdmfederated) | Measure | Optional | Timed media information (this schema) |
| [xdm:idp](#xdmidp) | `string` | Optional | Timed media information (this schema) |
| [xdm:impressions](#xdmimpressions) | Measure | Optional | Timed media information (this schema) |
| [xdm:mediaAuth](#xdmmediaauth) | `string` | Optional | Timed media information (this schema) |
| [xdm:mediaChapter](#xdmmediachapter) | Timed media chapter information | Optional | Timed media information (this schema) |
| [xdm:mediaSegmentViews](#xdmmediasegmentviews) | Measure | Optional | Timed media information (this schema) |
| [xdm:pauseImpactedStreams](#xdmpauseimpactedstreams) | Measure | Optional | Timed media information (this schema) |
| [xdm:pauseTime](#xdmpausetime) | Measure | Optional | Timed media information (this schema) |
| [xdm:pauses](#xdmpauses) | Measure | Optional | Timed media information (this schema) |
| [xdm:primaryAssetReference](#xdmprimaryassetreference) | Timed media primary asset reference | Optional | Timed media information (this schema) |
| [xdm:primaryAssetViewDetails](#xdmprimaryassetviewdetails) | Primary asset view details | Optional | Timed media information (this schema) |
| [xdm:progress10](#xdmprogress10) | Measure | Optional | Timed media information (this schema) |
| [xdm:progress25](#xdmprogress25) | Measure | Optional | Timed media information (this schema) |
| [xdm:progress50](#xdmprogress50) | Measure | Optional | Timed media information (this schema) |
| [xdm:progress75](#xdmprogress75) | Measure | Optional | Timed media information (this schema) |
| [xdm:progress95](#xdmprogress95) | Measure | Optional | Timed media information (this schema) |
| [xdm:resumes](#xdmresumes) | Measure | Optional | Timed media information (this schema) |
| [xdm:starts](#xdmstarts) | Measure | Optional | Timed media information (this schema) |
| [xdm:timePlayed](#xdmtimeplayed) | Measure | Optional | Timed media information (this schema) |
| [xdm:totalTimePlayed](#xdmtotaltimeplayed) | Measure | Optional | Timed media information (this schema) |
| [xdm:uniqueTimePlayed](#xdmuniquetimeplayed) | Measure | Optional | Timed media information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:adCount
### Ad count

The number of ads started during the playback.

`xdm:adCount`
* is optional
* type: Measure
* defined in this schema

### xdm:adCount Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:averageMinuteAudience
### Average Minute Audience

Describes the average content time spent for a specific media item - i.e. the total content time spent divided by the length for all of the playback sessions.

`xdm:averageMinuteAudience`
* is optional
* type: Measure
* defined in this schema

### xdm:averageMinuteAudience Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:chapterCount
### Chapter count

The number of chapters started during the playback.

`xdm:chapterCount`
* is optional
* type: Measure
* defined in this schema

### xdm:chapterCount Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:completes
### Content completes

Indicates if a timed media asset was watched to completion, this does not necessarily mean the viewer watched the whole video; viewer could have skipped ahead.

`xdm:completes`
* is optional
* type: Measure
* defined in this schema

### xdm:completes Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:dayPart
### Day part

Defines the time of the day when the content was broadcast or played.

`xdm:dayPart`
* is optional
* type: `string`
* defined in this schema

### xdm:dayPart Type


`string`






## xdm:dropBeforeStarts
### Drops before starts

Indicates the user abandoned the media stream before the first frame for example, during the pre-roll ad break, or due to an error while loading the content from the CDN.

`xdm:dropBeforeStarts`
* is optional
* type: Measure
* defined in this schema

### xdm:dropBeforeStarts Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:estimatedStreams
### Estimated streams

The estimated number of video or audio streams per each individual content.

`xdm:estimatedStreams`
* is optional
* type: Measure
* defined in this schema

### xdm:estimatedStreams Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:federated
### Media federated

Indicates the experience event was created through data federation or data sharing.

`xdm:federated`
* is optional
* type: Measure
* defined in this schema

### xdm:federated Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:idp
### MVPD Identifier

The MVPD (Multichannel Video Programming Distributor) provided via authentication. [https://en.wikipedia.org/?title=MVPD]

`xdm:idp`
* is optional
* type: `string`
* defined in this schema

### xdm:idp Type


`string`






## xdm:impressions
### Media starts

Describes the intention to play a timed media asset. It does not measure success, as the user might abandon the content before the first frame is viewed.

`xdm:impressions`
* is optional
* type: Measure
* defined in this schema

### xdm:impressions Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:mediaAuth
### Media authorized

The user has been authorized via authentication.

`xdm:mediaAuth`
* is optional
* type: `string`
* defined in this schema

### xdm:mediaAuth Type


`string`






## xdm:mediaChapter
### Media chapter

Timed media chapter information.

`xdm:mediaChapter`
* is optional
* type: Timed media chapter information
* defined in this schema

### xdm:mediaChapter Type


* [Timed media chapter information](media-timed-chapter.schema.md) – `https://ns.adobe.com/xdm/context/media-timed-chapter`





## xdm:mediaSegmentViews
### Media segment views

Indicates when at least one frame, not necessarily the first has been viewed.

`xdm:mediaSegmentViews`
* is optional
* type: Measure
* defined in this schema

### xdm:mediaSegmentViews Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:pauseImpactedStreams
### Pause impacted streams

Indicates if one or more pauses occurred during the playback of a single media item.

`xdm:pauseImpactedStreams`
* is optional
* type: Measure
* defined in this schema

### xdm:pauseImpactedStreams Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:pauseTime
### Total pause duration

Describes the duration in seconds in which playback was paused by the user.

`xdm:pauseTime`
* is optional
* type: Measure
* defined in this schema

### xdm:pauseTime Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:pauses
### Pause events

The number of pause periods that occurred during playback.

`xdm:pauses`
* is optional
* type: Measure
* defined in this schema

### xdm:pauses Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:primaryAssetReference
### Primary asset reference

Asset information about the main content that was played, present on all ads and chapters that occur during the content's playback.

`xdm:primaryAssetReference`
* is optional
* type: Timed media primary asset reference
* defined in this schema

### xdm:primaryAssetReference Type


* [Timed media primary asset reference](media-timed-asset-reference.schema.md) – `https://ns.adobe.com/xdm/context/media-timed-asset-reference`





## xdm:primaryAssetViewDetails
### Primary asset view details

View details for the main content playback, present on all ads and chapters that occur during the content's playback.

`xdm:primaryAssetViewDetails`
* is optional
* type: Primary asset view details
* defined in this schema

### xdm:primaryAssetViewDetails Type


* [Primary asset view details](media-timed-asset-view-details.schema.md) – `https://ns.adobe.com/xdm/context/media-timed-asset-view-details`





## xdm:progress10
### 10% Progress marker

Indicates that the playhead passed the 10% marker of media based on stream length. The marker is only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress10`
* is optional
* type: Measure
* defined in this schema

### xdm:progress10 Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:progress25
### 25% Progress marker

Indicates that the playhead passed the 25% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress25`
* is optional
* type: Measure
* defined in this schema

### xdm:progress25 Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:progress50
### 50% Progress marker

Indicates that the playhead passed the 50% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress50`
* is optional
* type: Measure
* defined in this schema

### xdm:progress50 Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:progress75
### 75% Progress marker

Indicates that the playhead passed the 75% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress75`
* is optional
* type: Measure
* defined in this schema

### xdm:progress75 Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:progress95
### 95% Progress marker

Indicates that the playhead passed the 95% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress95`
* is optional
* type: Measure
* defined in this schema

### xdm:progress95 Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:resumes
### Content resumes

Marks each playback that was resumed after more than 30 minutes of buffer, pause, or stall period.

`xdm:resumes`
* is optional
* type: Measure
* defined in this schema

### xdm:resumes Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:starts
### Content starts

Indicates the first frame of the timed media asset has been viewed for example, the viewer did not abandon during pre-roll ad, or buffering.

`xdm:starts`
* is optional
* type: Measure
* defined in this schema

### xdm:starts Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:timePlayed
### Content time spent

The amount of time spent in seconds by a user on a specific timed media asset.

`xdm:timePlayed`
* is optional
* type: Measure
* defined in this schema

### xdm:timePlayed Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:totalTimePlayed
### Media Time Spent

Describes the total amount of time spent by a user on a specific timed media asset, which includes time spent watching ads.

`xdm:totalTimePlayed`
* is optional
* type: Measure
* defined in this schema

### xdm:totalTimePlayed Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:uniqueTimePlayed
### Unique Time Played

Describes the sum of the unique intervals seen by a user on a timed media asset - i.e. the length playback intervals viewed multiple times are only counted once.

`xdm:uniqueTimePlayed`
* is optional
* type: Measure
* defined in this schema

### xdm:uniqueTimePlayed Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




