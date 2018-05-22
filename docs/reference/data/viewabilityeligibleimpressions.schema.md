
# viewability-eligible-impressions Schema

```
https://ns.adobe.com/xdm/data/viewabilityeligibleimpressions
```

The advertising/viewability metric viewability-eligible-impressions describes the number of impressions that were eligible to measure viewability. An impression is eligible if the ad unit has a supported creative format and tag type.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/viewabilityeligibleimpressions.schema.json](data/viewabilityeligibleimpressions.schema.json) |

## viewability-eligible-impressions Example
```json
{
  "schema:name": "advertising/viewability metric: viewabilityEligibleImpressions",
  "@id": "xdm:viewabilityEligibleImpressions",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# viewability-eligible-impressions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | viewability-eligible-impressions (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | viewability-eligible-impressions (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | viewability-eligible-impressions (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | viewability-eligible-impressions (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:viewabilityEligibleImpressions"
```





## schema:name

The advertising/viewability metric viewability-eligible-impressions describes the number of impressions that were eligible to measure viewability. An impression is eligible if the ad unit has a supported creative format and tag type.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"advertising/viewability metric: viewabilityEligibleImpressions"
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




