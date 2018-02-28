
# Namespace Schema

```
https://ns.adobe.com/xdm/context/namespace
```

The namespace or unique identifier associated with a collection of data. Each EndUserID is associated with a given namespace. A user can create and obtain information about a namespace during the solution onboarding.


| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/namespace.schema.json](context/namespace.schema.json) |

## Namespace Example
```json
{
  "@id": "https://ns.adobe.com/entities/namespace/12345",
  "xdm:code": "AA12345"
}
```

# Namespace Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `string` | Optional | Namespace (this schema) |
| [xdm:code](#xdmcode) | `string` | Optional | Namespace (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

The numeric ID associated with this namespace. This would be provided by the individual or system that created the namespace.


`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:code
### Code

The code is a shortcut to the full @id and at least one of the code or @id can be used. Sometimes, this code refered to as the data source integration code.

`xdm:code`
* is optional
* type: `string`
* defined in this schema

### xdm:code Type


`string`





