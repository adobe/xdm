
# User journey reporting event metrics Schema

```
https://ns.adobe.com/experience/campaign/orchestration/reportingeventmetrics
```

For state transitions, we capture certain metrics along with the dimensions. This schema hold the metrics associated with reporting of state transition

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/orchestration/reportingeventmetrics.schema.json](adobe/experience/campaign/orchestration/reportingeventmetrics.schema.json) |
## Schema Hierarchy

* User journey reporting event metrics `https://ns.adobe.com/experience/campaign/orchestration/reportingeventmetrics`
  * [Measure](../../../../datatypes/data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## User journey reporting event metrics Example
```json
{
  "https://ns.adobe.com/experience/campaign/orchestrationEnteredJourneyInstance": {
    "xdm:value": 1
  },
  "https://ns.adobe.com/experience/campaign/orchestrationErrorInJourneyInstance": {
    "xdm:value": 1
  }
}
```

# User journey reporting event metrics Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/orchestrationEnteredJourneyInstance](#httpsnsadobecomexperiencecampaignorchestrationenteredjourneyinstance) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationErrorInActionExecution](#httpsnsadobecomexperiencecampaignorchestrationerrorinactionexecution) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationErrorInEnrichment](#httpsnsadobecomexperiencecampaignorchestrationerrorinenrichment) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationErrorInEventProcessing](#httpsnsadobecomexperiencecampaignorchestrationerrorineventprocessing) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationErrorInJourneyInstance](#httpsnsadobecomexperiencecampaignorchestrationerrorinjourneyinstance) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationErrorInJumpActionExecution](#httpsnsadobecomexperiencecampaignorchestrationerrorinjumpactionexecution) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationExecutedAction](#httpsnsadobecomexperiencecampaignorchestrationexecutedaction) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationExecutedEnrichment](#httpsnsadobecomexperiencecampaignorchestrationexecutedenrichment) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationExecutedEvent](#httpsnsadobecomexperiencecampaignorchestrationexecutedevent) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationExecutedFlowControl](#httpsnsadobecomexperiencecampaignorchestrationexecutedflowcontrol) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationExecutedJumpAction](#httpsnsadobecomexperiencecampaignorchestrationexecutedjumpaction) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationExitedJourneyInstance](#httpsnsadobecomexperiencecampaignorchestrationexitedjourneyinstance) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationJumpToJourney](#httpsnsadobecomexperiencecampaignorchestrationjumptojourney) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationTimeoutInAction](#httpsnsadobecomexperiencecampaignorchestrationtimeoutinaction) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationTimeoutInEnrichment](#httpsnsadobecomexperiencecampaignorchestrationtimeoutinenrichment) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationTimeoutInEvent](#httpsnsadobecomexperiencecampaignorchestrationtimeoutinevent) | Measure | Optional | User journey reporting event metrics (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationTimeoutInJourney](#httpsnsadobecomexperiencecampaignorchestrationtimeoutinjourney) | Measure | Optional | User journey reporting event metrics (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/campaign/orchestrationEnteredJourneyInstance
### Entered Journey

Set to 1 when a journey instance is created

`https://ns.adobe.com/experience/campaign/orchestrationEnteredJourneyInstance`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationEnteredJourneyInstance Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationErrorInActionExecution
### Error in action execution

Set to 1 when an error occurs during an action execution

`https://ns.adobe.com/experience/campaign/orchestrationErrorInActionExecution`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationErrorInActionExecution Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationErrorInEnrichment
### Error in enrichment

Set to 1 when an error occurs during enrichment

`https://ns.adobe.com/experience/campaign/orchestrationErrorInEnrichment`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationErrorInEnrichment Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationErrorInEventProcessing
### Eroor in step processing

Set to 1 when an error occurs during an event processing, that is during a step processing

`https://ns.adobe.com/experience/campaign/orchestrationErrorInEventProcessing`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationErrorInEventProcessing Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationErrorInJourneyInstance
### Error in Journey Instance

Set to 1 when an error is raised in a journey instance

`https://ns.adobe.com/experience/campaign/orchestrationErrorInJourneyInstance`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationErrorInJourneyInstance Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationErrorInJumpActionExecution
### Error in jump action

Set to 1 when an error occurs during the jump action execution

`https://ns.adobe.com/experience/campaign/orchestrationErrorInJumpActionExecution`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationErrorInJumpActionExecution Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationExecutedAction
### Action executed

Set to 1 when an action is executed successfully in a journey instance

`https://ns.adobe.com/experience/campaign/orchestrationExecutedAction`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationExecutedAction Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationExecutedEnrichment
### Enrichment made successfully 

Set to 1 when an enrichment is executed successfully in a journey instance

`https://ns.adobe.com/experience/campaign/orchestrationExecutedEnrichment`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationExecutedEnrichment Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationExecutedEvent
### Event processed

Set to 1 when an event as triggered a transition in a journey instance

`https://ns.adobe.com/experience/campaign/orchestrationExecutedEvent`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationExecutedEvent Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationExecutedFlowControl
### Flow control executed

Set to 1 when an action is executed successfully in a journey instance

`https://ns.adobe.com/experience/campaign/orchestrationExecutedFlowControl`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationExecutedFlowControl Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationExecutedJumpAction
### Executed jump action

Set to 1 when a jump action is executed successfully in a journey instance

`https://ns.adobe.com/experience/campaign/orchestrationExecutedJumpAction`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationExecutedJumpAction Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationExitedJourneyInstance
### Exited journey

Set to 1 when a journey instance is flagged as ended

`https://ns.adobe.com/experience/campaign/orchestrationExitedJourneyInstance`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationExitedJourneyInstance Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationJumpToJourney
### Jump action executed successfully

Set to 1 when a jump to another journey instance is made

`https://ns.adobe.com/experience/campaign/orchestrationJumpToJourney`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationJumpToJourney Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationTimeoutInAction
### Timeout In Action

Set to 1 when timeout occurs during execution of an action

`https://ns.adobe.com/experience/campaign/orchestrationTimeoutInAction`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationTimeoutInAction Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationTimeoutInEnrichment
### Timeout In Enrichment

Set to 1 when timeout occurs during enrichement

`https://ns.adobe.com/experience/campaign/orchestrationTimeoutInEnrichment`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationTimeoutInEnrichment Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationTimeoutInEvent
### Timeout in Event

Set to 1 when timeout occurs during the processing of an event

`https://ns.adobe.com/experience/campaign/orchestrationTimeoutInEvent`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationTimeoutInEvent Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/experience/campaign/orchestrationTimeoutInJourney
### Timeout In Journey

Set to 1 when timeout occurs during the flow of a journey

`https://ns.adobe.com/experience/campaign/orchestrationTimeoutInJourney`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationTimeoutInJourney Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




