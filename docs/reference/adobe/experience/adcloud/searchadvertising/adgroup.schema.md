
# Search Advertising AdGroup Schema

```
https://ns.adobe.com/experience/adcloud/searchadvertising/adgroup
```

Search Advertising Ad Group is a logical collection or grouping of ads.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/adcloud/searchadvertising/adgroup.schema.json](adobe/experience/adcloud/searchadvertising/adgroup.schema.json) |
## Schema Hierarchy

* Search Advertising AdGroup `https://ns.adobe.com/experience/adcloud/searchadvertising/adgroup`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


# Search Advertising AdGroup Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [repo:createDate](#repocreatedate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repomodifydate) |
| [xdm:adGroupStatus](#xdmadgroupstatus) | `enum` | Optional | Search Advertising AdGroup (this schema) |
| [xdm:adgroupId](#xdmadgroupid) | `string` | Optional | Search Advertising AdGroup (this schema) |
| [xdm:adgroupName](#xdmadgroupname) | `string` | Optional | Search Advertising AdGroup (this schema) |
| [xdm:bidLevel](#xdmbidlevel) | `enum` | Optional | Search Advertising AdGroup (this schema) |
| [xdm:campaignId](#xdmcampaignid) | `string` | Optional | Search Advertising AdGroup (this schema) |
| [xdm:createdByBatchID](#xdmcreatedbybatchid) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmcreatedbybatchid) |
| [xdm:internalCampaignId](#xdminternalcampaignid) | `string` | Optional | Search Advertising AdGroup (this schema) |
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


## xdm:adGroupStatus
### Ad Group Status

Ad Group Status indicates if underlying ads are eligible to serve.

`xdm:adGroupStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmadgroupstatus-known-values).

### xdm:adGroupStatus Known Values
| Value | Description |
|-------|-------------|
| `Active` | Active |
| `Paused` | Paused |
| `Deleted` | Deleted |
| `Ended` | Ended |
| `Pending` | Pending |
| `Inactive` | Inactive |
| `Disapproved` | Disapproved |
| `Incomplete` | Incomplete |
| `Offline` | Offline |
| `On Hold (Editing)` | On Hold (Editing) |
| `On Hold (Other)` | On Hold (Other) |
| `Duplicate` | Duplicate |
| `Orphan` | Orphan |
| `Optimize` | Optimize |
| `Disabled` | Disabled |
| `Unknown` | Unknown |
| `Dummy` | Dummy |




## xdm:adgroupId
### Ad Group Identifier

Ad Group ID on the search advertising platform.

`xdm:adgroupId`
* is optional
* type: `string`
* defined in this schema

### xdm:adgroupId Type


`string`






## xdm:adgroupName
### Ad Group Name

Name of the Ad Group.

`xdm:adgroupName`
* is optional
* type: `string`
* defined in this schema

### xdm:adgroupName Type


`string`






## xdm:bidLevel
### Bid Level

What determines the bid for all ads belonging to this adgroup.

`xdm:bidLevel`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmbidlevel-known-values).

### xdm:bidLevel Known Values
| Value | Description |
|-------|-------------|
| `Gender` | Gender |
| `Placement` | Placement |
| `Vertical` | Vertical |
| `Age Range` | Age Range |
| `Keyword` | Keyword |
| `Adgroup` | Adgroup |
| `User Interest and List` | User Interest and List |




## xdm:campaignId
### Campaign Identifier

Campaign ID for the Ad Group on the search advertising platform.

`xdm:campaignId`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignId Type


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






## xdm:internalCampaignId
### Internal Campaign Identifier

Internal Campaign ID for the Ad Group. This identifier determines uniqueness of campaign and ad group record.

`xdm:internalCampaignId`
* is optional
* type: `string`
* defined in this schema

### xdm:internalCampaignId Type


`string`






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





