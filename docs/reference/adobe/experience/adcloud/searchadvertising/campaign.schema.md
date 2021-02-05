
# Search Advertising Campaign Schema

```
https://ns.adobe.com/experience/adcloud/searchadvertising/campaign
```

Search Advertising Campaigns is a set of ad groups (ads, keywords, and bids) that share a budget, location targeting, and other settings.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/adcloud/searchadvertising/campaign.schema.json](adobe/experience/adcloud/searchadvertising/campaign.schema.json) |
## Schema Hierarchy

* Search Advertising Campaign `https://ns.adobe.com/experience/adcloud/searchadvertising/campaign`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


# Search Advertising Campaign Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [repo:createDate](#repocreatedate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repomodifydate) |
| [xdm:adDeliveryType](#xdmaddeliverytype) | `enum` | Optional | Search Advertising Campaign (this schema) |
| [xdm:budget](#xdmbudget) | `number` | Optional | Search Advertising Campaign (this schema) |
| [xdm:budgetType](#xdmbudgettype) | `enum` | Optional | Search Advertising Campaign (this schema) |
| [xdm:campaignDescription](#xdmcampaigndescription) | `string` | Optional | Search Advertising Campaign (this schema) |
| [xdm:campaignEndDate](#xdmcampaignenddate) | `string` | Optional | Search Advertising Campaign (this schema) |
| [xdm:campaignId](#xdmcampaignid) | `string` | Optional | Search Advertising Campaign (this schema) |
| [xdm:campaignName](#xdmcampaignname) | `string` | Optional | Search Advertising Campaign (this schema) |
| [xdm:campaignStartDate](#xdmcampaignstartdate) | `string` | Optional | Search Advertising Campaign (this schema) |
| [xdm:campaignStatus](#xdmcampaignstatus) | `enum` | Optional | Search Advertising Campaign (this schema) |
| [xdm:channelType](#xdmchanneltype) | `string` | Optional | Search Advertising Campaign (this schema) |
| [xdm:createdByBatchID](#xdmcreatedbybatchid) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmcreatedbybatchid) |
| [xdm:modifiedByBatchID](#xdmmodifiedbybatchid) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmmodifiedbybatchid) |
| [xdm:objective](#xdmobjective) | `enum` | Optional | Search Advertising Campaign (this schema) |
| [xdm:portfolioId](#xdmportfolioid) | `string` | Optional | Search Advertising Campaign (this schema) |
| [xdm:repositoryCreatedBy](#xdmrepositorycreatedby) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmrepositorycreatedby) |
| [xdm:repositoryLastModifiedBy](#xdmrepositorylastmodifiedby) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmrepositorylastmodifiedby) |
| [xdm:searchEngineId](#xdmsearchengineid) | `integer` | Optional | Search Advertising Campaign (this schema) |
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


## xdm:adDeliveryType
### Ad Delivery Method

Ad Delivery method can determine how long your budget lasts

`xdm:adDeliveryType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmaddeliverytype-known-values).

### xdm:adDeliveryType Known Values
| Value | Description |
|-------|-------------|
| `standard` | Standard |
| `accelerated` | Accelerated |
| `Standard` |  |
| `Accelerated` |  |




## xdm:budget
### Budget

Budget Allocated for the Campaign

`xdm:budget`
* is optional
* type: `number`
* defined in this schema

### xdm:budget Type


`number`






## xdm:budgetType
### Budget Type

Budget Type indicates how the allocated budget will be spent

`xdm:budgetType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmbudgettype-known-values).

### xdm:budgetType Known Values
| Value | Description |
|-------|-------------|
| `daily` | Daily |
| `Monthly` | Monthly |
| `Lifetime` | Lifetime |
| `Daily Spend Until Depleted` | Daily spend until depleted |
| `Day of week` | Day of week |
| `Daily` |  |
| `Day of Week` |  |




## xdm:campaignDescription
### Description

Description of the Campaign.

`xdm:campaignDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignDescription Type


`string`






## xdm:campaignEndDate
### Campaign End Date

Campaign End Date

`xdm:campaignEndDate`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignEndDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:campaignId
### Campaign Identifier

Campaign ID on the search advertising platform.

`xdm:campaignId`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignId Type


`string`






## xdm:campaignName
### Campaign Name

Name of the Campaign.

`xdm:campaignName`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignName Type


`string`






## xdm:campaignStartDate
### Campaign Start Date

Campaign Start Date

`xdm:campaignStartDate`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignStartDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:campaignStatus
### Campaign Status

Campaign Status indicates if underlying ads are eligible to serve.

`xdm:campaignStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmcampaignstatus-known-values).

### xdm:campaignStatus Known Values
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




## xdm:channelType
### Channel Type

Channel Type for the Campaign

`xdm:channelType`
* is optional
* type: `string`
* defined in this schema

### xdm:channelType Type


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






## xdm:objective
### Campaign Objective

Campaign Objective indicates the primary objective of the campaign - e.g. Promotions, Brands, App Installs.

`xdm:objective`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmobjective-known-values).

### xdm:objective Known Values
| Value | Description |
|-------|-------------|
| `visit_web` | visit_web |
| `promote_brand` | promote_brand |
| `install_app` | install_app |
| `visit_offer` | visit_offer |




## xdm:portfolioId
### Portfolio Identifier

Identifier indicates if campaign has been assigned and managed via portfolio.

`xdm:portfolioId`
* is optional
* type: `string`
* defined in this schema

### xdm:portfolioId Type


`string`






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






## xdm:searchEngineId
### Search Engine Identifier

The application-specified identifier used to identify the Search Advertising Platform Name.

`xdm:searchEngineId`
* is optional
* type: `integer`
* defined in this schema

### xdm:searchEngineId Type


`integer`





