
# Not Sent Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/notSent
```

The direct-marketing metric `not-sent` describes the number of asynchronous messages (email, SMS, MMS etc) that have not been dispatched to an recipient's account/address/device due to cancellation or expiration of the marketing activity.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/not-sent.schema.json](data/not-sent.schema.json) |

## Not Sent Example
```json
{
  "schema:name": "direct-marketing metric: notSent",
  "@id": "xdm:notSent",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Not Sent Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Not Sent (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Not Sent (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Not Sent (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Not Sent (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:notSent"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"direct-marketing metric: notSent"
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




