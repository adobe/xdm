
# XDM Graph Node/Vertex Schema Schema

```
https://ns.adobe.com/xdm/context/graph-node
```

XDM Schema for a graph Node/Vertex.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/graph-node.schema.json](context/graph-node.schema.json) |
## Schema Hierarchy

* XDM Graph Node/Vertex Schema `https://ns.adobe.com/xdm/context/graph-node`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## XDM Graph Node/Vertex Schema Example
```json
{
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
  ]
}
```

# XDM Graph Node/Vertex Schema Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:nodes](#xdmnodes) | `object[]` | Optional | XDM Graph Node/Vertex Schema (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:nodes
### Array Of Nodes

Array of nodes.

`xdm:nodes`
* is optional
* type: `object[]`

* defined in this schema

### xdm:nodes Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:dataSource`| string | Optional |
| `xdm:firstCreateTimestamp`| string | Optional |
| `xdm:firstSeenTimestamp`| string | Optional |
| `xdm:label`| string | Optional |
| `xdm:lastModifiedTimestamp`| string | Optional |
| `xdm:lastSeenTimestamp`| string | Optional |
| `xdm:nodeId`| string | Optional |
| `xdm:nodeType`| string | Optional |



#### xdm:dataSource
##### Data Source

Data source for the node.

`xdm:dataSource`
* is optional
* type: `string`

##### xdm:dataSource Type


`string`








#### xdm:firstCreateTimestamp
##### Node Created Date And Time

Time and date this node was first created.

`xdm:firstCreateTimestamp`
* is optional
* type: `string`

##### xdm:firstCreateTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:firstSeenTimestamp
##### Node First Seen Date And Time

Time and date this node was first seen.

`xdm:firstSeenTimestamp`
* is optional
* type: `string`

##### xdm:firstSeenTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:label
##### Node Label

Node label.

`xdm:label`
* is optional
* type: `string`

##### xdm:label Type


`string`








#### xdm:lastModifiedTimestamp
##### Node Last Modified Date And Time

Time and date this node was last modified.

`xdm:lastModifiedTimestamp`
* is optional
* type: `string`

##### xdm:lastModifiedTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:lastSeenTimestamp
##### Node Last Seen Date And Time

Time and date this node was last seen.

`xdm:lastSeenTimestamp`
* is optional
* type: `string`

##### xdm:lastSeenTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:nodeId
##### Node Identifier

The unique identifier of the identity associated with this graph node.

`xdm:nodeId`
* is optional
* type: `string`

##### xdm:nodeId Type


`string`








#### xdm:nodeType
##### Node Type

Type of node.

`xdm:nodeType`
* is optional
* type: `string`

##### xdm:nodeType Type


`string`













