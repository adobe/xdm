
# Application Schema

```
https://ns.adobe.com/xdm/channels/application
```

An application that accepts messages or emit events (Facebook page, Mobile App, ...).


| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [channels/application.schema.json](channels/application.schema.json) |

## Application Example
```json
{
  "xdm:id": "A123",
  "xdm:name": "Myapp",
  "xdm:version": "1.0.1"
}
```

# Application Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `string` | Optional | Application (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Application (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Application (this schema) |
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





