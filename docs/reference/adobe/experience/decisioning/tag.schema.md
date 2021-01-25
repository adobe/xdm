
# Decision Category Tag Schema

```
https://ns.adobe.com/experience/decisioning/tag
```

A keyword or term assigned to a decision option. Tags in this domain are reusable, searchable and identifiable keywords, i.e. their identity gets attached to other objects not simply the string that is used for human consumption. Therefore the same tag could have multiple, human readable representations. Tags can also be classified or arranged in an order that conveys additional semantics. This semantics is, however, not specified in this domain.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/tag.schema.json](adobe/experience/decisioning/tag.schema.json) |
## Schema Hierarchy

* Decision Category Tag `https://ns.adobe.com/experience/decisioning/tag`
  * [Record Schema](../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Decision Category Tag Example
```json
{
  "@id": "xcore:tag:f87c371cd0b20be",
  "https://ns.adobe.com/experience/decisioning/name": "IVR Action"
}
```

# Decision Category Tag Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../behaviors/record.schema.md#id) |
| [https://ns.adobe.com/experience/decisioning/name](#httpsnsadobecomexperiencedecisioningname) | `string` | Optional | Decision Category Tag (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../../../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/name
### Tag Name

The tag's external human-readable representation to the clients in the default language.

`https://ns.adobe.com/experience/decisioning/name`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/name Type


`string`






# Decision Category Tag Definitions

| Property | Type | Group |
|----------|------|-------|
| [https://ns.adobe.com/experience/decisioning/tagID](#httpsnsadobecomexperiencedecisioningtagid) | `string` | `https://ns.adobe.com/experience/decisioning/tag#/definitions/tag-snapshot-identifier` |
| [repo:etag](#repoetag) | `string` | `https://ns.adobe.com/experience/decisioning/tag#/definitions/tag-snapshot-identifier` |

## https://ns.adobe.com/experience/decisioning/tagID
### Tag Identifier

A unique identifier for the tag.

`https://ns.adobe.com/experience/decisioning/tagID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/tagID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## repo:etag
### Tag ETag

The revision that the tag object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in this schema

### repo:etag Type


`string`





