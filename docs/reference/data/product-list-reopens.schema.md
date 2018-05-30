
# Product List Reopens Schema

```
https://ns.adobe.com/xdm/data/metrics/product-list-reopens
```

Number of reopens for which a product list that was no longer accessible has been re-activated by the user, for example via a re-marketing activity.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/product-list-reopens.schema.json](data/product-list-reopens.schema.json) |

## Product List Reopens Example
```json
{
  "schema:name": "commerce metric: productListReopens",
  "@id": "xdm:productListReopens",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Product List Reopens Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Product List Reopens (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Product List Reopens (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Product List Reopens (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Product List Reopens (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:productListReopens"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: productListReopens"
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




