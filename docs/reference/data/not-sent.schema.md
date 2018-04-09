
# not-sent Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/not-sent
```

The direct-marketing metric `not-sent` describes the number of asynchronous messages (email, SMS, MMS etc) that have not been dispatched to an recipient&#39;s account/address/device due to cancellation or expiration of the marketing activity.

| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [data/not-sent.schema.json](data/not-sent.schema.json) |

## not-sent Example
```json
{
  "schema:name": "direct-marketing metric: not-sent",
  "@id": "https://ns.adobe.com/xdm/data/metrics/direct-marketing/not-sent",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# not-sent Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | not-sent (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | not-sent (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | not-sent (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | not-sent (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/direct-marketing/not-sent"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"direct-marketing metric: not-sent"
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




