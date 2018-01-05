---
---

# At-Rest Encryption Schema

```
https://ns.adobe.com/xdm/content/repository-policies/encryption
```

Encryption policy represents how content in a given part of the repository is encrypted at-rest.


| Abstract | Extensible | Custom Properties | Defined In |
|----------|------------|-------------------|------------|
| Cannot be instantiated | Yes | Forbidden | [content/repository-policies/encryption.schema.json](content/repository-policies/encryption.schema.json) |

## At-Rest Encryption Example
```json
{
  "xdm:keyType": "org",
  "xdm:keyStatus": "enabled"
}
```

# At-Rest Encryption Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:keyType](#xdm:keyType) | `enum` | `#/definitions/encryption` |
| [xdm:keyStatus](#xdm:keyStatus) | `enum` | `#/definitions/encryption` |

## xdm:keyType

The type of encryption key - &#39;platform&#39;: a key used across all tenants of the platform; &#39;org&#39;: a key managed exclusviely for the org to which the storage belongs

`xdm:keyType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdm:keyType-known-values).

### xdm:keyType Known Values
| Value | Description |
|-------|-------------|
| `platform` |  |
| `org` |  |




## xdm:keyStatus

The status of the encryption key - &#39;enabled&#39;: the key is enabled and content is accessible to authorized users; &#39;disabled&#39;: the key is disabled and content is not accessible

`xdm:keyStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdm:keyStatus-known-values).

### xdm:keyStatus Known Values
| Value | Description |
|-------|-------------|
| `enabled` |  |
| `disabled` |  |



