
# Experience Event - Proposition Interaction Schema

```
https://ns.adobe.com/experience/decisioning/proposition-interaction
```

This mixin is used capture information regarding an interaction, response or reaction to one or more prior propositions. Each decision output has a unique ID that can be sent back with an experience event. The decision is assumed to have contributed to the experience event and is now associated with it.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/decisioning/experienceevent-proposition-interaction.schema.json](adobe/experience/decisioning/experienceevent-proposition-interaction.schema.json) |
## Schema Hierarchy

* Experience Event - Proposition Interaction `https://ns.adobe.com/experience/decisioning/proposition-interaction`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [IdentityMap](../../../mixins/shared/identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`


## Experience Event - Proposition Interaction Examples

```json
{
  "@id": "a7864a96-1eac-4934-ab44-54ad037b4f2b",
  "xdm:timestamp": "2020-09-26T15:52:25+00:00",
  "xdm:eventType": "web.webinteraction.contentDisplay",
  "https://ns.adobe.com/experience/decisioning/propositions": [
    {
      "xdm:items": [
        {
          "xdm:id": "experience1"
        }
      ],
      "xdm:decisionEventID": "TNT:activity1:experience1:1597208433",
      "xdm:decisionEventDetails": {
        "xdm:experienceID": "experience1"
      },
      "xdm:decisionScope": "__view__",
      "xdm:decisionScopeDetails": {
        "xdm:id": "__view__",
        "xdm:decisionProvider": "Target Premium",
        "xdm:placement": {
          "xdm:id": "mbox1"
        },
        "xdm:activity": {
          "xdm:id": "actitivty1"
        }
      }
    },
    {
      "xdm:items": [
        {
          "xdm:id": "personalized-offer:f67bab756ed6ee4",
          "xdm:data": {
            "xdm:id": "urn:aaid:sc:US:6dc33479-13ca-4b19-b25d-c805eff8a69e",
            "xdm:content": "30% off on your next reservation"
          }
        }
      ],
      "xdm:decisionEventID": "3cc33a7e-13ca-4b19-b25d-c816eff9a70a",
      "xdm:decisionEventDetails": {
        "xdm:experienceID": "8A0FBA334DA23A64AD9D748E58533857B6B5556AB28328DCCC04DAE6E9F35430"
      },
      "xdm:decisionScope": "scope:12cfc3fa94281acb",
      "xdm:decisionScopeDetails": {
        "xdm:id": "scope:12cfc3fa94281acb",
        "xdm:decisionProvider": "AEP Decisioning",
        "xdm:placement": {
          "xdm:id": "offer-placement:1175009612b0100c"
        },
        "xdm:activity": {
          "xdm:id": "offer-activity:11cfb1fa93381aca"
        }
      }
    }
  ]
}
```

```json
{
  "https://ns.adobe.com/experience/decisioning/propositions": [
    {
      "xdm:items": [
        {
          "xdm:id": "experience1"
        }
      ],
      "xdm:decisionEventID": "TNT:activity1:experience1:1597208433",
      "xdm:decisionScope": "__view__"
    },
    {
      "xdm:items": [
        {
          "xdm:id": "personalized-offer:f67bab756ed6ee4"
        }
      ],
      "xdm:decisionEventID": "3cc33a7e-13ca-4b19-b25d-c816eff9a70a",
      "xdm:decisionScope": "scope:12cfc3fa94281acb"
    }
  ]
}
```


# Experience Event - Proposition Interaction Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/propositions](#httpsnsadobecomexperiencedecisioningpropositions) | Experience Event - Proposition Interaction Detail | Optional | Experience Event - Proposition Interaction (this schema) |
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](../../../mixins/shared/identitymap.schema.md#xdmidentitymap) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/propositions
### Involved Propositions

An array of decision propositions that contributed to the experience event. The experience event is attributed (at least partially) to those prior decisions/propositions. An individual profile's proposition-response history is maintained with these decision identifiers.

`https://ns.adobe.com/experience/decisioning/propositions`
* is optional
* type: Experience Event - Proposition Interaction Detail

* defined in this schema

### https://ns.adobe.com/experience/decisioning/propositions Type


Array type: Experience Event - Proposition Interaction Detail

All items must be of the type:
* [Experience Event - Proposition Interaction Detail](proposition-interaction-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/proposition-interaction-details`








## xdm:identityMap


`xdm:identityMap`
* is optional
* type: `object`
* defined in [IdentityMap](../../../mixins/shared/identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





