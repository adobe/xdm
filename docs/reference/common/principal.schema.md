---
---

# Principal Schema

```
https://ns.adobe.com/xdm/common/principal
```

This model represents a principal in an access control system. Principals are entities that have been authenticated against an identity provider.

| Abstract | Extensible | Custom Properties | Defined In |
|----------|------------|-------------------|------------|
| Can be instantiated | No | Forbidden | [common/principal.schema.json](common/principal.schema.json) |

## Schema Hierarchy

* Principal `https://ns.adobe.com/xdm/common/principal`
  * [Identity Provider](identityprovider.schema.md) `https://ns.adobe.com/xdm/common/identityprovider`

## Principal Example
```json
{
  "xdm:identityProvider": "ims",
  "@id": "C0B648DE57D701277F000101@AdobeID",
  "@type": "https://ns.adobe.com/xdm-extensions/ims/user"
}
```

# Principal Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:identityProvider](#xdm:identityProvider) | `string` | **Required** | Principal (this schema) |
| [@id](#@id) | `string` | **Required** | Principal (this schema) |
| [@type](#@type) | `string` | **Required** | Principal (this schema) |

## xdm:identityProvider

The identity provider that manages this principal.

`xdm:identityProvider`
* is **required**
* type: `string`
* defined in this schema

### xdm:identityProvider Type


`string`






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
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





