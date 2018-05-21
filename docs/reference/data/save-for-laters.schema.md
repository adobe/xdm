
# Save For Laters Schema

```
https://ns.adobe.com/xdm/data/metrics/save-for-laters
```

The commerce metric saveForLaters describes how often a product has been saved for a later day purchase.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/save-for-laters.schema.json](data/save-for-laters.schema.json) |

## Save For Laters Example
```json
{
  "schema:name": "commerce metric: saveForLaters",
  "@id": "xdm:saveForLaters",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Save For Laters Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Save For Laters (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Save For Laters (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Save For Laters (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Save For Laters (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:saveForLaters"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: saveForLaters"
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




