
# Key Value Pair Schema

```
https://ns.adobe.com/xdm/datatypes/keyvalue
```

Key value pair.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/keyvalue.schema.json](datatypes/keyvalue.schema.json) |

## Key Value Pair Example
```json
{
  "xdm:key": "category",
  "xdm:value": "airport"
}
```

# Key Value Pair Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:key](#xdmkey) | `string` | Optional | Key Value Pair (this schema) |
| [xdm:value](#xdmvalue) | `string` | Optional | Key Value Pair (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:key
### Key

Key

`xdm:key`
* is optional
* type: `string`
* defined in this schema

### xdm:key Type


`string`






## xdm:value
### Value

Value

`xdm:value`
* is optional
* type: `string`
* defined in this schema

### xdm:value Type


`string`





