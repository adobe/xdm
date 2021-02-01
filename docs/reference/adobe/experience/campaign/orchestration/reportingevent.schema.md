
# User journey reporting event Schema

```
https://ns.adobe.com/experience/campaign/orchestration/reportingevent
```

A marketer intends to track user's interaction with their business and orient their business based on these interactions. For example, if a user visits the bar of the hotel business, it may trigger a beacon event which would then automatically send an immediate offer for the purchase of bar items.
To accomplish this, marketer designs journey and journey versions for its end users.

A journey encapsulates the marketer's intent to engage with the end users.
A journey consists of one or more journey versions where each journey version represents a workflow for the users.
A new user would always enter the latest version of the journey, while old users continue the version on which they currently reside. A user is active on only one of the journey version for the journey.

Each journey version is implemented as a state machine which can contain an entry and an exit step. 
A step is a state in the workflow, where each step has a definition of the actions to be executed when entering the step. 
An action can be an email, SMS, push notifications, etc.

An Event is a trigger coming from a source over HTTP protocol. 
For example, a user entering a hotel lobby can be marked as an Event.

Event rules define when we can move to the next step in this journey version.
The event rules compose flow controls of a journey version.
A step transition can occur by one or more events.
During the processing, we may also need data from external systems, Data entities and Data provider are used to fetch and store data in the journey at runtime. 
This schema (`reportingevent`) represents a data model for capturing events, actions and transitions happening in a journey version.


| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/orchestration/reportingevent.schema.json](adobe/experience/campaign/orchestration/reportingevent.schema.json) |
## Schema Hierarchy

* User journey reporting event `https://ns.adobe.com/experience/campaign/orchestration/reportingevent`
  * [Data Source](../../../../datatypes/data/datasource.schema.md) `https://ns.adobe.com/xdm/data/datasource`
  * [Organizational unit](../../../../datatypes/b2b/orgunit.schema.md) `https://ns.adobe.com/xdm/common/orgunit`
  * [User journey reporting event metrics](reportingeventmetrics.schema.md) `https://ns.adobe.com/experience/campaign/orchestration/reportingeventmetrics`
  * [Journey experience event](experienceevent.schema.md) `https://ns.adobe.com/experience/campaign/orchestration/experienceevent`
  * [external event received](reportingexternalevent.schema.md) `https://ns.adobe.com/experience/campaign/orchestration/reportingexternalevent`


## User journey reporting event Example
```json
{
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:dataEnrichmentSource": {
    "@id": "https://ns.adobe.com/experience/campaign/orchestration/dataenrichmentsource/datasource-123"
  },
  "xdm:dataEntityUID": "https://ns.adobe.com/experience/campaign/orchestration/dataentity/123",
  "xdm:orgUnit": {
    "@id": "https://data.adobe.io/org-apparals-men"
  },
  "xdm:flowControlType": "timer",
  "xdm:flowControlID": "https://ns.adobe.com/experience/campaign/orchestration/flowcontrol/123",
  "xdm:eventMetrics": {
    "https://ns.adobe.com/experience/campaign/orchestrationEnteredJourneyInstance": {
      "xdm:value": 1
    },
    "https://ns.adobe.com/experience/campaign/orchestrationErrorInJourneyInstance": {
      "xdm:value": 1
    }
  },
  "https://ns.adobe.com/experience/campaign/journey": {
    "@id": "https://ns.adobe.com/experience/campaign/orchestration/journey/1234-abc4-1232-afeb-4fff"
  },
  "https://ns.adobe.com/experience/campaign/journeyVersion": {
    "@id": "https://ns.adobe.com/experience/campaign/orchestration/journeyVersion/5132-abc4-1abf-1111-ffff"
  },
  "https://ns.adobe.com/experience/campaign/orchestrationAction": {
    "xdm:actionID": "https://ns.adobe.com/experience/campaign/orchestration/action/123",
    "xdm:actionType": "parameterized_action"
  },
  "https://ns.adobe.com/experience/campaign/orchestrationExternalEvent": {
    "@id": "https://ns.adobe.com/experience/campaign/orchestration/externalevent/1234"
  }
}
```

# User journey reporting event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/journey](#httpsnsadobecomexperiencecampaignjourney) | `object` | **Required** | User journey reporting event (this schema) |
| [https://ns.adobe.com/experience/campaign/journeyVersion](#httpsnsadobecomexperiencecampaignjourneyversion) | `object` | **Required** | User journey reporting event (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationAction](#httpsnsadobecomexperiencecampaignorchestrationaction) | `object` | Optional | User journey reporting event (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestrationExternalEvent](#httpsnsadobecomexperiencecampaignorchestrationexternalevent) | external event received | Optional | User journey reporting event (this schema) |
| [xdm:dataEnrichmentSource](#xdmdataenrichmentsource) | Data Source | Optional | User journey reporting event (this schema) |
| [xdm:dataEntityUID](#xdmdataentityuid) | `string` | Optional | User journey reporting event (this schema) |
| [xdm:eventMetrics](#xdmeventmetrics) | User journey reporting event metrics | Optional | User journey reporting event (this schema) |
| [xdm:flowControlID](#xdmflowcontrolid) | `string` | Optional | User journey reporting event (this schema) |
| [xdm:flowControlType](#xdmflowcontroltype) | `enum` | Optional | User journey reporting event (this schema) |
| [xdm:orgUnit](#xdmorgunit) | Organizational unit | Optional | User journey reporting event (this schema) |
| [xdm:timestamp](#xdmtimestamp) | `string` | **Required** | User journey reporting event (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/campaign/journey
### Journey for users

Journey created by marketer for its users

`https://ns.adobe.com/experience/campaign/journey`
* is **required**
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/journey Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `@id`| string | **Required** |



#### @id
##### Journey unique identifier

The unique identifier of the journey created by the marketer.

`@id`
* is **required**
* type: `string`

##### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))











## https://ns.adobe.com/experience/campaign/journeyVersion
### Journey version

Schema for describing the version of a journey, where version holds the state machine

`https://ns.adobe.com/experience/campaign/journeyVersion`
* is **required**
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/journeyVersion Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `@id`| string | **Required** |



#### @id
##### Journey version identifier

The unique identifier denoting the version of journey on which the entity is active.

`@id`
* is **required**
* type: `string`

##### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))











## https://ns.adobe.com/experience/campaign/orchestrationAction
### Action on step transition

Action taken during a step transition happening for an user in state machine

`https://ns.adobe.com/experience/campaign/orchestrationAction`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationAction Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:actionID`| string | Optional |
| `xdm:actionType`| string | Optional |



#### xdm:actionID
##### Action identifier

Unique identifier denoting the associated action.

`xdm:actionID`
* is optional
* type: `string`

##### xdm:actionID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))








#### xdm:actionType
##### Action Type

The type of action to be performed.

`xdm:actionType`
* is optional
* type: `string`

##### xdm:actionType Type


`string`



##### xdm:actionType Known Values
| Value | Description |
|-------|-------------|
| `scheduled_notification` | This action type allows to specify scheduled notifications and wait for the notifications as incoming events for steps |
| `http_request` | This action type is for a HTTP call on an external system |
| `personalized_action` | This action type describes an action with personalization that will be resolved at runtime for each voyager instance |
| `parameterized_action` | This action type describes an action with parameterization |
| `journey_notification` | This action type is to send notification for another journey |
| `campaign_request` | This action performs REST calls to a campaign instance to write data |
| `messageService_request` | The message service action performs REST calls to campaign instance to send messages with messaging service |









## https://ns.adobe.com/experience/campaign/orchestrationExternalEvent
### external event received

External event received, triggering the state transition

`https://ns.adobe.com/experience/campaign/orchestrationExternalEvent`
* is optional
* type: external event received
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestrationExternalEvent Type


* [external event received](reportingexternalevent.schema.md) – `https://ns.adobe.com/experience/campaign/orchestration/reportingexternalevent`





## xdm:dataEnrichmentSource
### Data Source

Data source used for data enrichment

`xdm:dataEnrichmentSource`
* is optional
* type: Data Source
* defined in this schema

### xdm:dataEnrichmentSource Type


* [Data Source](../../../../datatypes/data/datasource.schema.md) – `https://ns.adobe.com/xdm/data/datasource`





## xdm:dataEntityUID
### Unique identifier of data entity

The identifier for the data entity used for data enrichment

`xdm:dataEntityUID`
* is optional
* type: `string`
* defined in this schema

### xdm:dataEntityUID Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:eventMetrics
### Metrics to be reported

The metrics for actions performed during this observation.

`xdm:eventMetrics`
* is optional
* type: User journey reporting event metrics
* defined in this schema

### xdm:eventMetrics Type


* [User journey reporting event metrics](reportingeventmetrics.schema.md) – `https://ns.adobe.com/experience/campaign/orchestration/reportingeventmetrics`





## xdm:flowControlID
### Unique identifier for the flow control

The identifier of the flow control in a journey version

`xdm:flowControlID`
* is optional
* type: `string`
* defined in this schema

### xdm:flowControlID Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:flowControlType
### Flow control

Flow control in the journey triggered by the event.

`xdm:flowControlType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmflowcontroltype-known-values).

### xdm:flowControlType Known Values
| Value | Description |
|-------|-------------|
| `end` | if the &#39;end&#39; step has been reached, if this step exists |
| `jump` | if a jump has been taken |
| `timer` | if a transition has been applied, implying a scheduler notification |
| `condition` | if a conditional step has been processed |




## xdm:orgUnit
### Organizational Unit

The unit within the organization owning this journey version.

`xdm:orgUnit`
* is optional
* type: Organizational unit
* defined in this schema

### xdm:orgUnit Type


* [Organizational unit](../../../../datatypes/b2b/orgunit.schema.md) – `https://ns.adobe.com/xdm/common/orgunit`





## xdm:timestamp
### Timestamp for reporting event

Time of generation of reporting event

`xdm:timestamp`
* is **required**
* type: `string`
* defined in this schema

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





