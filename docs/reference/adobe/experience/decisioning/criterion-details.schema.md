
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


## Decision Criterion Details Examples

```json
{
  "https://ns.adobe.com/experience/decisioning/description": "S1:",
  "https://ns.adobe.com/experience/decisioning/placements": [
    "xcore:offer-placement:6111463157c2221"
  ],
  "https://ns.adobe.com/experience/decisioning/optionSelection": {
    "https://ns.adobe.com/experience/decisioning/description": "Charge_Elite_30 Offer",
    "https://ns.adobe.com/experience/decisioning/options": [
      "xcore:offer:f6998eb62ed6f15"
    ]
  },
  "https://ns.adobe.com/experience/decisioning/profileConstraints": {
    "https://ns.adobe.com/experience/decisioning/description": "Tender Group in (ClassicKC, MVC) AND Pilot = Y AND Discount(Reserve1) = 30",
    "https://ns.adobe.com/experience/decisioning/eligibilityRule": "xcore:eligibility-rule:f65212b6b3c0b01"
  },
  "https://ns.adobe.com/experience/decisioning/ranking": {
    "https://ns.adobe.com/experience/decisioning/priority": 8
  }
}
```

```json
{
  "https://ns.adobe.com/experience/decisioning/placements": [
    "xcore:offer-placement:c652463157c2aa1"
  ],
  "https://ns.adobe.com/experience/decisioning/optionSelection": {
    "https://ns.adobe.com/experience/decisioning/filter": "xcore:offer-filter:f6998eb62ed6f15"
  },
  "https://ns.adobe.com/experience/decisioning/profileConstraints": {
    "https://ns.adobe.com/experience/decisioning/description": "Pilot = Y",
    "https://ns.adobe.com/experience/decisioning/eligibilityRule": "xcore:eligibility-rule:e5244c22eff29e8"
  },
  "https://ns.adobe.com/experience/decisioning/ranking": {
    "https://ns.adobe.com/experience/decisioning/priority": 0,
    "https://ns.adobe.com/experience/decisioning/order": {
      "https://ns.adobe.com/experience/decisioning/function": "ml:function:b437a2403cf10e9"
    }
  }
}
```


# Decision Criterion Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/description](#httpsnsadobecomexperiencedecisioningdescription) | `string` | Optional | Decision Criterion Details (this schema) |
| [https://ns.adobe.com/experience/decisioning/optionSelection](#httpsnsadobecomexperiencedecisioningoptionselection) | Option Selection Details | Optional | Decision Criterion Details (this schema) |
| [https://ns.adobe.com/experience/decisioning/placements](#httpsnsadobecomexperiencedecisioningplacements) | `string[]` | Optional | Decision Criterion Details (this schema) |
| [https://ns.adobe.com/experience/decisioning/profileConstraints](#httpsnsadobecomexperiencedecisioningprofileconstraints) | Profile Constraint Details | Optional | Decision Criterion Details (this schema) |
| [https://ns.adobe.com/experience/decisioning/ranking](#httpsnsadobecomexperiencedecisioningranking) | Ranking Details | Optional | Decision Criterion Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/description
### Description

Criterion description. It is used to convey human readable intentions on how or why this criterion was constructed and how it is affecting the decision.

`https://ns.adobe.com/experience/decisioning/description`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/description Type


`string`






## https://ns.adobe.com/experience/decisioning/optionSelection
### Option Selection

The option selection defines the validity/applicability of options in this context.

`https://ns.adobe.com/experience/decisioning/optionSelection`
* is optional
* type: Option Selection Details
* defined in this schema

### https://ns.adobe.com/experience/decisioning/optionSelection Type


* [Option Selection Details](option-selection-details.schema.md) – `https://ns.adobe.com/experience/decisioning/option-selection-details`





## https://ns.adobe.com/experience/decisioning/placements
### Placement Restrictions

The placement constraint states that this criterion is only applicable for the listed placements. Only when the targeted placement is in the `xdm:placements` list is the option selection considered. Otherwise the entire decision criteria is skipped. When the 'xdm:placements' list is omitted or empty, the criterion is considered for any targeted placement. The placements listed here impose implicit criteria for the option selection. An option to be considered must have a representation for the targeted placement.

`https://ns.adobe.com/experience/decisioning/placements`
* is optional
* type: `string[]`
* at least `1` items in the array
* defined in this schema

### https://ns.adobe.com/experience/decisioning/placements Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))


  
A reference to a placement entity. The value is the URI (@id) of the placement that is referenced. See schema https://ns.adobe.com/experience/decisioning/placement







## https://ns.adobe.com/experience/decisioning/profileConstraints
### Profile Constraint

The profile constraint decides if an option selection is eligible for this profile identity at this moment, in this context. If the profile constraint does not need to consider values of each of the option, i.e. it is invariant of the options from the option selection, the profile constraint that evaluates to 'false' cancels out the entire option selection. On the other hand, a profile constraint rule that takes an option as a parameter is evaluated for each qualifiying option of the option selection.

`https://ns.adobe.com/experience/decisioning/profileConstraints`
* is optional
* type: Profile Constraint Details
* defined in this schema

### https://ns.adobe.com/experience/decisioning/profileConstraints Type


* [Profile Constraint Details](profile-constraint-details.schema.md) – `https://ns.adobe.com/experience/decisioning/profile-constraint-details`





## https://ns.adobe.com/experience/decisioning/ranking
### Ranking Details

Rank (priority). Defines how the "best option" is determined given the context of the decision criterion. Among all the selected options that meet the profile constraints, the ranking will decide the top (or top N) option(s) to be proposed.

`https://ns.adobe.com/experience/decisioning/ranking`
* is optional
* type: Ranking Details
* defined in this schema

### https://ns.adobe.com/experience/decisioning/ranking Type


* [Ranking Details](ranking-details.schema.md) – `https://ns.adobe.com/experience/decisioning/ranking-details`




