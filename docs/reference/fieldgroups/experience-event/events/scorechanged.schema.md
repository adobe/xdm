
# Score Changed Schema

```
https://ns.adobe.com/xdm/mixins/events/scorechanged
```

Use to capture details when the lead score of a person changes.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/scorechanged.schema.json](fieldgroups/experience-event/events/scorechanged.schema.json) |

## Score Changed Example
```json
{}
```

# Score Changed Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:leadOperation](#xdmleadoperation) | `object` | Optional | Score Changed (this schema) |
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
| `xdm:changeScore`| object | Optional |



#### xdm:changeScore
##### Change Score

undefined

`xdm:changeScore`
* is optional
* type: `object`

##### xdm:changeScore Type

Unknown type `object`.

```json
{
  "title": "Change Score",
  "type": "object",
  "properties": {
    "xdm:scoreAttributeID": {
      "title": "Score Atribute ID",
      "type": "string",
      "description": "Unique ID of the lead score attribute.",
      "meta:titleId": "scorechanged##xdm:scoreAttributeID##title##31361",
      "meta:descriptionId": "scorechanged##xdm:scoreAttributeID##description##10761"
    },
    "xdm:scoreAttributeName": {
      "title": "Score Atribute Name",
      "type": "string",
      "description": "Friendly name of the lead score attribute.",
      "meta:titleId": "scorechanged##xdm:scoreAttributeName##title##67611",
      "meta:descriptionId": "scorechanged##xdm:scoreAttributeName##description##49701"
    },
    "xdm:changeValue": {
      "title": "Change Value",
      "type": "string",
      "description": "Absolute value or difference between new value and previous value of the lead score attribute.",
      "meta:titleId": "scorechanged##xdm:changeValue##title##85881",
      "meta:descriptionId": "scorechanged##xdm:changeValue##description##28851"
    },
    "xdm:newValue": {
      "title": "New Value",
      "type": "integer",
      "description": "New value of the lead score attribute.",
      "meta:titleId": "scorechanged##xdm:newValue##title##70711",
      "meta:descriptionId": "scorechanged##xdm:newValue##description##18431"
    },
    "xdm:oldValue": {
      "title": "Old Value",
      "type": "integer",
      "description": "Previous value of the lead score attribute.",
      "meta:titleId": "scorechanged##xdm:oldValue##title##2781",
      "meta:descriptionId": "scorechanged##xdm:oldValue##description##27431"
    },
    "xdm:reason": {
      "title": "Reason",
      "type": "string",
      "description": "Reason for the change to the lead score attribute.",
      "meta:titleId": "scorechanged##xdm:reason##title##56981",
      "meta:descriptionId": "scorechanged##xdm:reason##description##19481"
    },
    "xdm:urgency": {
      "title": "Urgency",
      "type": "number",
      "description": "Gauge of how much the lead's score has changed recently.",
      "meta:titleId": "scorechanged##xdm:urgency##title##88161",
      "meta:descriptionId": "scorechanged##xdm:urgency##description##94991"
    },
    "xdm:priority": {
      "title": "Priority",
      "type": "integer",
      "description": "Overall priority the lead should receive based on urgency and score.",
      "meta:titleId": "scorechanged##xdm:priority##title##74971",
      "meta:descriptionId": "scorechanged##xdm:priority##description##62841"
    },
    "xdm:relativeScore": {
      "title": "Relative Score",
      "type": "integer",
      "description": "How the lead's score compares to other leads in the database.",
      "meta:titleId": "scorechanged##xdm:relativeScore##title##72581",
      "meta:descriptionId": "scorechanged##xdm:relativeScore##description##98191"
    },
    "xdm:relativeUrgency": {
      "title": "Relative Urgency",
      "type": "integer",
      "description": "How the lead's urgency compares to other leads in the database.",
      "meta:titleId": "scorechanged##xdm:relativeUrgency##title##17481",
      "meta:descriptionId": "scorechanged##xdm:relativeUrgency##description##34931"
    }
  },
  "meta:titleId": "scorechanged##xdm:changeScore##title##74271",
  "simpletype": "`object`"
}
```









