
# Change Campaign Stream Schema

```
https://ns.adobe.com/xdm/mixins/events/change-campaign-stream
```

Use to change the stream of the specific campaign.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/change-campaign-stream.schema.json](fieldgroups/experience-event/events/change-campaign-stream.schema.json) |

## Change Campaign Stream Example
```json
{}
```

# Change Campaign Stream Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:leadOperation](#xdmleadoperation) | `object` | Optional | Change Campaign Stream (this schema) |
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
| `xdm:changeCampaignStream`| object | Optional |



#### xdm:changeCampaignStream
##### Change Campaign Stream

undefined

`xdm:changeCampaignStream`
* is optional
* type: `object`

##### xdm:changeCampaignStream Type

Unknown type `object`.

```json
{
  "title": "Change Campaign Stream",
  "type": "object",
  "properties": {
    "xdm:campaignKey": {
      "title": "Campaign Key",
      "description": "Unique composite identifier of the campaign.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source"
    },
    "xdm:newStreamKey": {
      "title": "New Stream Key",
      "description": "Unique composite identifier of the new stream.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source"
    },
    "xdm:newStreamName": {
      "title": "New Stream Name",
      "type": "string",
      "description": "Name of the new stream."
    },
    "xdm:previousStreamKey": {
      "title": "Previous Stream Key",
      "description": "Unique composite identifier of the previous stream.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source"
    },
    "xdm:previousStreamName": {
      "title": "Previous Stream Name",
      "type": "string",
      "description": "Name of the previous stream."
    }
  },
  "simpletype": "`object`"
}
```









