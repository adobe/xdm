
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

This Field gives the count , How many times the data is fetched, regardless of the type of source (AEP, custom).

`https://ns.adobe.com/experience/journeyOrchestration/fetchCount`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchCount Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchCustomCount
##### fetchCustomCount

How many times the custom data is fetched from external systems.

`https://ns.adobe.com/experience/journeyOrchestration/fetchCustomCount`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchCustomCount Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchCustomTotalTime
##### fetchCustomTotalTime

Time to fetch the custom data in milliseconds. Remark: this time is computed from the time the engine sends the enrichment event to the enrichment service and receive the response.

`https://ns.adobe.com/experience/journeyOrchestration/fetchCustomTotalTime`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchCustomTotalTime Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchError
##### fetchError

This Field describes the type of error that happens when the data fetch is processed. 

`https://ns.adobe.com/experience/journeyOrchestration/fetchError`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchError Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchErrorCode
##### fetchErrorCode

This Field describes the Code for fetch error. Present if the error has a code, such as an HTTP one. For instance, if the actionExecError is http, the code 404 represents the HTTP 404 error.

`https://ns.adobe.com/experience/journeyOrchestration/fetchErrorCode`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchErrorCode Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchOriginError
##### fetchOriginError

This Field tells if there are any timeout or origin error, If the error comes on a retry:  the OriginError/OriginErrorCode describes the error encountered on the attempt before the retry.

`https://ns.adobe.com/experience/journeyOrchestration/fetchOriginError`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchOriginError Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchOriginErrorCode
##### fetchOriginErrorCode

This Field describes the error code encountered on the attempt before the retry, Error type is being defined by fetchOriginError.

`https://ns.adobe.com/experience/journeyOrchestration/fetchOriginErrorCode`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchOriginErrorCode Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformCount
##### fetchPlatformCount

How many times the data is fetched from Adobe Experience Platform(AEP).

`https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformCount`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformCount Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformTotalTime
##### fetchPlatformTotalTime

The total amount of time taken to fetch the data from Adobe Experience Platform (AEP) in milliseconds.

`https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformTotalTime`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformTotalTime Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchTotalTime
##### fetchTotalTime

This Field describes the total amount of time spent in data fetch in milliseconds during the step processing.

`https://ns.adobe.com/experience/journeyOrchestration/fetchTotalTime`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchTotalTime Type


`integer`








#### https://ns.adobe.com/experience/journeyOrchestration/fetchTypeInError
##### fetchTypeInError

This Field defines if the fetch in error is on the platform or on a custom data source.

`https://ns.adobe.com/experience/journeyOrchestration/fetchTypeInError`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/fetchTypeInError Type


`string`










