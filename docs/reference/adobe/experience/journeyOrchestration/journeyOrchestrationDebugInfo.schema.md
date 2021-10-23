
# Journey Orchestration debug Fields Schema

```
https://ns.adobe.com/experience/journeyOrchestration/debugInfo
```

This event is in relation with journey and describes the debug related fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/journeyOrchestration/journeyOrchestrationDebugInfo.schema.json](adobe/experience/journeyOrchestration/journeyOrchestrationDebugInfo.schema.json) |

## Journey Orchestration debug Fields Example
```json
{
  "https://ns.adobe.com/experience/journeyOrchestration/debugInfo": {
    "https://ns.adobe.com/experience/journeyOrchestration/requestID": "b6074f45-7e7e-4680-be94-cccb5fb93c4f"
  }
}
```

# Journey Orchestration debug Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/journeyOrchestration/debugInfo](#httpsnsadobecomexperiencejourneyorchestrationdebuginfo) | `object` | Optional | Journey Orchestration debug Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/journeyOrchestration/debugInfo
### Journey Orchestration debug related fields.

`https://ns.adobe.com/experience/journeyOrchestration/debugInfo`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/debugInfo Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/requestID`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/requestID
##### Request ID

The request Id used by Journey Orchestration to track the flow of a request.

`https://ns.adobe.com/experience/journeyOrchestration/requestID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/requestID Type


`string`










