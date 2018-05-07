
# unsubscriptions Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/unsubscriptions
```

The direct-marketing metric `unsubscriptions` describes the number of times the recipients of direct marketing messages (email, newsletters, etc) have opted out from receiving them.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/unsubscriptions.schema.json](data/unsubscriptions.schema.json) |

## unsubscriptions Example
```json
{
  "schema:name": "direct-marketing metric: unsubscriptions",
  "@id": "https://ns.adobe.com/xdm/data/metrics/direct-marketing/unsubscriptions",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# unsubscriptions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | unsubscriptions (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | unsubscriptions (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | unsubscriptions (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | unsubscriptions (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/direct-marketing/unsubscriptions"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"direct-marketing metric: unsubscriptions"
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




