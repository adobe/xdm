
# Cart Abandons Schema

```
https://ns.adobe.com/xdm/data/metrics/cart-abandons
```

Number of cart abandons for which a product list has been identified as no longer purchasable or accessible by the user without the user re-creating the product list from scratch.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/cart-abandons.schema.json](data/cart-abandons.schema.json) |

## Cart Abandons Example
```json
{
  "schema:name": "commerce metric: cartAbandons",
  "@id": "xdm:cartAbandons",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Cart Abandons Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Cart Abandons (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Cart Abandons (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Cart Abandons (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Cart Abandons (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:cartAbandons"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: cartAbandons"
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




