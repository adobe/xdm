
# clicks Schema

```
https://ns.adobe.com/xdm/data/clicks
```

The metric measures the number of interactions a user had by clicking on an asset.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/clicks.schema.json](data/clicks.schema.json) |

## clicks Example
```json
{
  "schema:name": "metric: clicks",
  "@id": "xdm:clicks",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# clicks Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | clicks (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | clicks (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | clicks (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | clicks (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:clicks"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"metric: clicks"
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




