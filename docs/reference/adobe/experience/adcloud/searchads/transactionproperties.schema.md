
# Advertising Transaction Property Schema

```
https://ns.adobe.com/xdm/adcloud/searchads/transactionproperties
```

Advertising Transaction schemas includes metadata that describes a transaction property setup by Advertiser

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/searchads/transactionproperties.schema.json](adobe/experience/adcloud/searchads/transactionproperties.schema.json) |
## Schema Hierarchy

* Advertising Transaction Property `https://ns.adobe.com/xdm/adcloud/searchads/transactionproperties`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


## Advertising Transaction Property Example
```json
{
  "@id": "100000123",
  "searchads:propertyName": "xyz",
  "searchads:propertyId": "12345678",
  "searchads:displayName": "test display name",
  "searchads:revenueType": "null",
  "searchads:createDate": "2018-01-12T15:52:25+00:00",
  "searchads:modifyDate": "2018-01-12T15:52:25+00:00"
}
```

# Advertising Transaction Property Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [repo:createDate](#repocreatedate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repomodifydate) |
| [searchads:createDate](#searchadscreatedate) | `string` | Optional | Advertising Transaction Property (this schema) |
| [searchads:displayName](#searchadsdisplayname) | `string` | Optional | Advertising Transaction Property (this schema) |
| [searchads:modifyDate](#searchadsmodifydate) | `string` | Optional | Advertising Transaction Property (this schema) |
| [searchads:propertyId](#searchadspropertyid) | `string` | Optional | Advertising Transaction Property (this schema) |
| [searchads:propertyName](#searchadspropertyname) | `string` | Optional | Advertising Transaction Property (this schema) |
| [searchads:revenueType](#searchadsrevenuetype) | `string` | Optional | Advertising Transaction Property (this schema) |
| [xdm:createdByBatchID](#xdmcreatedbybatchid) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmcreatedbybatchid) |
| [xdm:modifiedByBatchID](#xdmmodifiedbybatchid) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmmodifiedbybatchid) |
| [xdm:repositoryCreatedBy](#xdmrepositorycreatedby) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmrepositorycreatedby) |
| [xdm:repositoryLastModifiedBy](#xdmrepositorylastmodifiedby) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmrepositorylastmodifiedby) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../../../../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## repo:createDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:createDate`
* is optional
* type: `string`
* defined in [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repocreatedate)

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
* defined in [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repomodifydate)

### repo:modifyDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:modifyDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## searchads:createDate

The date and time when the transaction was created. An example form is "2004-10-23T12:00:00-06:00".

`searchads:createDate`
* is optional
* type: `string`
* defined in this schema

### searchads:createDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### searchads:createDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## searchads:displayName
### Display Name

Display Name.

`searchads:displayName`
* is optional
* type: `string`
* defined in this schema

### searchads:displayName Type


`string`






## searchads:modifyDate

The date and time when the transaction was last modified. An example form is "2004-10-23T12:00:00-06:00".

`searchads:modifyDate`
* is optional
* type: `string`
* defined in this schema

### searchads:modifyDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### searchads:modifyDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## searchads:propertyId
### Property Id

Property Id.

`searchads:propertyId`
* is optional
* type: `string`
* defined in this schema

### searchads:propertyId Type


`string`






## searchads:propertyName
### Name of the property

Property Name.

`searchads:propertyName`
* is optional
* type: `string`
* defined in this schema

### searchads:propertyName Type


`string`






## searchads:revenueType
### Revenue Type

Revenue Type.

`searchads:revenueType`
* is optional
* type: `string`
* defined in this schema

### searchads:revenueType Type


`string`






## xdm:createdByBatchID
### Created by batch identifier

The dataset files in Catalog which has been originating the creation of the record.

`xdm:createdByBatchID`
* is optional
* type: `string`
* defined in [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmcreatedbybatchid)

### xdm:createdByBatchID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:modifiedByBatchID
### Modified by batch identifier

The last dataset files in Catalog which has modified the record. At creation time, `modifiedByBatchID` is set as `createdByBatchID`.

`xdm:modifiedByBatchID`
* is optional
* type: `string`
* defined in [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmmodifiedbybatchid)

### xdm:modifiedByBatchID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:repositoryCreatedBy
### Created by user identifier

User ID of who created the record.

`xdm:repositoryCreatedBy`
* is optional
* type: `string`
* defined in [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmrepositorycreatedby)

### xdm:repositoryCreatedBy Type


`string`






## xdm:repositoryLastModifiedBy
### Modified by user identifier

User ID of who last modified the record. At creation time, `modifiedByUser` is set as `createdByUser`.

`xdm:repositoryLastModifiedBy`
* is optional
* type: `string`
* defined in [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmrepositorylastmodifiedby)

### xdm:repositoryLastModifiedBy Type


`string`





