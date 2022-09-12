
# Status In Campaign Progression Changed Schema

```
https://ns.adobe.com/xdm/mixins/events/statusincampaignprogressionchanged
```

Use to capture details when a lead's status in a campaign changes.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/events/statusincampaignprogressionchanged.schema.json](fieldgroups/experience-event/events/statusincampaignprogressionchanged.schema.json) |

## Status In Campaign Progression Changed Example
```json
{}
```

# Status In Campaign Progression Changed Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:leadOperation](#xdmleadoperation) | `object` | Optional | Status In Campaign Progression Changed (this schema) |
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
| `xdm:campaignProgression`| object | Optional |



#### xdm:campaignProgression
##### Campaign Progression

undefined

`xdm:campaignProgression`
* is optional
* type: `object`

##### xdm:campaignProgression Type

Unknown type `object`.

```json
{
  "title": "Campaign Progression",
  "type": "object",
  "properties": {
    "xdm:campaignID": {
      "title": "Campaign ID",
      "type": "string",
      "description": "Unique identifier of the Campaign.",
      "meta:titleId": "statusincampaignprogressionchanged##xdm:campaignID##title##82611",
      "meta:descriptionId": "statusincampaignprogressionchanged##xdm:campaignID##description##92571"
    },
    "xdm:campaignKey": {
      "title": "Campaign Key",
      "description": "Unique composite identifier of the Campaign.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source",
      "meta:titleId": "statusincampaignprogressionchanged##xdm:campaignKey##title##24381",
      "meta:descriptionId": "statusincampaignprogressionchanged##xdm:campaignKey##description##21781"
    },
    "xdm:newStatusID": {
      "title": "New Status ID",
      "type": "string",
      "description": "ID of the lead's new status in the campaign.",
      "meta:titleId": "statusincampaignprogressionchanged##xdm:newStatusID##title##9671",
      "meta:descriptionId": "statusincampaignprogressionchanged##xdm:newStatusID##description##62811"
    },
    "xdm:newStatusName": {
      "title": "New Status Name",
      "type": "string",
      "description": "Friendly name of the lead's new status in the campaign.",
      "meta:titleId": "statusincampaignprogressionchanged##xdm:newStatusName##title##22141",
      "meta:descriptionId": "statusincampaignprogressionchanged##xdm:newStatusName##description##91131"
    },
    "xdm:oldStatusID": {
      "title": "Old Status ID",
      "type": "string",
      "description": "ID of the lead's previous status in the campaign.",
      "meta:titleId": "statusincampaignprogressionchanged##xdm:oldStatusID##title##67911",
      "meta:descriptionId": "statusincampaignprogressionchanged##xdm:oldStatusID##description##59681"
    },
    "xdm:oldStatusName": {
      "title": "Old Status Name",
      "type": "string",
      "description": "Friendly name of the lead's previous status in the campaign.",
      "meta:titleId": "statusincampaignprogressionchanged##xdm:oldStatusName##title##37491",
      "meta:descriptionId": "statusincampaignprogressionchanged##xdm:oldStatusName##description##20631"
    },
    "xdm:reason": {
      "title": "Reason",
      "type": "string",
      "description": "Reason for the change in the lead's status.",
      "meta:titleId": "statusincampaignprogressionchanged##xdm:reason##title##17191",
      "meta:descriptionId": "statusincampaignprogressionchanged##xdm:reason##description##81611"
    },
    "xdm:isAcquiredBy": {
      "title": "Is Acquired By",
      "type": "boolean",
      "description": "Boolean indicating if lead was acquired by the campaign.",
      "meta:titleId": "statusincampaignprogressionchanged##xdm:isAcquiredBy##title##67071",
      "meta:descriptionId": "statusincampaignprogressionchanged##xdm:isAcquiredBy##description##91521"
    },
    "xdm:isSuccessful": {
      "title": "Is Successful",
      "type": "boolean",
      "description": "Boolean indicating if there was a change in the lead's status.",
      "meta:titleId": "statusincampaignprogressionchanged##xdm:isSuccessful##title##15821",
      "meta:descriptionId": "statusincampaignprogressionchanged##xdm:isSuccessful##description##4811"
    }
  },
  "meta:titleId": "statusincampaignprogressionchanged##xdm:campaignProgression##title##89841",
  "simpletype": "`object`"
}
```









