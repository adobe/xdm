
# Campaign Offer Detail Schema

```
https://ns.adobe.com/experience/campaign/offer-detail
```

Campaign offer detail is used to capture the attributes of a Campaign offer in a proposition or response. Offers are the decision options in the Offer Management domain and the Campaign offer detail datatype extends the option detail datatype.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/offer-detail.schema.json](adobe/experience/campaign/offer-detail.schema.json) |
## Schema Hierarchy

* Campaign Offer Detail `https://ns.adobe.com/experience/campaign/offer-detail`
  * [Offer Detail](../offer-management/offer-detail.schema.md) `https://ns.adobe.com/experience/offer-management/offer-detail`


# Campaign Offer Detail Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:eligibilityRule](#xdmeligibilityrule) | `string` | Optional | Campaign Offer Detail (this schema) |
| [xdm:tags](#xdmtags) | `string[]` | Optional | [Offer Detail](../offer-management/offer-detail.schema.md#xdmtags) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:eligibilityRule
### Eligibility Rule

The reference to an eligibility rule that tests a condition using the profile and/or other contextual XDM instances. The value is the URI (@id) of the eligibility rule that is referenced. See schema https://ns.adobe.com/experience/offer-management/eligibility-rule

`xdm:eligibilityRule`
* is optional
* type: `string`
* defined in this schema

### xdm:eligibilityRule Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:tags
### Tags

The set of tags associated with this offer. The tags are used in offer filter expressions to constrain the overall offer inventory to a topical sub set (category).

`xdm:tags`
* is optional
* type: `string[]`

* defined in [Offer Detail](../offer-management/offer-detail.schema.md#xdmtags)

### xdm:tags Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))


  
An identifier of a tag object. The value is the @id of the tag that is referenced. See tag schema: https://ns.adobe.com/experience/offer-management/tag






