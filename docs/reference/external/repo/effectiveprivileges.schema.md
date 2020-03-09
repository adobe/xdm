
# Effective Privileges Schema

```
https://ns.adobe.com/xdm/external/repo/effectiveprivileges
```

Schema for the effective privileges resource.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [external/repo/effectiveprivileges.schema.json](external/repo/effectiveprivileges.schema.json) |

## Effective Privileges Example
```json
{
  "*": [
    "read",
    "write"
  ],
  "api:ac": [
    "read"
  ]
}
```

# Effective Privileges Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [*](#) | `enum[]` | Optional | Effective Privileges (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## *

Privilege granted to the current subject.

`*`
* is optional
* type: `enum[]`

* defined in this schema

### * Type


Array type: `enum[]`

All items must be of the type:
`string`








