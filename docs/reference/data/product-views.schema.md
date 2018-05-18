
# Product Views Schema

```
https://ns.adobe.com/xdm/data/metrics/product-views
```

The commerce metric productViews describes the number of product views that have occurred. Because the number of products on a page might be greater than one, this number may differ from the page view count of product pages.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/product-views.schema.json](data/product-views.schema.json) |

## Product Views Example
```json
{
  "schema:name": "commerce metric: productViews",
  "@id": "xdm:productViews",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Product Views Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Product Views (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Product Views (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Product Views (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Product Views (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:productViews"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: productViews"
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




