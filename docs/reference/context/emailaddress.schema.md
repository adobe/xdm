
# Email Address Schema

```
https://ns.adobe.com/xdm/context/emailaddress
```

A standard email address.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/emailaddress.schema.json](context/emailaddress.schema.json) |

## Schema Hierarchy

* Email Address `https://ns.adobe.com/xdm/context/emailaddress`
  * [Audit Trail](../common/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`

## Email Address Example
```json
{
  "xdm:primary": false,
  "xdm:address": "jsmith@xyzinc.com",
  "xdm:label": "John Smith",
  "xdm:type": "work",
  "xdm:status": "active"
}
```

# Email Address Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [repo:createDate](#repocreateDate) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#repocreateDate) |
| [repo:lastModifiedDate](#repolastModifiedDate) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#repolastModifiedDate) |
| [xdm:address](#xdmaddress) | `string` | Optional | Email Address (this schema) |
| [xdm:createdByBatchID](#xdmcreatedByBatchID) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmcreatedByBatchID) |
| [xdm:label](#xdmlabel) | `string` | Optional | Email Address (this schema) |
| [xdm:modifiedByBatchID](#xdmmodifiedByBatchID) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmmodifiedByBatchID) |
| [xdm:primary](#xdmprimary) | `boolean` | Optional | Email Address (this schema) |
| [xdm:repositoryCreatedBy](#xdmrepositoryCreatedBy) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmrepositoryCreatedBy) |
| [xdm:repositoryLastModifiedBy](#xdmrepositoryLastModifiedBy) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmrepositoryLastModifiedBy) |
| [xdm:status](#xdmstatus) | `string` | Optional | Email Address (this schema) |
| [xdm:statusReason](#xdmstatusReason) | `string` | Optional | Email Address (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Email Address (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## repo:createDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The Date Time property should conform to ISO 8601 standard. An example form is &#34;2004-10-23T12:00:00-06:00&#34;.

`repo:createDate`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#repo:createDate)

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
* defined in [Audit Trail](../common/auditable.schema.md#repo:lastModifiedDate)

### repo:lastModifiedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:lastModifiedDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## xdm:address
### Address

The technical address, e.g &#39;name@domain.com&#39; as commonly defined in RFC2822 and subsequent standards.

`xdm:address`
* is optional
* type: `string`
* defined in this schema

### xdm:address Type


`string`
* format: `email` – email address (according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322))






## xdm:createdByBatchID
### Created by Batch Identifier

The Data Set Files in Catalog Services which has been originating the creation of the entity.


`xdm:createdByBatchID`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#xdm:createdByBatchID)

### xdm:createdByBatchID Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:label
### Label

Additional display information that maybe available, e.g MS Outlook rich address controls display &#39;John Smith smithjr@company.uk&#39;, the &#39;John Smith&#39; part is data that would be placed in the label.

`xdm:label`
* is optional
* type: `string`
* defined in this schema

### xdm:label Type


`string`






## xdm:modifiedByBatchID
### Modified by Batch Identifier

The last Data Set Files in Catalog Services which has modified the entity.
At creation time, `modifiedByBatchId` is set as `createdByBatchId`.


`xdm:modifiedByBatchID`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#xdm:modifiedByBatchID)

### xdm:modifiedByBatchID Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:primary
### Primary

Primary email indicator.

A Profile can have only one `primary` email address at a given point of time.


`xdm:primary`
* is optional
* type: `boolean`
* defined in this schema

### xdm:primary Type


`boolean`





## xdm:repositoryCreatedBy
### Created by User Identifier

User id who has created the entity.


`xdm:repositoryCreatedBy`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#xdm:repositoryCreatedBy)

### xdm:repositoryCreatedBy Type


`string`






## xdm:repositoryLastModifiedBy
### Modified by User Identifier

User id who last modified the entity.
At creation time, `modifiedByUser` is set as `createdByUser`.


`xdm:repositoryLastModifiedBy`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#xdm:repositoryLastModifiedBy)

### xdm:repositoryLastModifiedBy Type


`string`






## xdm:status
### Status

An indication as to the ability to use the email address.

`xdm:status`
* is optional
* type: `string`
* defined in this schema

### xdm:status Type


`string`



### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `active` | Active |
| `incomplete` | Incomplete |
| `pending_verification` | Pending Verification |
| `blacklisted` | Blacklisted |
| `blocked` | Blocked |




## xdm:statusReason
### Status Reason

A description of the current status.

`xdm:statusReason`
* is optional
* type: `string`
* defined in this schema

### xdm:statusReason Type


`string`






## xdm:type
### Type

The way the account relates to the person. e.g &#39;work&#39; or &#39;personal&#39;

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`



### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `unknown` | Unknown |
| `personal` | Personal |
| `work` | Work |
| `education` | Education |



