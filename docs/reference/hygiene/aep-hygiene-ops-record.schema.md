
# AEP Hygiene Operation Request Schema

```
https://ns.adobe.com/xdm/schemas/aep-hygiene-ops
```

AEP Data Hygiene operations that instruct AEP to delete or modify records in a specified dataset and sandbox.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [hygiene/aep-hygiene-ops-record.schema.json](hygiene/aep-hygiene-ops-record.schema.json) |
## Schema Hierarchy

* AEP Hygiene Operation Request `https://ns.adobe.com/xdm/schemas/aep-hygiene-ops`
  * [AEP Hygiene](aep-hygiene.schema.md) `https://ns.adobe.com/xdm/classes/aep-hygiene`


## AEP Hygiene Operation Request Examples

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


# AEP Hygiene Operation Request Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:action](#xdmaction) | `enum` | Optional | AEP Hygiene Operation Request (this schema) |
| [xdm:batchTime](#xdmbatchtime) | `string` | Optional | AEP Hygiene Operation Request (this schema) |
| [xdm:operation](#xdmoperation) | `object` | Optional | AEP Hygiene Operation Request (this schema) |
| [xdm:targetDatasetID](#xdmtargetdatasetid) | `string` | Optional | AEP Hygiene Operation Request (this schema) |
| [xdm:workorderID](#xdmworkorderid) | `string` | Optional | AEP Hygiene Operation Request (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

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
            "$ref": "https://ns.adobe.com/xdm/context/namespace",
            "meta:titleId": "aep-hygiene-ops##xdm:namespace##title##4581",
            "meta:descriptionId": "aep-hygiene-ops##xdm:namespace##description##62051"
          },
          "xdm:ID": {
            "title": "Experience identifier",
            "type": "string",
            "description": "Experience identifier",
            "meta:titleId": "aep-hygiene-ops##xdm:ID##title##32631",
            "meta:descriptionId": "aep-hygiene-ops##xdm:ID##description##31251"
          }
        }
      },
      "meta:titleId": "aep-hygiene-ops##xdm:identities##title##19841",
      "meta:descriptionId": "aep-hygiene-ops##xdm:identities##description##14911"
    }
  },
  "meta:titleId": "aep-hygiene-ops##xdm:deleteIdentity##title##65751",
  "meta:descriptionId": "aep-hygiene-ops##xdm:deleteIdentity##description##86391",
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
        "type": "string",
        "meta:titleId": "aep-hygiene-ops##items##title##26921",
        "meta:descriptionId": "aep-hygiene-ops##items##description##24961"
      },
      "meta:titleId": "aep-hygiene-ops##xdm:changes##title##99521",
      "meta:descriptionId": "aep-hygiene-ops##xdm:changes##description##4771"
    }
  },
  "meta:titleId": "aep-hygiene-ops##xdm:updateField##title##65571",
  "meta:descriptionId": "aep-hygiene-ops##xdm:updateField##description##2691",
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






## xdm:workorderID
### Work Order ID for tracking purposes.

Each row in a batch will be produced by a different customer REST API request, and will therefore have a different workorderID for tracking purposes.

`xdm:workorderID`
* is optional
* type: `string`
* defined in this schema

### xdm:workorderID Type


`string`





