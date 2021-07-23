
# Device Trade-In Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-device-trade-in-details
```

Device trade-in details including trade-in value, original device ID, and new device ID.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-device-trade-in-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-device-trade-in-details.schema.json) |
## Schema Hierarchy

* Device Trade-In Details `https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-device-trade-in-details`
  * [Tool Usage](../../../datatypes/industry-verticals/tool-usage.schema.md) `https://ns.adobe.com/xdm/datatypes/tool-usage`


## Device Trade-In Details Example
```json
{
  "xdm:deviceTradeInDetails": {
    "xdm:originalDeviceID": "YWXI7QDYXT",
    "xdm:newDeviceID": "BI9V35LA7F",
    "xdm:deviceTradeInValue": {
      "xdm:currency": {
        "xdm:amount": 279,
        "xdm:currencyCode": "USD"
      }
    }
  }
}
```

# Device Trade-In Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:deviceActivation](#xdmdeviceactivation) | Tool Usage | Optional | Device Trade-In Details (this schema) |
| [xdm:deviceTradeInDetails](#xdmdevicetradeindetails) | `object` | Optional | Device Trade-In Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:deviceActivation
### Device Activation

Extension of toolUsage data type.

`xdm:deviceActivation`
* is optional
* type: Tool Usage
* defined in this schema

### xdm:deviceActivation Type


* [Tool Usage](../../../datatypes/industry-verticals/tool-usage.schema.md) – `https://ns.adobe.com/xdm/datatypes/tool-usage`





## xdm:deviceTradeInDetails

Device activation, configuration, and trade-in details.

`xdm:deviceTradeInDetails`
* is optional
* type: `object`
* defined in this schema

### xdm:deviceTradeInDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:deviceTradeIn`|  | Optional |
| `xdm:newDeviceID`| string | Optional |
| `xdm:originalDeviceID`| string | Optional |
| `xdm:tradeInValue`|  | Optional |



#### xdm:deviceTradeIn
##### Steps

Extension of toolUsage data type.

`xdm:deviceTradeIn`
* is optional
* type: reference

##### xdm:deviceTradeIn Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:newDeviceID
##### New Device ID

ID for the new device being traded for.

`xdm:newDeviceID`
* is optional
* type: `string`

##### xdm:newDeviceID Type


`string`








#### xdm:originalDeviceID
##### Original Device ID

ID for the device being traded.

`xdm:originalDeviceID`
* is optional
* type: `string`

##### xdm:originalDeviceID Type


`string`








#### xdm:tradeInValue
##### Trade In Value

Value of the device being traded.

`xdm:tradeInValue`
* is optional
* type: reference

##### xdm:tradeInValue Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`









