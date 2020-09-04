
# Non-Deliverables Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables
```

The direct-marketing metric `non-deliverables` describes the umber of asynchronous messages that failed to deliver in a way that indicates that no future messages will be deliverable either to this address.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/data/non-deliverables.schema.json](datatypes/data/non-deliverables.schema.json) |
## Schema Hierarchy

* Non-Deliverables `https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables`
  * [Metric Definition](metricdefinition.schema.md) `https://ns.adobe.com/xdm/data/metricdefinition`


## Non-Deliverables Example
```json
{
  "schema:name": "direct-marketing metric: nonDeliverables",
  "@id": "xdm:nonDeliverables",
  "xdm:measurement": "count",
  "xdm:unit": ""
}
```

# Non-Deliverables Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | **Required** | [Metric Definition](metricdefinition.schema.md#id) |
| [schema:name](#schemaname) | `string` | **Required** | [Metric Definition](metricdefinition.schema.md#schemaname) |
| [xdm:measurement](#xdmmeasurement) | `string` | **Required** | [Metric Definition](metricdefinition.schema.md#xdmmeasurement) |
| [xdm:unit](#xdmunit) | `string` | **Required** | [Metric Definition](metricdefinition.schema.md#xdmunit) |
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

The unit that this metric is measured in. Whenever possible, metrics should follow the [SI base units](https://www.bipm.org/en/measurement-units/) or be [ISO 4217 currency codes](https://www.iso.org/iso-4217-currency-codes.html).For metric that are counts, the `xdm:unit` must be empty string (equivalent to null)

`xdm:unit`
* is **required**
* type: `string`
* defined in [Metric Definition](metricdefinition.schema.md#xdmunit)

### xdm:unit Type


`string`





### xdm:unit Examples

```json
"m"
```

```json
"kg"
```

```json
"s"
```

```json
"USD"
```


