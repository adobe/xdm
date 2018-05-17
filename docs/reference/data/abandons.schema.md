
# abandons Schema

```
https://ns.adobe.com/xdm/data/metrics/commerce/abandons
```

Number of abandons for which a product list has been identified as no longer purchasable or accessible by the user without the user re-creating the product list from scratch.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/abandons.schema.json](data/abandons.schema.json) |

## abandons Example
```json
{
  "schema:name": "commerce metric: abandons",
  "@id": "https://ns.adobe.com/xdm/data/metrics/commerce/abandons",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# abandons Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | abandons (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | abandons (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | abandons (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | abandons (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/commerce/abandons"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: abandons"
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




