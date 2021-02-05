
# Decision Option Schema

```
https://ns.adobe.com/experience/decisioning/option
```

This class is used to capture minimum properties that are required to define the concept of a decision option. A decision option represents one of the possible selections or choices for a decision.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/option.schema.json](adobe/experience/decisioning/option.schema.json) |
## Schema Hierarchy

* Decision Option `https://ns.adobe.com/experience/decisioning/option`
  * [Record Schema](../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Decision Option Example
```json
{
  "@id": "personalized-offer:e526a1503bf29e9",
  "https://ns.adobe.com/experience/decisioning/name": "Introduction to machine learning",
  "https://ns.adobe.com/experience/decisioning/characteristics": {
    "syllable": "ML001",
    "duration": "30",
    "durationUnit": "minutes",
    "level": "Beginner"
  }
}
```

# Decision Option Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../behaviors/record.schema.md#id) |
| [https://ns.adobe.com/experience/decisioning/characteristics](#httpsnsadobecomexperiencedecisioningcharacteristics) | `object` | Optional | Decision Option (this schema) |
| [https://ns.adobe.com/experience/decisioning/name](#httpsnsadobecomexperiencedecisioningname) | `string` | Optional | Decision Option (this schema) |
| [repo:etag](#repoetag) | `string` | Optional | Decision Option (this schema) |
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






## https://ns.adobe.com/experience/decisioning/characteristics
### Decision Option Characteristics

Additional properties or attributes belonging to this particular decision option. Different instances can have different characteristics (keys in the map). The characteristics are name value pairs used to distinguish one decision option from others. Characteristics are used as values in content that represents this decision option and as features to analyze and optimize the performance of an option. When every instance has the same attribute or property, that aspect should be modeled as an extension schema that derives from decision option detail.

`https://ns.adobe.com/experience/decisioning/characteristics`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/characteristics Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## https://ns.adobe.com/experience/decisioning/name
### Decision Option Name

Option name. The name is displayed in various user interfaces.

`https://ns.adobe.com/experience/decisioning/name`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/name Type


`string`






## repo:etag
### Decision Option ETag

The revision that the decision option object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in this schema

### repo:etag Type


`string`






# Decision Option Definitions

| Property | Type | Group |
|----------|------|-------|
| [https://ns.adobe.com/experience/decisioning/optionID](#httpsnsadobecomexperiencedecisioningoptionid) | `string` | `https://ns.adobe.com/experience/decisioning/option#/definitions/option-snapshot-identifier` |
| [https://ns.adobe.com/experience/decisioning/propositionsProfile](#httpsnsadobecomexperiencedecisioningpropositionsprofile) | reference | `https://ns.adobe.com/experience/decisioning/option#/definitions/option-snapshot-measures` |
| [https://ns.adobe.com/experience/decisioning/propositionsTotal](#httpsnsadobecomexperiencedecisioningpropositionstotal) | reference | `https://ns.adobe.com/experience/decisioning/option#/definitions/option-snapshot-measures` |
| [https://ns.adobe.com/experience/decisioning/tags](#httpsnsadobecomexperiencedecisioningtags) | `string[]` | `https://ns.adobe.com/experience/decisioning/option#/definitions/option-snapshot-tags` |

## https://ns.adobe.com/experience/decisioning/optionID
### Decision Option Identifier

A unique identifier for the decision option.

`https://ns.adobe.com/experience/decisioning/optionID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/optionID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/propositionsProfile

The number of times a particular option was proposed so far to a particular profile. When this metric is present the record or time-series entity must include an IdentityMap the profile.

`https://ns.adobe.com/experience/decisioning/propositionsProfile`
* is optional
* type: reference
* defined in this schema

### https://ns.adobe.com/experience/decisioning/propositionsProfile Type


* []() – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/decisioning/propositionsTotal

The total number a particular option was proposed so far across all profiles.

`https://ns.adobe.com/experience/decisioning/propositionsTotal`
* is optional
* type: reference
* defined in this schema

### https://ns.adobe.com/experience/decisioning/propositionsTotal Type


* []() – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/decisioning/tags
### Decision Option Tags

The set of tags associated with this option. The tags are used indicate catetoegies (dimensions) that the option belonged to at the time the proposition was made.

`https://ns.adobe.com/experience/decisioning/tags`
* is optional
* type: `string[]`

* defined in this schema

### https://ns.adobe.com/experience/decisioning/tags Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))


  
An identifier of a Tag object. The value is the @id of the Tag that is referenced. See Tag schema https://ns.adobe.com/experience/decisioning/tag






