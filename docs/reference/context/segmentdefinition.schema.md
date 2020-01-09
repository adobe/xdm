
# Segment definition Schema

```
https://ns.adobe.com/xdm/context/segmentdefinition
```

This is the base class for a segment definition which includes required fields like identity of a segment and name of segment. Segment definitions coming from various system can use this class to build Segment Definition XDM schema.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/segmentdefinition.schema.json](context/segmentdefinition.schema.json) |
## Schema Hierarchy

* Segment definition `https://ns.adobe.com/xdm/context/segmentdefinition`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [IdentityMap](identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`
  * [Audit trail](../common/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`
  * [Record Schema](../data/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Segment identity](segmentidentity.schema.md) `https://ns.adobe.com/xdm/context/segmentidentity`


## Segment definition Example
```json
{
  "xdm:identityMap": {
    "AAMSegments": [
      {
        "xdm:id": "112233",
        "xdm:primary": true
      }
    ]
  },
  "xdm:segmentName": "Users with TV segment",
  "xdm:description": "Segment is about users who have TV",
  "xdm:segmentStatus": "ACTIVE",
  "repo:createDate": "2018-10-23T12:00:00-06:00",
  "repo:modifyDate": "2019-03-21T12:00:00-06:00"
}
```

# Segment definition Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../data/record.schema.md#id) |
| [repo:createDate](#repocreatedate) | `string` | Optional | [Audit trail](../common/auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional | [Audit trail](../common/auditable.schema.md#repomodifydate) |
| [xdm:createdByBatchID](#xdmcreatedbybatchid) | `string` | Optional | [Audit trail](../common/auditable.schema.md#xdmcreatedbybatchid) |
| [xdm:description](#xdmdescription) | `string` | Optional | Segment definition (this schema) |
| [xdm:identityMap](#xdmidentitymap) | `object` | **Required** | [IdentityMap](identitymap.schema.md#xdmidentitymap) |
| [xdm:modifiedByBatchID](#xdmmodifiedbybatchid) | `string` | Optional | [Audit trail](../common/auditable.schema.md#xdmmodifiedbybatchid) |
| [xdm:repositoryCreatedBy](#xdmrepositorycreatedby) | `string` | Optional | [Audit trail](../common/auditable.schema.md#xdmrepositorycreatedby) |
| [xdm:repositoryLastModifiedBy](#xdmrepositorylastmodifiedby) | `string` | Optional | [Audit trail](../common/auditable.schema.md#xdmrepositorylastmodifiedby) |
| [xdm:segmentIdentity](#xdmsegmentidentity) | Segment identity | Optional | Segment definition (this schema) |
| [xdm:segmentName](#xdmsegmentname) | `string` | **Required** | Segment definition (this schema) |
| [xdm:segmentStatus](#xdmsegmentstatus) | `enum` | Optional | Segment definition (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Segment definition (this schema) |
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






## repo:createDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:createDate`
* is optional
* type: `string`
* defined in [Audit trail](../common/auditable.schema.md#repocreatedate)

### repo:createDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:createDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:modifyDate

The server date and time when the resource was last modified in the repository, such as when a new version of an asset is uploaded or a directory's child resource is added or removed. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:modifyDate`
* is optional
* type: `string`
* defined in [Audit trail](../common/auditable.schema.md#repomodifydate)

### repo:modifyDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:modifyDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## xdm:createdByBatchID
### Created by batch identifier

The dataset files in Catalog which has been originating the creation of the record.

`xdm:createdByBatchID`
* is optional
* type: `string`
* defined in [Audit trail](../common/auditable.schema.md#xdmcreatedbybatchid)

### xdm:createdByBatchID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:description
### Segment description

Description of the segment.

`xdm:description`
* is optional
* type: `string`
* defined in this schema

### xdm:description Type


`string`






## xdm:identityMap


`xdm:identityMap`
* is **required**
* type: `object`
* defined in [IdentityMap](identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:modifiedByBatchID
### Modified by batch identifier

The last dataset files in Catalog which has modified the record. At creation time, `modifiedByBatchID` is set as `createdByBatchID`.

`xdm:modifiedByBatchID`
* is optional
* type: `string`
* defined in [Audit trail](../common/auditable.schema.md#xdmmodifiedbybatchid)

### xdm:modifiedByBatchID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:repositoryCreatedBy
### Created by user identifier

User ID of who created the record.

`xdm:repositoryCreatedBy`
* is optional
* type: `string`
* defined in [Audit trail](../common/auditable.schema.md#xdmrepositorycreatedby)

### xdm:repositoryCreatedBy Type


`string`






## xdm:repositoryLastModifiedBy
### Modified by user identifier

User ID of who last modified the record. At creation time, `modifiedByUser` is set as `createdByUser`.

`xdm:repositoryLastModifiedBy`
* is optional
* type: `string`
* defined in [Audit trail](../common/auditable.schema.md#xdmrepositorylastmodifiedby)

### xdm:repositoryLastModifiedBy Type


`string`






## xdm:segmentIdentity
### Segment identity

Identity of the segment.

`xdm:segmentIdentity`
* is optional
* type: Segment identity
* defined in this schema

### xdm:segmentIdentity Type


* [Segment identity](segmentidentity.schema.md) – `https://ns.adobe.com/xdm/context/segmentidentity`





## xdm:segmentName
### Segment name

Name of the segment.

`xdm:segmentName`
* is **required**
* type: `string`
* defined in this schema

### xdm:segmentName Type


`string`






## xdm:segmentStatus
### Segment status

Current status of segment from external system normalized to active or inactive.

`xdm:segmentStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmsegmentstatus-known-values).

### xdm:segmentStatus Known Values
| Value | Description |
|-------|-------------|
| `ACTIVE` |  |
| `INACTIVE` |  |
| `DELETED` |  |




## xdm:version
### Segment version

Version of the segment.

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`





