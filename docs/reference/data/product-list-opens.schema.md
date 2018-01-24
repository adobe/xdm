
# product-list-opens Schema

```
https://ns.adobe.com/xdm/data/metrics/commerce/product-list-opens
```

The commerce metric product-list-opens describes how many new product lists have been created. The most common case is the creation of a new shopping cart by putting the first item into the shopping cart.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [data/product-list-opens.schema.json](data/product-list-opens.schema.json) |

## product-list-opens Example
```json
{
  "schema:name": "commerce metric: product-list-opens",
  "@id": "https://ns.adobe.com/xdm/data/metrics/commerce/product-list-opens",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# product-list-opens Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | product-list-opens (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | product-list-opens (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | product-list-opens (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | product-list-opens (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/commerce/product-list-opens"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: product-list-opens"
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




