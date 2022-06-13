
# Segment Dimension Schema

```
https://ns.adobe.com/xdm/context/dim-segment
```

This is the dimension schema for a segment definition which includes required fields like segment ID and name of segment.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [insights-metrics/dim-segment.schema.json](insights-metrics/dim-segment.schema.json) |
## Schema Hierarchy

* Segment Dimension `https://ns.adobe.com/xdm/context/dim-segment`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Segment Dimension Example
```json
{
  "xdm:segment": {
    "xdm:ID": "0f4ac2cd-a007-4e18-af2b-20c3dd64a8a2",
    "xdm:name": "Users with TV segment",
    "xdm:status": "ACTIVE"
  }
}
```

# Segment Dimension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:segment](#xdmsegment) | `object` | Optional | Segment Dimension (this schema) |
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






## xdm:segment

Segment Dimension and its properties.

`xdm:segment`
* is optional
* type: `object`
* defined in this schema

### xdm:segment Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:description`| string | Optional |
| `xdm:name`| string | Optional |
| `xdm:namespace`| string | Optional |
| `xdm:source`| string | Optional |
| `xdm:status`| string | Optional |
| `xdm:version`| string | Optional |



#### xdm:ID
##### Segment Identifier

Unique identifier of the segment.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:description
##### Segment description

Description of the segment.

`xdm:description`
* is optional
* type: `string`

##### xdm:description Type


`string`








#### xdm:name
##### Segment name

Name of the segment.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`








#### xdm:namespace
##### Segment Namespace

Segment namespace.

`xdm:namespace`
* is optional
* type: `string`

##### xdm:namespace Type


`string`








#### xdm:source
##### Segment Source

Segment source indicating whether the segment was sent from an internal or external source.

`xdm:source`
* is optional
* type: `string`

##### xdm:source Type


`string`








#### xdm:status
##### Segment status

Current status of segment from external system normalized to active, inactive, deleted, draft or revoked.

`xdm:status`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmsegment-known-values).

##### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `ACTIVE` |  |
| `INACTIVE` |  |
| `DELETED` |  |
| `DRAFT` |  |
| `REVOKED` |  |






#### xdm:version
##### Segment version

Version of the segment.

`xdm:version`
* is optional
* type: `string`

##### xdm:version Type


`string`










