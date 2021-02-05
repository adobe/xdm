
# Search Advertising Account Schema

```
https://ns.adobe.com/xdm/adcloud/searchads/account
```

Search Advertising Account defines Customer Configuration on Search Advertising Platform.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/searchads/account.schema.json](adobe/experience/adcloud/searchads/account.schema.json) |
## Schema Hierarchy

* Search Advertising Account `https://ns.adobe.com/xdm/adcloud/searchads/account`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


## Search Advertising Account Example
```json
{
  "@id": "100001061",
  "searchads:accountId": "10001234",
  "searchads:accountName": "My First Account",
  "searchads:currencyCode": "USD",
  "searchads:accountStatus": "Enabled",
  "searchads:budget": 123.45,
  "searchads:budgetType": "Monthly",
  "searchads:searchEngineId": 3,
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
| [searchads:accountId](#searchadsaccountid) | `string` | Optional | Search Advertising Account (this schema) |
| [searchads:accountName](#searchadsaccountname) | `string` | Optional | Search Advertising Account (this schema) |
| [searchads:accountStatus](#searchadsaccountstatus) | `enum` | Optional | Search Advertising Account (this schema) |
| [searchads:budget](#searchadsbudget) | `number` | Optional | Search Advertising Account (this schema) |
| [searchads:budgetType](#searchadsbudgettype) | `enum` | Optional | Search Advertising Account (this schema) |
| [searchads:createDate](#searchadscreatedate) | `string` | Optional | Search Advertising Account (this schema) |
| [searchads:currencyCode](#searchadscurrencycode) | `string` | Optional | Search Advertising Account (this schema) |
| [searchads:modifyDate](#searchadsmodifydate) | `string` | Optional | Search Advertising Account (this schema) |
| [searchads:searchEngineId](#searchadssearchengineid) | `integer` | Optional | Search Advertising Account (this schema) |
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






## searchads:accountName
### Account Name

Name of the Account.

`searchads:accountName`
* is optional
* type: `string`
* defined in this schema

### searchads:accountName Type


`string`






## searchads:accountStatus
### Account Status

Managed Flag indicates whether account is enabled or disabled on search networks.

`searchads:accountStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#searchadsaccountstatus-known-values).

### searchads:accountStatus Known Values
| Value | Description |
|-------|-------------|
| `Enabled` | Enabled |
| `Disabled` | Disabled |




## searchads:budget
### Budget

Budget Allocated to the Account acts only as a spend cap across all your campaigns.

`searchads:budget`
* is optional
* type: `number`
* defined in this schema

### searchads:budget Type


`number`






## searchads:budgetType
### Budget Type

Budget Type

`searchads:budgetType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#searchadsbudgettype-known-values).

### searchads:budgetType Known Values
| Value | Description |
|-------|-------------|
| `Daily` | Daily |
| `Monthly` | Monthly |
| `Lifetime` | Lifetime |
| `Daily Spend Until Depleted` | Daily spend until depleted |
| `Day of Week` | Day of Week |




## searchads:createDate

The date and time when the account was created. An example form is "2004-10-23T12:00:00-06:00".

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


## searchads:currencyCode
### Currency Code

Currency in which this account operates.

`searchads:currencyCode`
* is optional
* type: `string`
* defined in this schema

### searchads:currencyCode Type


`string`


All instances must conform to this regular expression 
```regex
^[A-Z]{3}$
```

* test example: [USD](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=USD)
* test example: [EUR](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=EUR)
* test example: [JPY](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=JPY)




### searchads:currencyCode Examples

```json
"USD"
```

```json
"EUR"
```

```json
"JPY"
```



## searchads:modifyDate

The date and time when the account was last modified. An example form is "2004-10-23T12:00:00-06:00".

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


## searchads:searchEngineId
### Search Engine Identifier

The applicatio-specified identifier used to identify the Search Advertising Platform Name.

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





