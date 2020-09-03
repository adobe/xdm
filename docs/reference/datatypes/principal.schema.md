
# Principal Schema

```
https://ns.adobe.com/xdm/common/principal
```

This model represents a principal in an access control system. Principals are entities that have been authenticated against an identity provider.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | No | Stable | No | Forbidden | Permitted | [datatypes/principal.schema.json](datatypes/principal.schema.json) |
## Schema Hierarchy

* Principal `https://ns.adobe.com/xdm/common/principal`
  * [Identity Provider](identity-provider.schema.md) `https://ns.adobe.com/xdm/common/identity-provider`


## Principal Example
```json
{
  "xdm:provider": {
    "@id": "https://ims-na1.adobelogin.com/"
  },
  "@id": "C0B648DE57D701277F000101@AdobeID",
  "@type": "https://ns.adobe.com/adobecloudplatform/ims/user"
}
```

# Principal Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | **Required** | Principal (this schema) |
| [@type](#type) | `string` | **Required** | Principal (this schema) |
| [xdm:provider](#xdmprovider) | Identity Provider | **Required** | Principal (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

A unique (uniqueness is defined on the same lines as defined [here](https://tools.ietf.org/html/rfc8141#section-5)) and persistent identifier for the principal. Ideally, this identifier should be a [URI](https://tools.ietf.org/html/rfc3986).

`@id`
* is **required**
* type: `string`
* defined in this schema

### @id Type


`string`






## @type

The type of the principal. Acts as a processing hint to the client. Ideally, each value should be identified as a [URI](https://tools.ietf.org/html/rfc3986).

`@type`
* is **required**
* type: `string`
* defined in this schema

### @type Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:provider

The identity provider that manages this principal.

`xdm:provider`
* is **required**
* type: Identity Provider
* defined in this schema

### xdm:provider Type


* [Identity Provider](identity-provider.schema.md) – `https://ns.adobe.com/xdm/common/identity-provider`




