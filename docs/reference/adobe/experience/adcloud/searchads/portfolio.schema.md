
# Search Advertising Portfolio Schema

```
https://ns.adobe.com/xdm/adcloud/searchads/portfolio
```

Search Advertising Portfolio Class includes fields that defines Portfolio.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/searchads/portfolio.schema.json](adobe/experience/adcloud/searchads/portfolio.schema.json) |
## Schema Hierarchy

* Search Advertising Portfolio `https://ns.adobe.com/xdm/adcloud/searchads/portfolio`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


## Search Advertising Portfolio Example
```json
{
  "@id": "100000123",
  "searchads:portfolioName": "My First Portfolio",
  "searchads:billingState": "Managed",
  "searchads:portfolioGroupName": "My First Portfolio Group",
  "searchads:portfolioGroupId": "34567",
  "searchads:portfolioStatus": "Active",
  "repo:createDate": "2018-01-12T15:52:25+00:00",
  "repo:modifyDate": "2018-01-12T15:52:25+00:00"
}
```

# Search Advertising Portfolio Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [repo:createDate](#repocreatedate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repomodifydate) |
| [searchads:billingState](#searchadsbillingstate) | `string` | Optional | Search Advertising Portfolio (this schema) |
| [searchads:createDate](#searchadscreatedate) | `string` | Optional | Search Advertising Portfolio (this schema) |
| [searchads:modifyDate](#searchadsmodifydate) | `string` | Optional | Search Advertising Portfolio (this schema) |
| [searchads:portfolioGroupId](#searchadsportfoliogroupid) | `string` | Optional | Search Advertising Portfolio (this schema) |
| [searchads:portfolioGroupName](#searchadsportfoliogroupname) | `string` | Optional | Search Advertising Portfolio (this schema) |
| [searchads:portfolioName](#searchadsportfolioname) | `string` | Optional | Search Advertising Portfolio (this schema) |
| [searchads:portfolioStatus](#searchadsportfoliostatus) | `enum` | Optional | Search Advertising Portfolio (this schema) |
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


## searchads:billingState
### Portfolio Billing State

Portfolio Billing State indicates whether client should be billed for spend from this Portfolio.

`searchads:billingState`
* is optional
* type: `string`
* defined in this schema

### searchads:billingState Type


`string`



### searchads:billingState Known Values
| Value | Description |
|-------|-------------|
| `Managed` | Client will be billed for the spend from this portfolio |
| `Not Managed` | Client will not be billed for the spend from this portfolio |




## searchads:createDate

The date and time when the portfolio was created. An example form is "2004-10-23T12:00:00-06:00".

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

The date and time when the portfolio was last modified. An example form is "2004-10-23T12:00:00-06:00".

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


## searchads:portfolioGroupId
### Portfolio Group Identifier

Set of portfolios can be assigned to a portfolio Group. This identifier indicates if portfolio is assigned to a portfolio group.

`searchads:portfolioGroupId`
* is optional
* type: `string`
* defined in this schema

### searchads:portfolioGroupId Type


`string`






## searchads:portfolioGroupName
### Portfolio Group Name

Indicates Name of the Portfolio Group if portfolio belongs to a Portfolio Group.

`searchads:portfolioGroupName`
* is optional
* type: `string`
* defined in this schema

### searchads:portfolioGroupName Type


`string`






## searchads:portfolioName
### Portfolio Name

Name of the Portfolio.

`searchads:portfolioName`
* is optional
* type: `string`
* defined in this schema

### searchads:portfolioName Type


`string`






## searchads:portfolioStatus
### Portfolio Status

Portfolio Status

`searchads:portfolioStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#searchadsportfoliostatus-known-values).

### searchads:portfolioStatus Known Values
| Value | Description |
|-------|-------------|
| `Active` | Active |
| `Paused` | Paused |
| `Deleted` | Deleted |
| `Inactive` | Inactive |
| `Incomplete` | Incomplete |
| `Optimize` | Optimize |
| `Unknown` | Unknown |




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





