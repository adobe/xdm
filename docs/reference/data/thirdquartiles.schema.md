
# third-quartiles Schema

```
https://ns.adobe.com/xdm/data/thirdquartiles
```

The metric third-quartiles describes digital video which played for at least 75% of the total duration.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/thirdquartiles.schema.json](data/thirdquartiles.schema.json) |

## third-quartiles Example
```json
{
  "schema:name": "metric: thirdQuartiles",
  "@id": "xdm:thirdQuartiles",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# third-quartiles Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | third-quartiles (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | third-quartiles (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | third-quartiles (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | third-quartiles (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:thirdQuartiles"
```





## schema:name

The metric third-quartiles describes digital video which played for at least 75% of the total duration.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"metric: thirdQuartiles"
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




