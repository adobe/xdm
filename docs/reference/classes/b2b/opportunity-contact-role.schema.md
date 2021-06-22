
# XDM Buying Group Schema

```
https://ns.adobe.com/xdm/context/opportunity-contact-role
```

Opportunity Contact Role

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [classes/b2b/opportunity-contact-role.schema.json](classes/b2b/opportunity-contact-role.schema.json) |
## Schema Hierarchy

* XDM Buying Group `https://ns.adobe.com/xdm/context/opportunity-contact-role`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [External Source System Audit Details Mixin](../../fieldgroups/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Buying Group Example
```json
{
  "xdm:opportunityContactID": "123456",
  "xdm:opportunityID": "123",
  "xdm:contactID": "456",
  "xdm:extSourceSystemAudit": {
    "xdm:createdBy": "USER111",
    "xdm:createdDate": "2018-01-20T15:52:25+00:00",
    "xdm:lastUpdatedBy": "USER2222",
    "xdm:lastUpdatedDate": "2018-01-20T15:52:25+00:00",
    "xdm:lastActivityDate": "2018-01-20T15:52:25+00:00",
    "xdm:lastReferencedDate": "2018-01-20T15:52:25+00:00",
    "xdm:lastViewedDate": "2018-01-20T15:52:25+00:00"
  }
}
```

# XDM Buying Group Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../behaviors/record.schema.md#id) |
| [xdm:contactID](#xdmcontactid) | `string` | **Required** | XDM Buying Group (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:opportunityContactID](#xdmopportunitycontactid) | `string` | **Required** | XDM Buying Group (this schema) |
| [xdm:opportunityID](#xdmopportunityid) | `string` | **Required** | XDM Buying Group (this schema) |
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






## xdm:contactID
### Contact ID

Contact ID unique identifier.

`xdm:contactID`
* is **required**
* type: `string`
* defined in this schema

### xdm:contactID Type


`string`






## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details Mixin](../../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../../datatypes/auditing/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`





## xdm:opportunityContactID
### opportunity ContactID

A Unique Key describing a combination of OpportunityID and contactID.

`xdm:opportunityContactID`
* is **required**
* type: `string`
* defined in this schema

### xdm:opportunityContactID Type


`string`






## xdm:opportunityID
### Opportunity ID

Opportunity ID unique identifier.

`xdm:opportunityID`
* is **required**
* type: `string`
* defined in this schema

### xdm:opportunityID Type


`string`





