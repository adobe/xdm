
# Personalized Content Decision Option Schema

```
https://ns.adobe.com/experience/decisioning/personalized-content-option
```

Personalized decision options form the set of choices for any decision actvity. The objective for decisioning is to take a large inventory of items and apply numerous constraint rules to that inventory to narrow it down and then to rank the qualifying options according to a criteria. The resulting propositions assemble and personalize the experience for specific individuals.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/personalized-content-option.schema.json](adobe/experience/decisioning/personalized-content-option.schema.json) |
## Schema Hierarchy

* Personalized Content Decision Option `https://ns.adobe.com/experience/decisioning/personalized-content-option`
  * [Decision Option Lifecycle Status](lifecycle-status.schema.md) `https://ns.adobe.com/experience/decisioning/lifecycle-status`
  * [Decisioning Option Tags](tags.schema.md) `https://ns.adobe.com/experience/decisioning/tags`
  * [Decision Option Contents](contents.schema.md) `https://ns.adobe.com/experience/decisioning/contents`
  * [Decision Option Calendar Constraints](calendar-constraints.schema.md) `https://ns.adobe.com/experience/decisioning/calendar-constraints`
  * [Decision Option Profile Constraints](profile-constraints.schema.md) `https://ns.adobe.com/experience/decisioning/profile-constraints`
  * [Decision Option Ranking](ranking.schema.md) `https://ns.adobe.com/experience/decisioning/ranking`
  * [Frequency Capping Constraints](frequency-capping-constraints.schema.md) `https://ns.adobe.com/experience/decisioning/frequency-capping-constraints`


## Personalized Content Decision Option Example
```json
{
  "@id": "xcore:personalized-offer:e526a1503bf29e9",
  "https://ns.adobe.com/experience/decisioning/name": "Personalized Offer 1",
  "https://ns.adobe.com/experience/decisioning/status": "approved",
  "https://ns.adobe.com/experience/decisioning/contents": [
    {
      "https://ns.adobe.com/experience/decisioning/components": [
        {
          "https://ns.adobe.com/experience/decisioning/content": "You can always get what you want!",
          "@type": "https://ns.adobe.com/experience/offer-management/content-component-text",
          "dc:format": "text/template"
        }
      ],
      "https://ns.adobe.com/experience/decisioning/placement": "xcore:offer-placement:e51944a87919861"
    }
  ],
  "https://ns.adobe.com/experience/decisioning/tags": [
    "xcore:tag:e5196f1d9119862"
  ],
  "https://ns.adobe.com/experience/decisioning/calendarConstraints": {
    "https://ns.adobe.com/experience/decisioning/startDate": "2018-03-13T05:59:18.914Z",
    "https://ns.adobe.com/experience/decisioning/endDate": "2018-12-27T05:59:18.914Z"
  },
  "https://ns.adobe.com/experience/decisioning/profileConstraints": {
    "https://ns.adobe.com/experience/decisioning/profileConstraintType": "eligibilityRule",
    "https://ns.adobe.com/experience/decisioning/eligibilityRule": "xcore:eligibility-rule:e5244c22eff29e8"
  },
  "https://ns.adobe.com/experience/decisioning/ranking": {
    "https://ns.adobe.com/experience/decisioning/priority": 1
  }
}
```

# Personalized Content Decision Option Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/calendarConstraints](#httpsnsadobecomexperiencedecisioningcalendarconstraints) | Calendar Constraint Details | Optional | [Decision Option Calendar Constraints](calendar-constraints.schema.md#httpsnsadobecomexperiencedecisioningcalendarconstraints) |
| [https://ns.adobe.com/experience/decisioning/contents](#httpsnsadobecomexperiencedecisioningcontents) | Content Details | Optional | [Decision Option Contents](contents.schema.md#httpsnsadobecomexperiencedecisioningcontents) |
| [https://ns.adobe.com/experience/decisioning/lifecycleStatus](#httpsnsadobecomexperiencedecisioninglifecyclestatus) | `enum` | Optional | [Decision Option Lifecycle Status](lifecycle-status.schema.md#httpsnsadobecomexperiencedecisioninglifecyclestatus) |
| [https://ns.adobe.com/experience/decisioning/profileConstraints](#httpsnsadobecomexperiencedecisioningprofileconstraints) | Profile Constraint Details | Optional | [Decision Option Profile Constraints](profile-constraints.schema.md#httpsnsadobecomexperiencedecisioningprofileconstraints) |
| [https://ns.adobe.com/experience/decisioning/ranking](#httpsnsadobecomexperiencedecisioningranking) | Ranking Details | Optional | [Decision Option Ranking](ranking.schema.md#httpsnsadobecomexperiencedecisioningranking) |
| [https://ns.adobe.com/experience/decisioning/tags](#httpsnsadobecomexperiencedecisioningtags) | `string[]` | Optional | [Decisioning Option Tags](tags.schema.md#httpsnsadobecomexperiencedecisioningtags) |
| [xdm:frequencyCappingConstraints](#xdmfrequencycappingconstraints) | `object[]` | Optional | [Frequency Capping Constraints](frequency-capping-constraints.schema.md#xdmfrequencycappingconstraints) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/calendarConstraints
### Calendar Constraint Details

Calendar constraints decide if a decision option is valid given a date range. Outside that date range the option cannot be proposed.

`https://ns.adobe.com/experience/decisioning/calendarConstraints`
* is optional
* type: Calendar Constraint Details
* defined in [Decision Option Calendar Constraints](calendar-constraints.schema.md#httpsnsadobecomexperiencedecisioningcalendarconstraints)

### https://ns.adobe.com/experience/decisioning/calendarConstraints Type


* [Calendar Constraint Details](calendar-constraint-details.schema.md) – `https://ns.adobe.com/experience/decisioning/calendar-constraint-details`





## https://ns.adobe.com/experience/decisioning/contents
### Content Details

Content items to render the decision item in different contexts. A single decision option can have multiple contents variants. Content is information that is directed towards an audience for consumption in a (digital) experience. Content is delivered through channels into a particular placement.

`https://ns.adobe.com/experience/decisioning/contents`
* is optional
* type: Content Details

* defined in [Decision Option Contents](contents.schema.md#httpsnsadobecomexperiencedecisioningcontents)

### https://ns.adobe.com/experience/decisioning/contents Type


Array type: Content Details

All items must be of the type:
* [Content Details](content-details.schema.md) – `https://ns.adobe.com/experience/decisioning/content-details`








## https://ns.adobe.com/experience/decisioning/lifecycleStatus
### Lifecycle Status

Lifecycle status allows workflows to be conducted with an object. The status may affect where an object is visible or considered relevant. Status changes are driven by the clients or services that use the objects.

`https://ns.adobe.com/experience/decisioning/lifecycleStatus`
* is optional
* type: `enum`
* default: `"draft"`
* defined in [Decision Option Lifecycle Status](lifecycle-status.schema.md#httpsnsadobecomexperiencedecisioninglifecyclestatus)

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomexperiencedecisioninglifecyclestatus-known-values).

### https://ns.adobe.com/experience/decisioning/lifecycleStatus Known Values
| Value | Description |
|-------|-------------|
| `draft` | Draft |
| `approved` | Approved |
| `live` | Live |
| `completed` | Completed |
| `archived` | Archived |




## https://ns.adobe.com/experience/decisioning/profileConstraints
### Profile Constraint Details

The profile constraints decide if an option is eligible for this profile identity, at this moment, in this context. If the profile constraint does not need to consider values of each of the option, i.e. it is invariant of the options from the option selection, the profile constraint that evaluates to 'false' cancels out the entire option selection. On the other hand, a profile constraint rule that takes an option as a parameter is evaluated for each qualifiying option of the option selection.

`https://ns.adobe.com/experience/decisioning/profileConstraints`
* is optional
* type: Profile Constraint Details
* defined in [Decision Option Profile Constraints](profile-constraints.schema.md#httpsnsadobecomexperiencedecisioningprofileconstraints)

### https://ns.adobe.com/experience/decisioning/profileConstraints Type


* [Profile Constraint Details](profile-constraint-details.schema.md) – `https://ns.adobe.com/experience/decisioning/profile-constraint-details`





## https://ns.adobe.com/experience/decisioning/ranking
### Ranking Details

Rank (priority). Defines what is considered the "best action" given the context of the decision criterion. Among all the selected options that meet the eligibility constraint, the ranking order will decide the top (or top N) option(s) to be proposed.

`https://ns.adobe.com/experience/decisioning/ranking`
* is optional
* type: Ranking Details
* defined in [Decision Option Ranking](ranking.schema.md#httpsnsadobecomexperiencedecisioningranking)

### https://ns.adobe.com/experience/decisioning/ranking Type


* [Ranking Details](ranking-details.schema.md) – `https://ns.adobe.com/experience/decisioning/ranking-details`





## https://ns.adobe.com/experience/decisioning/tags
### Tags

The set of tags associated with this entity. The tags are used in filter expressions to constrain the overall inventory to a sub set (category).

`https://ns.adobe.com/experience/decisioning/tags`
* is optional
* type: `string[]`

* defined in [Decisioning Option Tags](tags.schema.md#httpsnsadobecomexperiencedecisioningtags)

### https://ns.adobe.com/experience/decisioning/tags Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))


  
An identifier of a tag object. The value is the @id of the tag that is referenced. See tag schema: https://ns.adobe.com/experience/decisioning/tag







## xdm:frequencyCappingConstraints


`xdm:frequencyCappingConstraints`
* is optional
* type: `object[]`

* defined in [Frequency Capping Constraints](frequency-capping-constraints.schema.md#xdmfrequencycappingconstraints)

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






