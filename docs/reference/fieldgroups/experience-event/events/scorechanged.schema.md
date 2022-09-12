
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
      "title": "Score Attribute ID (deprecated)",
      "type": "string",
      "description": "Score Attribute ID is going to depreciate soon. Please use  Score Attribute Key.",
      "meta:titleId": "scorechanged##xdm:scoreAttributeID##title##521",
      "meta:descriptionId": "scorechanged##xdm:scoreAttributeID##description##16521"
    },
    "xdm:scoreAttributeKey": {
      "title": "Score Attribute Key",
      "description": "Unique key of the lead score attribute.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source",
      "meta:titleId": "scorechanged##xdm:scoreAttributeKey##title##30551",
      "meta:descriptionId": "scorechanged##xdm:scoreAttributeKey##description##24971"
    },
    "xdm:scoreAttributeName": {
      "title": "Score Attribute Name",
      "type": "string",
      "description": "Friendly name of the lead score attribute.",
      "meta:titleId": "scorechanged##xdm:scoreAttributeName##title##50051",
      "meta:descriptionId": "scorechanged##xdm:scoreAttributeName##description##20401"
    },
    "xdm:changeValue": {
      "title": "Change Value",
      "type": "string",
      "description": "Absolute value or difference between new value and previous value of the lead score attribute.",
      "meta:titleId": "scorechanged##xdm:changeValue##title##52061",
      "meta:descriptionId": "scorechanged##xdm:changeValue##description##15761"
    },
    "xdm:newValue": {
      "title": "New Value",
      "type": "integer",
      "description": "New value of the lead score attribute.",
      "meta:titleId": "scorechanged##xdm:newValue##title##76521",
      "meta:descriptionId": "scorechanged##xdm:newValue##description##79061"
    },
    "xdm:oldValue": {
      "title": "Old Value",
      "type": "integer",
      "description": "Previous value of the lead score attribute.",
      "meta:titleId": "scorechanged##xdm:oldValue##title##71221",
      "meta:descriptionId": "scorechanged##xdm:oldValue##description##52341"
    },
    "xdm:reason": {
      "title": "Reason",
      "type": "string",
      "description": "Reason for the change to the lead score attribute.",
      "meta:titleId": "scorechanged##xdm:reason##title##1161",
      "meta:descriptionId": "scorechanged##xdm:reason##description##8411"
    },
    "xdm:urgency": {
      "title": "Urgency",
      "type": "number",
      "description": "Gauge of how much the lead's score has changed recently.",
      "meta:titleId": "scorechanged##xdm:urgency##title##56751",
      "meta:descriptionId": "scorechanged##xdm:urgency##description##24791"
    },
    "xdm:priority": {
      "title": "Priority",
      "type": "integer",
      "description": "Overall priority the lead should receive based on urgency and score.",
      "meta:titleId": "scorechanged##xdm:priority##title##39771",
      "meta:descriptionId": "scorechanged##xdm:priority##description##20961"
    },
    "xdm:relativeScore": {
      "title": "Relative Score",
      "type": "integer",
      "description": "How the lead's score compares to other leads in the database.",
      "meta:titleId": "scorechanged##xdm:relativeScore##title##15581",
      "meta:descriptionId": "scorechanged##xdm:relativeScore##description##31281"
    },
    "xdm:relativeUrgency": {
      "title": "Relative Urgency",
      "type": "integer",
      "description": "How the lead's urgency compares to other leads in the database.",
      "meta:titleId": "scorechanged##xdm:relativeUrgency##title##62131",
      "meta:descriptionId": "scorechanged##xdm:relativeUrgency##description##65261"
    }
  },
  "meta:titleId": "scorechanged##xdm:changeScore##title##84241",
  "simpletype": "`object`"
}
```









