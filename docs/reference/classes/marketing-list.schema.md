
# XDM Business Marketing List Schema

```
https://ns.adobe.com/xdm/classes/marketing-list
```

Marketing list allows you to prioritize on prospect clients who are most likely to buy your product.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/marketing-list.schema.json](classes/marketing-list.schema.json) |
## Schema Hierarchy

* XDM Business Marketing List `https://ns.adobe.com/xdm/classes/marketing-list`
  * [Extensibility base schema](../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Business Marketing List Example
```json
{
  "xdm:marketingListID": "MKTLST1111"
}
```

# XDM Business Marketing List Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:marketingListDescription](#xdmmarketinglistdescription) | `string` | Optional | XDM Business Marketing List (this schema) |
| [xdm:marketingListID](#xdmmarketinglistid) | `string` | **Required** | XDM Business Marketing List (this schema) |
| [xdm:marketingListName](#xdmmarketinglistname) | `string` | Optional | XDM Business Marketing List (this schema) |
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





## xdm:marketingListDescription
### Marketing List Description

Marketing list description.

`xdm:marketingListDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:marketingListDescription Type


`string`






## xdm:marketingListID
### Marketing List ID

Marketing list unique identifer.

`xdm:marketingListID`
* is **required**
* type: `string`
* defined in this schema

### xdm:marketingListID Type


`string`






## xdm:marketingListName
### Marketing List Name

Marketing list name.

`xdm:marketingListName`
* is optional
* type: `string`
* defined in this schema

### xdm:marketingListName Type


`string`





