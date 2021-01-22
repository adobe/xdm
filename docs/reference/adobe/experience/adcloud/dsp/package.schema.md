
# DSP Advertising Package Schema

```
https://ns.adobe.com/xdm/adcloud/dsp/package
```

Adobe Advertising Cloud DSP Package Details.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/dsp/package.schema.json](adobe/experience/adcloud/dsp/package.schema.json) |
## Schema Hierarchy

* DSP Advertising Package `https://ns.adobe.com/xdm/adcloud/dsp/package`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


# DSP Advertising Package Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [dsp:campaignId](#dspcampaignid) | `string` | Optional | DSP Advertising Package (this schema) |
| [dsp:goalInterval](#dspgoalinterval) | `enum` | Optional | DSP Advertising Package (this schema) |
| [dsp:goalMetric](#dspgoalmetric) | `string` | Optional | DSP Advertising Package (this schema) |
| [dsp:goalMetricValue](#dspgoalmetricvalue) | `integer` | Optional | DSP Advertising Package (this schema) |
| [dsp:goalType](#dspgoaltype) | `enum` | Optional | DSP Advertising Package (this schema) |
| [dsp:packageDescription](#dsppackagedescription) | `string` | Optional | DSP Advertising Package (this schema) |
| [dsp:packageEndTime](#dsppackageendtime) | `string` | Optional | DSP Advertising Package (this schema) |
| [dsp:packageName](#dsppackagename) | `string` | Optional | DSP Advertising Package (this schema) |
| [dsp:packageStartTime](#dsppackagestarttime) | `string` | Optional | DSP Advertising Package (this schema) |
| [dsp:packageStatus](#dsppackagestatus) | `enum` | Optional | DSP Advertising Package (this schema) |
| [dsp:pricePerUom](#dsppriceperuom) | `number` | Optional | DSP Advertising Package (this schema) |
| [dsp:purchaseUom](#dsppurchaseuom) | `enum` | Optional | DSP Advertising Package (this schema) |
| [dsp:unitsPurchased](#dspunitspurchased) | `number` | Optional | DSP Advertising Package (this schema) |
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






## dsp:campaignId
### Campaign Identifier

Campaign Identifier on the display advertising platform which has this package associated.

`dsp:campaignId`
* is optional
* type: `string`
* defined in this schema

### dsp:campaignId Type


`string`






## dsp:goalInterval
### Goal Interval

The time frame for which the metric value is computed. E.g. DAY, ALLTIME 

`dsp:goalInterval`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dspgoalinterval-known-values).

### dsp:goalInterval Known Values
| Value | Description |
|-------|-------------|
| `ALLTIME` | ALLTIME |
| `DAY` | DAY |
| `HOUR` | HOUR |
| `MONTH` | MONTH |
| `WEEK` | WEEK |




## dsp:goalMetric
### Goal Metric

The metric on which the pacing occurs so that the campaign hits the desired metric value over the course of its lifetime. E.g. SPEND, IMPRESSIONS

`dsp:goalMetric`
* is optional
* type: `string`
* defined in this schema

### dsp:goalMetric Type


`string`






## dsp:goalMetricValue
### Goal Interval

The maximum value allowed for the metric to reach in a certain interval.

`dsp:goalMetricValue`
* is optional
* type: `integer`
* defined in this schema

### dsp:goalMetricValue Type


`integer`






## dsp:goalType
### Goal Type

The action taken when the metric hits the maximum value.

`dsp:goalType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dspgoaltype-known-values).

### dsp:goalType Known Values
| Value | Description |
|-------|-------------|
| `CAP` | CAP |
| `PACE` | PACE |




## dsp:packageDescription
### Package Description

The description of the package.

`dsp:packageDescription`
* is optional
* type: `string`
* defined in this schema

### dsp:packageDescription Type


`string`






## dsp:packageEndTime
### Package End Time

The end time of serving ads in placements linked to the campaign belonging to this package.

`dsp:packageEndTime`
* is optional
* type: `string`
* defined in this schema

### dsp:packageEndTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## dsp:packageName
### Package Name

The name of the package.

`dsp:packageName`
* is optional
* type: `string`
* defined in this schema

### dsp:packageName Type


`string`






## dsp:packageStartTime
### Package Start Time

The starting time of serving ads in placements linked to the campaign belonging to this package.

`dsp:packageStartTime`
* is optional
* type: `string`
* defined in this schema

### dsp:packageStartTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## dsp:packageStatus
### Package Status

Package Status indicates if underlying ads are eligible to serve.

`dsp:packageStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dsppackagestatus-known-values).

### dsp:packageStatus Known Values
| Value | Description |
|-------|-------------|
| `Active` | Active |
| `Inactive` | Inactive |
| `Deleted` | Deleted |




## dsp:pricePerUom
### Price per Unit of Measure

The price per unit of measure.

`dsp:pricePerUom`
* is optional
* type: `number`
* defined in this schema

### dsp:pricePerUom Type


`number`






## dsp:purchaseUom
### Purchase Unit of Measure

The unit-of-measure of the purchase.

`dsp:purchaseUom`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dsppurchaseuom-known-values).

### dsp:purchaseUom Known Values
| Value | Description |
|-------|-------------|
| `CPM` | CPM |
| `CPV` | CPV |
| `CPE` | CPE |
| `CPCV` | CPCV |
| `CPC` | CPC |
| `OTCPM` | OTCPM |
| `vCPM` | vCPM |
| `GRP` | GRP |
| `vCPCV` | vCPCV |




## dsp:unitsPurchased
### Units Purchased

The number of purchased units.

`dsp:unitsPurchased`
* is optional
* type: `number`
* defined in this schema

### dsp:unitsPurchased Type


`number`






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





