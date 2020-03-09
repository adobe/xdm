
# Timed media chapter information Schema

```
https://ns.adobe.com/xdm/context/media-timed-chapter
```

Timed media chapter information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/media-timed-chapter.schema.json](context/media-timed-chapter.schema.json) |
## Schema Hierarchy

* Timed media chapter information `https://ns.adobe.com/xdm/context/media-timed-chapter`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Timed media chapter asset reference](media-timed-chapter-asset-reference.schema.md) `https://ns.adobe.com/xdm/context/media-timed-chapter-asset-reference`
  * [Timed media chapter view details](media-timed-chapter-view-details.schema.md) `https://ns.adobe.com/xdm/context/media-timed-chapter-view-details`
  * [Measure](../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Timed media chapter information Example
```json
{
  "@id": "https://data.adobe.io/entities/media-chapter/2144511",
  "dc:title": "Chapter1",
  "xmpDM:duration": 44
}
```

# Timed media chapter information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:chapterAssetReference](#xdmchapterassetreference) | Timed media chapter asset reference | Optional | Timed media chapter information (this schema) |
| [xdm:chapterAssetViewDetails](#xdmchapterassetviewdetails) | Timed media chapter view details | Optional | Timed media chapter information (this schema) |
| [xdm:completes](#xdmcompletes) | Measure | Optional | Timed media chapter information (this schema) |
| [xdm:federated](#xdmfederated) | Measure | Optional | Timed media chapter information (this schema) |
| [xdm:impressions](#xdmimpressions) | Measure | Optional | Timed media chapter information (this schema) |
| [xdm:timePlayed](#xdmtimeplayed) | Measure | Optional | Timed media chapter information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:chapterAssetReference
### Chapter asset reference

Asset information about the chapter captured by the experience event.

`xdm:chapterAssetReference`
* is optional
* type: Timed media chapter asset reference
* defined in this schema

### xdm:chapterAssetReference Type


* [Timed media chapter asset reference](media-timed-chapter-asset-reference.schema.md) – `https://ns.adobe.com/xdm/context/media-timed-chapter-asset-reference`





## xdm:chapterAssetViewDetails
### Chapter view details

View details for the chapter playback captured by the experience event.

`xdm:chapterAssetViewDetails`
* is optional
* type: Timed media chapter view details
* defined in this schema

### xdm:chapterAssetViewDetails Type


* [Timed media chapter view details](media-timed-chapter-view-details.schema.md) – `https://ns.adobe.com/xdm/context/media-timed-chapter-view-details`





## xdm:completes
### Completes

Indicates if a timed media asset was watched to completion - this does not necessarily mean the viewer watched the whole video; viewer could have skipped ahead.

`xdm:completes`
* is optional
* type: Measure
* defined in this schema

### xdm:completes Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:federated
### Federated

Indicates if an experience event was created through data federation or data sharing.

`xdm:federated`
* is optional
* type: Measure
* defined in this schema

### xdm:federated Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:impressions
### Impressions

Describes the intention to play a timed media asset. It does not measure success, as the user might abandon the content before the first frame is viewed.

`xdm:impressions`
* is optional
* type: Measure
* defined in this schema

### xdm:impressions Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:timePlayed
### Time spent

Describes the amount of time in seconds spent by a user on a specific timed media asset.

`xdm:timePlayed`
* is optional
* type: Measure
* defined in this schema

### xdm:timePlayed Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




