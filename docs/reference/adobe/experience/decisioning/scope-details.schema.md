
# Decision Scope Details Schema

```
https://ns.adobe.com/experience/decisioning/scope-details
```

Decision scope details capture properties that existed to narrow the scope of the decision to a location (the "Where"), a the business activity (the "How") and the provider of the decision ("By Whom"). The location is expressed with the concept of a Placement.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/scope-details.schema.json](adobe/experience/decisioning/scope-details.schema.json) |
## Schema Hierarchy

* Decision Scope Details `https://ns.adobe.com/experience/decisioning/scope-details`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Decision Placement Detail](placement-detail.schema.md) `https://ns.adobe.com/experience/decisioning/placement-detail`
  * [Decision Activity Detail](activity-detail.schema.md) `https://ns.adobe.com/experience/decisioning/activity-detail`


# Decision Scope Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:activity](#xdmactivity) | Decision Activity Detail | Optional | Decision Scope Details (this schema) |
| [xdm:decisionProvider](#xdmdecisionprovider) | `string` | Optional | Decision Scope Details (this schema) |
| [xdm:id](#xdmid) | `string` | Optional | Decision Scope Details (this schema) |
| [xdm:placement](#xdmplacement) | Decision Placement Detail | Optional | Decision Scope Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:activity
### Activity Detail for the Scope

The activity that was a requested or chosen for this decision scope. Some scopes will prescribe the exact activity or mechanism (how) that makes the decision, other .

`xdm:activity`
* is optional
* type: Decision Activity Detail
* defined in this schema

### xdm:activity Type


* [Decision Activity Detail](activity-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/activity-detail`





## xdm:decisionProvider
### Decision Provider

The provider that was asked to make the decision. This dimension is used when mutliple services can make decisions for the same placement or activity.

`xdm:decisionProvider`
* is optional
* type: `string`
* defined in this schema

### xdm:decisionProvider Type


`string`






## xdm:id
### Decision Scope Identifier

The unique identifier of the decision scope. For a given decision request a scope narrows the decision process along multiple dimensions. The scope is referencable by its identifier.

`xdm:id`
* is optional
* type: `string`
* defined in this schema

### xdm:id Type


`string`






## xdm:placement
### Placement Detail for the Scope

The placement that was a requested as part of this decision scope. A scope will include a specification of the location or surface where the option will be presented. The placement narrows the options that can be proposed to those that can be represented or rendered in that place.

`xdm:placement`
* is optional
* type: Decision Placement Detail
* defined in this schema

### xdm:placement Type


* [Decision Placement Detail](placement-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/placement-detail`




