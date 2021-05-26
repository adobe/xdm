
# Processing Flow Timeline Schema

```
https://ns.adobe.com/xdm/context/experienceevent-processing-flow-timeline
```

Captures an array of time-profiling info, for every component of processing flow.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-processing-flow-timeline.schema.json](mixins/experience-event/experienceevent-processing-flow-timeline.schema.json) |

## Schema Hierarchy

* Processing Flow Timeline `https://ns.adobe.com/xdm/context/experienceevent-processing-flow-timeline`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Processing Flow Timeline Example
```json
{
  "xdm:flowName": "ajo",
  "xdm:processingNodes": [
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
}
```

# Processing Flow Timeline Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:processingFlowTimeline](#xdmprocessingflowtimeline) | `object` | Optional | Processing Flow Timeline (this schema) |

## xdm:processingFlowTimeline
### processingFlowTimeline

`xdm:processingFlowTimeline`
* is optional
* type: `object`
* defined in this schema

### xdm:processingFlowTimeline Type

`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| [xdm:flowName](#xdmflowname) | string | Optional |
| [xdm:processingNodes](#xdmprocessingnodes) | array | Optional |


#### xdm:flowName
##### flowName

Name of the processing flow.

`xdm:flowName`
* is optional
* type: `string`

##### xdm:flowName Type
`string`








#### xdm:processingNodes
##### processingNodes

undefined

`xdm:processingNodes`
* is optional
* type: reference


##### xdm:processingNodes Type


Array type: reference

All items must be of the type:
* []() – `#/definitions/time-profiling`



# Time Profiling Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:componentName](#xdmcomponentname) | `string` | `https://ns.adobe.com/xdm/context/experienceevent-processing-flow-timeline#/definitions/time-profiling` |
| [xdm:endTime](#xdmendtime) | `string` | `https://ns.adobe.com/xdm/context/experienceevent-processing-flow-timeline#/definitions/time-profiling` |
| [xdm:serviceGroup](#xdmservicegroup) | `string` | `https://ns.adobe.com/xdm/context/experienceevent-processing-flow-timeline#/definitions/time-profiling` |
| [xdm:startTime](#xdmstarttime) | `string` | `https://ns.adobe.com/xdm/context/experienceevent-processing-flow-timeline#/definitions/time-profiling` |

## xdm:componentName
### componentName

The name of the service/component, for which time information is captured.

`xdm:componentName`
* is optional
* type: `string`
* defined in this schema

### xdm:componentName Type
`string`

## xdm:endTime
### endTime

Execution End time in Date-Time format for the component.

`xdm:endTime`
* is optional
* type: `string`
* defined in this schema

### xdm:endTime Type
`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))


## xdm:serviceGroup
### serviceGroup

An optional attribute, to capture the timeline of a service, at sub-tree level.

`xdm:serviceGroup`
* is optional
* type: `string`
* defined in this schema

### xdm:serviceGroup Type


`string`






## xdm:startTime
### startTime

Execution Start time in Date-Time format for the component.

`xdm:startTime`
* is optional
* type: `string`
* defined in this schema

### xdm:startTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





