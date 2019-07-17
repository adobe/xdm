
# Identities Array for Profile (deprecated) Schema

```
https://ns.adobe.com/xdm/context/profile-identities-deprecated
```

Identities array for profile (deprecated).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [context/profile-identities-deprecated.schema.json](context/profile-identities-deprecated.schema.json) |
## Schema Hierarchy

* Identities Array for Profile (deprecated) `https://ns.adobe.com/xdm/context/profile-identities-deprecated`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Identities Array for Profile (deprecated) Example
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

# Identities Array for Profile (deprecated) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:identities](#xdmidentities) | Identity | Optional | Identities Array for Profile (deprecated) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:identities
### All User Identities (deprecated)

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







