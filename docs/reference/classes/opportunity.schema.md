
# XDM Business Opportunity Schema

```
https://ns.adobe.com/xdm/context/opportunity
```

This class is used to capture minimum set of properties that define business opportunity.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/opportunity.schema.json](classes/opportunity.schema.json) |
## Schema Hierarchy

* XDM Business Opportunity `https://ns.adobe.com/xdm/context/opportunity`
  * [Extensibility base schema](../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


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
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:accountID](#xdmaccountid) | `string` | Optional | XDM Business Opportunity (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:opportunityDescription](#xdmopportunitydescription) | `string` | Optional | XDM Business Opportunity (this schema) |
| [xdm:opportunityID](#xdmopportunityid) | `string` | **Required** | XDM Business Opportunity (this schema) |
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
* defined in [Record Schema](../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:accountID
### Account ID

Account unique identifier reference that this opportunity is linked to.

`xdm:accountID`
* is optional
* type: `string`
* defined in this schema

### xdm:accountID Type


`string`






## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../datatypes/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`





## xdm:opportunityDescription
### Opportunity Description

Additional information to describe the opportunity, such as possible products to sell or past purchases from the customer.

`xdm:opportunityDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityDescription Type


`string`






## xdm:opportunityID
### Opportunity ID

Opportunity unique identifer

`xdm:opportunityID`
* is **required**
* type: `string`
* defined in this schema

### xdm:opportunityID Type


`string`






## xdm:opportunityName
### Opportunity Name

Subject or descriptive name, such as the expected order or company name, for the opportunity.

`xdm:opportunityName`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityName Type


`string`






## xdm:opportunityStage
### Opportunity Stage

Sales stage of this opportunity to aid the sales team in their efforts to win this opportunity.

`xdm:opportunityStage`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityStage Type


`string`






## xdm:opportunityType
### Opportunity Type

Opportunity type such as Existing Business or New Business

`xdm:opportunityType`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityType Type


`string`





