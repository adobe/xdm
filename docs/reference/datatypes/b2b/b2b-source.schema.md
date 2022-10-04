
# B2B Source Schema

```
https://ns.adobe.com/xdm/datatypes/b2b-source
```

This Data Type is used to capture B2B/CRM Source identifiers.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/b2b/b2b-source.schema.json](datatypes/b2b/b2b-source.schema.json) |
## Schema Hierarchy

* B2B Source `https://ns.adobe.com/xdm/datatypes/b2b-source`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## B2B Source Example
```json
{
  "xdm:ID": "1234567",
  "xdm:systemID": "S123456"
}
```

# B2B Source Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:sourceID](#xdmsourceid) | `string` | Optional | B2B Source (this schema) |
| [xdm:sourceInstanceID](#xdmsourceinstanceid) | `string` | Optional | B2B Source (this schema) |
| [xdm:sourceKey](#xdmsourcekey) | `string` | Optional | B2B Source (this schema) |
| [xdm:sourceType](#xdmsourcetype) | `string` | Optional | B2B Source (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:sourceID
### Source ID

Identifier of the record from the source data.

`xdm:sourceID`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceID Type


`string`






## xdm:sourceInstanceID
### Source Instance ID

Name of the platform with the source data.

`xdm:sourceInstanceID`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceInstanceID Type


`string`






## xdm:sourceKey
### Source Key

Unique identifier composed of the sourceType, sourceInstanceId, and sourceId.

`xdm:sourceKey`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceKey Type


`string`






## xdm:sourceType
### Source Type

Instance or Organization Id of the source data.

`xdm:sourceType`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceType Type


`string`





