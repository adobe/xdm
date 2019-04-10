
# Identity Provider Schema

```
https://ns.adobe.com/xdm/common/identity-provider
```

An identity provider (abbreviated IdP) is a system entity that creates, maintains, and manages identity information for principals while providing authentication services to relying party applications within a federation or distributed network. An identity provider offers subject authentication as a service.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [common/identity-provider.schema.json](common/identity-provider.schema.json) |

## Identity Provider Example
```json
{
  "@id": "https://ims-na1.adobelogin.com/"
}
```

# Identity Provider Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | **Required** | Identity Provider (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

A unique (uniqueness is defined on the same lines as defined [here](https://tools.ietf.org/html/rfc8141#section-5)) and persistent identifier for the identity provider. Ideally, this identifier should be a [URI](https://tools.ietf.org/html/rfc3986).

`@id`
* is **required**
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))





