
# Adobe ExperienceEvent - Offer details Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/offers
```

Details about offers associated with a message, as sourced primarily from ODS

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/offers.schema.json](adobe/experience/customerJourneyManagement/offers.schema.json) |
## Schema Hierarchy

* Adobe ExperienceEvent - Offer details `https://ns.adobe.com/experience/customerJourneyManagement/offers`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


# Adobe ExperienceEvent - Offer details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:activityID](#xdmactivityid) | `string` | Optional | Adobe ExperienceEvent - Offer details (this schema) |
| [xdm:offerCount](#xdmoffercount) | `integer` | Optional | Adobe ExperienceEvent - Offer details (this schema) |
| [xdm:offerID](#xdmofferid) | `string` | Optional | Adobe ExperienceEvent - Offer details (this schema) |
| [xdm:placementID](#xdmplacementid) | `string` | Optional | Adobe ExperienceEvent - Offer details (this schema) |
| [xdm:propositionID](#xdmpropositionid) | `string` | Optional | Adobe ExperienceEvent - Offer details (this schema) |
| [xdm:propositionTime](#xdmpropositiontime) | `string` | Optional | Adobe ExperienceEvent - Offer details (this schema) |
| [xdm:scopeID](#xdmscopeid) | `string` | Optional | Adobe ExperienceEvent - Offer details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:activityID
### Offer Activity ID

Unique Offer Decision identifier.

`xdm:activityID`
* is optional
* type: `string`
* defined in this schema

### xdm:activityID Type


`string`






## xdm:offerCount
### Offer Count

Count of offers included in the offer proposition.

`xdm:offerCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:offerCount Type


`integer`






## xdm:offerID
### Offer ID

Unique Identifier for Offer.

`xdm:offerID`
* is optional
* type: `string`
* defined in this schema

### xdm:offerID Type


`string`






## xdm:placementID
### Placement ID

Unique Identifier for Offer Placement.

`xdm:placementID`
* is optional
* type: `string`
* defined in this schema

### xdm:placementID Type


`string`






## xdm:propositionID
### Proposition ID

Unique Identifier for Offer Proposition.

`xdm:propositionID`
* is optional
* type: `string`
* defined in this schema

### xdm:propositionID Type


`string`






## xdm:propositionTime
### Proposition Time

Time at which the Offer proposition was generated.

`xdm:propositionTime`
* is optional
* type: `string`
* defined in this schema

### xdm:propositionTime Type


`string`






## xdm:scopeID
### Offer Decision Scope ID

Unique Offer Decison Scope identifier(offer-activity-id+placement-id BASE64 encoded).

`xdm:scopeID`
* is optional
* type: `string`
* defined in this schema

### xdm:scopeID Type


`string`





