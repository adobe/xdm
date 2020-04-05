
# Identity Schema

```
https://ns.adobe.com/xdm/context/identity
```

Identity is used to clearly distinguish people that are interacting with digital experiences. Identity is established by an identity provider, which itself is referenced in the `namespace` attribute. Within each `namespace`, the identity is unique.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/identity.schema.json](context/identity.schema.json) |
## Schema Hierarchy

* Identity `https://ns.adobe.com/xdm/context/identity`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Identity item](identityitem.schema.md) `https://ns.adobe.com/xdm/context/identityitem`
  * [Namespace](namespace.schema.md) `https://ns.adobe.com/xdm/context/namespace`


## Identity Examples

```json
{
  "xdm:id": "someone@example.com",
  "xdm:namespace": {
    "xdm:code": "Email"
  }
}
```

```json
{
  "xdm:id": "id123",
  "xdm:namespace": {
    "xdm:code": "AA12345"
  },
  "xdm:authenticatedState": "ambiguous"
}
```


# Identity Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:authenticatedState](#xdmauthenticatedstate) | `enum` | Optional | `"ambiguous"` | [Identity item](identityitem.schema.md#xdmauthenticatedstate) |
| [xdm:id](#xdmid) | `string` | Optional |  | [Identity item](identityitem.schema.md#xdmid) |
| [xdm:namespace](#xdmnamespace) | Namespace | Optional |  | Identity (this schema) |
| [xdm:primary](#xdmprimary) | `boolean` | Optional | `false` | [Identity item](identityitem.schema.md#xdmprimary) |
| [xdm:xid](#xdmxid) | `string` | Optional |  | Identity (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:authenticatedState

The state this identity is authenticated as for this observed ExperienceEvent.

`xdm:authenticatedState`
* is optional
* type: `enum`
* default: `"ambiguous"`
* defined in [Identity item](identityitem.schema.md#xdmauthenticatedstate)

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
* defined in [Identity item](identityitem.schema.md#xdmid)

### xdm:id Type


`string`






## xdm:namespace
### Namespace

The namespace associated with the `xid` attribute and matched up with the AAM data source integration code.

`xdm:namespace`
* is optional
* type: Namespace
* defined in this schema

### xdm:namespace Type


* [Namespace](namespace.schema.md) – `https://ns.adobe.com/xdm/context/namespace`





## xdm:primary
### Primary

Indicates this identity is the preferred identity. Is used as a hint to help systems better organize how identities are queried.

`xdm:primary`
* is optional
* type: `boolean`
* default: `false`
* defined in [Identity item](identityitem.schema.md#xdmprimary)

### xdm:primary Type


`boolean`





## xdm:xid
### Experience identifier

When present, experience identifier value represents a cross-namespace identifier that is unique across all namespace-scoped identifiers in all namespaces.

`xdm:xid`
* is optional
* type: `string`
* defined in this schema

### xdm:xid Type


`string`





