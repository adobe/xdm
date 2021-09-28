
# Journey Orchestration Identity Fields Schema

```
https://ns.adobe.com/experience/journeyOrchestration/Identity
```

This event is in relation with journey and describe the profile Identifiers

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/journeyOrchestration/journeyOrchestrationIdentity.schema.json](adobe/experience/journeyOrchestration/journeyOrchestrationIdentity.schema.json) |

## Journey Orchestration Identity Fields Example
```json
{
  "https://ns.adobe.com/experience/journeyOrchestration/profile": {
    "https://ns.adobe.com/experience/journeyOrchestration/ID": "johndoe@test.com",
    "https://ns.adobe.com/experience/journeyOrchestration/namespace": "email"
  }
}
```

# Journey Orchestration Identity Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/journeyOrchestration/profile](#httpsnsadobecomexperiencejourneyorchestrationprofile) | `object` | Optional | Journey Orchestration Identity Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/journeyOrchestration/profile
### Journey Orchestration Identity Fields.

`https://ns.adobe.com/experience/journeyOrchestration/profile`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/journeyOrchestration/profile Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/journeyOrchestration/ID`| string | Optional |
| `https://ns.adobe.com/experience/journeyOrchestration/namespace`| string | Optional |



#### https://ns.adobe.com/experience/journeyOrchestration/ID
##### ID

Profile identifier identifies the profile sent/used in a journey. E.g: foo@adobe.com.

`https://ns.adobe.com/experience/journeyOrchestration/ID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/ID Type


`string`








#### https://ns.adobe.com/experience/journeyOrchestration/namespace
##### Namespace

This field describes the Namespace referenced by the Profile used in the Journey. E.g: Email, ECID 

`https://ns.adobe.com/experience/journeyOrchestration/namespace`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/journeyOrchestration/namespace Type


`string`










