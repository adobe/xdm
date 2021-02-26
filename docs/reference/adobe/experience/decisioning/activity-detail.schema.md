
# Decision Activity Details Schema

```
https://ns.adobe.com/experience/decisioning/activity-detail
```

Snapshot of the properties of the decision activity. A decision activity is an entity that controls a decisioning process. Decisions are made in the context of an activity. See definition of decision activty for more details.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/activity-detail.schema.json](adobe/experience/decisioning/activity-detail.schema.json) |
## Schema Hierarchy

* Decision Activity Details `https://ns.adobe.com/experience/decisioning/activity-detail`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Decision Activity Details Example
```json
{
  "xdm:id": "xcore:offer-activity:ebc48132c26ccfc",
  "xdm:name": "Tutorial videos to watch",
  "xdm:startTime": "2018-10-13T05:59:18.914Z",
  "xdm:endTime": "2018-12-27T05:59:18.914Z"
}
```

# Decision Activity Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [repo:etag](#repoetag) | `string` | Optional | Decision Activity Details (this schema) |
| [xdm:endTime](#xdmendtime) | `string` | Optional | Decision Activity Details (this schema) |
| [xdm:fallback](#xdmfallback) | `string` | Optional | Decision Activity Details (this schema) |
| [xdm:id](#xdmid) | `string` | **Required** | Decision Activity Details (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Decision Activity Details (this schema) |
| [xdm:startTime](#xdmstarttime) | `string` | Optional | Decision Activity Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## repo:etag
### Activity ETag

The revision that the decision activity object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in this schema

### repo:etag Type


`string`






## xdm:endTime
### Activity End Date and Time

Activity end date and end time. Property has the semantic of schema.org's 'endTime' property defined on http://schema.org/Action

`xdm:endTime`
* is optional
* type: `string`
* defined in this schema

### xdm:endTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:fallback
### Fallback Option

The reference to a fallback option that is used when decisioning in the context of this activity does not qualify any of the regular options (this typically happens when hard constraints are applied). The value is the URI (@id) of the fallback option that is referenced.

`xdm:fallback`
* is optional
* type: `string`
* defined in this schema

### xdm:fallback Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:id
### Activity Identifier

A unique, immutable identifier for the decision activity.

`xdm:id`
* is **required**
* type: `string`
* defined in this schema

### xdm:id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:name
### Activity Name

Activity name. The name is displayed in various user interfaces.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:startTime
### Activity Start Date and Time

Activity start date and end time. Property has the semantic of schema.org's 'startTime' property defined on http://schema.org/Action

`xdm:startTime`
* is optional
* type: `string`
* defined in this schema

### xdm:startTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





