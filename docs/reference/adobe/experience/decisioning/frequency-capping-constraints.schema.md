
# Frequency Capping Constraints Schema

```
https://ns.adobe.com/experience/decisioning/frequency-capping-constraints
```

Frequency capping constraints is a component of a decision option that defines the parameters for capping. Capping is the process of limiting how many times an option can be proposed, for an individual profile as well as across all profiles.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/frequency-capping-constraints.schema.json](adobe/experience/decisioning/frequency-capping-constraints.schema.json) |

# Frequency Capping Constraints Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:frequencyCappingConstraints](#xdmfrequencycappingconstraints) | `object[]` | Optional | Frequency Capping Constraints (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:frequencyCappingConstraints


`xdm:frequencyCappingConstraints`
* is optional
* type: `object[]`

* defined in this schema

### xdm:frequencyCappingConstraints Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `xdm:duration`| integer | Optional |  |
| `xdm:endDate`| string | Optional |  |
| `xdm:entity`| string | **Required** |  |
| `xdm:events`| array | Optional | `["decisioning"]` |
| `xdm:limit`| integer | **Required** |  |
| `xdm:placement`| string | Optional |  |
| `xdm:repeat`| boolean | Optional | `false` |
| `xdm:scope`| string | **Required** |  |
| `xdm:startDate`| string | Optional |  |



#### xdm:duration
##### Duration

Duration in hours. When xdm:repeat is true, daily scan job of the rules will update all expired rules to start from current time and end with the specific xdm:duration

`xdm:duration`
* is optional
* type: `integer`

##### xdm:duration Type


`integer`
* minimum value: `1`








#### xdm:endDate
##### End Date and Time

Capping end date and time. Property has the semantic of schema.org's 'endTime' property defined on http://schema.org/Action

`xdm:endDate`
* is optional
* type: `string`

##### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:entity
##### Entity

Entity to comply with.  It will be Offer or Placement.

`xdm:entity`
* is **required**
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmfrequencycappingconstraints-known-values).

##### xdm:entity Known Values
| Value | Description |
|-------|-------------|
| `offer` | To comply with offer. |
| `placement` | To comply with offer placement. |






#### xdm:events
##### Events

Events of the capping to comply with. Since most of the events don't support offerId level counting, we will start with only support decisioning event, and will extend to support custom event in future phases. Other events to be supported in the future : web-display, web-click, message-delivery, message-open, message-click

`xdm:events`
* is optional
* type: `enum[]`
* at least `1` items in the array
* default: `["decisioning"]`


##### xdm:events Type


Array type: `enum[]`

All items must be of the type:
`string`











#### xdm:limit
##### Limit

How many times an option can be proposed

`xdm:limit`
* is **required**
* type: `integer`

##### xdm:limit Type


`integer`
* minimum value: `1`








#### xdm:placement
##### Offer Placement

Placement to comply with. The value is the URI (@id) of the offer placement that is referenced. See schema https://ns.adobe.com/experience/offer-management/offer-placement. If placement id is not provided and entity is on placement, the capping will be applied to every placement. If placement is provided, it will only be applied to specified placement.

`xdm:placement`
* is optional
* type: `string`

##### xdm:placement Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))








#### xdm:repeat
##### Repeat

When true, new counter rule with updated time window will be created. Configure a capping to be repeated (e.g., max times every 1 week). ECS will support repeating config in the rules, scan rules daily, and create a new rule with new expiry when the rule is due for repeating

`xdm:repeat`
* is optional
* type: `boolean`
* default: `false`


##### xdm:repeat Type


`boolean`







#### xdm:scope
##### scope

Scope of the capping

`xdm:scope`
* is **required**
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmfrequencycappingconstraints-known-values).

##### xdm:scope Known Values
| Value | Description |
|-------|-------------|
| `global` | Global cap is a constraint on how many times an option can be proposed in totality. |
| `profile` | Profile cap is a constraint on how many times an option can be proposed to a certain profile. |






#### xdm:startDate
##### Start Date and Time

Capping start date and time. Property has the semantic of schema.org's 'startTime' property defined on http://schema.org/Action

`xdm:startDate`
* is optional
* type: `string`

##### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))







  
Frequency capping constraint define additional rules based on prior offer proposition, either across all audiences or for a particular profile identity.






