
# Audio Schema

```
https://id3.org/id3v2.4/audio
```

Audio metadata based on [ID3 V2.4](https://id3.org/id3v2.4.0-frames)

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/external/id3/audio.schema.json](datatypes/external/id3/audio.schema.json) |

## Audio Example
```json
{
  "id3:TRSN": "Q991.3",
  "id3:TPUB": "Atlantic"
}
```

# Audio Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [id3:TPUB](#id3tpub) | `string` | Optional | Audio (this schema) |
| [id3:TRSN](#id3trsn) | `string` | Optional | Audio (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## id3:TPUB
### Record label

Name of the record label.

`id3:TPUB`
* is optional
* type: `string`
* defined in this schema

### id3:TPUB Type


`string`






## id3:TRSN
### InternetRadioStationName

The radio station name on which the audio is played.

`id3:TRSN`
* is optional
* type: `string`
* defined in this schema

### id3:TRSN Type


`string`





