
# Checkouts Schema

```
https://ns.adobe.com/xdm/data/metrics/checkouts
```

Number of actions during a checkout process of a product list, there can be more than one checkout event if there are multiple steps in a checkout process. If there are multiple steps the event time information and referenced page or experience is used to identify the step individual events represent in order.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/checkouts.schema.json](data/checkouts.schema.json) |

## Checkouts Example
```json
{
  "schema:name": "commerce metric: checkouts",
  "@id": "xdm:checkouts",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Checkouts Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Checkouts (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Checkouts (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Checkouts (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Checkouts (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:checkouts"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"commerce metric: checkouts"
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




