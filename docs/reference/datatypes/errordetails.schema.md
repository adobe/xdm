
# Error details information Schema

```
https://ns.adobe.com/xdm/datatypes/errorDetails
```

Error details information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/errordetails.schema.json](datatypes/errordetails.schema.json) |

## Error details information Example
```json
{
  "xdm:ID": "errorID",
  "xdm:source": "player"
}
```

# Error details information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:ID](#xdmid) | `string` | Optional | Error details information (this schema) |
| [xdm:source](#xdmsource) | `enum` | Optional | Error details information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:ID
### Error ID

The error ID.

`xdm:ID`
* is optional
* type: `string`
* defined in this schema

### xdm:ID Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E.%7B1%2C%7D%24)):
```regex
^.{1,}$
```






## xdm:source
### Error Source

The error source.

`xdm:source`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmsource-known-values).

### xdm:source Known Values
| Value | Description |
|-------|-------------|
| `player` | Player source. |
| `external` | External source. |



