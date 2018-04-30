
# purchases Schema

```
https://ns.adobe.com/xdm/data/metrics/commerce/purchases
```

Number of orders has occurred. Purchase is the only required action in a commerce conversion. Purchase must have a product list referenced.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/purchases.schema.json](data/purchases.schema.json) |

## purchases Example
```json
{
  "schema:name": "commerce metric: purchases",
  "@id": "https://ns.adobe.com/xdm/data/metrics/commerce/purchases",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# purchases Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | purchases (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | purchases (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | purchases (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | purchases (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/commerce/purchases"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: purchases"
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




