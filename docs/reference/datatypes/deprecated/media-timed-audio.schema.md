
# Media audio Schema

```
https://ns.adobe.com/xdm/context/media-timed-audio
```

Asset information about the audio content.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/deprecated/media-timed-audio.schema.json](datatypes/deprecated/media-timed-audio.schema.json) |
## Schema Hierarchy

* Media audio `https://ns.adobe.com/xdm/context/media-timed-audio`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Audio](../external/id3/audio.schema.md) `https://id3.org/id3v2.4/audio`


## Media audio Example
```json
{
  "dc:creator": "Jimmy Page",
  "xdm:artist": "Led Zeppelin",
  "xdm:album": "Led Zeppelin IV"
}
```

# Media audio Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [dc:creator](#dccreator) | `string` | Optional | Media audio (this schema) |
| [id3:Audio](#id3audio) | Audio | Optional | Media audio (this schema) |
| [xmpDM:album](#xmpdmalbum) | `string` | Optional | Media audio (this schema) |
| [xmpDM:artist](#xmpdmartist) | `string` | Optional | Media audio (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## dc:creator
### Author

Name of the media author.

`dc:creator`
* is optional
* type: `string`
* defined in this schema

### dc:creator Type


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





