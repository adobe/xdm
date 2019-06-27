
# Copyright Owner Schema

```
https://ns.adobe.com/xdm/assets/copyright-owner
```

Describes the owner of a copyrighted work through name and ID.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Cannot be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [assets/copyright-owner.schema.json](assets/copyright-owner.schema.json) |

## Copyright Owner Example
```json
{
  "plus:copyrightOwnerID": "http://plus-id.org/01-AA-264",
  "plus:copyrightOwnerName": "Adobe Systems"
}
```

# Copyright Owner Definitions

| Property | Type | Group |
|----------|------|-------|
| [plus:copyrightOwnerID](#pluscopyrightownerid) | `string` | `https://ns.adobe.com/xdm/assets/copyright-owner#/definitions/copyright` |
| [plus:copyrightOwnerName](#pluscopyrightownername) | `string` | `https://ns.adobe.com/xdm/assets/copyright-owner#/definitions/copyright` |

## plus:copyrightOwnerID
### Copyright Owner ID

ID of the copyright owner.
If the PLUS-ID being stored in this property is registered with the PLUS Coalition, it should be expressed as a URL. For example: http://plus-id.org/PLUS-ID.

`plus:copyrightOwnerID`
* is optional
* type: `string`
* defined in this schema

### plus:copyrightOwnerID Type


`string`






## plus:copyrightOwnerName
### Copyright Owner Name

Name of Copyright Owner.

`plus:copyrightOwnerName`
* is optional
* type: `string`
* defined in this schema

### plus:copyrightOwnerName Type


`string`





