
# Profile Constraint Details Schema

```
https://ns.adobe.com/experience/decisioning/profile-constraint-details
```

Profile constraints define the policies that ensure a particular decision option qualifies, is relevant and is suitable for a particular profile. Such policy rules determine the eligibility, applicability and suitability of the option. Usually the option is tested against a user profile and the events that were observed for that profile, but the qualification rule can consider any context data as long as it can be described by an XDM schema.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/profile-constraint-details.schema.json](adobe/experience/decisioning/profile-constraint-details.schema.json) |

## Profile Constraint Details Examples

```json
{
  "https://ns.adobe.com/experience/decisioning/profileConstraintType": "rules",
  "https://ns.adobe.com/experience/decisioning/eligibilityRule": "xcore:eligibility-rule:e5244c22eff29e8"
}
```

```json
{
  "https://ns.adobe.com/experience/decisioning/profileConstraintType": "none"
}
```

```json
{
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
```


# Profile Constraint Details Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:description](#xdmdescription) | `string` | Optional |  | Profile Constraint Details (this schema) |
| [xdm:eligibilityRule](#xdmeligibilityrule) | `string` | Optional |  | Profile Constraint Details (this schema) |
| [xdm:profileConstraintType](#xdmprofileconstrainttype) | `enum` | Optional | `"none"` | Profile Constraint Details (this schema) |
| [xdm:segmentIdentities](#xdmsegmentidentities) | Segment identity | Optional |  | Profile Constraint Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:description
### Description

Profile constraint description. It is used to convey human readable intentions on how or why this profile constraint was constructed and/or what option will be included or excluded by it.

`xdm:description`
* is optional
* type: `string`
* defined in this schema

### xdm:description Type


`string`






## xdm:eligibilityRule
### Eligibility Rule

A reference to a decision rule that evaluates to true or false for a given profile and/or other given contextual XDM objects. The rule is used to decide if the option qualifies for a given profile. The value is the URI (@id) of the decision rule that is referenced. See schema https://ns.adobe.com/experience/decisioning/rule

`xdm:eligibilityRule`
* is optional
* type: `string`
* defined in this schema

### xdm:eligibilityRule Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:profileConstraintType
### Profile Constraint Type

Determines if any constraints are currently set and how the contraints are expressed. It could be though a rule or through one or more segment memberships.

`xdm:profileConstraintType`
* is optional
* type: `enum`
* default: `"none"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmprofileconstrainttype-known-values).

### xdm:profileConstraintType Known Values
| Value | Description |
|-------|-------------|
| `none` |  |
| `rules` |  |
| `anySegments` |  |
| `allSegments` |  |




## xdm:segmentIdentities
### Segment Identifiers

Identifiers of the segments

`xdm:segmentIdentities`
* is optional
* type: Segment identity

* defined in this schema

### xdm:segmentIdentities Type


Array type: Segment identity

All items must be of the type:
* [Segment identity](../../../datatypes/segmentidentity.schema.md) – `https://ns.adobe.com/xdm/context/segmentidentity`







