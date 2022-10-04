
# XDM Business Opportunity Person Relation Schema

```
https://ns.adobe.com/xdm/classes/opportunity-person
```

XDM Business Opportunity Person Relation is a standard Experience Data Model (XDM) class that captures the minimum required properties of a person that is associated with a business opportunity. This XDM class can only be included in the profile for customers with the B2B or B2P Edition.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/b2b/opportunity-person.schema.json](classes/b2b/opportunity-person.schema.json) |
## Schema Hierarchy

* XDM Business Opportunity Person Relation `https://ns.adobe.com/xdm/classes/opportunity-person`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [B2B Source](../../datatypes/b2b/b2b-source.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-source`
  * [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`
  * [Record Status](../../fieldgroups/shared/record-status.schema.md) `https://ns.adobe.com/xdm/mixins/record-status`


## XDM Business Opportunity Person Relation Example
```json
{
  "xdm:opportunityPersonID": "123456",
  "xdm:opportunityID": "jkghdiuw68o",
  "xdm:personID": "6897ihkhf",
  "xdm:personRole": "Sales",
  "xdm:isPrimary": true
}
```

# XDM Business Opportunity Person Relation Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../behaviors/record.schema.md#id) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | [Record Status](../../fieldgroups/shared/record-status.schema.md#xdmisdeleted) |
| [xdm:isPrimary](#xdmisprimary) | `boolean` | Optional | XDM Business Opportunity Person Relation (this schema) |
| [xdm:opportunityID](#xdmopportunityid) | `string` | Optional | XDM Business Opportunity Person Relation (this schema) |
| [xdm:opportunityKey](#xdmopportunitykey) | B2B Source | Optional | XDM Business Opportunity Person Relation (this schema) |
| [xdm:opportunityPersonID](#xdmopportunitypersonid) | `string` | Optional | XDM Business Opportunity Person Relation (this schema) |
| [xdm:opportunityPersonKey](#xdmopportunitypersonkey) | B2B Source | Optional | XDM Business Opportunity Person Relation (this schema) |
| [xdm:personID](#xdmpersonid) | `string` | Optional | XDM Business Opportunity Person Relation (this schema) |
| [xdm:personKey](#xdmpersonkey) | B2B Source | Optional | XDM Business Opportunity Person Relation (this schema) |
| [xdm:personRole](#xdmpersonrole) | `string` | Optional | XDM Business Opportunity Person Relation (this schema) |
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





## xdm:isPrimary
### Primary Flag

Boolean indicating if the person is the primary contact on this opportunity.

`xdm:isPrimary`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isPrimary Type


`boolean`





## xdm:opportunityID
### Opportunity ID

Unique identifier for the opportunity in this opportunity person relationship.

`xdm:opportunityID`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityID Type


`string`






## xdm:opportunityKey
### Opportunity Key

Unique composite identifier of the Opportunity in this opportunity person relationship.

`xdm:opportunityKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:opportunityKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:opportunityPersonID
### Opportunity Person ID

Unique identifier for the relationship between the opportunity and the person.

`xdm:opportunityPersonID`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityPersonID Type


`string`






## xdm:opportunityPersonKey
### Opportunity Person Key

Unique composite identifier of the relationship between the Opportunity and the Person.

`xdm:opportunityPersonKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:opportunityPersonKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:personID
### Person ID

Unique identifier for the person in this opportunity person relationship.

`xdm:personID`
* is optional
* type: `string`
* defined in this schema

### xdm:personID Type


`string`






## xdm:personKey
### Person Key

Unique composite identifier of the Person related to the Opportunity.

`xdm:personKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:personKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:personRole
### Person Role

Role of the person on this opportunity.

`xdm:personRole`
* is optional
* type: `string`
* defined in this schema

### xdm:personRole Type


`string`





