
# Product List Removals Schema

```
https://ns.adobe.com/xdm/data/metrics/product-list-removals
```

The commerce metric productListRemovals describes the number of times a product has been removed from a product list. The most common use case is the removal of a product from the shopping cart.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/product-list-removals.schema.json](data/product-list-removals.schema.json) |

## Product List Removals Example
```json
{
  "schema:name": "commerce metric: productListRemovals",
  "@id": "xdm:productListRemovals",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Product List Removals Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Product List Removals (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Product List Removals (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Product List Removals (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Product List Removals (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:productListRemovals"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: productListRemovals"
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




