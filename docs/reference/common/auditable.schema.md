
# Audit Trail Schema

```
https://ns.adobe.com/xdm/common/auditable
```

Inheriting this schema using `allOf` indicates that the data record is auditable, i.e. it can be determined when the record has last been modified and by whom.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [common/auditable.schema.json](common/auditable.schema.json) |

## Schema Hierarchy

* Audit Trail `https://ns.adobe.com/xdm/common/auditable`
  * [Common Properties](../external/repo/common.schema.md) `http://ns.adobe.com/adobecloud/core/1.0`

## Audit Trail Example
```json
{
  "repo:createdDate": "2018-01-12T15:52:25+00:00",
  "repo:lastModifiedDate": "2018-01-12T15:52:25+00:00",
  "xdm:repositoryCreatedBy": "jsmith",
  "xdm:repositoryLastModifiedBy": "jsmith",
  "xdm:createdByBatchID": "https://data.adobe.io/batchid-123",
  "xdm:modifiedByBatchID": "https://data.adobe.io/batchid-456"
}
```

# Audit Trail Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [repo:createDate](#repocreateDate) | `string` | Optional | [Common Properties](../external/repo/common.schema.md#repocreateDate) |
| [repo:lastModifiedDate](#repolastModifiedDate) | `string` | Optional | [Common Properties](../external/repo/common.schema.md#repolastModifiedDate) |
| [xdm:createdByBatchID](#xdmcreatedByBatchID) | `string` | Optional | Audit Trail (this schema) |
| [xdm:modifiedByBatchID](#xdmmodifiedByBatchID) | `string` | Optional | Audit Trail (this schema) |
| [xdm:repositoryCreatedBy](#xdmrepositoryCreatedBy) | `string` | Optional | Audit Trail (this schema) |
| [xdm:repositoryLastModifiedBy](#xdmrepositoryLastModifiedBy) | `string` | Optional | Audit Trail (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## repo:createDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The Date Time property should conform to ISO 8601 standard. An example form is &#34;2004-10-23T12:00:00-06:00&#34;.

`repo:createDate`
* is optional
* type: `string`
* defined in [Common Properties](../external/repo/common.schema.md#repo:createDate)

### repo:createDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:createDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:lastModifiedDate

The server date and time when the resource was most recently modified in the repository, such as when a new version of an asset is uploaded or a directory&#39;s child resource is added or removed. The Date Time property should conform to ISO 8601 standard. An example form is &#34;2004-10-23T12:00:00-06:00&#34;.

`repo:lastModifiedDate`
* is optional
* type: `string`
* defined in [Common Properties](../external/repo/common.schema.md#repo:lastModifiedDate)

### repo:lastModifiedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:lastModifiedDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## xdm:createdByBatchID
### Created by Batch Identifier

The Data Set Files in Catalog Services which has been originating the creation of the entity.


`xdm:createdByBatchID`
* is optional
* type: `string`
* defined in this schema

### xdm:createdByBatchID Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:modifiedByBatchID
### Modified by Batch Identifier

The last Data Set Files in Catalog Services which has modified the entity.
At creation time, `modifiedByBatchId` is set as `createdByBatchId`.


`xdm:modifiedByBatchID`
* is optional
* type: `string`
* defined in this schema

### xdm:modifiedByBatchID Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:repositoryCreatedBy
### Created by User Identifier

User id who has created the entity.


`xdm:repositoryCreatedBy`
* is optional
* type: `string`
* defined in this schema

### xdm:repositoryCreatedBy Type


`string`






## xdm:repositoryLastModifiedBy
### Modified by User Identifier

User id who last modified the entity.
At creation time, `modifiedByUser` is set as `createdByUser`.


`xdm:repositoryLastModifiedBy`
* is optional
* type: `string`
* defined in this schema

### xdm:repositoryLastModifiedBy Type


`string`





