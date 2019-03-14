
# viewability-eligible-impressions Schema

```
https://ns.adobe.com/xdm/data/viewabilityeligibleimpressions
```

The advertising/viewability metric viewability-eligible-impressions describes the number of impressions that were eligible to measure viewability. An impression is eligible if the ad unit has a supported creative format and tag type.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/viewabilityeligibleimpressions.schema.json](data/viewabilityeligibleimpressions.schema.json) |
## Schema Hierarchy

* viewability-eligible-impressions `https://ns.adobe.com/xdm/data/viewabilityeligibleimpressions`
  * [Metric Definition](metricdefinition.schema.md) `https://ns.adobe.com/xdm/data/metricdefinition`


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
| [@id](#id) | `string` | **Required** | [Metric Definition](metricdefinition.schema.md#id) |
| [schema:name](#schemaname) | `string` | **Required** | [Metric Definition](metricdefinition.schema.md#schemaname) |
| [xdm:measurement](#xdmmeasurement) | `string` | **Required** | [Metric Definition](metricdefinition.schema.md#xdmmeasurement) |
| [xdm:unit](#xdmunit) | complex | **Required** | [Metric Definition](metricdefinition.schema.md#xdmunit) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `string`
* defined in [Metric Definition](metricdefinition.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `string`
* defined in [Metric Definition](metricdefinition.schema.md#schemaname)

### schema:name Type


`string`






## xdm:measurement

How to take measures of this metric.

`xdm:measurement`
* is **required**
* type: `string`
* defined in [Metric Definition](metricdefinition.schema.md#xdmmeasurement)

### xdm:measurement Type


`string`





### xdm:measurement Examples

```json
"distance"
```

```json
"time"
```

```json
"price"
```

```json
"count"
```



## xdm:unit


`xdm:unit`
* is **required**
* type: complex
* defined in [Metric Definition](metricdefinition.schema.md#xdmunit)

### xdm:unit Type


**Any** following *options* needs to be fulfilled.


#### Option 1


`string`



#### Option 2






