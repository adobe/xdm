
# Application Channel Schema

```
https://ns.adobe.com/xdm/channels/application
```

An application that accepts messages or emit events (Facebook page, Mobile App, ...) channel.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [channels/application.schema.json](channels/application.schema.json) |

## Application Channel Example
```json
{
  "xdm:id": "A123",
  "xdm:name": "Myapp",
  "xdm:version": "1.0.1"
}
```

# Application Channel Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Application Channel (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Application Channel (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Application Channel (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Application Identifier

Unique identifier of the application.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`






## xdm:name
### Name

Name of the application.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:version
### Version

Version of the application.

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`





