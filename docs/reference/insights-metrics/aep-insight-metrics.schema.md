
# AEP Insights Metrics Schema

```
https://ns.adobe.com/xdm/schemas/aep-insights-metrics
```

Use this Schema to add summary metrics for various AEP services like Activations, Destinations, schema etc.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [insights-metrics/aep-insight-metrics.schema.json](insights-metrics/aep-insight-metrics.schema.json) |
## Schema Hierarchy

* AEP Insights Metrics `https://ns.adobe.com/xdm/schemas/aep-insights-metrics`
  * [XDM Summary Metrics](../classes/summary_metrics.schema.md) `https://ns.adobe.com/xdm/classes/summarymetrics`


## AEP Insights Metrics Example
```json
{
  "xdm:timestamp": "2022-06-06T15:52:25+00:00",
  "xdm:destinationMetrics": {
    "xdm:destinationID": "df8d079d-11eb-466a-9731-6b5948a009e4",
    "xdm:segmentID": "0f4ac2cd-a007-4e18-af2b-20c3dd64a8a2",
    "xdm:flowRunID": "2e7e3e43-f144-49eb-aa03-35cedd2257e2",
    "xdm:flowCompletedTime": "2022-06-06T15:52:25+00:00",
    "xdm:flowRunStatus": "success",
    "xdm:totalProfilesActivated": 340059,
    "xdm:totalIdentitiesSkipped": 21093332,
    "xdm:totalIdentitiesActivated": 12352011
  }
}
```

# AEP Insights Metrics Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:destination](#xdmdestination) | `object` | Optional | AEP Insights Metrics (this schema) |
| [xdm:destinationMetrics](#xdmdestinationmetrics) | `object` | Optional | AEP Insights Metrics (this schema) |
| [xdm:segment](#xdmsegment) | `object` | Optional | AEP Insights Metrics (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:destination

Destination dimension properties.

`xdm:destination`
* is optional
* type: `object`
* defined in this schema

### xdm:destination Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |



#### xdm:ID
##### Destination Identifier

Unique identifier of the Destination.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`











## xdm:destinationMetrics

Captures metrics related to various destinations on AEP.

`xdm:destinationMetrics`
* is optional
* type: `object`
* defined in this schema

### xdm:destinationMetrics Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:flowCompletedTime`| string | Optional |
| `xdm:flowRunID`| string | Optional |
| `xdm:flowRunStatus`| string | Optional |
| `xdm:totalIdentitiesActivated`| number | Optional |
| `xdm:totalIdentitiesSkipped`| number | Optional |
| `xdm:totalProfilesActivated`| number | Optional |



#### xdm:flowCompletedTime
##### Flow Completed Time

The date and time when the flow was completed. It could be blank or NULL if the flow was not successful.

`xdm:flowCompletedTime`
* is optional
* type: `string`

##### xdm:flowCompletedTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:flowRunID
##### Flow Run ID

Flow run identifier to uniquely identify a flow which was triggered when a segment was activated over a destination.

`xdm:flowRunID`
* is optional
* type: `string`

##### xdm:flowRunID Type


`string`








#### xdm:flowRunStatus
##### Flow Run Status

The status of flow run. This could be success/partial-success/failed etc.

`xdm:flowRunStatus`
* is optional
* type: `string`

##### xdm:flowRunStatus Type


`string`








#### xdm:totalIdentitiesActivated
##### Total Identities Activated

Total number of identities activated summarized at the granularity of provided dimensions in this record.

`xdm:totalIdentitiesActivated`
* is optional
* type: `number`

##### xdm:totalIdentitiesActivated Type


`number`








#### xdm:totalIdentitiesSkipped
##### Total Identities Skipped

Total number of identities skipped summarized at the granularity of provided dimensions in this record.

`xdm:totalIdentitiesSkipped`
* is optional
* type: `number`

##### xdm:totalIdentitiesSkipped Type


`number`








#### xdm:totalProfilesActivated
##### Total Profiles Activated

Total number of profiles activated summarized at the granularity of provided dimensions in this record.

`xdm:totalProfilesActivated`
* is optional
* type: `number`

##### xdm:totalProfilesActivated Type


`number`











## xdm:segment

Segment dimension properties.

`xdm:segment`
* is optional
* type: `object`
* defined in this schema

### xdm:segment Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |



#### xdm:ID
##### Segment Identifier

Unique identifier of the segment.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`










