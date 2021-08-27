
# Add To Opportunity Schema

```
https://ns.adobe.com/xdm/mixins/events/add-to-opportunity
```

Use to capture details when a person is added as a point of contact on a sales opportunity.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/add-to-opportunity.schema.json](fieldgroups/experience-event/events/add-to-opportunity.schema.json) |

## Add To Opportunity Example
```json
{}
```

# Add To Opportunity Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:opportunityEvent](#xdmopportunityevent) | `object` | Optional | Add To Opportunity (this schema) |
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

Boolean indicating if person is the primary contact on the Opportunity.

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










