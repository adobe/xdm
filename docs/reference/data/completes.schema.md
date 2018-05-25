
# completes Schema

```
https://ns.adobe.com/xdm/data/completes
```

The metric completes describes digital video assets which played through its entire duration.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/completes.schema.json](data/completes.schema.json) |

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
| [@id](#@id) | `const` | **Required** | completes (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | completes (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | completes (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | completes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:completes"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"metric: completes"
```





## xdm:measurement

How to take measures of this metric.

`xdm:measurement`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"count"
```





## xdm:unit


`xdm:unit`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
null
```




