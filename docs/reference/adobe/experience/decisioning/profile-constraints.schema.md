
# Decision Option Profile Constraints Schema

```
https://ns.adobe.com/experience/decisioning/profile-constraints
```

Profile constraints define the policies that ensure a particular decision option qualifies, is relevant and is suitable for a particular profile. Such policy rules determine the eligibility, applicability and suitability of the option. Usually the option is tested against a user profile and the events that were observed for that profile, but the qualification rule can consider any context data as long as it can be described by an XDM schema.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/profile-constraints.schema.json](adobe/experience/decisioning/profile-constraints.schema.json) |
## Schema Hierarchy

* Decision Option Profile Constraints `https://ns.adobe.com/experience/decisioning/profile-constraints`
  * [Profile Constraint Details](profile-constraint-details.schema.md) `https://ns.adobe.com/experience/decisioning/profile-constraint-details`


## Decision Option Profile Constraints Examples

```json
{
  "https://ns.adobe.com/experience/decisioning/profileConstraints": {
    "https://ns.adobe.com/experience/decisioning/profileConstraintType": "rules",
    "https://ns.adobe.com/experience/decisioning/eligibilityRule": "xcore:eligibility-rule:e5244c22eff29e8"
  }
}
```

```json
{
  "https://ns.adobe.com/experience/decisioning/profileConstraints": {
    "https://ns.adobe.com/experience/decisioning/profileConstraintType": "none"
  }
}
```

```json
{
  "https://ns.adobe.com/experience/decisioning/profileConstraints": {
    "https://ns.adobe.com/experience/decisioning/profileConstraintType": "anySegments",
    "https://ns.adobe.com/experience/decisioning/segmentIdentities": [
      {
        "@id": "https://data.adobe.io/entities/segmentIdentity/id123",
        "xdm:namespace": {
          "xdm:code": "AA12345"
        }
      },
      {
        "@id": "https://data.adobe.io/entities/segmentIdentity/id456",
        "xdm:namespace": {
          "xdm:code": "AA12345"
        }
      }
    ]
  }
}
```


# Decision Option Profile Constraints Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/profileConstraints](#httpsnsadobecomexperiencedecisioningprofileconstraints) | Profile Constraint Details | Optional | Decision Option Profile Constraints (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/profileConstraints
### Profile Constraint Details

The profile constraints decide if an option is eligible for this profile identity, at this moment, in this context. If the profile constraint does not need to consider values of each of the option, i.e. it is invariant of the options from the option selection, the profile constraint that evaluates to 'false' cancels out the entire option selection. On the other hand, a profile constraint rule that takes an option as a parameter is evaluated for each qualifiying option of the option selection.

`https://ns.adobe.com/experience/decisioning/profileConstraints`
* is optional
* type: Profile Constraint Details
* defined in this schema

### https://ns.adobe.com/experience/decisioning/profileConstraints Type


* [Profile Constraint Details](profile-constraint-details.schema.md) – `https://ns.adobe.com/experience/decisioning/profile-constraint-details`




