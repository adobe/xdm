
# link-clicks Schema

```
https://ns.adobe.com/xdm/data/metrics/web/linkclicks
```

The web metric link-clicks describes the number of clicks on a link on a web page.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/linkclicks.schema.json](data/linkclicks.schema.json) |

## link-clicks Example
```json
{
  "schema:name": "web metric: linkClicks",
  "@id": "xdm:linkClicks",
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
"xdm:linkClicks"
```





## schema:name

The web metric link-clicks describes the number of clicks on a link on a web page.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"web metric: linkClicks"
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




