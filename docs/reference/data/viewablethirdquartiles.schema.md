
# viewable-third-quartiles Schema

```
https://ns.adobe.com/xdm/data/viewablethirdquartiles
```

The advertising/viewability metric viewable-third-quartiles describes whether at least 50% of the video's pixels were visible at the third quartile of play.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/viewablethirdquartiles.schema.json](data/viewablethirdquartiles.schema.json) |

## viewable-third-quartiles Example
```json
{
  "schema:name": "advertising/viewability metric: viewableThirdQuartiles",
  "@id": "xdm:viewableThirdQuartiles",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# viewable-third-quartiles Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | viewable-third-quartiles (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | viewable-third-quartiles (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | viewable-third-quartiles (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | viewable-third-quartiles (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:viewableThirdQuartiles"
```





## schema:name

The advertising/viewability metric viewable-third-quartiles describes whether at least 50% of the video's pixels were visible at the third quartile of play.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"advertising/viewability metric: viewableThirdQuartiles"
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




