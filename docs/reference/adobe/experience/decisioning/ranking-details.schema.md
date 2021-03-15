
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

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:order](#xdmorder) | complex | Optional |  | Ranking Details (this schema) |
| [xdm:priority](#xdmpriority) | `integer` | Optional | `0` | Ranking Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:order
### Order Evaluation

Evaluation of a relative order of one or more decision options. Options with higher ordinal values are selected over any options with lower ordinal values. The values determined by this method can be ordered but distances between them cannot be measured and neither can sums nor products be calculated. The median and the mode are the only measures of central tendency that can be used for ordinal data.

`xdm:order`
* is optional
* type: complex
* defined in this schema

### xdm:order Type

Unknown type ``.

```json
{
  "properties": {
    "xdm:orderEvaluationType": {
      "type": "string",
      "title": "Order Evaluation Type",
      "enum": [
        "static",
        "scoringFunction",
        "rankingStrategy"
      ],
      "description": "Specifies which order evaluation mechanism is used, static priority of the decision options, a scoring function that calculates a  numeric value for every option or a ranking strategy that receives a list to order it."
    },
    "xdm:function": {
      "type": "string",
      "format": "uri-reference",
      "title": "Scoring Function",
      "description": "A reference to a function that computes a numerical score for this decision option. Decision options will then be ordered (ranked) by that score. The value of this property is the URI (@id) of the function to be invoked with on option at a time. See schema https://ns.adobe.com/experience/decisioning/function"
    },
    "xdm:rankingStrategy": {
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





## xdm:priority
### Priority

The priority of a single decision option relative to all other options. Options for which no order function is given are prioritized using this propery. Options with higher priority values are selected before any lower priority options. If two or more qualifying options share the highest priority value, one is chosen at uniform random and used for the decision proposition.

`xdm:priority`
* is optional
* type: `integer`
* default: `0`
* defined in this schema

### xdm:priority Type


`integer`
* minimum value: `0`






# Ranking Details Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:function](#xdmfunction) | `string` | `https://ns.adobe.com/experience/decisioning/ranking-details#/definitions/order-evaluation` |
| [xdm:orderEvaluationType](#xdmorderevaluationtype) | `enum` | `https://ns.adobe.com/experience/decisioning/ranking-details#/definitions/order-evaluation` |
| [xdm:rankingStrategy](#xdmrankingstrategy) | `string` | `https://ns.adobe.com/experience/decisioning/ranking-details#/definitions/order-evaluation` |

## xdm:function
### Scoring Function

A reference to a function that computes a numerical score for this decision option. Decision options will then be ordered (ranked) by that score. The value of this property is the URI (@id) of the function to be invoked with on option at a time. See schema https://ns.adobe.com/experience/decisioning/function

`xdm:function`
* is optional
* type: `string`
* defined in this schema

### xdm:function Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:orderEvaluationType
### Order Evaluation Type

Specifies which order evaluation mechanism is used, static priority of the decision options, a scoring function that calculates a  numeric value for every option or a ranking strategy that receives a list to order it.

`xdm:orderEvaluationType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmorderevaluationtype-known-values).

### xdm:orderEvaluationType Known Values
| Value | Description |
|-------|-------------|
| `static` |  |
| `scoringFunction` |  |
| `rankingStrategy` |  |




## xdm:rankingStrategy
### Ranking Strategy

A reference to a strategy that ranks a list of decision option. Decision options will be returned in an ordered list. The value of this property is the URI (@id) of the function to be invoked with on option at a time. See schema https://ns.adobe.com/experience/decisioning/rankingStrategy

`xdm:rankingStrategy`
* is optional
* type: `string`
* defined in this schema

### xdm:rankingStrategy Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))





