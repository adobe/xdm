
# Sends Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends
```

The direct-marketing metric sends describes the number of asynchronous messages (email, SMS, MMS etc) that have been dispatched to an recipient's account/address/device

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/sends.schema.json](data/sends.schema.json) |

## Sends Example
```json
{
  "schema:name": "direct-marketing metric: sends",
  "@id": "xdm:sends",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Sends Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Sends (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Sends (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Sends (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Sends (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:sends"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"direct-marketing metric: sends"
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




