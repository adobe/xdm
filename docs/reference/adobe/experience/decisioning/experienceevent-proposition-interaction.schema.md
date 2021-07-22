
# Experience Event - Proposition Interactions Schema

```
https://ns.adobe.com/experience/decisioning/proposition-interaction
```

Captures information regarding an action taken for one or more prior propositions. Each decision has a unique ID that is sent back with an experience event. The decision is assumed to have contributed to the experience event and is now associated with it.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/experienceevent-proposition-interaction.schema.json](adobe/experience/decisioning/experienceevent-proposition-interaction.schema.json) |
## Schema Hierarchy

* Experience Event - Proposition Interactions `https://ns.adobe.com/experience/decisioning/proposition-interaction`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`


## Experience Event - Proposition Interactions Examples

```json
{
  "https://ns.adobe.com/experience/decisioning/propositions": [
    {
      "xdm:items": [
        {
          "xdm:id": "experience1"
        }
      ]
    },
    {
      "xdm:items": [
        {
          "xdm:id": "personalized-offer:f67bab756ed6ee4"
        }
      ]
    }
  ]
}
```

```json
{
  "@id": "a7864a96-1eac-4934-ab44-54ad037b4f2b",
  "xdm:timestamp": "2020-09-26T15:52:25+00:00",
  "xdm:eventType": "web.webinteraction.contentDisplay",
  "https://ns.adobe.com/experience/decisioning/propositions": [
    {
      "xdm:items": [
        {
          "xdm:id": "item1"
        },
        {
          "xdm:id": "item2"
        }
      ],
      "xdm:id": "AT:eyJhY3Rpdml0eUlkIjoiMzg0NDU5IiwiZXhwZXJpZW5jZUlkIjoiMSJ9",
      "xdm:scope": "home",
      "xdm:scopeDetails": {
        "xdm:activity": {
          "xdm:id": "384459",
          "repo:etag": "8"
        },
        "xdm:strategies": [
          {
            "xdm:step": "targeting",
            "xdm:algorithmID": "randomuniform",
            "xdm:trafficType": "noncontextual"
          }
        ]
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
      "xdm:id": "3cc33a7e-13ca-4b19-b25d-c816eff9a70a",
      "xdm:scope": "scope:12cfc3fa94281acb"
    }
  ]
}
```


# Experience Event - Proposition Interactions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/propositions](#httpsnsadobecomexperiencedecisioningpropositions) | Proposition Interaction Details | Optional | Experience Event - Proposition Interactions (this schema) |
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md#xdmidentitymap) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/propositions
### Involved Propositions

An array of decision propositions that contributed to the experience event. The experience event is attributed (at least partially) to those prior decisions/propositions. An individual profile's proposition-response history is maintained with these decision identifiers.

`https://ns.adobe.com/experience/decisioning/propositions`
* is optional
* type: Proposition Interaction Details

* defined in this schema

### https://ns.adobe.com/experience/decisioning/propositions Type


Array type: Proposition Interaction Details

All items must be of the type:
* [Proposition Interaction Details](proposition-interaction-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/proposition-interaction-details`








## xdm:identityMap


`xdm:identityMap`
* is optional
* type: `object`
* defined in [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





