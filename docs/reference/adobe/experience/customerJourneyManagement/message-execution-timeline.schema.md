
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
[
  {
    "xdm:componentName": "JO",
    "xdm:startTime": 1611642208737,
    "xdm:endTime": 1611642247545
  },
  {
    "xdm:componentName": "MES",
    "xdm:startTime": 1611642248545,
    "xdm:endTime": 1611642248555
  },
  {
    "xdm:componentName": "HERALD",
    "xdm:startTime": 1611642258375,
    "xdm:endTime": 1611642458375
  },
  {
    "xdm:componentName": "SDS",
    "xdm:startTime": 1611642251365,
    "xdm:endTime": 1611642251465
  },
  {
    "xdm:componentName": "ESS",
    "xdm:startTime": 1611642251495,
    "xdm:endTime": 1611642651495
  }
]
```

# Adobe CJM ExperienceEvent - Message Execution Timeline Details Properties

`https://ns.adobe.com/experience/customerJourneyManagement/message-execution-timeline`
* is `optional`
* type: `array`
* items: [definitions/time-profiling](#definitionstime-profiling)
* defined in this schema

## definitions/time-profiling
### Time Profiling of Execution Components 

This dataType is used to store the time profiling information of any service or component.

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| xdm:componentName | string | Optional | Adobe CJM ExperienceEvent - Time Profiling Schema |
| xdm:serviceGroup | string | Optional | Adobe CJM ExperienceEvent - Time Profiling Schema |
| xdm:startTime | number | Optional | Adobe CJM ExperienceEvent - Time Profiling Schema |
| xdm:endTime | number | Optional | Adobe CJM ExperienceEvent - Time Profiling Schema |


