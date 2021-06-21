
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
      "description": "Type of Interesting Moment."
    },
    "xdm:description": {
      "title": "Description",
      "type": "string",
      "description": "Description of Interesting Moment."
    },
    "xdm:date": {
      "title": "Date",
      "type": "string",
      "format": "date-time",
      "description": "Date of the Interesting Moment."
    },
    "xdm:source": {
      "title": "Source",
      "type": "string",
      "description": "Source of the action that triggered the interesting moment."
    }
  },
  "simpletype": "`object`"
}
```









