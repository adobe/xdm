
# Offer Activity Detail Schema

```
https://ns.adobe.com/experience/offer-management/offer-activity-detail
```

Offer activity detail is used to capture the attributes of an offer activity in a proposition or response.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/offer-management/offer-activity-detail.schema.json](adobe/experience/offer-management/offer-activity-detail.schema.json) |
## Schema Hierarchy

* Offer Activity Detail `https://ns.adobe.com/experience/offer-management/offer-activity-detail`
  * [Decision Activity Details](../decisioning/activity-detail.schema.md) `https://ns.adobe.com/experience/decisioning/activity-detail`


## Offer Activity Detail Example
```json
{
  "xdm:id": "xcore:offer-activity:f66f792de3c0ba9",
  "xdm:name": "Email - Next Best Offer",
  "xdm:placement": "xcore:offer-placement:f6524d27c2d6edd",
  "xdm:filter": "xcore:offer-filter:f66f792de3c0ba9",
  "xdm:fallback": "xcore:fallback-offer:f6529b31b3c0ba6"
}
```

# Offer Activity Detail Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [repo:etag](#repoetag) | `string` | Optional | [Decision Activity Details](../decisioning/activity-detail.schema.md#repoetag) |
| [xdm:endTime](#xdmendtime) | `string` | Optional | [Decision Activity Details](../decisioning/activity-detail.schema.md#xdmendtime) |
| [xdm:fallback](#xdmfallback) | `string` | Optional | [Decision Activity Details](../decisioning/activity-detail.schema.md#xdmfallback) |
| [xdm:filter](#xdmfilter) | `string` | Optional | Offer Activity Detail (this schema) |
| [xdm:id](#xdmid) | `string` | Optional | [Decision Activity Details](../decisioning/activity-detail.schema.md#xdmid) |
| [xdm:name](#xdmname) | `string` | Optional | [Decision Activity Details](../decisioning/activity-detail.schema.md#xdmname) |
| [xdm:placement](#xdmplacement) | `string` | Optional | Offer Activity Detail (this schema) |
| [xdm:startTime](#xdmstarttime) | `string` | Optional | [Decision Activity Details](../decisioning/activity-detail.schema.md#xdmstarttime) |
| `*` | any | Additional | this schema *allows* additional properties |

## repo:etag
### Activity ETag

The revision that the decision activity object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in [Decision Activity Details](../decisioning/activity-detail.schema.md#repoetag)

### repo:etag Type


`string`






## xdm:endTime
### Activity End Date and Time

Activity end date and end time. Property has the semantic of schema.org's 'endTime' property defined on http://schema.org/Action

`xdm:endTime`
* is optional
* type: `string`
* defined in [Decision Activity Details](../decisioning/activity-detail.schema.md#xdmendtime)

### xdm:endTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:fallback
### Fallback Option

The reference to a fallback option that is used when decisioning in the context of this activity does not qualify any of the regular options (this typically happens when hard constraints are applied). The value is the URI (@id) of the fallback option that is referenced.

`xdm:fallback`
* is optional
* type: `string`
* defined in [Decision Activity Details](../decisioning/activity-detail.schema.md#xdmfallback)

### xdm:fallback Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:filter
### Offer Filter

The reference to a filter that is applied to the inventory when a decisioning is made the context of this activity. The value is the URI (@id) of the offer filter that is referenced. See schema https://ns.adobe.com/experience/offer-management/offer-filter

`xdm:filter`
* is optional
* type: `string`
* defined in this schema

### xdm:filter Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:id
### Activity Identifier

A unique, immutable identifier for the decision activity.

`xdm:id`
* is optional
* type: `string`
* defined in [Decision Activity Details](../decisioning/activity-detail.schema.md#xdmid)

### xdm:id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:name
### Activity Name

Activity name. The name is displayed in various user interfaces.

`xdm:name`
* is optional
* type: `string`
* defined in [Decision Activity Details](../decisioning/activity-detail.schema.md#xdmname)

### xdm:name Type


`string`






## xdm:placement
### Offer Placement

The reference to an offer placement instance. Offer placements are used by offer activities to limit the offer selection to those offers that have a representation that complies with the offer placement restrictions. The value is the URI (@id) of the offer placement that is referenced. See schema https://ns.adobe.com/experience/offer-management/offer-placement

`xdm:placement`
* is optional
* type: `string`
* defined in this schema

### xdm:placement Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:startTime
### Activity Start Date and Time

Activity start date and end time. Property has the semantic of schema.org's 'startTime' property defined on http://schema.org/Action

`xdm:startTime`
* is optional
* type: `string`
* defined in [Decision Activity Details](../decisioning/activity-detail.schema.md#xdmstarttime)

### xdm:startTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





