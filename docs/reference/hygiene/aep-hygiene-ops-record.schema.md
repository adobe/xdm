
# AEP Hygiene Operation Request Schema

```
https://ns.adobe.com/experience/aep-hygiene-ops
```

AEP Data Hygiene operations that instruct AEP to delete or modify records in a specified dataset and sandbox.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [hygiene/aep-hygiene-ops-record.schema.json](hygiene/aep-hygiene-ops-record.schema.json) |
## Schema Hierarchy

* AEP Hygiene Operation Request `https://ns.adobe.com/experience/aep-hygiene-ops`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## AEP Hygiene Operation Request Examples

```json
{
  "xdm:action": "updateField",
  "xdm:targetDatasetID": "1234567890ABCDEFGH",
  "xdm:operation": {
    "xdm:updateField": {
      "xdm:changes": [
        "{\"cid\":\"1234567\",\"address\":{\"city\":\"San Jose\",\"state\":\"CA\",\"postalCode\":\"95110\"}}",
        "{\"cid\": \"1234567\",\"phone\": {\"mobile\": \"+1-123-456-7890\"}"
      ]
    }
  }
}
```

```json
{
  "xdm:batchTime": "2022-03-03T18:57:00+00:00",
  "xdm:action": "deleteIdentity",
  "xdm:targetDatasetId": "1234567890ABCDEFGH",
  "xdm:operation": {
    "xdm:deleteIdentity": {
      "xdm:identities": [
        {
          "xdm:namespace": {
            "xdm:code": "ECID"
          },
          "xdm:ID": "2154547663131313"
        },
        {
          "xdm:namespace": {
            "xdm:code": "Email"
          },
          "xdm:ID": "user@domain.com"
        }
      ]
    }
  },
  "xdm:extSourceSystemAudit": {
    "xdm:createdBy": "USER111",
    "xdm:createdDate": "2022-03-03T18:57:00+00:00"
  }
}
```


# AEP Hygiene Operation Request Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:action](#xdmaction) | `enum` | Optional | AEP Hygiene Operation Request (this schema) |
| [xdm:batchTime](#xdmbatchtime) | `string` | Optional | AEP Hygiene Operation Request (this schema) |
| [xdm:operation](#xdmoperation) | `object` | Optional | AEP Hygiene Operation Request (this schema) |
| [xdm:targetDatasetID](#xdmtargetdatasetid) | `string` | Optional | AEP Hygiene Operation Request (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:action
### Name of the hygiene operation to be applied by downstream consumers

Name of the hygiene operation to be applied by downstream consumers.

`xdm:action`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmaction-known-values).

### xdm:action Known Values
| Value | Description |
|-------|-------------|
| `deleteIdentity` |  |
| `updateField` |  |




## xdm:batchTime
### Time the batch was created

Time the hygiene batch was created

`xdm:batchTime`
* is optional
* type: `string`
* defined in this schema

### xdm:batchTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:operation
### Payload of the hygiene op request

Contents of this payload provides identities to delete, or records to update

`xdm:operation`
* is optional
* type: `object`
* defined in this schema

### xdm:operation Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:deleteIdentity`| object | Optional |
| `xdm:updateField`| object | Optional |



#### xdm:deleteIdentity
##### Specifies rows to delete for matching identities

Specifies rows to delete for matching identities

`xdm:deleteIdentity`
* is optional
* type: `object`

##### xdm:deleteIdentity Type

Unknown type `object`.

```json
{
  "title": "Specifies rows to delete for matching identities",
  "description": "Specifies rows to delete for matching identities",
  "type": "object",
  "properties": {
    "xdm:identities": {
      "title": "Set of primary identities",
      "description": "Set of primary identities",
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "xdm:namespace": {
            "title": "The identity namespace",
            "description": "The namespace associated with the xdm:id attribute.",
            "$ref": "https://ns.adobe.com/xdm/context/namespace"
          },
          "xdm:ID": {
            "title": "Experience identifier",
            "type": "string",
            "description": "Experience identifier"
          }
        }
      }
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:updateField
##### Details of the update operation

Details of the update operation

`xdm:updateField`
* is optional
* type: `object`

##### xdm:updateField Type

Unknown type `object`.

```json
{
  "title": "Details of the update operation",
  "description": "Details of the update operation",
  "type": "object",
  "properties": {
    "xdm:changes": {
      "title": "Array of records to update",
      "description": "Array of records to update",
      "type": "array",
      "items": {
        "title": "String-encoded JSON record to update",
        "description": "String-encoded JSON record to update",
        "type": "string"
      }
    }
  },
  "simpletype": "`object`"
}
```










## xdm:targetDatasetID
### Target Dataset ID specified by the user to apply hygiene operations

May be "*", but only if operationType = "deleteIdentity". Otherwise a valid value is required.

`xdm:targetDatasetID`
* is optional
* type: `string`
* defined in this schema

### xdm:targetDatasetID Type


`string`





