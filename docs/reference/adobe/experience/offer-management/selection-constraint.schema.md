
# Offer Selection Constraint (deprecated) Schema

```
https://ns.adobe.com/experience/offer-management/selection-constraint
```

Offer selection constraint specify conditions that have to be met in order for an offer to be included in weighing the best offer. Those constraints can have many aspects, ranging from date constraints over rules applied to the user profile fields to rules checked against contextual data available at decision time. (deprecated)

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/offer-management/selection-constraint.schema.json](adobe/experience/offer-management/selection-constraint.schema.json) |

# Offer Selection Constraint (deprecated) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:eligibilityRule](#xdmeligibilityrule) | `string` | Optional | Offer Selection Constraint (deprecated) (this schema) |
| [xdm:endDate](#xdmenddate) | `string` | **Required** | Offer Selection Constraint (deprecated) (this schema) |
| [xdm:startDate](#xdmstartdate) | `string` | **Required** | Offer Selection Constraint (deprecated) (this schema) |
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






## xdm:endDate
### End Date

Offer end date. Offers that have passed their end date are no longer considered eligible in the decisioning process.

`xdm:endDate`
* is **required**
* type: `string`
* defined in this schema

### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:startDate
### Start Date

Offer start date. Offers that have not reached their start date are not yet considered eligible in the decisioning.

`xdm:startDate`
* is **required**
* type: `string`
* defined in this schema

### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





