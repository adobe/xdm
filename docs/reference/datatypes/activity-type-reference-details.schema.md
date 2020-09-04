
# XDM Activity Schema

```
https://ns.adobe.com/xdm/common/activity-type-reference-details
```

A form of a task or a business event which is alinged to a given activity type

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/activity-type-reference-details.schema.json](datatypes/activity-type-reference-details.schema.json) |

## XDM Activity Example
```json
{
  "xdm:name": "Send Email",
  "xdm:description": "Send Marketo Email to a person",
  "xdm:type": "task",
  "xdm:area": "Email",
  "xdm:category": "Marketing Mail",
  "xdm:isDeleted": false,
  "xdm:isActive": true
}
```

# XDM Activity Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:area](#xdmarea) | `string` | Optional | XDM Activity (this schema) |
| [xdm:category](#xdmcategory) | `string` | Optional | XDM Activity (this schema) |
| [xdm:description](#xdmdescription) | `string` | Optional | XDM Activity (this schema) |
| [xdm:isActive](#xdmisactive) | `boolean` | Optional | XDM Activity (this schema) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | XDM Activity (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | XDM Activity (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | XDM Activity (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:area
### Area of activity

Optional alingned area of the activity type, such as 'Mail' if the name is 'click email' etc.

`xdm:area`
* is optional
* type: `string`
* defined in this schema

### xdm:area Type


`string`






## xdm:category
### Activity type Category

Category of the activity type. 'Marketing email', futher categorisation of activity area

`xdm:category`
* is optional
* type: `string`
* defined in this schema

### xdm:category Type


`string`






## xdm:description
### Description

Detailed description of the activity name.

`xdm:description`
* is optional
* type: `string`
* defined in this schema

### xdm:description Type


`string`






## xdm:isActive
### Status of the activity type

A boolean flag to depict if the activity type can be used by the business system,or has been discontinued.

`xdm:isActive`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isActive Type


`boolean`





## xdm:isDeleted
### Deleted flag

A boolean flag to depict if the corresponding activity type has been soft deleted

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDeleted Type


`boolean`





## xdm:name
### Name

Name of the activity, such as 'open email','click email' etc.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:type
### Type of Activity

Describing the nature of activity, in the form of a 'task' or a 'business event'.

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`





