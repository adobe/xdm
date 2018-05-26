
# page views Schema

```
https://ns.adobe.com/xdm/data/metrics/web/pageviews
```

The web metric pageViews describes the number of impressions of a web page.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/pageviews.schema.json](data/pageviews.schema.json) |

## page views Example
```json
{
  "schema:name": "web metric: pageViews",
  "@id": "xdm:pageViews",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# page views Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | page views (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | page views (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | page views (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | page views (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:pageViews"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"web metric: pageViews"
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




