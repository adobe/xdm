---
---

# Content Repository Schema

```
https://ns.adobe.com/xdm/content/repository
```

A Content Repository that is compliant with the Adobe Cloud Platform API specification.

| Abstract | Extensible | Custom Properties | Defined In |
|----------|------------|-------------------|------------|
| Can be instantiated | No | Forbidden | [content/repository.schema.json](content/repository.schema.json) |

## Content Repository Example
```json
{
  "xdm:root": "https://cc-api-storage.adobe.io/"
}
```

# Content Repository Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:root](#xdm:root) | `string` | **Required** | Content Repository (this schema) |

## xdm:root



`xdm:root`
* is **required**
* type: `string`
* defined in this schema

### xdm:root Type


`string`
* format: `uri` Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





