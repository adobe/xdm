
# XDM Business Marketing List Members Schema

```
https://ns.adobe.com/xdm/classes/marketing-list-member
```

XDM Business Marketing List Members is a standard Experience Data Model (XDM) class that describes members, persons, or contacts associated with a marketing list. This XDM class can only be included in the profile for customers with the B2B or B2P Edition.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/b2b/marketing-list-member.schema.json](classes/b2b/marketing-list-member.schema.json) |
## Schema Hierarchy

* XDM Business Marketing List Members `https://ns.adobe.com/xdm/classes/marketing-list-member`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [B2B Source](../../datatypes/b2b/b2b-source.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-source`
  * [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`
  * [Record Status](../../fieldgroups/shared/record-status.schema.md) `https://ns.adobe.com/xdm/mixins/record-status`


## XDM Business Marketing List Members Example
```json
{
  "xdm:marketingListMemberID": "MKTMBR11111"
}
```

# XDM Business Marketing List Members Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../behaviors/record.schema.md#id) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | [Record Status](../../fieldgroups/shared/record-status.schema.md#xdmisdeleted) |
| [xdm:marketingListID](#xdmmarketinglistid) | `string` | Optional | XDM Business Marketing List Members (this schema) |
| [xdm:marketingListKey](#xdmmarketinglistkey) | B2B Source | Optional | XDM Business Marketing List Members (this schema) |
| [xdm:marketingListMemberID](#xdmmarketinglistmemberid) | `string` | Optional | XDM Business Marketing List Members (this schema) |
| [xdm:marketingListMemberKey](#xdmmarketinglistmemberkey) | B2B Source | Optional | XDM Business Marketing List Members (this schema) |
| [xdm:personID](#xdmpersonid) | `string` | Optional | XDM Business Marketing List Members (this schema) |
| [xdm:personKey](#xdmpersonkey) | B2B Source | Optional | XDM Business Marketing List Members (this schema) |
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





## xdm:marketingListID
### Marketing List Identifier

Unique ID for the marketing list this person is a member of.

`xdm:marketingListID`
* is optional
* type: `string`
* defined in this schema

### xdm:marketingListID Type


`string`






## xdm:marketingListKey
### Marketing List Key

Unique composite identifier of the Marketing List this person is a member of.

`xdm:marketingListKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:marketingListKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:marketingListMemberID
### Marketing List Member ID

Unique ID for the membership of this person to this marketing list.

`xdm:marketingListMemberID`
* is optional
* type: `string`
* defined in this schema

### xdm:marketingListMemberID Type


`string`






## xdm:marketingListMemberKey
### Marketing List Member Key

Unique composite identifier of the membership of this person from the marketing list.

`xdm:marketingListMemberKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:marketingListMemberKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:personID
### Person Identifier

Unique ID for the person who is a member of this marketing list.

`xdm:personID`
* is optional
* type: `string`
* defined in this schema

### xdm:personID Type


`string`






## xdm:personKey
### Person Key

Unique composite identifier of the Person from the marketing list.

`xdm:personKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:personKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`




