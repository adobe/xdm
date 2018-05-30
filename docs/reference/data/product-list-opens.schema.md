
# Product List Opens Schema

```
https://ns.adobe.com/xdm/data/metrics/product-list-opens
```

The commerce metric product-list-opens describes how many new product lists have been created. The most common case is the creation of a new shopping cart by putting the first item into the shopping cart.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/product-list-opens.schema.json](data/product-list-opens.schema.json) |

## Product List Opens Example
```json
{
  "schema:name": "commerce metric: productListOpens",
  "@id": "xdm:productListOpens",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Product List Opens Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Product List Opens (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Product List Opens (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Product List Opens (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Product List Opens (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:productListOpens"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: productListOpens"
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




