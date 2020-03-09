
# Metric Definition Schema

```
https://ns.adobe.com/xdm/data/metricdefinition
```

A metric definition is a definition of a measurable or countable quantity.

A metric definition consists of a measurement and a dimension.
For easier identification, metrics have a name and a unique URI that can be used when referring to the metric definition.

Through XDM's extensibility mechanism, new metrics can be defined by extending `Metric Definition`.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/metricdefinition.schema.json](data/metricdefinition.schema.json) |
## Schema Hierarchy

* Metric Definition `https://ns.adobe.com/xdm/data/metricdefinition`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Metric Definition Example
```json
{
  "schema:name": "Example Metric",
  "@id": "https://ns.adobe.com/xdm/data/example-metric",
  "xdm:measurement": "weight",
  "xdm:unit": "kg"
}
```

# Metric Definition Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | **Required** | Metric Definition (this schema) |
| [schema:name](#schemaname) | `string` | **Required** | Metric Definition (this schema) |
| [xdm:measurement](#xdmmeasurement) | `string` | **Required** | Metric Definition (this schema) |
| [xdm:unit](#xdmunit) | complex | **Required** | Metric Definition (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






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


`xdm:unit`
* is **required**
* type: complex
* defined in this schema

### xdm:unit Type


**Any** following *options* needs to be fulfilled.


#### Option 1


`string`



#### Option 2






