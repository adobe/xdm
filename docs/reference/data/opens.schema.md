
# opens Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/opens
```

The direct-marketing metric `opens` describes the number of times the direct marketing messages (email, SMS, Push Notifications etc) have been opened/swyped/touched by the recipients.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/opens.schema.json](data/opens.schema.json) |

## opens Example
```json
{
  "schema:name": "direct-marketing metric: opens",
  "@id": "https://ns.adobe.com/xdm/data/metrics/direct-marketing/opens",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# opens Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | opens (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | opens (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | opens (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | opens (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/direct-marketing/opens"
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




