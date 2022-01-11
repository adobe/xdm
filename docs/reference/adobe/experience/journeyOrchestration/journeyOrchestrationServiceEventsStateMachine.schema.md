
# Journey Orchestration service Events: State Machine Fields Schema

```
https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/stateMachine
```

This event is in relation with journey and stateMachine service event fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/journeyOrchestration/journeyOrchestrationServiceEventsStateMachine.schema.json](adobe/experience/journeyOrchestration/journeyOrchestrationServiceEventsStateMachine.schema.json) |

## Journey Orchestration service Events: State Machine Fields Example
```json
{
  "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/stateMachine": {
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventID": "f3485959-0a9e-4004-82d9-f11bd6c4585b",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventClass": "external",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCategory": "unitary",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType": "discard",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCode": "reentranceNotAllowed"
  }
}
```

# Journey Orchestration service Events: State Machine Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/stateMachine](#httpsnsadobecomexperiencejourneyorchestrationserviceeventsstatemachine) | `object` | Optional | Journey Orchestration service Events: State Machine Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/stateMachine
### Journey Orchestration state machine service event fields.

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/stateMachine`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/stateMachine Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCategory`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventClass`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCode`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCategory
##### Event Category

Incoming event category indicating if the event is an unitary or business event

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCategory`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCategory Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventClass
##### Event Class

Incoming event class indicating if the event is external or internal

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventClass`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventClass Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCode
##### Event Code

The error code indicating the reason for corresponding eventType

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCode`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCode Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventID
##### Event ID

The incoming Event ID to which this event was mapped inside the state machine. can be external or internal event ID.

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType
##### Event Type

The type of state machine service event like error, discard

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType Type


`string`










