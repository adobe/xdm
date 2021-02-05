
# List Details Schema

```
https://ns.adobe.com/experience/analytics/listdetails
```

List of values with details.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/analytics/listdetails.schema.json](adobe/experience/analytics/listdetails.schema.json) |

# List Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:delimiter](#xdmdelimiter) | `string` | Optional | List Details (this schema) |
| [xdm:values](#xdmvalues) | `string[]` | Optional | List Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:delimiter
### Original List Delimiter

The original delimiter used to generate the list.

`xdm:delimiter`
* is optional
* type: `string`
* defined in this schema

### xdm:delimiter Type


`string`






## xdm:values
### List Values

List of values.

`xdm:values`
* is optional
* type: `string[]`

* defined in this schema

### xdm:values Type


Array type: `string[]`

All items must be of the type:
`string`








