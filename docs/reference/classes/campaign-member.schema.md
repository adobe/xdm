
# XDM Business Campaign Members Schema

```
https://ns.adobe.com/xdm/context/campaign-member
```

An XDM Business Campaign Member,which relates members such as contact/lead to a campaign.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/campaign-member.schema.json](classes/campaign-member.schema.json) |
## Schema Hierarchy

* XDM Business Campaign Members `https://ns.adobe.com/xdm/context/campaign-member`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [External Source System Audit Details](../fieldgroups/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`
  * [B2B Source](../datatypes/b2b/b2b-source.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-source`


## XDM Business Campaign Members Example
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

# XDM Business Campaign Members Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:campaignID](#xdmcampaignid) | `string` | Optional | XDM Business Campaign Members (this schema) |
| [xdm:campaignKey](#xdmcampaignkey) | B2B Source | Optional | XDM Business Campaign Members (this schema) |
| [xdm:campaignMemberID](#xdmcampaignmemberid) | `string` | Optional | XDM Business Campaign Members (this schema) |
| [xdm:campaignMemberKey](#xdmcampaignmemberkey) | B2B Source | Optional | XDM Business Campaign Members (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details](../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:personID](#xdmpersonid) | `string` | Optional | XDM Business Campaign Members (this schema) |
| [xdm:personKey](#xdmpersonkey) | B2B Source | Optional | XDM Business Campaign Members (this schema) |
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






## xdm:campaignID
### Campaign ID

Campaign Unique Identifer.

`xdm:campaignID`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignID Type


`string`






## xdm:campaignKey
### Campaign Key

Unique composite identifer of the campaign.

`xdm:campaignKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:campaignKey Type


* [B2B Source](../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:campaignMemberID
### Campaign Member ID

Campaign Member unique identifer.

`xdm:campaignMemberID`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignMemberID Type


`string`






## xdm:campaignMemberKey
### Campaign Member Key

Unique composite identifer of the campaign member.

`xdm:campaignMemberKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:campaignMemberKey Type


* [B2B Source](../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details](../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../datatypes/auditing/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`





## xdm:personID
### Person ID

Person unique identifier.

`xdm:personID`
* is optional
* type: `string`
* defined in this schema

### xdm:personID Type


`string`






## xdm:personKey
### Person Key

Unique composite identifier of the person.

`xdm:personKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:personKey Type


* [B2B Source](../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`




