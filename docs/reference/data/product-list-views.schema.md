
# product-list-views Schema

```
https://ns.adobe.com/xdm/data/metrics/commerce/product-list-views
```

The commerce metric product-list-views describes how often a product list has been seen by a shopper. The most common use case is to open the shopping cart to inspect its contents.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/product-list-views.schema.json](data/product-list-views.schema.json) |

## product-list-views Example
```json
{
  "schema:name": "commerce metric: product-list-views",
  "@id": "https://ns.adobe.com/xdm/data/metrics/commerce/product-list-views",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# product-list-views Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | product-list-views (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | product-list-views (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | product-list-views (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | product-list-views (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/commerce/product-list-views"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: product-list-views"
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




