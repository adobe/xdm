
# Timed media primary asset reference Schema

```
https://ns.adobe.com/xdm/context/media-timed-asset-reference
```

Asset information about the main content that was played, but present on all ads and chapters that occur during the content playback.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/media/media-timed-asset-reference.schema.json](datatypes/media/media-timed-asset-reference.schema.json) |
## Schema Hierarchy

* Timed media primary asset reference `https://ns.adobe.com/xdm/context/media-timed-asset-reference`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Audio](../external/id3/audio.schema.md) `https://id3.org/id3v2.4/audio`
  * [Media audio](media-timed-audio.schema.md) `https://ns.adobe.com/xdm/context/media-timed-audio`
  * [Series](../external/iptc/series.schema.md) `http://www.iptc.org/series`
  * [Season](../external/iptc/season.schema.md) `http://www.iptc.org/season`
  * [Episode](../external/iptc/episode.schema.md) `http://www.iptc.org/episode`


## Timed media primary asset reference Examples

```json
{
  "@id": "https://data.adobe.io/entities/media-timed-asset-reference/15234430",
  "dc:title": "Floki Begs Helga for Freedom",
  "dc:creator": "Video Author",
  "dc:publisher": "tvonline",
  "xmpDM:duration": 87,
  "iptc4xmpExt:Series": {
    "iptc4xmpExt:Name": "show_highlights",
    "iptc4xmpExt:Identifier": "http://mychanneltv.com/series-identifiers/2613953"
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
      "iptc4xmpExt:RatingValue": "OTV",
      "iptc4xmpExt:RatingSourceLink": "http://www.tvmedia.org/ratings.htm"
    }
  ],
  "iptc4xmpExt:Creator": [
    {
      "iptc4xmpExt:Name": "MyChannelTV"
    }
  ],
  "xdm:firstAirDate": "2016-01-05",
  "xmpDM:releaseDate": "2016-01-25"
}
```

```json
{
  "@id": "https://data.adobe.io/entities/media-timed-asset-reference/15234431",
  "dc:title": "Stairway to Heaven",
  "xdm:audio": {
    "dc:creator": "Jimmy Page",
    "xdm:artist": "Led Zeppelin",
    "xdm:album": "Led Zeppelin IV"
  },
  "xmpDM:duration": 482,
  "xdm:streamType": "audio"
}
```


# Timed media primary asset reference Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [@id](#id) | `string` | Optional |  | Timed media primary asset reference (this schema) |
| [dc:creator](#dccreator) | `string` | Optional |  | Timed media primary asset reference (this schema) |
| [dc:title](#dctitle) | `string` | Optional |  | Timed media primary asset reference (this schema) |
| [id3:Audio](#id3audio) | Audio | Optional |  | Timed media primary asset reference (this schema) |
| [iptc4xmpExt:Creator](#iptc4xmpextcreator) | Creator | Optional |  | Timed media primary asset reference (this schema) |
| [iptc4xmpExt:Episode](#iptc4xmpextepisode) | Episode | Optional |  | Timed media primary asset reference (this schema) |
| [iptc4xmpExt:Genre](#iptc4xmpextgenre) | `string[]` | Optional |  | Timed media primary asset reference (this schema) |
| [iptc4xmpExt:Rating](#iptc4xmpextrating) | Rating | Optional |  | Timed media primary asset reference (this schema) |
| [iptc4xmpExt:Season](#iptc4xmpextseason) | Season | Optional |  | Timed media primary asset reference (this schema) |
| [iptc4xmpExt:Series](#iptc4xmpextseries) | Series | Optional |  | Timed media primary asset reference (this schema) |
| [xdm:Audio](#xdmaudio) | Media audio | Optional |  | Timed media primary asset reference (this schema) |
| [xdm:firstAirDate](#xdmfirstairdate) | `string` | Optional |  | Timed media primary asset reference (this schema) |
| [xdm:showType](#xdmshowtype) | `string` | Optional |  | Timed media primary asset reference (this schema) |
| [xdm:streamFormat](#xdmstreamformat) | `string` | Optional |  | Timed media primary asset reference (this schema) |
| [xdm:streamType](#xdmstreamtype) | `enum` | Optional | `"video"` | Timed media primary asset reference (this schema) |
| [xmpDM:album](#xmpdmalbum) | `string` | Optional |  | Timed media primary asset reference (this schema) |
| [xmpDM:artist](#xmpdmartist) | `string` | Optional |  | Timed media primary asset reference (this schema) |
| [xmpDM:duration](#xmpdmduration) | `integer` | Optional |  | Timed media primary asset reference (this schema) |
| [xmpDM:releaseDate](#xmpdmreleasedate) | `string` | Optional |  | Timed media primary asset reference (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Asset ID

Identifier of the content, which can be used to tie back to other industry or CMS IDs.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## dc:creator
### Originator

Creator of the content.

`dc:creator`
* is optional
* type: `string`
* defined in this schema

### dc:creator Type


`string`






## dc:title
### Content name

The friendly, human-readable name of the timed media asset.

`dc:title`
* is optional
* type: `string`
* defined in this schema

### dc:title Type


`string`






## id3:Audio
### Audio

Metadata specific to audio content (record label, radio station, etc.).

`id3:Audio`
* is optional
* type: Audio
* defined in this schema

### id3:Audio Type


* [Audio](../external/id3/audio.schema.md) – `https://id3.org/id3v2.4/audio`





## iptc4xmpExt:Creator
### Creator

Party or parties including person or organization which created the video, refinement by the role attribute.

`iptc4xmpExt:Creator`
* is optional
* type: Creator

* defined in this schema

### iptc4xmpExt:Creator Type


Array type: Creator

All items must be of the type:
* [Creator](../external/iptc/creator.schema.md) – `http://www.iptc.org/creator`








## iptc4xmpExt:Episode
### Episode

The episode the show belongs to.

`iptc4xmpExt:Episode`
* is optional
* type: Episode
* defined in this schema

### iptc4xmpExt:Episode Type


* [Episode](../external/iptc/episode.schema.md) – `http://www.iptc.org/episode`





## iptc4xmpExt:Genre
### Genre

Type or grouping of content as defined by content producer.

`iptc4xmpExt:Genre`
* is optional
* type: `string[]`

* defined in this schema

### iptc4xmpExt:Genre Type


Array type: `string[]`

All items must be of the type:
`string`









## iptc4xmpExt:Rating
### Content rating

The rating as defined by Parental Guidelines.

`iptc4xmpExt:Rating`
* is optional
* type: Rating

* defined in this schema

### iptc4xmpExt:Rating Type


Array type: Rating

All items must be of the type:
* [Rating](../external/iptc/rating.schema.md) – `http://www.iptc.org/rating`








## iptc4xmpExt:Season
### Season

The season the show belongs to.

`iptc4xmpExt:Season`
* is optional
* type: Season
* defined in this schema

### iptc4xmpExt:Season Type


* [Season](../external/iptc/season.schema.md) – `http://www.iptc.org/season`





## iptc4xmpExt:Series
### Series

The series the show belongs to.

`iptc4xmpExt:Series`
* is optional
* type: Series
* defined in this schema

### iptc4xmpExt:Series Type


* [Series](../external/iptc/series.schema.md) – `http://www.iptc.org/series`





## xdm:Audio
### Audio

Metadata specific to audio content (record label, radio station, etc.).

`xdm:Audio`
* is optional
* type: Media audio
* defined in this schema

### xdm:Audio Type


* [Media audio](media-timed-audio.schema.md) – `https://ns.adobe.com/xdm/context/media-timed-audio`





## xdm:firstAirDate
### First air date

The date when the content first aired on television.

`xdm:firstAirDate`
* is optional
* type: `string`
* defined in this schema

### xdm:firstAirDate Type


`string`






## xdm:showType
### Show type

The type of content for example, trailer or full episode.

`xdm:showType`
* is optional
* type: `string`
* defined in this schema

### xdm:showType Type


`string`






## xdm:streamFormat
### Stream format

Free-form format of the stream for example, short or long.

`xdm:streamFormat`
* is optional
* type: `string`
* defined in this schema

### xdm:streamFormat Type


`string`






## xdm:streamType
### Stream type

The type of the media stream

`xdm:streamType`
* is optional
* type: `enum`
* default: `"video"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmstreamtype-known-values).

### xdm:streamType Known Values
| Value | Description |
|-------|-------------|
| `audio` | An audio stream (e.g. podcast, audiobook, radio stream). |
| `video` | A video stream (e.g. Video-On-Demand, live event stream, downloaded movie). |
| `gaming` | A gaming stream (e.g. Twitch, Hitbox). |




## xmpDM:album
### Album

The name of the album that the music recording or video belongs to.

`xmpDM:album`
* is optional
* type: `string`
* defined in this schema

### xmpDM:album Type


`string`






## xmpDM:artist
### Artist

The name of the album artist or group performing the music recording or video.

`xmpDM:artist`
* is optional
* type: `string`
* defined in this schema

### xmpDM:artist Type


`string`






## xmpDM:duration
### Media content length

Length of primary media asset in seconds.

`xmpDM:duration`
* is optional
* type: `integer`
* defined in this schema

### xmpDM:duration Type


`integer`






## xmpDM:releaseDate
### First digital date

The date when the content first aired on any digital channel or platform.

`xmpDM:releaseDate`
* is optional
* type: `string`
* defined in this schema

### xmpDM:releaseDate Type


`string`





