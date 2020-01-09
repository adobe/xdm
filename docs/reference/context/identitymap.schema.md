
# IdentityMap Schema

```
https://ns.adobe.com/xdm/context/identitymap
```

Defines a map containing a set of end user identities, keyed on either namespace integration code or the namespace ID of the identity.  The values of the map are an array, meaning that more than one identity of each namespace may be carried.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/identitymap.schema.json](context/identitymap.schema.json) |

## IdentityMap Examples

```json
{
  "EMAIL": [
    {
      "xdm:id": "92312748749128"
    },
    {
      "xdm:id": "92312748749239"
    }
  ],
  "CRM": [
    {
      "xdm:id": "2394509340-30453470347",
      "xdm:authenticatedState": "authenticated"
    }
  ]
}
```

```json
{
  "https://data.adobe.io/entities/namespace/4": [
    {
      "xdm:id": "92312748749128"
    },
    {
      "xdm:id": "92312748749239"
    }
  ],
  "https://data.adobe.io/entities/namespace/10": [
    {
      "xdm:id": "2394509340-30453470347",
      "xdm:authenticatedState": "authenticated"
    }
  ],
  "https://data.adobe.io/entities/namespace/9": [
    {
      "xdm:id": "1233ce17-20e0-4a2c-8198-2a77fd60cf4d"
    }
  ]
}
```


# IdentityMap Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | IdentityMap (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:identityMap


`xdm:identityMap`
* is optional
* type: `object`
* defined in this schema

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





