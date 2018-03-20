
# Person Schema

```
https://ns.adobe.com/xdm/context/person
```

An individual person. May represent a person acting in various roles, such as a customer, contact, or owner.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/person.schema.json](context/person.schema.json) |

## Schema Hierarchy

* Person `https://ns.adobe.com/xdm/context/person`
  * [Person Name](person-name.schema.md) `https://ns.adobe.com/xdm/context/person-name`
  * [Audit Trail](../common/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`

## Person Example
```json
{
  "xdm:name": {
    "xdm:givenName": "Jane",
    "xdm:middleName": "F",
    "xdm:surname": "Doe"
  },
  "xdm:birthMonth": 1,
  "xdm:birthDay": 3,
  "xdm:birthYear": 1996,
  "xdm:gender": "female"
}
```

# Person Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:birthDay](#xdmbirthDay) | `integer` | Optional | Person (this schema) |
| [xdm:birthMonth](#xdmbirthMonth) | `integer` | Optional | Person (this schema) |
| [xdm:birthYear](#xdmbirthYear) | `integer` | Optional | Person (this schema) |
| [xdm:createdByBatchID](#xdmcreatedByBatchID) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmcreatedByBatchID) |
| [xdm:gender](#xdmgender) | `enum` | Optional | Person (this schema) |
| [xdm:modifiedByBatchID](#xdmmodifiedByBatchID) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmmodifiedByBatchID) |
| [xdm:name](#xdmname) | Person Name | Optional | Person (this schema) |
| [xdm:repositoryCreatedBy](#xdmrepositoryCreatedBy) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmrepositoryCreatedBy) |
| [xdm:repositoryLastModifiedBy](#xdmrepositoryLastModifiedBy) | `string` | Optional | [Audit Trail](../common/auditable.schema.md#xdmrepositoryLastModifiedBy) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:birthDay
### Birth day

The day of the month a person was born (1-31).

`xdm:birthDay`
* is optional
* type: `integer`
* defined in this schema

### xdm:birthDay Type


`integer`
* minimum value: `1`
* maximum value: `31`





## xdm:birthMonth
### Birth month

The month of the year a person was born (1-12).

`xdm:birthMonth`
* is optional
* type: `integer`
* defined in this schema

### xdm:birthMonth Type


`integer`
* minimum value: `1`
* maximum value: `12`





## xdm:birthYear
### Birth year

The year a person was born including the century (yyyy, e.g 1983).

`xdm:birthYear`
* is optional
* type: `integer`
* defined in this schema

### xdm:birthYear Type


`integer`
* minimum value: `1`
* maximum value: `32767`





## xdm:createdByBatchID
### Created by Batch Identifier

The Data Set Files in Catalog Services which has been originating the creation of the entity.


`xdm:createdByBatchID`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#xdm:createdByBatchID)

### xdm:createdByBatchID Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:gender
### Gender

Gender identity of the person.


`xdm:gender`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdm:gender-known-values).

### xdm:gender Known Values
| Value | Description |
|-------|-------------|
| `male` | Male |
| `female` | Female |
| `not_specified` | Not Specified |
| `non_specific` | Nonspecific |




## xdm:modifiedByBatchID
### Modified by Batch Identifier

The last Data Set Files in Catalog Services which has modified the entity.
At creation time, `modifiedByBatchID` is set as `createdByBatchID`.


`xdm:modifiedByBatchID`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#xdm:modifiedByBatchID)

### xdm:modifiedByBatchID Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:name
### Full name

The person&#39;s full name

`xdm:name`
* is optional
* type: Person Name
* defined in this schema

### xdm:name Type


* [Person Name](person-name.schema.md) – `https://ns.adobe.com/xdm/context/person-name`





## xdm:repositoryCreatedBy
### Created by User Identifier

User id who has created the entity.


`xdm:repositoryCreatedBy`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#xdm:repositoryCreatedBy)

### xdm:repositoryCreatedBy Type


`string`






## xdm:repositoryLastModifiedBy
### Modified by User Identifier

User id who last modified the entity.
At creation time, `modifiedByUser` is set as `createdByUser`.


`xdm:repositoryLastModifiedBy`
* is optional
* type: `string`
* defined in [Audit Trail](../common/auditable.schema.md#xdm:repositoryLastModifiedBy)

### xdm:repositoryLastModifiedBy Type


`string`





