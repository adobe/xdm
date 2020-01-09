
# XDM Graphs Schema

```
https://ns.adobe.com/xdm/context/graphs
```

An XDM Graph. A Graph represents a set of related nodes and their relationships (often called as edges). These graphs could also be a set of nodes only without relationships. For example, person graph where each node is a device which the person uses.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/graphs.schema.json](context/graphs.schema.json) |
## Schema Hierarchy

* XDM Graphs `https://ns.adobe.com/xdm/context/graphs`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Audit trail](../common/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`
  * [Record Schema](../data/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## XDM Graphs Example
```json
{
  "xdm:graphId": "96698daa-d44a-4960-bb7e-588bfc928ea3",
  "xdm:directed": false,
  "xdm:graphType": "Person Graph",
  "xdm:graphCreateTimestamp": "2019-01-01T15:52:25+00:00",
  "xdm:firstCreatedTimestamp": "2019-01-01T15:52:25+00:00",
  "xdm:lastModifiedTimestamp": "2019-03-10T15:52:25+00:00",
  "xdm:nodes": [
    {
      "xdm:nodeId": "aam_1|0",
      "xdm:nodeType": "Identity",
      "xdm:firstSeenTimestamp": "2019-01-01T15:52:25+00:00",
      "xdm:lastSeenTimestamp": "2019-01-01T15:52:25+00:00",
      "xdm:firstCreateTimestamp": "2019-01-01T15:52:25+00:00",
      "xdm:lastModifiedTimestamp": "2019-01-01T15:52:25+00:00"
    },
    {
      "xdm:nodeId": "dpuuid_1|10",
      "xdm:nodeType": "Identity",
      "xdm:firstSeenTimestamp": "2019-03-01T15:52:25+00:00",
      "xdm:lastSeenTimestamp": "2019-03-01T15:52:25+00:00",
      "xdm:firstCreateTimestamp": "2019-03-01T15:52:25+00:00",
      "xdm:lastModifiedTimestamp": "2019-03-01T15:52:25+00:00"
    }
  ],
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

# XDM Graphs Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../data/record.schema.md#id) |
| [repo:createDate](#repocreatedate) | `string` | Optional | [Audit trail](../common/auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional | [Audit trail](../common/auditable.schema.md#repomodifydate) |
| [xdm:createdByBatchID](#xdmcreatedbybatchid) | `string` | Optional | [Audit trail](../common/auditable.schema.md#xdmcreatedbybatchid) |
| [xdm:modifiedByBatchID](#xdmmodifiedbybatchid) | `string` | Optional | [Audit trail](../common/auditable.schema.md#xdmmodifiedbybatchid) |
| [xdm:repositoryCreatedBy](#xdmrepositorycreatedby) | `string` | Optional | [Audit trail](../common/auditable.schema.md#xdmrepositorycreatedby) |
| [xdm:repositoryLastModifiedBy](#xdmrepositorylastmodifiedby) | `string` | Optional | [Audit trail](../common/auditable.schema.md#xdmrepositorylastmodifiedby) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../data/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






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





