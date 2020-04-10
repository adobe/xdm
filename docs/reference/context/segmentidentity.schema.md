
# Segment identity Schema

```
https://ns.adobe.com/xdm/context/segmentidentity
```

Segment identity is used to clearly distinguish segments from multiple sources. Segment identity is established by an segment identity provider, which itself is referenced in the `namespace` attribute. Within each `namespace`, the segment identity is unique.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/segmentidentity.schema.json](context/segmentidentity.schema.json) |
## Schema Hierarchy

* Segment identity `https://ns.adobe.com/xdm/context/segmentidentity`
  * [Namespace](namespace.schema.md) `https://ns.adobe.com/xdm/context/namespace`


## Segment identity Example
```json
{
  "@id": "https://data.adobe.io/entities/segmentIdentity/id123",
  "xdm:namespace": {
    "xdm:code": "AA12345"
  }
}
```

# Segment identity Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Segment identity (this schema) |
| [xdm:namespace](#xdmnamespace) | Namespace | Optional | Segment identity (this schema) |
| [xdm:xid](#xdmxid) | `string` | Optional | Segment identity (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

Identity of the segment in the related namespace.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:namespace
### Namespace

The namespace associated with the `xid` attribute.

`xdm:namespace`
* is optional
* type: Namespace
* defined in this schema

### xdm:namespace Type


* [Namespace](namespace.schema.md) – `https://ns.adobe.com/xdm/context/namespace`





## xdm:xid
### Experience identifier

When present, this value represents a cross-namespace identifier that is unique across all namespace-scoped identifiers in all namespaces.

`xdm:xid`
* is optional
* type: `string`
* defined in this schema

### xdm:xid Type


`string`





