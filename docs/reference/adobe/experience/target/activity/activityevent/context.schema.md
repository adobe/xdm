
# Event Context Schema

```
https://ns.adobe.com/experience/target/activity/activityevent/context
```

Details about the context the event was processed in, activity that processed the request, the experience the user qualified for, etc..

| [Abstract](../../../../../../abstract.md) | [Extensible](../../../../../../extensions.md) | [Status](../../../../../../status.md) | [Identifiable](../../../../../../id.md) | [Custom Properties](../../../../../../extensions.md) | [Additional Properties](../../../../../../extensions.md) | Defined In |
|-------------------------------------------|-----------------------------------------------|---------------------------------------|-----------------------------------------|------------------------------------------------------|----------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/target/activity/activityevent/context.schema.json](adobe/experience/target/activity/activityevent/context.schema.json) |

# Event Context Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:algorithmID](#xdmalgorithmid) | `string` | Optional | Event Context (this schema) |
| [xdm:experienceID](#xdmexperienceid) | `string` | Optional | Event Context (this schema) |
| [xdm:stepID](#xdmstepid) | `string` | Optional | Event Context (this schema) |
| [xdm:trafficType](#xdmtraffictype) | `enum` | Optional | Event Context (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:algorithmID
### Algorithm Identifier

Algorithm identifier denoting used algorithm to select the experience.

`xdm:algorithmID`
* is optional
* type: `string`
* defined in this schema

### xdm:algorithmID Type


`string`






## xdm:experienceID
### Experience Identifier

Experience identifier denoting selected experience.

`xdm:experienceID`
* is optional
* type: `string`
* defined in this schema

### xdm:experienceID Type


`string`






## xdm:stepID
### Step Identifier

Denotes the identifier of the visited activity step.

`xdm:stepID`
* is optional
* type: `string`
* defined in this schema

### xdm:stepID Type


`string`






## xdm:trafficType
### Traffic Type

Denotes traffic type.

`xdm:trafficType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmtraffictype-known-values).

### xdm:trafficType Known Values
| Value | Description |
|-------|-------------|
| `testing` | Testing Traffic |
| `targeted` | Targeted Traffic |



