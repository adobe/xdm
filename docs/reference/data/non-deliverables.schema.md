
# Non Deliverables Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables
```

The direct-marketing metric non-deliverables describes the umber of asynchronous messages that failed to deliver in a way that indicates that no future messages will be deliverable either to this address.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/non-deliverables.schema.json](data/non-deliverables.schema.json) |

## Non Deliverables Example
```json
{
  "schema:name": "direct-marketing metric: nonDeliverables",
  "@id": "xdm:nonDeliverables",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Non Deliverables Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Non Deliverables (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Non Deliverables (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Non Deliverables (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Non Deliverables (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:nonDeliverables"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"direct-marketing metric: nonDeliverables"
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




