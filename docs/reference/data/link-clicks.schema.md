
# link-clicks Schema

```
https://ns.adobe.com/xdm/data/metrics/web/link-clicks
```

The web metric link-clicks describes the number of clicks on a link on a web page.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/link-clicks.schema.json](data/link-clicks.schema.json) |

## link-clicks Example
```json
{
  "schema:name": "web metric: link-clicks",
  "@id": "https://ns.adobe.com/xdm/data/metrics/web/link-clicks",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# link-clicks Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | link-clicks (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | link-clicks (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | link-clicks (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | link-clicks (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/web/link-clicks"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"web metric: link-clicks"
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




