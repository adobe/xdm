
# AJO Classification Fields Schema

```
https://ns.adobe.com/experience/journeyOrchestration/classification
```

A set of meta-data fields that will classify the correlation id for performance reporting.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/journeyOrchestration/journeyOrchestrationClassification.schema.json](adobe/experience/journeyOrchestration/journeyOrchestrationClassification.schema.json) |
## Schema Hierarchy

* AJO Classification Fields `https://ns.adobe.com/experience/journeyOrchestration/classification`
  * [Experience Channel](../../../datatypes/channels/channel.schema.md) `https://ns.adobe.com/xdm/channels/channel`


# AJO Classification Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/journeyOrchestration/classification/campaign](#httpsnsadobecomexperiencejourneyorchestrationclassificationcampaign) | `object` | Optional | AJO Classification Fields (this schema) |
| [https://ns.adobe.com/experience/journeyOrchestration/classification/channel](#httpsnsadobecomexperiencejourneyorchestrationclassificationchannel) | Experience Channel | Optional | AJO Classification Fields (this schema) |
| [https://ns.adobe.com/experience/journeyOrchestration/classification/experimentation](#httpsnsadobecomexperiencejourneyorchestrationclassificationexperimentation) | `object` | Optional | AJO Classification Fields (this schema) |
| [https://ns.adobe.com/experience/journeyOrchestration/classification/journey](#httpsnsadobecomexperiencejourneyorchestrationclassificationjourney) | `object` | Optional | AJO Classification Fields (this schema) |
| [https://ns.adobe.com/experience/journeyOrchestration/classification/messageID](#httpsnsadobecomexperiencejourneyorchestrationclassificationmessageid) | `string` | Optional | AJO Classification Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/journeyOrchestration/classification/campaign
### Campaign

A container to group campaign details.

`https://ns.adobe.com/experience/journeyOrchestration/classification/campaign`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/classification/campaign Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/classification/campaignID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/campaignName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/campaignVersionID`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/classification/campaignID
##### Campaign Id

The id of the campaign to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/campaignID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/campaignID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/campaignName
##### Campaign Name

The name of the campaign to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/campaignName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/campaignName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/campaignVersionID
##### Campaign Version Id

The version id of the campaign to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/campaignVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/campaignVersionID Type


`string`











## https://ns.adobe.com/experience/journeyOrchestration/classification/channel
### Channel

The channel to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/channel`
* is optional
* type: Experience Channel
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/classification/channel Type


* [Experience Channel](../../../datatypes/channels/channel.schema.md) – `https://ns.adobe.com/xdm/channels/channel`





## https://ns.adobe.com/experience/journeyOrchestration/classification/experimentation
### Experimentation

A container to group experimentation details.

`https://ns.adobe.com/experience/journeyOrchestration/classification/experimentation`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/classification/experimentation Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/classification/experimentID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/experimentName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/treatmentID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/treatmentName`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/classification/experimentID
##### Experiment Id

The id of the experiment.

`https://ns.adobe.com/experience/journeyOrchestration/classification/experimentID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/experimentID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/experimentName
##### Experiment Name

The name of the experiment.

`https://ns.adobe.com/experience/journeyOrchestration/classification/experimentName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/experimentName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/treatmentID
##### Treatment Id

The id of selected treatment for the experiment.

`https://ns.adobe.com/experience/journeyOrchestration/classification/treatmentID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/treatmentID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/treatmentName
##### Treatment Name

The name of the selected treatment for the experiment.

`https://ns.adobe.com/experience/journeyOrchestration/classification/treatmentName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/treatmentName Type


`string`











## https://ns.adobe.com/experience/journeyOrchestration/classification/journey
### Journey

A container to group journey details.

`https://ns.adobe.com/experience/journeyOrchestration/classification/journey`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/classification/journey Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/classification/actionID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/actionName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/journeyID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/journeyName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/journeyNameAndVersion`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/journeyVersionID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/nodeID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/nodeName`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/stepID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/classification/stepName`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/classification/actionID
##### actionName

The action name of the journey to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/actionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/actionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/actionName
##### Action Name

The action name of the journey to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/actionName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/actionName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/journeyID
##### Journey Id

The id of the journey to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/journeyID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/journeyID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/journeyName
##### Journey Name

The name of the journey to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/journeyName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/journeyName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/journeyNameAndVersion
##### JourneyVersionName

The name with the appended version of the journey to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/journeyNameAndVersion`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/journeyNameAndVersion Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/journeyVersionID
##### Journey Version Id

The version id of the journey to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/journeyVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/journeyVersionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/nodeID
##### Node Id

The node id of the journey to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/nodeID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/nodeID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/nodeName
##### Node Name

The node name of the journey to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/nodeName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/nodeName Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/stepID
##### Step Id

The step id of the journey to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/stepID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/stepID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/classification/stepName
##### Step Name

The step id of the journey to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/stepName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/classification/stepName Type


`string`











## https://ns.adobe.com/experience/journeyOrchestration/classification/messageID
### Message Id

The message id to which this data should be correlated.

`https://ns.adobe.com/experience/journeyOrchestration/classification/messageID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/classification/messageID Type


`string`





