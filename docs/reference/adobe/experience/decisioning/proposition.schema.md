
# Decision Proposition Reference Schema

```
https://ns.adobe.com/experience/decisioning/proposition
```

A decision proposition reference is used to link an experience event that is a response to a particular proposition event.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/decisioning/proposition.schema.json](adobe/experience/decisioning/proposition.schema.json) |
## Schema Hierarchy

* Decision Proposition Reference `https://ns.adobe.com/experience/decisioning/proposition`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [IdentityMap](../../../mixins/shared/identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`


# Decision Proposition Reference Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/propositionID](#httpsnsadobecomexperiencedecisioningpropositionid) | `string` | Optional | Decision Proposition Reference (this schema) |
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](../../../mixins/shared/identitymap.schema.md#xdmidentitymap) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/propositionID
### Proposition Identifier

A unique identifier for the proposition event referenced by an "XDM ExperienceEvent". It is the expectation that applications use this "propositionID" in every experience event that was influenced by the set of propositions. An individual profile's proposition-response history is maintained with these proposition identifiers.

`https://ns.adobe.com/experience/decisioning/propositionID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/propositionID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:identityMap


`xdm:identityMap`
* is optional
* type: `object`
* defined in [IdentityMap](../../../mixins/shared/identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





