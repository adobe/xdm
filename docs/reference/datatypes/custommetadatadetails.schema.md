
# Custom metadata details information Schema

```
https://ns.adobe.com/xdm/datatypes/customMetadataDetails
```

Custom metadata details information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|-----------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable    | No | Forbidden | Permitted | [datatypes/custommetadatadetails.schema.json](datatypes/custommetadatadetails.schema.json) |

## Custom metadata details information Example
```json
{
  "xdm:name": "customName",
  "xdm:value": "customValue"
}
```

# Custom metadata details information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:name](#xdmname) | `string` | Optional | Custom metadata details information (this schema) |
| [xdm:value](#xdmvalue) | `string` | Optional | Custom metadata details information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:name
### Custom Metadata Field Name

The name of the custom field.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:value
### Custom Metadata Field Value

The value of the custom field.

`xdm:value`
* is optional
* type: `string`
* defined in this schema

### xdm:value Type


`string`





