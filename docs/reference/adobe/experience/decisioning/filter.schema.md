
# Decision Option Filter Schema

```
https://ns.adobe.com/experience/decisioning/filter
```

Filters are used to specify criteria for option selection by topic or theme. The most common filter mechanism is by the tags that are associated with an option. In general the option filter selects a subset of option from the overall inventory.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/filter.schema.json](adobe/experience/decisioning/filter.schema.json) |
## Schema Hierarchy

* Decision Option Filter `https://ns.adobe.com/experience/decisioning/filter`
  * [Record Schema](../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Decision Option Filter Example
```json
{
  "@id": "xcore:offer-filter:f6704f4d7fc0baa",
  "https://ns.adobe.com/experience/decisioning/name": "Explore",
  "https://ns.adobe.com/experience/decisioning/filterType": "anyTags",
  "https://ns.adobe.com/experience/decisioning/ids": [
    "xcore:tag:102a75bf408b1de8"
  ]
}
```

# Decision Option Filter Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../behaviors/record.schema.md#id) |
| [https://ns.adobe.com/experience/decisioning/filterType](#httpsnsadobecomexperiencedecisioningfiltertype) | `string` | Optional | Decision Option Filter (this schema) |
| [https://ns.adobe.com/experience/decisioning/name](#httpsnsadobecomexperiencedecisioningname) | `string` | Optional | Decision Option Filter (this schema) |
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






## https://ns.adobe.com/experience/decisioning/filterType
### Decision Option Filter Type

An indicator to identify the handler of the filter expression to which any parameters will be provided. Parameters will be provided as additional properties in schemas that extend Decision Option Filter.

`https://ns.adobe.com/experience/decisioning/filterType`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/filterType Type


`string`






## https://ns.adobe.com/experience/decisioning/name
### Name

Filter name. Property has the semantic of schema.org's 'name' property defined on http://schema.org/Thing

`https://ns.adobe.com/experience/decisioning/name`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/name Type


`string`






# Decision Option Filter Definitions

| Property | Type | Group |
|----------|------|-------|
| [https://ns.adobe.com/experience/decisioning/filterID](#httpsnsadobecomexperiencedecisioningfilterid) | `string` | `https://ns.adobe.com/experience/decisioning/filter#/definitions/filter-snapshot-identifier` |
| [repo:etag](#repoetag) | `string` | `https://ns.adobe.com/experience/decisioning/filter#/definitions/filter-snapshot-identifier` |

## https://ns.adobe.com/experience/decisioning/filterID
### Filter Identifier

A unique identifier for the decision option filter.

`https://ns.adobe.com/experience/decisioning/filterID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/filterID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## repo:etag
### Filter ETag

The revision that the placement object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in this schema

### repo:etag Type


`string`





