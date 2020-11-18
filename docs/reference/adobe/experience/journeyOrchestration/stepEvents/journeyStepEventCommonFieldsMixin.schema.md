
# Journey Orchestration Step Event Common Fields Schema

```
https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFields
```

This Mixin contains the common Journey Metadata information.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFieldsMixin.schema.json](adobe/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFieldsMixin.schema.json) |

# Journey Orchestration Step Event Common Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/journeyOrchestration/stepEvents](#httpsnsadobecomexperiencejourneyorchestrationstepevents) | `object` | Optional | Journey Orchestration Step Event Common Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/journeyOrchestration/stepEvents
### Journey Orchestration for creating user journey

`https://ns.adobe.com/experience/journeyOrchestration/stepEvents`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/stepEvents Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/batchExternalKey`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/batchInstanceID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/batchToUnitary`| boolean | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/batchUnitaryBranchID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/entrance`| boolean | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/eventID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/eventName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/eventProcessed`| boolean | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/externalKey`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/inTest`| boolean | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/instanceEnded`| boolean | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/instanceID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/instanceType`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/isExternalEvent`| boolean | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/journeyID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/journeyNodeProcessed`| boolean | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/journeyVersion`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/journeyVersionName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/nodeID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/nodeName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/nodeType`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyInstanceID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyVersionID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/parentNodeID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/parentNodeName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/parentNodeType`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/parentStepID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/parentStepName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/parentTransitionID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/parentTransitionName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/parentTransitionType`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyInstanceID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyVersionID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/processingTime`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/reactionActionID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/reactionChannel`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/reactionInteractionType`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/recurrenceIndex`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/reentrance`| boolean | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/stepID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/stepName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/stepStatus`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/stepType`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/batchExternalKey
##### batchExternalKey

 External Key for batch event.

`https://ns.adobe.com/experience/journeyOrchestration/batchExternalKey`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/batchExternalKey Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/batchInstanceID
##### batchInstanceID

 this is the batch instance ID.

`https://ns.adobe.com/experience/journeyOrchestration/batchInstanceID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/batchInstanceID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/batchToUnitary
##### batchToUnitary

Indicates if this unitary instance has been triggered from a batch instance.

`https://ns.adobe.com/experience/journeyOrchestration/batchToUnitary`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/batchToUnitary Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/batchUnitaryBranchID
##### batchUnitaryBranchID

If the instance has been triggered from a batch instance, unitary branch ID.

`https://ns.adobe.com/experience/journeyOrchestration/batchUnitaryBranchID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/batchUnitaryBranchID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/entrance
##### entrance

Indicate if the user has entered the journey. If not present, assuming that the value is false.

`https://ns.adobe.com/experience/journeyOrchestration/entrance`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/entrance Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/eventID
##### eventID

Event ID in processing, for the step processing.

`https://ns.adobe.com/experience/journeyOrchestration/eventID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/eventID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/eventName
##### eventName

Event Name in processing, for the step processing.

`https://ns.adobe.com/experience/journeyOrchestration/eventName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/eventName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/eventProcessed
##### eventProcessed

Boolean field describes if the event has been Processed. 

`https://ns.adobe.com/experience/journeyOrchestration/eventProcessed`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/eventProcessed Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/externalKey
##### externalKey

External key extracted from the event to process it.

`https://ns.adobe.com/experience/journeyOrchestration/externalKey`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/externalKey Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/inTest
##### inTest

Whether this journey is in test mode or not.

`https://ns.adobe.com/experience/journeyOrchestration/inTest`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/inTest Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/instanceEnded
##### instanceEnded

Indicate if the instance is ended (sucessfully or not).

`https://ns.adobe.com/experience/journeyOrchestration/instanceEnded`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/instanceEnded Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/instanceID
##### instanceID

Internal ID of the journey instance.

`https://ns.adobe.com/experience/journeyOrchestration/instanceID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/instanceID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/instanceType
##### instanceType

indicate the instance type, if it is batch or unitary.

`https://ns.adobe.com/experience/journeyOrchestration/instanceType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/instanceType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/isExternalEvent
##### isExternalEvent

Whether the Event being processed, is an external event or not.

`https://ns.adobe.com/experience/journeyOrchestration/isExternalEvent`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/isExternalEvent Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/journeyID
##### journeyID

ID of the journey.

`https://ns.adobe.com/experience/journeyOrchestration/journeyID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/journeyID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/journeyNodeProcessed
##### journeyNodeProcessed

Field describes if the journeyNode is processed.

`https://ns.adobe.com/experience/journeyOrchestration/journeyNodeProcessed`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/journeyNodeProcessed Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/journeyVersion
##### journeyVersion

Version of the journey version.

`https://ns.adobe.com/experience/journeyOrchestration/journeyVersion`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/journeyVersion Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID
##### journeyVersionID

ID of the journey version. This id represents the identity reference to the journey, in case of the journeyStepEvent.

`https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/journeyVersionName
##### journeyVersionName

Name of the journey version.

`https://ns.adobe.com/experience/journeyOrchestration/journeyVersionName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/journeyVersionName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/nodeID
##### nodeID

client node ID.

`https://ns.adobe.com/experience/journeyOrchestration/nodeID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/nodeID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/nodeName
##### nodeName

Name of the Journey Step Node being processed.

`https://ns.adobe.com/experience/journeyOrchestration/nodeName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/nodeName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/nodeType
##### nodeType

Type of the Journey Step Node being processed.

`https://ns.adobe.com/experience/journeyOrchestration/nodeType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/nodeType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyID
##### originJumpJourneyID

Journey ID of the initial journey in a journey jump scenario. 

`https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyInstanceID
##### originJumpJourneyInstanceID

Journey instance ID of the initial journey in a journey jump scenario. 

`https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyInstanceID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyInstanceID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyVersionID
##### originJumpJourneyVersionID

Journey version ID of the initial journey in a journey jump scenario. 

`https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyVersionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentNodeID
##### parentNodeID

Node ID of the parent of the current processed node in the instance.

`https://ns.adobe.com/experience/journeyOrchestration/parentNodeID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentNodeID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentNodeName
##### parentNodeName

Node Name of the parent of the current processed node in the instance.

`https://ns.adobe.com/experience/journeyOrchestration/parentNodeName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentNodeName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentNodeType
##### parentNodeType

Node Type of the parent of the current processed node in the instance.

`https://ns.adobe.com/experience/journeyOrchestration/parentNodeType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentNodeType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentStepID
##### parentStepID

Step ID of the parent of the current processed step in the instance.

`https://ns.adobe.com/experience/journeyOrchestration/parentStepID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentStepID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentStepName
##### parentStepName

Step name of the parent of the current step.

`https://ns.adobe.com/experience/journeyOrchestration/parentStepName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentStepName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentTransitionID
##### parentTransitionID

Id of the transition which has brought the instance to the processed step.

`https://ns.adobe.com/experience/journeyOrchestration/parentTransitionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentTransitionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentTransitionName
##### parentTransitionName

Name of the transition which has brought the instance to the processed step.

`https://ns.adobe.com/experience/journeyOrchestration/parentTransitionName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentTransitionName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentTransitionType
##### parentTransitionType

Type of the transition which has brought the instance to the processed step.

`https://ns.adobe.com/experience/journeyOrchestration/parentTransitionType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentTransitionType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyID
##### previousJumpJourneyID

Journey ID of the previous journey in a journey jump scenario. 

`https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyInstanceID
##### previousJumpJourneyInstanceID

Journey instance ID of the previous journey in a journey jump scenario. 

`https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyInstanceID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyInstanceID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyVersionID
##### previousJumpJourneyVersionID

Journey version ID of the previous journey in a journey jump scenario. 

`https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyVersionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/processingTime
##### processingTime

Total time in milliseconds from the instance step entrance to the end of the processing.

`https://ns.adobe.com/experience/journeyOrchestration/processingTime`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/processingTime Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/reactionActionID
##### reactionActionID

Message action ID referenced by the reaction in a journey. 

`https://ns.adobe.com/experience/journeyOrchestration/reactionActionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/reactionActionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/reactionChannel
##### reactionChannel

Message channel referenced by the reaction (email, push) in a journey. 

`https://ns.adobe.com/experience/journeyOrchestration/reactionChannel`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/reactionChannel Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/reactionInteractionType
##### reactionInteractionType

Message interaction type referenced by the reaction (click, open, sent, error...) in a journey. 

`https://ns.adobe.com/experience/journeyOrchestration/reactionInteractionType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/reactionInteractionType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/recurrenceIndex
##### recurrenceIndex

Index of the recurrence if the journey is batch and recurring (first run has recurrenceIndex = 1).

`https://ns.adobe.com/experience/journeyOrchestration/recurrenceIndex`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/recurrenceIndex Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/reentrance
##### reentrance

Indicate if the user has reentered the journey with the same instance. If not present, assuming that the value is false.

`https://ns.adobe.com/experience/journeyOrchestration/reentrance`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/reentrance Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/stepID
##### stepID

Unique id of the step that is currently in processing.

`https://ns.adobe.com/experience/journeyOrchestration/stepID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/stepID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/stepName
##### stepName

Name of the step that is currently in processing.

`https://ns.adobe.com/experience/journeyOrchestration/stepName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/stepName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/stepStatus
##### stepStatus

Status of the journey step, representing in which shape the step is, when its processing has been done.

`https://ns.adobe.com/experience/journeyOrchestration/stepStatus`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/stepStatus Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/stepType
##### stepType

Type of the step.

`https://ns.adobe.com/experience/journeyOrchestration/stepType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/stepType Type


`string`










