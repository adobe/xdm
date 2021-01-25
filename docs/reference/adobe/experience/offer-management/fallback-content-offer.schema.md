
# Fallback Offer Schema

```
https://ns.adobe.com/experience/offer-management/fallback-content-offer
```

A default option that is used when there is no personalized content left after checking all constraints. A fallback offer cannot have additional constraint because that option must be remain valid, eligibile, applicable and appropriate for any use in a given context. In contrast personalized offers only need to be valid.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/offer-management/fallback-content-offer.schema.json](adobe/experience/offer-management/fallback-content-offer.schema.json) |
## Schema Hierarchy

* Fallback Offer `https://ns.adobe.com/experience/offer-management/fallback-content-offer`
  * [Record Schema](../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Fallback Content Decision Option](../decisioning/fallback-content-option.schema.md) `https://ns.adobe.com/experience/decisioning/fallback-content-option`


# Fallback Offer Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../behaviors/record.schema.md#id) |
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





