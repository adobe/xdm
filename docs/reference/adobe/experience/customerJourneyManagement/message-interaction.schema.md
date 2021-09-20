
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
  * [Adobe ExperienceEvent - Offer details](offers.schema.md) `https://ns.adobe.com/experience/customerJourneyManagement/offers`


## Adobe CJM ExperienceEvent - Message interaction details Examples

```json
{
  "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/interactionType": "subscription",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/tags": [
    "marketing",
    "apparel"
  ],
  "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/label": "adobe.com",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription": {
    "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/subscriptionListID": "daily-news",
    "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/source": "landingPageId",
    "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/sourceType": "internal",
    "https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/subscriptionChoice": "yes"
  }
}
```

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
    "xdm:offerID": "1234",
    "xdm:placementID": "12345",
    "xdm:propositionID": "9898",
    "xdm:offerCount": 5
  }
}
```


# Adobe CJM ExperienceEvent - Message interaction details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/interactionType](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractioninteractiontype) | `enum` | Optional | Adobe CJM ExperienceEvent - Message interaction details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/label](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractionlabel) | `string` | Optional | Adobe CJM ExperienceEvent - Message interaction details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractionoffers) | Adobe ExperienceEvent - Offer details | Optional | Adobe CJM ExperienceEvent - Message interaction details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractionsubscription) | `object` | Optional | Adobe CJM ExperienceEvent - Message interaction details (this schema) |
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
| `subscription` | Subscribe / Unsubscribe to a subscription list. |




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
### Offer Details

Describes offer(s) involved in a message interaction.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers`
* is optional
* type: Adobe ExperienceEvent - Offer details
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/offers Type


* [Adobe ExperienceEvent - Offer details](offers.schema.md) – `https://ns.adobe.com/experience/customerJourneyManagement/offers`





## https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription
### Subscription Details

Describes subscription involved in a message interaction.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/source`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/sourceType`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/subscriptionChoice`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/subscriptionListID`| string | Optional |



#### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/source
##### Source

Source of the Subscription List.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/source`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/source Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/sourceType
##### Source Type

Type of the Source of Subscription List.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/sourceType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractionsubscription-known-values).

##### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/sourceType Known Values
| Value | Description |
|-------|-------------|
| `internal` | Internal for AJO Landing Page |
| `external` | External for Non-AJO Landing Page |






#### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/subscriptionChoice
##### Subscription Choice

Subscription Choice for the Subscription List.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/subscriptionChoice`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomexperiencecustomerjourneymanagementmessageinteractionsubscription-known-values).

##### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/subscriptionChoice Known Values
| Value | Description |
|-------|-------------|
| `yes` | Subscribed to Subscription List |
| `no` | Unsubscribed to Subscription List |
| `pending` | Subscription Pending |
| `unknown` | Subscription Unknown |






#### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/subscriptionListID
##### Subscription List ID

Unique Identifier for Subscription List.

`https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/subscriptionListID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/messageInteraction/subscription/subscriptionListID Type


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





