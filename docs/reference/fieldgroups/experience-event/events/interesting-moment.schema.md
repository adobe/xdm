
# Interesting Moment Schema

```
https://ns.adobe.com/xdm/mixins/events/interesting-moment
```

Use for tracking high value activities by potential customers.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/interesting-moment.schema.json](fieldgroups/experience-event/events/interesting-moment.schema.json) |

## Interesting Moment Example
```json
{}
```

# Interesting Moment Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:leadOperation](#xdmleadoperation) | `object` | Optional | Interesting Moment (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:leadOperation
### lead Operation

`xdm:leadOperation`
* is optional
* type: `object`
* defined in this schema

### xdm:leadOperation Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:interestingMoment`| object | Optional |



#### xdm:interestingMoment
##### Interesting Moment

undefined

`xdm:interestingMoment`
* is optional
* type: `object`

##### xdm:interestingMoment Type

Unknown type `object`.

```json
{
  "title": "Interesting Moment",
  "type": "object",
  "properties": {
    "xdm:type": {
      "title": "Type",
      "type": "string",
      "description": "Type of Interesting Moment.",
      "meta:titleId": "interesting-moment##xdm:type##title##47241",
      "meta:descriptionId": "interesting-moment##xdm:type##description##99611"
    },
    "xdm:description": {
      "title": "Description",
      "type": "string",
      "description": "Description of Interesting Moment.",
      "meta:titleId": "interesting-moment##xdm:description##title##20541",
      "meta:descriptionId": "interesting-moment##xdm:description##description##58861"
    },
    "xdm:date": {
      "title": "Date",
      "type": "string",
      "format": "date-time",
      "description": "Date of the Interesting Moment.",
      "meta:titleId": "interesting-moment##xdm:date##title##8651",
      "meta:descriptionId": "interesting-moment##xdm:date##description##99781"
    },
    "xdm:source": {
      "title": "Source",
      "type": "string",
      "description": "Source of the action that triggered the interesting moment.",
      "meta:titleId": "interesting-moment##xdm:source##title##1141",
      "meta:descriptionId": "interesting-moment##xdm:source##description##2171"
    }
  },
  "meta:titleId": "interesting-moment##xdm:interestingMoment##title##24181",
  "simpletype": "`object`"
}
```









