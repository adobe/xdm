
# Journey Orchestration common Journey Fields Schema

```
https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyFields
```

This Mixin will have Common Journey Metadata Fields

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/journeyOrchestration/stepEvents/journeyStepEventJourneyFieldsMixin.schema.json](adobe/experience/journeyOrchestration/stepEvents/journeyStepEventJourneyFieldsMixin.schema.json) |

## Journey Orchestration common Journey Fields Example
```json
{
  "https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID": "f3485959-0a9e-4004-82d9-f11bd6c4585b",
  "https://ns.adobe.com/experience/journeyOrchestration/journeyID": "fc0b645e-b3e3-4441"
}
```

# Journey Orchestration common Journey Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/journeyOrchestration/stepEvents](#httpsnsadobecomexperiencejourneyorchestrationstepevents) | `object` | Optional | Journey Orchestration common Journey Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/journeyOrchestration/stepEvents
### Journey Orchestration common Journey Fields

`https://ns.adobe.com/experience/journeyOrchestration/stepEvents`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/stepEvents Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/description`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/journeyID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/name`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/version`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/description
##### description

Description of the Journey.

`https://ns.adobe.com/experience/journeyOrchestration/description`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/description Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/journeyID
##### journeyID

Identifier for the given Journey.

`https://ns.adobe.com/experience/journeyOrchestration/journeyID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/journeyID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID
##### journeyVersionID

Id of the journey version. This id represents the identity of a journey.

`https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/name
##### name

Name of the Journey.

`https://ns.adobe.com/experience/journeyOrchestration/name`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/name Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/version
##### version

Describes the Journey Version.

`https://ns.adobe.com/experience/journeyOrchestration/version`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/version Type


`string`










