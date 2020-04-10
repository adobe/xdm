
# Timed media chapter view details Schema

```
https://ns.adobe.com/xdm/context/media-timed-chapter-view-details
```

View details for the chapter playback captured by the experience event.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/media-timed-chapter-view-details.schema.json](context/media-timed-chapter-view-details.schema.json) |
## Schema Hierarchy

* Timed media chapter view details `https://ns.adobe.com/xdm/context/media-timed-chapter-view-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Timed media chapter view details Example
```json
{
  "xdm:index": 0,
  "xdm:offset": 0
}
```

# Timed media chapter view details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:index](#xdmindex) | `integer` | Optional | Timed media chapter view details (this schema) |
| [xdm:offset](#xdmoffset) | `integer` | Optional | Timed media chapter view details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:index
### Chapter index

The index of the chapter inside the content.

`xdm:index`
* is optional
* type: `integer`
* defined in this schema

### xdm:index Type


`integer`






## xdm:offset
### Chapter offset

The offset of the chapter, in seconds, inside the content from the start.

`xdm:offset`
* is optional
* type: `integer`
* defined in this schema

### xdm:offset Type


`integer`





