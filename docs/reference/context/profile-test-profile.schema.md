
# Profile Test Details Schema

```
https://ns.adobe.com/xdm/context/profile-test-profile
```

This mixin is used for indicating that the profile record is in use for testing/verification purposes and should not be automatically included in normal operations.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-test-profile.schema.json](context/profile-test-profile.schema.json) |
## Schema Hierarchy

* Profile Test Details `https://ns.adobe.com/xdm/context/profile-test-profile`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Profile Test Details Example
```json
{
  "xdm:testProfile": false
}
```

# Profile Test Details Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:testProfile](#xdmtestprofile) | `boolean` | Optional | `false` | Profile Test Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:testProfile
### Test Profile

Indicates the `profile` record is for use in testing/verification purposes and should not be automatically included in normal operation(s).

`xdm:testProfile`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### xdm:testProfile Type


`boolean`




