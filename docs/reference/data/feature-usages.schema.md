
# Feature Usages Schema

```
https://ns.adobe.com/xdm/data/feature-usages
```

Activation(s) of an application feature that is being measured.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/feature-usages.schema.json](data/feature-usages.schema.json) |

## Feature Usages Example
```json
{
  "schema:name": "application metric: featureUsages",
  "@id": "xdm:featureUsages",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Feature Usages Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Feature Usages (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Feature Usages (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Feature Usages (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Feature Usages (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:featureUsages"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"application metric: featureUsages"
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




