
# XDM Business Opportunity Schema

```
https://ns.adobe.com/xdm/context/opportunity
```

An XDM Business Opportunity.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/opportunity.schema.json](context/opportunity.schema.json) |
## Schema Hierarchy

* XDM Business Opportunity `https://ns.adobe.com/xdm/context/opportunity`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../data/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [External Source System Audit Details Mixin](../common/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Business Opportunity Example
```json
{
  "xdm:opportunityID": "12345",
  "xdm:opportunityType": "business",
  "xdm:accountID": "89765",
  "xdm:campaignID": "95678"
}
```

# XDM Business Opportunity Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../data/record.schema.md#id) |
| [xdm:accountID](#xdmaccountid) | `string` | **Required** | XDM Business Opportunity (this schema) |
| [xdm:campaignID](#xdmcampaignid) | `string` | Optional | XDM Business Opportunity (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../common/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:opportunityType](#xdmopportunitytype) | `string` | **Required** | XDM Business Opportunity (this schema) |
| [xdm:opportuntyID](#xdmopportuntyid) | `string` | Optional | XDM Business Opportunity (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../data/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:accountID
### Account ID

Account identifer reference

`xdm:accountID`
* is **required**
* type: `string`
* defined in this schema

### xdm:accountID Type


`string`






## xdm:campaignID
### Campaign ID

Campaign unique identifer reference

`xdm:campaignID`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignID Type


`string`






## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details Mixin](../common/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../common/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`





## xdm:opportunityType
### Opportunity Type

Type of Opportunity.

`xdm:opportunityType`
* is **required**
* type: `string`
* defined in this schema

### xdm:opportunityType Type


`string`






## xdm:opportuntyID
### Opportunity ID

Unique identifer of the opportunity

`xdm:opportuntyID`
* is optional
* type: `string`
* defined in this schema

### xdm:opportuntyID Type


`string`





