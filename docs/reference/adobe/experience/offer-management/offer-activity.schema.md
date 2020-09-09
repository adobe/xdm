
# Activity Schema

```
https://ns.adobe.com/experience/offer-management/offer-activity
```

An offer activity is used to control the decisioning process. It specifies the filter applied to the total inventory to narrow down offers by topic/category, the placement to narrow down the inventory to those offers that technically fit into the reserved space for the offer and specifies a fall back option should the combined constraints disqualify all available personalization options (offers).

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/offer-management/offer-activity.schema.json](adobe/experience/offer-management/offer-activity.schema.json) |

# Activity Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Activity (this schema) |
| [xdm:endDate](#xdmenddate) | `string` | Optional | Activity (this schema) |
| [xdm:fallback](#xdmfallback) | `string` | **Required** | Activity (this schema) |
| [xdm:filter](#xdmfilter) | `string` | **Required** | Activity (this schema) |
| [xdm:name](#xdmname) | `string` | **Required** | Activity (this schema) |
| [xdm:placement](#xdmplacement) | `string` | **Required** | Activity (this schema) |
| [xdm:startDate](#xdmstartdate) | `string` | Optional | Activity (this schema) |
| [xdm:status](#xdmstatus) | `enum` | **Required** | Activity (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### ID

The unique identifier of the offer activity. This @id must be unique across for objects that are not semantically the same, otherwise it is interpreted as referring to the same object. 

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






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
* is **required**
* type: `string`
* defined in this schema

### xdm:fallback Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:filter
### Offer Filter

The reference to a filter that is applied to the inventory when a decisioning is made the context of this activity. The value is the URI (@id) of the offer filter that is referenced. See schema https://ns.adobe.com/experience/offer-management/offer-filter

`xdm:filter`
* is **required**
* type: `string`
* defined in this schema

### xdm:filter Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:name
### Name

Activity name. The name is displayed in various user interfaces.

`xdm:name`
* is **required**
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:placement
### Offer Placement

The reference to an offer placement instance. Offer placements are used by offer activities to limit the offer selection to those offers that have a representation that complies with the offer placement restrictions. The value is the URI (@id) of the offer placement that is referenced. See schema https://ns.adobe.com/experience/offer-management/offer-placement

`xdm:placement`
* is **required**
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
* is **required**
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



