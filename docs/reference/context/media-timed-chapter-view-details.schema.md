
# Timed Media Chapter View Details Schema

```
https://ns.adobe.com/xdm/context/media-timed-chapter-view-details
```

View details for the chapter playback captured by the experience event.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/media-timed-chapter-view-details.schema.json](context/media-timed-chapter-view-details.schema.json) |
## Schema Hierarchy

* Timed Media Chapter View Details `https://ns.adobe.com/xdm/context/media-timed-chapter-view-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Timed Media Chapter View Details Example
```json
{
  "xdm:index": 0,
  "xdm:offset": 0
}
```

# Timed Media Chapter View Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:index](#xdmindex) | `integer` | Optional | Timed Media Chapter View Details (this schema) |
| [xdm:offset](#xdmoffset) | `integer` | Optional | Timed Media Chapter View Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:index
### Chapter Index

The index of the chapter inside the content.

`xdm:index`
* is optional
* type: `integer`
* defined in this schema

### xdm:index Type


`integer`






## xdm:offset
### Chapter Offset

The offset of the chapter, in seconds, inside the content from the start.

`xdm:offset`
* is optional
* type: `integer`
* defined in this schema

### xdm:offset Type


`integer`





