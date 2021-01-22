
# DSP Advertising Account Schema

```
https://ns.adobe.com/xdm/adcloud/dsp/account
```

Adobe Advertising Cloud DSP Account Details.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/dsp/account.schema.json](adobe/experience/adcloud/dsp/account.schema.json) |
## Schema Hierarchy

* DSP Advertising Account `https://ns.adobe.com/xdm/adcloud/dsp/account`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


# DSP Advertising Account Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [dsp:accountKey](#dspaccountkey) | `string` | Optional | DSP Advertising Account (this schema) |
| [dsp:accountName](#dspaccountname) | `string` | Optional | DSP Advertising Account (this schema) |
| [dsp:accountType](#dspaccounttype) | `enum` | Optional | DSP Advertising Account (this schema) |
| [dsp:currency](#dspcurrency) | `string` | Optional | DSP Advertising Account (this schema) |
| [dsp:productName](#dspproductname) | `enum` | Optional | DSP Advertising Account (this schema) |
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






## dsp:accountKey
### Account Key

External Identifier of the account.

`dsp:accountKey`
* is optional
* type: `string`
* defined in this schema

### dsp:accountKey Type


`string`






## dsp:accountName
### Account Name

Name of the account.

`dsp:accountName`
* is optional
* type: `string`
* defined in this schema

### dsp:accountName Type


`string`






## dsp:accountType
### Account Type

Type of the account.

`dsp:accountType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dspaccounttype-known-values).

### dsp:accountType Known Values
| Value | Description |
|-------|-------------|
| `Agency` | Agency |
| `TradingDesk` | Trading Desk |
| `BrandDirectAgencyManaged` | Brand Direct Agency Managed |
| `BrandDirectNoAgency` | Brand Direct No Agency |
| `AdNetwork` | Ad Network  |
| `PublisherAudienceExtension` | Publisher Audience Extension  |
| `Other` | Other  |




## dsp:currency
### Account Currency

The ISO 4217 billing currency code for the account.

`dsp:currency`
* is optional
* type: `string`
* defined in this schema

### dsp:currency Type


`string`


All instances must conform to this regular expression 
```regex
^[A-Z]{3}$
```

* test example: [USD](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=USD)
* test example: [EUR](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=EUR)
* test example: [JPY](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=JPY)




### dsp:currency Examples

```json
"USD"
```

```json
"EUR"
```

```json
"JPY"
```



## dsp:productName
### Product Name

The name of the product associated with this account.

`dsp:productName`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dspproductname-known-values).

### dsp:productName Known Values
| Value | Description |
|-------|-------------|
| `PlayTime` | PlayTime |
| `InPlay` | InPlay |
| `OneLoad` | OneLoad |
| `PrivateExchange` | PrivateExchange |




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





