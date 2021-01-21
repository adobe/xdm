
# Decisioning Option Tags Schema

```
https://ns.adobe.com/experience/decisioning/tags
```

Tagging information used to form categories of entities.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/tags.schema.json](adobe/experience/decisioning/tags.schema.json) |
## Schema Hierarchy

* Decisioning Option Tags `https://ns.adobe.com/experience/decisioning/tags`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Decisioning Option Tags Example
```json
{
  "https://ns.adobe.com/experience/decisioning/tags": [
    "xcore:tag:e5196f1d9119862"
  ]
}
```

# Decisioning Option Tags Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/tags](#httpsnsadobecomexperiencedecisioningtags) | `string[]` | Optional | Decisioning Option Tags (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/tags
### Tags

The set of tags associated with this entity. The tags are used in filter expressions to constrain the overall inventory to a sub set (category).

`https://ns.adobe.com/experience/decisioning/tags`
* is optional
* type: `string[]`

* defined in this schema

### https://ns.adobe.com/experience/decisioning/tags Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))


  
An identifier of a tag object. The value is the @id of the tag that is referenced. See tag schema: https://ns.adobe.com/experience/decisioning/tag






