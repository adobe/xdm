
# XDM Business Campaign Workflow Schema

```
https://ns.adobe.com/xdm/context/campaign-workflow
```

An XDM Business Campaign workflow

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/campaign-workflow.schema.json](context/campaign-workflow.schema.json) |
## Schema Hierarchy

* XDM Business Campaign Workflow `https://ns.adobe.com/xdm/context/campaign-workflow`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../data/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [External Source System Audit Details Mixin](../common/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Business Campaign Workflow Example
```json
{
  "xdm:campaignID": "1",
  "xdm:campaignType": "Direct Mail Campaign",
  "xdm:extSourceSystemAudit": {
    "xdm:createdBy": "USER111",
    "xdm:createdDate": "2018-01-19T15:52:25+00:00",
    "xdm:lastUpdatedBy": "USER2222",
    "xdm:lastUpdatedDate": "2018-01-19T15:52:25+00:00",
    "xdm:lastActivityDate": "2018-01-19T15:52:25+00:00",
    "xdm:lastReferencedDate": "2018-01-20T15:52:25+00:00",
    "xdm:lastViewedDate": "2018-01-26T15:52:25+00:00"
  }
}
```

# XDM Business Campaign Workflow Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../data/record.schema.md#id) |
| [xdm:campaignID](#xdmcampaignid) | `string` | **Required** | XDM Business Campaign Workflow (this schema) |
| [xdm:campaignType](#xdmcampaigntype) | `string` | **Required** | XDM Business Campaign Workflow (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../common/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
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






## xdm:campaignID
### Campaign ID

Unique identifer for Campaign.

`xdm:campaignID`
* is **required**
* type: `string`
* defined in this schema

### xdm:campaignID Type


`string`






## xdm:campaignType
### Campaign Type

The type of campaign for which audience gets selected

`xdm:campaignType`
* is **required**
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
* defined in [External Source System Audit Details Mixin](../common/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../common/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`




