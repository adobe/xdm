
# Change Set Schema

```
https://ns.adobe.com/xdm/mixins/changeset
```

Schema for communicating row level changes to and from datasets.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/shared/changeset.schema.json](fieldgroups/shared/changeset.schema.json) |

## Change Set Example
```json
{
  "xdm:changeRequest": {
    "xdm:type": "i",
    "xdm:reason": "GDPR"
  }
}
```

# Change Set Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:changeRequest](#xdmchangerequest) | `object` | Optional | Change Set (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:changeRequest
### Change Request

Structure to store control data for row-level changes.

`xdm:changeRequest`
* is optional
* type: `object`
* defined in this schema

### xdm:changeRequest Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:reason`| string | Optional |
| `xdm:type`| string | Optional |



#### xdm:reason
##### Change Request Reason

Optional value signaling the reason for this change (e.g. GDPR).

`xdm:reason`
* is optional
* type: `string`

##### xdm:reason Type


`string`








#### xdm:type
##### Change Request Type

Value signaling the type of change.

`xdm:type`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmchangerequest-known-values).

##### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `i` | insert |
| `u` | update |
| `d` | delete |
| `m` | merge |








