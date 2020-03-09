
# XDM Graph Schema Schema

```
https://ns.adobe.com/xdm/context/graph
```

XDM graph schema to host graph data.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/graph.schema.json](context/graph.schema.json) |
## Schema Hierarchy

* XDM Graph Schema `https://ns.adobe.com/xdm/context/graph`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Audit trail](../common/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


## XDM Graph Schema Example
```json
{
  "xdm:graphId": "96698daa-d44a-4960-bb7e-588bfc928ea3",
  "xdm:directed": false,
  "xdm:graphType": "Person Graph",
  "xdm:graphCreateTimestamp": "2019-01-01T15:52:25+00:00",
  "xdm:firstCreatedTimestamp": "2019-01-01T15:52:25+00:00",
  "xdm:lastModifiedTimestamp": "2019-03-10T15:52:25+00:00"
}
```

# XDM Graph Schema Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [repo:createDate](#repocreatedate) | `string` | Optional |  | [Audit trail](../common/auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional |  | [Audit trail](../common/auditable.schema.md#repomodifydate) |
| [xdm:createdByBatchID](#xdmcreatedbybatchid) | `string` | Optional |  | [Audit trail](../common/auditable.schema.md#xdmcreatedbybatchid) |
| [xdm:directed](#xdmdirected) | `boolean` | Optional | `true` | XDM Graph Schema (this schema) |
| [xdm:firstCreatedTimestamp](#xdmfirstcreatedtimestamp) | `string` | Optional |  | XDM Graph Schema (this schema) |
| [xdm:graphId](#xdmgraphid) | `string` | Optional |  | XDM Graph Schema (this schema) |
| [xdm:graphType](#xdmgraphtype) | `string` | Optional |  | XDM Graph Schema (this schema) |
| [xdm:label](#xdmlabel) | `string` | Optional |  | XDM Graph Schema (this schema) |
| [xdm:lastModifiedTimestamp](#xdmlastmodifiedtimestamp) | `string` | Optional |  | XDM Graph Schema (this schema) |
| [xdm:modifiedByBatchID](#xdmmodifiedbybatchid) | `string` | Optional |  | [Audit trail](../common/auditable.schema.md#xdmmodifiedbybatchid) |
| [xdm:repositoryCreatedBy](#xdmrepositorycreatedby) | `string` | Optional |  | [Audit trail](../common/auditable.schema.md#xdmrepositorycreatedby) |
| [xdm:repositoryLastModifiedBy](#xdmrepositorylastmodifiedby) | `string` | Optional |  | [Audit trail](../common/auditable.schema.md#xdmrepositorylastmodifiedby) |
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






## xdm:directed
### Directed Graph Indicator

Directed graph indicator.

`xdm:directed`
* is optional
* type: `boolean`
* default: `true`
* defined in this schema

### xdm:directed Type


`boolean`





## xdm:firstCreatedTimestamp
### Graph Created Date And Time

Time and date this graph was created.

`xdm:firstCreatedTimestamp`
* is optional
* type: `string`
* defined in this schema

### xdm:firstCreatedTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:graphId
### Graph Identifier

The unique identifier of the identity associated with this graph.

`xdm:graphId`
* is optional
* type: `string`
* defined in this schema

### xdm:graphId Type


`string`






## xdm:graphType
### Graph Type

Graph type. Examples - Person graph, Third party graph, Private graph etc.

`xdm:graphType`
* is optional
* type: `string`
* defined in this schema

### xdm:graphType Type


`string`






## xdm:label
### Graph Label

Graph label.

`xdm:label`
* is optional
* type: `string`
* defined in this schema

### xdm:label Type


`string`






## xdm:lastModifiedTimestamp
### Graph Last Modified Date And Time

Time and date this graph was last modified.

`xdm:lastModifiedTimestamp`
* is optional
* type: `string`
* defined in this schema

### xdm:lastModifiedTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






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





