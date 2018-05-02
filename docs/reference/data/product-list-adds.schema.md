
# product-list-adds Schema

```
https://ns.adobe.com/xdm/data/metrics/commerce/product-list-adds
```

The commerce metric product-list-adds describes the number of times a product has been added to a product list. The most common case is adding an item to the shopping cart.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/product-list-adds.schema.json](data/product-list-adds.schema.json) |

## product-list-adds Example
```json
{
  "schema:name": "commerce metric: product-list-adds",
  "@id": "https://ns.adobe.com/xdm/data/metrics/commerce/product-list-adds",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# product-list-adds Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | product-list-adds (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | product-list-adds (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | product-list-adds (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | product-list-adds (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/commerce/product-list-adds"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: product-list-adds"
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




