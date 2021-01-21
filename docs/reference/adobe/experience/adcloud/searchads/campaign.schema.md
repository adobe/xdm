
# Search Advertising Campaign Schema

```
https://ns.adobe.com/xdm/adcloud/searchads/campaign
```

Search Advertising Campaigns is a set of ad groups (ads, keywords, and bids) that share a budget, location targeting, and other settings.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/searchads/campaign.schema.json](adobe/experience/adcloud/searchads/campaign.schema.json) |
## Schema Hierarchy

* Search Advertising Campaign `https://ns.adobe.com/xdm/adcloud/searchads/campaign`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


# Search Advertising Campaign Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [repo:createDate](#repocreatedate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repomodifydate) |
| [searchads:accountId](#searchadsaccountid) | `string` | Optional | Search Advertising Campaign (this schema) |
| [searchads:adDeliveryType](#searchadsaddeliverytype) | `enum` | Optional | Search Advertising Campaign (this schema) |
| [searchads:budget](#searchadsbudget) | `number` | Optional | Search Advertising Campaign (this schema) |
| [searchads:budgetType](#searchadsbudgettype) | `enum` | Optional | Search Advertising Campaign (this schema) |
| [searchads:campaignDescription](#searchadscampaigndescription) | `string` | Optional | Search Advertising Campaign (this schema) |
| [searchads:campaignEndDate](#searchadscampaignenddate) | `string` | Optional | Search Advertising Campaign (this schema) |
| [searchads:campaignId](#searchadscampaignid) | `string` | Optional | Search Advertising Campaign (this schema) |
| [searchads:campaignName](#searchadscampaignname) | `string` | Optional | Search Advertising Campaign (this schema) |
| [searchads:campaignStartDate](#searchadscampaignstartdate) | `string` | Optional | Search Advertising Campaign (this schema) |
| [searchads:campaignStatus](#searchadscampaignstatus) | `enum` | Optional | Search Advertising Campaign (this schema) |
| [searchads:channelType](#searchadschanneltype) | `string` | Optional | Search Advertising Campaign (this schema) |
| [searchads:createDate](#searchadscreatedate) | `string` | Optional | Search Advertising Campaign (this schema) |
| [searchads:modifyDate](#searchadsmodifydate) | `string` | Optional | Search Advertising Campaign (this schema) |
| [searchads:objective](#searchadsobjective) | `enum` | Optional | Search Advertising Campaign (this schema) |
| [searchads:portfolioId](#searchadsportfolioid) | `string` | Optional | Search Advertising Campaign (this schema) |
| [searchads:searchEngineId](#searchadssearchengineid) | `integer` | Optional | Search Advertising Campaign (this schema) |
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


## searchads:accountId
### Account Identifier

Identifier that defines Customer/Client ID setup on the Search Advertising Platform.

`searchads:accountId`
* is optional
* type: `string`
* defined in this schema

### searchads:accountId Type


`string`






## searchads:adDeliveryType
### Ad Delivery Method

Ad Delivery method can determine how long your budget lasts

`searchads:adDeliveryType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#searchadsaddeliverytype-known-values).

### searchads:adDeliveryType Known Values
| Value | Description |
|-------|-------------|
| `standard` | Standard |
| `accelerated` | Accelerated |
| `Standard` |  |
| `Accelerated` |  |




## searchads:budget
### Budget

Budget Allocated for the Campaign

`searchads:budget`
* is optional
* type: `number`
* defined in this schema

### searchads:budget Type


`number`






## searchads:budgetType
### Budget Type

Budget Type indicates how the allocated budget will be spent

`searchads:budgetType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#searchadsbudgettype-known-values).

### searchads:budgetType Known Values
| Value | Description |
|-------|-------------|
| `daily` | Daily |
| `Monthly` | Monthly |
| `Lifetime` | Lifetime |
| `Daily Spend Until Depleted` | Daily spend until depleted |
| `Day of week` | Day of week |
| `Daily` |  |
| `Day of Week` |  |




## searchads:campaignDescription
### Description

Description of the Campaign.

`searchads:campaignDescription`
* is optional
* type: `string`
* defined in this schema

### searchads:campaignDescription Type


`string`






## searchads:campaignEndDate
### Campaign End Date

Campaign End Date

`searchads:campaignEndDate`
* is optional
* type: `string`
* defined in this schema

### searchads:campaignEndDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## searchads:campaignId
### Campaign Identifier

Campaign ID on the search advertising platform.

`searchads:campaignId`
* is optional
* type: `string`
* defined in this schema

### searchads:campaignId Type


`string`






## searchads:campaignName
### Campaign Name

Name of the Campaign.

`searchads:campaignName`
* is optional
* type: `string`
* defined in this schema

### searchads:campaignName Type


`string`






## searchads:campaignStartDate
### Campaign Start Date

Campaign Start Date

`searchads:campaignStartDate`
* is optional
* type: `string`
* defined in this schema

### searchads:campaignStartDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## searchads:campaignStatus
### Campaign Status

Campaign Status indicates if underlying ads are eligible to serve.

`searchads:campaignStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#searchadscampaignstatus-known-values).

### searchads:campaignStatus Known Values
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




## searchads:channelType
### Channel Type

Channel Type for the Campaign

`searchads:channelType`
* is optional
* type: `string`
* defined in this schema

### searchads:channelType Type


`string`






## searchads:createDate

The date and time when the campaign was created. An example form is "2004-10-23T12:00:00-06:00".

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


## searchads:modifyDate

The date and time when the campaign was last modified. An example form is "2004-10-23T12:00:00-06:00".

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


## searchads:objective
### Campaign Objective

Campaign Objective indicates the primary objective of the campaign - e.g. Promotions, Brands, App Installs.

`searchads:objective`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#searchadsobjective-known-values).

### searchads:objective Known Values
| Value | Description |
|-------|-------------|
| `visit_web` | visit_web |
| `promote_brand` | promote_brand |
| `install_app` | install_app |
| `visit_offer` | visit_offer |




## searchads:portfolioId
### Portfolio Identifier

Identifier indicates if campaign has been assigned and managed via portfolio.

`searchads:portfolioId`
* is optional
* type: `string`
* defined in this schema

### searchads:portfolioId Type


`string`






## searchads:searchEngineId
### Search Engine Identifier

The application-specified identifier used to identify the Search Advertising Platform Name.

`searchads:searchEngineId`
* is optional
* type: `integer`
* defined in this schema

### searchads:searchEngineId Type


`integer`






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





