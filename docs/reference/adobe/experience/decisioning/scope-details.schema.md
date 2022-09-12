
# Decision Scope Details Schema

```
https://ns.adobe.com/experience/decisioning/scope-details
```

Decision scope details capture properties that existed to narrow the scope of the decision to a location (the "Where"), a the business activity (the "Why") and the provider of the decision ("By Whom"). The location (the "Where") is expressed with the concept of a Placement.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/scope-details.schema.json](adobe/experience/decisioning/scope-details.schema.json) |
## Schema Hierarchy

* Decision Scope Details `https://ns.adobe.com/experience/decisioning/scope-details`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Decision Placement Detail](placement-detail.schema.md) `https://ns.adobe.com/experience/decisioning/placement-detail`
  * [Decision Activity Details](activity-detail.schema.md) `https://ns.adobe.com/experience/decisioning/activity-detail`


## Decision Scope Details Examples

```json
{
  "xdm:id": "home-page-banner",
  "xdm:placement": {
    "xdm:id": "xcore:offer-placement:c652463157c2aa1",
    "repo:etag": "4",
    "xdm:name": "Home Page Banner"
  },
  "xdm:activity": {
    "xdm:id": "xcore:offer-activity:ebc48132c26ccfc",
    "repo:etag": "8",
    "xdm:name": "Spring 21 Campaign Web"
  },
  "xdm:strategies": [
    {
      "xdm:step": "eligibility",
      "xdm:strategyID": "xcore:eligibility-rule:e5244c22eff29e8",
      "xdm:algorithmID": "pql-rule",
      "xdm:trafficType": "contextual"
    },
    {
      "xdm:step": "ranking",
      "xdm:strategyID": "ranking-strategy:7251468357c2236",
      "xdm:algorithmID": "auto-optimize",
      "xdm:trafficType": "noncontextual"
    }
  ]
}
```

```json
{
  "xdm:id": "3cc33a7e-13ca-4b19-b25d-c816eff9a70a",
  "xdm:correlationID": "20c2587dcb1e85f52d070e12dd52e815",
  "xdm:strategies": [
    {
      "xdm:step": "experimentation",
      "xdm:strategyID": "16ASJZ2DWmusQjtxucYats",
      "xdm:treatmentID": "0"
    }
  ]
}
```


# Decision Scope Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:activity](#xdmactivity) | Decision Activity Details | Optional | Decision Scope Details (this schema) |
| [xdm:characteristics](#xdmcharacteristics) | `object` | Optional | Decision Scope Details (this schema) |
| [xdm:correlationID](#xdmcorrelationid) | `string` | Optional | Decision Scope Details (this schema) |
| [xdm:decisionProvider](#xdmdecisionprovider) | `string` | Optional | Decision Scope Details (this schema) |
| [xdm:experience](#xdmexperience) | complex | Optional | Decision Scope Details (this schema) |
| [xdm:id](#xdmid) | `string` | Optional | Decision Scope Details (this schema) |
| [xdm:interactionMeasurements](#xdminteractionmeasurements) | Interaction Measurement Definition | Optional | Decision Scope Details (this schema) |
| [xdm:placement](#xdmplacement) | Decision Placement Detail | Optional | Decision Scope Details (this schema) |
| [xdm:strategies](#xdmstrategies) | Decision Strategy Details | Optional | Decision Scope Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:activity
### Activity Detail for the Scope

The activity that was a requested or chosen for this decision scope. Some scopes will prescribe the exact activity (why and how) that makes the decision, other scopes will use a dynamic strategy determine which activity is used. Those scopes will list executionDetails for steps that were performed during decision-making.

`xdm:activity`
* is optional
* type: Decision Activity Details
* defined in this schema

### xdm:activity Type


* [Decision Activity Details](activity-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/activity-detail`





## xdm:characteristics
### Scope Details Characteristics

Additional properties or attributes belonging to this particular scope details.

`xdm:characteristics`
* is optional
* type: `object`
* defined in this schema

### xdm:characteristics Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:correlationID
### Correlation Identifier

The campaign, journey, or other object to which this activity can be correlated. This string will often be further classified in the reporting engine.

`xdm:correlationID`
* is optional
* type: `string`
* defined in this schema

### xdm:correlationID Type


`string`






## xdm:decisionProvider
### Decision Provider

The provider that was asked to make the decision. This dimension is used when mutliple services can make decisions for the same placement or activity.

`xdm:decisionProvider`
* is optional
* type: `string`
* defined in this schema

### xdm:decisionProvider Type


`string`






## xdm:experience
### Selected Experience Option

The experience that was selected when the decision was made.

`xdm:experience`
* is optional
* type: complex
* defined in this schema

### xdm:experience Type

Unknown type ``.

```json
{
  "properties": {
    "xdm:id": {
      "type": "string",
      "format": "uri-reference",
      "title": "Experience Identifier",
      "description": "A unique identifier for the decision option.",
      "meta:titleId": "scope-details##xdm:id##title##47581",
      "meta:descriptionId": "scope-details##xdm:id##description##32311"
    }
  },
  "title": "Selected Experience Option",
  "description": "The experience that was selected when the decision was made.",
  "meta:titleId": "scope-details##xdm:experience##title##59941",
  "meta:descriptionId": "scope-details##xdm:experience##description##86341",
  "simpletype": "complex"
}
```





## xdm:id
### Decision Scope Identifier

The unique identifier of the decision scope. For a given decision request a scope narrows the decision process along multiple dimensions. The scope is referencable by its identifier.

`xdm:id`
* is optional
* type: `string`
* defined in this schema

### xdm:id Type


`string`






## xdm:interactionMeasurements
### Interaction Measurements used in this Scope

The interaction measurements determine how inteaction event properties are interpreted (mapped) into outcomes for the propositions. Outcomes could be measured as the number of successes or failures or by a quantitative metric. An outcome can have a nominal value (e.g. success/failure), ordinal (rating value gathered) or numerical value (e.g. a measurable quantity).

`xdm:interactionMeasurements`
* is optional
* type: Interaction Measurement Definition

* defined in this schema

### xdm:interactionMeasurements Type


Array type: Interaction Measurement Definition

All items must be of the type:
* [Interaction Measurement Definition](interaction-measurement-details.schema.md) – `https://ns.adobe.com/experience/decisioning/interaction-measurement`








## xdm:placement
### Placement Detail for the Scope

The placement that was a requested as part of this decision scope. A scope will include a specification of the location or surface where the option will be presented. The placement narrows the options that can be proposed to those that can be represented or rendered in that place.

`xdm:placement`
* is optional
* type: Decision Placement Detail
* defined in this schema

### xdm:placement Type


* [Decision Placement Detail](placement-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/placement-detail`





## xdm:strategies
### Strategy Step Details

The steps that were executed when the decision was made.

`xdm:strategies`
* is optional
* type: Decision Strategy Details

* defined in this schema

### xdm:strategies Type


Array type: Decision Strategy Details

All items must be of the type:
* [Decision Strategy Details](strategy-details.schema.md) – `https://ns.adobe.com/experience/decisioning/strategy-details`







