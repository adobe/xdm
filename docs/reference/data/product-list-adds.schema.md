
# Product List Adds Schema

```
https://ns.adobe.com/xdm/data/metrics/product-list-adds
```

The commerce metric productListAdds describes the number of times a product has been added to a product list. The most common case is adding an item to the shopping cart.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/product-list-adds.schema.json](data/product-list-adds.schema.json) |

## Product List Adds Example
```json
{
  "schema:name": "commerce metric: productListAdds",
  "@id": "xdm:productListAdds",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Product List Adds Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Product List Adds (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Product List Adds (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Product List Adds (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Product List Adds (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:productListAdds"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: productListAdds"
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




