
# Revenue Stage Changed Schema

```
https://ns.adobe.com/xdm/mixins/events/revenueStageChanged
```

Use to capture details when revenue model stage for a person changes.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/events/revenueStageChanged.schema.json](fieldgroups/experience-event/events/revenueStageChanged.schema.json) |

## Revenue Stage Changed Example
```json
{}
```

# Revenue Stage Changed Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:leadOperation](#xdmleadoperation) | `object` | Optional | Revenue Stage Changed (this schema) |
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
| `xdm:changeRevenueStage`| object | Optional |



#### xdm:changeRevenueStage
##### Change Revenue Stage

undefined

`xdm:changeRevenueStage`
* is optional
* type: `object`

##### xdm:changeRevenueStage Type

Unknown type `object`.

```json
{
  "title": "Change Revenue Stage",
  "type": "object",
  "properties": {
    "xdm:modelKey": {
      "title": "Model Key",
      "description": "Unique composite identifier for the model of the Revenue Cycle Modeler.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source",
      "meta:titleId": "revenueStageChanged##xdm:modelKey##title##25831",
      "meta:descriptionId": "revenueStageChanged##xdm:modelKey##description##37271"
    },
    "xdm:modelName": {
      "title": "Model Name",
      "type": "string",
      "description": "Name of the model for Revenue Cycle Modeler.",
      "meta:titleId": "revenueStageChanged##xdm:modelName##title##61941",
      "meta:descriptionId": "revenueStageChanged##xdm:modelName##description##64651"
    },
    "xdm:newStageKey": {
      "title": "New Stage Key",
      "description": "Unique composite identifier of the stage person assigned to.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source",
      "meta:titleId": "revenueStageChanged##xdm:newStageKey##title##7731",
      "meta:descriptionId": "revenueStageChanged##xdm:newStageKey##description##67771"
    },
    "xdm:newStageName": {
      "title": "New Stage Name",
      "type": "string",
      "description": "Name of the new stage person assigned to.",
      "meta:titleId": "revenueStageChanged##xdm:newStageName##title##21601",
      "meta:descriptionId": "revenueStageChanged##xdm:newStageName##description##80421"
    },
    "xdm:previousStageKey": {
      "title": "Previous Stage Key",
      "description": "Unique composite identifier of the previous stage person assigned from.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source",
      "meta:titleId": "revenueStageChanged##xdm:previousStageKey##title##52771",
      "meta:descriptionId": "revenueStageChanged##xdm:previousStageKey##description##92771"
    },
    "xdm:previousStageName": {
      "title": "Previous Stage Name",
      "type": "string",
      "description": "Name of the previous stage person assigned from.",
      "meta:titleId": "revenueStageChanged##xdm:previousStageName##title##53261",
      "meta:descriptionId": "revenueStageChanged##xdm:previousStageName##description##52311"
    },
    "xdm:reason": {
      "title": "Reason",
      "type": "string",
      "description": "Reason to indicate changes in model stages for a person.",
      "meta:titleId": "revenueStageChanged##xdm:reason##title##98711",
      "meta:descriptionId": "revenueStageChanged##xdm:reason##description##10861"
    }
  },
  "meta:titleId": "revenueStageChanged##xdm:changeRevenueStage##title##83221",
  "simpletype": "`object`"
}
```









