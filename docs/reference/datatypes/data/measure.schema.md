
# Measure Schema

```
https://ns.adobe.com/xdm/data/measure
```

A measure is a concrete quantifiable data point of a particular metric.

It has a value, and a unique identifier.


| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/data/measure.schema.json](datatypes/data/measure.schema.json) |

## Measure Example
```json
{
  "xdm:value": 175
}
```

# Measure Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:id](#xdmid) | `string` | Optional | Measure (this schema) |
| [xdm:value](#xdmvalue) | `number` | **Required** | Measure (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:id
### Unique Identifier

Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time.

`xdm:id`
* is optional
* type: `string`
* defined in this schema

### xdm:id Type


`string`






## xdm:value

The quantifiable value of this measure.

`xdm:value`
* is **required**
* type: `number`
* defined in this schema

### xdm:value Type


`number`





