
# Used XDM Models and Properties from those Models (deprecated) Schema

```
https://ns.adobe.com/experience/offer-management/model-usage
```

ModelUsage is a type that is used as part of the EligibilityRules schema. It serves the purpose of extracting all usages of XDM models and their properties (fields in XDM language) from an expression stored in an Eligibility Rule. 
Those expressions are a JSON formatted representation of a Profile Query Language (PQL) expression. A Schema for the JSON serialization of a PQL expression is provided in https://ns.adobe.com/experience/offer-management/filter-expression 
The information is factored out so that clients that cannot or don't want to parse and reason about the PQL/json syntax can still process aspects of the EligibilityRule. For instance, a client that wants to know what XDM data or objects are used as input values can quickly assemble that information or aggregare it over a number of Eligibility Rules that are applied at once.


| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/offer-management/model-usage.schema.json](adobe/experience/offer-management/model-usage.schema.json) |

# Used XDM Models and Properties from those Models (deprecated) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:modelPropertyPaths](#xdmmodelpropertypaths) | `string[]` | **Required** | Used XDM Models and Properties from those Models (deprecated) (this schema) |
| [xdm:modelReference](#xdmmodelreference) | `string` | **Required** | Used XDM Models and Properties from those Models (deprecated) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:modelPropertyPaths


`xdm:modelPropertyPaths`
* is **required**
* type: `string[]`

* defined in this schema

### xdm:modelPropertyPaths Type


Array type: `string[]`

All items must be of the type:
`string`



  
A fully qualified JSON path to an XDM field with dots used as the path delimiter.







## xdm:modelReference

Reference to the model, i.e. its schema $id property. 

`xdm:modelReference`
* is **required**
* type: `string`
* defined in this schema

### xdm:modelReference Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





