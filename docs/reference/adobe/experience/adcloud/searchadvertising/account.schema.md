
# Search Advertising Account Schema

```
https://ns.adobe.com/experience/adcloud/searchadvertising/account
```

Search Advertising Account defines Customer Configuration on Search Advertising Platform.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/adcloud/searchadvertising/account.schema.json](adobe/experience/adcloud/searchadvertising/account.schema.json) |
## Schema Hierarchy

* Search Advertising Account `https://ns.adobe.com/experience/adcloud/searchadvertising/account`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


## Search Advertising Account Example
```json
{
  "xdm:id": "100001061",
  "xdm:accountId": "10001234",
  "xdm:accountName": "My First Account",
  "xdm:currencyCode": "USD",
  "xdm:accountStatus": "Enabled",
  "xdm:budget": 123.45,
  "xdm:budgetType": "Monthly",
  "repo:createDate": "2019-04-26T14:00:00+00:00",
  "repo:modifyDate": "2019-04-26T14:00:00+00:00"
}
```

# Search Advertising Account Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [repo:createDate](#repocreatedate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repomodifydate) |
| [xdm:accountId](#xdmaccountid) | `string` | Optional | Search Advertising Account (this schema) |
| [xdm:accountName](#xdmaccountname) | `string` | Optional | Search Advertising Account (this schema) |
| [xdm:accountStatus](#xdmaccountstatus) | `enum` | Optional | Search Advertising Account (this schema) |
| [xdm:budget](#xdmbudget) | `number` | Optional | Search Advertising Account (this schema) |
| [xdm:budgetType](#xdmbudgettype) | `enum` | Optional | Search Advertising Account (this schema) |
| [xdm:createdByBatchID](#xdmcreatedbybatchid) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmcreatedbybatchid) |
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional | Search Advertising Account (this schema) |
| [xdm:modifiedByBatchID](#xdmmodifiedbybatchid) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmmodifiedbybatchid) |
| [xdm:repositoryCreatedBy](#xdmrepositorycreatedby) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmrepositorycreatedby) |
| [xdm:repositoryLastModifiedBy](#xdmrepositorylastmodifiedby) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmrepositorylastmodifiedby) |
| [xdm:searchEngineId](#xdmsearchengineid) | `integer` | Optional | Search Advertising Account (this schema) |
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


## xdm:accountId
### Account Identifier

Identifier that defines Customer/Client ID setup on the Search Advertising Platform.

`xdm:accountId`
* is optional
* type: `string`
* defined in this schema

### xdm:accountId Type


`string`






## xdm:accountName
### Account Name

Name of the Account.

`xdm:accountName`
* is optional
* type: `string`
* defined in this schema

### xdm:accountName Type


`string`






## xdm:accountStatus
### Account Status

Managed Flag indicates whether account is enabled or disabled on search networks.

`xdm:accountStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmaccountstatus-known-values).

### xdm:accountStatus Known Values
| Value | Description |
|-------|-------------|
| `Enabled` | Enabled |
| `Disabled` | Disabled |




## xdm:budget
### Budget

Budget Allocated to the Account acts only as a spend cap across all your campaigns.

`xdm:budget`
* is optional
* type: `number`
* defined in this schema

### xdm:budget Type


`number`






## xdm:budgetType
### Budget Type

Budget Type

`xdm:budgetType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmbudgettype-known-values).

### xdm:budgetType Known Values
| Value | Description |
|-------|-------------|
| `Daily` | Daily |
| `Monthly` | Monthly |
| `Lifetime` | Lifetime |
| `Daily Spend Until Depleted` | Daily spend until depleted |
| `Day of Week` | Day of Week |




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






## xdm:currencyCode
### Currency Code

Currency in which this account operates.

`xdm:currencyCode`
* is optional
* type: `string`
* defined in this schema

### xdm:currencyCode Type


`string`


All instances must conform to this regular expression 
```regex
^[A-Z]{3}$
```

* test example: [USD](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=USD)
* test example: [EUR](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=EUR)
* test example: [JPY](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=JPY)




### xdm:currencyCode Examples

```json
"USD"
```

```json
"EUR"
```

```json
"JPY"
```



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






## xdm:searchEngineId
### Search Engine Identifier

The applicatio-specified identifier used to identify the Search Advertising Platform Name.

`xdm:searchEngineId`
* is optional
* type: `integer`
* defined in this schema

### xdm:searchEngineId Type


`integer`





