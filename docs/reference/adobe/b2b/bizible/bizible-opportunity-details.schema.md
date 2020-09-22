
# Bizible Business Opportunity Details Schema

```
https://ns.adobe.com/b2b/bizible/bizible-opportunity-details
```

This mixin is used to capture and maintain additional Bizible opportunity attributes. They extend the ones used by industry crm systems.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/b2b/bizible/bizible-opportunity-details.schema.json](adobe/b2b/bizible/bizible-opportunity-details.schema.json) |

## Bizible Business Opportunity Details Example
```json
{}
```

# Bizible Business Opportunity Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [bizible:stage](#biziblestage) | `string` | Optional | Bizible Business Opportunity Details (this schema) |
| [bizible:stagePrevious](#biziblestageprevious) | `string` | Optional | Bizible Business Opportunity Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## bizible:stage
### Opportunity Stage

Current stage of a business opportunity.

`bizible:stage`
* is optional
* type: `string`
* defined in this schema

### bizible:stage Type


`string`






## bizible:stagePrevious
### Opportunity Previous Stage

Previous stage of a business opportunity.

`bizible:stagePrevious`
* is optional
* type: `string`
* defined in this schema

### bizible:stagePrevious Type


`string`





