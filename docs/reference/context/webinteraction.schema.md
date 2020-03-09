
# Web interaction Schema

```
https://ns.adobe.com/xdm/context/webinteraction
```

The Web Interaction schema captures information about interactions that happened on a web page after the intial page load (see also Web Page View) was completed.

It is intended for recording interactions in rich web applications that do not trigger a new page load such as single page web apps (SPAs).


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/webinteraction.schema.json](context/webinteraction.schema.json) |
## Schema Hierarchy

* Web interaction `https://ns.adobe.com/xdm/context/webinteraction`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Measure](../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Web interaction Example
```json
{
  "xdm:type": "other",
  "xdm:URL": "https://www.example.com/products/store/?view=1",
  "xdm:name": "product store",
  "xdm:linkClicks": {
    "xdm:value": 1
  }
}
```

# Web interaction Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:URL](#xdmurl) | `string` | Optional | Web interaction (this schema) |
| [xdm:linkClicks](#xdmlinkclicks) | Measure | Optional | Web interaction (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Web interaction (this schema) |
| [xdm:type](#xdmtype) | `enum` | Optional | Web interaction (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:URL
### URL

The actual link or URL used for this web interaction.

`xdm:URL`
* is optional
* type: `string`
* defined in this schema

### xdm:URL Type


`string`






## xdm:linkClicks

Click of a web link has occurred.

`xdm:linkClicks`
* is optional
* type: Measure
* defined in this schema

### xdm:linkClicks Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:name
### Name

The normative name used for this web link, used for classification purposes.

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

The value of this property **must** be equal to one of the [known values below](#xdmtype-known-values).

### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `download` | Download |
| `exit` | Exit |
| `other` | Other |



