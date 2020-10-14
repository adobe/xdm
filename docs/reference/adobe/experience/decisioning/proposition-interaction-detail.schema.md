
# Experience Event - Proposition Interaction Detail Schema

```
https://ns.adobe.com/experience/decisioning/proposition-interaction-details
```

A proposition interaction is used to link an experience event to a prior decision proposition. Each decision output has a unique event ID that can be sent back with an experience event. The decision proposition is assumed to have contributed to the experience event and is now associated with it.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/decisioning/proposition-interaction-detail.schema.json](adobe/experience/decisioning/proposition-interaction-detail.schema.json) |
## Schema Hierarchy

* Experience Event - Proposition Interaction Detail `https://ns.adobe.com/experience/decisioning/proposition-interaction-details`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Decision Event Details](decisionevent-details.schema.md) `https://ns.adobe.com/experience/decisioning/decisionevent-details`
  * [Decision Scope Details](scope-details.schema.md) `https://ns.adobe.com/experience/decisioning/scope-details`


# Experience Event - Proposition Interaction Detail Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:decisionEventDetails](#xdmdecisioneventdetails) | Decision Event Details | Optional | Experience Event - Proposition Interaction Detail (this schema) |
| [xdm:decisionEventID](#xdmdecisioneventid) | `string` | Optional | Experience Event - Proposition Interaction Detail (this schema) |
| [xdm:decisionScope](#xdmdecisionscope) | `string` | Optional | Experience Event - Proposition Interaction Detail (this schema) |
| [xdm:decisionScopeDetails](#xdmdecisionscopedetails) | Decision Scope Details | Optional | Experience Event - Proposition Interaction Detail (this schema) |
| [xdm:items](#xdmitems) | Decision Option Detail | Optional | Experience Event - Proposition Interaction Detail (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:decisionEventDetails
### Decision Event Details

A snapshot of properties from the decision event when it occured.

`xdm:decisionEventDetails`
* is optional
* type: Decision Event Details
* defined in this schema

### xdm:decisionEventDetails Type


* [Decision Event Details](decisionevent-details.schema.md) – `https://ns.adobe.com/experience/decisioning/decisionevent-details`





## xdm:decisionEventID
### Decision Event Identifier

The unique identifier of the decision event that proposed the 'items' (options). For a given decision request and profile identity the output of the decision is a unique event. If a decision is requested again for the same profile and the output are the same options, it is still considered a different proposition with a unique event ID. Multiple propositions can be associated with the same decision event. See https://ns.adobe.com/experience/decisioning/proposition.

`xdm:decisionEventID`
* is optional
* type: `string`
* defined in this schema

### xdm:decisionEventID Type


`string`






## xdm:decisionScope
### Decision Event Scope

The scope that is associated with the decision. This is the name of the scope that was in the request when the decision was made. See https://ns.adobe.com/experience/decisioning/scope-details.

`xdm:decisionScope`
* is optional
* type: `string`
* defined in this schema

### xdm:decisionScope Type


`string`






## xdm:decisionScopeDetails
### Decision Event Scope Details

A snapshot of properties from the decision scope. This is the state of the scope entity that was used in the decision requst.

`xdm:decisionScopeDetails`
* is optional
* type: Decision Scope Details
* defined in this schema

### xdm:decisionScopeDetails Type


* [Decision Scope Details](scope-details.schema.md) – `https://ns.adobe.com/experience/decisioning/scope-details`





## xdm:items
### Selected Options

One or more of the decision options that this experience event is related to. Those items were returned as output of the decision for a requested scope. For instance, if the decision returned five proposed videos to watch and the user selected two in a "Save For Later" interaction, then this experience event would record the user's reaction with an event type "custom.savedToWatchLater" and list the two selected videos in the 'items' array. 

`xdm:items`
* is optional
* type: Decision Option Detail

* defined in this schema

### xdm:items Type


Array type: Decision Option Detail

All items must be of the type:
* [Decision Option Detail](option-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/option-detail`


  
An item from the proposition's options. See 'selections' of the 'Decision Proposition Detail' mix-in.






