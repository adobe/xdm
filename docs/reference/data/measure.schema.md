
# Measure Schema

```
https://ns.adobe.com/xdm/data/measure
```

A measure is a concrete quantifiable data point of a particular metric.

It has a value, and optionally a unit, although the unit can be inferred from the measure&#39;s metric.


| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Stabilizing | Forbidden | Permitted | [data/measure.schema.json](data/measure.schema.json) |

## Measure Example
```json
{
  "@type": "https://ns.adobe.com/xdm/data/example-metric",
  "xdm:unit": null,
  "xdm:value": 175
}
```

# Measure Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@type](#@type) | `string` | Optional | Measure (this schema) |
| [xdm:id](#xdmid) | `string` | Optional | Measure (this schema) |
| [xdm:unit](#xdmunit) | complex | Optional | Measure (this schema) |
| [xdm:value](#xdmvalue) | `number` | **Required** | Measure (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @type

Links to the `Metric` that this measure refers to. The `@type` can be omitted in contexts where it is obvious what metric is being referred to, for instance in the `Metrics` object that is keyed with `Metric` URIs.

`@type`
* is optional
* type: `string`
* defined in this schema

### @type Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:id
### Unique Identifier

Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time.

`xdm:id`
* is optional
* type: `string`
* defined in this schema

### xdm:id Type


`string`
* minimum length: 20 characters





## xdm:unit

The (optional) unit that this measure&#39;s value is measured in. The `unit` in the `Measure` is purely informational, as the `unit` property of the referenced `Metric` determines the interpretation.

`xdm:unit`
* is optional
* type: complex
* defined in this schema

### xdm:unit Type


**Any** following *options* needs to be fulfilled.


#### Option 1


`string`



#### Option 2






### xdm:unit Examples

```json
"m"
```

```json
"kg"
```

```json
"s"
```

```json
"USD"
```



## xdm:value

The quantifiable value of this measure.

`xdm:value`
* is **required**
* type: `number`
* defined in this schema

### xdm:value Type


`number`





