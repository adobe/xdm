
# Adobe CJM ExperienceEvent - Message interaction details Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/message-interaction
```

Describes interaction made by the profile on the message.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/message-interaction.schema.json](adobe/experience/customerJourneyManagement/message-interaction.schema.json) |
## Schema Hierarchy

* Adobe CJM ExperienceEvent - Message interaction details `https://ns.adobe.com/experience/customerJourneyManagement/message-interaction`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Adobe CJM ExperienceEvent - Message interaction details Example
```json
{
  "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/interactionType": "click",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/urlID": "123",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/messageInteraction/trackingType": "offer",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/tags": [
    "marketing",
    "apparel"
  ],
  "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/label": "adobe.com",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers": {
    "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/offerID": "1234",
    "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/placementID": "12345",
    "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/propositionID": "9898",
    "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/offerCount": 5
  }
}
```

# Adobe CJM ExperienceEvent - Message interaction details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/interactionType](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractioninteractiontype) | `enum` | Optional | Adobe CJM ExperienceEvent - Message interaction details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/label](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractionlabel) | `string` | Optional | Adobe CJM ExperienceEvent - Message interaction details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractionoffers) | `object` | Optional | Adobe CJM ExperienceEvent - Message interaction details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/tags](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractiontags) | `string[]` | Optional | Adobe CJM ExperienceEvent - Message interaction details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/trackingType](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractiontrackingtype) | `string` | Optional | Adobe CJM ExperienceEvent - Message interaction details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/urlID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractionurlid) | `string` | Optional | Adobe CJM ExperienceEvent - Message interaction details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/interactionType
### Interaction Type

Specify action made by user on a message.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/interactionType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractioninteractiontype-known-values).

### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/interactionType Known Values
| Value | Description |
|-------|-------------|
| `click` | Message link clicked. |
| `open` | Message opened. |
| `unsubscribe` | Unsubscribed from messages. |
| `spam_complaint` | Message is marked as spam by the user. |




## https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/label
### Tracker URL Label

Human-Friendly label.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/label`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/label Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers
### Offer details

Describes offer(s) involved in a message interaction.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/offerCount`| integer | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/offerID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/placementID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/propositionID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/propositionTime`| string | Optional |



#### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/offerCount
##### Offer Count

Count of offers included in the offer proposition.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/offerCount`
* is optional
* type: `integer`

##### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/offerCount Type


`integer`








#### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/offerID
##### Offer ID

Unique Identifier for Offer.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/offerID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/offerID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/placementID
##### Placement ID

Unique Identifier for Offer Placement.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/placementID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/placementID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/propositionID
##### Proposition ID

Unique Identifier for Offer Proposition.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/propositionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/propositionID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/propositionTime
##### Proposition Time

Time at which the Offer proposition was generated.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/propositionTime`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers/propositionTime Type


`string`











## https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/tags
### Link Tags

The tags present on this link.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/tags`
* is optional
* type: `string[]`

* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/tags Type


Array type: `string[]`

All items must be of the type:
`string`









## https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/trackingType
### URL Tracking Type

The tracking type of the URL. It may be `subscription`, or a user-defined category.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/trackingType`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/trackingType Type


`string`



### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/trackingType Known Values
| Value | Description |
|-------|-------------|




## https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/urlID
### Tracker URL ID

Unique Identifier of the URL clicked by the user.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/urlID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/urlID Type


`string`





