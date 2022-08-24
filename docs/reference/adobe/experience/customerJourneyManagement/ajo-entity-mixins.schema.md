
# AJO Entity Fields Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/entities
```

A set of meta-data fields related to various AJO entities which are related to message sent to profile.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/ajo-entity-mixins.schema.json](adobe/experience/customerJourneyManagement/ajo-entity-mixins.schema.json) |
## Schema Hierarchy

* AJO Entity Fields `https://ns.adobe.com/experience/customerJourneyManagement/entities`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [channelDetails.schema](channelDetails.schema.md) `https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails`


## AJO Entity Fields Example
```json
{
  "https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign": {
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignID": "9e3c3315-f2ca-42c0-85d2-6d3e83802b18",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignVersionID": "f08f3a02-b390-4e24-af16-7fe4a93a05fe",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/name": "Marketing Campaign",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/description": "Used for sending email/push messages",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignActionID": "93rc3315-f2ca-42c0-85d2-6d3e83802b18"
  },
  "https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails": {
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails/email": {
      "https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails/email/subject": "Hi there, season end sale is here!"
    },
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails/push": {
      "https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails/push/title": "Hi, You've got a coupon"
    },
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails/messageID": "04832ee5-51ff-4706-af8a-a8ff6756308b",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails/baseMessageID": "04832ee5-51ff-4706-af8a-a8ff6756308b",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails/messagePublicationID": "04832ee5-51ff-4706-af8a-a8ff6756308b",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails/variantID": "04832ee5-51ff-4706-af8a-a8ff6756308b",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails/channel": {
      "@id": "https://ns.adobe.com/xdm/channels/email"
    },
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails/template": "Hi {{person.firstName}}",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails/messagePublishedAt": "2021-06-25T15:52:25+00:00"
  },
  "https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment": {
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/treatmentID": "123456",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/experimentID": "04832ee5-51ff-4706-af8a-a8ff6756sdfd",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/experimentName": "Hero page experiment",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/treatmentName": "The first treatment"
  },
  "https://ns.adobe.com/experience/customerJourneyManagement/entities/journey": {
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyVersionID": "04832ee5-51ff-4706-af8a-a8ff6756308b",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyName": "Marketing Test Journey",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyID": "0879238rf-51ff-4706-af8a-a8ff6756308b",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyActionName": "Email 100Kb Message",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyActionID": "04832ee5-51ff-4706-af8a-dsff6756308b",
    "https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyNameAndVersion": "Email 100Kb Message (1b)"
  }
}
```

# AJO Entity Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign](#httpsnsadobecomexperiencecustomerjourneymanagemententitiescampaign) | `object` | Optional | AJO Entity Fields (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails](#httpsnsadobecomexperiencecustomerjourneymanagemententitieschanneldetails) | channelDetails.schema | Optional | AJO Entity Fields (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment](#httpsnsadobecomexperiencecustomerjourneymanagemententitiesexperiment) | `object` | Optional | AJO Entity Fields (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/entities/journey](#httpsnsadobecomexperiencecustomerjourneymanagemententitiesjourney) | `object` | Optional | AJO Entity Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign
### AJO Campaign Entity

AJO Campaign Entity Specific Fields

`https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignActionID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignVersionID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/description`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/name`| string | Optional |



#### https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignActionID
##### Campaign Action ID

Action ID of the Campaign that triggered this message execution.

`https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignActionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignActionID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignID
##### AJO Campaign ID

AJO Campaign ID. Remains unchanged even after republishing.

`https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignVersionID
##### AJO Campaign Version ID

AJO Campaign Version ID. Changes on republishing. Represents immutable version of campaign.

`https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/campaignVersionID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/description
##### AJO Campaign Description

AJO Campaign Description.

`https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/description`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/description Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/name
##### AJO Campaign Name

AJO Campaign Name.

`https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/name`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/campaign/name Type


`string`











## https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails
### AJO Channel/Message Entity

AJO Channel/Message Entity Specific Fields. Denormalized on variantId

`https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails`
* is optional
* type: channelDetails.schema
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails Type


* [channelDetails.schema](channelDetails.schema.md) – `https://ns.adobe.com/experience/customerJourneyManagement/entities/channelDetails`





## https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment
### AJO Experiment Entity Specific Fields

AJO Experiment Entity Specific Fields

`https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/experimentId`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/experimentName`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/treatmentID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/treatmentName`| string | Optional |



#### https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/experimentId
##### Experiment ID

This along with treatmentId has one to one mapping with messageID

`https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/experimentId`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/experimentId Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/experimentName
##### Experiment Name

Name of the experiment

`https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/experimentName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/experimentName Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/treatmentID
##### Treatment ID

This along with experimentId has one to one mapping with messageID

`https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/treatmentID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/treatmentID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/treatmentName
##### Treatment Name

Name of the treatment

`https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/treatmentName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/experiment/treatmentName Type


`string`











## https://ns.adobe.com/experience/customerJourneyManagement/entities/journey
### AJO Journey Entity

AJO Journey Entity Specific Fields

`https://ns.adobe.com/experience/customerJourneyManagement/entities/journey`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyActionID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyActionName`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyID`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyName`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyNameAndVersion`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyVersionID`| string | Optional |



#### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyActionID
##### Journey Action ID

Represents the Journey Action ID

`https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyActionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyActionID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyActionName
##### Journey Action Name

Represents the Journey Label

`https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyActionName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyActionName Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyID
##### Journey ID

Represents the journey ID

`https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyID Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyName
##### Journey Name

Represents the journey name

`https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyName`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyName Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyNameAndVersion
##### Journey Name and Version

Represents the concatenated values of Journey Name and Version

`https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyNameAndVersion`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyNameAndVersion Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyVersionID
##### Journey Version ID

Represents a frozen version of a Journey

`https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyVersionID`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/entities/journey/journeyVersionID Type


`string`










