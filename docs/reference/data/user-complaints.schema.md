
# user-complaints Schema

```
https://ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints
```

The direct-marketing metric user-complaints describes the number of user complaints that have been received. This generally occurs when a recipient of a message reported it as spam.

| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [data/user-complaints.schema.json](data/user-complaints.schema.json) |

## user-complaints Example
```json
{
  "schema:name": "direct-marketing metric: user-complaints",
  "@id": "https://ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# user-complaints Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | user-complaints (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | user-complaints (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | user-complaints (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | user-complaints (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"https://ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"direct-marketing metric: user-complaints"
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




