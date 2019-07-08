
# Ad Asset Reference Schema

```
https://ns.adobe.com/xdm/context/advertising-timed-asset-reference
```

Asset information about the ad captured by the experience event.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/advertising-timed-asset-reference.schema.json](context/advertising-timed-asset-reference.schema.json) |
## Schema Hierarchy

* Ad Asset Reference `https://ns.adobe.com/xdm/context/advertising-timed-asset-reference`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Ad Asset Reference Example
```json
{
  "@id": "https://data.adobe.io/entities/asser-reference/23423",
  "dc:title": "Acme offer 21",
  "xmpDM:duration": 23
}
```

# Ad Asset Reference Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Ad Asset Reference (this schema) |
| [dc:title](#dctitle) | `string` | Optional | Ad Asset Reference (this schema) |
| [xmpDM:duration](#xmpdmduration) | `integer` | Optional | Ad Asset Reference (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Ad ID

Identifier of the ad asset provided by media analytics customers.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## dc:title
### Ad Name

The friendly (human-readable) name of the ad asset.

`dc:title`
* is optional
* type: `string`
* defined in this schema

### dc:title Type


`string`






## xmpDM:duration
### Ad Length/Duration

Length of ad asset in seconds.

`xmpDM:duration`
* is optional
* type: `integer`
* defined in this schema

### xmpDM:duration Type


`integer`





