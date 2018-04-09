
# non-deliverables Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables
```

The direct-marketing metric non-deliverables describes the umber of asynchronous messages that failed to deliver in a way that indicates that no future messages will be deliverable either to this address.

| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [data/non-deliverables.schema.json](data/non-deliverables.schema.json) |

## non-deliverables Example
```json
{
  "schema:name": "direct-marketing metric: non-deliverables",
  "@id": "https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# non-deliverables Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | non-deliverables (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | non-deliverables (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | non-deliverables (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | non-deliverables (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"direct-marketing metric: non-deliverables"
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




