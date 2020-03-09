
# Access Control Entry Schema

```
https://ns.adobe.com/xdm/external/repo/accesscontrolentry
```

Schema for the access control entry for the access control List of a resource.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [external/repo/accesscontrolentry.schema.json](external/repo/accesscontrolentry.schema.json) |

## Access Control Entry Examples

```json
{
  "repo:principal": "authenticated",
  "repo:privileges": [
    "read"
  ],
  "repo:modifier": "grant"
}
```

```json
{
  "repo:principal": {
    "xdm:provider": {
      "@id": "https://ims-na1.adobelogin.com/"
    },
    "@id": "C0B648DE57D701277F000101@AdobeID",
    "@type": "https://ns.adobe.com/adobecloudplatform/ims/user"
  },
  "repo:privileges": [
    "write",
    "delete"
  ],
  "repo:modifier": "grant",
  "repo:inheritance": "deep"
}
```


# Access Control Entry Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [repo:inheritance](#repoinheritance) | `string` | Optional | `"deep"` | Access Control Entry (this schema) |
| [repo:modifier](#repomodifier) | `string` | Optional | `"grant"` | Access Control Entry (this schema) |
| [repo:principal](#repoprincipal) | complex | Optional |  | Access Control Entry (this schema) |
| [repo:privileges](#repoprivileges) | reference | Optional |  | Access Control Entry (this schema) |
| [repo:relations](#reporelations) | `string[]` | Optional |  | Access Control Entry (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## repo:inheritance

Optional inheritance of the ace: whether the deny or grant is inherited by the children of the resource. The default inheritance is deep if this property is missing or has an invalid value.

`repo:inheritance`
* is optional
* type: `string`
* default: `"deep"`
* defined in this schema

### repo:inheritance Type


`string`



### repo:inheritance Known Values
| Value | Description |
|-------|-------------|
| `deep` | Deny or grant applies to the resource and to all children of the resource. |
| `self` | Deny or grant only applies to the resource. |




## repo:modifier

Optional modified to the privilege: either grant or deny to grant or deny, resp., the privilege. The default modifier is grant if this property is missing or has an invalid value.

`repo:modifier`
* is optional
* type: `string`
* default: `"grant"`
* defined in this schema

### repo:modifier Type


`string`



### repo:modifier Known Values
| Value | Description |
|-------|-------------|
| `grant` | Permission is granted to the principal. |
| `deny` | Permission is denied to the principal. |




## repo:principal


`repo:principal`
* is optional
* type: complex
* defined in this schema

### repo:principal Type


**Any** following *options* needs to be fulfilled.


#### Option 1


* []() – `https://ns.adobe.com/xdm/common/principal`


#### Option 2







## repo:privileges

Privileges granted or denied to the principal.

`repo:privileges`
* is optional
* type: reference

* defined in this schema

### repo:privileges Type


Array type: reference

All items must be of the type:
* []() – `#/definitions/privilege`








## repo:relations

List of relation link types to which this privilege applies.

`repo:relations`
* is optional
* type: `string[]`

* defined in this schema

### repo:relations Type


Array type: `string[]`

All items must be of the type:
`string`








