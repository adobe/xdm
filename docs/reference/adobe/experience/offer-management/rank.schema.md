
# Offer Rank (deprecated) Schema

```
https://ns.adobe.com/experience/offer-management/rank
```

Offer rank (priority) represents the default order in which one offer is selected over another in case there is no profile specific ranking order known. If after comparing the priority value two or more offers are still tied one is chosen at random and used in the offer proposition. (deprecated)

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/offer-management/rank.schema.json](adobe/experience/offer-management/rank.schema.json) |

# Offer Rank (deprecated) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:priority](#xdmpriority) | `integer` | **Required** | Offer Rank (deprecated) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:priority
### Priority

Offer priority

`xdm:priority`
* is **required**
* type: `integer`
* defined in this schema

### xdm:priority Type


`integer`
* minimum value: `0`





