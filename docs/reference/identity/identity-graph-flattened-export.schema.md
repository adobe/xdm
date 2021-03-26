
# Identity Graph Flattened Export Schema Schema

```
https://ns.adobe.com/xdm/context/identity-graph-flattened-export
```

Identity Graph Flattened Export Schema.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [identity/identity-graph-flattened-export.schema.json](identity/identity-graph-flattened-export.schema.json) |
## Schema Hierarchy

* Identity Graph Flattened Export Schema `https://ns.adobe.com/xdm/context/identity-graph-flattened-export`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Identity Graph Flattened Export Schema Example
```json
{
  "xdm:identityID": "22222222222222222222222222222222222222",
  "xdm:namespaceID": 4,
  "xdm:namespaceCode": "ECID",
  "xdm:algorithm": "SHARED_DEVICE_DETECTION_SESSIONIZATION",
  "xdm:membersByTimeRange": [
    {
      "xdm:startTimestamp": "2017-09-26T15:52:25+00:00",
      "xdm:endTimestamp": "2017-09-26T15:52:25+00:00",
      "xdm:graphID": "G1",
      "xdm:identityMap": {
        "ECID": [
          {
            "xdm:id": "22222222222222222222222222222222222222"
          }
        ],
        "CRMID": [
          {
            "xdm:id": "1233ce17-20e0-4a2c-8198-2a77fd60cf4d"
          }
        ],
        "PHONE": [
          {
            "xdm:id": "408-333-2222"
          }
        ]
      }
    }
  ],
  "xdm:lastUpdatedTime": "2020-09-26T15:52:25+00:00"
}
```

# Identity Graph Flattened Export Schema Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:algorithm](#xdmalgorithm) | `enum` | Optional | Identity Graph Flattened Export Schema (this schema) |
| [xdm:identityID](#xdmidentityid) | `string` | Optional | Identity Graph Flattened Export Schema (this schema) |
| [xdm:lastUpdatedTime](#xdmlastupdatedtime) | `string` | Optional | Identity Graph Flattened Export Schema (this schema) |
| [xdm:membersByTimeRange](#xdmmembersbytimerange) | `object[]` | Optional | Identity Graph Flattened Export Schema (this schema) |
| [xdm:namespaceCode](#xdmnamespacecode) | `string` | Optional | Identity Graph Flattened Export Schema (this schema) |
| [xdm:namespaceID](#xdmnamespaceid) | `integer` | Optional | Identity Graph Flattened Export Schema (this schema) |
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






## xdm:algorithm
### Algorithm

Algorithm used by Identity Service to stitch like SHARED_DEVICE_DETECTION_SESSIONIZATION, DETERMINISTIC, FREQ_RECENCY etc.

`xdm:algorithm`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmalgorithm-known-values).

### xdm:algorithm Known Values
| Value | Description |
|-------|-------------|
| `SHARED_DEVICE_DETECTION_SESSIONIZATION` | Shared Device Detection Sessionization |
| `FREQ_RECENCY_BASED_SHARED_DEVICES` | Frequency Recency Based Shared Devices |
| `DETERMINISTIC` | Deterministic |




## xdm:identityID
### Person ID

Person ID Like Email or ECID or phone.

`xdm:identityID`
* is optional
* type: `string`
* defined in this schema

### xdm:identityID Type


`string`






## xdm:lastUpdatedTime
### Last Updated Time

Last updated time when this identity was updated.

`xdm:lastUpdatedTime`
* is optional
* type: `string`
* defined in this schema

### xdm:lastUpdatedTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:membersByTimeRange


`xdm:membersByTimeRange`
* is optional
* type: `object[]`

* defined in this schema

### xdm:membersByTimeRange Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:endTimestamp`| string | Optional |
| `xdm:graphID`| string | Optional |
| `xdm:identityMap`| object | Optional |
| `xdm:startTimestamp`| string | Optional |



#### xdm:endTimestamp
##### End Timestamp

End Timestamp.

`xdm:endTimestamp`
* is optional
* type: `string`

##### xdm:endTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:graphID
##### Person Graph ID

Person level Graph Identifier.

`xdm:graphID`
* is optional
* type: `string`

##### xdm:graphID Type


`string`








#### xdm:identityMap

undefined

`xdm:identityMap`
* is optional
* type: `object`

##### xdm:identityMap Type

Unknown type `object`.

```json
{
  "type": "object",
  "meta:xdmType": "map",
  "additionalProperties": {
    "type": "array",
    "items": {
      "$ref": "https://ns.adobe.com/xdm/context/identityitem"
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:startTimestamp
##### Start Timestamp

Start Timestamp.

`xdm:startTimestamp`
* is optional
* type: `string`

##### xdm:startTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))













## xdm:namespaceCode
### Namespace Code

Identity Type in human readable form.

`xdm:namespaceCode`
* is optional
* type: `string`
* defined in this schema

### xdm:namespaceCode Type


`string`






## xdm:namespaceID
### Namespace Id

Id for the Identity Type.

`xdm:namespaceID`
* is optional
* type: `integer`
* defined in this schema

### xdm:namespaceID Type


`integer`





