
# Bizible Business Person Details Schema

```
https://ns.adobe.com/experience/b2b/bizible/bizible-person-details
```

This mixin is used to capture Bizible B2B Person specific attributes. A B2B Person could be a contact/lead etc.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/b2b/bizible/bizible-person-details.schema.json](adobe/experience/b2b/bizible/bizible-person-details.schema.json) |

## Bizible Business Person Details Example
```json
{}
```

# Bizible Business Person Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [bizible:stage](#biziblestage) | `string` | Optional | Bizible Business Person Details (this schema) |
| [bizible:stagePrevious](#biziblestageprevious) | `string` | Optional | Bizible Business Person Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## bizible:stage
### Contact/Lead Stage

Current stage of a business Contact or Lead.

`bizible:stage`
* is optional
* type: `string`
* defined in this schema

### bizible:stage Type


`string`






## bizible:stagePrevious
### Contact/Lead Previous Stage

Previous stage of a business Contact or Lead.

`bizible:stagePrevious`
* is optional
* type: `string`
* defined in this schema

### bizible:stagePrevious Type


`string`





