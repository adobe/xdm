
# Score Changed Schema

```
https://ns.adobe.com/xdm/mixins/events/scorechanged
```

Use to capture details when the lead score of a person changes.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/events/scorechanged.schema.json](mixins/experience-event/events/scorechanged.schema.json) |

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
      "description": "Unique identifier for score attribute."
    },
    "xdm:scoreAttributeName": {
      "title": "Score Atribute Name",
      "type": "string",
      "description": "friendly name for the score."
    },
    "xdm:changeValue": {
      "title": "Change Value",
      "type": "string",
      "description": "changed value."
    },
    "xdm:newValue": {
      "title": "New Value",
      "type": "integer",
      "description": "New score Value."
    },
    "xdm:oldValue": {
      "title": "Old Value",
      "type": "integer",
      "description": "old score Value."
    },
    "xdm:reason": {
      "title": "Reason",
      "type": "string",
      "description": "Reason for the change."
    },
    "xdm:urgency": {
      "title": "Urgency",
      "type": "number",
      "description": "Urgency for this change."
    },
    "xdm:priority": {
      "title": "Priority",
      "type": "integer",
      "description": "Priority for this change."
    },
    "xdm:relativeScore": {
      "title": "Relative Score",
      "type": "integer",
      "description": "Relative score."
    },
    "xdm:relativeUrgency": {
      "title": "Relative Urgency",
      "type": "integer",
      "description": "Relative Urgency for this change."
    }
  },
  "simpletype": "`object`"
}
```









