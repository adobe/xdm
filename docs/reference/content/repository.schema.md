
# Content Repository Schema

```
https://ns.adobe.com/xdm/content/repository
```

A Content Repository that is compliant with the Adobe Cloud Platform API specification.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | No | Experimental | No | Forbidden | Permitted | [content/repository.schema.json](content/repository.schema.json) |

## Content Repository Example
```json
{
  "xdm:root": "https://cc-api-storage.adobe.io/"
}
```

# Content Repository Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:root](#xdmroot) | `string` | **Required** | Content Repository (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:root


`xdm:root`
* is **required**
* type: `string`
* defined in this schema

### xdm:root Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





