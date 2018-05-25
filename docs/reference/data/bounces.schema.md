
# Bounces Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/bounces
```

The direct-marketing metric bounces describes the number of asynchronous messages that have been rejected by the receiving system.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/bounces.schema.json](data/bounces.schema.json) |

## Bounces Example
```json
{
  "schema:name": "direct-marketing metric: bounces",
  "@id": "xdm:bounces",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Bounces Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Bounces (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Bounces (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Bounces (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Bounces (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:bounces"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"direct-marketing metric: bounces"
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




