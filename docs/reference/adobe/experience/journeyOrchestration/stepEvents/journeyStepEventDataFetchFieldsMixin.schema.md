
# Journey Orchestration Step Data Fetch Fields Schema

```
https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFields
```

Journey Orchestration Data Fetch Field for a Step Event.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFieldsMixin.schema.json](adobe/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFieldsMixin.schema.json) |

## Journey Orchestration Step Data Fetch Fields Example
```json
{
  "https://ns.adobe.com/experience/journeyOrchestration/fetchTotalTime": 300,
  "https://ns.adobe.com/experience/journeyOrchestration/fetchError": "http",
  "https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformTotalTime": 300,
  "https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformCount": 48,
  "https://ns.adobe.com/experience/journeyOrchestration/fetchCustomTotalTime": 434
}
```

# Journey Orchestration Step Data Fetch Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/journeyOrchestration/stepEvents](#httpsnsadobecomexperiencejourneyorchestrationstepevents) | `object` | Optional | Journey Orchestration Step Data Fetch Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/journeyOrchestration/stepEvents
### Journey Step Event Data Fetch Field.

`https://ns.adobe.com/experience/journeyOrchestration/stepEvents`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/stepEvents Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/fetchCount`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/fetchCustomCount`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/fetchCustomTotalTime`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/fetchError`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/fetchErrorCode`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/fetchOriginError`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/fetchOriginErrorCode`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformCount`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformTotalTime`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/fetchTotalTime`| integer | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/fetchTypeInError`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/fetchCount
##### fetchCount

(Deprecated)Sum of number of calls made to custom data source and to AEP to fetch the required details to process a step. E.g: To process a condition step.

`https://ns.adobe.com/experience/journeyOrchestration/fetchCount`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchCount Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchCustomCount
##### fetchCustomCount

Number of calls made to custom data source and to AEP to fetch the required details to process a step. E.g: To process a condition step.

`https://ns.adobe.com/experience/journeyOrchestration/fetchCustomCount`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchCustomCount Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchCustomTotalTime
##### fetchCustomTotalTime

Total time(ms) to fetch all the required fields from the custom data source to execute the step.

`https://ns.adobe.com/experience/journeyOrchestration/fetchCustomTotalTime`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchCustomTotalTime Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchError
##### fetchError

Error condition that prevented Journey Runtime from executing the fetch. E.g: capping on the Data Source API etc, http error.

`https://ns.adobe.com/experience/journeyOrchestration/fetchError`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchError Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchErrorCode
##### fetchErrorCode

Error code corresponding to fetchError.

`https://ns.adobe.com/experience/journeyOrchestration/fetchErrorCode`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchErrorCode Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchOriginError
##### fetchOriginError

In case of http error, the latest API response message. E.g: invalid payload, internal server error.

`https://ns.adobe.com/experience/journeyOrchestration/fetchOriginError`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchOriginError Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchOriginErrorCode
##### fetchOriginErrorCode

Error code corresponding to fetchOriginError.

`https://ns.adobe.com/experience/journeyOrchestration/fetchOriginErrorCode`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchOriginErrorCode Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformCount
##### fetchPlatformCount

Number of calls made to AEP to fetch the required details to process a step.

`https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformCount`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformCount Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformTotalTime
##### fetchPlatformTotalTime

Total time(ms) to fetch all the required fields from the custom data source to execute the step.

`https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformTotalTime`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformTotalTime Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchTotalTime
##### fetchTotalTime

(Deprecated).Sum of fetchPlatformTotalTime and fetchCustomTotalTime.

`https://ns.adobe.com/experience/journeyOrchestration/fetchTotalTime`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchTotalTime Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchTypeInError
##### fetchTypeInError

The source of the first error that occurred while fetching fields to compute a journey step. Set to either Custom or AEP.

`https://ns.adobe.com/experience/journeyOrchestration/fetchTypeInError`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchTypeInError Type


`string`










