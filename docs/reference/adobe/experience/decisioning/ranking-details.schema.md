
# Ranking Details Schema

```
https://ns.adobe.com/experience/decisioning/ranking-details
```

A ranking produces the order in which one option is selected over another. A fixed absolute priority can be used in case there is no other function known that maps a decsion option to an ordinal value.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/ranking-details.schema.json](adobe/experience/decisioning/ranking-details.schema.json) |

## Ranking Details Example
```json
{
  "https://ns.adobe.com/experience/decisioning/priority": 3,
  "https://ns.adobe.com/experience/decisioning/order": {
    "https://ns.adobe.com/experience/decisioning/function": "xcore:ranking-function:b437a2403cf10e9"
  }
}
```

# Ranking Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/order](#httpsnsadobecomexperiencedecisioningorder) | complex | Optional | Ranking Details (this schema) |
| [https://ns.adobe.com/experience/decisioning/priority](#httpsnsadobecomexperiencedecisioningpriority) | `integer` | **Required** | Ranking Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/order
### Order Evaluation

Evaluation of a relative order of one or more decision options. Options with higher ordinal values are selected over any options with lower ordinal values. The values determined by this method can be ordered but distances between them cannot be measured and neither can sums nor products be calculated. The median and the mode are the only measures of central tendency that can be used for ordinal data.

`https://ns.adobe.com/experience/decisioning/order`
* is optional
* type: complex
* defined in this schema

### https://ns.adobe.com/experience/decisioning/order Type

Unknown type ``.

```json
{
  "properties": {
    "https://ns.adobe.com/experience/decisioning/function": {
      "type": "string",
      "format": "uri-reference",
      "title": "Scoring Function",
      "description": "A reference to a function that computes a numerical score for this decision option. Decision options will then be ordered (ranked) by that score. The value of this property is the URI (@id) of the function to be invoked with on option at a time. See schema https://ns.adobe.com/experience/decisioning/function"
    },
    "https://ns.adobe.com/experience/decisioning/rankingStrategy": {
      "type": "string",
      "format": "uri-reference",
      "title": "Ranking Strategy",
      "description": "A reference to a strategy that ranks a list of decision option. Decision options will be returned in an ordered list. The value of this property is the URI (@id) of the function to be invoked with on option at a time. See schema https://ns.adobe.com/experience/decisioning/rankingStrategy"
    }
  },
  "title": "Order Evaluation",
  "description": "Evaluation of a relative order of one or more decision options. Options with higher ordinal values are selected over any options with lower ordinal values. The values determined by this method can be ordered but distances between them cannot be measured and neither can sums nor products be calculated. The median and the mode are the only measures of central tendency that can be used for ordinal data.",
  "simpletype": "complex"
}
```





## https://ns.adobe.com/experience/decisioning/priority
### Priority

The priority of a single decision option relative to all other options. Options for which no order function is given are prioritized using this propery. Options with higher priority values are selected before any lower priority options. If two or more qualifying options share the highest priority value, one is chosen at uniform random and used for the decision proposition.

`https://ns.adobe.com/experience/decisioning/priority`
* is **required**
* type: `integer`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/priority Type


`integer`
* minimum value: `0`






# Ranking Details Definitions

| Property | Type | Group |
|----------|------|-------|
| [https://ns.adobe.com/experience/decisioning/function](#httpsnsadobecomexperiencedecisioningfunction) | `string` | `https://ns.adobe.com/experience/decisioning/ranking-details#/definitions/order-evaluation` |
| [https://ns.adobe.com/experience/decisioning/rankingStrategy](#httpsnsadobecomexperiencedecisioningrankingstrategy) | `string` | `https://ns.adobe.com/experience/decisioning/ranking-details#/definitions/order-evaluation` |

## https://ns.adobe.com/experience/decisioning/function
### Scoring Function

A reference to a function that computes a numerical score for this decision option. Decision options will then be ordered (ranked) by that score. The value of this property is the URI (@id) of the function to be invoked with on option at a time. See schema https://ns.adobe.com/experience/decisioning/function

`https://ns.adobe.com/experience/decisioning/function`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/function Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/rankingStrategy
### Ranking Strategy

A reference to a strategy that ranks a list of decision option. Decision options will be returned in an ordered list. The value of this property is the URI (@id) of the function to be invoked with on option at a time. See schema https://ns.adobe.com/experience/decisioning/rankingStrategy

`https://ns.adobe.com/experience/decisioning/rankingStrategy`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/rankingStrategy Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))





