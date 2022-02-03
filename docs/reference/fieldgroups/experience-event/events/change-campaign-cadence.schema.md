
# Change Campaign Cadence Schema

```
https://ns.adobe.com/xdm/mixins/events/change-campaign-cadence
```

Use to capture details when engagement campaign cadence changes for a person.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/change-campaign-cadence.schema.json](fieldgroups/experience-event/events/change-campaign-cadence.schema.json) |

## Change Campaign Cadence Example
```json
{}
```

# Change Campaign Cadence Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:leadOperation](#xdmleadoperation) | `object` | Optional | Change Campaign Cadence (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:leadOperation
### Lead Operation

`xdm:leadOperation`
* is optional
* type: `object`
* defined in this schema

### xdm:leadOperation Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:changeCampaignCadence`| object | Optional |



#### xdm:changeCampaignCadence
##### Change Campaign Cadence

undefined

`xdm:changeCampaignCadence`
* is optional
* type: `object`

##### xdm:changeCampaignCadence Type

Unknown type `object`.

```json
{
  "title": "Change Campaign Cadence",
  "type": "object",
  "properties": {
    "xdm:campaignID": {
      "title": "Campaign ID",
      "type": "integer",
      "description": "Unique ID of the engagement campaign for which the cadence changed."
    },
    "xdm:newCadence": {
      "title": "New Cadence",
      "type": "string",
      "description": "New value of engagement campaign cadence."
    },
    "xdm:previousCadence": {
      "title": "Previous Cadence",
      "type": "string",
      "description": "Previous value of engagement campaign cadence."
    }
  },
  "simpletype": "`object`"
}
```









