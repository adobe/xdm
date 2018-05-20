
# unmeasurable-iframe Schema

```
https://ns.adobe.com/xdm/data/unmeasurableiframe
```

The advertising/viewability metric unmeasurable-iframe describes whether a measurement instrumented ad was not able to be measured due to it being inside one or more iFrames.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/unmeasurableiframe.schema.json](data/unmeasurableiframe.schema.json) |

## unmeasurable-iframe Example
```json
{
  "schema:name": "advertising/viewability metric: unmeasurableIframe",
  "@id": "xdm:unmeasurableIframe",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# unmeasurable-iframe Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | unmeasurable-iframe (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | unmeasurable-iframe (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | unmeasurable-iframe (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | unmeasurable-iframe (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:unmeasurableIframe"
```





## schema:name

The advertising/viewability metric unmeasurable-iframe describes whether a measurement instrumented ad was not able to be measured due to it being inside one or more iFrames.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"advertising/viewability metric: unmeasurableIframe"
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




