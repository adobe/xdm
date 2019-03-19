
# Ad Break Schema

```
https://ns.adobe.com/xdm/context/advertising-break
```

Details about how a timed advertising is being inserted into a timed media.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/advertising-break.schema.json](context/advertising-break.schema.json) |

## Ad Break Example
```json
{
  "@id": "https://data.adobe.io/entities/ad-break/2394509340-30453470347",
  "dc:title": "My Pod",
  "xdm:offset": 3
}
```

# Ad Break Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Ad Break (this schema) |
| [dc:title](#dctitle) | `string` | Optional | Ad Break (this schema) |
| [xdm:offset](#xdmoffset) | `integer` | Optional | Ad Break (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Ad Break ID

Identifier of the ad break.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## dc:title
### Ad Break Name

The friendly name of the ad break.

`dc:title`
* is optional
* type: `string`
* defined in this schema

### dc:title Type


`string`






## xdm:offset
### Ad Break Offset

The offset, in seconds, of the ad break from the start of the primary content.

`xdm:offset`
* is optional
* type: `integer`
* defined in this schema

### xdm:offset Type


`integer`





