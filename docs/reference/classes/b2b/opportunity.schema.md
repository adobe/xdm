
# XDM Business Opportunity Schema

```
https://ns.adobe.com/xdm/context/opportunity
```

This class is used to capture minimum set of properties that define business opportunity.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/b2b/opportunity.schema.json](classes/b2b/opportunity.schema.json) |
## Schema Hierarchy

* XDM Business Opportunity `https://ns.adobe.com/xdm/context/opportunity`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [B2B Source](../../datatypes/b2b/b2b-source.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-source`
  * [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Business Opportunity Example
```json
{
  "xdm:opportunityID": "12345",
  "xdm:opportunityName": "Best Buy AEP",
  "xdm:opportunityDescription": "This opportunity is for Best buy customer to buy AEP product",
  "xdm:opportunityType": "business",
  "xdm:stage": "initial"
}
```

# XDM Business Opportunity Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../behaviors/record.schema.md#id) |
| [xdm:accountID](#xdmaccountid) | `string` | Optional | XDM Business Opportunity (this schema) |
| [xdm:accountKey](#xdmaccountkey) | B2B Source | Optional | XDM Business Opportunity (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:opportunityDescription](#xdmopportunitydescription) | `string` | Optional | XDM Business Opportunity (this schema) |
| [xdm:opportunityID](#xdmopportunityid) | `string` | Optional | XDM Business Opportunity (this schema) |
| [xdm:opportunityKey](#xdmopportunitykey) | B2B Source | Optional | XDM Business Opportunity (this schema) |
| [xdm:opportunityName](#xdmopportunityname) | `string` | Optional | XDM Business Opportunity (this schema) |
| [xdm:opportunityStage](#xdmopportunitystage) | `string` | Optional | XDM Business Opportunity (this schema) |
| [xdm:opportunityType](#xdmopportunitytype) | `string` | Optional | XDM Business Opportunity (this schema) |
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
### Account ID

Unique ID of the account this opportunity is associated with.

`xdm:accountID`
* is optional
* type: `string`
* defined in this schema

### xdm:accountID Type


`string`






## xdm:accountKey
### Account Key

Unique composite identifier of the account this opportunity is associated with.

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





## xdm:opportunityDescription
### Opportunity Description

Description of the opportunity.

`xdm:opportunityDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityDescription Type


`string`






## xdm:opportunityID
### Opportunity ID

Unique ID of the opportunity.

`xdm:opportunityID`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityID Type


`string`






## xdm:opportunityKey
### Opportunity Key

Unique composite identifier for the Opportunity.

`xdm:opportunityKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:opportunityKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:opportunityName
### Opportunity Name

Name of the opportunity.

`xdm:opportunityName`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityName Type


`string`






## xdm:opportunityStage
### Opportunity Stage

Sales stage of the opportunity.

`xdm:opportunityStage`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityStage Type


`string`






## xdm:opportunityType
### Opportunity Type

Type of the opportunity.

`xdm:opportunityType`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityType Type


`string`





