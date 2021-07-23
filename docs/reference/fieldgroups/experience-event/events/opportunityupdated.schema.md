
# Opportunity Updated Schema

```
https://ns.adobe.com/xdm/mixins/events/opportunityupdated
```

Use to capture details when the fields on a sales opportunity are updated.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/opportunityupdated.schema.json](fieldgroups/experience-event/events/opportunityupdated.schema.json) |

## Opportunity Updated Example
```json
{}
```

# Opportunity Updated Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:opportunityEvent](#xdmopportunityevent) | `object` | Optional | Opportunity Updated (this schema) |
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
| `xdm:dataValueChanges`| array | Optional |
| `xdm:opportunityID`| string | Optional |



#### xdm:dataValueChanges
##### Data Value Changes

Full record of data values updated

`xdm:dataValueChanges`
* is optional
* type: `object[]`


##### xdm:dataValueChanges Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:attributeName`| string | Optional |
| `xdm:newValue`| string | Optional |
| `xdm:oldValue`| string | Optional |



#### xdm:attributeName
##### Attribute Name

Attribute that was updated

`xdm:attributeName`
* is optional
* type: `string`

##### xdm:attributeName Type


`string`








#### xdm:newValue
##### New Value

New value of updated attribute

`xdm:newValue`
* is optional
* type: `string`

##### xdm:newValue Type


`string`








#### xdm:oldValue
##### Old Value

Previous value of updated attribute

`xdm:oldValue`
* is optional
* type: `string`

##### xdm:oldValue Type


`string`
















#### xdm:opportunityID
##### Opportunity ID

Unique ID of the Opportunity

`xdm:opportunityID`
* is optional
* type: `string`

##### xdm:opportunityID Type


`string`










