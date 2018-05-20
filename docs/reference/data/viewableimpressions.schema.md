
# viewable-impressions Schema

```
https://ns.adobe.com/xdm/data/viewableimpressions
```

The advertising/viewability metric viewable-impressions describes whether at least 50% of the video's pixels were visible after two seconds of video start.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/viewableimpressions.schema.json](data/viewableimpressions.schema.json) |

## viewable-impressions Example
```json
{
  "schema:name": "advertising/viewability metric: viewableImpressions",
  "@id": "xdm:viewableImpressions",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# viewable-impressions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | viewable-impressions (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | viewable-impressions (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | viewable-impressions (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | viewable-impressions (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:viewableImpressions"
```





## schema:name

The advertising/viewability metric viewable-impressions describes whether at least 50% of the video's pixels were visible after two seconds of video start.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"advertising/viewability metric: viewableImpressions"
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




