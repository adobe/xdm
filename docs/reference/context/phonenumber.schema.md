
# Phone Number Schema

```
https://ns.adobe.com/xdm/context/phonenumber
```

Information that allows the phone calling of a person. Typically an alphanumeric number, 1-222-333 4444 in North America, but can have a wide range of formats.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/phonenumber.schema.json](context/phonenumber.schema.json) |

## Schema Hierarchy

* Phone Number `https://ns.adobe.com/xdm/context/phonenumber`
  * [Audit Trail](../common/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`

## Phone Number Example
```json
{
  "xdm:primary": true,
  "xdm:number": "1-408-888-8888",
  "xdm:status": "active"
}
```

# Phone Number Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [repo:createDate](#repocreateDate) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#repocreateDate) |
| [repo:lastModifiedDate](#repolastModifiedDate) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#repolastModifiedDate) |
| [xdm:createdByBatchID](#xdmcreatedByBatchID) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmcreatedByBatchID) |
| [xdm:extension](#xdmextension) | `string` | Optional | Phone Number (this schema) |
| [xdm:modifiedByBatchID](#xdmmodifiedByBatchID) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmmodifiedByBatchID) |
| [xdm:number](#xdmnumber) | `string` | Optional | Phone Number (this schema) |
| [xdm:primary](#xdmprimary) | `boolean` | Optional | Phone Number (this schema) |
| [xdm:repositoryCreatedBy](#xdmrepositoryCreatedBy) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmrepositoryCreatedBy) |
| [xdm:repositoryLastModifiedBy](#xdmrepositoryLastModifiedBy) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmrepositoryLastModifiedBy) |
| [xdm:status](#xdmstatus) | `string` | Optional | Phone Number (this schema) |
| [xdm:statusReason](#xdmstatusReason) | `string` | Optional | Phone Number (this schema) |
| [xdm:validity](#xdmvalidity) | `string` | Optional | Phone Number (this schema) |
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






## xdm:extension
### Extension

The internal dialing number used to call from a private exchange, operator or switchboard.

`xdm:extension`
* is optional
* type: `string`
* defined in this schema

### xdm:extension Type


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






## xdm:number
### Number

The phone number. Note the phone number is a string and may include meaningful characters such as brackets (), hyphens - or characters to indicate sub dialing identifiers like extensions x. E.g 1-353(0)18391111 or +613 9403600x1234.

`xdm:number`
* is optional
* type: `string`
* defined in this schema

### xdm:number Type


`string`






## xdm:primary
### Primary

Primary phone number indicator.

Unlike for Address or EmailAddress, there can be multiple primary phone numbers; one per communication channel.
The communication channel is defined by the type:

* `textMessaging`: type = `mobile`
* `phone`: type = `home` | `work` | `unknown`
* `fax`: type = `fax`


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

An indication as to the ability to use the phone number.

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






## xdm:validity
### Validity

A level of technical correctness of the phone number.

`xdm:validity`
* is optional
* type: `string`
* defined in this schema

### xdm:validity Type


`string`



### xdm:validity Known Values
| Value | Description |
|-------|-------------|
| `consistent` | Consistent |
| `inconsistent` | Inconsistent |
| `incomplete` | Incomplete |
| `successfullyUsed` | Successfully Used |



