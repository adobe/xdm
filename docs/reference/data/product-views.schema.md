
# product-views Schema

```
https://ns.adobe.com/xdm/data/metrics/commerce/product-views
```

The commerce metric product-views describes the number of product views that have occurred. Because the number of products on a page might be greater than one, this number may differ from the page view count of product pages.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/product-views.schema.json](data/product-views.schema.json) |

## product-views Example
```json
{
  "schema:name": "commerce metric: product-views",
  "@id": "https://ns.adobe.com/xdm/data/metrics/commerce/product-views",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# product-views Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | product-views (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | product-views (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | product-views (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | product-views (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/commerce/product-views"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: product-views"
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




