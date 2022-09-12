
# Severe Triggers Schema

```
https://ns.adobe.com/xdm/mixins/severe-triggers
```

Weather Severe Triggers

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/shared/severe-triggers.schema.json](fieldgroups/shared/severe-triggers.schema.json) |

## Severe Triggers Example
```json
{
  "xdm:severeTriggers": {
    "xdm:triggersSevere": [
      7
    ]
  }
}
```

# Severe Triggers Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:severeTriggers](#xdmseveretriggers) | `object` | Optional | Severe Triggers (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:severeTriggers


`xdm:severeTriggers`
* is optional
* type: `object`
* defined in this schema

### xdm:severeTriggers Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `triggersSevere`| array | Optional |



#### triggersSevere
##### Severe Triggers

undefined

`triggersSevere`
* is optional
* type: `integer[]`


##### triggersSevere Type


Array type: `integer[]`

All items must be of the type:
`integer`













