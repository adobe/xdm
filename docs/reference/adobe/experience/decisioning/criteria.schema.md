
# Decision Activity Criteria Schema

```
https://ns.adobe.com/experience/decisioning/criteria
```

One or more constraints that evaluate to lists of "top N best" options in the context of a decision activity. Those options satisfy all constraints for a given placement and are ordered by some function.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/criteria.schema.json](adobe/experience/decisioning/criteria.schema.json) |

# Decision Activity Criteria Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/criteria](#httpsnsadobecomexperiencedecisioningcriteria) | Decision Criterion Details | Optional | Decision Activity Criteria (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/criteria
### Criteria

Defines a set of decision criteria where each contains a set of constraints.

`https://ns.adobe.com/experience/decisioning/criteria`
* is optional
* type: Decision Criterion Details

* defined in this schema

### https://ns.adobe.com/experience/decisioning/criteria Type


Array type: Decision Criterion Details

All items must be of the type:
* [Decision Criterion Details](criterion-details.schema.md) – `https://ns.adobe.com/experience/decisioning/criterion-details`







