
# Content repository Schema

```
https://ns.adobe.com/xdm/content/repository
```

A content repository that is compliant with the Adobe Experience Platform API specification.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | No | Experimental | No | Forbidden | Permitted | [content/repository.schema.json](content/repository.schema.json) |

## Content repository Example
```json
{
  "xdm:root": "https://cc-api-storage.adobe.io/"
}
```

# Content repository Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:root](#xdmroot) | `string` | **Required** | Content repository (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:root


`xdm:root`
* is **required**
* type: `string`
* defined in this schema

### xdm:root Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





