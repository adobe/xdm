
# Person Identifier Schema

```
https://ns.adobe.com/xdm/mixins/person-identifier
```

Used to store Person ID for an entity.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/shared/person-identifier.schema.json](mixins/shared/person-identifier.schema.json) |

## Person Identifier Example
```json
{
  "xdm:personID": "gjukoyi1234"
}
```

# Person Identifier Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personID](#xdmpersonid) | `string` | Optional | Person Identifier (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:personID
### Person ID

Person unique identifier.

`xdm:personID`
* is optional
* type: `string`
* defined in this schema

### xdm:personID Type


`string`





