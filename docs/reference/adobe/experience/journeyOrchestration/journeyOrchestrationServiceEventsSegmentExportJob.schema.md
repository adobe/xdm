
# Journey Orchestration service Events: SegmentExportJob Fields Schema

```
https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/segmentExportJob/
```

This event is in relation with journey and Segment Export Job service event fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/journeyOrchestration/journeyOrchestrationServiceEventsSegmentExportJob.schema.json](adobe/experience/journeyOrchestration/journeyOrchestrationServiceEventsSegmentExportJob.schema.json) |

## Journey Orchestration service Events: SegmentExportJob Fields Examples

```json
{
  "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/segmentExportJob": {
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/ID": "12ae3-abe2c-12214-667ab",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/status": "finished",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportSegmentID": "12ae3-abe2c-12214-667ab-aa123",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountTotal": 12000000,
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountRealized": 12000000,
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountFailed": 2000000,
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType": "info"
  }
}
```

```json
{
  "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/segmentExportJob": {
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/ID": "12ae3-abe2c-12214-667ab",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportSegmentID": "12ae3-abe2c-12214-667ab-aa123",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/status": "queued",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType": "info"
  }
}
```

```json
{
  "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/segmentExportJob": {
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/ID": "12ae3-abe2c-12214-667ab",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportSegmentID": "12ae3-abe2c-12214-667ab-aa123",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType": "error",
    "https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCode": "ERROR_INSTANCE_DUPLICATION"
  }
}
```


# Journey Orchestration service Events: SegmentExportJob Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/segmentExportJob](#httpsnsadobecomexperiencejourneyorchestrationserviceeventssegmentexportjob) | `object` | Optional | Journey Orchestration service Events: SegmentExportJob Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/segmentExportJob
### Journey Orchestration Segment Export Job service event fields.

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/segmentExportJob`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/segmentExportJob Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/ID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCode`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountFailed`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountRealized`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountTotal`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportSegmentID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/status`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/ID
##### ID

The identifier of the segment export job triggered.

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/ID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/ID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCode
##### Event Code

The error code indicating the reason for corresponding eventType

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCode`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventCode Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType
##### Event Type

The event type indicating whether it is an error event of info event.

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/eventType Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountFailed
##### Export Count Failed

The number of segments failed while exporting through the job

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountFailed`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountFailed Type


`integer`
* minimum value: `0`
* maximum value: `100000000000`







#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountRealized
##### Export Count Realized

The actual number of segments exported through the job

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountRealized`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountRealized Type


`integer`
* minimum value: `0`
* maximum value: `100000000000`







#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountTotal
##### Export Count Total

The max possible value of segment export job

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountTotal`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportCountTotal Type


`integer`
* minimum value: `0`
* maximum value: `100000000000`







#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportSegmentID
##### Export Segment ID

The identifier of the segment being exported

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportSegmentID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/exportSegmentID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/status
##### Status

The status of segment export job.

`https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/status`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/serviceEvents/status Type


`string`










