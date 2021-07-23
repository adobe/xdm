
# Experience Event - Proposition Reference Schema

```
https://ns.adobe.com/experience/decisioning/proposition
```

A decision proposition reference is used to link an experience event that is a response to a particular proposition event. For a given decision request and profile identity the response of the request is a unique proposition. If a decision is requested again for the same profile and the output happens to be the same options, it is still considered a different proposition with a unique ID. Multiple scopes and item lists can be returned with the same proposition.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/proposition.schema.json](adobe/experience/decisioning/proposition.schema.json) |
## Schema Hierarchy

* Experience Event - Proposition Reference `https://ns.adobe.com/experience/decisioning/proposition`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`


## Experience Event - Proposition Reference Example
```json
{
  "xdm:identityMap": {
    "ECID": [
      {
        "xdm:id": "68519882713298129995549973016107434638",
        "xdm:primary": true
      }
    ],
    "CPGN": [
      {
        "xdm:id": "https://data.adobe.io/entities/identity/1234567",
        "xdm:primary": true
      }
    ]
  },
  "https://ns.adobe.com/experience/decisioning/propositionID": "3cc33a7e-13ca-4b19-b25d-c816eff9a70a"
}
```

# Experience Event - Proposition Reference Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/propositionID](#httpsnsadobecomexperiencedecisioningpropositionid) | `string` | Optional | Experience Event - Proposition Reference (this schema) |
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md#xdmidentitymap) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/propositionID
### Proposition Identifier

A unique identifier for the proposition event referenced by another "XDM ExperienceEvent". It is the expectation that applications use this "propositionID" in every experience event that was influenced by the set of propositions. An individual profile's proposition-response history is maintained with these proposition identifiers.

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
* defined in [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





