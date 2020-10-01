
# Decision Proposition Detail Schema

```
https://ns.adobe.com/experience/decisioning/proposition-detail
```

A decision proposition detail is used to capture the output of a decisioning activity. Propositions are enriched with the observed metrics that applied to the selected options at the time the decision was made.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/decisioning/proposition-detail.schema.json](adobe/experience/decisioning/proposition-detail.schema.json) |
## Schema Hierarchy

* Decision Proposition Detail `https://ns.adobe.com/experience/decisioning/proposition-detail`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Decision Activity Snapshot](activity-detail.schema.md) `https://ns.adobe.com/experience/decisioning/activity-detail`
  * [Decision Placement Detail](placement-detail.schema.md) `https://ns.adobe.com/experience/decisioning/placement-detail`
  * [Decision Option Detail](option-detail.schema.md) `https://ns.adobe.com/experience/decisioning/option-detail`


## Decision Proposition Detail Examples

```json
{
  "xdm:activity": {
    "xdm:id": "xcore:offer-activity:ebc48132c26ccfc",
    "xdm:name": "Online College Counseler",
    "xdm:startDate": "2018-10-13T05:59:18.914Z",
    "xdm:endDate": "2018-12-27T05:59:18.914Z",
    "xdm:fallback": "xcore:fallback-offer:e91ce7243fd8c2a"
  },
  "xdm:placement": {
    "xdm:id": "xcore:offer-placement:c652463157c2aa1",
    "xdm:name": "Top Banner",
    "xdm:channel": "https://ns.adobe.com/xdm/channels/email"
  },
  "xdm:selections": [
    {
      "xdm:id": "xcore:personalized-offer:e91ee850a0bb7d9",
      "xdm:name": "Introduction to machine learning",
      "xdm:characteristics": {
        "duration": "14",
        "level": "intermediate",
        "format": "Syllable"
      },
      "https://ns.adobe.com/experience/decisioning/propositionsTotal": {
        "xdm:value": 4948
      },
      "https://ns.adobe.com/experience/decisioning/propositionsProfile": {
        "xdm:value": 2
      }
    },
    {
      "xdm:id": "xcore:personalized-offer:f67bab756ed6ee4",
      "xdm:name": "Summer Camp",
      "xdm:characteristics": {
        "cost": "$2400",
        "inventoryId": "BORA04",
        "country": "French Polynesia"
      },
      "https://ns.adobe.com/experience/decisioning/propositionsTotal": {
        "xdm:value": 3813
      },
      "https://ns.adobe.com/experience/decisioning/propositionsProfile": {
        "xdm:value": 1
      }
    }
  ]
}
```

```json
{
  "xdm:activity": {
    "xdm:id": "xcore:offer-activity:f203512e02542b5"
  },
  "xdm:fallback": {
    "xdm:id": "xcore:fallback-offer:e91ce7243fd8c2a"
  }
}
```


# Decision Proposition Detail Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:activity](#xdmactivity) | Decision Activity Snapshot | Optional | Decision Proposition Detail (this schema) |
| [xdm:channel](#xdmchannel) | `string` | Optional | Decision Proposition Detail (this schema) |
| [xdm:fallback](#xdmfallback) | Decision Option Detail | Optional | Decision Proposition Detail (this schema) |
| [xdm:placement](#xdmplacement) | Decision Placement Detail | Optional | Decision Proposition Detail (this schema) |
| [xdm:selections](#xdmselections) | Decision Option Detail | Optional | Decision Proposition Detail (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:activity
### Decision Activity Snapshot

Snapshot of the activity for which the proposition was made. The object contains at least the xdm:id property value which is the identifier of the decision activity.

`xdm:activity`
* is optional
* type: Decision Activity Snapshot
* defined in this schema

### xdm:activity Type


* [Decision Activity Snapshot](activity-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/activity-detail`





## xdm:channel
### DEPRECATED - Channel

DEPRECATED, use placement.channel instead. The channel in which proposition was made. The value is a valid Channel URI. See 'https://ns.adobe.com/xdm/channels/channel'

`xdm:channel`
* is optional
* type: `string`
* defined in this schema

### xdm:channel Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:fallback
### Fallback Option Snapshot

Snapshot of the fixed fallback option that was selected because no available option satisfied all constraints. The object contains at least the xdm:id property value which is the identifier of the fallback action. Note that the intention is that either the selections or the fallback property is required.

`xdm:fallback`
* is optional
* type: Decision Option Detail
* defined in this schema

### xdm:fallback Type


* [Decision Option Detail](option-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/option-detail`





## xdm:placement
### Placement Snapshot

Snapshot of the placement for which the proposition was made. The object contains at least the xdm:id property value which is the identifier of the placement.

`xdm:placement`
* is optional
* type: Decision Placement Detail
* defined in this schema

### xdm:placement Type


* [Decision Placement Detail](placement-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/placement-detail`





## xdm:selections
### Selected Options&#39; Snapshot

Snapshot of the options that were selected by this activity. The objects contain a at least the xdm:id property value which is the identifier of an option. The intention is that either the selections or the fallback property is required.

`xdm:selections`
* is optional
* type: Decision Option Detail
* at least `1` items in the array
* defined in this schema

### xdm:selections Type


Array type: Decision Option Detail

All items must be of the type:
* [Decision Option Detail](option-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/option-detail`







