
# Remove From Opportunity Schema

```
https://ns.adobe.com/xdm/mixins/events/remove-from-opportunity
```

Use for information regarding opportunity event remove from opportunity events.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/events/remove-from-opportunity.schema.json](mixins/experience-event/events/remove-from-opportunity.schema.json) |

## Remove From Opportunity Example
```json
{}
```

# Remove From Opportunity Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:opportunityEvent](#xdmopportunityevent) | `object` | Optional | Remove From Opportunity (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:opportunityEvent
### Opportunity Event

`xdm:opportunityEvent`
* is optional
* type: `object`
* defined in this schema

### xdm:opportunityEvent Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:isPrimary`| boolean | Optional |
| `xdm:opportunityID`| string | Optional |
| `xdm:role`| string | Optional |



#### xdm:isPrimary
##### Is Primary

Is primary.

`xdm:isPrimary`
* is optional
* type: `boolean`

##### xdm:isPrimary Type


`boolean`







#### xdm:opportunityID
##### Opportunity ID

Opportunity ID

`xdm:opportunityID`
* is optional
* type: `string`

##### xdm:opportunityID Type


`string`








#### xdm:role
##### Role

Role.

`xdm:role`
* is optional
* type: `string`

##### xdm:role Type


`string`










