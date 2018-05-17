
# Purchases Schema

```
https://ns.adobe.com/xdm/data/metrics/purchases
```

Number of orders has occurred. Purchase is the only required action in a commerce conversion. Purchase must have a product list referenced.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/purchases.schema.json](data/purchases.schema.json) |

## Purchases Example
```json
{
  "schema:name": "commerce metric: purchases",
  "@id": "xdm:purchases",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Purchases Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Purchases (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Purchases (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Purchases (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Purchases (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:purchases"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: purchases"
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




