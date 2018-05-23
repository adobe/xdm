
# viewable-midpoints Schema

```
https://ns.adobe.com/xdm/data/viewablemidpoints
```

The advertising/viewability metric viewable-midpoints describes whether at least 50% of the video's pixels were visible at the midpoint of play.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/viewablemidpoints.schema.json](data/viewablemidpoints.schema.json) |

## viewable-midpoints Example
```json
{
  "schema:name": "advertising/viewability metric: viewableMidpoints",
  "@id": "xdm:viewableMidpoints",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# viewable-midpoints Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | viewable-midpoints (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | viewable-midpoints (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | viewable-midpoints (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | viewable-midpoints (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:viewableMidpoints"
```





## schema:name

The advertising/viewability metric viewable-midpoints describes whether at least 50% of the video's pixels were visible at the midpoint of play.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"advertising/viewability metric: viewableMidpoints"
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




