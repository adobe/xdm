
# Person Identifier Schema

```
https://ns.adobe.com/xdm/mixins/person-identifier
```

Used to store Person ID for an entity.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/shared/person-identifier.schema.json](fieldgroups/shared/person-identifier.schema.json) |
## Schema Hierarchy

* Person Identifier `https://ns.adobe.com/xdm/mixins/person-identifier`
  * [B2B Source](../../datatypes/b2b/b2b-source.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-source`


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
| [xdm:personKey](#xdmpersonkey) | B2B Source | Optional | Person Identifier (this schema) |
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






## xdm:personKey
### Person Key

Unique composite identifier of the Person.

`xdm:personKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:personKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`




