
# DSP Advertising Placement Site Schema

```
https://ns.adobe.com/xdm/adcloud/dsp/site
```

Adobe Advertising Cloud DSP Placement Site Details.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/dsp/site.schema.json](adobe/experience/adcloud/dsp/site.schema.json) |
## Schema Hierarchy

* DSP Advertising Placement Site `https://ns.adobe.com/xdm/adcloud/dsp/site`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


# DSP Advertising Placement Site Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [dsp:isTargetable](#dspistargetable) | `boolean` | Optional | DSP Advertising Placement Site (this schema) |
| [dsp:mobileApp](#dspmobileapp) | `boolean` | Optional | DSP Advertising Placement Site (this schema) |
| [dsp:mobileWeb](#dspmobileweb) | `boolean` | Optional | DSP Advertising Placement Site (this schema) |
| [dsp:siteDataSource](#dspsitedatasource) | `enum` | Optional | DSP Advertising Placement Site (this schema) |
| [dsp:siteKey](#dspsitekey) | `string` | Optional | DSP Advertising Placement Site (this schema) |
| [dsp:siteName](#dspsitename) | `string` | Optional | DSP Advertising Placement Site (this schema) |
| [dsp:siteStatus](#dspsitestatus) | `enum` | Optional | DSP Advertising Placement Site (this schema) |
| [dsp:siteType](#dspsitetype) | `enum` | Optional | DSP Advertising Placement Site (this schema) |
| [dsp:siteUrl](#dspsiteurl) | `string` | Optional | DSP Advertising Placement Site (this schema) |
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






## dsp:isTargetable
### Is Targetable

Flag stating whether this placement site can be targeted.

`dsp:isTargetable`
* is optional
* type: `boolean`
* defined in this schema

### dsp:isTargetable Type


`boolean`





## dsp:mobileApp
### Mobile Application

Flag stating whether this placement site is a mobile application.

`dsp:mobileApp`
* is optional
* type: `boolean`
* defined in this schema

### dsp:mobileApp Type


`boolean`





## dsp:mobileWeb
### Mobile Web

Flag stating whether this placement site is a mobile website.

`dsp:mobileWeb`
* is optional
* type: `boolean`
* defined in this schema

### dsp:mobileWeb Type


`boolean`





## dsp:siteDataSource
### Site Data Source

The data source for this placement site.

`dsp:siteDataSource`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dspsitedatasource-known-values).

### dsp:siteDataSource Known Values
| Value | Description |
|-------|-------------|
| `Trialpay` | trialpay |
| `Nielsen` | nielsen |
| `Quancast` | quancast |




## dsp:siteKey
### Site Key

Placement site external unique identifier.

`dsp:siteKey`
* is optional
* type: `string`
* defined in this schema

### dsp:siteKey Type


`string`






## dsp:siteName
### Site Name

Placement site name.

`dsp:siteName`
* is optional
* type: `string`
* defined in this schema

### dsp:siteName Type


`string`






## dsp:siteStatus
### Site Status

The status of the placement site.

`dsp:siteStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dspsitestatus-known-values).

### dsp:siteStatus Known Values
| Value | Description |
|-------|-------------|
| `Active` | Active |
| `Inactive` | Inactive |
| `Deleted` | Deleted |




## dsp:siteType
### Site Type

The type of the placement site.

`dsp:siteType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dspsitetype-known-values).

### dsp:siteType Known Values
| Value | Description |
|-------|-------------|
| `Site` | Site |
| `Network` | Network |




## dsp:siteUrl
### Site Url

Placement site url.

`dsp:siteUrl`
* is optional
* type: `string`
* defined in this schema

### dsp:siteUrl Type


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





