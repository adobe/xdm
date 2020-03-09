
# Identities array for profile (deprecated) Schema

```
https://ns.adobe.com/xdm/context/profile-identities-deprecated
```

Identities array for profile (deprecated).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [context/profile-identities-deprecated.schema.json](context/profile-identities-deprecated.schema.json) |
## Schema Hierarchy

* Identities array for profile (deprecated) `https://ns.adobe.com/xdm/context/profile-identities-deprecated`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Identities array for profile (deprecated) Example
```json
{
  "xdm:identities": [
    {
      "xdm:id": "someone@example.com",
      "xdm:namespace": {
        "xdm:code": "Email"
      }
    }
  ]
}
```

# Identities array for profile (deprecated) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:identities](#xdmidentities) | Identity | Optional | Identities array for profile (deprecated) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:identities
### All user identities (deprecated)

Array of identities. Condensed, normalized encapsulation of all end-user identifiers.  Deprecated, use `xdm:identityMap` instead.

`xdm:identities`
* is optional
* type: Identity
* at least `1` items in the array
* defined in this schema

### xdm:identities Type


Array type: Identity

All items must be of the type:
* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`







