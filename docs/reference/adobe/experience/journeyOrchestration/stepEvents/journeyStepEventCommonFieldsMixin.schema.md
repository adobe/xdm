
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
| `https://ns.adobe.com/experience/journeyOrchestration/batchRecurrenceIndex`| integer | Optional |
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
| `https://ns.adobe.com/experience/journeyOrchestration/reentrance`| boolean | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/stepID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/stepName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/stepStatus`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/stepType`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/batchExternalKey
##### batchExternalKey

Journey Version ID in case of scheduled, business key in case of the business event journey (productId in case of a journey triggered by a business event). This field is only available in the context of the unitary step.

`https://ns.adobe.com/experience/journeyOrchestration/batchExternalKey`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/batchExternalKey Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/batchInstanceID
##### batchInstanceID

GUID created at invocation of each new batch instance for a journey. E.g: If a scheduled journey runs at 8.00am and 10.00am, there will be two separate different batchInstanceID’s.

`https://ns.adobe.com/experience/journeyOrchestration/batchInstanceID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/batchInstanceID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/batchRecurrenceIndex
##### batchRecurrenceIndex

A counter that increases by 1 each time a batch journey is invoked. Likewise in case of business events, it will show the E.g: If a freshly authored scheduled journey runs at 8.00am,then batchRecurrenceIndex=1 and then at 10.00am, then batchRecurrenceIndex=2.

`https://ns.adobe.com/experience/journeyOrchestration/batchRecurrenceIndex`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/batchRecurrenceIndex Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/batchToUnitary
##### batchToUnitary

(Deprecated)Indicates if this unitary instance has been triggered from a batch instance.

`https://ns.adobe.com/experience/journeyOrchestration/batchToUnitary`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/batchToUnitary Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/batchUnitaryBranchID
##### batchUnitaryBranchID

(Deprecated) If the instance has been triggered from a batch instance, unitary branch ID.

`https://ns.adobe.com/experience/journeyOrchestration/batchUnitaryBranchID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/batchUnitaryBranchID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/entrance
##### entrance

True if the step event was an entrance event for a profile(s). E.g: A step event corresponding to the first event trigger for a unitary journey and scheduled/business event trigger for a batch flow will have this field set to true.

`https://ns.adobe.com/experience/journeyOrchestration/entrance`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/entrance Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/eventID
##### eventID

If the step was triggered by an external event, this field will contain the eventID used by journey runtime to identify the event.

`https://ns.adobe.com/experience/journeyOrchestration/eventID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/eventID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/eventName
##### eventName

If the step was triggered by an external event, this field will contain the name of the event authored on Journey Canvas.

`https://ns.adobe.com/experience/journeyOrchestration/eventName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/eventName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/eventProcessed
##### eventProcessed

Set to true when the step event corresponding to the external event has been processed fully. The presence of this field denotes that the event node in the journey canvas has been processed fully.

`https://ns.adobe.com/experience/journeyOrchestration/eventProcessed`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/eventProcessed Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/externalKey
##### externalKey

Contains the profileID of the profile the current unitary journey instance is executing for. This field was added to support ID’s other than AEP Profile.

`https://ns.adobe.com/experience/journeyOrchestration/externalKey`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/externalKey Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/inTest
##### inTest

True if the journey instance was executed in test mode. 

`https://ns.adobe.com/experience/journeyOrchestration/inTest`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/inTest Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/instanceEnded
##### instanceEnded

True if the current step led to ending an instance of the journey, that is the last step in a journey for a given profile was executed successfully.

`https://ns.adobe.com/experience/journeyOrchestration/instanceEnded`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/instanceEnded Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/instanceID
##### instanceID

GUID for each instance of the journey. For each profile entering a journey, a new instance is created.

`https://ns.adobe.com/experience/journeyOrchestration/instanceID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/instanceID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/instanceType
##### instanceType

Specifies if the journey instance corresponds Unitary(a single profile) or Batch(a journey instance executes a batch of profiles, E.g: Read Segment Journey).

`https://ns.adobe.com/experience/journeyOrchestration/instanceType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/instanceType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/isExternalEvent
##### isExternalEvent

Set to true when the event that triggered this step was external to JO.

`https://ns.adobe.com/experience/journeyOrchestration/isExternalEvent`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/isExternalEvent Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/journeyID
##### journeyID

GUID generated to uniquely identify an authored journey inside the JO Runtime.

`https://ns.adobe.com/experience/journeyOrchestration/journeyID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/journeyID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/journeyNodeProcessed
##### journeyNodeProcessed

A node authored on the journey canvas can be expanded to multiple nodes inside the JO Runtime. This field is set to True when all the steps related to a journey node on canvas have been successfully processed inside the JO Runtime.

`https://ns.adobe.com/experience/journeyOrchestration/journeyNodeProcessed`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/journeyNodeProcessed Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/journeyVersion
##### journeyVersion

The authored version of the journey. E.g: 1.0, 2.0.

`https://ns.adobe.com/experience/journeyOrchestration/journeyVersion`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/journeyVersion Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID
##### journeyVersionID

GUID generated to uniquely identify a journey on the authored UI. A new journey version ID is generated if a journey is duplicated or its new version is published.

`https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/journeyVersionName
##### journeyVersionName

Name of the journey as shown on the authoring UI.

`https://ns.adobe.com/experience/journeyOrchestration/journeyVersionName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/journeyVersionName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/nodeID
##### nodeID

GUID of the node as generated on the journey canvas corresponding to this step(multiple steps can map to the same node).

`https://ns.adobe.com/experience/journeyOrchestration/nodeID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/nodeID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/nodeName
##### nodeName

Name of the node corresponding to this step as visible on the Canvas. 

`https://ns.adobe.com/experience/journeyOrchestration/nodeName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/nodeName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/nodeType
##### nodeType

Type of the node as authored on the canvas. E.g: action, segmentTrigger, end. There is a sentinel node before the initial node of the authored journey for which nodeType=start.

`https://ns.adobe.com/experience/journeyOrchestration/nodeType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/nodeType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyID
##### originJumpJourneyID

JourneyID of the first journey instance that had a jump action that led to the current journey instance. Only present if this journey was triggered by a journey jump action.

`https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyInstanceID
##### originJumpJourneyInstanceID

JourneyInstanceID of the first journey instance that had a jump action that led to the current journey instance. Only present if this journey was triggered by a journey jump action.

`https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyInstanceID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyInstanceID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyVersionID
##### originJumpJourneyVersionID

JourneyVersionID of the first journey instance that had a jump action that led to the current journey instance. Only present if this journey was triggered by a journey jump action.

`https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyVersionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentNodeID
##### parentNodeID

nodeID of the previous step in the current journey instance.

`https://ns.adobe.com/experience/journeyOrchestration/parentNodeID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentNodeID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentNodeName
##### parentNodeName

nodeName of the previous step in the current journey instance.

`https://ns.adobe.com/experience/journeyOrchestration/parentNodeName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentNodeName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentNodeType
##### parentNodeType

nodeType of the previous step in the current journey instance.

`https://ns.adobe.com/experience/journeyOrchestration/parentNodeType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentNodeType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentStepID
##### parentStepID

stepID of the previous step in the current journey instance.

`https://ns.adobe.com/experience/journeyOrchestration/parentStepID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentStepID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentStepName
##### parentStepName

stepName of the previous step in the current journey instance.

`https://ns.adobe.com/experience/journeyOrchestration/parentStepName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentStepName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/parentTransitionID
##### parentTransitionID

Contains the transitionID of the transition that led to the current step. Set to “on-error” if the transition to the current step was because of an error.

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

Whether the transition to current step occurred because of an event, action or normal flow. Possible Values:Event Triggered(if an event trigger led to the current step),Condition Triggered (if a condition evaluation led to the current step),Basic(if the current step occurred normallly as the next step in the journey).

`https://ns.adobe.com/experience/journeyOrchestration/parentTransitionType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/parentTransitionType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyID
##### previousJumpJourneyID

JourneyID of the previous journey instance that had the jump action that led to the current journey instance. Only present if this journey was triggered by a journey jump action.

`https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyInstanceID
##### previousJumpJourneyInstanceID

JourneyInstanceID of the previous journey instance that had the jump action that led to the current journey instance. Only present if this journey was triggered by a journey jump action.

`https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyInstanceID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyInstanceID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyVersionID
##### previousJumpJourneyVersionID

JourneyVersionID of the previous journey instance that had the jump action that led to the current journey instance. Only present if this journey was triggered by a journey jump action.

`https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyVersionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/processingTime
##### processingTime

Time(ms) taken to complete the processing of this step.

`https://ns.adobe.com/experience/journeyOrchestration/processingTime`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/processingTime Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/reactionActionID
##### reactionActionID

actionID of corresponding action to which the reaction occurred. Present if the current step is triggered as a result of a reaction.

`https://ns.adobe.com/experience/journeyOrchestration/reactionActionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/reactionActionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/reactionChannel
##### reactionChannel

Channel of the corresponding reaction. E.g: Email, Push

`https://ns.adobe.com/experience/journeyOrchestration/reactionChannel`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/reactionChannel Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/reactionInteractionType
##### reactionInteractionType

The user interaction that led to this reaction. E.g: Open, Click.

`https://ns.adobe.com/experience/journeyOrchestration/reactionInteractionType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/reactionInteractionType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/reentrance
##### reentrance

Set to true of the initial step event for this journey entrance has been triggered by a profile that has already finished one journey instance and is re-entering new journey instance.

`https://ns.adobe.com/experience/journeyOrchestration/reentrance`
* is optional
* type: `boolean`

##### https://ns.adobe.com/experience/journeyOrchestration/reentrance Type


`boolean`







#### https://ns.adobe.com/experience/journeyOrchestration/stepID
##### stepID

GUID corresponding to each step generated. Unique across all steps.

`https://ns.adobe.com/experience/journeyOrchestration/stepID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/stepID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/stepName
##### stepName

Name of the step as represented internally in Journey Runtime.

`https://ns.adobe.com/experience/journeyOrchestration/stepName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/stepName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/stepStatus
##### stepStatus

Gives the current state of the step that has finished executing. Possible Values: Transitions(Next step will occur on an event transition),EndStep(The last step in this journey instance has executed),Error(This step encountered an error condition, ending the current journey instance), TimedOut(The current step has ended because of a timeout on a fetch or on an action.)

`https://ns.adobe.com/experience/journeyOrchestration/stepStatus`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/stepStatus Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/stepType
##### stepType

Defines different types of steps as represented internally by Journey Runtime. Possible Values: ActionStep(Default Step Type),ConditionalRouterStep(If step involved evaluating a condition),SegmentTriggerReadStartStep(If the current step started the segmentTriggeredRead).

`https://ns.adobe.com/experience/journeyOrchestration/stepType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/stepType Type


`string`










