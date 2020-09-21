
# XDM Activity Type Schema

```
https://ns.adobe.com/xdm/context/activity-type
```

An XDM Activity type in the form of a task or a business event

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/activity-type.schema.json](classes/activity-type.schema.json) |
## Schema Hierarchy

* XDM Activity Type `https://ns.adobe.com/xdm/context/activity-type`
  * [Extensibility base schema](../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Activity Type Example
```json
{
  "xdm:activityType": {
    "xdm:ID": "34934"
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

# XDM Activity Type Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:activityType](#xdmactivitytype) | `object` | Optional | XDM Activity Type (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
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






## xdm:activityType


`xdm:activityType`
* is optional
* type: `object`
* defined in this schema

### xdm:activityType Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | **Required** |



#### xdm:ID
##### Activity type ID

Activity Type unique identifer for a given task or a business event

`xdm:ID`
* is **required**
* type: `string`

##### xdm:ID Type


`string`











## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../datatypes/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`




