
# Status In Campaign Progression Changed Schema

```
https://ns.adobe.com/xdm/mixins/events/statusincampaignprogressionchanged
```

Use for information regarding lead operation status in campaign progression changed events.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/events/statusincampaignprogressionchanged.schema.json](mixins/experience-event/events/statusincampaignprogressionchanged.schema.json) |

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
      "description": "Unique identifier for campaign."
    },
    "xdm:newStatusID": {
      "title": "New Status ID",
      "type": "string",
      "description": "Unique identifier for new status."
    },
    "xdm:newStatusName": {
      "title": "New Status Name",
      "type": "string",
      "description": "Friendly name for new status."
    },
    "xdm:oldStatusID": {
      "title": "Old Status ID",
      "type": "string",
      "description": "Unique identifier for old status."
    },
    "xdm:oldStatusName": {
      "title": "Old Status Name",
      "type": "string",
      "description": "Friendly name for old status."
    },
    "xdm:reason": {
      "title": "Reason",
      "type": "string",
      "description": "Reason for status change."
    },
    "xdm:isAcquiredBy": {
      "title": "Is Acquired By",
      "type": "boolean",
      "description": "Change acquired by user."
    },
    "xdm:isSuccessful": {
      "title": "Is Successful",
      "type": "boolean",
      "description": "Is the change successful or failed in process."
    }
  },
  "simpletype": "`object`"
}
```









