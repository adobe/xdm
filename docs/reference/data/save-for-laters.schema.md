
# save-for-laters Schema

```
https://ns.adobe.com/xdm/data/metrics/commerce/save-for-laters
```

The commerce metric save-for-laters describes how often a product has been saved for a later day purchase.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [data/save-for-laters.schema.json](data/save-for-laters.schema.json) |

## save-for-laters Example
```json
{
  "schema:name": "commerce metric: save-for-laters",
  "@id": "https://ns.adobe.com/xdm/data/metrics/commerce/save-for-laters",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# save-for-laters Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | save-for-laters (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | save-for-laters (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | save-for-laters (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | save-for-laters (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/commerce/save-for-laters"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: save-for-laters"
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




