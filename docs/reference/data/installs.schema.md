
# Installs Schema

```
https://ns.adobe.com/xdm/data/installs
```

Install of an application on a device where the actual install event is available.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/installs.schema.json](data/installs.schema.json) |

## Installs Example
```json
{
  "schema:name": "application metric: installs",
  "@id": "xdm:installs",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Installs Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Installs (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Installs (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Installs (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Installs (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:installs"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"application metric: installs"
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




