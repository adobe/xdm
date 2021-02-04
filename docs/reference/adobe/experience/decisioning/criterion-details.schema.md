
# Decision Criterion Details Schema

```
https://ns.adobe.com/experience/decisioning/criterion-details
```

Decisioning criteria specify one or more constraints that evaluate to lists of "top N best" options in the context of a decision activity. Those options satisfy all constraints for a given placement and are ordered by some function.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/criterion-details.schema.json](adobe/experience/decisioning/criterion-details.schema.json) |
## Schema Hierarchy

* Decision Criterion Details `https://ns.adobe.com/experience/decisioning/criterion-details`
  * [Option Selection Details](option-selection-details.schema.md) `https://ns.adobe.com/experience/decisioning/option-selection-details`
  * [Profile Constraint Details](profile-constraint-details.schema.md) `https://ns.adobe.com/experience/decisioning/profile-constraint-details`
  * [Ranking Details](ranking-details.schema.md) `https://ns.adobe.com/experience/decisioning/ranking-details`


# Decision Criterion Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:description](#xdmdescription) | `string` | Optional | Decision Criterion Details (this schema) |
| [xdm:optionSelection](#xdmoptionselection) | Option Selection Details | Optional | Decision Criterion Details (this schema) |
| [xdm:placements](#xdmplacements) | `string[]` | Optional | Decision Criterion Details (this schema) |
| [xdm:profileConstraints](#xdmprofileconstraints) | Profile Constraint Details | Optional | Decision Criterion Details (this schema) |
| [xdm:ranking](#xdmranking) | Ranking Details | Optional | Decision Criterion Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:description
### Description

Criterion description. It is used to convey human readable intentions on how or why this criterion was constructed and how it is affecting the decision.

`xdm:description`
* is optional
* type: `string`
* defined in this schema

### xdm:description Type


`string`






## xdm:optionSelection
### Option Selection

The option selection defines the validity/applicability of options in this context.

`xdm:optionSelection`
* is optional
* type: Option Selection Details
* defined in this schema

### xdm:optionSelection Type


* [Option Selection Details](option-selection-details.schema.md) – `https://ns.adobe.com/experience/decisioning/option-selection-details`





## xdm:placements
### Placement Restrictions

The placement constraint states that this criterion is only applicable for the listed placements. Only when the targeted placement is in the `xdm:placements` list is the option selection considered. Otherwise the entire decision criteria is skipped. When the 'xdm:placements' list is omitted or empty, the criterion is considered for any targeted placement. The placements listed here impose implicit criteria for the option selection. An option to be considered must have a representation for the targeted placement.

`xdm:placements`
* is optional
* type: `string[]`
* at least `1` items in the array
* defined in this schema

### xdm:placements Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))


  
A reference to a placement entity. The value is the URI (@id) of the placement that is referenced. See schema https://ns.adobe.com/experience/decisioning/placement







## xdm:profileConstraints
### Profile Constraint

The profile constraint decides if an option selection is eligible for this profile identity at this moment, in this context. If the profile constraint does not need to consider values of each of the option, i.e. it is invariant of the options from the option selection, the profile constraint that evaluates to 'false' cancels out the entire option selection. On the other hand, a profile constraint rule that takes an option as a parameter is evaluated for each qualifiying option of the option selection.

`xdm:profileConstraints`
* is optional
* type: Profile Constraint Details
* defined in this schema

### xdm:profileConstraints Type


* [Profile Constraint Details](profile-constraint-details.schema.md) – `https://ns.adobe.com/experience/decisioning/profile-constraint-details`





## xdm:ranking
### Ranking Details

Rank (priority). Defines how the "best option" is determined given the context of the decision criterion. Among all the selected options that meet the profile constraints, the ranking will decide the top (or top N) option(s) to be proposed.

`xdm:ranking`
* is optional
* type: Ranking Details
* defined in this schema

### xdm:ranking Type


* [Ranking Details](ranking-details.schema.md) – `https://ns.adobe.com/experience/decisioning/ranking-details`




