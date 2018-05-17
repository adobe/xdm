
# Product List Views Schema

```
https://ns.adobe.com/xdm/data/metrics/product-list-views
```

The commerce metric product-list-views describes how often a product list has been seen by a shopper. The most common use case is to open the shopping cart to inspect its contents.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/product-list-views.schema.json](data/product-list-views.schema.json) |

## Product List Views Example
```json
{
  "schema:name": "commerce metric: productListViews",
  "@id": "xdm:productListViews",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Product List Views Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Product List Views (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Product List Views (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Product List Views (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Product List Views (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:productListViews"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: productListViews"
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




