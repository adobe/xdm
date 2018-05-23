
# Application Closes Schema

```
https://ns.adobe.com/xdm/data/application-closes
```

Graceful termination(s) of an application.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/application-closes.schema.json](data/application-closes.schema.json) |

## Application Closes Example
```json
{
  "schema:name": "application metric: applicationCloses",
  "@id": "xdm:applicationCloses",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Application Closes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Application Closes (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Application Closes (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Application Closes (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Application Closes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:applicationCloses"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"application metric: applicationCloses"
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




