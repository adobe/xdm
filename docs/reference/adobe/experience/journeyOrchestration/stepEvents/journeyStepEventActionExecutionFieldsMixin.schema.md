
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

What type of action it is. It could be ACS, Business  Action, SMS etc.

`https://ns.adobe.com/experience/journeyOrchestration/actionBusinessType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionBusinessType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionError
##### actionExecutionError

Type of error that happens when the action is called.

`https://ns.adobe.com/experience/journeyOrchestration/actionExecutionError`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionError Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionErrorCode
##### actionExecutionErrorCode

Code for action execution error. Present if the error has a code, such as an HTTP one.

`https://ns.adobe.com/experience/journeyOrchestration/actionExecutionErrorCode`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionErrorCode Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginCode
##### actionExecutionOriginCode

error code of the actionExecutionOriginError.

`https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginCode`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginCode Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginError
##### actionExecutionOriginError

This Field tells about the timeout errors during retry for a Journey Action, such as HTTP,Capping.

`https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginError`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginError Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionTime
##### actionExecutionTime

The amount of time (in milliseconds) taken to execute a current action.

`https://ns.adobe.com/experience/journeyOrchestration/actionExecutionTime`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/actionExecutionTime Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/actionID
##### actionID

ID of the action that is being executed.

`https://ns.adobe.com/experience/journeyOrchestration/actionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionName
##### actionName

Name of the action If no name has been set, the stepName will be taken.

`https://ns.adobe.com/experience/journeyOrchestration/actionName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/actionParameterized
##### actionParameterized

Indicates if the action is parameterized or not.

`https://ns.adobe.com/experience/journeyOrchestration/actionParameterized`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/actionParameterized Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/actionSchedulerCount
##### actionSchedulerCount

count of scheduler notification requests sent to the scheduler service during the step processing.

`https://ns.adobe.com/experience/journeyOrchestration/actionSchedulerCount`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/actionSchedulerCount Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/actionType
##### actionType

Type of the action.

`https://ns.adobe.com/experience/journeyOrchestration/actionType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/actionType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/batchDeliveryID
##### batchDeliveryID

This describes the delivery Id for the batch Journey.

`https://ns.adobe.com/experience/journeyOrchestration/batchDeliveryID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/batchDeliveryID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/deliveryJobID
##### deliveryJobID

This describes the delivery Job Id for the batch Journey.

`https://ns.adobe.com/experience/journeyOrchestration/deliveryJobID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/deliveryJobID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/fromSegmentTrigger
##### fromSegmentTrigger

This describes if the Batch Journey triggered from Audisence Segment.

`https://ns.adobe.com/experience/journeyOrchestration/fromSegmentTrigger`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/fromSegmentTrigger Type


`boolean`









