
# Device Configuration Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-device-details
```

Device configuration details such as start, save, failure, and complete.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-device-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-device-details.schema.json) |
## Schema Hierarchy

* Device Configuration Details `https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-device-details`
  * [Tool Usage](../../../datatypes/industry-verticals/tool-usage.schema.md) `https://ns.adobe.com/xdm/datatypes/tool-usage`


## Device Configuration Details Example
```json
{
  "xdm:deviceTradeInDetails": {
    "xdm:deviceTradeInManufacturer": "Apple",
    "xdm:deviceTradeInModel": "iPhone 8",
    "xdm:deviceTradeInValue": {
      "xdm:currency": {
        "xdm:amount": 279,
        "xdm:currencyCode": "USD"
      }
    }
  }
}
```

# Device Configuration Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:deviceActivation](#xdmdeviceactivation) | Tool Usage | Optional | Device Configuration Details (this schema) |
| [xdm:deviceConfiguration](#xdmdeviceconfiguration) | Tool Usage | Optional | Device Configuration Details (this schema) |
| [xdm:deviceTradeInDetails](#xdmdevicetradeindetails) | `object` | Optional | Device Configuration Details (this schema) |
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





## xdm:deviceConfiguration
### Device Configuration

Extension of toolUsage data type.

`xdm:deviceConfiguration`
* is optional
* type: Tool Usage
* defined in this schema

### xdm:deviceConfiguration Type


* [Tool Usage](../../../datatypes/industry-verticals/tool-usage.schema.md) – `https://ns.adobe.com/xdm/datatypes/tool-usage`





## xdm:deviceTradeInDetails


`xdm:deviceTradeInDetails`
* is optional
* type: `object`
* defined in this schema

### xdm:deviceTradeInDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:deviceTradeIn`|  | Optional |
| `xdm:deviceTradeInManufacturer`| string | Optional |
| `xdm:deviceTradeInModel`| string | Optional |
| `xdm:deviceTradeInValue`|  | Optional |



#### xdm:deviceTradeIn
##### Steps

Extension of toolUsage data type.

`xdm:deviceTradeIn`
* is optional
* type: reference

##### xdm:deviceTradeIn Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:deviceTradeInManufacturer
##### Manufacturer

Manufacturer of the device being traded.

`xdm:deviceTradeInManufacturer`
* is optional
* type: `string`

##### xdm:deviceTradeInManufacturer Type


`string`








#### xdm:deviceTradeInModel
##### Model

Model of the device being traded.

`xdm:deviceTradeInModel`
* is optional
* type: `string`

##### xdm:deviceTradeInModel Type


`string`








#### xdm:deviceTradeInValue
##### Value

Value of the device being traded.

`xdm:deviceTradeInValue`
* is optional
* type: reference

##### xdm:deviceTradeInValue Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`









