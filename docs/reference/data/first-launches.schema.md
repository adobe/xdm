
# First Launches Schema

```
https://ns.adobe.com/xdm/data/first-launches
```

First launch after install.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/first-launches.schema.json](data/first-launches.schema.json) |

## First Launches Example
```json
{
  "schema:name": "application metric: firstLaunches",
  "@id": "xdm:firstLaunches",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# First Launches Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | First Launches (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | First Launches (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | First Launches (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | First Launches (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:firstLaunches"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"application metric: firstLaunches"
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




