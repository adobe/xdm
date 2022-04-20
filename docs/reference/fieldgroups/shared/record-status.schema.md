
# Record Status Schema

```
https://ns.adobe.com/xdm/mixins/record-status
```

Used to provide a status for the igested record. Example, mark the isDeleted flag TRUE if the record is marked for deletion. This field group could also be used to add more record statuses in future.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/shared/record-status.schema.json](fieldgroups/shared/record-status.schema.json) |

## Record Status Example
```json
{
  "xdm:isDeleted": true
}
```

# Record Status Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | Record Status (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:isDeleted
### Soft Delete Flag

Soft delete flag to indicate if the record is marked for deletion.

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDeleted Type


`boolean`




