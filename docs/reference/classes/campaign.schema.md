
# XDM Business Campaign Schema

```
https://ns.adobe.com/xdm/classes/campaign
```

This class is used to capture minimum properties that are required to define xdm business campaign concept.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/campaign.schema.json](classes/campaign.schema.json) |
## Schema Hierarchy

* XDM Business Campaign `https://ns.adobe.com/xdm/classes/campaign`
  * [Extensibility base schema](../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [External Source System Audit Details Mixin](../fieldgroups/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## XDM Business Campaign Example
```json
{}
```

# XDM Business Campaign Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:campaignDescription](#xdmcampaigndescription) | `string` | Optional | XDM Business Campaign (this schema) |
| [xdm:campaignID](#xdmcampaignid) | `string` | Optional | XDM Business Campaign (this schema) |
| [xdm:campaignName](#xdmcampaignname) | `string` | Optional | XDM Business Campaign (this schema) |
| [xdm:campaignType](#xdmcampaigntype) | `string` | Optional | XDM Business Campaign (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
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






## xdm:campaignDescription
### Campaign Description

Campaign description.

`xdm:campaignDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignDescription Type


`string`






## xdm:campaignID
### Campaign ID

Unique identifer for campaign.

`xdm:campaignID`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignID Type


`string`






## xdm:campaignName
### Campaign Name

Friendly name for campaign.

`xdm:campaignName`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignName Type


`string`






## xdm:campaignType
### Campaign Type

The type of campaign for which audience gets selected.

`xdm:campaignType`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignType Type


`string`






## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details Mixin](../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../datatypes/auditing/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`




