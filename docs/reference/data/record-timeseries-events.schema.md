
# Time-series Extension for Record Data Schema

```
https://ns.adobe.com/xdm/data/record-timeseries-events
```

Time-series extension for record data.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/record-timeseries-events.schema.json](data/record-timeseries-events.schema.json) |
## Schema Hierarchy

* Time-series Extension for Record Data `https://ns.adobe.com/xdm/data/record-timeseries-events`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Time-series Extension for Record Data Example
```json
{
  "xdm:timeSeriesEvents": [
    {
      "@id": "49069bba-3014-420b-a887-3959f87d474a"
    }
  ]
}
```

# Time-series Extension for Record Data Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:timeSeriesEvents](#xdmtimeseriesevents) | Time-series Schema | Optional | Time-series Extension for Record Data (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:timeSeriesEvents
### Time-series Events

List of time-series based events that relate to schemas based on record.

`xdm:timeSeriesEvents`
* is optional
* type: Time-series Schema

* defined in this schema

### xdm:timeSeriesEvents Type


Array type: Time-series Schema

All items must be of the type:
* [Time-series Schema](time-series.schema.md) – `https://ns.adobe.com/xdm/data/time-series`







