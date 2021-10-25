
# Decision Scope Schema

```
https://ns.adobe.com/experience/decisioning/decision-scope
```

A Scope is basically a pair consisting of an offer activity id and an offer placement id. They are used to encapsulate a specific decisioning request.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/decision-scope.schema.json](adobe/experience/decisioning/decision-scope.schema.json) |
## Schema Hierarchy

* Decision Scope `https://ns.adobe.com/experience/decisioning/decision-scope`
  * [Record Schema](../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


# Decision Scope Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../behaviors/record.schema.md#id) |
| [https://ns.adobe.com/experience/decisioning/activity](#httpsnsadobecomexperiencedecisioningactivity) | `string` | **Required** | Decision Scope (this schema) |
| [https://ns.adobe.com/experience/decisioning/description](#httpsnsadobecomexperiencedecisioningdescription) | `string` | Optional | Decision Scope (this schema) |
| [https://ns.adobe.com/experience/decisioning/itemCount](#httpsnsadobecomexperiencedecisioningitemcount) | `integer` | Optional | Decision Scope (this schema) |
| [https://ns.adobe.com/experience/decisioning/name](#httpsnsadobecomexperiencedecisioningname) | `string` | **Required** | Decision Scope (this schema) |
| [https://ns.adobe.com/experience/decisioning/placement](#httpsnsadobecomexperiencedecisioningplacement) | `string` | **Required** | Decision Scope (this schema) |
| [repo:etag](#repoetag) | `string` | Optional | Decision Scope (this schema) |
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






## https://ns.adobe.com/experience/decisioning/activity
### Activity Id

@id of offer-activity (part of activity-placement pair defining scope).

`https://ns.adobe.com/experience/decisioning/activity`
* is **required**
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/activity Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/description
### Scope Description

Scope description. It is used to convey human readable intentions on the context of the decision being requested.

`https://ns.adobe.com/experience/decisioning/description`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/description Type


`string`






## https://ns.adobe.com/experience/decisioning/itemCount
### Item Count

Count of max number of responses.

`https://ns.adobe.com/experience/decisioning/itemCount`
* is optional
* type: `integer`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/itemCount Type


`integer`






## https://ns.adobe.com/experience/decisioning/name
### Scope Name

The Scope's external human-readable representation to clients. Property has the semantic of schema.org's 'name' property defined on http://schema.org/Thing

`https://ns.adobe.com/experience/decisioning/name`
* is **required**
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/name Type


`string`






## https://ns.adobe.com/experience/decisioning/placement
### Placement Id

@id of placement name (part of activity-placement pair defining scope).

`https://ns.adobe.com/experience/decisioning/placement`
* is **required**
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/placement Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## repo:etag
### Decision Scope ETag

The revision that the decision scope object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in this schema

### repo:etag Type


`string`





