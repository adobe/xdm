
# Decision Option Details Schema

```
https://ns.adobe.com/experience/decisioning/option-detail
```

Detail about the entity that represents one of the possible selections or choices for a decision. When referenced in propositions, options are enriched with the observed metrics that applied to them, i.e. they are measurable.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/option-detail.schema.json](adobe/experience/decisioning/option-detail.schema.json) |
## Schema Hierarchy

* Decision Option Details `https://ns.adobe.com/experience/decisioning/option-detail`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Measure](../../../datatypes/data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Decision Option Details Example
```json
{
  "xdm:id": "xcore:personalized-offer:e91ee850a0bb7d9",
  "xdm:name": "Introduction to machine learning",
  "xdm:characteristics": {
    "duration": "14",
    "level": "intermediate",
    "format": "Syllable"
  },
  "xdm:score": 83,
  "xdm:propositionsTotal": {
    "xdm:value": 4948
  },
  "xdm:propositionsProfile": {
    "xdm:value": 2
  }
}
```

# Decision Option Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/propositionsProfile](#httpsnsadobecomexperiencedecisioningpropositionsprofile) | Measure | Optional | Decision Option Details (this schema) |
| [https://ns.adobe.com/experience/decisioning/propositionsTotal](#httpsnsadobecomexperiencedecisioningpropositionstotal) | Measure | Optional | Decision Option Details (this schema) |
| [repo:etag](#repoetag) | `string` | Optional | Decision Option Details (this schema) |
| [xdm:characteristics](#xdmcharacteristics) | `object` | Optional | Decision Option Details (this schema) |
| [xdm:id](#xdmid) | `string` | **Required** | Decision Option Details (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Decision Option Details (this schema) |
| [xdm:score](#xdmscore) | `number` | Optional | Decision Option Details (this schema) |
| [xdm:tags](#xdmtags) | `string[]` | Optional | Decision Option Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/propositionsProfile

The number of times a particular option was proposed so far to a particular profile. When this metric is present the record or time-series entity must include an IdentityMap the profile.

`https://ns.adobe.com/experience/decisioning/propositionsProfile`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/decisioning/propositionsProfile Type


* [Measure](../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/decisioning/propositionsTotal

The total number a particular option was proposed so far across all profiles.

`https://ns.adobe.com/experience/decisioning/propositionsTotal`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/decisioning/propositionsTotal Type


* [Measure](../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## repo:etag
### Decision Option ETag

The revision that the decision option object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in this schema

### repo:etag Type


`string`






## xdm:characteristics
### Decision Option Characteristics

Additional properties or attributes belonging to this particular decision option. Different instances can have different characteristics (keys in the map). The characteristics are name value pairs used to distinguish one decision option from others. Characteristics are used as values in content that represents this decision option and as features to analyze and optimize the performance of an option. When every instance has the same attribute or property, that aspect should be modeled as an extension schema that derives from decision option detail.

`xdm:characteristics`
* is optional
* type: `object`
* defined in this schema

### xdm:characteristics Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:id
### Decision Option Identifier

A unique identifier for the decision option.

`xdm:id`
* is **required**
* type: `string`
* defined in this schema

### xdm:id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:name
### Decision Option Name

Option name. The name is displayed in various user interfaces.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:score
### Decision Option Score

Calcuated value for that option in the context of a single scope. The value is only available if a score was calculated.

`xdm:score`
* is optional
* type: `number`
* defined in this schema

### xdm:score Type


`number`
* minimum value: `0`






## xdm:tags
### Decision Option Tags

The set of tags associated with this option. The tags are used indicate catetoegies (dimensions) that the option belonged to at the time the proposition was made.

`xdm:tags`
* is optional
* type: `string[]`

* defined in this schema

### xdm:tags Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))


  
An identifier of a Tag object. The value is the @id of the Tag that is referenced. See Tag schema https://ns.adobe.com/experience/decisioning/tag






