
# starts Schema

```
https://ns.adobe.com/xdm/data/starts
```

The metric starts describes a digital video which started playing.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/starts.schema.json](data/starts.schema.json) |

## starts Example
```json
{
  "schema:name": "metric: starts",
  "@id": "xdm:starts",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# starts Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | starts (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | starts (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | starts (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | starts (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:starts"
```





## schema:name

The metric starts describes a digital video which started playing.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"metric: starts"
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




