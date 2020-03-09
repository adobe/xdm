
# Timed media primary asset reference Schema

```
https://ns.adobe.com/xdm/context/media-timed-asset-reference
```

Asset information about the main content that was played, but present on all ads and chapters that occur during the content playback.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/media-timed-asset-reference.schema.json](context/media-timed-asset-reference.schema.json) |
## Schema Hierarchy

* Timed media primary asset reference `https://ns.adobe.com/xdm/context/media-timed-asset-reference`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Series](../external/iptc/series.schema.md) `http://www.iptc.org/series`
  * [Episode](../external/iptc/episode.schema.md) `http://www.iptc.org/season`
  * [Season](../external/iptc/season.schema.md) `http://www.iptc.org/episode`


## Timed media primary asset reference Example
```json
{
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
}
```

# Timed media primary asset reference Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Timed media primary asset reference (this schema) |
| [dc:title](#dctitle) | `string` | Optional | Timed media primary asset reference (this schema) |
| [iptc4xmpExt:Creator](#iptc4xmpextcreator) | Creator | Optional | Timed media primary asset reference (this schema) |
| [iptc4xmpExt:Episode](#iptc4xmpextepisode) | Season | Optional | Timed media primary asset reference (this schema) |
| [iptc4xmpExt:Genre](#iptc4xmpextgenre) | `string[]` | Optional | Timed media primary asset reference (this schema) |
| [iptc4xmpExt:Rating](#iptc4xmpextrating) | Rating | Optional | Timed media primary asset reference (this schema) |
| [iptc4xmpExt:Season](#iptc4xmpextseason) | Episode | Optional | Timed media primary asset reference (this schema) |
| [iptc4xmpExt:Series](#iptc4xmpextseries) | Series | Optional | Timed media primary asset reference (this schema) |
| [xdm:showType](#xdmshowtype) | `string` | Optional | Timed media primary asset reference (this schema) |
| [xdm:streamFormat](#xdmstreamformat) | `string` | Optional | Timed media primary asset reference (this schema) |
| [xmpDM:duration](#xmpdmduration) | `integer` | Optional | Timed media primary asset reference (this schema) |
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






## dc:title
### Media name

The friendly, human-readable name of the timed media asset.

`dc:title`
* is optional
* type: `string`
* defined in this schema

### dc:title Type


`string`






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
* type: Season
* defined in this schema

### iptc4xmpExt:Episode Type


* [Season](../external/iptc/season.schema.md) – `http://www.iptc.org/episode`





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
* type: Episode
* defined in this schema

### iptc4xmpExt:Season Type


* [Episode](../external/iptc/episode.schema.md) – `http://www.iptc.org/season`





## iptc4xmpExt:Series
### Series

The series the show belongs to.

`iptc4xmpExt:Series`
* is optional
* type: Series
* defined in this schema

### iptc4xmpExt:Series Type


* [Series](../external/iptc/series.schema.md) – `http://www.iptc.org/series`





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






## xmpDM:duration
### Media length runtime

Length of primary media asset in seconds.

`xmpDM:duration`
* is optional
* type: `integer`
* defined in this schema

### xmpDM:duration Type


`integer`





