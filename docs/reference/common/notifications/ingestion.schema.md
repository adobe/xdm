
# Customer Data Ingestion Notifications Event Schema

```
https://ns.adobe.com/xdm/common/notifications/ingestion
```

Customer notification events for data ingestion processes.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [common/notifications/ingestion.schema.json](common/notifications/ingestion.schema.json) |
## Schema Hierarchy

* Customer Data Ingestion Notifications Event `https://ns.adobe.com/xdm/common/notifications/ingestion`
  * [Record Schema](../../data/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Measure](../../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Customer Data Ingestion Notifications Event Example
```json
{
  "xdm:eventType": "ig_load_success",
  "xdm:status": "success",
  "xdm:ingestionId": "batch1234",
  "xdm:customerIngestionId": "1234@adobe",
  "xdm:datasetId": "1234",
  "xdm:sandboxName": "test",
  "xdm:inputFormat": "csv",
  "xdm:imsOrg": "D13A1E7053E46A220A4C86E1@AdobeOrg",
  "xdm:startTime": 123456,
  "xdm:completionTime": 12345678,
  "xdm:errors": [
    {
      "xdm:code": "err1234",
      "xdm:rows": [
        "1",
        "2"
      ],
      "xdm:description": "error"
    }
  ]
}
```

# Customer Data Ingestion Notifications Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../data/record.schema.md#id) |
| [xdm:completionTime](#xdmcompletiontime) | `integer` | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:customerIngestionId](#xdmcustomeringestionid) | `string` | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:datasetId](#xdmdatasetid) | `string` | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:errors](#xdmerrors) | `object[]` | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:eventType](#xdmeventtype) | `enum` | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:failedRecords](#xdmfailedrecords) | Measure | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:imsOrg](#xdmimsorg) | `string` | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:ingestionId](#xdmingestionid) | `string` | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:inputFormat](#xdminputformat) | `enum` | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:parentIngestionId](#xdmparentingestionid) | `string` | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:sandboxName](#xdmsandboxname) | `string` | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:startTime](#xdmstarttime) | `integer` | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:status](#xdmstatus) | `enum` | Optional | Customer Data Ingestion Notifications Event (this schema) |
| [xdm:succesfulRecords](#xdmsuccesfulrecords) | Measure | Optional | Customer Data Ingestion Notifications Event (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../../data/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:completionTime

The unix timestamp (in milliseconds) when the batch processing action was completed. Completed - Started should yield the total processing time.

`xdm:completionTime`
* is optional
* type: `integer`
* defined in this schema

### xdm:completionTime Type


`integer`
* maximum value: `14500000000000`





## xdm:customerIngestionId
### Customer Batch Identifier

Customers can specify an externally generated identifier for this ingestion.

`xdm:customerIngestionId`
* is optional
* type: `string`
* defined in this schema

### xdm:customerIngestionId Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B0-9A-Za-z%5C.%5C-%5C_%2F%40%5D%2B%24)):
```regex
^[0-9A-Za-z\.\-\_/@]+$
```






## xdm:datasetId
### Dataset ID

Dataset id of data ingestion.

`xdm:datasetId`
* is optional
* type: `string`
* defined in this schema

### xdm:datasetId Type


`string`






## xdm:errors

A list of problems encountered during this ingestion process.

`xdm:errors`
* is optional
* type: `object[]`

* defined in this schema

### xdm:errors Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:code`| string | Optional |
| `xdm:description`| string | Optional |
| `xdm:rows`| array | Optional |



#### xdm:code

An enumerated code that details the type of error encountered. This value should be understandable by the reader and writer and eventually allow for localized error message (and solution) descriptions.

`xdm:code`
* is optional
* type: `string`

##### xdm:code Type


`string`








#### xdm:description

A human-readable description of the error. This message may be transmitted to clients, but isn't meant for customer-facing UIS.

`xdm:description`
* is optional
* type: `string`

##### xdm:description Type


`string`








#### xdm:rows

Indicates which rows exhibit this error. Could be a single number, or a hyphen-delimited range.

`xdm:rows`
* is optional
* type: `string[]`


##### xdm:rows Type


Array type: `string[]`

All items must be of the type:
`string`



  
Row or range of rows this error was encountered on.














## xdm:eventType
### Event Type

Event type of customer data ingestion notification.

`xdm:eventType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmeventtype-known-values).

### xdm:eventType Known Values
| Value | Description |
|-------|-------------|
| `ing_load_success` | Ing Load Success |
| `ing_load_failure` | Ing Load Failure |
| `ps_load_success` | Ps Load Success |
| `ps_load_failure` | Ps Load Lailure |
| `ig_load_success` | Ig Load Success |
| `ig_load_failure` | Ig Load Failure |




## xdm:failedRecords

Number of records failed to ingest.

`xdm:failedRecords`
* is optional
* type: Measure
* defined in this schema

### xdm:failedRecords Type


* [Measure](../../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:imsOrg

The owning IMS organization identifier.

`xdm:imsOrg`
* is optional
* type: `string`
* defined in this schema

### xdm:imsOrg Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B0-9A-Za-z%5D*%40%5BAa%5Ddobe%5BOo%5Drg%24)):
```regex
^[0-9A-Za-z]*@[Aa]dobe[Oo]rg$
```






## xdm:ingestionId
### Ingestion ID

System generates Unique Identifier for a data ingestion instance.

`xdm:ingestionId`
* is optional
* type: `string`
* defined in this schema

### xdm:ingestionId Type


`string`






## xdm:inputFormat
### Input File Format

Metadata describing the INGEST format of the data being loaded (e.g. Parquet, CSV, JSON).

`xdm:inputFormat`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdminputformat-known-values).

### xdm:inputFormat Known Values
| Value | Description |
|-------|-------------|
| `csv` | CSV format of the file |
| `parquet` | Parquet format of the file |
| `json` | JSON format of the file |




## xdm:parentIngestionId
### Parent Ingestion ID

In a flow where multiple insgestion stage, each stage employs its own ingestion identifier, this value represents the parent stage that resulted in the initiation of this ingestion. This can be used to correlate ingestion processes over multiple stages.

`xdm:parentIngestionId`
* is optional
* type: `string`
* defined in this schema

### xdm:parentIngestionId Type


`string`






## xdm:sandboxName
### Sandbox Name

Name of the sandbox where data is ingested.

`xdm:sandboxName`
* is optional
* type: `string`
* defined in this schema

### xdm:sandboxName Type


`string`






## xdm:startTime

The unix timestamp (in milliseconds) when the batch processing action was started.

`xdm:startTime`
* is optional
* type: `integer`
* defined in this schema

### xdm:startTime Type


`integer`






## xdm:status
### Ingestion Status

The current status of this ingestion process.

`xdm:status`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmstatus-known-values).

### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `success` | Sucess Status |
| `failure` | Failure Status |




## xdm:succesfulRecords

Number of records successfully ingested.

`xdm:succesfulRecords`
* is optional
* type: Measure
* defined in this schema

### xdm:succesfulRecords Type


* [Measure](../../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




