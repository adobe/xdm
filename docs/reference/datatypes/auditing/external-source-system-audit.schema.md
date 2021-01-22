
# External Source System Audit Attributes Schema

```
https://ns.adobe.com/xdm/common/external-source-system-audit
```

External Source System Audit fields.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/auditing/external-source-system-audit.schema.json](datatypes/auditing/external-source-system-audit.schema.json) |
## Schema Hierarchy

* External Source System Audit Attributes `https://ns.adobe.com/xdm/common/external-source-system-audit`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## External Source System Audit Attributes Example
```json
{
  "xdm:createdBy": "USER111",
  "xdm:createdDate": "2018-01-02T15:52:25+00:00",
  "xdm:lastUpdatedBy": "USER2222",
  "xdm:lastUpdatedDate": "2018-01-02T15:52:25+00:00",
  "xdm:lastActivityDate": "2018-01-02T15:52:25+00:00",
  "xdm:lastReferencedDate": "2018-01-02T15:52:25+00:00",
  "xdm:lastViewedDate": "2018-01-02T15:52:25+00:00"
}
```

# External Source System Audit Attributes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:createdBy](#xdmcreatedby) | `string` | Optional | External Source System Audit Attributes (this schema) |
| [xdm:createdDate](#xdmcreateddate) | `string` | Optional | External Source System Audit Attributes (this schema) |
| [xdm:externalID](#xdmexternalid) | `string` | Optional | External Source System Audit Attributes (this schema) |
| [xdm:lastActivityDate](#xdmlastactivitydate) | `string` | Optional | External Source System Audit Attributes (this schema) |
| [xdm:lastReferencedDate](#xdmlastreferenceddate) | `string` | Optional | External Source System Audit Attributes (this schema) |
| [xdm:lastUpdatedBy](#xdmlastupdatedby) | `string` | Optional | External Source System Audit Attributes (this schema) |
| [xdm:lastUpdatedDate](#xdmlastupdateddate) | `string` | Optional | External Source System Audit Attributes (this schema) |
| [xdm:lastViewedDate](#xdmlastvieweddate) | `string` | Optional | External Source System Audit Attributes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:createdBy
### Created By

Name of the user who created this record

`xdm:createdBy`
* is optional
* type: `string`
* defined in this schema

### xdm:createdBy Type


`string`






## xdm:createdDate
### Created Date

Date when this record was created.

`xdm:createdDate`
* is optional
* type: `string`
* defined in this schema

### xdm:createdDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:externalID
### External ID

External unique identifier reference to external source to help identify and deduplicate if and when needed.

`xdm:externalID`
* is optional
* type: `string`
* defined in this schema

### xdm:externalID Type


`string`






## xdm:lastActivityDate
### Last Activity Date

Last activity date.

`xdm:lastActivityDate`
* is optional
* type: `string`
* defined in this schema

### xdm:lastActivityDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:lastReferencedDate
### Last Referenced Date

Last referenced date.

`xdm:lastReferencedDate`
* is optional
* type: `string`
* defined in this schema

### xdm:lastReferencedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:lastUpdatedBy
### Last Updated By

User who last modified this record.

`xdm:lastUpdatedBy`
* is optional
* type: `string`
* defined in this schema

### xdm:lastUpdatedBy Type


`string`






## xdm:lastUpdatedDate
### Last Updated Date

Date when this record was last modofied.

`xdm:lastUpdatedDate`
* is optional
* type: `string`
* defined in this schema

### xdm:lastUpdatedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:lastViewedDate
### Last Viewed Date

Last viewed date.

`xdm:lastViewedDate`
* is optional
* type: `string`
* defined in this schema

### xdm:lastViewedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





