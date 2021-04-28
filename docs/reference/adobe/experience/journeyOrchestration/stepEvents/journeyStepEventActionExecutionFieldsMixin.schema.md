
# Journey Orchestration Step Event Action Execution Fields Schema

```
https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFields
```

This Mixin will have Journey Action Metadata Fields.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFieldsMixin.schema.json](adobe/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFieldsMixin.schema.json) |

# Journey Orchestration Step Event Action Execution Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/journeyOrchestration/stepEvents](#httpsnsadobecomexperiencejourneyorchestrationstepevents) | `object` | Optional | Journey Orchestration Step Event Action Execution Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/journeyOrchestration/stepEvents
### Journey Orchestration Action Execution Fields.

`https://ns.adobe.com/experience/journeyOrchestration/stepEvents`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/stepEvents Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/actionBusinessType`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/actionExecutionError`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/actionExecutionErrorCode`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginCode`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginError`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/actionExecutionTime`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/actionID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/actionName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/actionParameterized`| boolean | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/actionSchedulerCount`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/actionType`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/batchDeliveryID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/deliveryJobID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/fromSegmentTrigger`| boolean | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/actionBusinessType
##### actionBusinessType

The business solution powering the executed action. E.g: ACC, Epsilon. 

`https://ns.adobe.com/experience/journeyOrchestration/actionBusinessType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionBusinessType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionError
##### actionExecutionError

Error condition that prevented Journey Runtime from executing the action. E.g: timeout on the action step, capping on the action API etc, http error. 

`https://ns.adobe.com/experience/journeyOrchestration/actionExecutionError`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionError Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionErrorCode
##### actionExecutionErrorCode

Error code corresponding to actionExecutionError.

`https://ns.adobe.com/experience/journeyOrchestration/actionExecutionErrorCode`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionErrorCode Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginCode
##### actionExecutionOriginCode

Error code corresponding to actionExecutionOriginError.

`https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginCode`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginCode Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginError
##### actionExecutionOriginError

In case of timeout or http error, the latest API response message. E.g: invalid payload, internal server error.

`https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginError`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginError Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionTime
##### actionExecutionTime

Time(ms) inside Journey Engine to call the necessary APIs to execute the action.

`https://ns.adobe.com/experience/journeyOrchestration/actionExecutionTime`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionTime Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/actionID
##### actionID

GUID generated when the action is first authored on the JO canvas. Replicating the same action indirectly, by means of duplicating the journey or publishing a new version does not generate a new actionID.

`https://ns.adobe.com/experience/journeyOrchestration/actionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionName
##### actionName

Name of the action as it appears on the Journey Canvas, if the action is internal to JO Runtime, then action name is set to stepName field.

`https://ns.adobe.com/experience/journeyOrchestration/actionName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionParameterized
##### actionParameterized

True if the journey runtime passed in dynamic values retrieved at runtime to successfully execute the action. E.g: This field will be set to true, if a custom http action requires some values from external data sources for successful execution.

`https://ns.adobe.com/experience/journeyOrchestration/actionParameterized`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/actionParameterized Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/actionSchedulerCount
##### actionSchedulerCount

Number of times the Journey Runtime Scheduler was invoked to fulfil the given journey step. E.g for a Wait step, count of actionSchedulerCount=1

`https://ns.adobe.com/experience/journeyOrchestration/actionSchedulerCount`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/actionSchedulerCount Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/actionType
##### actionType

Denotes the action channel invoked. E.g: Email, SMS, customHttp

`https://ns.adobe.com/experience/journeyOrchestration/actionType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/batchDeliveryID
##### batchDeliveryID

(Deprecated).This describes the delivery Id for the batch Journey.

`https://ns.adobe.com/experience/journeyOrchestration/batchDeliveryID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/batchDeliveryID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/deliveryJobID
##### deliveryJobID

(Deprecated).This describes the delivery Job Id for the batch Journey.

`https://ns.adobe.com/experience/journeyOrchestration/deliveryJobID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/deliveryJobID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/fromSegmentTrigger
##### fromSegmentTrigger

(Deprecated).This describes if the Batch Journey triggered from Audisence Segment.

`https://ns.adobe.com/experience/journeyOrchestration/fromSegmentTrigger`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/fromSegmentTrigger Type


`boolean`









