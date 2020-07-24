
# Font Schema

```
https://ns.adobe.com/xdm/assets/font
```

Font is used to describe the typefaces and font files used in a document.
The Font schema groups different font files that belong to the same typeface.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [assets/font.schema.json](assets/font.schema.json) |

## Font Example
```json
{
  "xdm:fontType": "OpenType",
  "xdm:versionString": "nameId 5",
  "xdm:fontName": "HelveticaNeue-Light",
  "xdm:fontFileName": "HelveticaNeue.ttc",
  "xdm:fontFamily": "Helvetica Neue",
  "xdm:fontFace": "Light",
  "xdm:composite": false
}
```

# Font Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:childFontFiles](#xdmchildfontfiles) | `string[]` | Optional | Font (this schema) |
| [xdm:composite](#xdmcomposite) | `boolean` | Optional | Font (this schema) |
| [xdm:fontFace](#xdmfontface) | `string` | Optional | Font (this schema) |
| [xdm:fontFamily](#xdmfontfamily) | `string` | Optional | Font (this schema) |
| [xdm:fontFileName](#xdmfontfilename) | `string` | Optional | Font (this schema) |
| [xdm:fontName](#xdmfontname) | `string` | **Required** | Font (this schema) |
| [xdm:fontType](#xdmfonttype) | `string` | **Required** | Font (this schema) |
| [xdm:versionString](#xdmversionstring) | `enum` | Optional | Font (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:childFontFiles

The list of file names for the font files that make up a composite font. See also `composite`, `fontFace`.

`xdm:childFontFiles`
* is optional
* type: `string[]`

* defined in this schema

### xdm:childFontFiles Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:composite

`true` for composite fonts. See also `childFontFiles`.

`xdm:composite`
* is optional
* type: `boolean`
* defined in this schema

### xdm:composite Type


`boolean`





## xdm:fontFace

The name of the typeface, i.e. the specific weight or instance of the fontFamily. For example: Bold, Italic.

`xdm:fontFace`
* is optional
* type: `string`
* defined in this schema

### xdm:fontFace Type


`string`






## xdm:fontFamily

Complete collection of typefaces in different weights and classifications, but having the same point size, and designed to work together. For example, a Times Roman font family may include Times Roman Bold, Times Roman Extra Bold, Times Roman Italic, Times Roman Bold Italic, Times Roman Condensed, etc., all in the same size.

`xdm:fontFamily`
* is optional
* type: `string`
* defined in this schema

### xdm:fontFamily Type


`string`






## xdm:fontFileName

The font file name (not a complete path). For example: `Times New Roman.otf`. Some products are not storing file extension information. XMP spec is open about specifics of the file name. If font information is stored in multiple files, use the semicolon separator to store file names. For example: `zx___.mmm; zx__.pfm`

`xdm:fontFileName`
* is optional
* type: `string`
* defined in this schema

### xdm:fontFileName Type


`string`





### xdm:fontFileName Examples

```json
"zx___.mmm"
```

```json
"zx__.pfm"
```



## xdm:fontName

PostScript name of the font. For example: `TimesNewRomanPS-BoldItalicMT`. `font_name` is mandatory to identify the font used in an asset but an asset may not have a `font` property if it has only images/vector arts (no text).

`xdm:fontName`
* is **required**
* type: `string`
* defined in this schema

### xdm:fontName Type


`string`






## xdm:fontType

The font type, such as TrueType, Type 1, OpenType, and so on. `font_type` is mandatory to identify font category but an asset may not have a `font` property if it has only images/vector arts (no text).

`xdm:fontType`
* is **required**
* type: `string`
* defined in this schema

### xdm:fontType Type


`string`



### xdm:fontType Known Values
| Value | Description |
|-------|-------------|
| `0` | TrueType |
| `1` | Type 1 |
| `2` | OpenType |




## xdm:versionString

The Adobe CoolType font engine allows two fonts with the same PostScript name and different technologies to be used at the same time, but not if they are from different versions. So even without this data for a given document you will have unique font data. However, the version can tell you if the font has changed metrics, glyph forms or other important information. This is useful for comparing fonts in two documents or fonts in a document to those in your system.

`xdm:versionString`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmversionstring-known-values).

### xdm:versionString Known Values
| Value | Description |
|-------|-------------|
| `version` | for Type1 fonts |
| `nameId 5` | for Apple TrueType and OpenType |
| `CIDFontVersion` | for CID fonts |
| `` | for bitmap fonts |



