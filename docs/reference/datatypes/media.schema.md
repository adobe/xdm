
# Media information Schema

```
https://ns.adobe.com/xdm/context/media
```

Media context information for content related interactions.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/media.schema.json](datatypes/media.schema.json) |

## Media information Example
```json
{
  "xdm:mediaTimed": {
    "xdm:primaryAssetReference": {
      "@id": "https://data.adobe.io/entities/media-timed-asset-reference/15234430",
      "dc:title": "Floki Begs Helga for Freedom",
      "dc:creator": "Video Author",
      "dc:publisher": "tvonline",
      "xmpDM:duration": 87,
      "iptc4xmpExt:Series": {
        "iptc4xmpExt:Name": "nba_highlights",
        "iptc4xmpExt:Identifier": "http://espn.com/series-identifiers/2613953"
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
      "iptc4xmpExt:rating": [
        {
          "iptc4xmpExt:RatingValue": "TV",
          "iptc4xmpExt:RatingSourceLink": "http://www.tvrates.org/ratings.htm"
        }
      ],
      "iptc4xmpExt:creator": [
        {
          "iptc4xmpExt:Name": "MyChannel"
        }
      ]
    },
    "xdm:primaryAssetViewDetails": {
      "@id": "https://data.adobe.io/entities/media-sessionid/1427461282884250114230",
      "xdm:playerName": "watchmytv",
      "xdm:videoSegment": "[3-10]",
      "xdm:path": "mid:movie:part:foo.com:dfehfdb3-4ce7",
      "xdm:broadcastChannel": "WatchMyTV",
      "xdm:broadcastContentType": "VOD",
      "xdm:streamFormat": "short",
      "xdm:vhlVersion": "js-2.0.1.88-c8c0b1",
      "xdm:playerSDKVersion": {
        "xdm:version": "1.0.8"
      },
      "xdm:broadcastNetwork": "eccu",
      "xdm:adLoadType": "2",
      "xdm:sourceFeed": "http%3A%2F%2Fvod01.pure.centurylink.net%2Fhls%2Fvu%2F9080890106690980_38_3_M_HD.m3u8",
      "xdm:sessionTimeout": 1800,
      "xdm:downloadedPlayback": false
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
    },
    "xdm:playhead": 831
  }
}
```

# Media information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:mediaTimed](#xdmmediatimed) | `object` | Optional | Media information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:mediaTimed
### Timed media information

Information related to timed media main content, such as ads and chapters.

`xdm:mediaTimed`
* is optional
* type: `object`
* defined in this schema

### xdm:mediaTimed Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:adCount`|  | Optional |
| `xdm:averageMinuteAudience`|  | Optional |
| `xdm:chapterCount`|  | Optional |
| `xdm:completes`|  | Optional |
| `xdm:dayPart`| string | Optional |
| `xdm:dropBeforeStarts`|  | Optional |
| `xdm:estimatedStreams`|  | Optional |
| `xdm:federated`|  | Optional |
| `xdm:idp`| string | Optional |
| `xdm:impressions`|  | Optional |
| `xdm:mediaAuth`| string | Optional |
| `xdm:mediaChapter`| object | Optional |
| `xdm:mediaSegmentViews`|  | Optional |
| `xdm:pauseImpactedStreams`|  | Optional |
| `xdm:pauseTime`|  | Optional |
| `xdm:pauses`|  | Optional |
| `xdm:playhead`| integer | Optional |
| `xdm:primaryAssetReference`| object | **Required** |
| `xdm:primaryAssetViewDetails`| object | Optional |
| `xdm:progress10`|  | Optional |
| `xdm:progress25`|  | Optional |
| `xdm:progress50`|  | Optional |
| `xdm:progress75`|  | Optional |
| `xdm:progress95`|  | Optional |
| `xdm:publisher`| string | Optional |
| `xdm:radioStation`| string | Optional |
| `xdm:recordLabel`| string | Optional |
| `xdm:resumes`|  | Optional |
| `xdm:starts`|  | Optional |
| `xdm:timePlayed`|  | Optional |
| `xdm:totalTimePlayed`|  | Optional |
| `xdm:uniqueTimePlayed`|  | Optional |



#### xdm:adCount
##### Ad count

The number of ads started during the playback.

`xdm:adCount`
* is optional
* type: reference

##### xdm:adCount Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:averageMinuteAudience
##### Average Minute Audience

Describes the average content time spent for a specific media item - i.e. the total content time spent divided by the length for all of the playback sessions.

`xdm:averageMinuteAudience`
* is optional
* type: reference

##### xdm:averageMinuteAudience Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:chapterCount
##### Chapter count

The number of chapters started during the playback.

`xdm:chapterCount`
* is optional
* type: reference

##### xdm:chapterCount Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:completes
##### Content completes

Indicates if a timed media asset was watched to completion, this does not necessarily mean the viewer watched the whole video; viewer could have skipped ahead.

`xdm:completes`
* is optional
* type: reference

##### xdm:completes Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:dayPart
##### Day part

Defines the time of the day when the content was broadcast or played.

`xdm:dayPart`
* is optional
* type: `string`

##### xdm:dayPart Type


`string`








#### xdm:dropBeforeStarts
##### Drops before starts

Indicates the user abandoned the media stream before the first frame for example, during the pre-roll ad break, or due to an error while loading the content from the CDN.

`xdm:dropBeforeStarts`
* is optional
* type: reference

##### xdm:dropBeforeStarts Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:estimatedStreams
##### Estimated streams

The estimated number of video or audio streams per each individual content.

`xdm:estimatedStreams`
* is optional
* type: reference

##### xdm:estimatedStreams Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:federated
##### Media federated

Indicates the experience event was created through data federation or data sharing.

`xdm:federated`
* is optional
* type: reference

##### xdm:federated Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:idp
##### MVPD Identifier

The MVPD (Multichannel Video Programming Distributor) provided via authentication. [https://en.wikipedia.org/?title=MVPD]

`xdm:idp`
* is optional
* type: `string`

##### xdm:idp Type


`string`








#### xdm:impressions
##### Media starts

Describes the intention to play a timed media asset. It does not measure success, as the user might abandon the content before the first frame is viewed.

`xdm:impressions`
* is optional
* type: reference

##### xdm:impressions Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:mediaAuth
##### Media authorized

The user has been authorized via authentication.

`xdm:mediaAuth`
* is optional
* type: `string`

##### xdm:mediaAuth Type


`string`








#### xdm:mediaChapter
##### Media chapter

Timed media chapter information.

`xdm:mediaChapter`
* is optional
* type: `object`

##### xdm:mediaChapter Type

Unknown type `object`.

```json
{
  "title": "Media chapter",
  "type": "object",
  "description": "Timed media chapter information.",
  "properties": {
    "xdm:chapterAssetReference": {
      "title": "Chapter asset reference",
      "type": "object",
      "description": "Asset information about the chapter captured by the experience event.",
      "properties": {
        "@id": {
          "title": "Chapter identity",
          "format": "uri-reference",
          "type": "string",
          "description": "The identity of the chapter.",
          "meta:titleId": "media##@id##title##5221",
          "meta:descriptionId": "media##@id##description##56711"
        },
        "dc:title": {
          "title": "Chapter name",
          "type": "string",
          "description": "The friendly name of the chapter and or segment.",
          "meta:titleId": "media##dc:title##title##84041",
          "meta:descriptionId": "media##dc:title##description##75401"
        },
        "xmpDM:duration": {
          "title": "Chapter length or duration",
          "type": "integer",
          "description": "The length of the chapter, in seconds.",
          "meta:titleId": "media##xmpDM:duration##title##141",
          "meta:descriptionId": "media##xmpDM:duration##description##58671"
        }
      },
      "required": [
        "@id"
      ],
      "meta:titleId": "media##xdm:chapterAssetReference##title##99301",
      "meta:descriptionId": "media##xdm:chapterAssetReference##description##67801"
    },
    "xdm:chapterAssetViewDetails": {
      "title": "Chapter view details",
      "type": "object",
      "description": "View details for the chapter playback captured by the experience event.",
      "properties": {
        "xdm:index": {
          "title": "Chapter position",
          "type": "integer",
          "description": "The index of the chapter inside the content.",
          "meta:titleId": "media##xdm:index##title##50891",
          "meta:descriptionId": "media##xdm:index##description##97561"
        },
        "xdm:offset": {
          "title": "Chapter offset",
          "type": "integer",
          "description": "The offset of the chapter, in seconds, inside the content from the start.",
          "meta:titleId": "media##xdm:offset##title##54011",
          "meta:descriptionId": "media##xdm:offset##description##67351"
        }
      },
      "required": [
        "xdm:index",
        "xdm:offset"
      ],
      "meta:titleId": "media##xdm:chapterAssetViewDetails##title##8461",
      "meta:descriptionId": "media##xdm:chapterAssetViewDetails##description##98211"
    },
    "xdm:impressions": {
      "title": "Chapter starts",
      "$ref": "https://ns.adobe.com/xdm/data/measure",
      "description": "Describes the intention to play a timed media asset. It does not measure success, as the user might abandon the content before the first frame is viewed.",
      "meta:titleId": "media##xdm:impressions##title##11181",
      "meta:descriptionId": "media##xdm:impressions##description##22751"
    },
    "xdm:completes": {
      "title": "Chapter completes",
      "$ref": "https://ns.adobe.com/xdm/data/measure",
      "description": "Indicates if a timed media asset was watched to completion - this does not necessarily mean the viewer watched the whole video; viewer could have skipped ahead.",
      "meta:titleId": "media##xdm:completes##title##82871",
      "meta:descriptionId": "media##xdm:completes##description##42231"
    },
    "xdm:timePlayed": {
      "title": "Chapter time spent",
      "$ref": "https://ns.adobe.com/xdm/data/measure",
      "description": "Describes the amount of time in seconds spent by a user on a specific timed media asset.",
      "meta:titleId": "media##xdm:timePlayed##title##29851",
      "meta:descriptionId": "media##xdm:timePlayed##description##16081"
    },
    "xdm:federated": {
      "title": "Chapter federated",
      "$ref": "https://ns.adobe.com/xdm/data/measure",
      "description": "Indicates if an experience event was created through data federation or data sharing.",
      "meta:titleId": "media##xdm:federated##title##28261",
      "meta:descriptionId": "media##xdm:federated##description##22631"
    },
    "xdm:downloadedPlayback": {
      "title": "Chapter downloaded flag",
      "type": "boolean",
      "description": "Set to true when the hit is generated due to playing a downloaded chapter content session.",
      "meta:titleId": "media##xdm:downloadedPlayback##title##52801",
      "meta:descriptionId": "media##xdm:downloadedPlayback##description##42571"
    }
  },
  "meta:titleId": "media##xdm:mediaChapter##title##62931",
  "meta:descriptionId": "media##xdm:mediaChapter##description##75421",
  "simpletype": "`object`"
}
```







#### xdm:mediaSegmentViews
##### Media segment views

Indicates when at least one frame, not necessarily the first has been viewed.

`xdm:mediaSegmentViews`
* is optional
* type: reference

##### xdm:mediaSegmentViews Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:pauseImpactedStreams
##### Pause impacted streams

Indicates if one or more pauses occurred during the playback of a single media item.

`xdm:pauseImpactedStreams`
* is optional
* type: reference

##### xdm:pauseImpactedStreams Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:pauseTime
##### Total pause duration

Describes the duration in seconds in which playback was paused by the user.

`xdm:pauseTime`
* is optional
* type: reference

##### xdm:pauseTime Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:pauses
##### Pause events

The number of pause periods that occurred during playback.

`xdm:pauses`
* is optional
* type: reference

##### xdm:pauses Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:playhead
##### Player time playhead

If the content is live, the playhead must be the current second of the day, 0 <= playhead < 86400. If the content is recorded, the playhead must be the current second of content, 0 <= playhead < content length.

`xdm:playhead`
* is optional
* type: `integer`

##### xdm:playhead Type


`integer`








#### xdm:primaryAssetReference
##### Primary asset reference

Asset information about the main content that was played, present on all ads and chapters that occur during the content's playback.

`xdm:primaryAssetReference`
* is **required**
* type: `object`

##### xdm:primaryAssetReference Type

Unknown type `object`.

```json
{
  "title": "Primary asset reference",
  "type": "object",
  "description": "Asset information about the main content that was played, present on all ads and chapters that occur during the content's playback.",
  "properties": {
    "@id": {
      "title": "Asset ID",
      "type": "string",
      "format": "uri-reference",
      "description": "Identifier of the content, which can be used to tie back to other industry or CMS IDs.",
      "meta:titleId": "media##@id##title##39951",
      "meta:descriptionId": "media##@id##description##32411"
    },
    "dc:title": {
      "title": "Content name",
      "type": "string",
      "description": "The friendly, human-readable name of the timed media asset.",
      "meta:titleId": "media##dc:title##title##851",
      "meta:descriptionId": "media##dc:title##description##22221"
    },
    "dc:creator": {
      "title": "Originator",
      "type": "string",
      "description": "Creator of the content.",
      "meta:titleId": "media##dc:creator##title##1951",
      "meta:descriptionId": "media##dc:creator##description##47391"
    },
    "id3:Audio": {
      "title": "Audio",
      "description": "Metadata specific to audio content (record label, radio station, etc.).",
      "$ref": "https://id3.org/id3v2.4/audio",
      "meta:status": "deprecated",
      "meta:titleId": "media##id3:Audio##title##50141",
      "meta:descriptionId": "media##id3:Audio##description##43031"
    },
    "xmpDM:artist": {
      "title": "Artist",
      "type": "string",
      "description": "The name of the album artist or group performing the music recording or video.",
      "meta:status": "deprecated",
      "meta:titleId": "media##xmpDM:artist##title##85051",
      "meta:descriptionId": "media##xmpDM:artist##description##73591"
    },
    "xmpDM:album": {
      "title": "Album",
      "type": "string",
      "description": "The name of the album that the music recording or video belongs to.",
      "meta:status": "deprecated",
      "meta:titleId": "media##xmpDM:album##title##95311",
      "meta:descriptionId": "media##xmpDM:album##description##63451"
    },
    "xdm:Audio": {
      "title": "Audio",
      "description": "Metadata specific to audio content (record label, radio station, etc.).",
      "type": "object",
      "properties": {
        "dc:creator": {
          "title": "Author",
          "type": "string",
          "description": "Name of the media author.",
          "meta:titleId": "media##dc:creator##title##16651",
          "meta:descriptionId": "media##dc:creator##description##30291"
        },
        "xmpDM:artist": {
          "title": "Artist",
          "type": "string",
          "description": "The name of the album artist or group performing the music recording or video.",
          "meta:titleId": "media##xmpDM:artist##title##90241",
          "meta:descriptionId": "media##xmpDM:artist##description##81851"
        },
        "xmpDM:album": {
          "title": "Album",
          "type": "string",
          "description": "The name of the album that the music recording or video belongs to.",
          "meta:titleId": "media##xmpDM:album##title##65521",
          "meta:descriptionId": "media##xmpDM:album##description##75141"
        },
        "id3:Audio": {
          "title": "Audio",
          "description": "Metadata specific to audio content (record label, radio station, etc.).",
          "$ref": "https://id3.org/id3v2.4/audio",
          "meta:titleId": "media##id3:Audio##title##86101",
          "meta:descriptionId": "media##id3:Audio##description##11881"
        }
      },
      "meta:titleId": "media##xdm:Audio##title##5061",
      "meta:descriptionId": "media##xdm:Audio##description##69821"
    },
    "xmpDM:duration": {
      "title": "Media content length",
      "type": "integer",
      "description": "Length of primary media asset in seconds.",
      "meta:titleId": "media##xmpDM:duration##title##97521",
      "meta:descriptionId": "media##xmpDM:duration##description##92011"
    },
    "xdm:showType": {
      "title": "Show type",
      "type": "string",
      "description": "The type of content for example, trailer or full episode.",
      "meta:titleId": "media##xdm:showType##title##15271",
      "meta:descriptionId": "media##xdm:showType##description##44461"
    },
    "iptc4xmpExt:Series": {
      "title": "Series",
      "description": "The series the show belongs to.",
      "$ref": "http://www.iptc.org/series",
      "meta:titleId": "media##iptc4xmpExt:Series##title##1131",
      "meta:descriptionId": "media##iptc4xmpExt:Series##description##79191"
    },
    "xdm:streamFormat": {
      "title": "Stream format",
      "type": "string",
      "description": "Free-form format of the stream for example, short or long.",
      "meta:titleId": "media##xdm:streamFormat##title##62991",
      "meta:descriptionId": "media##xdm:streamFormat##description##92311"
    },
    "xdm:streamType": {
      "title": "Stream type",
      "description": "The type of the media stream",
      "type": "string",
      "default": "video",
      "enum": [
        "audio",
        "video",
        "gaming"
      ],
      "meta:enum": {
        "audio": "An audio stream (e.g. podcast, audiobook, radio stream).",
        "video": "A video stream (e.g. Video-On-Demand, live event stream, downloaded movie).",
        "gaming": "A gaming stream (e.g. Twitch, Hitbox)."
      },
      "meta:titleId": "media##xdm:streamType##title##39001",
      "meta:descriptionId": "media##xdm:streamType##description##90081"
    },
    "iptc4xmpExt:Season": {
      "title": "Season",
      "description": "The season the show belongs to.",
      "$ref": "http://www.iptc.org/season",
      "meta:titleId": "media##iptc4xmpExt:Season##title##79121",
      "meta:descriptionId": "media##iptc4xmpExt:Season##description##97691"
    },
    "iptc4xmpExt:Episode": {
      "title": "Episode",
      "description": "The episode the show belongs to.",
      "$ref": "http://www.iptc.org/episode",
      "meta:titleId": "media##iptc4xmpExt:Episode##title##87541",
      "meta:descriptionId": "media##iptc4xmpExt:Episode##description##41771"
    },
    "iptc4xmpExt:Genre": {
      "title": "Genre",
      "description": "Type or grouping of content as defined by content producer.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "meta:titleId": "media##iptc4xmpExt:Genre##title##89361",
      "meta:descriptionId": "media##iptc4xmpExt:Genre##description##26691"
    },
    "iptc4xmpExt:Rating": {
      "title": "Content rating",
      "description": "The rating as defined by Parental Guidelines.",
      "type": "array",
      "items": {
        "$ref": "http://www.iptc.org/rating"
      },
      "meta:titleId": "media##iptc4xmpExt:Rating##title##67331",
      "meta:descriptionId": "media##iptc4xmpExt:Rating##description##30051"
    },
    "iptc4xmpExt:Creator": {
      "title": "Creator",
      "description": "Party or parties including person or organization which created the video, refinement by the role attribute.",
      "type": "array",
      "items": {
        "$ref": "http://www.iptc.org/creator"
      },
      "meta:titleId": "media##iptc4xmpExt:Creator##title##24281",
      "meta:descriptionId": "media##iptc4xmpExt:Creator##description##77791"
    },
    "xdm:firstAirDate": {
      "title": "First air date",
      "type": "string",
      "description": "The date when the content first aired on television.",
      "meta:titleId": "media##xdm:firstAirDate##title##99171",
      "meta:descriptionId": "media##xdm:firstAirDate##description##33851"
    },
    "xmpDM:releaseDate": {
      "title": "First digital date",
      "type": "string",
      "description": "The date when the content first aired on any digital channel or platform.",
      "meta:titleId": "media##xmpDM:releaseDate##title##59951",
      "meta:descriptionId": "media##xmpDM:releaseDate##description##50211"
    }
  },
  "required": [
    "@id"
  ],
  "meta:titleId": "media##xdm:primaryAssetReference##title##92491",
  "meta:descriptionId": "media##xdm:primaryAssetReference##description##6541",
  "simpletype": "`object`"
}
```







#### xdm:primaryAssetViewDetails
##### Primary asset view details

View details for the main content playback, present on all ads and chapters that occur during the content's playback.

`xdm:primaryAssetViewDetails`
* is optional
* type: `object`

##### xdm:primaryAssetViewDetails Type

Unknown type `object`.

```json
{
  "title": "Primary asset view details",
  "type": "object",
  "description": "View details for the main content playback, present on all ads and chapters that occur during the content's playback.",
  "properties": {
    "@id": {
      "title": "Media session ID",
      "type": "string",
      "format": "uri-reference",
      "description": "Identifies an instance of a content stream unique to an individual playback.",
      "meta:titleId": "media##@id##title##31141",
      "meta:descriptionId": "media##@id##description##82861"
    },
    "xdm:playerName": {
      "title": "Content player name",
      "type": "string",
      "description": "Name of the content player.",
      "meta:titleId": "media##xdm:playerName##title##9791",
      "meta:descriptionId": "media##xdm:playerName##description##97901"
    },
    "xdm:videoSegment": {
      "title": "Video segment",
      "type": "string",
      "pattern": "^[[0-9]+-[0-9]+]$",
      "description": "The interval that describes the part of the content that has been viewed in minutes.",
      "meta:titleId": "media##xdm:videoSegment##title##29671",
      "meta:descriptionId": "media##xdm:videoSegment##description##80611"
    },
    "xdm:path": {
      "title": "Video path",
      "type": "string",
      "description": "The path to the video in the app or site.",
      "meta:titleId": "media##xdm:path##title##21451",
      "meta:descriptionId": "media##xdm:path##description##53961"
    },
    "xdm:broadcastChannel": {
      "title": "Content channel",
      "type": "string",
      "description": "Distribution channel from where the content was played.",
      "meta:titleId": "media##xdm:broadcastChannel##title##65951",
      "meta:descriptionId": "media##xdm:broadcastChannel##description##71411"
    },
    "xdm:broadcastContentType": {
      "title": "Broadcast content type",
      "type": "string",
      "description": "The type of the stream delivery.",
      "meta:enum": {
        "VOD": "Video-on-demand",
        "Live": "Live streaming",
        "Linear": "Linear playback of the media asset",
        "UGC": "User-generated content",
        "Radio": "Radio show",
        "Podcast": "Audio podcast",
        "Audiobook": "Audiobook"
      },
      "meta:titleId": "media##xdm:broadcastContentType##title##60571",
      "meta:descriptionId": "media##xdm:broadcastContentType##description##2911"
    },
    "xdm:playerSDKVersion": {
      "title": "Player SDK version",
      "$ref": "https://ns.adobe.com/xdm/context/implementationdetails",
      "description": "The SDK version used by the player.",
      "meta:titleId": "media##xdm:playerSDKVersion##title##41231",
      "meta:descriptionId": "media##xdm:playerSDKVersion##description##42611"
    },
    "xdm:vhlVersion": {
      "title": "VHL version",
      "type": "string",
      "description": "The Media SDK version used for the tracking session.",
      "meta:titleId": "media##xdm:vhlVersion##title##58021",
      "meta:descriptionId": "media##xdm:vhlVersion##description##53421"
    },
    "xdm:broadcastNetwork": {
      "title": "Broadcast network",
      "type": "string",
      "description": "The programmer network name.",
      "meta:titleId": "media##xdm:broadcastNetwork##title##87741",
      "meta:descriptionId": "media##xdm:broadcastNetwork##description##14961"
    },
    "xdm:adLoadType": {
      "title": "Ad load type",
      "type": "string",
      "description": "The type of ad loaded as defined by each customer's internal representation.",
      "meta:titleId": "media##xdm:adLoadType##title##36651",
      "meta:descriptionId": "media##xdm:adLoadType##description##2881"
    },
    "xdm:sourceFeed": {
      "title": "Feed type",
      "type": "string",
      "description": "The type of feed, which can either represent actual feed-related data such as  EAST HD or SD, or the source of the feed like a URL.",
      "meta:titleId": "media##xdm:sourceFeed##title##9681",
      "meta:descriptionId": "media##xdm:sourceFeed##description##65141"
    },
    "xdm:sessionTimeout": {
      "title": "Media session server timeout",
      "type": "integer",
      "description": "Indicates the amount of time, in seconds, that passed between the user's last known interaction and the moment the session was closed.",
      "meta:titleId": "media##xdm:sessionTimeout##title##86351",
      "meta:descriptionId": "media##xdm:sessionTimeout##description##62121"
    },
    "xdm:qoe": {
      "title": "Quality of experience",
      "type": "object",
      "description": "Timed media properties related to the content playback's quality of experience (QoE).",
      "properties": {
        "xdm:error": {
          "title": "Custom error object",
          "type": "object",
          "description": "Quality of experience (QoE) custom error information.",
          "properties": {
            "xdm:errorID": {
              "title": "Error ID",
              "type": "string",
              "description": "The error ID.",
              "minLength": 1,
              "meta:titleId": "media##xdm:errorID##title##82411",
              "meta:descriptionId": "media##xdm:errorID##description##30321"
            },
            "xdm:errorSource": {
              "title": "Error source",
              "type": "string",
              "description": "The error source.",
              "enum": [
                "player",
                "external"
              ],
              "meta:enum": {
                "player": "Player source.",
                "external": "External source."
              },
              "meta:titleId": "media##xdm:errorSource##title##25331",
              "meta:descriptionId": "media##xdm:errorSource##description##82201"
            }
          },
          "required": [
            "xdm:errorID",
            "xdm:errorSource"
          ],
          "meta:titleId": "media##xdm:error##title##79291",
          "meta:descriptionId": "media##xdm:error##description##84991"
        },
        "xdm:errors": {
          "title": "Errors",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "The number of errors that were encountered during playback.",
          "meta:titleId": "media##xdm:errors##title##11231",
          "meta:descriptionId": "media##xdm:errors##description##68361"
        },
        "xdm:buffers": {
          "title": "Buffer events",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "The number of buffer states that occurred during a playback session.",
          "meta:titleId": "media##xdm:buffers##title##17541",
          "meta:descriptionId": "media##xdm:buffers##description##46941"
        },
        "xdm:bufferTime": {
          "title": "Total buffer duration",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "Describes the total amount of time in seconds, spent buffering.",
          "meta:titleId": "media##xdm:bufferTime##title##79481",
          "meta:descriptionId": "media##xdm:bufferTime##description##14341"
        },
        "xdm:bufferImpactedStreams": {
          "title": "Buffer impacted streams",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "The number of streams impacted by buffering.",
          "meta:titleId": "media##xdm:bufferImpactedStreams##title##20171",
          "meta:descriptionId": "media##xdm:bufferImpactedStreams##description##18341"
        },
        "xdm:stalls": {
          "title": "Stalling events",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "The number of stall states that occurred during a playback session.",
          "meta:titleId": "media##xdm:stalls##title##73001",
          "meta:descriptionId": "media##xdm:stalls##description##98511"
        },
        "xdm:stallTime": {
          "title": "Total stalling duration",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "Describes the duration in seconds in which the playback was stalled during playback.",
          "meta:titleId": "media##xdm:stallTime##title##76711",
          "meta:descriptionId": "media##xdm:stallTime##description##77451"
        },
        "xdm:stallingImpactedStreams": {
          "title": "Stalling impacted streams",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "The number of streams impacted by stalling.",
          "meta:titleId": "media##xdm:stallingImpactedStreams##title##92281",
          "meta:descriptionId": "media##xdm:stallingImpactedStreams##description##10631"
        },
        "xdm:bitrateChanges": {
          "title": "Bitrate changes",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "The number of bitrate change events that occurred during a playback session.",
          "meta:titleId": "media##xdm:bitrateChanges##title##47841",
          "meta:descriptionId": "media##xdm:bitrateChanges##description##50781"
        },
        "xdm:bitrateAverage": {
          "title": "Average bitrate",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "A weighted average of all bitrate values related to the play duration that occurred during a playback session.",
          "meta:titleId": "media##xdm:bitrateAverage##title##23291",
          "meta:descriptionId": "media##xdm:bitrateAverage##description##67161"
        },
        "xdm:bitrateAverageBucket": {
          "title": "Average bitrate bucket",
          "type": "string",
          "description": "The average bitrate (in kbps). The value is predefined buckets at 100kbps intervals.",
          "meta:titleId": "media##xdm:bitrateAverageBucket##title##15731",
          "meta:descriptionId": "media##xdm:bitrateAverageBucket##description##91131"
        },
        "xdm:bitrateChangeImpactedStreams": {
          "title": "Bitrate change impacted streams",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "The number of streams in which bitrate changes occurred.",
          "meta:titleId": "media##xdm:bitrateChangeImpactedStreams##title##15121",
          "meta:descriptionId": "media##xdm:bitrateChangeImpactedStreams##description##68551"
        },
        "xdm:droppedFrames": {
          "title": "Dropped frames",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "The number of frames dropped during playback of the main content.",
          "meta:titleId": "media##xdm:droppedFrames##title##39471",
          "meta:descriptionId": "media##xdm:droppedFrames##description##73421"
        },
        "xdm:droppedFrameImpactedStreams": {
          "title": "Dropped frame impacted streams",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "The number of streams in which frames were dropped.",
          "meta:titleId": "media##xdm:droppedFrameImpactedStreams##title##75231",
          "meta:descriptionId": "media##xdm:droppedFrameImpactedStreams##description##58251"
        },
        "xdm:dropBeforeStarts": {
          "title": "Drops before starts",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "Indicates the user abandoned the media stream before the first frame for example, during the pre-roll ad break, or due to an error while loading the content from the CDN.",
          "meta:titleId": "media##xdm:dropBeforeStarts##title##27671",
          "meta:descriptionId": "media##xdm:dropBeforeStarts##description##51351"
        },
        "xdm:timeToStart": {
          "title": "Time to start",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "Describes the duration (in seconds) passed between video load and start.",
          "meta:titleId": "media##xdm:timeToStart##title##15561",
          "meta:descriptionId": "media##xdm:timeToStart##description##64531"
        },
        "xdm:playerSdkErrors": {
          "title": "Player SDK Error IDs",
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The error IDs encountered during a playback session that originated in the Player.",
          "meta:titleId": "media##xdm:playerSdkErrors##title##6831",
          "meta:descriptionId": "media##xdm:playerSdkErrors##description##84151"
        },
        "xdm:mediaSdkErrors": {
          "title": "Media SDK Error IDs",
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The error IDs encountered during a playback session that originated in the Media SDK.",
          "meta:titleId": "media##xdm:mediaSdkErrors##title##67121",
          "meta:descriptionId": "media##xdm:mediaSdkErrors##description##99311"
        },
        "xdm:externalSdkErrors": {
          "title": "External Error IDs",
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The error IDs encountered during a playback session that originated outside the Player or SDK.",
          "meta:titleId": "media##xdm:externalSdkErrors##title##66291",
          "meta:descriptionId": "media##xdm:externalSdkErrors##description##41541"
        },
        "xdm:errorImpactedStreams": {
          "title": "Error impacted streams",
          "$ref": "https://ns.adobe.com/xdm/data/measure",
          "description": "The number of streams in which an error event occurred.",
          "meta:titleId": "media##xdm:errorImpactedStreams##title##4371",
          "meta:descriptionId": "media##xdm:errorImpactedStreams##description##41131"
        }
      },
      "meta:titleId": "media##xdm:qoe##title##54041",
      "meta:descriptionId": "media##xdm:qoe##description##43461"
    },
    "xdm:downloadedPlayback": {
      "title": "Media downloaded flag",
      "type": "boolean",
      "description": "The stream was played locally on the device after being downloaded.",
      "meta:titleId": "media##xdm:downloadedPlayback##title##81191",
      "meta:descriptionId": "media##xdm:downloadedPlayback##description##43021"
    },
    "xdm:fullScreen": {
      "title": "Full screen",
      "type": "object",
      "description": "Timed media properties related to full screen player state.",
      "properties": {
        "xdm:playerStateSet": {
          "title": "Player state set",
          "type": "boolean",
          "description": "Whether or not the player state is set on that state.",
          "meta:titleId": "media##xdm:playerStateSet##title##3871",
          "meta:descriptionId": "media##xdm:playerStateSet##description##92031"
        },
        "xdm:playerStateCount": {
          "title": "Player state count",
          "type": "integer",
          "minimum": 0,
          "description": "The number of times that player state was set on the stream.",
          "meta:titleId": "media##xdm:playerStateCount##title##76901",
          "meta:descriptionId": "media##xdm:playerStateCount##description##21081"
        },
        "xdm:playerStateTime": {
          "title": "Player state time",
          "type": "integer",
          "minimum": 0,
          "description": "The total duration of that player state.",
          "meta:titleId": "media##xdm:playerStateTime##title##76761",
          "meta:descriptionId": "media##xdm:playerStateTime##description##54101"
        }
      },
      "meta:titleId": "media##xdm:fullScreen##title##36641",
      "meta:descriptionId": "media##xdm:fullScreen##description##31531"
    },
    "xdm:mute": {
      "title": "Mute",
      "$ref": "https://ns.adobe.com/xdm/context/player-state",
      "description": "Timed media properties related to mute player state.",
      "meta:titleId": "media##xdm:mute##title##27011",
      "meta:descriptionId": "media##xdm:mute##description##17301"
    },
    "xdm:closeCaption": {
      "title": "Close caption",
      "$ref": "https://ns.adobe.com/xdm/context/player-state",
      "description": "Timed media properties related to close caption player state.",
      "meta:titleId": "media##xdm:closeCaption##title##39401",
      "meta:descriptionId": "media##xdm:closeCaption##description##44401"
    },
    "xdm:pictureInPicture": {
      "title": "Picture in picture",
      "$ref": "https://ns.adobe.com/xdm/context/player-state",
      "description": "Timed media properties related to picture in picture player state.",
      "meta:titleId": "media##xdm:pictureInPicture##title##6291",
      "meta:descriptionId": "media##xdm:pictureInPicture##description##73971"
    },
    "xdm:inFocus": {
      "title": "In focus",
      "$ref": "https://ns.adobe.com/xdm/context/player-state",
      "description": "Timed media properties related to in focus player state.",
      "meta:titleId": "media##xdm:inFocus##title##93531",
      "meta:descriptionId": "media##xdm:inFocus##description##43601"
    },
    "xdm:statesStart": {
      "title": "List of states start",
      "description": "The list of states start",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "xdm:statesEnd": {
      "title": "List of states end",
      "description": "The list of states end",
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "meta:titleId": "media##xdm:primaryAssetViewDetails##title##24351",
  "meta:descriptionId": "media##xdm:primaryAssetViewDetails##description##87221",
  "simpletype": "`object`"
}
```







#### xdm:progress10
##### 10% Progress marker

Indicates that the playhead passed the 10% marker of media based on stream length. The marker is only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress10`
* is optional
* type: reference

##### xdm:progress10 Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:progress25
##### 25% Progress marker

Indicates that the playhead passed the 25% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress25`
* is optional
* type: reference

##### xdm:progress25 Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:progress50
##### 50% Progress marker

Indicates that the playhead passed the 50% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress50`
* is optional
* type: reference

##### xdm:progress50 Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:progress75
##### 75% Progress marker

Indicates that the playhead passed the 75% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress75`
* is optional
* type: reference

##### xdm:progress75 Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:progress95
##### 95% Progress marker

Indicates that the playhead passed the 95% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress95`
* is optional
* type: reference

##### xdm:progress95 Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:publisher
##### Audio content publisher

Name of the audio content publisher.

`xdm:publisher`
* is optional
* type: `string`

##### xdm:publisher Type


`string`








#### xdm:radioStation
##### Radio station

Name / ID of the radio station.

`xdm:radioStation`
* is optional
* type: `string`

##### xdm:radioStation Type


`string`








#### xdm:recordLabel
##### Record label

Name of the record label.

`xdm:recordLabel`
* is optional
* type: `string`

##### xdm:recordLabel Type


`string`








#### xdm:resumes
##### Content resumes

Marks each playback that was resumed after more than 30 minutes of buffer, pause, or stall period.

`xdm:resumes`
* is optional
* type: reference

##### xdm:resumes Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:starts
##### Content starts

Indicates the first frame of the timed media asset has been viewed for example, the viewer did not abandon during pre-roll ad, or buffering.

`xdm:starts`
* is optional
* type: reference

##### xdm:starts Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:timePlayed
##### Content time spent

The amount of time spent in seconds by a user on a specific timed media asset.

`xdm:timePlayed`
* is optional
* type: reference

##### xdm:timePlayed Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:totalTimePlayed
##### Media Time Spent

Describes the total amount of time spent by a user on a specific timed media asset, which includes time spent watching ads.

`xdm:totalTimePlayed`
* is optional
* type: reference

##### xdm:totalTimePlayed Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:uniqueTimePlayed
##### Unique Time Played

Describes the sum of the unique intervals seen by a user on a timed media asset - i.e. the length playback intervals viewed multiple times are only counted once.

`xdm:uniqueTimePlayed`
* is optional
* type: reference

##### xdm:uniqueTimePlayed Type


* []() – `https://ns.adobe.com/xdm/data/measure`









