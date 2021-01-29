
# Decision Option Ranking Schema

```
https://ns.adobe.com/experience/decisioning/ranking
```

A ranking produces the order in which one option is selected over another. A fixed absolute priority can be used in case there is no other function known that maps a decsion option to an ordinal value.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/ranking.schema.json](adobe/experience/decisioning/ranking.schema.json) |
## Schema Hierarchy

* Decision Option Ranking `https://ns.adobe.com/experience/decisioning/ranking`
  * [Ranking Details](ranking-details.schema.md) `https://ns.adobe.com/experience/decisioning/ranking-details`


## Decision Option Ranking Example
```json
{
  "https://ns.adobe.com/experience/decisioning/ranking": {
    "https://ns.adobe.com/experience/decisioning/priority": 0,
    "https://ns.adobe.com/experience/decisioning/order": {
      "https://ns.adobe.com/experience/decisioning/function": "ml:function:b437a2403cf10e9"
    }
  }
}
```

# Decision Option Ranking Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/ranking](#httpsnsadobecomexperiencedecisioningranking) | Ranking Details | Optional | Decision Option Ranking (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/ranking
### Ranking Details

Rank (priority). Defines what is considered the "best action" given the context of the decision criterion. Among all the selected options that meet the eligibility constraint, the ranking order will decide the top (or top N) option(s) to be proposed.

`https://ns.adobe.com/experience/decisioning/ranking`
* is optional
* type: Ranking Details
* defined in this schema

### https://ns.adobe.com/experience/decisioning/ranking Type


* [Ranking Details](ranking-details.schema.md) – `https://ns.adobe.com/experience/decisioning/ranking-details`




