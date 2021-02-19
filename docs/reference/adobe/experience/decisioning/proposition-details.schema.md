
# Decision Event - Proposition Details Schema

```
https://ns.adobe.com/experience/decisioning/proposition-details
```

Decision proposition is used to capture the results of a decisioning process.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/decisioning/proposition-details.schema.json](adobe/experience/decisioning/proposition-details.schema.json) |
## Schema Hierarchy

* Decision Event - Proposition Details `https://ns.adobe.com/experience/decisioning/proposition-details`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


# Decision Event - Proposition Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/experienceID](#httpsnsadobecomexperiencedecisioningexperienceid) | `string` | Optional | Decision Event - Proposition Details (this schema) |
| [https://ns.adobe.com/experience/decisioning/propositionContentKey](#httpsnsadobecomexperiencedecisioningpropositioncontentkey) | `string` | Optional | Decision Event - Proposition Details (this schema) |
| [https://ns.adobe.com/experience/decisioning/propositionDetails](#httpsnsadobecomexperiencedecisioningpropositiondetails) | Decision Proposition Details | Optional | Decision Event - Proposition Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/experienceID
### Experience Reference

Unique identifier for the proposition's content. Recipients of propositions with the same value will receive the same content experience in the targeted placements. Moreover, propositions with the same value to the same user mean that the content of the propositions has not changed. Propositions with values indicate that the decision selections are different and a different experience resulted from the decision. Note that adding a placement to the decision scope always changes the experience value.

`https://ns.adobe.com/experience/decisioning/experienceID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/experienceID Type


`string`






## https://ns.adobe.com/experience/decisioning/propositionContentKey
### DEPRECATED: Proposition Content Key

DEPRECATED: Digest or unique hash key (generated automatically) for the proposition content. Recipients of propositions with the same value will receive the same content selections in the targeted placements. Moreover, propositions with the same value to the same user mean that the content of the propositions has not changed. Propositions with different digests or hash values indicate that the decision selections are different. Note that adding a placement to the decision always change digest value.

`https://ns.adobe.com/experience/decisioning/propositionContentKey`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/propositionContentKey Type


`string`






## https://ns.adobe.com/experience/decisioning/propositionDetails
### Proposition Details

Details about the results of the decision. An array providing the output of a single decision event, one proposition per activity parameter in the request.

`https://ns.adobe.com/experience/decisioning/propositionDetails`
* is optional
* type: Decision Proposition Details

* defined in this schema

### https://ns.adobe.com/experience/decisioning/propositionDetails Type


Array type: Decision Proposition Details

All items must be of the type:
* [Decision Proposition Details](proposition-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/proposition-detail`







