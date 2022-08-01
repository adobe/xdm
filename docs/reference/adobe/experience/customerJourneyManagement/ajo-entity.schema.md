
# Adobe Profile - AJO Entities Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/ajo
```

Denormalized AJO Entities.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/ajo-entity.schema.json](adobe/experience/customerJourneyManagement/ajo-entity.schema.json) |
## Schema Hierarchy

* Adobe Profile - AJO Entities `https://ns.adobe.com/experience/customerJourneyManagement/ajo`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Adobe Profile - AJO Entities Example
```json
{
  "https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign": {
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/campaignID": "9e3c3315-f2ca-42c0-85d2-6d3e83802b18",
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/campaignVersionID": "f08f3a02-b390-4e24-af16-7fe4a93a05fe",
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/name": "Marketing Campaign",
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/description": "Used for sending email/push messages"
  },
  "https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel": {
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/email": {
      "https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/email/subject": "Hi there, season end sale is here!"
    },
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/push": {
      "https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/push/title": "Hi, You've got a coupon"
    },
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/messageID": "04832ee5-51ff-4706-af8a-a8ff6756308b",
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/messagePublicationID": "04832ee5-51ff-4706-af8a-a8ff6756308b",
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/variantID": "04832ee5-51ff-4706-af8a-a8ff6756308b"
  },
  "https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiement": {
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiement/treatmentID": "123456"
  },
  "https://ns.adobe.com/experience/customerJourneyManagement/ajo/journey": {
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/journey/journeyVersionID": "04832ee5-51ff-4706-af8a-a8ff6756308b"
  }
}
```

# Adobe Profile - AJO Entities Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign](#httpsnsadobecomexperiencecustomerjourneymanagementajocampaign) | `object` | Optional | Adobe Profile - AJO Entities (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel](#httpsnsadobecomexperiencecustomerjourneymanagementajochannel) | `object` | Optional | Adobe Profile - AJO Entities (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiement](#httpsnsadobecomexperiencecustomerjourneymanagementajoexperiement) | `object` | Optional | Adobe Profile - AJO Entities (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/ajo/journey](#httpsnsadobecomexperiencecustomerjourneymanagementajojourney) | `object` | Optional | Adobe Profile - AJO Entities (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign
### AJO Campaign Entity

AJO Campaign Entity Specific Fields

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/campaignID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/campaignVersionID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/description`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/name`| string | Optional |



#### https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/campaignID
##### AJO Campaign ID

AJO Campaign ID. Keeps unchanged even after republishing.

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/campaignID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/campaignID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/campaignVersionID
##### AJO Campaign Version ID

AJO Campaign Version ID. Changes on republishing. Represents immutable version of campaign.

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/campaignVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/campaignVersionID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/description
##### AJO Campaign Description

AJO Campaign Description.

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/description`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/description Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/name
##### AJO Campaign Name

AJO Campaign Name.

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/name`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/ajo/campaign/name Type


`string`











## https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel
### AJO Channel/Message Entity

AJO Channel/Message Entity Specific Fields. Denormalized on variantId

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/email`| object | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/messageID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/messagePublicationID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/push`| object | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/variantID`| string | Optional |



#### https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/email
##### Email Specific Fields

Email Specific Fields

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/email`
* is optional
* type: `object`

##### https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/email Type

Unknown type `object`.

```json
{
  "title": "Email Specific Fields",
  "type": "object",
  "description": "Email Specific Fields",
  "properties": {
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/email/subject": {
      "title": "Email Subject",
      "type": "string",
      "description": "Email subject, non-personalized"
    }
  },
  "simpletype": "`object`"
}
```







#### https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/messageID
##### Message ID

Message ID. Does not change when message is edited.

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/messageID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/messageID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/messagePublicationID
##### Message Publication ID

Message Publication ID. Represents a frozen/published version of message.

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/messagePublicationID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/messagePublicationID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/push
##### Push Specific Fields

Push Specific Fields.

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/push`
* is optional
* type: `object`

##### https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/push Type

Unknown type `object`.

```json
{
  "title": "Push Specific Fields",
  "type": "object",
  "description": "Push Specific Fields.",
  "properties": {
    "https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/push/title": {
      "title": "Push Title",
      "type": "string",
      "description": "Push Title, non-personalized"
    }
  },
  "simpletype": "`object`"
}
```







#### https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/variantID
##### Channel&#39;s variant ID

Is not frozen and might remain same between different versions of message publication.

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/variantID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/ajo/channel/variantID Type


`string`











## https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiement
### AJO Experiment Entity Specific Fields

AJO Experiment Entity Specific Fields

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiement`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiement Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiment/experimentId`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiment/treatmentID`| string | Optional |



#### https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiment/experimentId
##### Experiment ID

This along with treatmentId has one to one mapping with messageID

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiment/experimentId`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiment/experimentId Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiment/treatmentID
##### Treatment ID

This along with experimentId has one to one mapping with messageID

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiment/treatmentID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/ajo/experiment/treatmentID Type


`string`











## https://ns.adobe.com/experience/customerJourneyManagement/ajo/journey
### AJO Journey Entity

AJO Journey Entity Specific Fields

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/journey`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/ajo/journey Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/customerJourneyManagement/ajo/journey/journeyVersionID`| string | Optional |



#### https://ns.adobe.com/experience/customerJourneyManagement/ajo/journey/journeyVersionID
##### Journey Version ID

Represents a frozen version of a Journey

`https://ns.adobe.com/experience/customerJourneyManagement/ajo/journey/journeyVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/ajo/journey/journeyVersionID Type


`string`










