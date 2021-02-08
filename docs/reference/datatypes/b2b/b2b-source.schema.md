
# B2B Source Schema

```
https://ns.adobe.com/xdm/datatypes/b2b-source
```

This Data Type is used to capture B2B/CRM Source identifiers.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/b2b/b2b-source.schema.json](datatypes/b2b/b2b-source.schema.json) |
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
| [xdm:ID](#xdmid) | `string` | Optional | B2B Source (this schema) |
| [xdm:key](#xdmkey) | `string` | Optional | B2B Source (this schema) |
| [xdm:systemID](#xdmsystemid) | `string` | Optional | B2B Source (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:ID
### ID

This is the row id for the fragment (of whatever type it is).It could be row id for the contact, account, lead etc.

`xdm:ID`
* is optional
* type: `string`
* defined in this schema

### xdm:ID Type


`string`






## xdm:key
### System Key

This is concatination of systemId and id. The concatenated value is created by the connector in the data pipe, so it’s already in the source.

`xdm:key`
* is optional
* type: `string`
* defined in this schema

### xdm:key Type


`string`






## xdm:systemID
### System ID

This is an identifier for the source system itself and potentially includes the object type.

`xdm:systemID`
* is optional
* type: `string`
* defined in this schema

### xdm:systemID Type


`string`





