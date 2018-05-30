
# Opens Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/opens
```

The direct-marketing metric `opens` describes the number of times the direct marketing messages (email, SMS, Push Notifications etc) have been opened/swyped/touched by the recipients.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/opens.schema.json](data/opens.schema.json) |

## Opens Example
```json
{
  "schema:name": "direct-marketing metric: opens",
  "@id": "xdm:opens",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# Opens Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | Opens (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | Opens (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | Opens (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | Opens (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:opens"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"direct-marketing metric: opens"
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




