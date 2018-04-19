
# sends Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends
```

The direct-marketing metric sends describes the number of asynchronous messages (email, SMS, MMS etc) that have been dispatched to an recipient's account/address/device

| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [data/sends.schema.json](data/sends.schema.json) |

## sends Example
```json
{
  "schema:name": "direct-marketing metric: sends",
  "@id": "https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# sends Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | sends (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | sends (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | sends (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | sends (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends"
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




