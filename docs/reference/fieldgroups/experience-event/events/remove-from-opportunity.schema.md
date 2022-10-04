
# Remove From Opportunity Schema

```
https://ns.adobe.com/xdm/mixins/events/remove-from-opportunity
```

Use to capture details when a person is removed as a point of contact on a sales opportunity.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/events/remove-from-opportunity.schema.json](fieldgroups/experience-event/events/remove-from-opportunity.schema.json) |

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
| `xdm:opportunityKey`|  | Optional |
| `xdm:role`| string | Optional |



#### xdm:isPrimary
##### Is Primary

Boolean indicating if the person was the primary contact on the Opportunity.

`xdm:isPrimary`
* is optional
* type: `boolean`

##### xdm:isPrimary Type


`boolean`







#### xdm:opportunityID
##### Opportunity ID

Unique identifier of the Opportunity.

`xdm:opportunityID`
* is optional
* type: `string`

##### xdm:opportunityID Type


`string`








#### xdm:opportunityKey
##### Opportunity Key

Unique composite identifier of the Opportunity.

`xdm:opportunityKey`
* is optional
* type: reference

##### xdm:opportunityKey Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:role
##### Role

Role of the person on the Opportunity.

`xdm:role`
* is optional
* type: `string`

##### xdm:role Type


`string`










