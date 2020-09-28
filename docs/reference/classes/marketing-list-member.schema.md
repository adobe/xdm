
# XDM Business Marketing List Members Schema

```
https://ns.adobe.com/xdm/classes/marketing-list-member
```

Members/Persons/Contacts etc. associated with a marketing list.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/marketing-list-member.schema.json](classes/marketing-list-member.schema.json) |
## Schema Hierarchy

* XDM Business Marketing List Members `https://ns.adobe.com/xdm/classes/marketing-list-member`
  * [Extensibility base schema](../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Business Marketing List Members Example
```json
{
  "xdm:marketingListMemberID": "MKTMBR11111"
}
```

# XDM Business Marketing List Members Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:marketingListID](#xdmmarketinglistid) | `string` | Optional | XDM Business Marketing List Members (this schema) |
| [xdm:marketingListMemberID](#xdmmarketinglistmemberid) | `string` | **Required** | XDM Business Marketing List Members (this schema) |
| [xdm:personID](#xdmpersonid) | `string` | Optional | XDM Business Marketing List Members (this schema) |
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






## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../datatypes/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`





## xdm:marketingListID
### Marketing List Identifier

Unique identifier for the marketing list.

`xdm:marketingListID`
* is optional
* type: `string`
* defined in this schema

### xdm:marketingListID Type


`string`






## xdm:marketingListMemberID
### Marketing List Member ID

Marketing list member identifer

`xdm:marketingListMemberID`
* is **required**
* type: `string`
* defined in this schema

### xdm:marketingListMemberID Type


`string`






## xdm:personID
### Person Identifier

Person associated with the marketing list.

`xdm:personID`
* is optional
* type: `string`
* defined in this schema

### xdm:personID Type


`string`





