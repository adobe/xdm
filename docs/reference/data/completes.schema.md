
# completes Schema

```
https://ns.adobe.com/xdm/data/completes
```

The metric completes describes digital video assets which played through its entire duration.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | Yes | Forbidden | Permitted | [data/completes.schema.json](data/completes.schema.json) |
## Schema Hierarchy

* completes `https://ns.adobe.com/xdm/data/completes`
  * [Metric Definition](metricdefinition.schema.md) `https://ns.adobe.com/xdm/data/metricdefinition`


## completes Example
```json
{
  "schema:name": "metric: completes",
  "@id": "xdm:completes",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# completes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `string` | **Required** | [Metric Definition](metricdefinition.schema.md#@id) |
| [schema:name](#schemaname) | `string` | **Required** | [Metric Definition](metricdefinition.schema.md#schemaname) |
| [xdm:measurement](#xdmmeasurement) | `string` | **Required** | [Metric Definition](metricdefinition.schema.md#xdmmeasurement) |
| [xdm:unit](#xdmunit) | complex | **Required** | [Metric Definition](metricdefinition.schema.md#xdmunit) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `string`
* defined in [Metric Definition](metricdefinition.schema.md#@id)

### @id Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `string`
* defined in [Metric Definition](metricdefinition.schema.md#schema:name)

### schema:name Type


`string`






## xdm:measurement

How to take measures of this metric.

`xdm:measurement`
* is **required**
* type: `string`
* defined in [Metric Definition](metricdefinition.schema.md#xdm:measurement)

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
* defined in [Metric Definition](metricdefinition.schema.md#xdm:unit)

### xdm:unit Type


**Any** following *options* needs to be fulfilled.


#### Option 1


`string`



#### Option 2






