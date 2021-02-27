
# Option Selection Details Schema

```
https://ns.adobe.com/experience/decisioning/option-selection-details
```

A component of a decision criteria that defines option applicability constraints that are independent of a profile. The option selection is either a (reusable) filter rule or a list that directly specifies the options. Usually the option is included or excluded based on tags or characteristics of the option. The filter must evaluate to true or false for any given option but independent of user profile. A simplified form of an option selection criteria is an explicit listing of the options without a separate filter query. Either an option list or an option filter rule can be specified.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/option-selection-details.schema.json](adobe/experience/decisioning/option-selection-details.schema.json) |

## Option Selection Details Examples

```json
{
  "https://ns.adobe.com/experience/decisioning/description": "Charge_Elite_30 Offer",
  "https://ns.adobe.com/experience/decisioning/optionSelectionType": "directList",
  "https://ns.adobe.com/experience/decisioning/options": [
    "xcore:offer:f6998eb62ed6f15"
  ]
}
```

```json
{
  "https://ns.adobe.com/experience/decisioning/description": "All Premium Credit Cards",
  "https://ns.adobe.com/experience/decisioning/optionSelectionType": "filter",
  "https://ns.adobe.com/experience/decisioning/filter": "xcore:offer-filter:f66f792de3c0ba9"
}
```


# Option Selection Details Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:description](#xdmdescription) | `string` | Optional |  | Option Selection Details (this schema) |
| [xdm:filter](#xdmfilter) | `string` | Optional |  | Option Selection Details (this schema) |
| [xdm:optionSelectionType](#xdmoptionselectiontype) | `enum` | Optional | `"none"` | Option Selection Details (this schema) |
| [xdm:options](#xdmoptions) | `string[]` | Optional |  | Option Selection Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:description
### Description

Option selection description. It is used to convey human readable intentions on how or why this option selection was constructed and/or what option will match.

`xdm:description`
* is optional
* type: `string`
* defined in this schema

### xdm:description Type


`string`






## xdm:filter
### Option Filter

The reference to a tag based filter that matches options from an inventory using their attached tags. The value is the URI (@id) of the decision rule that is referenced. See schema https://ns.adobe.com/experience/decisioning/filter .

`xdm:filter`
* is optional
* type: `string`
* defined in this schema

### xdm:filter Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:optionSelectionType
### Profile Constraint Type

Determines if any constraints are currently set and how the contraints are expressed. It could be though a filter query or through one or more segment memberships.

`xdm:optionSelectionType`
* is optional
* type: `enum`
* default: `"none"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmoptionselectiontype-known-values).

### xdm:optionSelectionType Known Values
| Value | Description |
|-------|-------------|
| `directList` |  |
| `filter` |  |




## xdm:options
### Option List

A list that directly specifies the options without evaluating a filter query. Either an option list or an option filter rule can be specified.

`xdm:options`
* is optional
* type: `string[]`

* defined in this schema

### xdm:options Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))


  
An identifier of an decision option entity. The value value refers to an `@id` property of a decision option.






