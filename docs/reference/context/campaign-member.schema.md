
# XDM Business Campaign Member Schema

```
https://ns.adobe.com/xdm/context/campaign-member
```

An XDM Business Campaign Member,which relates members such as contact/lead to a campaign

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/campaign-member.schema.json](context/campaign-member.schema.json) |
## Schema Hierarchy

* XDM Business Campaign Member `https://ns.adobe.com/xdm/context/campaign-member`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../data/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [External Source System Audit Details Mixin](../common/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Business Campaign Member Example
```json
{
  "xdm:campaignMemberID": "1",
  "xdm:campaign": {
    "xdm:ID": "1003",
    "xdm:type": "Direct Mail"
  },
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

# XDM Business Campaign Member Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../data/record.schema.md#id) |
| [xdm:campaign](#xdmcampaign) | complex | Optional | XDM Business Campaign Member (this schema) |
| [xdm:campaignMemberID](#xdmcampaignmemberid) | `string` | Optional | XDM Business Campaign Member (this schema) |
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






## xdm:campaign
### Campaign

Campaign ID and Type associated as a key-value pair

`xdm:campaign`
* is optional
* type: complex
* defined in this schema

### xdm:campaign Type

Unknown type ``.

```json
{
  "title": "Campaign",
  "description": "Campaign ID and Type associated as a key-value pair",
  "properties": {
    "xdm:ID": {
      "title": "Campaign ID",
      "description": "Campaign Unique Identifer",
      "type": "string"
    },
    "xdm:type": {
      "title": "Campaign Type",
      "description": "Campaign Type",
      "type": "string"
    }
  },
  "required": [
    "xdm:ID",
    "xdm:type"
  ],
  "simpletype": "complex"
}
```





## xdm:campaignMemberID
### Campaign Member ID

Campaign Member unique identifer

`xdm:campaignMemberID`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignMemberID Type


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




