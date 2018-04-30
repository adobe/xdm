
# product-list-removals Schema

```
https://ns.adobe.com/xdm/data/metrics/commerce/product-list-removals
```

The commerce metric product-list-removals describes the number of times a product has been removed from a product list. The most common use case is the removal of a product from the shopping cart.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/product-list-removals.schema.json](data/product-list-removals.schema.json) |

## product-list-removals Example
```json
{
  "schema:name": "commerce metric: product-list-removals",
  "@id": "https://ns.adobe.com/xdm/data/metrics/commerce/product-list-removals",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# product-list-removals Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | product-list-removals (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | product-list-removals (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | product-list-removals (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | product-list-removals (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/commerce/product-list-removals"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: product-list-removals"
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




