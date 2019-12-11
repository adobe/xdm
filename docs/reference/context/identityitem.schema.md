
# Identity item Schema

```
https://ns.adobe.com/xdm/context/identityitem
```

An end user identity item, to be included in an instance of `context/identitymap`.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/identityitem.schema.json](context/identityitem.schema.json) |
## Schema Hierarchy

* Identity item `https://ns.adobe.com/xdm/context/identityitem`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Identity item Example
```json
{
  "xdm:id": "id123",
  "xdm:authenticatedState": "ambiguous"
}
```

# Identity item Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:authenticatedState](#xdmauthenticatedstate) | `enum` | Optional | `"ambiguous"` | Identity item (this schema) |
| [xdm:id](#xdmid) | `string` | Optional |  | Identity item (this schema) |
| [xdm:primary](#xdmprimary) | `boolean` | Optional | `false` | Identity item (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:authenticatedState

The state this identity is authenticated as for this observed ExperienceEvent.

`xdm:authenticatedState`
* is optional
* type: `enum`
* default: `"ambiguous"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmauthenticatedstate-known-values).

### xdm:authenticatedState Known Values
| Value | Description |
|-------|-------------|
| `ambiguous` | Ambiguous |
| `authenticated` | User identified by a login or similar action that was valid at the time of the event observation. |
| `loggedOut` | User was identified by a login action at some point of time previously, but is not currently logged in. |




## xdm:id
### Identifier

Identity of the consumer in the related namespace.

`xdm:id`
* is optional
* type: `string`
* defined in this schema

### xdm:id Type


`string`






## xdm:primary
### Primary

Indicates this identity is the preferred identity. Is used as a hint to help systems better organize how identities are queried.

`xdm:primary`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### xdm:primary Type


`boolean`




