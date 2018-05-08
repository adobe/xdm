
# product-list-reopens Schema

```
https://ns.adobe.com/xdm/data/metrics/commerce/product-list-reopens
```

Number of reopens for which a product list that was no longer accessible has been re-activated by the user, for example via a re-marketing activity.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/product-list-reopens.schema.json](data/product-list-reopens.schema.json) |

## product-list-reopens Example
```json
{
  "schema:name": "commerce metric: product-list-reopens",
  "@id": "https://ns.adobe.com/xdm/data/metrics/commerce/product-list-reopens",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# product-list-reopens Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | product-list-reopens (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | product-list-reopens (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | product-list-reopens (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | product-list-reopens (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/commerce/product-list-reopens"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: product-list-reopens"
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




