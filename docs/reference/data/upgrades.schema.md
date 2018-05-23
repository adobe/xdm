
# Upgrades Schema

```
https://ns.adobe.com/xdm/data/upgrades
```

Upgrade of an application that has previously been installed. Triggered on first launch after upgrade.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/upgrades.schema.json](data/upgrades.schema.json) |

## Upgrades Example
```json
{
  "schema:name": "application metric: upgrades",
  "@id": "xdm:upgrades",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Upgrades Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Upgrades (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Upgrades (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Upgrades (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Upgrades (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:upgrades"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"application metric: upgrades"
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




