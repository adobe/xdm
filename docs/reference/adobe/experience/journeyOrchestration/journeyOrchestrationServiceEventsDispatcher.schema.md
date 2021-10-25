
# Journey Orchestration service Events: Dispatcher Fields Schema

```
https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/dispatcher
```

This event is in relation with journey and dispatcher service event fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/journeyOrchestration/journeyOrchestrationServiceEventsDispatcher.schema.json](adobe/experience/journeyOrchestration/journeyOrchestrationServiceEventsDispatcher.schema.json) |

## Journey Orchestration service Events: Dispatcher Fields Example
```json
{
  "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/dispatcher": {
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventID": "f3485959-0a9e-4004-82d9-f11bd6c4585b",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/projectionID": "f3485959-0a9e-4004-82d9-f11bd6c4585b",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType": "error",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCode": "ERROR_SERVICE_INTERNAL"
  }
}
```

# Journey Orchestration service Events: Dispatcher Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/dispatcher](#httpsnsadobecomexperiencejourneyorchestrationserviceeventsdispatcher) | `object` | Optional | Journey Orchestration service Events: Dispatcher Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/dispatcher
### Journey Orchestration dispatcher service event fields.

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/dispatcher`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/dispatcher Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCode`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/projectionID`| string | Optional |



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

The Event ID to which this event was mapped inside the controller.

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType
##### Event Type

The type of dispatcher service event like error, discard

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/projectionID
##### Projection ID

The projection id of the segment being used in journey

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/projectionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/projectionID Type


`string`










