
# Session details information Schema

```
https://ns.adobe.com/xdm/datatypes/sessionDetails
```

Session details information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/sessiondetails.schema.json](datatypes/sessiondetails.schema.json) |

## Session details information Example
```json
{
  "xdm:ID": "123456789",
  "xdm:length": 100,
  "xdm:contentType": "VOD",
  "xdm:playerName": "playerName",
  "xdm:channel": "channel"
}
```

# Session details information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:ID](#xdmid) | `string` | Optional | Session details information (this schema) |
| [xdm:adCount](#xdmadcount) | `integer` | Optional | Session details information (this schema) |
| [xdm:adLoad](#xdmadload) | `string` | Optional | Session details information (this schema) |
| [xdm:album](#xdmalbum) | `string` | Optional | Session details information (this schema) |
| [xdm:artist](#xdmartist) | `string` | Optional | Session details information (this schema) |
| [xdm:assetID](#xdmassetid) | `string` | Optional | Session details information (this schema) |
| [xdm:auth](#xdmauth) | `boolean` | Optional | Session details information (this schema) |
| [xdm:author](#xdmauthor) | `string` | Optional | Session details information (this schema) |
| [xdm:averageMinuteAudience](#xdmaverageminuteaudience) | `number` | Optional | Session details information (this schema) |
| [xdm:channel](#xdmchannel) | `string` | Optional | Session details information (this schema) |
| [xdm:chapterCount](#xdmchaptercount) | `integer` | Optional | Session details information (this schema) |
| [xdm:complete](#xdmcomplete) | `boolean` | Optional | Session details information (this schema) |
| [xdm:contentType](#xdmcontenttype) | `string` | Optional | Session details information (this schema) |
| [xdm:dayPart](#xdmdaypart) | `string` | Optional | Session details information (this schema) |
| [xdm:dropBeforeStarts](#xdmdropbeforestarts) | `boolean` | Optional | Session details information (this schema) |
| [xdm:episode](#xdmepisode) | `integer` | Optional | Session details information (this schema) |
| [xdm:estimatedStreams](#xdmestimatedstreams) | `number` | Optional | Session details information (this schema) |
| [xdm:feed](#xdmfeed) | `string` | Optional | Session details information (this schema) |
| [xdm:firstAirDate](#xdmfirstairdate) | `string` | Optional | Session details information (this schema) |
| [xdm:firstDigitalDate](#xdmfirstdigitaldate) | `string` | Optional | Session details information (this schema) |
| [xdm:genre](#xdmgenre) | `string` | Optional | Session details information (this schema) |
| [xdm:isDownloaded](#xdmisdownloaded) | `boolean` | Optional | Session details information (this schema) |
| [xdm:isFederated](#xdmisfederated) | `boolean` | Optional | Session details information (this schema) |
| [xdm:label](#xdmlabel) | `string` | Optional | Session details information (this schema) |
| [xdm:length](#xdmlength) | `integer` | Optional | Session details information (this schema) |
| [xdm:mvpd](#xdmmvpd) | `string` | Optional | Session details information (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Session details information (this schema) |
| [xdm:network](#xdmnetwork) | `string` | Optional | Session details information (this schema) |
| [xdm:originator](#xdmoriginator) | `string` | Optional | Session details information (this schema) |
| [xdm:pause](#xdmpause) | `boolean` | Optional | Session details information (this schema) |
| [xdm:pauseCount](#xdmpausecount) | `integer` | Optional | Session details information (this schema) |
| [xdm:pauseTime](#xdmpausetime) | `integer` | Optional | Session details information (this schema) |
| [xdm:play](#xdmplay) | `boolean` | Optional | Session details information (this schema) |
| [xdm:playerName](#xdmplayername) | `string` | Optional | Session details information (this schema) |
| [xdm:progress10](#xdmprogress10) | `boolean` | Optional | Session details information (this schema) |
| [xdm:progress25](#xdmprogress25) | `boolean` | Optional | Session details information (this schema) |
| [xdm:progress50](#xdmprogress50) | `boolean` | Optional | Session details information (this schema) |
| [xdm:progress75](#xdmprogress75) | `boolean` | Optional | Session details information (this schema) |
| [xdm:progress95](#xdmprogress95) | `boolean` | Optional | Session details information (this schema) |
| [xdm:publisher](#xdmpublisher) | `string` | Optional | Session details information (this schema) |
| [xdm:rating](#xdmrating) | `string` | Optional | Session details information (this schema) |
| [xdm:resume](#xdmresume) | `boolean` | Optional | Session details information (this schema) |
| [xdm:sdkVersion](#xdmsdkversion) | `string` | Optional | Session details information (this schema) |
| [xdm:season](#xdmseason) | `integer` | Optional | Session details information (this schema) |
| [xdm:secondsSinceLastCall](#xdmsecondssincelastcall) | `number` | Optional | Session details information (this schema) |
| [xdm:segment](#xdmsegment) | `string` | Optional | Session details information (this schema) |
| [xdm:segmentView](#xdmsegmentview) | `boolean` | Optional | Session details information (this schema) |
| [xdm:show](#xdmshow) | `string` | Optional | Session details information (this schema) |
| [xdm:showType](#xdmshowtype) | `string` | Optional | Session details information (this schema) |
| [xdm:station](#xdmstation) | `string` | Optional | Session details information (this schema) |
| [xdm:streamFormat](#xdmstreamformat) | `string` | Optional | Session details information (this schema) |
| [xdm:streamType](#xdmstreamtype) | `enum` | Optional | Session details information (this schema) |
| [xdm:timePlayed](#xdmtimeplayed) | `integer` | Optional | Session details information (this schema) |
| [xdm:totalTimePlayed](#xdmtotaltimeplayed) | `integer` | Optional | Session details information (this schema) |
| [xdm:uniqueTimePlayed](#xdmuniquetimeplayed) | `integer` | Optional | Session details information (this schema) |
| [xdm:view](#xdmview) | `boolean` | Optional | Session details information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:ID
### Series ID

The series ID the show belongs to.

`xdm:ID`
* is optional
* type: `string`
* defined in this schema

### xdm:ID Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E.%7B1%2C%7D%24)):
```regex
^.{1,}$
```






## xdm:adCount
### Ad Count

The number of ads started during the playback.

`xdm:adCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:adCount Type


`integer`






## xdm:adLoad
### Ad Load Type

The type of ad loaded as defined by each customer's internal representation.

`xdm:adLoad`
* is optional
* type: `string`
* defined in this schema

### xdm:adLoad Type


`string`






## xdm:album
### Album

The name of the album that the music recording or video belongs to.

`xdm:album`
* is optional
* type: `string`
* defined in this schema

### xdm:album Type


`string`






## xdm:artist
### Artist

The name of the album artist or group performing the music recording or video.

`xdm:artist`
* is optional
* type: `string`
* defined in this schema

### xdm:artist Type


`string`






## xdm:assetID
### Asset ID

Identifier of the content, which can be used to tie back to other industry or CMS IDs.

`xdm:assetID`
* is optional
* type: `string`
* defined in this schema

### xdm:assetID Type


`string`






## xdm:auth
### Media Authorized

The user has been authorized via authentication.

`xdm:auth`
* is optional
* type: `boolean`
* defined in this schema

### xdm:auth Type


`boolean`





## xdm:author
### Author

Name of the media author.

`xdm:author`
* is optional
* type: `string`
* defined in this schema

### xdm:author Type


`string`






## xdm:averageMinuteAudience
### Average Minute Audience

Describes the average content time spent for a specific media item - i.e. the total content time spent divided by the length for all of the playback sessions.

`xdm:averageMinuteAudience`
* is optional
* type: `number`
* defined in this schema

### xdm:averageMinuteAudience Type


`number`






## xdm:channel
### Content Channel

Distribution channel from where the content was played.

`xdm:channel`
* is optional
* type: `string`
* defined in this schema

### xdm:channel Type


`string`






## xdm:chapterCount
### Chapter Count

The number of chapters started during the playback.

`xdm:chapterCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:chapterCount Type


`integer`






## xdm:complete
### Content Completes

Indicates if a timed media asset was watched to completion, this does not necessarily mean the viewer watched the whole video; viewer could have skipped ahead.

`xdm:complete`
* is optional
* type: `boolean`
* defined in this schema

### xdm:complete Type


`boolean`





## xdm:contentType
### Broadcast Content Type

The type of the stream delivery.

`xdm:contentType`
* is optional
* type: `string`
* defined in this schema

### xdm:contentType Type


`string`



### xdm:contentType Known Values
| Value | Description |
|-------|-------------|
| `VOD` | Video-on-demand |
| `Live` | Live streaming |
| `Linear` | Linear playback of the media asset |
| `UGC` | User-generated content |
| `Radio` | Radio show |
| `Podcast` | Audio podcast |
| `Audiobook` | Audiobook |




## xdm:dayPart
### Day Part

Defines the time of the day when the content was broadcast or played.

`xdm:dayPart`
* is optional
* type: `string`
* defined in this schema

### xdm:dayPart Type


`string`






## xdm:dropBeforeStarts
### Drop Before Start

Indicates the user abandoned the media stream before the first frame for example, during the pre-roll ad break, or due to an error while loading the content from the CDN.

`xdm:dropBeforeStarts`
* is optional
* type: `boolean`
* defined in this schema

### xdm:dropBeforeStarts Type


`boolean`





## xdm:episode
### Episode Number

Number of the episode.

`xdm:episode`
* is optional
* type: `integer`
* defined in this schema

### xdm:episode Type


`integer`
* minimum value: `0`






## xdm:estimatedStreams
### Estimated Streams

The estimated number of video or audio streams per each individual content.

`xdm:estimatedStreams`
* is optional
* type: `number`
* defined in this schema

### xdm:estimatedStreams Type


`number`






## xdm:feed
### Feed Type

The type of feed, which can either represent actual feed-related data such as  EAST HD or SD, or the source of the feed like a URL.

`xdm:feed`
* is optional
* type: `string`
* defined in this schema

### xdm:feed Type


`string`






## xdm:firstAirDate
### First Air Date

The date when the content first aired on television.

`xdm:firstAirDate`
* is optional
* type: `string`
* defined in this schema

### xdm:firstAirDate Type


`string`






## xdm:firstDigitalDate
### First Digital Date

The date when the content first aired on any digital channel or platform.

`xdm:firstDigitalDate`
* is optional
* type: `string`
* defined in this schema

### xdm:firstDigitalDate Type


`string`






## xdm:genre
### Genre

Type or grouping of content as defined by content producer.

`xdm:genre`
* is optional
* type: `string`
* defined in this schema

### xdm:genre Type


`string`






## xdm:isDownloaded
### Media Downloaded Flag

The stream was played locally on the device after being downloaded.

`xdm:isDownloaded`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDownloaded Type


`boolean`





## xdm:isFederated
### Federated Data

Set to true when the hit is federated (i.e., received by the customer as part of a federated data share, rather than their own implementation).

`xdm:isFederated`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isFederated Type


`boolean`





## xdm:label
### Record Label

Name of the record label.

`xdm:label`
* is optional
* type: `string`
* defined in this schema

### xdm:label Type


`string`






## xdm:length
### Media Content Length

Length of primary media asset in seconds.

`xdm:length`
* is optional
* type: `integer`
* defined in this schema

### xdm:length Type


`integer`






## xdm:mvpd
### MVPD Identifier

The MVPD (Multichannel Video Programming Distributor) provided via authentication. [https://en.wikipedia.org/?title=MVPD]

`xdm:mvpd`
* is optional
* type: `string`
* defined in this schema

### xdm:mvpd Type


`string`






## xdm:name
### Content Name

The friendly, human-readable name of the timed media asset.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:network
### Broadcast Network

The programmer network name.

`xdm:network`
* is optional
* type: `string`
* defined in this schema

### xdm:network Type


`string`






## xdm:originator
### Creator Name

Full name of the creator.

`xdm:originator`
* is optional
* type: `string`
* defined in this schema

### xdm:originator Type


`string`






## xdm:pause
### Pause Impacted Streams

Indicates if one or more pauses occurred during the playback of a single media item.

`xdm:pause`
* is optional
* type: `boolean`
* defined in this schema

### xdm:pause Type


`boolean`





## xdm:pauseCount
### Pause Events

The number of pause periods that occurred during playback.

`xdm:pauseCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:pauseCount Type


`integer`






## xdm:pauseTime
### Total Pause Duration

Describes the duration in seconds in which playback was paused by the user.

`xdm:pauseTime`
* is optional
* type: `integer`
* defined in this schema

### xdm:pauseTime Type


`integer`






## xdm:play
### Content Starts

First frame of media is consumed. If the user drops during ad, buffering, etc., then there would be no “Content Start” event.

`xdm:play`
* is optional
* type: `boolean`
* defined in this schema

### xdm:play Type


`boolean`





## xdm:playerName
### Content Player Name

Name of the content player.

`xdm:playerName`
* is optional
* type: `string`
* defined in this schema

### xdm:playerName Type


`string`






## xdm:progress10
### 10% Progress Marker

Indicates that the playhead passed the 10% marker of media based on stream length. The marker is only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress10`
* is optional
* type: `boolean`
* defined in this schema

### xdm:progress10 Type


`boolean`





## xdm:progress25
### 25% Progress Marker

Indicates that the playhead passed the 25% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress25`
* is optional
* type: `boolean`
* defined in this schema

### xdm:progress25 Type


`boolean`





## xdm:progress50
### 50% Progress Marker

Indicates that the playhead passed the 50% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress50`
* is optional
* type: `boolean`
* defined in this schema

### xdm:progress50 Type


`boolean`





## xdm:progress75
### 75% Progress Marker

Indicates that the playhead passed the 75% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress75`
* is optional
* type: `boolean`
* defined in this schema

### xdm:progress75 Type


`boolean`





## xdm:progress95
### 95% Progress Marker

Indicates that the playhead passed the 95% marker of media based on stream length. Marker only counted once, even if seeking backwards. If seeking forward, markers that are skipped are not counted.

`xdm:progress95`
* is optional
* type: `boolean`
* defined in this schema

### xdm:progress95 Type


`boolean`





## xdm:publisher
### Publisher

Name of the audio content publisher.

`xdm:publisher`
* is optional
* type: `string`
* defined in this schema

### xdm:publisher Type


`string`






## xdm:rating
### Rating Value

Rating value as issued by the rating source.

`xdm:rating`
* is optional
* type: `string`
* defined in this schema

### xdm:rating Type


`string`






## xdm:resume
### Resume

Marks each playback that was resumed after more than 30 minutes of buffer, pause, or stall period.

`xdm:resume`
* is optional
* type: `boolean`
* defined in this schema

### xdm:resume Type


`boolean`





## xdm:sdkVersion
### Version

The version identifier of the API, e.g h.18.

`xdm:sdkVersion`
* is optional
* type: `string`
* defined in this schema

### xdm:sdkVersion Type


`string`






## xdm:season
### Season Number

Number of the season.

`xdm:season`
* is optional
* type: `integer`
* defined in this schema

### xdm:season Type


`integer`
* minimum value: `0`






## xdm:secondsSinceLastCall
### Media Session Server Timeout

Indicates the amount of time, in seconds, that passed between the user's last known interaction and the moment the session was closed.

`xdm:secondsSinceLastCall`
* is optional
* type: `number`
* defined in this schema

### xdm:secondsSinceLastCall Type


`number`






## xdm:segment
### Video Segment

The interval that describes the part of the content that has been viewed in minutes.

`xdm:segment`
* is optional
* type: `string`
* defined in this schema

### xdm:segment Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B%5B0-9%5D%2B-%5B0-9%5D%2B%5D%24)):
```regex
^[[0-9]+-[0-9]+]$
```






## xdm:segmentView
### Media Segment Views

Indicates when at least one frame, not necessarily the first has been viewed.

`xdm:segmentView`
* is optional
* type: `boolean`
* defined in this schema

### xdm:segmentView Type


`boolean`





## xdm:show
### Series Name

Name of the series.

`xdm:show`
* is optional
* type: `string`
* defined in this schema

### xdm:show Type


`string`






## xdm:showType
### Show Type

The type of content for example, trailer or full episode.

`xdm:showType`
* is optional
* type: `string`
* defined in this schema

### xdm:showType Type


`string`






## xdm:station
### Radio Station

The radio station name on which the audio is played.

`xdm:station`
* is optional
* type: `string`
* defined in this schema

### xdm:station Type


`string`






## xdm:streamFormat
### Stream Format

Free-form format of the stream for example, short or long.

`xdm:streamFormat`
* is optional
* type: `string`
* defined in this schema

### xdm:streamFormat Type


`string`






## xdm:streamType
### Stream Type

The type of the media stream.

`xdm:streamType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmstreamtype-known-values).

### xdm:streamType Known Values
| Value | Description |
|-------|-------------|
| `video` | Video |
| `audio` | Audio |




## xdm:timePlayed
### Content Time Spent

Sums the event duration (in seconds) for all events of type PLAY on the main content. The value will be displayed in the time format (HH:MM:SS) in Analysis Workspace and Reports & Analytics. In Data Feeds, Data Warehouse, and Reporting APIs the values will be displayed in seconds.

`xdm:timePlayed`
* is optional
* type: `integer`
* defined in this schema

### xdm:timePlayed Type


`integer`






## xdm:totalTimePlayed
### Media Time Spent

Describes the total amount of time spent by a user on a specific timed media asset, which includes time spent watching ads.

`xdm:totalTimePlayed`
* is optional
* type: `integer`
* defined in this schema

### xdm:totalTimePlayed Type


`integer`






## xdm:uniqueTimePlayed
### Unique Time Played

Describes the sum of the unique intervals seen by a user on a timed media asset - i.e. the length playback intervals viewed multiple times are only counted once.

`xdm:uniqueTimePlayed`
* is optional
* type: `integer`
* defined in this schema

### xdm:uniqueTimePlayed Type


`integer`






## xdm:view
### Media Starts

Load event for the media. (This occurs when the viewer clicks the Play button). This would count even if there are pre-roll ads, buffering, errors, and so on.

`xdm:view`
* is optional
* type: `boolean`
* defined in this schema

### xdm:view Type


`boolean`




