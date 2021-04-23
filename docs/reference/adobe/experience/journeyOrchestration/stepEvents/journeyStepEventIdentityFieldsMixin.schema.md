
# Journey Orchestration Step Event Identity Fields Schema

```
https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventIdentityFields
```

This event is in relation with journey and describe the profile Identifiers

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/journeyOrchestration/stepEvents/journeyStepEventIdentityFieldsMixin.schema.json](adobe/experience/journeyOrchestration/stepEvents/journeyStepEventIdentityFieldsMixin.schema.json) |

## Journey Orchestration Step Event Identity Fields Example
```json
{
  "https://ns.adobe.com/experience/journeyOrchestration/profileID": "johndoe@test.com",
  "https://ns.adobe.com/experience/journeyOrchestration/profileNamespace": "email"
}
```

# Journey Orchestration Step Event Identity Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/journeyOrchestration/stepEvents](#httpsnsadobecomexperiencejourneyorchestrationstepevents) | `object` | Optional | Journey Orchestration Step Event Identity Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/journeyOrchestration/stepEvents
### Journey Orchestration Step Event Identity Fields.

`https://ns.adobe.com/experience/journeyOrchestration/stepEvents`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/stepEvents Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/profileID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/profileNamespace`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/profileID
##### Profile ID

Profile identifier identifies the profile sent/used in a journey.Present if the current step is running in the context of a unitary journey. E.g: foo@adobe.com.

`https://ns.adobe.com/experience/journeyOrchestration/profileID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/profileID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/profileNamespace
##### Profile Namespace

This field describes the Namespace referenced by the Profile used in the Journey. Present if the current step is running in the context of a unitary journey. E.g: Email, ECID 

`https://ns.adobe.com/experience/journeyOrchestration/profileNamespace`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/profileNamespace Type


`string`










