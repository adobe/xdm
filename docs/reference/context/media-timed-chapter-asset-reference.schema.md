
# Timed media chapter asset reference Schema

```
https://ns.adobe.com/xdm/context/media-timed-chapter-asset-reference
```

Asset information about the chapter captured by the experience event.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/media-timed-chapter-asset-reference.schema.json](context/media-timed-chapter-asset-reference.schema.json) |
## Schema Hierarchy

* Timed media chapter asset reference `https://ns.adobe.com/xdm/context/media-timed-chapter-asset-reference`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Timed media chapter asset reference Example
```json
{
  "@id": "https://data.adobe.io/entities/media-chapter-asset-reference/2144511",
  "dc:title": "Chapter1",
  "xmpDM:duration": 44
}
```

# Timed media chapter asset reference Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Timed media chapter asset reference (this schema) |
| [dc:title](#dctitle) | `string` | Optional | Timed media chapter asset reference (this schema) |
| [xmpDM:duration](#xmpdmduration) | `integer` | Optional | Timed media chapter asset reference (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Chapter identity

The identity of the chapter.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## dc:title
### Chapter name

The friendly name of the chapter and or segment.

`dc:title`
* is optional
* type: `string`
* defined in this schema

### dc:title Type


`string`






## xmpDM:duration
### Chapter length or duration

The length of the chapter, in seconds.

`xmpDM:duration`
* is optional
* type: `integer`
* defined in this schema

### xmpDM:duration Type


`integer`





