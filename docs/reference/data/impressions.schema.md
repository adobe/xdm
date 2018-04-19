
# impressions Schema

```
https://ns.adobe.com/xdm/data/metrics/advertising/impressions
```

The advertising metric impressions describes…

| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [data/impressions.schema.json](data/impressions.schema.json) |

## impressions Example
```json
{
  "schema:name": "advertising metric: impressions",
  "@id": "https://ns.adobe.com/xdm/data/metrics/advertising/impressions",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# impressions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | impressions (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | impressions (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | impressions (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | impressions (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/advertising/impressions"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"advertising metric: impressions"
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




