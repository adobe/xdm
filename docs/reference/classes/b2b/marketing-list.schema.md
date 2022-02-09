
# XDM Business Marketing List Schema

```
https://ns.adobe.com/xdm/classes/marketing-list
```

XDM Business Marketing List is a standard Experience Data Model (XDM) class that captures the minimum required properties of a marketing list. Marketing lists allow you to prioritize on prospect clients who are most likely to buy your product. This XDM class can only be included in the profile for customers with the B2B or B2P Edition.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/b2b/marketing-list.schema.json](classes/b2b/marketing-list.schema.json) |
## Schema Hierarchy

* XDM Business Marketing List `https://ns.adobe.com/xdm/classes/marketing-list`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [B2B Source](../../datatypes/b2b/b2b-source.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-source`
  * [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`
  * [Record Status](../../fieldgroups/shared/record-status.schema.md) `https://ns.adobe.com/xdm/mixins/record-status`


## XDM Business Marketing List Example
```json
{
  "xdm:marketingListID": "MKTLST1111"
}
```

# XDM Business Marketing List Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../behaviors/record.schema.md#id) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | [Record Status](../../fieldgroups/shared/record-status.schema.md#xdmisdeleted) |
| [xdm:marketingListDescription](#xdmmarketinglistdescription) | `string` | Optional | XDM Business Marketing List (this schema) |
| [xdm:marketingListID](#xdmmarketinglistid) | `string` | Optional | XDM Business Marketing List (this schema) |
| [xdm:marketingListKey](#xdmmarketinglistkey) | B2B Source | Optional | XDM Business Marketing List (this schema) |
| [xdm:marketingListName](#xdmmarketinglistname) | `string` | Optional | XDM Business Marketing List (this schema) |
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





## xdm:marketingListDescription
### Marketing List Description

Description of the marketing list.

`xdm:marketingListDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:marketingListDescription Type


`string`






## xdm:marketingListID
### Marketing List ID

Unique ID of the marketing list.

`xdm:marketingListID`
* is optional
* type: `string`
* defined in this schema

### xdm:marketingListID Type


`string`






## xdm:marketingListKey
### Marketing List Key

Unique composite identifier of the Marketing List.

`xdm:marketingListKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:marketingListKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:marketingListName
### Marketing List Name

Name of the marketing list.

`xdm:marketingListName`
* is optional
* type: `string`
* defined in this schema

### xdm:marketingListName Type


`string`





