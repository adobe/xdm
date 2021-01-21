
# DSP Advertising Campaign Placement Schema

```
https://ns.adobe.com/xdm/adcloud/dsp/placement
```

Adobe Advertising Cloud DSP Campaign Placement Details.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/dsp/placement.schema.json](adobe/experience/adcloud/dsp/placement.schema.json) |
## Schema Hierarchy

* DSP Advertising Campaign Placement `https://ns.adobe.com/xdm/adcloud/dsp/placement`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


## DSP Advertising Campaign Placement Example
```json
{
  "@id": "1",
  "dsp:placementKey": "YFk8RnlYHwnG4KbFSQor",
  "dsp:placementName": "Yahoo : CTP : UK : YouTube",
  "dsp:placementType": "Site",
  "dsp:placementStartTime": "2017-02-26T15:52:25+00:00",
  "dsp:placementEndTime": "2017-09-26T15:52:25+00:00",
  "dsp:placementBudget": 123,
  "dsp:campaignId": "12",
  "dsp:packageId": "1",
  "dsp:siteId": "12334",
  "dsp:adIds": [
    "1",
    "2"
  ],
  "repo:createDate": "2019-04-26T14:00:00+00:00",
  "repo:modifyDate": "2019-04-27T14:00:00+00:00"
}
```

# DSP Advertising Campaign Placement Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [dsp:adIds](#dspadids) | `string[]` | Optional | DSP Advertising Campaign Placement (this schema) |
| [dsp:campaignId](#dspcampaignid) | `string` | Optional | DSP Advertising Campaign Placement (this schema) |
| [dsp:packageId](#dsppackageid) | `string` | Optional | DSP Advertising Campaign Placement (this schema) |
| [dsp:placementBudget](#dspplacementbudget) | `integer` | Optional | DSP Advertising Campaign Placement (this schema) |
| [dsp:placementEndTime](#dspplacementendtime) | `string` | Optional | DSP Advertising Campaign Placement (this schema) |
| [dsp:placementKey](#dspplacementkey) | `string` | Optional | DSP Advertising Campaign Placement (this schema) |
| [dsp:placementName](#dspplacementname) | `string` | Optional | DSP Advertising Campaign Placement (this schema) |
| [dsp:placementStartTime](#dspplacementstarttime) | `string` | Optional | DSP Advertising Campaign Placement (this schema) |
| [dsp:placementType](#dspplacementtype) | `enum` | Optional | DSP Advertising Campaign Placement (this schema) |
| [dsp:siteId](#dspsiteid) | `string` | Optional | DSP Advertising Campaign Placement (this schema) |
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






## dsp:adIds
### Ad Identifiers

List of identifiers for the ads which are linked to this campaign placement.

`dsp:adIds`
* is optional
* type: `string[]`

* defined in this schema

### dsp:adIds Type


Array type: `string[]`

All items must be of the type:
`string`









## dsp:campaignId
### Campaign Identifier

Identifier of the campaign this placement belongs to.

`dsp:campaignId`
* is optional
* type: `string`
* defined in this schema

### dsp:campaignId Type


`string`






## dsp:packageId
### Package Identifier

Identifier of the package the placement belongs to.

`dsp:packageId`
* is optional
* type: `string`
* defined in this schema

### dsp:packageId Type


`string`






## dsp:placementBudget
### Campaign Placement Budget

Campaign placement budget.

`dsp:placementBudget`
* is optional
* type: `integer`
* defined in this schema

### dsp:placementBudget Type


`integer`






## dsp:placementEndTime
### Campaign Placement End Date and Time

The date after which a placement stops showing ads (ms since Jan 1, 1970).

`dsp:placementEndTime`
* is optional
* type: `string`
* defined in this schema

### dsp:placementEndTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## dsp:placementKey
### Placement Key

Campaign Placement external unique identifier.

`dsp:placementKey`
* is optional
* type: `string`
* defined in this schema

### dsp:placementKey Type


`string`






## dsp:placementName
### Name

Campaign Placement name.

`dsp:placementName`
* is optional
* type: `string`
* defined in this schema

### dsp:placementName Type


`string`






## dsp:placementStartTime
### Campaign Placement Start Date and Time

The date on which a placement starts showing ads (ms since Jan 1, 1970)

`dsp:placementStartTime`
* is optional
* type: `string`
* defined in this schema

### dsp:placementStartTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## dsp:placementType
### Placement Type

Budget Type indicates how the allocated budget will be spent

`dsp:placementType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dspplacementtype-known-values).

### dsp:placementType Known Values
| Value | Description |
|-------|-------------|
| `Direct` | Direct |
| `Site` | Site |
| `Network` | Network |
| `Planner` | Planner |
| `Audit` | Audit |
| `ParentPlan` | ParentPlan |
| `ChildPlan` | ChildPlan |
| `Template` | Template |
| `SAS` | SAS  |




## dsp:siteId
### Site Identifier

Identifier of the site where the placement will be shown.

`dsp:siteId`
* is optional
* type: `string`
* defined in this schema

### dsp:siteId Type


`string`






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





