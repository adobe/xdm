
# Mirror Pages Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages
```

The direct-marketing metric mirror-pages describes the number of mirror pages for which a link to the online mirror page of a message has been clicked.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/mirror-pages.schema.json](data/mirror-pages.schema.json) |

## Mirror Pages Example
```json
{
  "schema:name": "direct-marketing metric: mirrorPages",
  "@id": "xdm:mirrorPages",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Mirror Pages Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Mirror Pages (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Mirror Pages (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Mirror Pages (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Mirror Pages (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:mirrorPages"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"direct-marketing metric: mirrorPages"
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




