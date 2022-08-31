
# Change Campaign Cadence Schema

```
https://ns.adobe.com/xdm/mixins/events/change-campaign-cadence
```

Use to capture details when campaign cadence changes for a person.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/events/change-campaign-cadence.schema.json](fieldgroups/experience-event/events/change-campaign-cadence.schema.json) |

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
      "meta:status": "deprecated",
      "title": "Campaign ID (deprecated)",
      "type": "integer",
      "description": "Unique ID of the engagement campaign for which the cadence changed.",
      "meta:titleId": "change-campaign-cadence##xdm:campaignID##title##84141",
      "meta:descriptionId": "change-campaign-cadence##xdm:campaignID##description##13181"
    },
    "xdm:campaignKey": {
      "title": "Campaign Key",
      "description": "Unique composite identifier of the campaign.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source",
      "meta:titleId": "change-campaign-cadence##xdm:campaignKey##title##72181",
      "meta:descriptionId": "change-campaign-cadence##xdm:campaignKey##description##46751"
    },
    "xdm:newCadence": {
      "title": "New Cadence",
      "type": "string",
      "description": "New value of campaign cadence.",
      "meta:titleId": "change-campaign-cadence##xdm:newCadence##title##8711",
      "meta:descriptionId": "change-campaign-cadence##xdm:newCadence##description##11261"
    },
    "xdm:previousCadence": {
      "title": "Previous Cadence",
      "type": "string",
      "description": "Previous value of campaign cadence.",
      "meta:titleId": "change-campaign-cadence##xdm:previousCadence##title##11621",
      "meta:descriptionId": "change-campaign-cadence##xdm:previousCadence##description##50041"
    }
  },
  "meta:titleId": "change-campaign-cadence##xdm:changeCampaignCadence##title##81131",
  "simpletype": "`object`"
}
```









