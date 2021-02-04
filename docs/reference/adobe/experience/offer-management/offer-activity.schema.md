
# Activity Schema

```
https://ns.adobe.com/experience/offer-management/offer-activity
```

An offer activity is used to control the decisioning process. It specifies the filter applied to the total inventory to narrow down offers by topic/category, the placement to narrow down the inventory to those offers that technically fit into the reserved space for the offer and specifies a fall back option should the combined constraints disqualify all available personalization offers. (deprecated)

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/offer-management/offer-activity.schema.json](adobe/experience/offer-management/offer-activity.schema.json) |
## Schema Hierarchy

* Activity `https://ns.adobe.com/experience/offer-management/offer-activity`
  * [Record Schema](../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Decision Activity](../decisioning/activity.schema.md) `https://ns.adobe.com/experience/decisioning/activity`
  * [Decision Activity Criteria](../decisioning/criteria.schema.md) `https://ns.adobe.com/experience/decisioning/criteria`


# Activity Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../behaviors/record.schema.md#id) |
| [https://ns.adobe.com/experience/decisioning/criteria](#httpsnsadobecomexperiencedecisioningcriteria) | Decision Criterion Details | Optional | [Decision Activity Criteria](../decisioning/criteria.schema.md#httpsnsadobecomexperiencedecisioningcriteria) |
| [https://ns.adobe.com/experience/decisioning/endTime](#httpsnsadobecomexperiencedecisioningendtime) | `string` | Optional | [Decision Activity](../decisioning/activity.schema.md#httpsnsadobecomexperiencedecisioningendtime) |
| [https://ns.adobe.com/experience/decisioning/fallback](#httpsnsadobecomexperiencedecisioningfallback) | `string` | Optional | [Decision Activity](../decisioning/activity.schema.md#httpsnsadobecomexperiencedecisioningfallback) |
| [https://ns.adobe.com/experience/decisioning/name](#httpsnsadobecomexperiencedecisioningname) | `string` | Optional | [Decision Activity](../decisioning/activity.schema.md#httpsnsadobecomexperiencedecisioningname) |
| [https://ns.adobe.com/experience/decisioning/startTime](#httpsnsadobecomexperiencedecisioningstarttime) | `string` | Optional | [Decision Activity](../decisioning/activity.schema.md#httpsnsadobecomexperiencedecisioningstarttime) |
| [repo:etag](#repoetag) | `string` | Optional | [Decision Activity](../decisioning/activity.schema.md#repoetag) |
| [xdm:endDate](#xdmenddate) | `string` | Optional | Activity (this schema) |
| [xdm:fallback](#xdmfallback) | `string` | Optional | Activity (this schema) |
| [xdm:filter](#xdmfilter) | `string` | Optional | Activity (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Activity (this schema) |
| [xdm:placement](#xdmplacement) | `string` | Optional | Activity (this schema) |
| [xdm:startDate](#xdmstartdate) | `string` | Optional | Activity (this schema) |
| [xdm:status](#xdmstatus) | `enum` | Optional | Activity (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../../../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/criteria
### Criteria

Defines a set of decision criteria where each contains a set of constraints.

`https://ns.adobe.com/experience/decisioning/criteria`
* is optional
* type: Decision Criterion Details

* defined in [Decision Activity Criteria](../decisioning/criteria.schema.md#httpsnsadobecomexperiencedecisioningcriteria)

### https://ns.adobe.com/experience/decisioning/criteria Type


Array type: Decision Criterion Details

All items must be of the type:
* [Decision Criterion Details](../decisioning/criterion-details.schema.md) – `https://ns.adobe.com/experience/decisioning/criterion-details`








## https://ns.adobe.com/experience/decisioning/endTime
### Activity End Date and Time

Activity end date and end time. Property has the semantic of schema.org's 'endTime' property defined on http://schema.org/Action

`https://ns.adobe.com/experience/decisioning/endTime`
* is optional
* type: `string`
* defined in [Decision Activity](../decisioning/activity.schema.md#httpsnsadobecomexperiencedecisioningendtime)

### https://ns.adobe.com/experience/decisioning/endTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## https://ns.adobe.com/experience/decisioning/fallback
### Fallback Option

The reference to a fallback option that is used when decisioning in the context of this activity does not qualify any of the regular options (this typically happens when hard constraints are applied). The value is the URI (@id) of the fallback option that is referenced.

`https://ns.adobe.com/experience/decisioning/fallback`
* is optional
* type: `string`
* defined in [Decision Activity](../decisioning/activity.schema.md#httpsnsadobecomexperiencedecisioningfallback)

### https://ns.adobe.com/experience/decisioning/fallback Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/name
### Activity Name

Activity name. The name is displayed in various user interfaces.

`https://ns.adobe.com/experience/decisioning/name`
* is optional
* type: `string`
* defined in [Decision Activity](../decisioning/activity.schema.md#httpsnsadobecomexperiencedecisioningname)

### https://ns.adobe.com/experience/decisioning/name Type


`string`






## https://ns.adobe.com/experience/decisioning/startTime
### Activity Start Date and Time

Activity start date and end time. Property has the semantic of schema.org's 'startTime' property defined on http://schema.org/Action

`https://ns.adobe.com/experience/decisioning/startTime`
* is optional
* type: `string`
* defined in [Decision Activity](../decisioning/activity.schema.md#httpsnsadobecomexperiencedecisioningstarttime)

### https://ns.adobe.com/experience/decisioning/startTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## repo:etag
### Activity ETag

The revision that the decision activity object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in [Decision Activity](../decisioning/activity.schema.md#repoetag)

### repo:etag Type


`string`






## xdm:endDate
### End Date

Activity End Date

`xdm:endDate`
* is optional
* type: `string`
* defined in this schema

### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:fallback
### Fallback Offer

The reference to a fallback offer that is used when decisioning in the context of this activity does not qualify any of the offers specified in the fallback offer. The value is the URI (@id) of the fallback offer that is referenced.  See schema https://ns.adobe.com/experience/offer-management/fallback-offer

`xdm:fallback`
* is optional
* type: `string`
* defined in this schema

### xdm:fallback Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:filter
### Offer Filter

The reference to a filter that is applied to the inventory when a decisioning is made the context of this activity. The value is the URI (@id) of the offer filter that is referenced. See schema https://ns.adobe.com/experience/offer-management/offer-filter

`xdm:filter`
* is optional
* type: `string`
* defined in this schema

### xdm:filter Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:name
### Name

Activity name. The name is displayed in various user interfaces.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

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
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:startDate
### Start Date

Activity Start Date

`xdm:startDate`
* is optional
* type: `string`
* defined in this schema

### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:status
### Status

Activity Status

`xdm:status`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmstatus-known-values).

### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `draft` | Draft |
| `live` | Live |
| `complete` | Complete |
| `archived` | Archived |



