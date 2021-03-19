
# Decision Strategy Details Schema

```
https://ns.adobe.com/experience/decisioning/strategy-details
```

Decision strategy details capture data values for a particular step that will be or was taken during the decision process.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/strategy-details.schema.json](adobe/experience/decisioning/strategy-details.schema.json) |
## Schema Hierarchy

* Decision Strategy Details `https://ns.adobe.com/experience/decisioning/strategy-details`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


# Decision Strategy Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:algorithmID](#xdmalgorithmid) | `string` | Optional | Decision Strategy Details (this schema) |
| [xdm:step](#xdmstep) | `string` | Optional | Decision Strategy Details (this schema) |
| [xdm:strategyID](#xdmstrategyid) | `string` | Optional | Decision Strategy Details (this schema) |
| [xdm:trafficType](#xdmtraffictype) | `string` | Optional | Decision Strategy Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:algorithmID
### Algorithm Identifier

Unique identifier for the algorithm used to make the decision, if applicable.

`xdm:algorithmID`
* is optional
* type: `string`
* defined in this schema

### xdm:algorithmID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:step
### Execution Step

Indicator for the step type in the overall decision strategy

`xdm:step`
* is optional
* type: `string`
* defined in this schema

### xdm:step Type


`string`



### xdm:step Known Values
| Value | Description |
|-------|-------------|
| `profile` | Profile Merge Policy |
| `eligibility` | Eligibility Policy |
| `suppression` | Suppression Policy |
| `ranking` | Ranking Function |
| `capping` | Capping Counter |




## xdm:strategyID
### Step&#39;s Strategy Identifier

The unique identifier of the step's strategy. When executing a decision various steps are performed. Each step is performed according to a strategy or policy and the chosen idetifier is recorded to measure its performance. This identifier could be the URI of a profile merge policy, an eligibility rule, a ML ranking strategy, a function that calculates the rank, a capping threshold or any object that signficantly contributes to the decision result.

`xdm:strategyID`
* is optional
* type: `string`
* defined in this schema

### xdm:strategyID Type


`string`






## xdm:trafficType
### Traffic Type

The class of algorithm/policy that was used to compute this decision. 'Contextual Traffic' indicates that event and profile context were used in deciding what to show. Noncontextual means that the decision was not made based on any contextual data. Random indicates that the decision was made by some pseudo-random process.

`xdm:trafficType`
* is optional
* type: `string`
* defined in this schema

### xdm:trafficType Type


`string`



### xdm:trafficType Known Values
| Value | Description |
|-------|-------------|
| `random` | Random Traffic |
| `contextual` | Contextual Traffic |
| `noncontextual` | Non-Contextual Traffic |



