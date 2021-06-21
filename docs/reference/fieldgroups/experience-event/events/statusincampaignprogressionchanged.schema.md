
# Status In Campaign Progression Changed Schema

```
https://ns.adobe.com/xdm/mixins/events/statusincampaignprogressionchanged
```

Use to capture details when a lead's status in a campaign changes.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/statusincampaignprogressionchanged.schema.json](fieldgroups/experience-event/events/statusincampaignprogressionchanged.schema.json) |

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
      "description": "Unique ID of the Campaign."
    },
    "xdm:newStatusID": {
      "title": "New Status ID",
      "type": "string",
      "description": "ID of the lead's new status in the campaign."
    },
    "xdm:newStatusName": {
      "title": "New Status Name",
      "type": "string",
      "description": "Friendly name of the lead's new status in the campaign."
    },
    "xdm:oldStatusID": {
      "title": "Old Status ID",
      "type": "string",
      "description": "ID of the lead's previous status in the campaign."
    },
    "xdm:oldStatusName": {
      "title": "Old Status Name",
      "type": "string",
      "description": "Friendly name of the lead's previous status in the campaign."
    },
    "xdm:reason": {
      "title": "Reason",
      "type": "string",
      "description": "Reason for the change in the lead's status."
    },
    "xdm:isAcquiredBy": {
      "title": "Is Acquired By",
      "type": "boolean",
      "description": "Boolean indicating if lead was acquired by the campaign."
    },
    "xdm:isSuccessful": {
      "title": "Is Successful",
      "type": "boolean",
      "description": "Boolean indicating if there was a change in the lead's status."
    }
  },
  "simpletype": "`object`"
}
```









