---
---

# Identity Provider Schema

```
https://ns.adobe.com/xdm/common/identityprovider
```

An identity provider (abbreviated IdP) is a system entity that creates, maintains, and manages identity information for principals while providing authentication services to relying party applications within a federation or distributed network. An identity provider offers subject authentication as a service.

| Abstract | Extensible | Custom Properties | Defined In |
|----------|------------|-------------------|------------|
| Can be instantiated | Yes | Forbidden | [common/identityprovider.schema.json](common/identityprovider.schema.json) |

## Identity Provider Example
```json
{
  "xdm:name": "ims"
}
```

# Identity Provider Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [name](#name) | `string` | Optional | Identity Provider (this schema) |

## name

A unique (uniqueness is defined on the same lines as defined [here](https://tools.ietf.org/html/rfc8141#section-5)) and persistent identifier for the identity provider. Ideally, this identifier should be a [URI](https://tools.ietf.org/html/rfc3986).

`name`
* is optional
* type: `string`
* defined in this schema

### name Type


`string`





