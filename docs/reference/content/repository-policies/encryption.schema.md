
# At-Rest Encryption Schema

```
https://ns.adobe.com/xdm/content/repository-policies/encryption
```

Encryption policy represents how content in a given part of the repository is encrypted at-rest.


| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Cannot be instantiated | Yes | Stable | No | Forbidden | Permitted | [content/repository-policies/encryption.schema.json](content/repository-policies/encryption.schema.json) |

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
| [xdm:keyStatus](#xdmkeystatus) | `enum` | `https://ns.adobe.com/xdm/content/repository-policies/encryption#/definitions/encryption` |
| [xdm:keyType](#xdmkeytype) | `enum` | `https://ns.adobe.com/xdm/content/repository-policies/encryption#/definitions/encryption` |

## xdm:keyStatus

The status of the encryption key - 'enabled': the key is enabled and content is accessible to authorized users; 'disabled': the key is disabled and content is not accessible.

`xdm:keyStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmkeystatus-known-values).

### xdm:keyStatus Known Values
| Value | Description |
|-------|-------------|
| `enabled` |  |
| `disabled` |  |




## xdm:keyType

The type of encryption key - 'platform': a key used across all tenants of the platform; 'org': a key managed exclusively for the org to which the storage belongs.

`xdm:keyType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmkeytype-known-values).

### xdm:keyType Known Values
| Value | Description |
|-------|-------------|
| `platform` |  |
| `org` |  |



