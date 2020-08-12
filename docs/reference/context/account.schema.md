
# XDM Business Account Schema

```
https://ns.adobe.com/xdm/context/account
```

An XDM Business Account.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/account.schema.json](context/account.schema.json) |
## Schema Hierarchy

* XDM Business Account `https://ns.adobe.com/xdm/context/account`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../data/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [External Source System Audit Details Mixin](../common/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Business Account Example
```json
{
  "xdm:accountID": "1234567890",
  "xdm:accountNumber": "ACC111",
  "xdm:accountType": "Business"
}
```

# XDM Business Account Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../data/record.schema.md#id) |
| [xdm:accountID](#xdmaccountid) | `string` | **Required** | XDM Business Account (this schema) |
| [xdm:accountNumber](#xdmaccountnumber) | `string` | Optional | XDM Business Account (this schema) |
| [xdm:accountType](#xdmaccounttype) | `string` | Optional | XDM Business Account (this schema) |
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






## xdm:accountID
### Account ID

Account identifer

`xdm:accountID`
* is **required**
* type: `string`
* defined in this schema

### xdm:accountID Type


`string`






## xdm:accountNumber
### Account Number

Tracking or reference number for account. Up to 40 characters are allowed in this field.

`xdm:accountNumber`
* is optional
* type: `string`
* defined in this schema

### xdm:accountNumber Type


`string`






## xdm:accountType
### Account Type

Type of account, for example, customer, competitor, or partner. Entry is selected from a picklist of available values, which a salesforce admin sets. Each picklist value can have up to 40 characters.

`xdm:accountType`
* is optional
* type: `string`
* defined in this schema

### xdm:accountType Type


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




