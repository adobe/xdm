
# Weather Triggers Schema

```
https://ns.adobe.com/xdm/mixins/weather-triggers
```

Weather Triggers

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/shared/weather-triggers.schema.json](fieldgroups/shared/weather-triggers.schema.json) |

## Weather Triggers Example
```json
{
  "xdm:weatherTriggers": {
    "xdm:triggersWeather": [
      7
    ]
  }
}
```

# Weather Triggers Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:weatherTriggers](#xdmweathertriggers) | `object` | Optional | Weather Triggers (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:weatherTriggers


`xdm:weatherTriggers`
* is optional
* type: `object`
* defined in this schema

### xdm:weatherTriggers Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `triggersWeather`| array | Optional |



#### triggersWeather
##### Weather Triggers

undefined

`triggersWeather`
* is optional
* type: `integer[]`


##### triggersWeather Type


Array type: `integer[]`

All items must be of the type:
`integer`













