
# Adobe CJM ExperienceEvent - Processing Flow Timeline Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/processing-flow-timeline
```

Processing Flow Timeline details for the Adobe CJM ExperienceEvent.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/processing-flow-timeline.schema.json](adobe/experience/customerJourneyManagement/processing-flow-timeline.schema.json) |
## Schema Hierarchy

* Adobe CJM ExperienceEvent - Processing Flow Timeline Details `https://ns.adobe.com/experience/customerJourneyManagement/processing-flow-timeline`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Adobe CJM ExperienceEvent - Processing Flow Timeline Details Example
```json
[
  {
    "xdm:componentName": "JO",
    "xdm:startTime": "2021-01-26T06:23:28.914Z",
    "xdm:endTime": "2021-01-26T06:23:29.924Z"
  },
  {
    "xdm:componentName": "MES",
    "xdm:startTime": "2021-01-26T06:23:30.014Z",
    "xdm:endTime": "2021-01-26T06:23:30.110Z"
  },
  {
    "xdm:componentName": "HERALD",
    "xdm:startTime": "2021-01-26T06:23:30.210Z",
    "xdm:endTime": "2021-01-26T06:23:31.415Z"
  },
  {
    "xdm:componentName": "SDS",
    "xdm:startTime": "2021-01-26T06:23:30.410Z",
    "xdm:endTime": "2021-01-26T06:23:30.610Z"
  },
  {
    "xdm:componentName": "ESS",
    "xdm:startTime": "2021-01-26T06:23:30.810Z",
    "xdm:endTime": "2021-01-26T06:23:32.115Z"
  }
]
```

# Adobe CJM ExperienceEvent - Processing Flow Timeline Details Properties

`https://ns.adobe.com/experience/customerJourneyManagement/processing-flow-timeline`
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
| xdm:startTime | date-time | Optional | Adobe CJM ExperienceEvent - Time Profiling Schema |
| xdm:endTime | date-time | Optional | Adobe CJM ExperienceEvent - Time Profiling Schema |


