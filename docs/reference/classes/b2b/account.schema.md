
# XDM Business Account Schema

```
https://ns.adobe.com/xdm/context/account
```

XDM Business Account is a standard Experience Data Model (XDM) class that captures the minimum required properties of a business account. This XDM class can only be included in the profile for customers with the B2B or B2P Edition.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/b2b/account.schema.json](classes/b2b/account.schema.json) |
## Schema Hierarchy

* XDM Business Account `https://ns.adobe.com/xdm/context/account`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [B2B Source](../../datatypes/b2b/b2b-source.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-source`
  * [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`
  * [Record Status](../../fieldgroups/shared/record-status.schema.md) `https://ns.adobe.com/xdm/mixins/record-status`


## XDM Business Account Example
```json
{
  "xdm:accountID": "1234567890"
}
```

# XDM Business Account Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../behaviors/record.schema.md#id) |
| [xdm:accountID](#xdmaccountid) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:accountKey](#xdmaccountkey) | B2B Source | Optional | XDM Business Account (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | [Record Status](../../fieldgroups/shared/record-status.schema.md#xdmisdeleted) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:accountID
### Account Identifier

Unique ID for the account.

`xdm:accountID`
* is optional
* type: `string`
* defined in this schema

### xdm:accountID Type


`string`






## xdm:accountKey
### Account Key

Unique composite key identifier for the Account.

`xdm:accountKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:accountKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../../datatypes/auditing/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`





## xdm:isDeleted
### Soft Delete Flag

Soft delete flag to indicate if the record is marked for deletion.

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in [Record Status](../../fieldgroups/shared/record-status.schema.md#xdmisdeleted)

### xdm:isDeleted Type


`boolean`




