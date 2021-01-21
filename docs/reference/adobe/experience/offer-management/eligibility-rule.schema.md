
# Eligibility Rule (deprecated) Schema

```
https://ns.adobe.com/experience/offer-management/eligibility-rule
```

An eligibility rule is a named reusable predicate used in the domain of audience segmentation and message personalization. The profile query language forms the foundation of those predicates. The predicate operates not only over profile fields but also over contextual data objects provided at the time of decisioning. (deprecated)

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/offer-management/eligibility-rule.schema.json](adobe/experience/offer-management/eligibility-rule.schema.json) |
## Schema Hierarchy

* Eligibility Rule (deprecated) `https://ns.adobe.com/experience/offer-management/eligibility-rule`
  * [Filter Expression Tree](filter-expression/filter-expression.schema.md) `https://ns.adobe.com/experience/offer-management/filter-expression`


## Eligibility Rule (deprecated) Example
```json
{
  "@id": "https://www.example.com/offers/eligibility-rule/rule-0001",
  "xdm:name": "Californians with one or more purchases of more than $1000",
  "xdm:valueAsText": "homeAddress.stateOrProvince = \"CA\" AND (some x FROM xEvent WHERE commerce.order.priceTotal > 1000 AND x.commerce.order.currencyCode = \"USD\")",
  "xdm:value": {
    "nodeType": "fnApply",
    "fnName": "and",
    "params": [
      {
        "nodeType": "fnApply",
        "fnName": "=",
        "params": [
          {
            "nodeType": "fieldLookup",
            "fieldName": "xdm:stateOrProvince",
            "object": {
              "nodeType": "fieldLookup",
              "fieldName": "xdm:homeAddress",
              "object": {
                "nodeType": "literal",
                "literalType": "XDMObject",
                "value": "profile"
              }
            }
          },
          {
            "literalType": "String",
            "nodeType": "literal",
            "value": "CA"
          }
        ]
      },
      {
        "nodeType": "quantification",
        "quantifier": "some",
        "variables": [
          {
            "nodeType": "varDecl",
            "varName": "x",
            "from": {
              "nodeType": "fnApply",
              "fnName": "modelInstances",
              "params": [
                {
                  "nodeType": "literal",
                  "literalType": "String",
                  "value": "https://ns.adobe.com/xdm/context/experienceevent"
                }
              ]
            },
            "where": {
              "nodeType": "fnApply",
              "fnName": "and",
              "params": [
                {
                  "nodeType": "quantification",
                  "quantifier": "some",
                  "variables": [
                    {
                      "nodeType": "varDecl",
                      "varName": "id",
                      "from": {
                        "nodeType": "fieldLookup",
                        "fieldName": "xdm:endUserIDs",
                        "object": {
                          "nodeType": "varRef",
                          "varName": "x"
                        }
                      },
                      "where": {
                        "nodeType": "fnApply",
                        "fnName": "in",
                        "params": [
                          {
                            "nodeType": "varRef",
                            "varName": "id"
                          },
                          {
                            "nodeType": "fieldLookup",
                            "fieldName": "xdm:identities",
                            "object": {
                              "nodeType": "literal",
                              "literalType": "XDMObject",
                              "value": "profile"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "nodeType": "fnApply",
                  "fnName": ">",
                  "params": [
                    {
                      "nodeType": "fieldLookup",
                      "fieldName": "xdm:priceTotal",
                      "object": {
                        "nodeType": "fieldLookup",
                        "fieldName": "xdm:order",
                        "object": {
                          "nodeType": "fieldLookup",
                          "fieldName": "xdm:commerce",
                          "object": {
                            "nodeType": "varRef",
                            "varName": "x"
                          }
                        }
                      }
                    },
                    {
                      "nodeType": "literal",
                      "literalType": "Integer",
                      "value": 1000
                    }
                  ]
                },
                {
                  "nodeType": "fnApply",
                  "fnName": "=",
                  "params": [
                    {
                      "nodeType": "fieldLookup",
                      "fieldName": "xdm:currencyCode",
                      "object": {
                        "nodeType": "fieldLookup",
                        "fieldName": "xdm:order",
                        "object": {
                          "nodeType": "fieldLookup",
                          "fieldName": "xdm:commerce",
                          "object": {
                            "nodeType": "varRef",
                            "varName": "x"
                          }
                        }
                      }
                    },
                    {
                      "nodeType": "literal",
                      "literalType": "String",
                      "value": "USD"
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "xdm:modelUsage": [
    {
      "xdm:modelReference": "https://ns.adobe.com/xdm/context/profile",
      "xdm:modelPropertyPaths": [
        "xdm:identities",
        "xdm:homeAddress.xdm:stateProvince"
      ]
    },
    {
      "xdm:modelReference": "https://ns.adobe.com/xdm/context/experienceevent",
      "xdm:modelPropertyPaths": [
        "xdm:endUserIDs",
        "xdm:commerce.xdm:order.xdm:priceTotal",
        "xdm:commerce.xdm:order.xdm:currencyCode"
      ]
    }
  ]
}
```

# Eligibility Rule (deprecated) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Eligibility Rule (deprecated) (this schema) |
| [xdm:modelUsage](#xdmmodelusage) | Used XDM Models and Properties from those Models (deprecated) | **Required** | Eligibility Rule (deprecated) (this schema) |
| [xdm:name](#xdmname) | `string` | **Required** | Eligibility Rule (deprecated) (this schema) |
| [xdm:value](#xdmvalue) | Filter Expression Tree | **Required** | Eligibility Rule (deprecated) (this schema) |
| [xdm:valueAsText](#xdmvalueastext) | `string` | Optional | Eligibility Rule (deprecated) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### ID

The unique identifier of the eligibility rule. This identifier is assigned by clients or services that use the repository and is not generated by the repository itself. This @id must be unique within a repository container for objects that are not the same, otherwise it is interpreted as referring to the same object. The @id is used in link relationships. For example an offer's selection constraint object references an eligibility rule object.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:modelUsage
### Used Properties

A list of "model usage" objects, one per model, that lists the fully qualified path to every used property from the model.

`xdm:modelUsage`
* is **required**
* type: Used XDM Models and Properties from those Models (deprecated)

* defined in this schema

### xdm:modelUsage Type


Array type: Used XDM Models and Properties from those Models (deprecated)

All items must be of the type:
* [Used XDM Models and Properties from those Models (deprecated)](model-usage.schema.md) – `https://ns.adobe.com/experience/offer-management/model-usage`








## xdm:name
### Name

Eligibility rule name that is used to locate this object in a search operation.

`xdm:name`
* is **required**
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:value
### Expression over XDM Instances

Contains the expression tree over a collection of context XDM instances. When the expression evaluates to true the offer referring to this eligibility rule will be included in the decisioning otherwise included. Central context instances include the profile and the experience events associated with the profile.

`xdm:value`
* is **required**
* type: Filter Expression Tree
* defined in this schema

### xdm:value Type


* [Filter Expression Tree](filter-expression/filter-expression.schema.md) – `https://ns.adobe.com/experience/offer-management/filter-expression`





## xdm:valueAsText
### Expression over XDM Instances in an Alternate Query Syntax

Contains the expression over a collection of context XDM instances as a serialized string.

`xdm:valueAsText`
* is optional
* type: `string`
* defined in this schema

### xdm:valueAsText Type


`string`





