
# Add To Campaign Schema

```
https://ns.adobe.com/xdm/mixins/events/add-to-campaign
```

Use to add a person to the specific campaign.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/add-to-campaign.schema.json](fieldgroups/experience-event/events/add-to-campaign.schema.json) |

## Add To Campaign Example
```json
{}
```

# Add To Campaign Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:leadOperation](#xdmleadoperation) | `object` | Optional | Add To Campaign (this schema) |
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
| `xdm:addToCampaign`| object | Optional |



#### xdm:addToCampaign
##### Add To Campaign

undefined

`xdm:addToCampaign`
* is optional
* type: `object`

##### xdm:addToCampaign Type

Unknown type `object`.

```json
{
  "title": "Add To Campaign",
  "type": "object",
  "properties": {
    "xdm:campaignKey": {
      "title": "Campaign Key",
      "description": "Unique composite identifier of the campaign.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source"
    },
    "xdm:streamKey": {
      "title": "Stream Key",
      "description": "Unique composite identifier of the stream.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source"
    },
    "xdm:streamName": {
      "title": "Stream Name",
      "type": "string",
      "description": "Name of the stream."
    }
  },
  "simpletype": "`object`"
}
```









