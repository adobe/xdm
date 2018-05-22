
# viewable-completes Schema

```
https://ns.adobe.com/xdm/data/viewablecompletes
```

The advertising/viewability metric viewable-completes describes whether at least 50% of the video's pixels were visible at the end of play.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/viewablecompletes.schema.json](data/viewablecompletes.schema.json) |

## viewable-completes Example
```json
{
  "schema:name": "advertising/viewability metric: viewableCompletes",
  "@id": "xdm:viewableCompletes",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# viewable-completes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | viewable-completes (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | viewable-completes (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | viewable-completes (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | viewable-completes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:viewableCompletes"
```





## schema:name

The advertising/viewability metric viewable-completes describes whether at least 50% of the video's pixels were visible at the end of play.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"advertising/viewability metric: viewableCompletes"
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




