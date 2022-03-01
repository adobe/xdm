
# Work Object Schema

```
https://ns.adobe.com/experience/workfront/object
```

Base work related object

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/workfront/workobject.schema.json](adobe/experience/workfront/workobject.schema.json) |
## Schema Hierarchy

* Work Object `https://ns.adobe.com/experience/workfront/object`
  * [Record Schema](../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [External Source System Audit Details](../../../fieldgroups/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


# Work Object Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../behaviors/record.schema.md#id) |
| [workfront:objectName](#workfrontobjectname) | `string` | Optional | Work Object (this schema) |
| [workfront:objectType](#workfrontobjecttype) | `string` | Optional | Work Object (this schema) |
| [workfront:parentID](#workfrontparentid) | `string` | Optional | Work Object (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details](../../../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../../../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## workfront:objectName
### Name

The title or name associated with a given instance of the object

`workfront:objectName`
* is optional
* type: `string`
* defined in this schema

### workfront:objectName Type


`string`






## workfront:objectType
### Object Type

Basic string value representing the high level type of object

`workfront:objectType`
* is optional
* type: `string`
* defined in this schema

### workfront:objectType Type


`string`






## workfront:parentID
### Parent Object ID

The @id of a parent object if it exists

`workfront:parentID`
* is optional
* type: `string`
* defined in this schema

### workfront:parentID Type


`string`






## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details](../../../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../../../datatypes/auditing/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`




