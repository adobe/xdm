
# Journey Orchestration Journey Fields Schema

```
https://ns.adobe.com/experience/journeyOrchestration/journey
```

This Fieldgroup will have Common Journey Metadata Fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/journeyOrchestration/journeyOrchestrationJourney.schema.json](adobe/experience/journeyOrchestration/journeyOrchestrationJourney.schema.json) |

## Journey Orchestration Journey Fields Examples

```json
{
  "https://ns.adobe.com/experience/journeyOrchestration/journey": {
    "https://ns.adobe.com/experience/journeyOrchestration/versionID": "f3485959-0a9e-4004-82d9-f11bd6c4585b",
    "https://ns.adobe.com/experience/journeyOrchestration/ID": "fc0b645e-b3e3-4441",
    "https://ns.adobe.com/experience/journeyOrchestration/name": "My Journey",
    "https://ns.adobe.com/experience/journeyOrchestration/description": "My journey description",
    "https://ns.adobe.com/experience/journeyOrchestration/version": "1.0"
  }
}
```

```json
{
  "https://ns.adobe.com/experience/journeyOrchestration/journey": {
    "https://ns.adobe.com/experience/journeyOrchestration/versionID": "f3485959-0a9e-4004-82d9-f11bd6c4585b",
    "https://ns.adobe.com/experience/journeyOrchestration/ID": "fc0b645e-b3e3-4441"
  }
}
```


# Journey Orchestration Journey Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/journeyOrchestration/journey](#httpsnsadobecomexperiencejourneyorchestrationjourney) | `object` | Optional | Journey Orchestration Journey Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/journeyOrchestration/journey
### Journey Orchestration common Journey Fields

`https://ns.adobe.com/experience/journeyOrchestration/journey`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/journey Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/ID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/description`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/name`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/version`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/versionID`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/ID
##### ID

Identifier for the given Journey.

`https://ns.adobe.com/experience/journeyOrchestration/ID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/ID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/description
##### Description

Description of the Journey.

`https://ns.adobe.com/experience/journeyOrchestration/description`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/description Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/name
##### Name

Name of the Journey.

`https://ns.adobe.com/experience/journeyOrchestration/name`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/name Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/version
##### Version

Describes the Journey Version.

`https://ns.adobe.com/experience/journeyOrchestration/version`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/version Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/versionID
##### Version ID

Identifier of the journey version. This id represents the identity of a journey.

`https://ns.adobe.com/experience/journeyOrchestration/versionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/versionID Type


`string`










