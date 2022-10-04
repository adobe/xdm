
# Phone Source System Markers (Experimental, please expect breaking changes) Schema

```
https://ns.adobe.com/xdm/mixins/profile-source-system-markers
```

Use this to add source system specific markers or record traits for a profile fragment (Experimental, please expect breaking changes).

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/profile/profile-source-system-markers.schema.json](fieldgroups/profile/profile-source-system-markers.schema.json) |

## Phone Source System Markers (Experimental, please expect breaking changes) Example
```json
{
  "xdm:sourceSystemName": "sales force",
  "xdm:recordTypeID": "type",
  "xdm:recordStatus": "created"
}
```

# Phone Source System Markers (Experimental, please expect breaking changes) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:recordSource](#xdmrecordsource) | `string` | Optional | Phone Source System Markers (Experimental, please expect breaking changes) (this schema) |
| [xdm:recordStatus](#xdmrecordstatus) | `string` | Optional | Phone Source System Markers (Experimental, please expect breaking changes) (this schema) |
| [xdm:recordTypeID](#xdmrecordtypeid) | `string` | Optional | Phone Source System Markers (Experimental, please expect breaking changes) (this schema) |
| [xdm:sourceSystemName](#xdmsourcesystemname) | `string` | Optional | Phone Source System Markers (Experimental, please expect breaking changes) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:recordSource
### Record Source`

Record source.

`xdm:recordSource`
* is optional
* type: `string`
* defined in this schema

### xdm:recordSource Type


`string`






## xdm:recordStatus
### Record Status

Record status.

`xdm:recordStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:recordStatus Type


`string`






## xdm:recordTypeID
### Record type ID

Record type identifier.

`xdm:recordTypeID`
* is optional
* type: `string`
* defined in this schema

### xdm:recordTypeID Type


`string`






## xdm:sourceSystemName
### Source System Name

Source system name where the profile fragment is ingested from.

`xdm:sourceSystemName`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceSystemName Type


`string`





