
# DSP Advertising Campaign Schema

```
https://ns.adobe.com/xdm/adcloud/dsp/campaign
```

Adobe Advertising Cloud DSP Campaign Details.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/dsp/campaign.schema.json](adobe/experience/adcloud/dsp/campaign.schema.json) |
## Schema Hierarchy

* DSP Advertising Campaign `https://ns.adobe.com/xdm/adcloud/dsp/campaign`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


# DSP Advertising Campaign Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [dsp:accountId](#dspaccountid) | `string` | Optional | DSP Advertising Campaign (this schema) |
| [dsp:advertiserId](#dspadvertiserid) | `string` | Optional | DSP Advertising Campaign (this schema) |
| [dsp:campaignEndTime](#dspcampaignendtime) | `string` | Optional | DSP Advertising Campaign (this schema) |
| [dsp:campaignKey](#dspcampaignkey) | `string` | Optional | DSP Advertising Campaign (this schema) |
| [dsp:campaignName](#dspcampaignname) | `string` | Optional | DSP Advertising Campaign (this schema) |
| [dsp:campaignStartTime](#dspcampaignstarttime) | `string` | Optional | DSP Advertising Campaign (this schema) |
| [dsp:campaignStatus](#dspcampaignstatus) | `enum` | Optional | DSP Advertising Campaign (this schema) |
| [dsp:feeClass](#dspfeeclass) | `enum` | Optional | DSP Advertising Campaign (this schema) |
| [dsp:timezone](#dsptimezone) | `string` | Optional | DSP Advertising Campaign (this schema) |
| [dsp:type](#dsptype) | `enum` | Optional | DSP Advertising Campaign (this schema) |
| [dsp:userId](#dspuserid) | `integer` | Optional | DSP Advertising Campaign (this schema) |
| [repo:createDate](#repocreatedate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repomodifydate) |
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






## dsp:accountId
### Account Identifier

Identifier for the account owning this campaign.

`dsp:accountId`
* is optional
* type: `string`
* defined in this schema

### dsp:accountId Type


`string`






## dsp:advertiserId
### Advertiser Identifier

Identifier for the advertiser owning this campaign.

`dsp:advertiserId`
* is optional
* type: `string`
* defined in this schema

### dsp:advertiserId Type


`string`






## dsp:campaignEndTime
### Campaign end time.

The insertion order fields representing campaign end time.

`dsp:campaignEndTime`
* is optional
* type: `string`
* defined in this schema

### dsp:campaignEndTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## dsp:campaignKey
### Campaign Key

Campaign external identifier.

`dsp:campaignKey`
* is optional
* type: `string`
* defined in this schema

### dsp:campaignKey Type


`string`






## dsp:campaignName
### Campaign Name

Name of the campaign.

`dsp:campaignName`
* is optional
* type: `string`
* defined in this schema

### dsp:campaignName Type


`string`






## dsp:campaignStartTime
### Campaign start time.

The insertion order fields representing campaign start time.

`dsp:campaignStartTime`
* is optional
* type: `string`
* defined in this schema

### dsp:campaignStartTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## dsp:campaignStatus
### Campaign Status

Campaign Status extracted from the Insertion Order associated with this campaign.Indicates if underlying ads are eligible to serve.

`dsp:campaignStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dspcampaignstatus-known-values).

### dsp:campaignStatus Known Values
| Value | Description |
|-------|-------------|
| `Active` | Active |
| `Inactive` | Inactive |
| `Deleted` | Deleted |
| `Paid` | Paid |




## dsp:feeClass
### The Fee Class

Fee Class needed for computing the total spend.

`dsp:feeClass`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dspfeeclass-known-values).

### dsp:feeClass Known Values
| Value | Description |
|-------|-------------|
| `tubemogul` | tubemogul |
| `advertiser` | advertiser |
| `no_io` | no_io |




## dsp:timezone
### Campaign Timezone

Timezone of the campaign.

`dsp:timezone`
* is optional
* type: `string`
* defined in this schema

### dsp:timezone Type


`string`






## dsp:type
### Campaign Type

Campaign Type

`dsp:type`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dsptype-known-values).

### dsp:type Known Values
| Value | Description |
|-------|-------------|
| `Media` | Media |
| `Brandsights` | Brandsights |




## dsp:userId
### User Identifier

Identifier for the user who created the campaign.

`dsp:userId`
* is optional
* type: `integer`
* defined in this schema

### dsp:userId Type


`integer`






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





