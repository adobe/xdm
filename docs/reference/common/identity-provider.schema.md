
# Identity Provider Schema

```
https://ns.adobe.com/xdm/common/identity-provider
```

An identity provider (abbreviated IdP) is a system entity that creates, maintains, and manages identity information for principals while providing authentication services to relying party applications within a federation or distributed network. An identity provider offers subject authentication as a service.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [common/identity-provider.schema.json](common/identity-provider.schema.json) |

## Identity Provider Example
```json
{
  "xdm:name": "ims"
}
```

# Identity Provider Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:name](#xdmname) | `string` | **Required** | Identity Provider (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:name

A unique (uniqueness is defined on the same lines as defined [here](https://tools.ietf.org/html/rfc8141#section-5)) and persistent identifier for the identity provider. Ideally, this identifier should be a [URI](https://tools.ietf.org/html/rfc3986).

`xdm:name`
* is **required**
* type: `string`
* defined in this schema

### xdm:name Type


`string`





