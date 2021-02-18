
# Personalized Offer Schema

```
https://ns.adobe.com/experience/offer-management/personalized-content-offer
```

Personalized offers form the set of choices for an offer decision actvity. The objective for decisioning is to take a large inventory of items and apply numerous constraint rules to that inventory to narrow it down and then to rank the qualifying options according to a criteria. The resulting propositions assemble and personalize the experience for specific individuals.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/offer-management/personalized-content-offer.schema.json](adobe/experience/offer-management/personalized-content-offer.schema.json) |
## Schema Hierarchy

* Personalized Offer `https://ns.adobe.com/experience/offer-management/personalized-content-offer`
  * [Record Schema](../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Decision Option](../decisioning/option.schema.md) `https://ns.adobe.com/experience/decisioning/option`
  * [Personalized Content Decision Option](../decisioning/personalized-content-option.schema.md) `https://ns.adobe.com/experience/decisioning/personalized-content-option`


# Personalized Offer Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../behaviors/record.schema.md#id) |
| [https://ns.adobe.com/experience/decisioning/characteristics](#httpsnsadobecomexperiencedecisioningcharacteristics) | `object` | Optional | [Decision Option](../decisioning/option.schema.md#httpsnsadobecomexperiencedecisioningcharacteristics) |
| [https://ns.adobe.com/experience/decisioning/name](#httpsnsadobecomexperiencedecisioningname) | `string` | Optional | [Decision Option](../decisioning/option.schema.md#httpsnsadobecomexperiencedecisioningname) |
| [repo:etag](#repoetag) | `string` | Optional | [Decision Option](../decisioning/option.schema.md#repoetag) |
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
* defined in [Decision Option](../decisioning/option.schema.md#httpsnsadobecomexperiencedecisioningcharacteristics)

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
* defined in [Decision Option](../decisioning/option.schema.md#httpsnsadobecomexperiencedecisioningname)

### https://ns.adobe.com/experience/decisioning/name Type


`string`






## repo:etag
### Decision Option ETag

The revision that the decision option object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in [Decision Option](../decisioning/option.schema.md#repoetag)

### repo:etag Type


`string`





