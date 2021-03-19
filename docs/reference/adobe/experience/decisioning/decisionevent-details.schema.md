
# Decision Event Details Schema

```
https://ns.adobe.com/experience/decisioning/decisionevent-details
```

Decision Event Details is used to capture additional information of a decisioning process. The details contain properties that are important to record but are not the proposed options. For instance the experience that is composed from the proposition or information about how the decision was made. 

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/decisioning/decisionevent-details.schema.json](adobe/experience/decisioning/decisionevent-details.schema.json) |
## Schema Hierarchy

* Decision Event Details `https://ns.adobe.com/experience/decisioning/decisionevent-details`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


# Decision Event Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:algorithmID](#xdmalgorithmid) | `string` | Optional | Decision Event Details (this schema) |
| [xdm:experienceID](#xdmexperienceid) | `string` | Optional | Decision Event Details (this schema) |
| [xdm:trafficType](#xdmtraffictype) | `string` | Optional | Decision Event Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:algorithmID
### Algorithm Reference

Unique identifier for the algorithm used to make the decision, if applicable.

`xdm:algorithmID`
* is optional
* type: `string`
* defined in this schema

### xdm:algorithmID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:experienceID
### Experience Reference

Unique identifier for the proposition's content. Recipients of propositions with the same value will receive the same content experience in the targeted placements. Moreover, propositions with the same value to the same user mean that the content of the propositions has not changed. Propositions with values indicate that the decision selections are different and a different experience resulted from the decision. Note that adding a placement to the decision scope always changes the experience value.

`xdm:experienceID`
* is optional
* type: `string`
* defined in this schema

### xdm:experienceID Type


`string`






## xdm:trafficType
### Traffic Type

The class of algorithm/policy that was used to serve this decision. Contextual indicates that event and profile context were used in deciding what to show. Noncontextual means that the decision was not made based on any contextual data. Random indicates that the decision was made by some pseudo-random process.

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



