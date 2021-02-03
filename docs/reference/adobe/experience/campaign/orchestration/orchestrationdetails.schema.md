
# Orchestration Details Schema

```
https://ns.adobe.com/experience/campaign/orchestration/orchestrationdetails
```

Set of attributes that are associated with every orchestration.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | No | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/orchestration/orchestrationdetails.schema.json](adobe/experience/campaign/orchestration/orchestrationdetails.schema.json) |
## Schema Hierarchy

* Orchestration Details `https://ns.adobe.com/experience/campaign/orchestration/orchestrationdetails`
  * [Journey experience event](experienceevent.schema.md) `https://ns.adobe.com/experience/campaign/orchestration/experienceevent`


# Orchestration Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:action](#xdmaction) | `object` | **Required** | Orchestration Details (this schema) |
| [xdm:journey](#xdmjourney) | `object` | **Required** | Orchestration Details (this schema) |
| [xdm:journeyVersion](#xdmjourneyversion) | `object` | **Required** | Orchestration Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:action
### Action associated with a journey

Action that is executed for an entity when reached a step in in the journey state machine.

`xdm:action`
* is **required**
* type: `object`
* defined in this schema

### xdm:action Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:actionID`| string | **Required** |
| `xdm:actionType`| string | Optional |



#### xdm:actionID
##### Action identifier

Unique identifier denoting the associated action.

`xdm:actionID`
* is **required**
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









## xdm:journey
### Journey for an entity

Journey created by marketer for its entities.

`xdm:journey`
* is **required**
* type: `object`
* defined in this schema

### xdm:journey Type


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











## xdm:journeyVersion
### Journey Version for an entity

Schema for describing the version of a journey, where version holds the state machine.

`xdm:journeyVersion`
* is **required**
* type: `object`
* defined in this schema

### xdm:journeyVersion Type


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










