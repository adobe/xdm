
# Web Link Schema

```
https://ns.adobe.com/xdm/context/weblink
```

Information about the web link of the ExperienceEvent.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/weblink.schema.json](context/weblink.schema.json) |

## Web Link Example
```json
{
  "xdm:type": "other",
  "xdm:URL": "https://store.google.com/?utm_source=hp_header&utm_medium=google_oo&utm_campaign=GS100042",
  "xdm:name": "google store"
}
```

# Web Link Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:URL](#xdmURL) | `string` | Optional | Web Link (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Web Link (this schema) |
| [xdm:type](#xdmtype) | `enum` | Optional | Web Link (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:URL
### URL

The link URL.

`xdm:URL`
* is optional
* type: `string`
* defined in this schema

### xdm:URL Type


`string`






## xdm:name
### Name

The link name.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:type
### Type

The link type.

`xdm:type`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdm:type-known-values).

### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `download` | Download |
| `exit` | Exit |
| `other` | Other |



