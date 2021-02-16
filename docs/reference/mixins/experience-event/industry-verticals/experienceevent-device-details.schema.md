
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
  "xdm:deviceConfiguration": {
    "xdm:tool-usage": {
      "xdm:toolUsageCancelled": 1,
      "xdm:toolUsageComplete": 1,
      "xdm:toolUsageFailure": 1,
      "xdm:toolUsageID": "T421",
      "xdm:toolUsageName": "configure device",
      "xdm:toolUsageSaved": 1,
      "xdm:toolUsageStart": 1,
      "xdm:toolUsageStep": 1,
      "xdm:toolUsageStepName": "select device",
      "xdm:toolUsageSubmitted": 1,
      "xdm:toolUsageType": "self service"
    }
  },
  "xdm:deviceTradeIn": {
    "xdm:tool-usage": {
      "xdm:toolUsageCancelled": 1,
      "xdm:toolUsageComplete": 1,
      "xdm:toolUsageFailure": 1,
      "xdm:toolUsageID": "T421",
      "xdm:toolUsageName": "device trade-in",
      "xdm:toolUsageSaved": 1,
      "xdm:toolUsageStart": 1,
      "xdm:toolUsageStep": 1,
      "xdm:toolUsageStepName": "select device",
      "xdm:toolUsageSubmitted": 1,
      "xdm:toolUsageType": "self service"
    },
    "xdm:deviceTradeInManufacturer": "Apple",
    "xdm:deviceTradeInModel": "iPhone 8",
    "xdm:deviceTradeInValue": {
      "xdm:currency": {
        "xdm:amount": 279,
        "xdm:currencyCode": "USD"
      }
    }
  },
  "xdm:deviceActivation": {
    "xdm:tool-usage": {
      "xdm:toolUsageCancelled": 1,
      "xdm:toolUsageComplete": 1,
      "xdm:toolUsageFailure": 1,
      "xdm:toolUsageID": "T421",
      "xdm:toolUsageName": "device activation",
      "xdm:toolUsageSaved": 1,
      "xdm:toolUsageStart": 1,
      "xdm:toolUsageStep": 1,
      "xdm:toolUsageStepName": "select device",
      "xdm:toolUsageSubmitted": 1,
      "xdm:toolUsageType": "self service"
    }
  }
}
```

# Device Configuration Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:deviceActivation](#xdmdeviceactivation) | Tool Usage | Optional | Device Configuration Details (this schema) |
| [xdm:deviceConfiguration](#xdmdeviceconfiguration) | Tool Usage | Optional | Device Configuration Details (this schema) |
| [xdm:deviceTradeInDetails](#xdmdevicetradeindetails) | complex | Optional | Device Configuration Details (this schema) |
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
* type: complex
* defined in this schema

### xdm:deviceTradeInDetails Type

Unknown type ``.

```json
{
  "xdm:deviceTradeIn": {
    "title": "Steps",
    "$ref": "https://ns.adobe.com/xdm/datatypes/tool-usage",
    "description": "Extension of toolUsage data type."
  },
  "xdm:deviceTradeInManufacturer": {
    "title": "Manufacturer",
    "type": "string",
    "description": "Manufacturer of the device being traded."
  },
  "xdm:deviceTradeInModel": {
    "title": "Model",
    "type": "string",
    "description": "Model of the device being traded."
  },
  "xdm:deviceTradeInValue": {
    "title": "Value",
    "$ref": "https://ns.adobe.com/xdm/datatypes/currency",
    "description": "Value of the device being traded."
  },
  "simpletype": "complex"
}
```




