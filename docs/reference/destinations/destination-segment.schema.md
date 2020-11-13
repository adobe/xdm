
# Destinations Segment Mapping Schema

```
https://ns.adobe.com/xdm/context/destination-segment
```

Destinations Segment Mapping Schema.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [destinations/destination-segment.schema.json](destinations/destination-segment.schema.json) |
## Schema Hierarchy

* Destinations Segment Mapping `https://ns.adobe.com/xdm/context/destination-segment`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Extensibility base schema](../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Destinations Segment Mapping Example
```json
{
  "xdm:destinationID": "b297ed27-607e-4715-97ed-27607e171589",
  "xdm:segmentID": "0b12f30c-2260-442e-9120-2b12e96c0c40",
  "xdm:segmentNamespace": "aepsegments",
  "xdm:createTime": "2019-01-01T15:52:25+00:00",
  "xdm:createdByID": "mprabhak"
}
```

# Destinations Segment Mapping Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:createTime](#xdmcreatetime) | `string` | Optional | Destinations Segment Mapping (this schema) |
| [xdm:createdByID](#xdmcreatedbyid) | `string` | Optional | Destinations Segment Mapping (this schema) |
| [xdm:destinationID](#xdmdestinationid) | `string` | Optional | Destinations Segment Mapping (this schema) |
| [xdm:segmentID](#xdmsegmentid) | `string` | Optional | Destinations Segment Mapping (this schema) |
| [xdm:segmentNamespace](#xdmsegmentnamespace) | `string` | Optional | Destinations Segment Mapping (this schema) |
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






## xdm:createTime
### Create Time

The date and UTC time when the activation flow to the destination-segment mapping was createdByID

`xdm:createTime`
* is optional
* type: `string`
* defined in this schema

### xdm:createTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:createdByID
### Created User ID

ID of user who created the destination flow

`xdm:createdByID`
* is optional
* type: `string`
* defined in this schema

### xdm:createdByID Type


`string`






## xdm:destinationID
### Destination ID

Unique Identifier for a destination instance

`xdm:destinationID`
* is optional
* type: `string`
* defined in this schema

### xdm:destinationID Type


`string`






## xdm:segmentID
### Segment ID

Identity of the segment in the related namespace

`xdm:segmentID`
* is optional
* type: `string`
* defined in this schema

### xdm:segmentID Type


`string`






## xdm:segmentNamespace
### Segment Namespace

Namespace to which the segment belongs

`xdm:segmentNamespace`
* is optional
* type: `string`
* defined in this schema

### xdm:segmentNamespace Type


`string`





