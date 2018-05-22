
# viewable-first-quartiles Schema

```
https://ns.adobe.com/xdm/data/viewablefirstquartiles
```

The advertising/viewability metric viewable-first-quartiles describes whether at least 50% of the video's pixels were visible at the first quartile of play.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/viewablefirstquartiles.schema.json](data/viewablefirstquartiles.schema.json) |

## viewable-first-quartiles Example
```json
{
  "schema:name": "advertising/viewability metric: viewableFirstQuartiles",
  "@id": "xdm:viewableFirstQuartiles",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# viewable-first-quartiles Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | viewable-first-quartiles (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | viewable-first-quartiles (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | viewable-first-quartiles (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | viewable-first-quartiles (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:viewableFirstQuartiles"
```





## schema:name

The advertising/viewability metric viewable-first-quartiles describes whether at least 50% of the video's pixels were visible at the first quartile of play.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"advertising/viewability metric: viewableFirstQuartiles"
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




