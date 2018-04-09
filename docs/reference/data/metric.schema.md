
# Metric Schema

```
https://ns.adobe.com/xdm/data/metric
```

A metric is a definition of a measurable or countable quantity.

A metric consists of a measurement and a dimension.
For easier identification, metrics have a name and a unique URI that can be used when referring to the metric.

Through XDM&#39;s extensibility mechanism, new metrics can be defined by extending `Metric`.


| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [data/metric.schema.json](data/metric.schema.json) |

## Metric Example
```json
{
  "schema:name": "Example Metric",
  "@id": "https://ns.adobe.com/xdm/data/example-metric",
  "xdm:measurement": "weight",
  "xdm:unit": "kg"
}
```

# Metric Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `string` | **Required** | Metric (this schema) |
| [schema:name](#schemaname) | `string` | **Required** | Metric (this schema) |
| [xdm:measurement](#xdmmeasurement) | `string` | **Required** | Metric (this schema) |
| [xdm:unit](#xdmunit) | `string` | **Required** | Metric (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `string`
* defined in this schema

### schema:name Type


`string`






## xdm:measurement

How to take measures of this metric.

`xdm:measurement`
* is **required**
* type: `string`
* defined in this schema

### xdm:measurement Type


`string`





### xdm:measurement Examples

```json
"distance"
```

```json
"time"
```

```json
"price"
```

```json
"count"
```



## xdm:unit

The unit that this metric is measured in. Whenever possible, metrics should follow the [SI base units](https://www.bipm.org/en/measurement-units/) or be [ISO 4217 currency codes](https://www.iso.org/iso-4217-currency-codes.html). For measures that are counts, the `xdm:unit` must be `null`.

`xdm:unit`
* is **required**
* type: `string`
* defined in this schema

### xdm:unit Type


`string`





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


