
# midpoints Schema

```
https://ns.adobe.com/xdm/data/midpoints
```

The metric midpoints describes when digital video played for at least 50% of the total duration.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/midpoints.schema.json](data/midpoints.schema.json) |

## midpoints Example
```json
{
  "schema:name": "metric: midpoints",
  "@id": "xdm:midpoints",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# midpoints Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | midpoints (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | midpoints (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | midpoints (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | midpoints (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:midpoints"
```





## schema:name

The metric midpoints describes when digital video played for at least 50% of the total duration.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"metric: midpoints"
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




