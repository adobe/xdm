
# conversions Schema

```
https://ns.adobe.com/xdm/data/conversions
```

The metric conversions measures a specific set of predefined actions taken by an surfer online. Further context is used to determine the predefined actions.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/conversions.schema.json](data/conversions.schema.json) |

## conversions Example
```json
{
  "schema:name": "metric: conversions",
  "@id": "xdm:conversions",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# conversions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | conversions (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | conversions (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | conversions (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | conversions (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:conversions"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"metric: conversions"
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




