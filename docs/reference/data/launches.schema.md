
# Launches Schema

```
https://ns.adobe.com/xdm/data/launches
```

Launch of an application. Triggered on every run, including crashes and installs. Also triggered on a resume from background when the lifecycle session timeout has been exceeded.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/launches.schema.json](data/launches.schema.json) |

## Launches Example
```json
{
  "schema:name": "application metric: launches",
  "@id": "xdm:launches",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Launches Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Launches (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Launches (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Launches (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Launches (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:launches"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"application metric: launches"
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




