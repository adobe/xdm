
# Decision Placement Detail Schema

```
https://ns.adobe.com/experience/decisioning/placement-detail
```

Detail about the entity defining and controlling the decisioning process. Decisions are made in the context of a placement. At any given time, the best option is re-evaluated, or ranked, based on the most current set of context variables, rules and constraints applicable for this placement.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/placement-detail.schema.json](adobe/experience/decisioning/placement-detail.schema.json) |

# Decision Placement Detail Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [repo:etag](#repoetag) | `string` | Optional | Decision Placement Detail (this schema) |
| [xdm:channelID](#xdmchannelid) | `string` | Optional | Decision Placement Detail (this schema) |
| [xdm:id](#xdmid) | `string` | **Required** | Decision Placement Detail (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Decision Placement Detail (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## repo:etag
### Placement ETag

The revision that the placement object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in this schema

### repo:etag Type


`string`






## xdm:channelID
### Placement&#39;s Channel Identifier

The channel in which proposition was made. The value is a valid Channel URI. See 'https://ns.adobe.com/xdm/channels/channel'

`xdm:channelID`
* is optional
* type: `string`
* defined in this schema

### xdm:channelID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:id
### Placement Identifier

A unique identifier for the decision placement.

`xdm:id`
* is **required**
* type: `string`
* defined in this schema

### xdm:id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:name
### Placement Name

Placement name. The name is displayed in various user interfaces.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`





