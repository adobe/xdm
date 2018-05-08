
# page-views Schema

```
https://ns.adobe.com/xdm/data/metrics/web/page-views
```

The web metric page-views describes the number of impressions of a web page.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/page-views.schema.json](data/page-views.schema.json) |

## page-views Example
```json
{
  "schema:name": "web metric: page-views",
  "@id": "https://ns.adobe.com/xdm/data/metrics/web/page-views",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# page-views Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | page-views (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | page-views (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | page-views (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | page-views (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/web/page-views"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"web metric: page-views"
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




