
# mirror-pages Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages
```

The direct-marketing metric mirror-pages describes the number of mirror pages for which a link to the online mirror page of a message has been clicked.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [data/mirror-pages.schema.json](data/mirror-pages.schema.json) |

## mirror-pages Example
```json
{
  "schema:name": "direct-marketing metric: mirror-pages",
  "@id": "https://ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# mirror-pages Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | mirror-pages (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | mirror-pages (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | mirror-pages (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | mirror-pages (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"direct-marketing metric: mirror-pages"
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




