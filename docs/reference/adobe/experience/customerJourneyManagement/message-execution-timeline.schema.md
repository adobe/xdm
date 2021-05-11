
# Adobe CJM ExperienceEvent - Message Execution Timeline Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/message-execution-timeline
```

Message Execution Timeline details for the Adobe CJM ExperienceEvent.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/message-execution-timeline.schema.json](adobe/experience/customerJourneyManagement/message-execution-timeline.schema.json) |
## Schema Hierarchy

* Adobe CJM ExperienceEvent - Message Execution Timeline Details `https://ns.adobe.com/experience/customerJourneyManagement/message-execution-timeline`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Adobe CJM ExperienceEvent - Message Execution Timeline Details Example
```json
{
      "https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/JO": {
        "xdm:startTime": 1611642208737,
        "xdm:endTime": 1611642247545
      },
      "https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/MES": {
        "xdm:startTime": 1611642248545,
        "xdm:endTime": 1611642248555
      },
      "https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/HERALD": {
        "xdm:startTime": 1611642258375,
        "xdm:endTime": 1611642458375
      },
      "https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/SDS": {
        "xdm:startTime": 1611642251365,
        "xdm:endTime": 1611642251465
      },
      "https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/ESS": {
        "xdm:startTime": 1611642251495,
        "xdm:endTime": 1611642651495
      }
}
```

# Adobe CJM ExperienceEvent - Message Execution Timeline Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/JO](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutiontimelinejo) | `string` | Optional | Adobe CJM ExperienceEvent - Message Execution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/MES](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutiontimelinemes) | `string` | Optional | Adobe CJM ExperienceEvent - Message Execution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/HERALD](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutiontimelineherald) | `string` | Optional | Adobe CJM ExperienceEvent - Message Execution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/SDS](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutiontimelinesds) | `string` | Optional | Adobe CJM ExperienceEvent - Message Execution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/ESS](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutiontimelineess) | `string` | **Required** | Adobe CJM ExperienceEvent - Message Execution Details (this schema) |

## https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/JO
### Execution Time Profiling of Journey Orchestration Component 

Captures the time taken by Journey Runtime in executing a message, for a given profile.

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/JO`
* is optional
* type: `time-profiling`
* defined in this schema


## https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/MES
### Execution Time Profiling of Message Execution Service

Captures the time taken by Message Execution Service in personalisation, rendering and dispatching the message.

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/MES`
* is optional
* type: `time-profiling`
* defined in this schema


## https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/HERALD
### Execution Time Profiling of Herald/Push Service

Captures the time taken by Herald Service in processing the push packet and sending to end-service i.e FCM or APNS.

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/HERALD`
* is optional
* type: `time-profiling`
* defined in this schema


## https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/SDS
### Execution Time Profiling of Streaming Delivery Service

Captures the time taken by Streaming Delivery Service in processing the email packet and sending to ESS for dispatch.

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/SDS`
* is optional
* type: `time-profiling`
* defined in this schema


## https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/ESS
### Execution Time Profiling of Email Send Service

Captures the time taken by Email Send Service(including Momentum) in processing the email packet and dispatching to ISPs.

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecutionTimeline/ESS`
* is optional
* type: `time-profiling`
* defined in this schema


