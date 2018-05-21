
# unmeasurable-other Schema

```
https://ns.adobe.com/xdm/data/unmeasurableother
```

The advertising/viewability metric unmeasurable-other describes whether a measurement instrumented ad was not able to be measured due to a non-predefined error.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/unmeasurableother.schema.json](data/unmeasurableother.schema.json) |

## unmeasurable-other Example
```json
{
  "schema:name": "advertising/viewability metric: unmeasurableOther",
  "@id": "xdm:unmeasurableOther",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# unmeasurable-other Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | unmeasurable-other (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | unmeasurable-other (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | unmeasurable-other (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | unmeasurable-other (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:unmeasurableOther"
```





## schema:name

The advertising/viewability metric unmeasurable-other describes whether a measurement instrumented ad was not able to be measured due to a non-predefined error.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"advertising/viewability metric: unmeasurableOther"
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




