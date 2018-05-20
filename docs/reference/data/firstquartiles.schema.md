
# first-quartiles Schema

```
https://ns.adobe.com/xdm/data/firstquartiles
```

The metric first-quartiles describes a digital video which played for at least 25% of the total duration.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/firstquartiles.schema.json](data/firstquartiles.schema.json) |

## first-quartiles Example
```json
{
  "schema:name": "metric: firstQuartiles",
  "@id": "xdm:firstQuartiles",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# first-quartiles Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | first-quartiles (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | first-quartiles (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | first-quartiles (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | first-quartiles (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:firstQuartiles"
```





## schema:name

The advertising metric first-quartiles describes digital video which played for at least 25% of the total duration.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"metric: firstQuartiles"
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




