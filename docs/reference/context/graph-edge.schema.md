
# XDM Graph Edge Schema

```
https://ns.adobe.com/xdm/context/graph-edge
```

XDM graph schema for edge/relationship between two nodes/vertices.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/graph-edge.schema.json](context/graph-edge.schema.json) |
## Schema Hierarchy

* XDM Graph Edge `https://ns.adobe.com/xdm/context/graph-edge`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Audit trail](../common/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


## XDM Graph Edge Example
```json
{
  "xdm:edges": [
    {
      "xdm:sourceNodeId": "aam_1|0",
      "xdm:targetNodeId": "dpuuid_1|10",
      "xdm:dataProvider": [
        {
          "xdm:dataProviderId": 5,
          "xdm:firstSeenTimestamp": "2019-02-01T15:52:25+00:00",
          "xdm:lastSeenTimestamp": "2019-02-01T15:52:25+00:00",
          "xdm:trusted": true,
          "xdm:directed": false,
          "xdm:relationType": "online_deterministic",
          "xdm:frequency": 1,
          "xdm:lastCalculatedTimestamp": "2019-02-01T15:52:25+00:00"
        }
      ]
    }
  ]
}
```

# XDM Graph Edge Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [repo:createDate](#repocreatedate) | `string` | Optional | [Audit trail](../common/auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional | [Audit trail](../common/auditable.schema.md#repomodifydate) |
| [xdm:createdByBatchID](#xdmcreatedbybatchid) | `string` | Optional | [Audit trail](../common/auditable.schema.md#xdmcreatedbybatchid) |
| [xdm:edges](#xdmedges) | `object[]` | Optional | XDM Graph Edge (this schema) |
| [xdm:modifiedByBatchID](#xdmmodifiedbybatchid) | `string` | Optional | [Audit trail](../common/auditable.schema.md#xdmmodifiedbybatchid) |
| [xdm:repositoryCreatedBy](#xdmrepositorycreatedby) | `string` | Optional | [Audit trail](../common/auditable.schema.md#xdmrepositorycreatedby) |
| [xdm:repositoryLastModifiedBy](#xdmrepositorylastmodifiedby) | `string` | Optional | [Audit trail](../common/auditable.schema.md#xdmrepositorylastmodifiedby) |
| `*` | any | Additional | this schema *allows* additional properties |

## repo:createDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:createDate`
* is optional
* type: `string`
* defined in [Audit trail](../common/auditable.schema.md#repocreatedate)

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
* defined in [Audit trail](../common/auditable.schema.md#repomodifydate)

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
* defined in [Audit trail](../common/auditable.schema.md#xdmcreatedbybatchid)

### xdm:createdByBatchID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:edges
### Array Of Edges

Array of edges.

`xdm:edges`
* is optional
* type: `object[]`

* defined in this schema

### xdm:edges Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:dataProvider`| array | Optional |
| `xdm:edgeId`| string | Optional |
| `xdm:label`| string | Optional |
| `xdm:relation`| string | Optional |
| `xdm:sourceNodeId`| string | Optional |
| `xdm:targetNodeId`| string | Optional |



#### xdm:dataProvider

undefined

`xdm:dataProvider`
* is optional
* type: `object[]`


##### xdm:dataProvider Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `xdm:dataProviderId`| integer | Optional |  |
| `xdm:directed`| boolean | Optional | `false` |
| `xdm:firstSeenTimestamp`| string | Optional |  |
| `xdm:frequency`| integer | Optional |  |
| `xdm:lastCalculatedTimestamp`| string | Optional |  |
| `xdm:lastSeenTimestamp`| string | Optional |  |
| `xdm:relationType`| string | Optional |  |
| `xdm:score`| number | Optional |  |
| `xdm:summedRecency`| integer | Optional |  |
| `xdm:trusted`| boolean | Optional | `true` |



#### xdm:dataProviderId
##### Data Provider Id

Identifier of the Data Provider..

`xdm:dataProviderId`
* is optional
* type: `integer`

##### xdm:dataProviderId Type


`integer`








#### xdm:directed
##### Directed Or Birectional

Nature of graph whether it is directed or birectional.

`xdm:directed`
* is optional
* type: `boolean`
* default: `false`


##### xdm:directed Type


`boolean`







#### xdm:firstSeenTimestamp
##### Relationship Observed Time and Date

Time and date the relation was first observed.

`xdm:firstSeenTimestamp`
* is optional
* type: `string`

##### xdm:firstSeenTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:frequency
##### Frequency

Frequency of the observed relationship.

`xdm:frequency`
* is optional
* type: `integer`

##### xdm:frequency Type


`integer`








#### xdm:lastCalculatedTimestamp
##### Last Calculated Data And Time

Time and date the relationship score was last calculated.

`xdm:lastCalculatedTimestamp`
* is optional
* type: `string`

##### xdm:lastCalculatedTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:lastSeenTimestamp
##### Relationship Observed most recent Time and Date

Time and date the relation was last observed.

`xdm:lastSeenTimestamp`
* is optional
* type: `string`

##### xdm:lastSeenTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:relationType
##### Relationship Type

The method that established the relationship - Online/Offline deterministic/probabilistic.

`xdm:relationType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmedges-known-values).

##### xdm:relationType Known Values
| Value | Description |
|-------|-------------|
| `online_deterministic` | Online Deterministic |
| `online_probabilistic` | Online Probabilistic |
| `offline_deterministic` | Offline Deterministic |
| `offline_probabilistic` | Offline Probabilistic |






#### xdm:score
##### Relationship Score

Imputed score of relationship.

`xdm:score`
* is optional
* type: `number`

##### xdm:score Type


`number`








#### xdm:summedRecency
##### Recency Score

Recency score of relationship.

`xdm:summedRecency`
* is optional
* type: `integer`

##### xdm:summedRecency Type


`integer`








#### xdm:trusted
##### Trusted Data Source Flag

Indicator of whether the data source is trusted or not.

`xdm:trusted`
* is optional
* type: `boolean`
* default: `true`


##### xdm:trusted Type


`boolean`














#### xdm:edgeId
##### Edge Identifier

The unique identifier of the identity associated with this graph edge.

`xdm:edgeId`
* is optional
* type: `string`

##### xdm:edgeId Type


`string`








#### xdm:label
##### Label

Additional description.

`xdm:label`
* is optional
* type: `string`

##### xdm:label Type


`string`








#### xdm:relation
##### Relation Description

Relation description.

`xdm:relation`
* is optional
* type: `string`

##### xdm:relation Type


`string`








#### xdm:sourceNodeId
##### Source Node Id

Source node identifier.

`xdm:sourceNodeId`
* is optional
* type: `string`

##### xdm:sourceNodeId Type


`string`








#### xdm:targetNodeId
##### Target Node Id

Target node identifier.

`xdm:targetNodeId`
* is optional
* type: `string`

##### xdm:targetNodeId Type


`string`














## xdm:modifiedByBatchID
### Modified by batch identifier

The last dataset files in Catalog which has modified the record. At creation time, `modifiedByBatchID` is set as `createdByBatchID`.

`xdm:modifiedByBatchID`
* is optional
* type: `string`
* defined in [Audit trail](../common/auditable.schema.md#xdmmodifiedbybatchid)

### xdm:modifiedByBatchID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:repositoryCreatedBy
### Created by user identifier

User ID of who created the record.

`xdm:repositoryCreatedBy`
* is optional
* type: `string`
* defined in [Audit trail](../common/auditable.schema.md#xdmrepositorycreatedby)

### xdm:repositoryCreatedBy Type


`string`






## xdm:repositoryLastModifiedBy
### Modified by user identifier

User ID of who last modified the record. At creation time, `modifiedByUser` is set as `createdByUser`.

`xdm:repositoryLastModifiedBy`
* is optional
* type: `string`
* defined in [Audit trail](../common/auditable.schema.md#xdmrepositorylastmodifiedby)

### xdm:repositoryLastModifiedBy Type


`string`





