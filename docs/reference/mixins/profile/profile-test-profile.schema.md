
# Profile test details Schema

```
https://ns.adobe.com/xdm/context/profile-test-profile
```

Use to indicate that the profile record is in use for testing, verification, and should not be automatically included in normal operations.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/profile/profile-test-profile.schema.json](mixins/profile/profile-test-profile.schema.json) |
## Schema Hierarchy

* Profile test details `https://ns.adobe.com/xdm/context/profile-test-profile`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Profile test details Example
```json
{
  "xdm:testProfile": false
}
```

# Profile test details Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:testProfile](#xdmtestprofile) | `boolean` | Optional | `false` | Profile test details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:testProfile
### Test profile

Indicates the `profile` record is for use in testing and verification purposes and should not be automatically included in normal operations.

`xdm:testProfile`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### xdm:testProfile Type


`boolean`




